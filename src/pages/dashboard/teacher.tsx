import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courseApi } from "@/lib/api";
import { CourseModal } from "@/components/modals/course-modal";
import { Book, Users, Star, Plus } from "lucide-react";
import ProtectedRoute from "@/components/protected-route";
import { authStorage } from "@/lib/auth";
import CourseCard from "@/components/course-card";

export default function TeacherDashboard() {
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<number | null>(null);
  const user = authStorage.getUser();

  const { data: courses, isLoading: coursesLoading } = useQuery({
    queryKey: ["/api/courses"],
    queryFn: courseApi.getAll,
  });

  // Filter courses by teacher (in real app, this would be done on backend)
  const teacherCourses = courses?.filter(course => course.teacherId === user?.id) || [];
  const totalStudents = teacherCourses.reduce((sum, course) => sum + course.students, 0);
  const averageRating = teacherCourses.length > 0 
    ? teacherCourses.reduce((sum, course) => sum + course.rating, 0) / teacherCourses.length / 10
    : 0;

  const handleEditCourse = (courseId: number) => {
    setEditingCourse(courseId);
    setShowCourseModal(true);
  };

  return (
    <ProtectedRoute requiredRole="teacher">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your courses and track student progress</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">My Courses</p>
                    <p className="text-3xl font-bold text-primary">{teacherCourses.length}</p>
                  </div>
                  <Book className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Students</p>
                    <p className="text-3xl font-bold text-accent">{totalStudents}</p>
                  </div>
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Average Rating</p>
                    <p className="text-3xl font-bold text-secondary">{averageRating.toFixed(1)}</p>
                  </div>
                  <Star className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Section */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>My Courses</CardTitle>
                <Button onClick={() => setShowCourseModal(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Course
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
              ) : teacherCourses.length === 0 ? (
                <div className="text-center py-12">
                  <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
                  <p className="text-gray-600 mb-4">Create your first course to get started</p>
                  <Button onClick={() => setShowCourseModal(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Course
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teacherCourses.map((course) => (
                    <div key={course.id} className="relative">
                      <CourseCard course={course} />
                      <div className="absolute top-2 right-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditCourse(course.id)}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <CourseModal
          isOpen={showCourseModal}
          onClose={() => {
            setShowCourseModal(false);
            setEditingCourse(null);
          }}
          courseId={editingCourse}
        />
      </div>
    </ProtectedRoute>
  );
}
