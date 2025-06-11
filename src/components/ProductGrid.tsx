import React from 'react';
import { Plus, Star, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Maçã Red Delicious',
    price: 4.59,
    originalPrice: 5.99,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    discount: 23,
    organic: false
  },
  {
    id: 2,
    name: 'Ameixa Black Importada',
    price: 1.99,
    originalPrice: 2.49,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    discount: 20,
    organic: false
  },
  {
    id: 3,
    name: 'Rúcula Hidropônica',
    price: 6.99,
    originalPrice: 8.99,
    unit: 'maço',
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
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
    rating: 4.7,
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
    rating: 4.5,
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
    rating: 4.4,
    discount: 27,
    organic: true
  },
  {
    id: 7,
    name: 'Couve Flor Ricol',
    price: 6.99,
    originalPrice: 8.99,
    unit: 'unidade',
    image: 'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    discount: 22,
    organic: true
  },
  {
    id: 8,
    name: 'Abobrinha Italiana',
    price: 9.99,
    originalPrice: 12.99,
    unit: 'kg',
    image: 'https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.3,
    discount: 23,
    organic: false
  }
];

interface ProductGridProps {
  onAddToCart: () => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Promoções e Ofertas
            </h2>
            <p className="text-gray-600">Mostrando 10 de 150 produtos</p>
          </div>
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option>Ordenar por</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
            <option>Mais vendidos</option>
            <option>Melhor avaliação</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                  {product.organic && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Orgânico
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
                    {product.originalPrice > product.price && (
                      <div className="text-sm text-gray-400 line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={onAddToCart}
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Adicionar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-medium border-2 border-gray-200 hover:border-green-500 hover:text-green-600 transition-all duration-200">
            Ver Mais Produtos
          </button>
        </div>
      </div>
    </section>
  );
}