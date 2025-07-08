import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, PlayCircle } from "lucide-react";
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
      <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
        <div className="aspect-video relative">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
              Best Seller
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">{course.rating / 10}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {course.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <PlayCircle className="w-4 h-4 mr-1" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students} students</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl font-bold text-primary">
              ${course.price}
            </span>
            <Button onClick={handleEnroll} className="bg-primary hover:bg-primary/90">
              Enroll Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
