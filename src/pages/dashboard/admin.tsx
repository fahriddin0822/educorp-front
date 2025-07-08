import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courseApi, userApi } from "@/lib/api";
import { CourseModal } from "@/components/modals/course-modal";
import { TeacherModal } from "@/components/modals/teacher-modal";
import { useToast } from "@/hooks/use-toast";
import { Book, Users, GraduationCap, Plus, Edit, Trash2 } from "lucide-react";
import ProtectedRoute from "@/components/protected-route";

export default function AdminDashboard() {
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<number | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: courses, isLoading: coursesLoading } = useQuery({
    queryKey: ["/api/courses"],
    queryFn: courseApi.getAll,
  });

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["/api/users"],
    queryFn: userApi.getAll,
  });

  const { data: teachers, isLoading: teachersLoading } = useQuery({
    queryKey: ["/api/users/teachers"],
    queryFn: userApi.getTeachers,
  });

  const deleteCourse = useMutation({
    mutationFn: courseApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/courses"] });
      toast({
        title: "Course deleted",
        description: "The course has been successfully deleted.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the course.",
        variant: "destructive",
      });
    },
  });

  const deleteUser = useMutation({
    mutationFn: userApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/users"] });
      queryClient.invalidateQueries({ queryKey: ["/api/users/teachers"] });
      toast({
        title: "User deleted",
        description: "The user has been successfully deleted.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete the user.",
        variant: "destructive",
      });
    },
  });

  const handleDeleteCourse = (id: number) => {
    if (confirm("Are you sure you want to delete this course?")) {
      deleteCourse.mutate(id);
    }
  };

  const handleDeleteUser = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      deleteUser.mutate(id);
    }
  };

  const handleEditCourse = (courseId: number) => {
    setEditingCourse(courseId);
    setShowCourseModal(true);
  };

  const students = users?.filter(user => user.role === "student") || [];
  const allTeachers = users?.filter(user => user.role === "teacher") || [];

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage courses, teachers, and students</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Courses</p>
                    <p className="text-3xl font-bold text-primary">{courses?.length || 0}</p>
                  </div>
                  <Book className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Teachers</p>
                    <p className="text-3xl font-bold text-accent">{allTeachers.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Students</p>
                    <p className="text-3xl font-bold text-secondary">{students.length}</p>
                  </div>
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="teachers">Teachers</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Manage Courses</CardTitle>
                    <Button onClick={() => setShowCourseModal(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Course
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {coursesLoading ? (
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="animate-pulse flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {courses?.map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <img
                              src={course.image}
                              alt={course.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="font-semibold">{course.name}</h3>
                              <p className="text-sm text-gray-600">{course.description}</p>
                              <div className="flex items-center space-x-2 mt-2">
                                <Badge variant="outline">{course.students} students</Badge>
                                <Badge variant="outline">${course.price}</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditCourse(course.id)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteCourse(course.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teachers" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Manage Teachers</CardTitle>
                    <Button onClick={() => setShowTeacherModal(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Teacher
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {teachersLoading ? (
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="animate-pulse flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {allTeachers.map((teacher) => (
                        <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-white font-medium">
                                {teacher.fullName.split(" ").map(n => n[0]).join("")}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-semibold">{teacher.fullName}</h3>
                              <p className="text-sm text-gray-600">{teacher.email}</p>
                              <Badge variant="secondary">{teacher.role}</Badge>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteUser(teacher.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Students</CardTitle>
                </CardHeader>
                <CardContent>
                  {usersLoading ? (
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="animate-pulse flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {students.map((student) => (
                        <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                              <span className="text-white font-medium">
                                {student.fullName.split(" ").map(n => n[0]).join("")}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-semibold">{student.fullName}</h3>
                              <p className="text-sm text-gray-600">{student.email}</p>
                              <Badge variant="secondary">{student.role}</Badge>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteUser(student.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <CourseModal
          isOpen={showCourseModal}
          onClose={() => {
            setShowCourseModal(false);
            setEditingCourse(null);
          }}
          courseId={editingCourse}
        />

        <TeacherModal
          isOpen={showTeacherModal}
          onClose={() => setShowTeacherModal(false)}
        />
      </div>
    </ProtectedRoute>
  );
}
