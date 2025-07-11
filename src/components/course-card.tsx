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
      <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            style={{ height: '400px', width: '100%', maxWidth: '300px' }}>
        <div className="relative">
          <div className="overflow-hidden">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs font-semibold">
              Best Seller
            </Badge>
          </div>
        </div>
        <CardContent className="p-4 flex flex-col flex-grow m-auto">
          <h3 className="text-md font-semibold text-gray-900 mb-2 line-clamp-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{course.name}</h3>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {course.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{(course.rating / 10).toFixed(1)}</span>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
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
        <CardFooter className="p-4 pt-0 flex flex-col items-start">
          <span className="text-xl font-bold text-blue-600 mb-2">
            ${course.price}
          </span>
          <Button 
            className="w-full bg-blue-600 text-white hover:bg-blue-700 text-sm py-1"
            onClick={handleEnroll}
          >
            Hoziroq boshlash
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}