import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PromotionsPage from './components/PromotionsPage';
import AuthPage from './components/AuthPage';
import CartPage from './components/CartPage';
import { CartItem, Product } from './type/Product';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onAddToCart={addToCart} />;
      case 'promocoes':
        return <PromotionsPage onAddToCart={addToCart} />;
      case 'auth':
        return <AuthPage onNavigate={handleNavigate} />;
      case 'cart':
        return (
          <CartPage
            onNavigate={handleNavigate}
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
          />
        );
      case 'hortifruti':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Hortifruti</h1>
              <p className="text-gray-600">Página em desenvolvimento</p>
            </div>
          </div>
        );
      case 'bebidas':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Bebidas</h1>
              <p className="text-gray-600">Página em desenvolvimento</p>
            </div>
          </div>
        );
      case 'sobre':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre</h1>
              <p className="text-gray-600">Página em desenvolvimento</p>
            </div>
          </div>
        );
      case 'gourmet':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Gourmet</h1>
              <p className="text-gray-600">Página em desenvolvimento</p>
            </div>
          </div>
        );
      default:
        return <HomePage onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItems={getTotalItems()} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {renderPage()}
    </div>
  );
}

export default App;