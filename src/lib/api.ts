import { apiRequest } from "./queryClient";
import { LoginData, SignupData, InsertCourse, User, Course } from "../shared/schema";

const BASE_URL = import.meta.env.VITE_API_URL;

export const authApi = {
  login: async (data: LoginData): Promise<{ user: User }> => {
    const response = await apiRequest("POST", `${BASE_URL}/api/auth/login`, data);
    return response.json();
  },

  signup: async (data: SignupData): Promise<{ user: User }> => {
    const response = await apiRequest("POST", `${BASE_URL}/api/auth/signup`, data);
    return response.json();
  },
};

export const courseApi = {
  getAll: async (): Promise<Course[]> => {
    const response = await apiRequest("GET", `${BASE_URL}/api/courses`);
    return response.json();
  },

  getById: async (id: number): Promise<Course> => {
    const response = await apiRequest("GET", `${BASE_URL}/api/courses/${id}`);
    return response.json();
  },

  create: async (data: InsertCourse): Promise<Course> => {
    const response = await apiRequest("POST", `${BASE_URL}/api/courses`, data);
    return response.json();
  },

  update: async (id: number, data: Partial<InsertCourse>): Promise<Course> => {
    const response = await apiRequest("PUT", `${BASE_URL}/api/courses/${id}`, data);
    return response.json();
  },

  delete: async (id: number): Promise<void> => {
    await apiRequest("DELETE", `${BASE_URL}/api/courses/${id}`);
  },
};

export const userApi = {
  getAll: async (): Promise<User[]> => {
    const response = await apiRequest("GET", `${BASE_URL}/api/users`);
    return response.json();
  },

  getTeachers: async (): Promise<User[]> => {
    const response = await apiRequest("GET", `${BASE_URL}/api/users/teachers`);
    return response.json();
  },

  delete: async (id: number): Promise<void> => {
    await apiRequest("DELETE", `${BASE_URL}/api/users/${id}`);
  },
};
