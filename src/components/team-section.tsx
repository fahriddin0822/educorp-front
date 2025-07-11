import {
  Presentation,
  Settings,
  Video,
  Scissors,
  Edit,
  FileText,
  Mic,
  Palette,
} from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      title: "METODOLOG",
      description: "Darslik metodologiyasini ishlab chiqish",
      details: "Ta'limiy jarayonni tashkil etish va optimallashtirish",
      icon: Presentation,
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "LMS MENEJER",
      description: "Online platformani boshqarish",
      details: "Dastur va texnik qo'llab-quvvatlash xizmatlari",
      icon: Settings,
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      title: "VIDEO OPERATOR",
      description: "Darslik video operatorlik xizmati",
      details: "Professional video ishlab chiqarish",
      icon: Video,
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      title: "MONTAJ MUTAXASSISI",
      description: "3 bosqichda montaj qilish",
      details: "Yuqori sifatli video montaj xizmatlari",
      icon: Scissors,
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "KOPIRAYTER",
      description: "Matn yaratish va tahrirlash",
      details: "Professional kontent yaratish xizmatlari",
      icon: Edit,
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
    {
      title: "SSENARIST",
      description: "Mutaxassis bilan birgalikda",
      details: "Dars stsenariysini tuzish",
      icon: FileText,
      color: "bg-accent/10 text-accent hover:bg-accent/20",
    },
    {
      title: "DIKTOR",
      description: "Ovozli matn ko'l qan",
      details: "Professional audio yozish xizmatlari",
      icon: Mic,
      color: "bg-primary/10 text-primary hover:bg-primary/20",
    },
    {
      title: "DIZAYNER",
      description: "Onlayn platformalar kompaniya",
      details: "Grafik dizayn va interfeys yaratish",
      icon: Palette,
      color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    },
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LOYIHANGIZ BO'YICHA{" "}
            <span className="text-primary">ISHLAYDIGAN MUTAXASSISLAR</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${member.color}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{member.description}</p>
                <p className="text-xs text-gray-500">{member.details}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300">
            Mutaxassislar bilan tanishish
          </button>
        </div>
      </div>
    </section>
  );
}
