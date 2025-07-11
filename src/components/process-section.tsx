export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Yo'l xaritasi tasdiqlayimiz",
      description: "Loyihaning asosiy yo'nalishlarini belgilab olamiz",
    },
    {
      number: 2,
      title: "Tex topshiriq tuzib olamiz",
      description: "Barcha talablarni batafsil yozib chiqamiz",
    },
    {
      number: 3,
      title: "Video yozish",
      description: "Professional video kontent yaratamiz",
    },
    {
      number: 4,
      title: "Video montaj",
      description: "Videolarni professional darajada tahrirlaymiz",
    },
    {
      number: 5,
      title: "Test tuzish",
      description: "Sifat nazorati uchun testlar o'tkazamiz",
    },
    {
      number: 6,
      title: "Platformaga yuklash",
      description: "Tayyor kontentni platformaga joylashtirish",
    },
  ];

  const getStepColor = (step: number) => {
    if (step <= 2) return "bg-primary/10 text-primary hover:bg-primary/20";
    if (step <= 4) return "bg-secondary/10 text-secondary hover:bg-secondary/20";
    return "bg-accent/10 text-accent hover:bg-accent/20";
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qanday bosqichlarda{" "}
            <span className="text-primary">XIZMAT KO'RSATAMIZ?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${getStepColor(
                  step.number
                )}`}
              >
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
