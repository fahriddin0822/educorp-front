import { useQuery } from "@tanstack/react-query";
import { courseApi } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { authStorage } from "@/lib/auth";
import CourseCard from "./course-card";

export default function CoursesSection() {
  const { toast } = useToast();
  const user = authStorage.getUser();

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: courseApi.getAll,
  });

  const topCourses = courses
    ?.sort((a, b) => b.rating - a.rating) // Assumes each course has a `rating` number
    .slice(0, 3);

  const handleEnroll = (courseId: number) => {
    if (!user) {
      toast({
        title: "Ro'yxatdan o'tishingiz kerak",
        description: "Iltimos kursga yozilish uchun ro'yxatdan o'ting",
        variant: "destructive",
      });
      return;
    }

    // TODO: Call enrollment API here
    toast({
      title: "Kursga muvaffaqiyatli yozildingiz",
      description: "Siz kursga muvaffaqiyatli yozildingiz",
    });
  };

  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Mashhur kurslar</span>
          </h2>
          <a
            href="/courses"
            className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300"
          >
            Barcha kurslar →
          </a>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6 space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center py-12 text-red-500">
            Failed to load courses. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCourses?.map((course) => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
