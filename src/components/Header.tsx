import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';

interface HeaderProps {
  cartItems: number;
  favoriteItems: number;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ cartItems, favoriteItems, currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
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
                className={`transition-colors ${
                  currentPage === 'home' 
                    ? 'text-red-500 font-medium border-b-2 border-red-500 pb-1' 
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
                className={`transition-colors ${
                  currentPage === 'promocoes' 
                    ? 'text-red-500 font-medium border-b-2 border-red-500 pb-1' 
                    : 'text-gray-600 hover:text-red-500'
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
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 text-gray-600">
                <span className="text-sm">Próximo de Tapantunga</span>
                <span className="text-orange-500 text-sm">R$ 0,00</span>
              </div>

              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleNavClick('favorites')}
                  className={`relative p-2 transition-colors ${
                    currentPage === 'favorites' 
                      ? 'text-red-500' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${favoriteItems > 0 ? 'fill-current' : ''}`} />
                  {favoriteItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {favoriteItems}
                    </span>
                  )}
                </button>

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

                <div className="relative group">
                  <button 
                    className={`hidden md:flex items-center space-x-2 p-2 transition-colors ${
                      currentPage === 'auth' || currentPage === 'profile'
                        ? 'text-red-500' 
                        : 'text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <User className="w-6 h-6" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <button
                        onClick={() => handleNavClick('profile')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Meu Perfil
                      </button>
                      <button
                        onClick={() => handleNavClick('auth')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Entrar / Cadastrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}