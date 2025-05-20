export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="text-4xl font-bold">Связаться с нами</h1>
        <p className="text-lg text-gray-600">Будем рады вашим отзывам и вопросам!</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h3>Адрес</h3>
          <p>ул. Вкусной Еды, 1, Москва</p>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h3>Телефон</h3>
          <p>+7 (495) 888-00-99</p>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h3>Email</h3>
          <p>info@recipeproject.ru</p>
        </div>
      </div>

      <div>
        <h2>Оставить сообщение</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Имя:</label><br />
            <input className="border border-gray-300" id="name" type="text" name="name" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label><br />
            <input  className="border border-gray-300" id="email" type="email" name="email" style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message">Сообщение:</label><br />
            <textarea className="border border-gray-300" id="message" name="message" rows="4" style={{ width: '100%', padding: '8px' }} />
          </div>
          <button className="bg-teal-600 text-white" type="submit" style={{ padding: '10px 20px' }}>Отправить</button>
        </form>
      </div>
    </div>
  );
}
