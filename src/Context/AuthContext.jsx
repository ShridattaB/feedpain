import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Routes, useLocation, useNavigate } from "react-router-dom";
import { getRoutes } from "../Router";
import { routeList } from "../Router/routeList";
import { getUserData } from "../Utils";

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};
const AuthContext = createContext(defaultProvider);
function AuthProvider() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (data) => {
    setLoading(true);
    axios
      .post("/auth/sign-in", {
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        const {
          data: { message, value },
        } = res;
        localStorage.setItem("accessToken", value);
        setUser(getUserData());
      });
  };
  const handleLogout = () => {
    localStorage.clear();
    setUser({});
    navigate("/");
  };
  useEffect(() => {
    if (user.role) {
      const route = routeList.filter((route) => route.role.includes(user.role));
      setRoutes(route);
      const path = user.role ? `${user.role.toLowerCase()}/home` : "/";
      if (location.pathname !== "/" + path) {
        navigate(path);
        window && window.location.reload();
      }
    } else {
      const token = localStorage.getItem("accessToken");

      if (token) {
        setUser(getUserData());
        return;
      }
      const route = routeList.filter((route) => !route.role.length);
      setRoutes(route);
    }
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
    return () => {};
  }, [user]);

  useEffect(() => {}, [routes]);
  useEffect(() => {
    // if (!loading !== loading) setLoading(true);
  }, [location.pathname]);
  const value = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {<Routes>{!loading && getRoutes(routes, user.role)}</Routes>}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
