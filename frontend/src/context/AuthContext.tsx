"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  isAuthenticated: boolean;
  userName: string | null;
  login: (token: string, name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userName: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    const name = Cookies.get("userName");
    setIsAuthenticated(!!token);
    setUserName(name || null);
  }, []);

  const login = (token: string, name: string) => {
    Cookies.set("token", token, { expires: 1 });
    Cookies.set("userName", name, { expires: 1 });
    setIsAuthenticated(true);
    setUserName(name);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    setIsAuthenticated(false);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
