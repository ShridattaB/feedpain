import * as React from "react";
import Grid from "@mui/material/Grid";
import CustomStepper from "../../../stepper/CustomStepper";
import InputText from "../../../Form/InputText/InputText";

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
    <Grid container justifyContent={"center"}  alignItems="center" spacing={2}>
      <Grid item xs={8}>
        <InputText
          autoComplete="given-name"
          name="firstName"
          required
          id="firstName"
          label="First Name"
          autoFocus 
          sx={{ mt: 2}}
        />
      </Grid>
      <Grid item xs={8}>
        <InputText
          required
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="family-name" 
        />
      </Grid>
      <Grid item xs={8}>
        <InputText
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
      </Grid>
      <Grid item xs="8">
        <InputText
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
        />
      </Grid>
    </Grid>,
    <></>,
  ];

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
      <Grid item sm={6}>
        <CustomStepper stepperData={{ steps, data }} />
      </Grid>
    </Grid>
  );
}
