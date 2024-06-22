import { Grid, Typography, styled } from "@mui/material";
import React from "react";
import CustomCard from "../../Card/Card";
import GoogleMap from "../../Map/GoogleMap";

export default function AboutUs() {
  const StyledGrid = styled(Grid)(({ theme }) => ({
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    }
  }))
  const StyledCustomCard = styled(CustomCard)(({ theme }) => ({
    height: "inherit", padding: '0px',
    [theme.breakpoints.down("md")]: {
      width: "318px"
    }
  }))
  return (
    <Grid container style={{ height: "inherit" }}>
      <StyledGrid item   >
        <div style={{ padding: '48px' }}>
          <Typography variant="h5">
            Jayawant Shikshan Prasarak Mandal
          </Typography>
          <Typography variant="body1">
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jayawant Shikshan Prasarak Mandal
            (JSPM) and The Shetkari Shikshan Mandal Sangli, Pune (TSSM) have
            been established with the objective of creating centres of
            excellence for education.
          </Typography>
        </div>
        <div style={{ padding: '48px' }}>
          <Typography variant="body2">
            Survy No.80,
            <br /> Pune-Mumbai Bypass Highway,
            <br /> Tathawade, Pune, Maharashtra 411033
          </Typography>
          <br />
          <Typography variant="h7">Mobile No: 789986006</Typography>
          <br />
          <Typography variant="h7">Email: feedpain@yopmail.com</Typography>
          <br /></div>
      </StyledGrid>
      <Grid item style={{ height: "calc(100% - 20px)" }} >
        <StyledCustomCard className="about-us"  >
          <GoogleMap height="100%" />
        </StyledCustomCard>
      </Grid>
    </Grid>
  );
}
