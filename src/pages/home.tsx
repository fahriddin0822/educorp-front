import { Link } from 'wouter'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { courseApi } from '@/lib/api'
import CourseCard from '@/components/course-card'
import { authStorage } from '@/lib/auth'
import { useToast } from '@/hooks/use-toast'
import {
	Users,
	BookOpen,
	Video,
	Monitor,
	Copy,
	Mic,
	TrendingUp,
	Lightbulb,
	PenTool,
	Palette,
	ChevronRight,
	ChevronLeft,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const companies = [
	'Profi pharm service',
	'Novey',
	'Strawberry house',
	'Zarqand',
	'Yuksalish maktabi',
	'Taksi OK',
	'HOUSE MALL',
	'GreenLife',
	'SkyNet',
	'InterLogix',
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

const profits = [
	'80% dan ortiq xodimlari bir lavozimda ( distribyutor, restoran )',
	'Tekuchka katta kompaniyalar ( yiliga 15+ xodim )',
	"Turli hududlarda xizmat ko'rsatuvchi kompanilar",
	'Bir necha filialli kompaniyalar',
	"Texnologik bizneslar ( biznes xodim tajribasiga bog'liq bo'lganlar )",
	"Tez o'sishni ko'zlagan kompaniyalar",
]

export default function Home() {
	const itemRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [itemsPerPage, setItemsPerPage] = useState(6)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [itemWidth, setItemWidth] = useState(0)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollX, setScrollX] = useState(0)
	const { toast } = useToast()
	const user = authStorage.getUser()

	const itemsPerPages = 6

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth
			if (width < 640) setItemsPerPage(2)
			else if (width < 1024) setItemsPerPage(3)
			else setItemsPerPage(6)
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (containerRef.current && itemRef.current) {
			const containerWidth = containerRef.current.offsetWidth
			setItemWidth(containerWidth / itemsPerPages)
		}
	}, [itemsPerPages])

	// Auto move
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide()
		}, 3000)
		return () => clearInterval(interval)
	}, [itemWidth])

	const handleStart = (clientX: number) => {
		setIsDragging(true)
		setStartX(clientX)
	}

	const handleMove = (clientX: number) => {
		if (!isDragging) return
		const diff = clientX - startX
		if (Math.abs(diff) > itemWidth / 3) {
			if (diff > 0) prevSlide()
			else nextSlide()
			setIsDragging(false)
		}
	}

	const handleEnd = () => {
		setIsDragging(false)
	}

	const nextSlide = () => {
		setCurrentIndex(prev => (prev + 1) % companies.length)
	}

	const prevSlide = () => {
		setCurrentIndex(prev => (prev - 1 < 0 ? companies.length - 1 : prev - 1))
	}

	const { data: courses, isLoading } = useQuery({
		queryKey: ['/api/courses'],
		queryFn: courseApi.getAll,
	})

	const handleEnroll = (courseId: number) => {
		if (!user) {
			toast({
				title: 'Authentication Required',
				description: 'Please sign in to enroll in courses',
				variant: 'destructive',
			})
			return
		}

		toast({
			title: 'Enrollment Successful',
			description: 'You have been enrolled in the course!',
		})
	}

	return (
		<div className='min-h-screen overflow-hidden break-words bg-gray-50'>
			{/* Hero Section */}
			<section className='bg-white py-16 lg:py-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-textBold text-gray-900 mb-6'>
								1 OYDA KOMPANIYANGIZDA{' '}
								<span className='text-primary'>ICHKI AKADEMIYANI</span> YO‘LGA
								QO‘YIB BERAMIZ
							</h1>

							<p className='text-base sm:text-lg md:text-xl text-black mb-6 font-textBold'>
								<span className='text-primary'>Smartfon orqali</span>{' '}
								adaptasiya, malaka oshirish, bilimni baholash, rag‘batlantirish
							</p>

							<div className='flex flex-col sm:flex-row gap-4 mb-6'>
								<div className='flex items-center'>
									<div className='w-5 h-5 bg-accent rounded-full flex items-center justify-center mr-3'>
										<Check className='w-3 h-3 text-white' />
									</div>
									<span className='text-gray-700'>Moslashuvchan vaqt</span>
								</div>

								<div className='flex items-center'>
									<div className='w-5 h-5 bg-accent rounded-full flex items-center justify-center mr-3'>
										<Check className='w-3 h-3 text-white' />
									</div>
									<span className='text-gray-700'>Texnik jamoa</span>
								</div>
							</div>

							<div className='w-full sm:w-auto'>
								<Button size='lg' asChild>
									<Link href='/signup'>Hoziroq boshlash</Link>
								</Button>
							</div>
						</div>

						<div className='relative'>
							<img
								src='/images/home_edu.png'
								className='rounded-2xl shadow-xl w-full'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Why online education is required? */}
			<section className='bg-white py-16 lg:py-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-3xl md:text-4xl font-textBold text-gray-900 text-center mb-10 sm:mb-12 leading-snug'>
						<span className='text-primary'>NIMA UCHUN</span> KOMPANIYALAR <br />
						ONLAYN TA‘LIMNI YO‘LGA QO‘YADILAR?
					</h2>
					<div className='grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
						{[
							{
								text: 'Yangi xodimlarni 2 karra tezroq kompaniyaga adaptatsiya qilish',
								image: '/images/home_edu.png',
							},
							{
								text: 'Yuqori malakali xodimlar bilimini butun jamoaga tatbiq qilish',
								image: '/images/image.png',
							},
							{
								text: 'Xodimlarni rivojlantirishga ajratilgan sarmoyani 3 karra qisqartirish imkoni',
								image: '/images/image copy.png',
							},
							{
								text: 'Turli viloyatlardagi xodimlarga qulay formatda bilim yetkazish',
								image: '/images/image copy 2.png',
							},
							{
								text: 'Xodimlar vaqtini tejash. Istalgan vaqt, istalgan joydan bilim olish imkoni',
								image: '/images/image copy 3.png',
							},
							{
								text: 'Tizimli ta’limni yo‘lga qo‘yish orqali xodimlar samaradorligini oshirish',
								image: '/images/image copy 4.png',
							},
						].map((item, index) => (
							<div
								key={index}
								className='flex flex-col items-center text-center space-y-4'
							>
								<img
									src={item.image}
									alt={`Image ${index + 1}`}
									className='w-full max-w-full h-48 object-cover rounded-xl shadow-md'
								/>
								<p className='text-sm sm:text-base text-gray-700 font-medium px-2'>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our purpose */}
			<section className='py-8'>
				<div className='container mx-auto flex flex-col lg:flex-row items-center 2xl:px-24'>
					<div className='left_side w-full lg:w-2/3 mb-8 lg:mb-0 lg:mx-16'>
						<h2 className='font-textBold text-primary text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4'>
							MAQSADIMIZ
						</h2>
						<p className='font-textBold text-black text-sm sm:text-base md:text-lg font-bold mb-4'>
							Korporativ ta’limni qulaylashtirish orqali, xodimlar
							rivojlanishiga hissa qo’shish
						</p>
						<p className='font-textItalic text-black text-sm sm:text-base md:text-lg mb-4'>
							Jamiyat rivojida bizneslarning o’rni katta. Biznes rivojlanishida
							esa, jamoa eng muhim omildir. Biz kompaniyalar xodimlarini
							rivojlantirish orqali, bizneslar rivojiga hissa qo’shish uchun
							yo’lga chiqdik.
						</p>
						<p className='font-textItalic text-black text-sm sm:text-base md:text-lg'>
							Habibulloh Karimov, EDUCORP MChJ rahbari
						</p>
					</div>
					<div className='image_side w-full lg:w-1/3 flex justify-center'>
						<div
							className='w-3/4 sm:w-2/3 md:w-1/2 aspect-square rounded-full overflow-hidden border-4'
							style={{ borderColor: 'var(--primary)' }}
						>
							<img
								src='/images/founder.png'
								alt='Founder'
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Steps of services */}
			<section className='py-16 bg-gray-50 my-14'>
				<div className='container mx-auto px-4'>
					{/* Header */}
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-textBold text-gray-800 mb-4'>
							Qanday bosqichlarda
						</h2>
						<h3 className='text-2xl md:text-3xl font-textBold text-orange-500'>
							XIZMAT KO'RSATAMIZ?
						</h3>
					</div>

					{/* Roadmap */}
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
						<div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Step 1 */}
							<div className='relative lg:-mt-2 lg:bottom-14'>
								<div className='hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2'>
									<div className='w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-orange-500'></div>
								</div>
								<div className='bg-white rounded-lg shadow-lg p-6 lg:-top-12 hover:shadow-xl transition-shadow duration-300'>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4'>
											1
										</div>
										<div className='flex-1'>
											<h4 className='font-textBold text-gray-800 text-lg leading-tight'>
												Yo'l xaritasi tasdiqlayimiz
											</h4>
										</div>
									</div>
									<p className='text-gray-600 text-sm'>
										Loyihaning asosiy yo'nalishlarini belgilab olamiz
									</p>
								</div>
							</div>

							{/* Step 2 */}
							<div className='relative lg:mt-14'>
								<div className='hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2'>
									<div className='w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-orange-500'></div>
								</div>
								<div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-textBold text-lg mr-4'>
											2
										</div>
										<div className='flex-1'>
											<h4 className='font-textBold text-gray-800 text-lg leading-tight'>
												Tex topshiriq tuzib olamiz
											</h4>
										</div>
									</div>
									<p className='text-gray-600 text-sm'>
										Barcha talablarni batafsil yozib chiqamiz
									</p>
								</div>
							</div>

							{/* Step 3 */}
							<div className='relative lg:mt-0 lg:bottom-16'>
								<div className='hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2'>
									<div className='w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-orange-500'></div>
								</div>
								<div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-textBold text-lg mr-4'>
											3
										</div>
										<div className='flex-1'>
											<h4 className='font-textBold text-gray-800 text-lg leading-tight'>
												Video yozish
											</h4>
										</div>
									</div>
									<p className='text-gray-600 text-sm'>
										Professional video kontent yaratamiz
									</p>
								</div>
							</div>

							{/* Step 4 */}
							<div className='relative lg:mt-24 lg:-top-14'>
								<div className='hidden lg:block absolute -top-10 left-1/2 transform -translate-x-1/2'>
									<div className='w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-orange-500'></div>
								</div>
								<div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-textBold text-lg mr-4'>
											4
										</div>
										<div className='flex-1'>
											<h4 className='font-textBold text-gray-800 text-lg leading-tight'>
												Video montaj
											</h4>
										</div>
									</div>
									<p className='text-gray-600 text-sm'>
										Videolarni professional darajada tahrirlaymiz
									</p>
								</div>
							</div>

							{/* Step 5 */}
							<div className='relative lg:mt-24 lg:top-1'>
								<div className='hidden lg:block absolute -top-8 left-1/2 transform -translate-x-1/2'>
									<div className='w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-orange-500'></div>
								</div>
								<div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-textBold text-lg mr-4'>
											5
										</div>
										<div className='flex-1'>
											<h4 className='font-textBold text-gray-800 text-lg leading-tight'>
												Test tuzish
											</h4>
										</div>
									</div>
									<p className='text-gray-600 text-sm'>
										Sifat nazorati uchun testlar o'tkazamiz
									</p>
								</div>
							</div>

							{/* Step 6 */}
							<div className='relative lg:mt-24 lg:-top-14'>
								<div className='hidden lg:block absolute -top-10 left-1/2 transform -translate-x-1/2'>
									<div className='w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-orange-500'></div>
								</div>
								<div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-textBold text-lg mr-4'>
											6
										</div>
										<div className='flex-1'>
											<h4 className='font-textBold text-gray-800 text-lg leading-tight'>
												Platformaga yuklash
											</h4>
										</div>
									</div>
									<p className='text-gray-600 text-sm'>
										Tayyor kontentni platformaga joylashtirish
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Teck stack task */}
			<section className='py-8 max-w-7xl m-auto my-12 '>
				<p className='text-center text-2xl md:text-3xl font-textBold mb-6'>
					TEX TOPSHIRIQ TUZISH
				</p>

				<div className='wrapper flex flex-col md:flex-row items-center md:items-start md:justify-center gap-4 mb-6'>
					<div className='left-side font-textBold w-full md:w-1/4 text-center'>
						<p>Mahsulot bo'yicha</p>
					</div>
					<div className='right-side w-full md:w-2/3'>
						<img
							src='/images/tech-stack1.png'
							alt="Mahsulot bo'yicha"
							className='w-full h-auto'
						/>
					</div>
				</div>

				<div className='wrapper flex flex-col md:flex-row items-center md:items-start md:justify-center gap-4'>
					<div className='left-side font-textBold w-full md:w-1/4 text-center'>
						<p>Ish jarayonlari bo’yicha</p>
					</div>
					<div className='right-side w-full md:w-2/3'>
						<img
							src='/images/tech-stack2.png'
							alt='Ish jarayonlari bo’yicha'
							className='w-full h-auto'
						/>
					</div>
				</div>
			</section>

			{/* Examples of video lessons */}
			<section className='bg-gray-50'>
				<p className='text-black font-textBold text-center text-base sm:text-sm md:text-lg lg:text-3xl mb-4  '>
					VIDEO DARSLIKLARDAN NA’MUNALAR
				</p>
				<div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 m-auto max-w-6xl'>
					{/* Video 1 */}
					<a
						href='https://disk.yandex.ru/i/Ljlpr-57SbgzvQ'
						target='_blank'
						rel='noopener noreferrer'
						className='block'
					>
						<img
							src='/images/vide_thumbnail4.png' // replace with your image
							alt='Video 1'
							className='w-4xl h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200'
						/>
					</a>

					{/* Video 2 */}
					<a
						href='https://disk.yandex.ru/i/ahcs7BbREC5R5Q'
						target='_blank'
						rel='noopener noreferrer'
						className='block'
					>
						<img
							src='/images/vide_thumbnail3.png'
							alt='Video 2'
							className='w-4xl h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200'
						/>
					</a>

					{/* Video 3 */}
					<a
						href='https://disk.yandex.ru/i/eHB9-d_EmgKrgA'
						target='_blank'
						rel='noopener noreferrer'
						className='block'
					>
						<img
							src='/images/vide_thumbnail2.png'
							alt='Video 3'
							className='w-4xl h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200'
						/>
					</a>

					{/* Video 4 */}
					<a
						href='https://disk.yandex.ru/i/JVXZMuRyDq5dhg'
						target='_blank'
						rel='noopener noreferrer'
						className='block'
					>
						<img
							src='/images/vide_thumbnail.png'
							alt='Video 4'
							className='w-4xl h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-200'
						/>
					</a>
				</div>
			</section>

			{/* Results of students */}
			<section className='max-w-6xl m-auto my-16 items-center'>
				<p className='text-black font-textBold text-center text-base sm:text-sm md:text-lg lg:text-3xl mb-4'>
					O’QUVCHILAR NATIJALARI
				</p>

				<img src='/images/result_img.png' alt='' />
			</section>

			{/* EXPERTS WORKING ON YOUR PROJECT */}
			<section className='py-20 relative overflow-hidden max-w-6xl m-auto'>
				{/* Background decoration */}

				<div className='container mx-auto px-4 relative z-10'>
					{/* Header */}
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4  font-textBold'>
							LOYIHANGIZ BO'YICHA
						</h2>
						<h3 className='text-3xl md:text-4xl font-bold mb-6  font-textBold'>
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

			{/* Info about services */}
			<section className='py-16 px-4'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<h2 className='text-4xl font-bold text-gray-800 mb-4 font-textBold'>
							NIMA UCHUN EDUCORP?
						</h2>
						<p className='text-xl text-gray-600  font-textBold'>
							KOMPANIYANGIZGA QANDAY QIYMAT KELTIRAMIZ?
						</p>
					</div>

					{/* Services Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{/* Service 1 */}
						<div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200'>
							<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
								<BookOpen className='w-8 h-8 text-orange-600' />
							</div>
							<h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
								TAJRIBALI JAMOA
							</h3>
							<p className='text-sm text-gray-600 mb-4 text-center'>
								Vaqtingiz va pulingizni tejaymiz. Andragogika (kattalarni
								o'qitish) qoldasiga mos darsliklar tayyorlaymniz
							</p>
							<ul className='text-sm text-gray-700 space-y-2'>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>4 yil+ tajriba
								</li>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									1000+ topshirilgan darsliklar
								</li>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									Xalqaro kompaniyalar bilan hamkorlik
								</li>
							</ul>
						</div>

						{/* Service 2 */}
						<div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200'>
							<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
								<TrendingUp className='w-8 h-8 text-orange-600' />
							</div>
							<h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
								"POD KLYUCH" XIZMAT
							</h3>
							<p className='text-sm text-gray-600 mb-4 text-center'>
								Kompaniyada korporativ o'qituvchi ta'limni yo'lga qo'yishda
								barcha xizmatlarimiz mavjud:
							</p>
							<ul className='text-sm text-gray-700 space-y-2'>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									Darslik metodologiyasi
								</li>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									Video syomka
								</li>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									Video montaj
								</li>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									Test va keys tuzish
								</li>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									LMSda yig'ib berish
								</li>
								<li className='flex items-start'>
									<span className='text-orange-600 mr-2'>•</span>
									T&D tizimni o'rnatish
								</li>
							</ul>
						</div>

						{/* Service 3 */}
						<div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200'>
							<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
								<Users className='w-8 h-8 text-orange-600' />
							</div>
							<h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
								TAYYOR KURSLAR BAZASI
							</h3>
							<p className='text-sm text-gray-600 mb-4 text-center'>
								Kutubxonamizda xodimlar samaradorligini oshiruvchi kurslar
								mavjud.
							</p>
							<p className='text-sm text-gray-700 font-semibold'>
								Bu esa sarmoyangizni 3karra tejalishlga yordam beradi
							</p>
						</div>

						{/* Service 4 */}
						<div className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200'>
							<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
								<Lightbulb className='w-8 h-8 text-orange-600' />
							</div>
							<h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
								QO'LLAB QURISH XIZMATI
							</h3>
							<p className='text-sm text-gray-600 mb-4 text-center'>
								Platformada ishlatishda yuzaga keladigan
							</p>
							<p className='text-sm text-gray-700'>
								savollarimizni vaqtida bartaraf qilish uchun, yil davomida
								texnik bo'limiz xizmat ko'rsatadi
							</p>
						</div>
					</div>

					{/* Call to Action */}
					<div className='text-center mt-12'>
						<button className='inline-flex items-center gap-3 bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
							Batafsil Ma'lumot
						</button>
					</div>
				</div>
			</section>

			{/* Trusted Companies */}
			<section className='bg-gray-50 py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-center text-4xl font-textBold text-gray-900 mb-12'>
						Bizga ishonch bildirgan kompaniyalar
					</h2>

					<div className='flex justify-between items-center -mb-9'>
						<button
							onClick={prevSlide}
							className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'
						>
							<ChevronLeft />
						</button>
						<button
							onClick={nextSlide}
							className='p-2 rounded-full bg-gray-200 hover:bg-gray-300'
						>
							<ChevronRight />
						</button>
					</div>

					<div
						ref={containerRef}
						className='overflow-hidden w-[92%] m-auto'
						onMouseDown={e => handleStart(e.clientX)}
						onMouseMove={e => handleMove(e.clientX)}
						onMouseUp={handleEnd}
						onMouseLeave={handleEnd}
						onTouchStart={e => handleStart(e.touches[0].clientX)}
						onTouchMove={e => handleMove(e.touches[0].clientX)}
						onTouchEnd={handleEnd}
					>
						<div
							className='flex transition-transform duration-500 ease-in-out'
							style={{
								transform: `translateX(-${currentIndex * itemWidth}px)`,
								width: `${companies.length * itemWidth}px`,
							}}
						>
							{companies.concat(companies).map((company, index) => (
								<div
									key={index}
									ref={index === 0 ? itemRef : null}
									className='flex-none px-4'
									style={{ width: `${itemWidth}px` }}
								>
									<div className='text-center text-lg font-semibold text-gray-600'>
										{company}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* For Who? */}
			<section className='py-12'>
				<p className='text-center text-primary font-textBold text-4xl'>
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

			{/* Popular Courses */}
			<section className='py-16 lg:py-24'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
							Mashhur kurslar.
						</h2>
						<Button variant='link' asChild>
							<Link href='/courses'>Barcha kurslar →</Link>
						</Button>
					</div>

					{isLoading ? (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{Array.from({ length: 6 }).map((_, i) => (
								<div key={i} className='animate-pulse'>
									<div className='bg-gray-200 h-48 rounded-lg mb-4'></div>
									<div className='h-4 bg-gray-200 rounded mb-2'></div>
									<div className='h-4 bg-gray-200 rounded w-3/4'></div>
								</div>
							))}
						</div>
					) : (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{courses?.slice(0, 6).map(course => (
								<CourseCard
									key={course.id}
									course={course}
									onEnroll={handleEnroll}
								/>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Newsletter */}
			<section className='bg-primary py-16'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
						Biz bilan aloqa
					</h2>
					<p className='text-xl text-indigo-100 mb-8'>
						Biz siz bilan tez orada bog'lanamiz
					</p>
					<form className='max-w-md mx-auto flex'>
						<input
							type='tel'
							placeholder='Telefon raqamingizni kiriting'
							className='flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300'
						/>
						<button
							type='submit'
							className='bg-secondary text-white px-6 py-3 rounded-r-lg hover:bg-secondary/90 transition-colors'
						>
							Yuborish
						</button>
					</form>
				</div>
			</section>
		</div>
	)
}
