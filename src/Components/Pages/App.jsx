import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import axios from "axios";
export default function App() {
  useEffect(() => {
    axios.defaults.baseURL = "http://192.168.1.6:8083";
  }, []);
  return (
    <BrowserRouter>
      <AuthProvider />
    </BrowserRouter>
  );
}
