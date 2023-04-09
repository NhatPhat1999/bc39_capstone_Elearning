import axios from "axios";

const TOkEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c"

const api = axios.create({
    baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
});

api.interceptors.request.use((config: any) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: TOkEN_CYBERSOFT,
        Authorization: localStorage.getItem("userLogin") ? `Bearer ${JSON.parse(localStorage.getItem("userLogin") || "").accessToken}` : "",
    };

    return config;
});

export default api;