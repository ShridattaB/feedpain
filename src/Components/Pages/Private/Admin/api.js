import axios from "axios";
export const getUserRole = () => {
    return axios.get("/role/").then((response) => response?.data);
  };