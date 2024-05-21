import axios from "axios";
import toast from "react-hot-toast";

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
export const apiLoadingStack = [];

export const signUpAPI = async (userData) => {
  delete userData['rePassword']
  delete userData['otp']
  const response = await axios.post("/auth/sign-up", userData);
  const { status,  value } = response?.data 
  if (status == 409)
    toast.error(value)
  return response
};

export const uploadProfile = async (imageData) => {

  const response = await axios.post("/public/upload", imageData);
  return await response?.data?.value;
};
