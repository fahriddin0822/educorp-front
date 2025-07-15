import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courseApi } from "@/lib/api";
import { Book, CheckCircle, Clock, TrendingUp } from "lucide-react";
import ProtectedRoute from "@/components/protected-route";
import CourseCard from "@/components/course-card";
import { Link } from "wouter";

export default function StudentDashboard() {
  const { data: courses, isLoading: coursesLoading } = useQuery({
    queryKey: ["/api/courses"],
    queryFn: courseApi.getAll,
  });

  // Mock enrolled courses (in real app, this would come from backend)
  const enrolledCourses = courses?.slice(0, 2) || [];
  const completedCourses = enrolledCourses.slice(0, 1);
  const inProgressCourses = enrolledCourses.slice(1);

  const progressPercentage = enrolledCourses.length > 0 
    ? (completedCourses.length / enrolledCourses.length) * 100 
    : 0;

  return (
    <ProtectedRoute requiredRole="student">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="my-12">
            <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-600 mt-2">Ilm yo'lingizni tanlang va davom eting</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Kursga yozilish</p>
                    <p className="text-3xl font-bold text-primary">{enrolledCourses.length}</p>
                  </div>
                  <Book className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Tugatildi</p>
                    <p className="text-3xl font-bold text-accent">{completedCourses.length}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Jarayonda</p>
                    <p className="text-3xl font-bold text-secondary">{inProgressCourses.length}</p>
                  </div>
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">O'smoqda</p>
                    <p className="text-3xl font-bold text-purple-600">{progressPercentage.toFixed(0)}%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enrolled Courses */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Mening kurslarim</CardTitle>
                <Button asChild>
                  <Link href="/courses">Barcha kurslarni ko'rish</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {coursesLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : enrolledCourses.length === 0 ? (
                <div className="text-center py-12">
                  <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Hechqanday kusga yozilinmagan.</h3>
                  <p className="text-gray-600 mb-4">Birinchi kursingizga yoziling</p>
                  <Button asChild>
                    <Link href="/courses">Ko'zdan kechirish</Link>
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="relative">
                      <CourseCard course={course} />
                      <div className="absolute top-2 right-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/courses/${course.id}`}>Davom etish</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Oxirgi ishlar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Tugatilgan darslar: Introduction to React</p>
                    <p className="text-xs text-gray-500">2 soat oldin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Yangi kursni boshlash: Design System with React</p>
                    <p className="text-xs text-gray-500">1 kun oldin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Olingan sertikatlar: JavaScript Fundamentals</p>
                    <p className="text-xs text-gray-500">3 kun oldin</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}
