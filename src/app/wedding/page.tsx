export default function Wedding() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">Свадебная фотосъёмка</h1>
      
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        От утренних сборов до первого танца и фейерверка — ловлю каждый искренний момент вашего дня.
      </p>

      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">Популярные пакеты</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Love story + день</h3>
            <p className="text-3xl font-bold mb-6">от 45 000 ₽</p>
            <ul className="space-y-3">
              <li>Love story (1–2 часа)</li>
              <li>Полный день свадьбы</li>
              <li>400–600+ фото</li>
              <li>Альбом в подарок</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Только церемония + банкет</h3>
            <p className="text-3xl font-bold mb-6">от 35 000 ₽</p>
            <ul className="space-y-3">
              <li>4–8 часов съёмки</li>
              <li>300–500+ фото</li>
              <li>Онлайн-галерея</li>
              <li>Расширенная ретушь</li>
            </ul>
          </div>
        </div>

        <p className="text-center mt-12 text-xl text-gray-700">
          Полный расчёт и детали — после вашего сообщения
        </p>
      </div>
    </div>
  );
}