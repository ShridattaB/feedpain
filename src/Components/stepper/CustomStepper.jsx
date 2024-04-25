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

import React, { useRef, useState } from "react";
import "./CustomStepper.css";
export default function CustomStepper({ stepperData, handleSubmit }) {
  const { steps, data,  title } = stepperData;
  const [step, setStep] = useState(0);
  const formRef = useRef(null);
  const renderContent = () => {
    return (
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          alignItems: "center",
          textAlign: "center",
          height: "100%",
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
      component="form" 
      noValidate
      ref={formRef}
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
          <Button
            onClick={(e) => {
              
              if (handleSubmit(formRef, step + 1) && totalSteps !== step) setStep(step + 1);
            }}
          >
            {totalSteps === step ? "Submit" : "Next"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
