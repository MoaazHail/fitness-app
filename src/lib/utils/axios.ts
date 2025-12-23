import API_BASE_URL from "@/lib/constants/api.constant";
import { getItem } from "@/lib/utils/secure-storage";
import axios from "axios";

const fetcher = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

fetcher.interceptors.request.use((config) => {
  const token = getItem<string>("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

fetcher.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.data?.error) {
      return Promise.reject(new Error(error.response.data.error));
    }

    return Promise.reject(error);
  }
);

export default fetcher;
