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
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qanday bosqichlarda{" "}
            <br />
            <span className="text-primary">XIZMAT KO'RSATAMIZ?</span>
          </h2>
        </div>
        <div className='relative max-w-6xl mx-auto'>
          {/* Road Path - Hidden on sm/md, visible on lg */}
          <div className='hidden lg:block absolute inset-0 flex items-center justify-center'>
            <svg
              className='w-full h-64 md:h-96'
              viewBox='0 0 1000 300'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              {/* Main road path */}
              <path
                d='M50 150 Q200 50 350 150 Q500 250 650 150 Q800 50 950 150'
                stroke='#4B5563'
                strokeWidth='40'
                fill='none'
                className='opacity-80'
              />
              {/* Road dashes */}
              <path
                d='M50 150 Q200 50 350 150 Q500 250 650 150 Q800 50 950 150'
                stroke='white'
                strokeWidth='4'
                fill='none'
                strokeDasharray='20,15'
                className='opacity-90'
              />
            </svg>
          </div>

          {/* Step Cards */}
          <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto'>
            {[
              {
                id: 1,
                title: "Yo'l xaritasi tasdiqlaymiz",
                desc: "Loyihaning asosiy yo'nalishlarini belgilab olamiz",
                trianglePos: "bottom-8",
                containerClasses: "lg:-mt-2 lg:bottom-14",
              },
              {
                id: 2,
                title: "Tex topshiriq tuzib olamiz",
                desc: "Barcha talablarni batafsil yozib chiqamiz",
                trianglePos: "-bottom-6",
                containerClasses: "lg:mt-12",
              },
              {
                id: 3,
                title: "Video yozish",
                desc: "Professional video kontent yaratamiz",
                trianglePos: "lg:bottom-6",
                containerClasses: "lg:mt-0 lg:bottom-16",
              },
              {
                id: 4,
                title: "Video montaj",
                desc: "Videolarni professional darajada tahrirlaymiz",
                trianglePos: "-top-10",
                containerClasses: "lg:mt-24 lg:-top-14",
                triangleDirection: "down",
              },
              {
                id: 5,
                title: "Test tuzish",
                desc: "Sifat nazorati uchun testlar o'tkazamiz",
                trianglePos: "-top-8",
                containerClasses: "lg:mt-[30%] lg:top-1",
                triangleDirection: "down",
              },
              {
                id: 6,
                title: "Platformaga yuklash",
                desc: "Tayyor kontentni platformaga joylashtirish",
                trianglePos: "-top-10",
                containerClasses: "lg:mt-24 lg:-top-14",
                triangleDirection: "down",
              },
            ].map(({ id, title, desc, trianglePos, containerClasses, triangleDirection }) => (
              <div
                key={id}
                className={`relative group transition-all duration-200 ${containerClasses} mx-auto w-full`}
              >
                {/* Triangle */}
                <div
                  className={`hidden lg:block absolute ${trianglePos} left-1/2 transform -translate-x-1/2 transition-all duration-200 ${triangleDirection === 'down'
                    ? 'group-hover:-translate-y-1'
                    : 'group-hover:-translate-y-1'
                    }`}
                >
                  <div
                    className={`w-0 h-0 border-l-4 border-r-4 ${triangleDirection === 'down'
                      ? 'border-b-8 border-b-orange-500'
                      : 'border-t-8 border-t-orange-500'
                      } border-transparent`}
                  ></div>
                </div>

                {/* Card */}
                <div className='bg-white w-full min-w-[250px] rounded-lg shadow-lg p-6 transform transition-all duration-200 group-hover:-translate-y-2 group-hover:shadow-xl'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 flex-shrink-0 bg-primary hover:bg-orange-500 transition-all duration-200 rounded-full flex items-center justify-center text-white font-bold text-xl'>
                      {id}
                    </div>
                    <h4 className='font-bold text-gray-800 text-base lg:text-sm leading-tight'>
                      {title}
                    </h4>
                  </div>
                  <p className='text-gray-600 text-sm lg:text-xs'>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
