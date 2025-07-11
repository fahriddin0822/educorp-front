import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer">
            <h1 className="text-2xl font-bold text-primary" onClick={() => scrollToSection("home")}>EDUCORP</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Bosh sahifa
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Haqida
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Xizmatlar
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Kurslar
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                Aloqa
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white hover:bg-primary/90 font-medium hover-scale"
            >
              Hoziroq boshlang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Bosh sahifa
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Haqida
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Xizmatlar
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Kurslar
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left"
              >
                Aloqa
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white hover:bg-primary/90 font-medium w-full"
              >
                Hoziroq boshlang
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
