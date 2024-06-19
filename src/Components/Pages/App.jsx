import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import axiosConfig from "./../../Utils/axios.config";
export default function App() {
  const theme = createTheme();
  useEffect(() => {
    axiosConfig()
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
