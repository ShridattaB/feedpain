// import PropTypes from "prop-types";
import "./header.css";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import { useLocation, useNavigate } from "react-router-dom";
import { user, admin, visitor } from "./menuList";
import { getUserRole } from "./../../../Utils/index";
import { IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

export default function Header({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = useState(visitor);
  const location = useLocation();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  };
  const userRole = getUserRole();
  useEffect(() => {
    switch (userRole) {
      case "Admin":
        setMenu(admin);
        break;
      case "User":
        setMenu(user);
        break;
      default:
        setMenu(visitor);
        break;
    }
  }, [localStorage.getItem("accessToken")]);
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <img
                src={
                  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {menu.right.map((menu) => (
                  <MenuItem
                    selected={location.pathname.replace("/", "") === menu.path}
                    onClick={() => redirectTo(menu.path)}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {menu.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
              {menu.left.map((menu) => (
                <MenuItem
                  onClick={() => redirectTo(menu.path)}
                  selected={location.pathname.replace("/", "") === menu.path}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="body2" color="text.primary">
                    {menu.title}
                  </Typography>
                </MenuItem>
              ))}
              {userRole && (
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                  selected={location.pathname.replace("/", "") === menu.path}
                  onClick={(e) => {
                    localStorage.clear();
                    redirectTo("/");
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    <PowerSettingsNewIcon />
                  </Typography>
                </MenuItem>
              )}
            </Box>
            {/* Mobile */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  {menu.right.map((menu) => (
                    <MenuItem onClick={(e) => redirectTo(menu.path)}>
                      {menu.title}
                    </MenuItem>
                  ))}

                  <Divider />
                  {menu.left.map((menu) => (
                    <MenuItem>
                      <Button
                        sx={{ width: "100%" }}
                        onClick={(e) => redirectTo(menu.path)}
                      >
                        {menu.title}
                      </Button>
                    </MenuItem>
                  ))}

                  {userRole && (
                    <MenuItem>
                      <Button
                        sx={{ width: "100%" }}
                        onClick={(e) => {
                          localStorage.clear();
                          redirectTo("/");
                        }}
                      >
                        <PowerSettingsNewIcon />{" "}
                      </Button>
                    </MenuItem>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
