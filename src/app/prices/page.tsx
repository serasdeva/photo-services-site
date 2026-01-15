export default function Prices() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">Цены и пакеты</h1>
      
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Пакеты подобраны под разные сценарии. Цены ориентировочные — точную стоимость обсудим после 
        уточнения деталей вашей съёмки.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-3xl font-bold mb-6 text-center">Базовый</h3>
          <p className="text-5xl font-bold text-center mb-8">от 18 000 ₽</p>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li>1–1.5 часа съёмки</li>
            <li>100+ обработанных фото</li>
            <li>Онлайн-галерея</li>
            <li>Базовая ретушь</li>
          </ul>
          <p className="text-center text-gray-500">Идеально для портретов и мини-сессий</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl border-2 border-blue-200 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
            Самый популярный
          </div>
          <h3 className="text-3xl font-bold mb-6 text-center mt-8">Стандарт</h3>
          <p className="text-5xl font-bold text-center mb-8">от 35 000 ₽</p>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li>3–4 часа съёмки</li>
            <li>300+ обработанных фото</li>
            <li>Love story + основная часть</li>
            <li>Расширенная ретушь</li>
            <li>Альбом в подарок (при заказе полного дня)</li>
          </ul>
          <p className="text-center text-gray-500">Подходит для большинства свадеб и семей</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-3xl font-bold mb-6 text-center">Премиум</h3>
          <p className="text-5xl font-bold text-center mb-8">от 60 000 ₽</p>
          <ul className="space-y-4 text-gray-700 mb-8">
            <li>Полный день (8–12 часов)</li>
            <li>500–800+ фото</li>
            <li>Дополнительные локации</li>
            <li>Профессиональная ретушь</li>
            <li>Флеш-драйв + онлайн-галерея</li>
          </ul>
          <p className="text-center text-gray-500">Для больших свадеб и особых событий</p>
        </div>
      </div>

      <p className="text-center mt-16 text-xl text-gray-600">
        Хотите точный расчёт под вашу дату и идею? → <span className="font-semibold text-blue-600">Напишите мне</span>
      </p>
    </div>
  );
}