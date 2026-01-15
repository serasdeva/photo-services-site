export default function Contacts() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-12">Контакты и бронирование</h1>
      
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center mb-10">
          <p className="text-xl mb-6">Напишите или позвоните — обсудим вашу идею съёмки</p>
          
          <div className="space-y-4 text-lg">
            <p>📧 <strong>vladimir.photo@example.com</strong></p>
            <p>📱 <strong>+1 (201) 555-0123</strong></p>
            <p>📍 Secaucus, New Jersey (выезды в Нью-Йорк и окрестности)</p>
          </div>
        </div>
        
        <p className="text-center text-gray-600 text-lg">
          Полноценная форма заявки появится в ближайшее время
        </p>
      </div>
    </div>
  );
}