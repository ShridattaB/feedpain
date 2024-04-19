import {
  Box,
  CardActions,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react"; 

export default function CustomStepper({ stepperData }) {
  const { steps, data } = stepperData;
  const [step, setStep] = useState(0);

  const renderContent = () => {
    return <form>{data[step]}</form>;
  };
  const Content = styled("div")(() => ({
    margin:'10px'
  }));
  return (
    <>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>
                <div className="step-label">
                  <div>
                    <Typography className="step-title">{step.title}</Typography>
                  </div>
                </div>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Content>{renderContent()}</Content>
    </>
  );
}
