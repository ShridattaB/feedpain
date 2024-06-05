import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
export default function App() {
  const theme = createTheme();
  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { response } = error;
        if (response)
          switch (response.status) {
            case 403:
              return;
              localStorage.clear();
              window.location("/");

              break;

            default:
              break;
          }
        if (error.code === "ERR_NETWORK")
          toast("Error:" + error.message, { position: "top-right" });
        else return Promise.reject(error);
      }
    );
    axios.defaults.baseURL = "http://localhost:8083";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider />
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}
