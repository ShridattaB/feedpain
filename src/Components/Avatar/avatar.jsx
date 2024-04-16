// ** React Imports
import { forwardRef } from "react";

// ** MUI Imports
import MuiAvatar from "@mui/material/Avatar";
import { lighten, useTheme } from "@mui/material/styles";

const Avatar = forwardRef((props, ref) => {
  // ** Props
  const { sx, src, skin, color } = props;

  // ** Hook
  const theme = useTheme();

  const getAvatarStyles = (skin, skinColor) => {
    let avatarStyles;
    avatarStyles = {
      color:'#696CFF',
      backgroundColor: 'rgba(105, 108, 255, 0.16)',
    };
     

    return avatarStyles;
  };

  const colors = {
    primary: getAvatarStyles(skin, "primary"),
    secondary: getAvatarStyles(skin, "secondary"),
    success: getAvatarStyles(skin, "success"),
    error: getAvatarStyles(skin, "error"),
    warning: getAvatarStyles(skin, "warning"),
    info: getAvatarStyles(skin, "info"),
  };

  return (
    <MuiAvatar
      ref={ref}
      {...props}
      sx={!src && skin && color ? Object.assign(colors[color], sx) : sx}
    />
  );
});
Avatar.defaultProps = {
  skin: "filled",
  color: "primary",
};

export default Avatar;
