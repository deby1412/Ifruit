import React from 'react';
import { Truck, Clock, Shield, Star } from 'lucide-react';
import { Product } from '../type/Product';
import Footer from '../components/Footer';


interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export default function HomePage({ onAddToCart }: HomePageProps) {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Maçã Gala',
      price: 4.99,
      originalPrice: 6.99,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '29% OFF',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      id: 2,
      name: 'Banana Prata',
      price: 3.49,
      originalPrice: 4.99,
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '30% OFF',
      category: 'Frutas',
      unit: 'kg'
    },
    {
      id: 3,
      name: 'Tomate Italiano',
      price: 5.99,
      originalPrice: 7.99,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '25% OFF',
      category: 'Verduras',
      unit: 'kg'
    },
    {
      id: 4,
      name: 'Alface Americana',
      price: 2.99,
      originalPrice: 3.99,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '25% OFF',
      category: 'Verduras',
      unit: 'un'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Frutas e Verduras
              <span className="block text-yellow-300">Fresquinhas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Direto do produtor para sua mesa
            </p>
            <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Comprar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600 text-sm">Receba em casa em até 2 horas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Sempre Fresco</h3>
              <p className="text-gray-600 text-sm">Produtos colhidos no dia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600 text-sm">100% de satisfação ou seu dinheiro de volta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Melhor Preço</h3>
              <p className="text-gray-600 text-sm">Preços direto do produtor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600">Os melhores produtos com os melhores preços</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {product.discount}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-red-500">R$ {product.price.toFixed(2)}/{product.unit}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">R$ {product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm font-semibold"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Receba nossas ofertas</h2>
          <p className="text-xl mb-8 opacity-90">
            Cadastre-se e seja o primeiro a saber das promoções
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800"
            />
            <button className="bg-orange-500 px-6 py-3 rounded-r-lg font-semibold hover:bg-orange-600 transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}