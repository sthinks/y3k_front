import axios from "axios";
const axiosClient = axios.create({
    baseURL: `https://www.y3k.com.tr/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default axiosClient;
