export default function FeaturesSection() {
  const features = [
    {
      title: "Yangi xodimlarni 2 karra tezroq kompaniyaga adaptatsiya qilish",
      description:
        "Tizimli yondashuv orqali yangi xodimlar kompaniya madaniyati va jarayonlariga tez moslashadi.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Yuqori malakali xodimlar bilimini butun jamoaga tatbiq qilish",
      description:
        "Eng yaxshi tajribalar barcha xodimlar o'rtasida tez va samarali tarqatiladi.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title:
        "Xodimlarni rivojlantirishga ajratilgan sarmoyani 3 karra qisqartirish",
      description:
        "Onlayn ta'lim an'anaviy usullarga nisbatan juda arzon va samarali.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title:
        "Turli viloyatlardagi xodimlarga qulay formatda bilim yetkazish",
      description:
        "Geografik chegaralar muhim emas - barcha xodimlar bir xil sifatli ta'lim oladi.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title:
        "Xodimlar vaqtini tejash. Istalgan vaqt, istalgan joydan bilim olish",
      description:
        "Moslashuvchan jadval va uzoq masofadan o'rganish imkoniyati.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      title:
        "Tizimli ta'limni yo'lga qo'yish orqali xodimlar samaradorligini oshirish",
      description: "Doimiy ta'lim jarayoni xodimlar malakasini muntazam oshiradi.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">NIMA UCHUN </span>
            KOMPANIYALAR <br />ONLAYN TA'LIMNI YO'LGA QO'YADILAR?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition duration-300">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-[1.01] transform transition-all duration-200"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
