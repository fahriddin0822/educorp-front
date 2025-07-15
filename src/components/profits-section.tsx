import { BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';

export default function ProfitsSection() {
    return (
        <section className='py-16 px-16'>
            {/* Info about services */}
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>
                        NIMA UCHUN EDUCORP?
                    </h2>
                    <p className='text-md text-gray-600 font-semibold'>
                        KOMPANIYANGIZGA QANDAY QIYMAT KELTIRAMIZ?
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Service 1 */}
                    <div className='bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.00] transition-all duration-300 ease-in-out border border-orange-200'>
                        <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
                            <BookOpen className='w-8 h-8 text-orange-600' />
                        </div>
                        <h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
                            TAJRIBALI JAMOA
                        </h3>
                        <p className='text-sm text-gray-600 mb-4 text-center'>
                            Vaqtingiz va pulingizni tejaymiz. Andragogika (kattalarni o'qitish) qoidalariga mos darsliklar tayyorlaymiz.
                        </p>
                        <ul className='text-sm text-gray-700 space-y-2'>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>4 yil+ tajriba
                            </li>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>1000+ topshirilgan darsliklar
                            </li>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>Xalqaro kompaniyalar bilan hamkorlik
                            </li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className='bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.00] transition-all duration-300 ease-in-out border border-orange-200'>
                        <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
                            <TrendingUp className='w-8 h-8 text-orange-600' />
                        </div>
                        <h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
                            "POD KLYUCH" XIZMAT
                        </h3>
                        <p className='text-sm text-gray-600 mb-4 text-center font-descriptionMedium'>
                            Kompaniyada korporativ o'qituvchi ta'limni yo'lga qo'yishda barcha xizmatlarimiz mavjud:
                        </p>
                        <ul className='text-sm text-gray-700 space-y-2'>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>Darslik metodologiyasi
                            </li>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>Video syomka
                            </li>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>Video montaj
                            </li>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>Test va keys tuzish
                            </li>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>LMSda yig'ib berish
                            </li>
                            <li className='flex items-start'>
                                <span className='text-orange-600 mr-2'>•</span>T&D tizimni o'rnatish
                            </li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className='bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.00] transition-all duration-300 ease-in-out border border-orange-200'>
                        <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
                            <Users className='w-8 h-8 text-orange-600' />
                        </div>
                        <h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
                            TAYYOR KURSLAR BAZASI
                        </h3>
                        <p className='text-sm text-gray-600 mb-4 text-center'>
                            Kutubxonamizda xodimlar samaradorligini oshiruvchi kurslar mavjud.
                        </p>
                        <p className='text-sm text-gray-700 font-semibold text-center'>
                            Bu esa sarmoyangizni 3 karra tejashga yordam beradi.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className='bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.00] transition-all duration-300 ease-in-out border border-orange-200'>
                        <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto'>
                            <Lightbulb className='w-8 h-8 text-orange-600' />
                        </div>
                        <h3 className='text-lg font-bold text-gray-800 mb-3 text-center'>
                            QO'LLAB QURISH XIZMATI
                        </h3>
                        <p className='text-sm text-gray-600 mb-4 text-center'>
                            Platformada ishlatishda yuzaga keladigan muammolarni vaqtida bartaraf qilish uchun,
                        </p>
                        <p className='text-sm text-gray-700 text-center'>
                            yil davomida texnik bo'limimiz xizmat ko'rsatadi.
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
    );
}
