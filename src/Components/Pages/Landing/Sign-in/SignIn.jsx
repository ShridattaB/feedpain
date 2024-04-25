import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { useAuth } from "../../../../hooks/useAuth";
import InputText from "../../../Form/InputText/InputText";
import validation from "../validation";
import { isEmpty } from "../../../../Utils";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [error, setError] = React.useState({});
  const { login } = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    setError({});
    const data = new FormData(event.currentTarget);
    const err=validation(data) 
    setError(err);
    if(isEmpty(err))
    login(data)
  };
 

  return (
    <Grid
      container
      spacing={4}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
      className="sign-in"
    >
      <Grid item sm={4}></Grid>
      <Grid item sm={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputText
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={error.email}
              helperText={error.email} 
            />
            <InputText
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={error.password}
              helperText={error.password} 
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
