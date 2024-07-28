import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  console.log("retrieved: ", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = async (name: string, email: string, password: string) => {
  const response = await api.post("/api/auth/signup", {
    name,
    email,
    password,
  });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post("/api/auth/login", { email, password });
  console.log("API login response:", response.data);

  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/api/protected/profile");
  return response.data;
};
