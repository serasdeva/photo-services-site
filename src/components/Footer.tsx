import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white/80 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Владимир Фото</h3>
          <p className="text-base leading-relaxed">
            Профессиональная фотосъёмка в Нью-Джерси и Нью-Йорке.<br />
            Свадьбы · Семья · Портреты · Love story · Maternity
          </p>
        </div>

        <div>
          <h4 className="text-xl font-medium text-white mb-6">Навигация</h4>
          <ul className="space-y-3 text-base">
            <li><Link href="/portfolio" className="hover:text-white transition">Портфолио</Link></li>
            <li><Link href="/prices" className="hover:text-white transition">Цены</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Обо мне</Link></li>
            <li><Link href="/contacts" className="hover:text-white transition">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-medium text-white mb-6">Связаться</h4>
          <ul className="space-y-3 text-base">
            <li>📧 vladimir.photo@example.com</li>
            <li>📱 +1 (201) 555-0123</li>
            <li>📍 Secaucus, NJ</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm border-t border-white/10 pt-8">
        © {new Date().getFullYear()} Владимир Фото. Все права защищены.
      </div>
    </footer>
  );
}