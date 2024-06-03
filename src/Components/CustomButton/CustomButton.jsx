import { Button } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const CustomButton = ({ onClick, label, type }) => {
  return (
    <Button onClick={onClick} type={type}>
      {label}
    </Button>
  );
};

export default CustomButton;
