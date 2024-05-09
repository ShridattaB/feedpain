import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function App() {
  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.code === "ERR_NETWORK")
          toast("Error:" + error.message, { position: "top-right" });
        else return Promise.reject(error);
      }
    );
    axios.defaults.baseURL = "http://localhost:8083";
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider />
      <Toaster />
    </BrowserRouter>
  );
}
