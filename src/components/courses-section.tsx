import { Star, Users, BookOpen, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CoursesSection() {
  const courses = [
    {
      title: "Full Stack Modern JavaScript",
      description:
        "Learn modern JavaScript development with React, Node.js, and Express. Build real-world applications from scratch.",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      lessons: 25,
      students: 150,
      price: 99,
    },
    {
      title: "Design System with React",
      description:
        "Master design systems and component libraries with React, TypeScript, and Storybook.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 5.0,
      lessons: 30,
      students: 120,
      price: 129,
    },
    {
      title: "Python for Data Science",
      description:
        "Complete guide to data science with Python, pandas, NumPy, and machine learning fundamentals.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      lessons: 35,
      students: 89,
      price: 149,
    },
    {
      title: "UI/UX Design Masterclass",
      description:
        "Learn user interface and user experience design principles with Figma and modern design tools.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      lessons: 20,
      students: 200,
      price: 89,
    },
    {
      title: "Mobile App Development with React Native",
      description:
        "Build cross-platform mobile applications using React Native and modern development practices.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      lessons: 40,
      students: 95,
      price: 179,
    },
    {
      title: "DevOps & Cloud Computing",
      description:
        "Master DevOps practices with Docker, Kubernetes, AWS, and CI/CD pipelines for modern deployments.",
      image:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      lessons: 45,
      students: 75,
      price: 199,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"

            >
              <div className="relative overflow-hidden">
                <div className="rounded-md overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    Best Seller
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{course.lessons} darslar</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students} o'quvchilar</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${course.price}
                  </span>
                  <Button className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transform transition duration-200">
                    Hoziroq boshlash
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
