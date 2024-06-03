import { Avatar, AvatarGroup, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

export default function ImageInput({
  id,
  name,
  error,
  helperText,
  value = null,
  imageUrl,
  multiple,
}) {
  const [image, setImage] = useState(value && URL.createObjectURL(value));
  const onImageChange = (event) => {
    if (!multiple && event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    } else if (event.target.files && event.target.files.length) {
      const selectedImage = [];
      for (let i = 0; i < event.target.files.length; i++)
        selectedImage.push(URL.createObjectURL(event.target.files[i]));
      setImage(selectedImage);
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
        multiple={multiple}
        accept="image/gif, image/jpeg, image/png"
        onChange={onImageChange}
      />
      {multiple && image?.length ? (
        <AvatarGroup
          max={4}
          htmlFor={id + `-file`}
          component="label"
          style={{ cursor: "pointer" }}
          sx={{
            "& .MuiAvatar-root": {
              height: "60px",
              width: "60px",
              boxShadow: `${
                error
                  ? "rgb(255 4 75 / 85%) 0px 2px 10px 0px"
                  : "0px 2px 10px 0px #0265848c"
              }`,
            },
          }}
        >
          {image?.length &&
            image.map((item, index) => (
              <Tooltip key={index} title={item.index}>
                <Avatar key={index} alt={item.index} src={item} />
              </Tooltip>
            ))}
        </AvatarGroup>
      ) : (
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
          src={image || imageUrl || "/images/avatars/1.png"}
        />
      )}

      {(error || helperText) && (
        <Typography
          style={{
            color: `${helperText ? "" : "#d32f2f"}`,
            marginTop: "4px",
            textTransform: "capitalize",
          }}
          fontSize={"small"}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
}
