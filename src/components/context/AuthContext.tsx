// context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { authStorage } from "@/lib/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(authStorage.getUser());
  const [forceRefresh, setForceRefresh] = useState(0);

  const login = (userData) => {
    authStorage.setUser(userData);
    setUser(userData);
    setForceRefresh((prev) => prev + 1);
  };

  const logout = () => {
    authStorage.clearUser();
    setUser(null);
    setForceRefresh((prev) => prev + 1);
  };

  useEffect(() => {
    setUser(authStorage.getUser());
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, forceRefresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
