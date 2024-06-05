import React from "react";

// ** MUI Imports
import MuiChip from "@mui/material/Chip";
import UseBgColor from "../../hooks/useBgColor";

const CustomChip = (props) => {
  const colors = UseBgColor();
  return (
    <MuiChip
      variant="filled"
      {...props}
      sx={props.color && Object.assign(colors[props.color])}
      label={props.children}
    />
  );
};

export default CustomChip;
