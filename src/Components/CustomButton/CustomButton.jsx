import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ onClick, label, type, children, varient, startIcon, style = {} }) => {
  return (
    <Button onClick={onClick} type={type} varient={varient} style={{ backgroundColor: "#026584", color: '#fff', paddingInline: '10px', ...style }} startIcon={startIcon || null}>
      {label || children}
    </Button >
  );
};

export default CustomButton;
