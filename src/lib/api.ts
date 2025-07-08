import { apiRequest } from "./queryClient";
import { LoginData, SignupData, InsertCourse, User, Course } from "../shared/schema";

export const authApi = {
  login: async (data: LoginData): Promise<{ user: User }> => {
    const response = await apiRequest("POST", "/api/auth/login", data);
    return response.json();
  },

  signup: async (data: SignupData): Promise<{ user: User }> => {
    const response = await apiRequest("POST", "/api/auth/signup", data);
    return response.json();
  },
};

export const courseApi = {
  getAll: async (): Promise<Course[]> => {
    const response = await apiRequest("GET", "/api/courses");
    return response.json();
  },

  getById: async (id: number): Promise<Course> => {
    const response = await apiRequest("GET", `/api/courses/${id}`);
    return response.json();
  },

  create: async (data: InsertCourse): Promise<Course> => {
    const response = await apiRequest("POST", "/api/courses", data);
    return response.json();
  },

  update: async (id: number, data: Partial<InsertCourse>): Promise<Course> => {
    const response = await apiRequest("PUT", `/api/courses/${id}`, data);
    return response.json();
  },

  delete: async (id: number): Promise<void> => {
    await apiRequest("DELETE", `/api/courses/${id}`);
  },
};

export const userApi = {
  getAll: async (): Promise<User[]> => {
    const response = await apiRequest("GET", "/api/users");
    return response.json();
  },

  getTeachers: async (): Promise<User[]> => {
    const response = await apiRequest("GET", "/api/users/teachers");
    return response.json();
  },

  delete: async (id: number): Promise<void> => {
    await apiRequest("DELETE", `/api/users/${id}`);
  },
};
