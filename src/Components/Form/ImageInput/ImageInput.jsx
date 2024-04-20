import { Avatar } from "@mui/material";
import React from "react"; 

export default function ImageInput({ id, name }) {
  return (
    <>
      <input
        type="file"
        id={id + `-file`}
        style={{ display: "none" }}
        name={name}
      /> 
      <Avatar component="label"  style={{height:"60px", width:"60px",boxShadow:"0px 2px 10px 0px #0265848c"}} htmlFor={id + `-file`} src="/images/avatars/1.png" />
    </>
  );
}
