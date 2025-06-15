import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PromotionsPage from './components/PromotionsPage';
import AuthPage from './components/AuthPage';
import CartPage from './components/CartPage';
import FavoritesPage from './components/FavoritesPage';
import ProfilePage from './components/ProfilePage';
import SupplierDashboard from './components/SupplierDashboard';
import DeliveryDashboard from './components/DeliveryDashboard';
import HortifrutiPage from './components/HortifrutiPage';
import BebidasPage from './components/BebidasPage';
import SobrePage from './components/SobrePage';
import GourmetPage from './components/GourmetPage';
import ProductPromotionPage from './components/ApplePage';
import { CartItem, Product } from './type/Product';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);
  const [supplierName] = useState('Hortifruti do João');
  const [deliveryPersonName] = useState('João Silva');

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

  const addToFavorites = (product: Product) => {
    setFavoriteItems(prevItems => {
      const isAlreadyFavorite = prevItems.find(item => item.id === product.id);
      if (isAlreadyFavorite) {
        return prevItems.filter(item => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const isFavorite = (id: number) => {
    return favoriteItems.some(item => item.id === id);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onAddToCart={addToCart} 
            onToggleFavorite={addToFavorites}
            isFavorite={isFavorite}
            onNavigate={handleNavigate}
          />
        );
      case 'promocoes':
        return (
          <PromotionsPage 
            onAddToCart={addToCart}
            onToggleFavorite={addToFavorites}
            isFavorite={isFavorite}
            onNavigate={handleNavigate}
          />
        );
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
      case 'favorites':
        return (
          <FavoritesPage
            onNavigate={handleNavigate}
            favoriteItems={favoriteItems}
            onRemoveFromFavorites={removeFromFavorites}
            onAddToCart={addToCart}
          />
        );
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'supplier-dashboard':
        return (
          <SupplierDashboard
            onNavigate={handleNavigate}
            supplierName={supplierName}
          />
        );
      case 'delivery-dashboard':
        return (
          <DeliveryDashboard
            onNavigate={handleNavigate}
            deliveryPersonName={deliveryPersonName}
          />
        );
      case 'hortifruti':
        return (
          <HortifrutiPage
            onAddToCart={addToCart}
            onToggleFavorite={addToFavorites}
            isFavorite={isFavorite}
          />
        );
      case 'bebidas':
        return (
          <BebidasPage
            onAddToCart={addToCart}
            onToggleFavorite={addToFavorites}
            isFavorite={isFavorite}
          />
        );
      case 'sobre':
        return <SobrePage />;
      case 'gourmet':
        return (
          <GourmetPage
            onAddToCart={addToCart}
            onToggleFavorite={addToFavorites}
            isFavorite={isFavorite}
          />
        );
      case 'product-promotion':
        return (
          <ProductPromotionPage
            onNavigate={handleNavigate}
            onAddToCart={addToCart}
            onToggleFavorite={addToFavorites}
            isFavorite={isFavorite}
          />
        );
      default:
        return (
          <HomePage 
            onAddToCart={addToCart} 
            onToggleFavorite={addToFavorites}
            isFavorite={isFavorite}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  // Don't show header for dashboards
  const showHeader = !['supplier-dashboard', 'delivery-dashboard', 'profile', 'product-promotion'].includes(currentPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && (
        <Header 
          cartItems={getTotalItems()} 
          favoriteItems={favoriteItems.length}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
      )}
      {renderPage()}
    </div>
  );
}

export default App;