import { User } from "../shared/schema";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const authStorage = {
  getUser: (): User | null => {
    const userStr = localStorage.getItem("auth_user");
    return userStr ? JSON.parse(userStr) : null;
  },
  
  setUser: (user: User | null) => {
    if (user) {
      localStorage.setItem("auth_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth_user");
    }
  },
  
  clearUser: () => {
    localStorage.removeItem("auth_user");
  }
};

export const hasRole = (user: User | null, role: string): boolean => {
  return user?.role === role;
};

export const canAccessRoute = (user: User | null, requiredRole: string): boolean => {
  if (!user) return false;
  
  switch (requiredRole) {
    case "admin":
      return user.role === "admin";
    case "teacher":
      return user.role === "teacher" || user.role === "admin";
    case "student":
      return user.role === "student" || user.role === "teacher" || user.role === "admin";
    default:
      return true;
  }
};
