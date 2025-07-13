import { BookOpen, Copy, Mic, Monitor, Palette, PenTool, Users, Video } from "lucide-react";

export default function ExpertsSection () {
    
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
        <section className='py-20 relative overflow-hidden max-w-7xl m-auto'>
            {/* Background decoration */}

            <div className='container mx-auto px-4 relative z-10'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4  font-textBold'>
                        LOYIHANGIZ BO'YICHA
                    </h2>
                    <h3 className='text-3xl md:text-4xl font-bold mb-6'>
                        ISHLAYDIGAN <span className='text-primary'>MUTAXASSISLAR</span>
                    </h3>
                </div>

                {/* Experts Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className='group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
                        >
                            {/* Icon Circle */}
                            <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300'>
                                {expert.icon}
                            </div>

                            {/* Content */}
                            <h4 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors'>
                                {expert.title}
                            </h4>

                            <p className='text-gray-600 text-sm mb-3 leading-relaxed'>
                                {expert.description}
                            </p>

                            <p className='text-xs text-gray-500 leading-relaxed'>
                                {expert.details}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className='text-center mt-16'>
                    <div className='inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                        <Users className='w-6 h-6' />
                        <span>Mutaxassislar bilan tanishish</span>
                    </div>
                </div>
            </div>
        </section>
    )
}