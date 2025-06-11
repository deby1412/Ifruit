import React from 'react';
import { ChevronDown, Plus, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Maçã Red Delicious',
    price: 4.59,
    originalPrice: 5.99,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 23,
    organic: false
  },
  {
    id: 2,
    name: 'Ameixa Black Importada Kg',
    price: 1.99,
    originalPrice: 2.49,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 20,
    organic: false
  },
  {
    id: 3,
    name: 'Rúcula Hidropônica Unidade',
    price: 6.99,
    originalPrice: 8.99,
    unit: 'unidade',
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 22,
    organic: true
  },
  {
    id: 4,
    name: 'Laranja Bahia Importada',
    price: 2.99,
    originalPrice: 3.99,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 25,
    organic: false
  },
  {
    id: 5,
    name: 'Batata Inglesa',
    price: 0.71,
    originalPrice: 0.99,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 28,
    organic: false
  },
  {
    id: 6,
    name: 'Pepino Japonês Extra',
    price: 1.59,
    originalPrice: 2.19,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/37528/cucumber-salad-food-healthy-37528.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 27,
    organic: false
  },
  {
    id: 7,
    name: 'Cortes De Alface Americana',
    price: 7.99,
    originalPrice: 9.99,
    unit: 'unidade',
    image: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 20,
    organic: false
  },
  {
    id: 8,
    name: 'Abobrinha Italiana Espaguete 300g',
    price: 9.99,
    originalPrice: 12.99,
    unit: 'unidade',
    image: 'https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 23,
    organic: false
  },
  {
    id: 9,
    name: 'Romã Importada Kg',
    price: 23.9,
    originalPrice: 29.9,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 20,
    organic: false
  },
  {
    id: 10,
    name: 'Couve Flor Ricol Darcy 300g',
    price: 6.99,
    originalPrice: 8.99,
    unit: 'unidade',
    image: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400',
    discount: 22,
    organic: false
  }
];

interface ProductSectionProps {
  onAddToCart: () => void;
}

export default function ProductSection({ onAddToCart }: ProductSectionProps) {
  return (
    <div className="flex-1">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span>🏠</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-800 font-medium">PROMOÇÕES E OFERTAS</span>
      </div>

      {/* Hero Banner */}
      <div className="relative mb-8 rounded-lg overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-red-400 via-orange-400 via-pink-300 via-green-500 to-orange-400 flex items-center justify-center">
          <div className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-lg">
            Destaque da semana
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">PROMOÇÕES E OFERTAS</h1>
          <p className="text-gray-600">Mostrando <strong>10 de 150</strong></p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Ordenando por</span>
          <button className="flex items-center space-x-1 text-sm text-gray-800 font-medium">
            <span>Relevância</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors">
                <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
              </button>
              {product.discount > 0 && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{product.discount}%
                </div>
              )}
            </div>

            <div className="p-3">
              <h3 className="font-medium text-gray-800 text-sm mb-2 line-clamp-2 h-10">
                {product.name}
              </h3>
              
              <div className="mb-2">
                <div className="text-xs text-gray-500 line-through">
                  De: R$ {product.originalPrice.toFixed(2)} /{product.unit}
                </div>
                <div className="text-xs text-gray-600">
                  Por: R$ {product.price.toFixed(2)} /{product.unit}
                </div>
                <div className="text-lg font-bold text-red-600">
                  R$ {product.price.toFixed(2)}
                </div>
              </div>

              <button
                onClick={onAddToCart}
                className="w-full bg-orange-500 text-white py-2 px-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-1 text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Adicionar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}