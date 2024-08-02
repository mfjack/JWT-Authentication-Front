import axios from "axios";

const api = axios.create({
    baseURL: "https://jwt-authentication-api-1.onrender.com"
});

export default api