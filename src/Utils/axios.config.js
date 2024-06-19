import axios from "axios";
import toast from "react-hot-toast";
import { getTokenFromLocalStorage } from "./index";

export default () => {

    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
    axios.interceptors.request.use(
        config => {
            const token = getTokenFromLocalStorage();
            if (token)
                config.headers['Authorization'] = 'Bearer ' + token
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            const { response } = error;
            if (response)
                switch (response.status) {
                    case 403:
                        localStorage.clear()
                        window.location.reload()
                    default:
                        break;
                }
            if (error.code === "ERR_NETWORK")
                toast("Error:" + error.message, { position: "top-right" });
            else return Promise.reject(error);
        }
    );
}