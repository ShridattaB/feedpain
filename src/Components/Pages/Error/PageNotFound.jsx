// ** Next Import
import { Link } from "react-router-dom";

import "./error.css";
// ** MUI Components
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { Height } from "@mui/icons-material";

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const Img = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  marginTop: theme.spacing(4),
}));

export default function PageNotFound() {
  // ** Hooks
  const theme = useTheme();

  return (
    <Box
      className="content-center"
      style={{
        backgroundImage: `url(/images/pages/page-misc-error-${theme.palette.mode}.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain, cover",
        height: "100%",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
        className="error-box"
      >
        <BoxWrapper sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Page Not Found :(
          </Typography>
          <Typography sx={{ mb: 6, color: "text.secondary" }}>
            Oops! 😖 The requested URL was not found on this server.
          </Typography>
          <Button to="/" component={Link} variant="contained">
            Back to Home
          </Button>
        </BoxWrapper>
        <Img
          width="500"
          alt="error-illustration"
          src={`/images/pages/page-misc-error-${theme.palette.mode}.png`}
        />
      </Box>
    </Box>
  );
}
