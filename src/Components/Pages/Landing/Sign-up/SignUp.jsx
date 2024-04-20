import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomStepper from "../../../stepper/CustomStepper";
import InputText from "../../../Form/InputText/InputText";
import { Button, Typography } from "@mui/material";
import ImageInput from "../../../Form/ImageInput/ImageInput";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };
  const steps = [
    {
      title: "Your Info",
      subtitle: "We Gather Your basic Info so we can Interact",
    },
    {
      title: "Address",
      subtitle: "Let Us know where you are located",
    },
    {
      title: "Verification",
      subtitle: "Don't worry we are just validating email",
    },
  ];
  const data = [
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "14px",
        }}
      >
        <ImageInput />
      </div>
      <InputText
        autoComplete="given-name"
        name="firstName"
        required
        id="firstName"
        label="First Name"
        autoFocus
      />
      <InputText
        required
        id="lastName"
        label="Last Name"
        name="lastName"
        autoComplete="family-name"
      />
      <InputText
        required
        id="course"
        label="Course Name and Year"
        name="course"
      />
      <InputText
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
    </>,
    <>
      <InputText name="country" id="country" label="Country" sx={{ mt: 2 }} />
      <InputText name="state" id="state" label="State" sx={{ mt: 2 }} />
      <InputText name="city" id="city" label="City" sx={{ mt: 2 }} />
      <InputText name="mobile_no" id="mobile_no" label="Mobile No" />
      <InputText name="password" id="password" label="Password" />
      <InputText name="rePassword" id="rePassword" label="Re Enter Password" />
    </>,
    <>
      <Typography sx={{mt:"40px",mb:"20px"}} >We have sent you an OTP over mail 
          please use that for verification.</Typography>
      <InputText name="otp" id="otp" label="OTP" />{" "}
    </>,
  ];

  return (
    <Grid
      container
      height={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
      className="sign-in"
    >
      <Grid item sm={4}></Grid>
      <Grid item sm={6} style={{ minHeight: "384px" }}>
        <CustomStepper
          stepperData={{
            steps,
            data,
            action: <Button>Submit</Button>,
            title: "Sign Up",
          }}
        />
      </Grid>
    </Grid>
  );
}
