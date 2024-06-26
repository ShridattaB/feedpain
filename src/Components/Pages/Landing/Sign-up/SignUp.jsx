import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { toast } from "react-hot-toast";
import { isEmpty } from "../../../../Utils";
import ImageInput from "../../../Form/ImageInput/ImageInput";
import InputText from "../../../Form/InputText/InputText";
import CustomSelect from "../../../Select/CustomSelect";
import CustomStepper from "../../../stepper/CustomStepper";
import {
  apiLoadingStack,
  getCityList,
  getCountryList,
  getCourseList,
  getStateList,
  sendOTPMailAPICall,
  signUpAPI,
  uploadProfile,
  verifyOtpApiCall,
} from "../apiCall";
import { signUpStep1, signUpStep2, signUpStep3 } from "../validation";
import { useAuth } from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUp() {
  const [error, setError] = React.useState({});
  const [userData, setUserData] = React.useState({});
  const navigate = useNavigate();
  const [options, setOptions] = React.useState({
    course: [],
    country: [],
    state: [],
    city: [],
  });
  React.useEffect(() => {
    if (!options.course.length) {
      apiLoadingStack.push("getCourseList");
      getCourseList().then((response) => {
        if (response?.status === "Success")
          setOptions({ ...options, course: response.data });
      });
    }
    if (!options.country.length)
      getCountryList().then((response) => {
        if (response?.status === "Success")
          setOptions({ ...options, country: response.data });
      });
  }, [options]);
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
  const handleChange = (e) => {
    switch (e.target.name) {
      case "country":
        getStateList(e.target.value).then((response) => {
          if (response?.status === "Success")
            setOptions({ ...options, state: response.data });
        });

        break;
      case "state":
        getCityList(e.target.value).then((response) => {
          if (response?.status === "Success")
            setOptions({ ...options, city: response.data });
        });
        break;
      default:
        break;
    }
  };
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
      <CustomSelect
        id="course"
        label="Course Name and Year"
        name="course"
        titleLabel={["name", "year"]}
        options={options.course}
        selected={userData.course}
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
      <CustomSelect
        name="country"
        id="country"
        label="Country"
        sx={{ mt: 2 }}
        defaultValue={userData.country}
        error={!!error.country}
        helperText={error.country}
        titleLabel={["name"]}
        options={options.country}
        selected={userData.country}
        handleChange={handleChange}
      />
      <CustomSelect
        name="state"
        id="state"
        label="State"
        sx={{ mt: 2 }}
        error={!!error.state}
        helperText={error.state}
        titleLabel={["name"]}
        options={options.state}
        selected={userData.state}
        handleChange={handleChange}
      />
      <CustomSelect
        name="city"
        id="city"
        label="City"
        sx={{ mt: 2 }}
        error={!!error.city}
        helperText={error.city}
        titleLabel={["name"]}
        options={options.city}
        selected={userData.city}
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

  const handleSubmit = (ref, step) => {
    if (!ref) return;
    const formData = new FormData(ref.current);
    let validatedData;
    switch (step) {
      case 1:
        validatedData = signUpStep1(formData, userData.profileUrl);
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
      if (step === 2) {
        sendOTPMailAPICall({
          email: userData.email,
          userName: userData.firstName + " " + userData.lastName,
        });
      }
      if (step === 3 && userData.otp) {
        verifyOtpApiCall({ email: userData.email, otp: userData.otp }).then(
          (response) => {
            if (response.status === "Error") toast.error(response.message);
            else {
              toast.success(response.message);
              let formData = new FormData();
              formData.append(
                "name",
                userData.firstName +
                  userData.lastName +
                  new Date()
                    .toUTCString()
                    .replaceAll(" ", "")
                    .replaceAll(":", "")
                    .replaceAll(",", "")
              );
              formData.append("file", userData.profileUrl);
              uploadProfile(formData).then((url) => {
                userData.profileUrl = url;
                signUpAPI(userData).then((res) => {
                  if (res.status === 200);
                  navigate("/sign-in");
                });
              });
            }
          }
        );
      } else if (step === 3) toast.success("re-submit");
      return true;
    }
    return false;
  };

  return (
    <Grid
      container
      height={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
      className="sign-in"
    >
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
      <Grid item sm={4}>
        <img src="images/sign-up.png" width={"100%"} />
      </Grid>
    </Grid>
  );
}
