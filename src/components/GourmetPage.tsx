import React, { useState } from 'react';
import {
  Heart, ShoppingCart, Star, Filter, Search, Crown, Award, Sparkles
} from 'lucide-react';
import { Product } from '../type/Product';
import Footer from './Footer';
import SidebarGourmet from './SidebarGourmet';

interface GourmetPageProps {
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

export default function GourmetPage({ onAddToCart, onToggleFavorite, isFavorite }: GourmetPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos', icon: '👑' },
    { id: 'frutas-premium', name: 'Frutas Premium', icon: '🍓' },
    { id: 'importados', name: 'Importados', icon: '🌍' },
    { id: 'organicos-premium', name: 'Orgânicos Premium', icon: '🌱' },
    { id: 'exoticos', name: 'Exóticos', icon: '🥭' },
    { id: 'cestas', name: 'Cestas Gourmet', icon: '🧺' }
  ];

  const products: Product[] = [
    {
      id: 201,
      name: 'Morango Orgânico Premium',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'frutas-premium',
      unit: '500g',
      supplier: 'Fazenda Orgânica Elite',
      rating: 4.9,
      reviews: 87,
      discount: 17,
      isOrganic: true,
      description: 'Morangos orgânicos selecionados, doces e suculentos'
    },
    {
      id: 202,
      name: 'Abacate Hass Importado',
      price: 18.99,
      image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'importados',
      unit: 'unidade',
      supplier: 'Importadora Premium',
      rating: 4.8,
      reviews: 156,
      description: 'Abacate Hass importado, cremoso e nutritivo'
    },
    {
      id: 203,
      name: 'Cesta Gourmet Tropical',
      price: 89.99,
      originalPrice: 109.99,
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'cestas',
      unit: 'cesta',
      supplier: 'iFruit Gourmet',
      rating: 4.9,
      reviews: 234,
      discount: 18,
      description: 'Cesta com frutas tropicais selecionadas e exóticas'
    },
    {
      id: 204,
      name: 'Manga Tommy Atkins Premium',
      price: 15.99,
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'exoticos',
      unit: 'kg',
      supplier: 'Frutas Tropicais Elite',
      rating: 4.7,
      reviews: 98,
      description: 'Mangas selecionadas, doces e aromáticas'
    },
    {
      id: 205,
      name: 'Mirtilo Orgânico',
      price: 32.99,
      image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'organicos-premium',
      unit: '250g',
      supplier: 'Berries Orgânicos',
      rating: 4.8,
      reviews: 145,
      isOrganic: true,
      description: 'Mirtilos orgânicos ricos em antioxidantes'
    },
    {
      id: 206,
      name: 'Kiwi Gold Importado',
      price: 22.99,
      image: 'https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'importados',
      unit: 'kg',
      supplier: 'Frutas do Mundo',
      rating: 4.6,
      reviews: 76,
      description: 'Kiwi dourado importado, doce e suculento'
    },
    {
      id: 207,
      name: 'Cesta Premium Orgânica',
      price: 129.99,
      originalPrice: 149.99,
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'cestas',
      unit: 'cesta',
      supplier: 'iFruit Gourmet',
      rating: 4.9,
      reviews: 189,
      discount: 13,
      isOrganic: true,
      description: 'Cesta premium com frutas orgânicas selecionadas'
    },
    {
      id: 208,
      name: 'Pitaya Vermelha',
      price: 28.99,
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'exoticos',
      unit: 'kg',
      supplier: 'Exóticas Premium',
      rating: 4.5,
      reviews: 67,
      description: 'Pitaya vermelha fresca, rica em vitaminas'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'todos' ||
      product.category === selectedCategory ||
      (selectedCategory === 'organicos-premium' && product.isOrganic);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative text-white py-16"
        style={{
          backgroundImage: "url('/imagem5.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10 relative">Gourmet Premium</h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 z-10 relative">
            Frutas e produtos selecionados para paladares exigentes
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm z-10 relative">
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5" />
              <span>Seleção Premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Qualidade Superior</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Experiência Única</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo com Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 -ml-8">
          <SidebarGourmet />
        </div>

        {/* Conteúdo Principal */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 rounded-lg p-6 mb-8 text-center shadow-md">
            <h2 className="text-2xl font-bold text-white mb-2">✨ Linha Gourmet Premium ✨</h2>
            <p className="text-white">Produtos cuidadosamente selecionados para proporcionar uma experiência gastronômica única</p>
          </div>

          {/* Search e filtros */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar produtos gourmet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="popular">Mais Popular</option>
                  <option value="price-low">Menor Preço</option>
                  <option value="price-high">Maior Preço</option>
                  <option value="rating">Melhor Avaliado</option>
                  <option value="name">Nome A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Categorias */}
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 shadow-sm'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-purple-100">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Crown className="w-3 h-3" />
                    <span>PREMIUM</span>
                  </div>
                  {product.discount && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </div>
                  )}
                  {product.isOrganic && (
                    <div className="absolute bottom-12 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Orgânico</span>
                    </div>
                  )}
                  <button
                    onClick={() => onToggleFavorite(product)}
                    className={`absolute bottom-3 right-3 p-2 rounded-full transition-colors ${
                      isFavorite(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium">{product.supplier}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-xs text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-purple-600">R$ {product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">por {product.unit}</span>
                    </div>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-lg transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum produto encontrado</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou termo de busca</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
