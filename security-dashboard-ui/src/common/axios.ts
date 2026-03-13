import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 5000,
});0

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Request sent:", config.url);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;