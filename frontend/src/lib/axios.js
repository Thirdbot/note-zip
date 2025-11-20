import axios from "axios";

const axiosIns = axios.create({
    baseURL: 'http://localhost:5001/api',
})

export default axiosIns;