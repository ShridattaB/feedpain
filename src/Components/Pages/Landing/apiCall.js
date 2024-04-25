import axios from "axios";

export const getCourseList = () => {
  return axios
    .get("/course/")
    .then((response) => response.data)  
};

export const getCountryList = () => {
    return axios
      .get("/country/")
      .then((response) => response.data)  
  };
  export const getStateList = () => {
    return axios
      .get("/state/")
      .then((response) => response.data)  
  };
  export const getCityList = () => {
    return axios
      .get("/city/")
      .then((response) => response.data)  
  };
