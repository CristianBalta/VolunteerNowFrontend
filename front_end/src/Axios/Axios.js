import axios from "axios";
import { LOCALHOST_ADDRESS_LUCI } from "../Utils/utils";

const axiosInstance = axios.create({
    baseURL: LOCALHOST_ADDRESS_LUCI,
    headers: {
        post: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
                "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        }
    }
});

export default axiosInstance;
