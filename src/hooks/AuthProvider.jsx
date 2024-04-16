import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ({ children }) {
    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname,"location.pathname")
    },[location.pathname])
  return <>{children}</>;
}
