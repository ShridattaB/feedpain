import React from "react"; 
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext"; 
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider/> 
    </BrowserRouter>
  );
}
