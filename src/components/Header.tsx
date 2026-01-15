import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Владимир Фото
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/portfolio" className="text-white/90 hover:text-white transition font-medium">
            Портфолио
          </Link>
          <Link href="/prices" className="text-white/90 hover:text-white transition font-medium">
            Цены
          </Link>
          <Link href="/about" className="text-white/90 hover:text-white transition font-medium">
            Обо мне
          </Link>
          <Link
            href="/contacts"
            className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105"
          >
            Забронировать
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-white text-3xl">☰</button>
        </div>
      </div>
    </header>
  );
}