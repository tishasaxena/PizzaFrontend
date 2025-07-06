// src/Helpers/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,  // ✅ Set at creation
  withCredentials: true,                      // ✅ Enable cookies
});

export default axiosInstance;
