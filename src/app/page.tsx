import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Владимир Фото
          </h1>
          <p className="text-xl md:text-3xl mb-10 max-w-4xl mx-auto">
            Профессиональная фотосъёмка свадеб, семьи, портретов и love story в Нью-Джерси и Нью-Йорке
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-white text-black px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-200 transition transform hover:scale-105"
          >
            Забронировать съёмку
          </Link>
        </div>
        {/* Фон (замени на свою фотографию) */}
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        </div>
      </section>

      {/* Популярные направления */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Популярные направления</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-3xl font-semibold mb-4">Свадьба</h3>
            <p className="text-gray-600 mb-6">Полный день, love story, 500+ фото, альбом в подарок</p>
            <p className="text-2xl font-bold">от 45 000 ₽</p>
            <Link href="/wedding" className="mt-6 inline-block text-blue-600 font-medium hover:underline">
              Подробнее →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-3xl font-semibold mb-4">Семья / Дети</h3>
            <p className="text-gray-600 mb-6">Тёплые семейные моменты, детские праздники, maternity</p>
            <p className="text-2xl font-bold">от 25 000 ₽</p>
            <Link href="/family" className="mt-6 inline-block text-blue-600 font-medium hover:underline">
              Подробнее →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <h3 className="text-3xl font-semibold mb-4">Портрет / Beauty</h3>
            <p className="text-gray-600 mb-6">Индивидуальные съёмки, модельные портфолио, имиджевые фото</p>
            <p className="text-2xl font-bold">от 18 000 ₽</p>
            <Link href="/portrait" className="mt-6 inline-block text-blue-600 font-medium hover:underline">
              Подробнее →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}