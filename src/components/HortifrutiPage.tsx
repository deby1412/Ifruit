import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Filter, Search, Leaf, Award, Truck } from 'lucide-react';
import { Product } from '../type/Product';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface HortifrutiPageProps {
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

export default function HortifrutiPage({ onAddToCart, onToggleFavorite, isFavorite }: HortifrutiPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🥬' },
    { id: 'frutas', name: 'Frutas', icon: '🍎' },
    { id: 'verduras', name: 'Verduras', icon: '🥬' },
    { id: 'legumes', name: 'Legumes', icon: '🥕' },
    { id: 'organicos', name: 'Orgânicos', icon: '🌱' },
    { id: 'temperados', name: 'Temperados', icon: '🌿' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Maçã Gala',
      price: 4.99,
      originalPrice: 6.99,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'frutas',
      unit: 'kg',
      supplier: 'Hortifruti Premium',
      rating: 4.8,
      reviews: 124,
      discount: 29,
      isOrganic: false,
      description: 'Maçãs frescas e crocantes, ideais para lanches saudáveis'
    },
    {
      id: 2,
      name: 'Banana Prata',
      price: 3.49,
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'frutas',
      unit: 'kg',
      supplier: 'Fazenda São José',
      rating: 4.9,
      reviews: 89,
      isOrganic: false,
      description: 'Bananas doces e nutritivas, ricas em potássio'
    },
    {
      id: 3,
      name: 'Alface Americana Orgânica',
      price: 2.99,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'verduras',
      unit: 'unidade',
      supplier: 'Orgânicos da Terra',
      rating: 4.7,
      reviews: 67,
      isOrganic: true,
      description: 'Alface fresca cultivada sem agrotóxicos'
    },
    {
      id: 4,
      name: 'Tomate Italiano',
      price: 5.99,
      originalPrice: 7.49,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'legumes',
      unit: 'kg',
      supplier: 'Horta do Vale',
      rating: 4.6,
      reviews: 156,
      discount: 20,
      isOrganic: false,
      description: 'Tomates suculentos perfeitos para saladas e molhos'
    },
    {
      id: 5,
      name: 'Cenoura Orgânica',
      price: 4.49,
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'legumes',
      unit: 'kg',
      supplier: 'Bio Horta',
      rating: 4.8,
      reviews: 92,
      isOrganic: true,
      description: 'Cenouras orgânicas doces e crocantes'
    },
    {
      id: 6,
      name: 'Manjericão Fresco',
      price: 1.99,
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'temperados',
      unit: 'maço',
      supplier: 'Ervas & Cia',
      rating: 4.9,
      reviews: 43,
      isOrganic: false,
      description: 'Manjericão aromático para temperar seus pratos'
    },
    {
      id: 7,
      name: 'Laranja Lima',
      price: 3.99,
      image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'frutas',
      unit: 'kg',
      supplier: 'Citrus Premium',
      rating: 4.7,
      reviews: 78,
      isOrganic: false,
      description: 'Laranjas doces e suculentas, ricas em vitamina C'
    },
    {
      id: 8,
      name: 'Rúcula Orgânica',
      price: 2.49,
      image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'verduras',
      unit: 'maço',
      supplier: 'Verde Vida',
      rating: 4.8,
      reviews: 55,
      isOrganic: true,
      description: 'Rúcula orgânica com sabor levemente picante'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' ||
      product.category === selectedCategory ||
      (selectedCategory === 'organicos' && product.isOrganic);
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
      {/* Hero com imagem local */}
      <div
        className="relative text-white py-20"
        style={{
          backgroundImage: "url('/imagem2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-700 opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">🥬 Hortifruti Premium</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Frutas, verduras e legumes fresquinhos direto do produtor
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Leaf className="w-5 h-5" />
              <span>100% Frescos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Qualidade Garantida</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Entrega Rápida</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-1 lg:px-2 py-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Sidebar mais à esquerda */}
        <div className="lg:col-span-1 w-full -ml-6">
          <Sidebar />
        </div>

        {/* Conteúdo principal */}
        <div className="lg:col-span-4">
          {/* Filtros */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-sm'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </div>
                  )}
                  {product.isOrganic && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Leaf className="w-3 h-3" />
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
                    <span className="text-sm text-green-600 font-medium">{product.supplier}</span>
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
                        <span className="text-lg font-bold text-green-600">
                          R$ {product.price.toFixed(2)}
                        </span>
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
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
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
