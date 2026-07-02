import axios from "axios";

export const axiosInstanace = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : `${import.meta.env.VITE_API_URL}/api`,
});

axiosInstanace.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
