import axios from "axios";

const axiosInstance = axios.create();// Create a new axios instance

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL ;// Set the base URL for the axios instance

axiosInstance.defaults.withCredentials = true;// Allow cookies  to be sent with requests

export default axiosInstance;// Export the axios instance for use in other parts of the application
