import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { courseApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, PlayCircle, Check } from "lucide-react";
import { authStorage } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function CourseDetail() {
  const [match, params] = useRoute("/courses/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const user = authStorage.getUser();
  const courseId = params?.id ? parseInt(params.id) : 0;

  const { data: course, isLoading } = useQuery({
    queryKey: [`/api/courses/${courseId}`],
    queryFn: () => courseApi.getById(courseId),
    enabled: !!courseId,
  });

  const handleEnroll = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to enroll in courses",
        variant: "destructive",
      });
      setLocation("/login");
      return;
    }
    
    toast({
      title: "Enrollment Successful",
      description: "You have been enrolled in the course!",
    });
  };

  if (!match || !courseId) {
    return <div>Course not found</div>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-lg font-medium">{course.rating / 10}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-1" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center text-gray-600">
              <PlayCircle className="w-5 h-5 mr-1" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this course</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {course.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">What you'll learn</h3>
              <ul className="space-y-3">
                {[
                  "Master the fundamentals and advanced concepts",
                  "Build real-world projects and applications",
                  "Get hands-on experience with industry tools",
                  "Receive personalized feedback and support",
                  "Join a community of learners and mentors",
                  "Access to lifetime updates and resources"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    ${course.price}
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    Best Seller
                  </Badge>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Darslar soni</span>
                    <span className="font-medium">{course.lessons}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Talabalar soni</span>
                    <span className="font-medium">{course.students}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Reyting</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium">{course.rating / 10}</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleEnroll}
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
                  size="lg"
                >
                  Hoziroq boshlash
                </Button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  30-kunda pulni qaytaramiz kafolati
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
