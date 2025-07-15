// context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import { authStorage } from "@/lib/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(authStorage.getUser());

  const login = (userData) => {
    authStorage.setUser(userData);
    setUser(userData);
  };

  const logout = () => {
    authStorage.clearUser();
    setUser(null);
  };

  useEffect(() => {
    setUser(authStorage.getUser());
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
