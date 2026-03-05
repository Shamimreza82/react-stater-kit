import axios from "axios";
import { env } from "../config/env";
import { emitUnauthorized } from "./auth-events";
import { useAuthStore } from "@/stores/auth.store";

export const http = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      useAuthStore.getState().clearToken();
      emitUnauthorized();
    }

    return Promise.reject(error instanceof Error ? error : new Error("Request failed"));
  },
);
