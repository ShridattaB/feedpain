import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../Card/Card";
import GoogleMap from "../../Map/GoogleMap";

export default function AboutUs() {
  return (
    <Grid container style={{ height: "inherit" }}>
      <Grid item style={{ width: "50%" }}>
        <CustomCard className="about-us">
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
        </CustomCard>
        <br />
        <CustomCard className="about-us">
          <Typography variant="body2">
            <br />
            Survy No.80,
            <br /> Pune-Mumbai Bypass Highway,
            <br /> Tathawade, Pune, Maharashtra 411033
          </Typography>
          <br />
          <Typography variant="h7">Mobile No: 789986006</Typography>
          <br />
          <Typography variant="h7">Email: feedpain@yopmail.com</Typography>
          <br />
          <br />
        </CustomCard>
      </Grid>
      <Grid item style={{ height: "inherit", width: "50%" }}>
        <GoogleMap />
      </Grid>
    </Grid>
  );
}
