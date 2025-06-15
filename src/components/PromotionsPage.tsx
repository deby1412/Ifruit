import React from 'react';
import { Clock, Percent, Tag, Star, Heart } from 'lucide-react';
import { Product } from '../type/Product';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

interface PromotionsPageProps {
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
  onNavigate: (page: string) => void;
}

export default function PromotionsPage({ onAddToCart, onToggleFavorite, isFavorite, onNavigate }: PromotionsPageProps) {
  const promotions: (Product & { timeLeft: string })[] = [
    {
      id: 5,
      name: 'Maçã Fuji Premium',
      price: 3.99,
      originalPrice: 6.99,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '43% OFF',
      timeLeft: '2 dias',
      category: 'Frutas',
      unit: 'kg',
      supplier: 'Frutas do Vale',
      rating: 4.7,
      reviews: 120
    },
    {
      id: 6,
      name: 'Banana Nanica',
      price: 2.99,
      originalPrice: 4.49,
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '33% OFF',
      timeLeft: '1 dia',
      category: 'Frutas',
      unit: 'kg',
      supplier: 'Bananas Brasil',
      rating: 4.5,
      reviews: 98
    },
    {
      id: 7,
      name: 'Tomate Cereja',
      price: 4.99,
      originalPrice: 7.99,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '38% OFF',
      timeLeft: '3 dias',
      category: 'Verduras',
      unit: 'kg',
      supplier: 'Horta Urbana',
      rating: 4.6,
      reviews: 87
    },
    {
      id: 8,
      name: 'Laranja Lima',
      price: 3.49,
      originalPrice: 5.99,
      image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '42% OFF',
      timeLeft: '5 dias',
      category: 'Frutas',
      unit: 'kg',
      supplier: 'Citrus Sul',
      rating: 4.8,
      reviews: 110
    },
    {
      id: 9,
      name: 'Cenoura Baby',
      price: 2.49,
      originalPrice: 3.99,
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '38% OFF',
      timeLeft: '4 dias',
      category: 'Verduras',
      unit: 'kg',
      supplier: 'Horta Urbana',
      rating: 4.4,
      reviews: 75
    },
    {
      id: 10,
      name: 'Abacaxi Pérola',
      price: 4.99,
      originalPrice: 7.99,
      image: 'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '38% OFF',
      timeLeft: '2 dias',
      category: 'Frutas',
      unit: 'un',
      supplier: 'Tropical Frutas',
      rating: 4.7,
      reviews: 65
    },
    {
      id: 11,
      name: 'Brócolis Ninja',
      price: 3.99,
      originalPrice: 5.99,
      image: 'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '33% OFF',
      timeLeft: '1 dia',
      category: 'Verduras',
      unit: 'un',
      supplier: 'Horta Urbana',
      rating: 4.3,
      reviews: 54
    },
    {
      id: 12,
      name: 'Manga Palmer',
      price: 5.99,
      originalPrice: 8.99,
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
      discount: '33% OFF',
      timeLeft: '6 dias',
      category: 'Frutas',
      unit: 'kg',
      supplier: 'Frutas do Vale',
      rating: 4.9,
      reviews: 140
    }
  ];

  const categories = ['Todos', 'Frutas', 'Verduras'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredPromotions = selectedCategory === 'Todos'
    ? promotions
    : promotions.filter(promo => promo.category === selectedCategory);

  const handleProductClick = (productId: number) => {
    if (productId === 5) { // Maçã Fuji Premium
      onNavigate('product-promotion');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero com imagem6.jpg */}
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('/imagem6.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Percent className="w-12 h-12 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold">Promoções</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Ofertas imperdíveis por tempo limitado
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <Clock className="w-6 h-6" />
            <span>Ofertas válidas enquanto durarem os estoques</span>
          </div>
        </div>
      </section>

      {/* Filtro por categoria */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredPromotions.length} ofertas disponíveis
            </h2>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo com Sidebar + Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="col-span-1">
            <Sidebar />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPromotions.map((promo) => (
                <div key={promo.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="relative">
                    <img src={promo.image} alt={promo.name} className="w-full h-48 object-cover" />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {promo.discount}
                    </div>
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={() => onToggleFavorite(promo)}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isFavorite(promo.id)
                              ? 'text-red-500 fill-current'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {promo.timeLeft}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                      {promo.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 cursor-pointer hover:text-red-500 transition-colors" onClick={() => handleProductClick(promo.id)}>
                      {promo.name}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xl font-bold text-red-500">
                          R$ {promo.price.toFixed(2)}/{promo.unit}
                        </span>
                        {promo.originalPrice !== undefined && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            R$ {promo.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleProductClick(promo.id)}
                          className="bg-gray-500 text-white px-3 py-2 rounded-lg hover:bg-gray-600 transition-all font-semibold text-sm"
                        >
                          Ver
                        </button>
                        <button
                          onClick={() => onAddToCart(promo)}
                          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-semibold text-sm"
                        >
                          Adicionar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Especial */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Tag className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">Oferta Especial do Dia</h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Compre R$ 50 em frutas e verduras e ganhe frete grátis!
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Aproveitar Oferta
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}