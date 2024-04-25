import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomStepper from "../../../stepper/CustomStepper";
import InputText from "../../../Form/InputText/InputText";
import {  Typography } from "@mui/material";
import ImageInput from "../../../Form/ImageInput/ImageInput";
import { signUpStep1, signUpStep2, signUpStep3 } from "../validation";
import { isEmpty } from "../../../../Utils";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUp() {
  const [error, setError] = React.useState({});
  const [userData, setUserData] = React.useState({});
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
        <ImageInput
          name="profileUrl"
          id="profileUrl"
          error={!!error.profileUrl}
          helperText={error.profileUrl}
          value={userData.profileUrl}
        />
      </div>
      <InputText
        autoComplete="given-name"
        name="firstName"
        id="firstName"
        label="First Name"
        defaultValue={userData.firstName}
        autoFocus
        error={!!error.firstName}
        helperText={error.firstName}
      />
      <InputText
        id="lastName"
        label="Last Name"
        name="lastName"
        defaultValue={userData.lastName}
        autoComplete="family-name"
        error={!!error.lastName}
        helperText={error.lastName}
      />
      <InputText
        id="course"
        label="Course Name and Year"
        name="course"
        defaultValue={userData.course}
        error={!!error.course}
        helperText={error.course}
      />
      <InputText
        id="email"
        label="Email Address"
        name="email"
        defaultValue={userData.email}
        error={!!error.email}
        helperText={error.email}
      />
    </>,
    <>
      <InputText
        name="country"
        id="country"
        label="Country"
        sx={{ mt: 2 }}
        defaultValue={userData.country}
        error={!!error.country}
        helperText={error.country}
      />
      <InputText
        name="state"
        id="state"
        label="State"
        sx={{ mt: 2 }}
        defaultValue={userData.state}
        error={!!error.state}
        helperText={error.state}
      />
      <InputText
        name="city"
        id="city"
        label="City"
        sx={{ mt: 2 }}
        defaultValue={userData.city}
        error={!!error.city}
        helperText={error.city}
      />
      <InputText
        name="mobileNo"
        id="mobileNo"
        label="Mobile No"
        defaultValue={userData.mobileNo}
        error={!!error.mobileNo}
        helperText={error.mobileNo}
      />
      <InputText
        name="password"
        type="password"
        id="password"
        label="Password"
        defaultValue={userData.password}
        error={!!error.password}
        helperText={error.password}
      />
      <InputText
        name="rePassword"
        type="password"
        id="rePassword"
        label="Re Enter Password"
        defaultValue={userData.rePassword}
        error={!!error.rePassword}
        helperText={error.rePassword}
      />
    </>,
    <>
      <Typography sx={{ mt: "40px", mb: "20px" }}>
        We have sent you an OTP over mail please use that for verification.
      </Typography>
      <InputText
        name="otp"
        id="otp"
        label="OTP"
        defaultValue={userData.otp}
        error={!!error.otp}
        helperText={error.otp}
      />
    </>,
  ];
  const sendOtpApiCall=()=>{

  }
  const verifyOtpApiCall=()=>{
    //uploadImage
    //registration
    
  } 
  
  const handleSubmit = (ref, step) => {
    if (!ref) return;
    const formData = new FormData(ref.current);
    let validatedData;
    switch (step) {
      case 1:
        validatedData = signUpStep1(formData,userData.profileUrl);
        break;
      case 2:
        validatedData = signUpStep2(formData);
        break;
      default:
        validatedData = signUpStep3(formData);
        break;
    }

    let { err, data } = validatedData;
    setError(err);
    if (isEmpty(err)) { 
      setUserData({ ...userData, ...data });
      if(step===2)
      {
        sendOtpApiCall(userData.email)
      }
      if(step===3)
      {
        verifyOtpApiCall()
      }
      return true;
    }
  };

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
            title: "Sign Up",
          }}
          handleSubmit={handleSubmit}
        />
      </Grid>
    </Grid>
  );
}
