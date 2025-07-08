// About.tsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-white px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Left Side */}
      <div className="md:w-2/3 w-full my-14">

        {/* Heading and Mission */}
        <h1 className="text-3xl font-bold text-orange-600 mb-2">MAQSADIMIZ</h1>
        <h2 className="text-xl font-semibold mb-6 text-black leading-snug">
          Korporativ ta’limni qulaylashtirish orqali, <br />
          xodimlar rivojlanishiga hissa qo’shish
        </h2>

        {/* Paragraph Text */}
        <p className="text-base text-black mb-3">
          Jamiyat rivojida bizneslarning o‘rni katta.
        </p>
        <p className="text-base text-black mb-3">
          Biznes rivojlanishida esa, jamoa eng muhim omildir.
        </p>
        <p className="text-base text-black mb-3">
          Biz kompaniyalar xodimlarini rivojlantirish orqali, <br />
          bizneslar rivojiga hissa qo‘shish uchun yo‘lga chiqdik.
        </p>
        <p className="italic font-medium text-black mt-4">
          Habibulloh Karimov, EDUCORP MChJ rahbari
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-orange-500 overflow-hidden">
        <img
          src="/images/founder.png" // Replace with actual image path
          alt="Habibulloh Karimov"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
