import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "./utils/scrollToTop";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection(); // ✅ Use hook properly here
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-100 ${isScrolled ? "bg-white/95 shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className='flex items-center gap-3 cursor-pointer' onClick={() => navigate("/#home")}>
            <div>
              <img
                className='w-[50px] overflow-hidden'
                src='../images/logo.png'
                alt='logo'
              />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-black hover:text-primary transition-colors'>
                educorp
              </h1>
              <p className='text-[10px]'>Jamoangizni rivojlantiring</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => navigate("/#home")} className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
                Bosh sahifa
              </button>
              <button onClick={() => navigate("/#about")} className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
                Haqimizda
              </button>
              <button onClick={() => navigate("/#services")} className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
                Xizmatlar
              </button>
              <button onClick={() => navigate("/#courses")} className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
                Kurslar
              </button>
              <button onClick={() => navigate("/#contact")} className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">
                Aloqa
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contact")} className="bg-primary text-white font-medium hover:scale-100 hover:bg-orange-500 transform transition-all duration-300">
              Hoziroq boshlang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {["home", "about", "services", "courses", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMobileMenuOpen(false); // optional: close menu after click
                  }}
                  className="text-left text-gray-700 hover:text-primary font-medium"
                >
                  {id === "home"
                    ? "Bosh sahifa"
                    : id === "about"
                      ? "Haqida"
                      : id === "services"
                        ? "Xizmatlar"
                        : id === "courses"
                          ? "Kurslar"
                          : "Aloqa"}
                </button>
              ))}
              <Button>asds</Button>
              {/* <Button
                onClick={() => navigate("/#contact")}
                className="bg-primary text-white hover:bg-black hover:scale-95 transform transition duration-200"
              >
                Hoziroq boshlang
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
