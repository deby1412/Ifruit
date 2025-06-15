import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Filter, Search, Droplets, Zap, Coffee } from 'lucide-react';
import { Product } from '../type/Product';
import Footer from './Footer';
import SidebarBebidas from './SidebarBebidas';

interface BebidasPageProps {
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

export default function BebidasPage({ onAddToCart, onToggleFavorite, isFavorite }: BebidasPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos', icon: '🥤' },
    { id: 'sucos', name: 'Sucos', icon: '🧃' },
    { id: 'refrigerantes', name: 'Refrigerantes', icon: '🥤' },
    { id: 'aguas', name: 'Águas', icon: '💧' },
    { id: 'energeticos', name: 'Energéticos', icon: '⚡' },
    { id: 'cafes', name: 'Cafés', icon: '☕' },
    { id: 'chas', name: 'Chás', icon: '🍵' }
  ];

  const products: Product[] = [
    {
      id: 101,
      name: 'Suco de Laranja Natural',
      price: 8.99,
      originalPrice: 10.99,
      image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'sucos',
      unit: '1L',
      supplier: 'Sucos da Fazenda',
      rating: 4.8,
      reviews: 156,
      discount: 18,
      description: 'Suco 100% natural sem conservantes'
    },
    {
      id: 102,
      name: 'Coca-Cola Lata',
      price: 3.49,
      image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'refrigerantes',
      unit: '350ml',
      supplier: 'Distribuidora Premium',
      rating: 4.6,
      reviews: 289,
      description: 'O refrigerante mais famoso do mundo'
    },
    {
      id: 103,
      name: 'Água Mineral Crystal',
      price: 2.99,
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'aguas',
      unit: '500ml',
      supplier: 'Águas Puras',
      rating: 4.7,
      reviews: 124,
      description: 'Água mineral natural de fonte'
    },
    {
      id: 104,
      name: 'Red Bull Energy',
      price: 7.99,
      originalPrice: 9.49,
      image: 'https://images.pexels.com/photos/3008456/pexels-photo-3008456.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'energeticos',
      unit: '250ml',
      supplier: 'Energy Drinks',
      rating: 4.5,
      reviews: 98,
      discount: 16,
      description: 'Energético que te dá asas'
    },
    {
      id: 105,
      name: 'Café Expresso Premium',
      price: 4.99,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'cafes',
      unit: '200ml',
      supplier: 'Café & Cia',
      rating: 4.9,
      reviews: 67,
      description: 'Café expresso encorpado e aromático'
    },
    {
      id: 106,
      name: 'Chá Verde Gelado',
      price: 5.49,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'chas',
      unit: '500ml',
      supplier: 'Chás Naturais',
      rating: 4.4,
      reviews: 89,
      description: 'Chá verde refrescante com antioxidantes'
    },
    {
      id: 107,
      name: 'Suco de Uva Integral',
      price: 12.99,
      image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'sucos',
      unit: '1L',
      supplier: 'Vinícola do Vale',
      rating: 4.8,
      reviews: 145,
      description: 'Suco de uva 100% integral, rico em antioxidantes'
    },
    {
      id: 108,
      name: 'Guaraná Antarctica',
      price: 3.99,
      image: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'refrigerantes',
      unit: '350ml',
      supplier: 'Distribuidora Premium',
      rating: 4.7,
      reviews: 234,
      description: 'O sabor brasileiro que todo mundo ama'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'name': return a.name.localeCompare(b.name);
      default: return b.reviews - a.reviews;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* Hero Section */}
<div
  className="relative text-white py-20"
  style={{
    backgroundImage: "url('/imagem3.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-blue-700 opacity-60"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Bebidas Refrescantes</h1>
    <p className="text-xl md:text-2xl mb-8 text-blue-100">
      Sucos, refrigerantes, águas e muito mais para matar sua sede
    </p>
    <div className="flex flex-wrap justify-center gap-6 text-sm">
      <div className="flex items-center space-x-2">
        <Droplets className="w-5 h-5" />
        <span>Sempre Geladas</span>
      </div>
      <div className="flex items-center space-x-2">
        <Zap className="w-5 h-5" />
        <span>Entrega Rápida</span>
      </div>
      <div className="flex items-center space-x-2">
        <Coffee className="w-5 h-5" />
        <span>Variedade Completa</span>
      </div>
    </div>
  </div>
</div>

      {/* Conteúdo com Sidebar e Produtos */}
      <div className="max-w-7xl mx-auto px-2 py-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-1 w-full -ml-4">
          <SidebarBebidas />
        </div>

        <div className="lg:col-span-4">
          {/* Filtros e Pesquisa */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar bebidas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Lista de Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
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
                    <span className="text-sm text-blue-600 font-medium">{product.supplier}</span>
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
                        <span className="text-lg font-bold text-blue-600">
                          R$ {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">{product.unit}</span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma bebida encontrada</h3>
              <p className="text-gray-600">Tente ajustar os filtros ou termo de busca</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
