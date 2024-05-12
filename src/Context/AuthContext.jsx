import React, { createContext, useEffect, useRef, useState } from "react";
import { Routes, useLocation, useNavigate } from "react-router-dom";
import { getRoutes } from "../Router";
import { routeList } from "../Router/routeList";
import { getUserData } from "../Utils";
import axios from "axios";

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
  const handleLogin = (data) => {
    setLoading(true);
    axios.post("/role/save", {
      email: data.get("email"),
      password: data.get("password"),
    });
    // localStorage.setItem(
    //   "accessToken",
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOiIiLCJyb2xlIjoiQWRtaW4ifQ.gtK1SEC1PZ2DrLBc27l4d8XubjXd01r4gp_G-f1uTsw"
    // );
    // setUser(getUserData());
    // } else {
    //   localStorage.setItem(
    //     "accessToken",
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOiIiLCJyb2xlIjoiVXNlciJ9.5xzzJaibTrUOuhwxiHu2Jc-WMiACgzzhyCF2jA0ogWU"
    //   );
    //   setUser(getUserData());
    // }
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
      navigate(user.role ? `${user.role.toLowerCase()}/home` : "/");
    } else {
      const token = localStorage.getItem("accessToken");

      if (token) {
        setUser(getUserData());
        return;
      }
      const route = routeList.filter((route) => !route.role.length);
      setRoutes(route);
    }
    return () => {};
  }, [user]);
   
  useEffect(() => {
    setLoading(false);
  }, [routes]);

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
