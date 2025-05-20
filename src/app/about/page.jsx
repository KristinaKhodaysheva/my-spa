import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-12">

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">О нас</h1>
        <p className="text-lg text-gray-600">
          Добро пожаловать в наш ресторан! Мы создаем уникальные вкусы с душой и любовью.
        </p>
      </div>

      
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Наша история</h2>
        <p className="text-gray-700">
          Основанный в <span className="font-medium">2010 году</span>, наш ресторан прошел путь от
          уютного кафе до одного из самых любимых мест города.
        </p>
      </div>

     
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Наша миссия</h2>
        <p className="text-gray-700">
          Мы стремимся дарить гостям не только еду, но и атмосферу уюта, где каждая трапеза становится праздником.
        </p>
      </div>

    
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Наша команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow text-center">
            <img src="https://img.freepik.com/premium-photo/70s-style-cat-dressed-chef-s-outfit_739548-5253.jpg" alt="" />
            <h3 className="text-xl font-medium">Петр Лесной</h3>
            <p className="text-gray-600">Шеф-повар</p>
          </div>
          <div className="p-4 border rounded-lg shadow text-center">
          <img src="https://png.pngtree.com/png-clipart/20241225/original/pngtree-business-cat-in-glasses-and-office-attire-png-image_18163742.png" alt="" />

            <h3 className="text-xl font-medium">Семен Царев</h3>
            <p className="text-gray-600">Администратор</p>
          </div>
        </div>
      </div>
    </div>
  );
}