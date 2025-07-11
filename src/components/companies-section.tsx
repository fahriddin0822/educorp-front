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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-lg font-semibold text-gray-500 mb-8">
          Bizga ishonch bildirgan mijozlarimiz
        </h3>
        <p className="text-sm text-gray-400 mb-8">
          1000+ tayyorlangan darsliklar soni • 30+ loyihalar
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 hover-scale"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
