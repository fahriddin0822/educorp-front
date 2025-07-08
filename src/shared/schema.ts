import { z } from "zod";

// User schema
export const users = {
  id: z.number(),
  email: z.string().email(),
  password: z.string(),
  name: z.string(),
  role: z.enum(["admin", "teacher", "student"]),
};

// Course schema
export const courses = {
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.number(),
  duration: z.string(),
  level: z.string(),
  category: z.string(),
  instructor: z.string(),
  rating: z.number().min(0).max(5),
  studentsEnrolled: z.number(),
  teacherId: z.number(),
};

// Insert schemas
export const insertUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.enum(["admin", "teacher", "student"]).default("student"),
});

export const insertCourseSchema = z.object({
  name: z.string().min(1, "Course name is required"),
  description: z.string().min(1, "Course description is required"),
  image: z.string().url("Please provide a valid image URL"),
  price: z.number().min(0, "Price must be a positive number"),
  duration: z.string().min(1, "Duration is required"),
  level: z.enum(["Beginner", "Intermediate", "Advanced"]),
  category: z.string().min(1, "Category is required"),
  instructor: z.string().min(1, "Instructor name is required"),
  rating: z.number().min(0).max(5).default(0),
  studentsEnrolled: z.number().min(0).default(0),
  teacherId: z.number(),
});

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const signupSchema = insertUserSchema.extend({
  confirmPassword: z.string().min(6, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: "admin" | "teacher" | "student";
};

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  level: string;
  category: string;
  instructor: string;
  rating: number;
  studentsEnrolled: number;
  teacherId: number;
};

export type LoginData = z.infer<typeof loginSchema>;
export type SignupData = z.infer<typeof signupSchema>;