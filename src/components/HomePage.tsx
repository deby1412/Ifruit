import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../type/Product';
import Footer from './Footer';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
  onNavigate: (page: string) => void;
}

export default function HomePage({ onAddToCart, onToggleFavorite, isFavorite, onNavigate }: HomePageProps) {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Maçã Gala',
      price: 4.99,
      originalPrice: 6.99,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '29% OFF',
      category: 'Frutas',
      unit: 'kg',
      supplier: 'Hortifruti do João',
      rating: 4.5,
      reviews: 120
    },
    {
      id: 2,
      name: 'Banana Prata',
      price: 3.49,
      originalPrice: 4.99,
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '30% OFF',
      category: 'Frutas',
      unit: 'kg',
      supplier: 'Hortifruti do João',
      rating: 4.2,
      reviews: 80
    },
    {
      id: 3,
      name: 'Tomate Italiano',
      price: 5.99,
      originalPrice: 7.99,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '25% OFF',
      category: 'Verduras',
      unit: 'kg',
      supplier: 'Hortifruti do João',
      rating: 4.0,
      reviews: 50
    },
    {
      id: 4,
      name: 'Alface Americana',
      price: 2.99,
      originalPrice: 3.99,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
      discount: '25% OFF',
      category: 'Verduras',
      unit: 'un',
      supplier: 'Hortifruti do João',
      rating: 4.3,
      reviews: 60
    }
  ];

  const categories = [
    { label: 'Frutas', icon: 'frutas.png', page: 'hortifruti' },
    { label: 'Verduras', icon: 'verduras.png', page: 'hortifruti' },
    { label: 'Legumes', icon: 'legumes.png', page: 'hortifruti' },
    { label: 'Sucos e Bebidas Naturais', icon: 'sucos.png', page: 'bebidas' },
    { label: 'Promoções e Ofertas', icon: 'ofertas.png', page: 'promocoes' },
    { label: 'Shopping', icon: 'shopping.png', page: 'cart' },
    { label: 'Gourmet', icon: 'gourmet.png', page: 'gourmet' },
  ];

  const handleCategoryClick = (page: string) => {
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: "url('/frutas-e-verduras-de-janeiro-capa.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-orange-600 opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Frutas e Verduras
            <span className="block text-white drop-shadow-md">Fresquinhas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Direto do produtor para sua mesa
          </p>
          <button 
            onClick={() => handleCategoryClick('hortifruti')}
            className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Comprar Agora
          </button>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
            {categories.map(({ label, icon, page }) => (
              <button
                key={label}
                onClick={() => handleCategoryClick(page)}
                className="flex flex-col items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <img
                  src={`/icons/${icon}`}
                  alt={label}
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-sm text-gray-700 font-medium text-center leading-tight group-hover:text-red-500 transition-colors">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em destaque */}
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
                  <button
                    onClick={() => onToggleFavorite(product)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        isFavorite(product.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-400'
                      }`} 
                    />
                  </button>
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