import {
  Box,
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";

import React, { useState } from "react";
import "./CustomStepper.css"
export default function CustomStepper({ stepperData }) {
  const { steps, data, action, title } = stepperData;
  const [step, setStep] = useState(0);

  const renderContent = () => {
    return (
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          alignItems: "center",
          textAlign: "center",
          height:"100%"
        }}
      >
        {data[step]}
      </Box>
    );
  };
 

  const totalSteps = steps.length - 1;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        variant="h5"
        className="title"
        align="center"
        style={{ marginBottom: "20px" }}
      >
        {title}
      </Typography>
      <Stepper activeStep={step} alternativeLabel style={{ width: "100%" }}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>
                <Typography>{step.title}</Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="content">{renderContent()}</div>
      <Grid container justifyContent={"space-between"} style={{ width: "80%" }}>
        <Grid item>
          {step > 0 && <Button onClick={(e) => setStep(step - 1)}>Back</Button>}
        </Grid>
        <Grid item>
          {totalSteps === step ? (
            action
          ) : (
            <Button onClick={(e) => setStep(step + 1)}>Next</Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
