export default function CompaniesSection() {
  const companies = [
    {
      name: "Yuksalish maktabi",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5z3nfT5oexkh3mKW-otg7Gn4z9fa9XGzUQ&s",
    },
    {
      name: "Cambridge learning centre",
      logo: "https://api.logobank.uz/media/logos_png/CAMBRIDGE-01.png",
    },
    {
      name: "IELTS zone",
      logo: "https://ieltszone.uz/logo-dark.png",
    },
    {
      name: "Registon renaissance school",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EdUDMXFPLPhoF273s1aQu4TLzAmmTWuppg&s",
    },
    {
      name: "Qorako'l renaissance school",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrA941lcozc8zkd-2V0JaGdu0lyDUBkU8tw&s",
    },
    {
      name: "Thompson school",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOpByngvoaFCM0loAGhx3kYpUIy1yj8BZeDITSHfON2t2BJcrx0szIzmHnbqUlZW3MO0&usqp=CAU",
    },
  ];

  // Triple the companies array for seamless infinite scroll
  const infiniteCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-500 mb-2">
          Bizga ishonch bildirgan mijozlarimiz
        </h3>
        <p className="text-md text-gray-400 mb-8">
          1000+ tayyorlangan darsliklar soni • 30+ loyihalar
        </p>
        
        {/* Infinite scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll whitespace-nowrap">
            {infiniteCompanies.map((company, index) => (
              <div
                key={index}
                className="inline-flex flex-shrink-0 transition-opacity duration-300 group"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-20 p-3 w-auto grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}