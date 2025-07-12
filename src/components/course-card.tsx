import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen } from "lucide-react";
import { Course } from "../shared/schema";
import { Link } from "wouter";

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: number) => void;
}

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  const handleEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onEnroll) {
      onEnroll(course.id);
    }
  };

  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full w-full max-w-sm mx-auto">
        <div className="relative w-full h-48">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-yellow-100 text-yellow-800 text-xs font-semibold"
          >
            Best Seller
          </Badge>
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3
            className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2"
            title={course.name}
          >
            {course.name}
          </h3>
          <p
            className="text-sm text-gray-600 mb-3 line-clamp-3"
            title={course.description}
          >
            {course.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{(course.rating / 10).toFixed(1)}</span>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{course.lessons} darslar</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students} talabalar</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col items-start gap-3">
          <span className="text-xl font-bold text-primary">
            ${course.price.toFixed(2)}
          </span>
          <Button
            className="w-full bg-primary text-white hover:bg-blue-700 text-sm py-2"
            onClick={handleEnroll}
          >
            Hoziroq boshlash
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}