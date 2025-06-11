import React from 'react';
import { Apple, Carrot, Leaf, Cherry } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Frutas',
    icon: Apple,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50',
    count: '150+ produtos'
  },
  {
    id: 2,
    name: 'Verduras',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    count: '80+ produtos'
  },
  {
    id: 3,
    name: 'Legumes',
    icon: Carrot,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-50',
    count: '60+ produtos'
  },
  {
    id: 4,
    name: 'Orgânicos',
    icon: Cherry,
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50',
    count: '40+ produtos'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Nossas Categorias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre os melhores produtos frescos organizados por categoria
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`${category.bgColor} p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.count}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}