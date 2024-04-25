import { Avatar, Typography } from "@mui/material";
import React, { useState } from "react";

export default function ImageInput({ id, name, error, helperText, value=null }) { 
  const [image, setImage] = useState(value && URL.createObjectURL(value)); 
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        id={id + `-file`}
        style={{ display: "none" }}
        name={name} 
        accept="image/gif, image/jpeg, image/png"
        onChange={onImageChange}
      />
      <Avatar
        component="label"
        style={{
          height: "60px",
          width: "60px",
          boxShadow: `${
            error
              ? "rgb(255 4 75 / 85%) 0px 2px 10px 0px"
              : "0px 2px 10px 0px #0265848c"
          }`,
        }}
        htmlFor={id + `-file`}
        src={image || "/images/avatars/1.png"}
      />
      {error && (
        <Typography
          style={{ color: "#d32f2f", marginTop: "4px" }}
          fontSize={"small"}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
}
