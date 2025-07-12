import { Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className=" pt-24 pb-16 lg:pt-24 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              30% chegirma birinchi kursda
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              1 OYDA KOMPANIYANGIZDA
              <br />
              <span className="text-primary">ICHKI AKADEMIYANI </span>

              <span className="">YO'LGA
                <br /> QO'YIB BERAMIZ.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Smartfon orqali adaptasiya, malaka oshirish, bilimni baholash,
              rag'batlantirish
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">
              <Button
                onClick={scrollToContact}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-semibold hover-scale hover:scale-105 transform transition duration-200 border-2 border-primary"
              >
                Hoziroq boshlang
              </Button>
              <Button
                onClick={scrollToAbout}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-semibold hover-scale hover:scale-105 transform transition duration-200"
              >
                Batafsil ma'lumot
              </Button>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-700 font-medium">Qulay vaqt</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-700 font-medium">O'quv qo'llanmasi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span className="text-gray-700 font-medium">Jamoaviy qo'llash</span>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 animate-float">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Modern educational technology workspace"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
