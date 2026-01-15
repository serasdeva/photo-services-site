export default function Family() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">Семейная фотосъёмка</h1>
      
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Тёплые, искренние кадры всей семьи: с детьми, родителями, бабушками-дедушками. 
        Maternity, первые шаги, семейные праздники — всё, что важно сохранить навсегда.
      </p>

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl font-semibold mb-8">Что входит в пакет</h2>
        <ul className="text-left max-w-md mx-auto space-y-4 text-lg">
          <li>1.5–3 часа съёмки</li>
          <li>150–300 обработанных фото</li>
          <li>Несколько локаций (по желанию)</li>
          <li>Онлайн-галерея для скачивания</li>
          <li>Цена от 25 000 ₽</li>
        </ul>
        
        <p className="mt-12 text-2xl font-medium text-gray-800">
          Страница в разработке — скоро добавлю примеры работ и отзывы
        </p>
      </div>
    </div>
  );
}