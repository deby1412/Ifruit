import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ cartItems, currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 mr-8">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">iF</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">ifruit</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className={`font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-red-500 border-b-2 border-red-500 pb-1' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => handleNavClick('hortifruti')}
              className={`transition-colors ${
                currentPage === 'hortifruti' 
                  ? 'text-red-500 font-medium border-b-2 border-red-500 pb-1' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Hortifruti
            </button>
            <button 
              onClick={() => handleNavClick('bebidas')}
              className={`transition-colors ${
                currentPage === 'bebidas' 
                  ? 'text-red-500 font-medium border-b-2 border-red-500 pb-1' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Bebidas
            </button>
            <button 
              onClick={() => handleNavClick('sobre')}
              className={`transition-colors ${
                currentPage === 'sobre' 
                  ? 'text-red-500 font-medium border-b-2 border-red-500 pb-1' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Sobre
            </button>
            <button 
              onClick={() => handleNavClick('gourmet')}
              className={`transition-colors ${
                currentPage === 'gourmet' 
                  ? 'text-red-500 font-medium border-b-2 border-red-500 pb-1' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            >
              Gourmet
            </button>
            <button 
              onClick={() => handleNavClick('promocoes')}
              className={`font-medium transition-colors ${
                currentPage === 'promocoes' 
                  ? 'text-orange-500 border-b-2 border-orange-500 pb-1' 
                  : 'text-orange-500 hover:text-orange-600'
              }`}
            >
              Promoções
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Busque por item ou loja"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-600">
              <span className="text-sm">Próximo de Tapantunga</span>
              <span className="text-orange-500 text-sm">R$ 0,00</span>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleNavClick('cart')}
                className={`relative p-2 transition-colors ${
                  currentPage === 'cart' 
                    ? 'text-red-500' 
                    : 'text-gray-600 hover:text-red-500'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>

              <button 
                onClick={() => handleNavClick('auth')}
                className={`hidden md:flex items-center space-x-2 transition-colors ${
                  currentPage === 'auth' 
                    ? 'text-red-500' 
                    : 'text-gray-600 hover:text-red-500'
                }`}
              >
                <User className="w-6 h-6" />
              </button>

              <button
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Busque por item ou loja"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`text-left font-medium ${
                    currentPage === 'home' ? 'text-red-500' : 'text-gray-600'
                  }`}
                >
                  Início
                </button>
                <button 
                  onClick={() => handleNavClick('hortifruti')}
                  className={`text-left ${
                    currentPage === 'hortifruti' ? 'text-red-500 font-medium' : 'text-gray-600'
                  }`}
                >
                  Hortifruti
                </button>
                <button 
                  onClick={() => handleNavClick('bebidas')}
                  className={`text-left ${
                    currentPage === 'bebidas' ? 'text-red-500 font-medium' : 'text-gray-600'
                  }`}
                >
                  Bebidas
                </button>
                <button 
                  onClick={() => handleNavClick('sobre')}
                  className={`text-left ${
                    currentPage === 'sobre' ? 'text-red-500 font-medium' : 'text-gray-600'
                  }`}
                >
                  Sobre
                </button>
                <button 
                  onClick={() => handleNavClick('gourmet')}
                  className={`text-left ${
                    currentPage === 'gourmet' ? 'text-red-500 font-medium' : 'text-gray-600'
                  }`}
                >
                  Gourmet
                </button>
                <button 
                  onClick={() => handleNavClick('promocoes')}
                  className={`text-left font-medium ${
                    currentPage === 'promocoes' ? 'text-orange-500' : 'text-orange-500'
                  }`}
                >
                  Promoções
                </button>
                <button 
                  onClick={() => handleNavClick('cart')}
                  className={`text-left font-medium ${
                    currentPage === 'cart' ? 'text-red-500' : 'text-gray-600'
                  }`}
                >
                  Carrinho ({cartItems})
                </button>
                <button 
                  onClick={() => handleNavClick('auth')}
                  className={`text-left font-medium ${
                    currentPage === 'auth' ? 'text-red-500' : 'text-gray-600'
                  }`}
                >
                  Entrar / Cadastrar
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}