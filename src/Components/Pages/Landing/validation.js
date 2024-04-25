import {
  checkPassword,
  textOnly,
  validateEmail,
} from "../../../Utils/validations";

export default (data) => {
  const err = {};
  const email = data.get("email");
  const password = data.get("password");
  if (!password) err.password = "password is required field!";
  if (!email) err.email = "email is required field!";
  if (email && !validateEmail(email))
    err.email = "You have entered an invalid email address!";
  return err;
};
export const signUpStep1 = (formData, haveImage) => {
  const err = {};
  const data = {};
  for (const pair of formData.entries()) {
    if (!pair[1]) err[pair[0]] = `${pair[0]} is required field!`;
    else {
      switch (pair[0]) {
        case "profileUrl":
          if (pair[1].name) {
            data[pair[0]] = pair[1];
            break;
          }
          if (!haveImage) err[pair[0]] = `Profile picture is required field!`;
          break;
        case "firstName":
          if (!textOnly(pair[1]))
            err[pair[0]] = `Invalid input for ${pair[0]}!`;
          break;
        case "lastName":
          if (!textOnly(pair[1]))
            err[pair[0]] = `Invalid input for ${pair[0]}!`;
          break;
        case "email":
          if (!validateEmail(pair[1]))
            err[pair[0]] = `You have entered an invalid email address!`;
          break;
        default:
          break;
      }
      if (pair[0] !== "profileUrl") data[pair[0]] = pair[1];
    }
  }
  return { err, data };
};
export const signUpStep2 = (formData) => {
  const err = {};
  const data = {};
  for (const pair of formData.entries()) {
    if (!pair[1]) err[pair[0]] = `${pair[0]} is required field!`;
    else {
      switch (pair[0]) {
        case "mobileNo":
          if (!textOnly(pair[1]))
            err[pair[0]] = `Invalid input for ${pair[0]}!`;
          break;
        case "password":
          if (!checkPassword(pair[1]))
            err[pair[0]] = `Password must meet complexity requirements`;
          break;
        case "rePassword":
          if (formData.get("password") !== pair[1])
            err[pair[0]] = `Password Re-Password Mismatch!`;
          break;
        default:
          break;
      }
      data[pair[0]] = pair[1];
    }
  }
  return { err, data };
};
export const signUpStep3 = (formData) => {
  const err = {};
  const data = {};
  for (const pair of formData.entries()) {
    if (!pair[1]) err[pair[0]] = `${pair[0]} is required field!`;
    else {
      switch (pair[0]) {
        case "otp":
          if (!textOnly(pair[1]))
            err[pair[0]] = `Invalid input for ${pair[0]}!`;
          break;

        default:
          break;
      }
      data[pair[0]] = pair[1];
    }
  }
  return { err, data };
};
