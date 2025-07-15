import { useState, useEffect } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToSection } from "./utils/scrollToTop";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getDashboardPath = () => {
    if (!user) return "/";
    switch (user.role) {
      case "admin":
        return "/dashboard/admin";
      case "teacher":
        return "/dashboard/teacher";
      case "student":
        return "/dashboard/student";
      default:
        return "/";
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-100 ${isScrolled ? "bg-white/95 shadow-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className='flex items-center gap-3 cursor-pointer' onClick={() => navigate("/#home")}>
            <img className='w-[50px]' src='../images/logo.png' alt='logo' />
            <div>
              <h1 className='text-3xl font-bold text-primary hover:text-orange-500 transition-colors'>educorp</h1>
              <p className='text-[10px]'>Jamoangizni rivojlantiring</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: "home", label: "Bosh sahifa" },
              { id: "about", label: "Haqimizda" },
              { id: "services", label: "Xizmatlar" },
              { id: "courses", label: "Kurslar" },
              { id: "contact", label: "Aloqa" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => navigate(`/#${id}`)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA / Dropdown */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' className='flex items-center space-x-2'>
                    <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm'>
                      {user.fullName.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span>{user.fullName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate(getDashboardPath())}>
                    <User className="mr-2 h-4 w-4" /> Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" /> Chiqish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className='hidden md:flex items-center space-x-3'>
                <Button variant='ghost' asChild>
                  <Link to='/login'>Kirish</Link>
                </Button>
                <Button asChild>
                  <Link to='/signup'>Ro'yxatdan o'tish</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                {[
                  { id: "home", label: "Bosh sahifa" },
                  { id: "about", label: "Haqimizda" },
                  { id: "services", label: "Xizmatlar" },
                  { id: "courses", label: "Kurslar" },
                  { id: "contact", label: "Aloqa" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => {
                      scrollToSection(id);
                      setIsOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-primary font-medium"
                  >
                    {label}
                  </button>
                ))}
                {user ? (
                  <>
                    <button
                      onClick={() => {
                        navigate(getDashboardPath());
                        setIsOpen(false);
                      }}
                      className="text-left text-gray-700 hover:text-primary font-medium flex items-center gap-2"
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="text-left text-gray-700 hover:text-primary font-medium flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Chiqish
                    </button>
                  </>
                ) : (
                  <div className='items-start flex flex-col'>
                    <button className="text-left text-gray-700 hover:text-primary font-medium" onClick={()=>setIsOpen(false)}>
                      <Link to='/login'>Kirish</Link>
                    </button>
                    
                    <button className="text-left text-gray-700 hover:text-primary font-medium mt-3" onClick={()=>setIsOpen(false)}>
                      <Link to='/signup'>Ro'yxatdan o'tish</Link>
                    </button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
