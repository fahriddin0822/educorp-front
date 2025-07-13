import { BookOpen, Copy, Mic, Monitor, Palette, PenTool, Users, Video } from "lucide-react"

export default function ForWho() {
    const profits = [
        '80% dan ortiq xodimlari bir lavozimda ( distribyutor, restoran )',
        'Tekuchka katta kompaniyalar ( yiliga 15+ xodim )',
        "Turli hududlarda xizmat ko'rsatuvchi kompanilar",
        'Bir necha filialli kompaniyalar',
        "Texnologik bizneslar ( biznes xodim tajribasiga bog'liq bo'lganlar )",
        "Tez o'sishni ko'zlagan kompaniyalar",
    ]
    
const experts = [
	{
		icon: <BookOpen className='w-8 h-8' />,
		title: 'METODOLOG',
		description: 'Darslik metodologiyasini ishlab chiqish',
		details: "Ta'limiy jarayonni tashkil etish va optimallashtirish",
	},
	{
		icon: <Monitor className='w-8 h-8' />,
		title: 'LMS MENEJER',
		description: 'Online platformani boshqarish',
		details: "Dastur va texnik qo'llab-quvvatlash xizmatlari",
	},
	{
		icon: <Video className='w-8 h-8' />,
		title: 'VIDEO OPERATOR',
		description: 'Darslik video operatorlik xizmati',
		details: 'Professional video ishlab chiqarish',
	},
	{
		icon: <Monitor className='w-8 h-8' />,
		title: 'MONTAJ MUTAXASSISI',
		description: '3 bosqichda montaj qilish',
		details: 'Yuqori sifatli video montaj xizmatlari',
	},
	{
		icon: <Copy className='w-8 h-8' />,
		title: 'KOPIRAYTER',
		description: 'Matn yaratish va tahrirlash',
		details: 'Professional kontent yaratish xizmatlari',
	},
	{
		icon: <PenTool className='w-8 h-8' />,
		title: 'SSENARIST',
		description: 'Mutaxassis bilan birgalikda',
		details: 'Dars stsenariysini tuzish',
	},
	{
		icon: <Mic className='w-8 h-8' />,
		title: 'DIKTOR',
		description: "Ovozli matn ko'l qan",
		details: 'Professional audio yozish xizmatlari',
	},
	{
		icon: <Palette className='w-8 h-8' />,
		title: 'DIZAYNER',
		description: 'Onlayn platformalar kompaniya',
		details: 'Grafik dizayn va interfeys yaratish',
	},
]
    return (
        <div className="wrapper">
            < section className='py-12 my-10' >
                <p className='text-center text-primary font-bold text-4xl mb-8'>
                    Qanday kompaniyalar uchun foydali bo'ladi?
                </p>
                <div className='wrapper w-[80%] m-auto my-4'>
                    <ul className='list-disc font-textBold text-xl my-4'>
                        {
                            profits.map((item, index) => (
                                <li key={index} className='my-3'>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className='py-8 max-w-7xl m-auto my-12'>
                <p className='text-center text-2xl md:text-3xl font-bold mb-6'>
                    TEX TOPSHIRIQ TUZISH
                </p>

                <div className='wrapper bg-white rounded shadow-lg hover:shadow-2xl transform transition duration-300 flex flex-col md:flex-row justify-center items-center gap-4 mb-6 min-h-64'>
                    <div className='left-side font-bold w-full md:w-1/4 text-center flex justify-center items-center text-lg'>
                        <p>Mahsulot bo'yicha</p>
                    </div>
                    <div className='right-side w-full md:w-2/3 flex justify-center items-center'>
                        <div className='border-2 border-black rounded-lg overflow-hidden w-full'>
                            <img
                                src='/images/tech-stack1.png'
                                alt="Mahsulot bo'yicha"
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                </div>

                <div className='wrapper bg-white rounded shadow-lg hover:shadow-2xl transform transition duration-300 flex flex-col md:flex-row justify-center items-center gap-4 min-h-64'>
                    <div className='left-side font-bold w-full md:w-1/4 text-center flex justify-center items-center text-lg'>
                        <p>Ish jarayonlari bo’yicha</p>
                    </div>
                    <div className='right-side w-full md:w-2/3 flex justify-center items-center'>
                        <div className='border-2 border-black rounded-lg overflow-hidden w-full'>
                            <img
                                src='/images/tech-stack2.png'
                                alt='Ish jarayonlari bo’yicha'
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                </div>
            </section>





            {/* Examples of video lessons */}
            <section className='bg-gray-50'>
                <p className='text-black font-bold text-center text-base sm:text-sm md:text-lg lg:text-3xl mb-4'>
                    VIDEO DARSLIKLARDAN NA’MUNALAR
                </p>
                <div className='container w-full grid grid-cols-1 sm:grid-cols-2 gap-12 m-auto max-w-6xl'>
                    {[
                        {
                            href: 'https://disk.yandex.ru/i/Ljlpr-57SbgzvQ',
                            img: '/images/vide_thumbnail4.png',
                            alt: 'Video 1',
                        },
                        {
                            href: 'https://disk.yandex.ru/i/ahcs7BbREC5R5Q',
                            img: '/images/vide_thumbnail3.png',
                            alt: 'Video 2',
                        },
                        {
                            href: 'https://disk.yandex.ru/i/eHB9-d_EmgKrgA',
                            img: '/images/vide_thumbnail2.png',
                            alt: 'Video 3',
                        },
                        {
                            href: 'https://disk.yandex.ru/i/JVXZMuRyDq5dhg',
                            img: '/images/vide_thumbnail.png',
                            alt: 'Video 4',
                        },
                    ].map((video, i) => (
                        <a
                            key={i}
                            href={video.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='block hover:shadow-xl rounded-md transform transition duration-300 '
                        >
                            <img
                                src={video.img}
                                alt={video.alt}
                                className='w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200'
                            />
                        </a>
                    ))}
                </div>


            </section>

            {/* Results of students */}
            <section className='max-w-6xl m-auto my-16 items-center'>
                <p className='text-black font-bold text-center text-base sm:text-sm md:text-lg lg:text-3xl mb-4'>
                    O’QUVCHILAR NATIJALARI
                </p>

                <img src='/images/result_img.png' alt='' />
            </section>

            
        </div>
    )
}