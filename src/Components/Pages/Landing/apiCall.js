import axios from "axios";

export const getCourseList = () => {
  return axios.get("/course/").then((response) => response?.data);
};

export const getCountryList = () => {
  return axios.get("/country/").then((response) => response?.data);
};
export const getStateList = (id) => {
  return axios
    .get("/state/by-country-id?countryId=" + id)
    .then((response) => response?.data);
};
export const getCityList = (id) => {
  return axios
    .get("/city/by-state-id?stateId=" + id)
    .then((response) => response?.data);
};
export const sendOTPMailAPICall = async (emailData) => {
  const response = await axios.post("/public/mail", emailData);
  return response?.data;
};
export const verifyOtpApiCall = async (emailData) => {
  const response = await axios.post("/public/verify-OTP", emailData);
  return response?.data;
};
