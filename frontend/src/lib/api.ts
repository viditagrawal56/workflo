import axios from "axios";
import Cookies from "js-cookie";
import { LoginInput, SignupInput } from "../schema/authSchema";

const api = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:5000",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = async ({ name, email, password }: SignupInput) => {
  const response = await api.post("/api/auth/register", {
    name,
    email,
    password,
  });
  return response.data;
};

export const login = async ({ email, password }: LoginInput) => {
  const response = await api.post("/api/auth/login", { email, password });
  return response.data;
};

// export const getProfile = async () => {
//   const response = await api.get("/api/protected/profile");
//   return response.data;
// };
