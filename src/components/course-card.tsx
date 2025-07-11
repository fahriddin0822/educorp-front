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
      <Card className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
        <div className="aspect-video relative">
          <div className="rounded-md overflow-hidden">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
              Best Seller
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{course.description}</p>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">{(course.rating / 10).toFixed(1)}</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students} students</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <span className="text-2xl font-bold text-primary">
              ${course.price}
            </span>
            <Button 
              className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transform transition duration-200"
              onClick={handleEnroll}
            >
              Start Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}