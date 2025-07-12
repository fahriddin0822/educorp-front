import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">EDUCORP</h3>
            <p className="text-gray-400 mb-6">
              Korporativ ta'limni qulaylashtirish orqali, xodimlar rivojlanishiga
              hissa qo'shish
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Xizmatlar</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#courses" className="hover:text-white transition-colors duration-300">
                  Korporativ ta'lim
                </a>
              </li>
              <li>
                <a href="#lessons" className="hover:text-white transition-colors duration-300">
                  Video darsliklar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  LMS platformasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Qo'llab-quvvatlash
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Aloqa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors duration-300">
                  Kurslar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Hamkorlik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Yangiliklar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EDUCORP. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
