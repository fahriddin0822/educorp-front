export default function MissionSection() {
  return (
    <section className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-primary">MAQSADIMIZ</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-semibold">
              Korporativ ta'limni qulaylashtirish orqali, xodimlar rivojlanishiga
              hissa qo'shish
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Jamiyat rivojida bizneslarning o'rni katta. Biznes rivojlanishida
              esa, jamoa eng muhim omildir. Biz kompaniyalar xodimlarini
              rivojlantirish orqali, bizneslar rivojiga hissa qo'shish uchun
              yo'lga chiqdik.
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src="/images/founder.png"
                  alt="Habibulloh Karimov"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Habibulloh Karimov</p>
                <p className="text-gray-600">EDUCORP MChJ rahbari</p>
              </div>
            </div>
          </div>
          <div className="animate-float">
            <img
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Modern education technology and UI/UX design"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
