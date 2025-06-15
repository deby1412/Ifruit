import React from 'react';
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Product } from '../type/Product';

interface FavoritesPageProps {
  onNavigate: (page: string) => void;
  favoriteItems: Product[];
  onRemoveFromFavorites: (id: number) => void;
  onAddToCart: (product: Product) => void;
}

export default function FavoritesPage({ 
  onNavigate, 
  favoriteItems, 
  onRemoveFromFavorites,
  onAddToCart 
}: FavoritesPageProps) {
  if (favoriteItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-600 hover:text-red-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar às compras
          </button>

          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Seus favoritos estão vazios</h2>
            <p className="text-gray-600 mb-6">Adicione produtos aos seus favoritos para encontrá-los facilmente</p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Descobrir produtos
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-gray-600 hover:text-red-500 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continuar comprando
        </button>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Heart className="w-8 h-8 text-red-500 fill-current" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Meus Favoritos ({favoriteItems.length} {favoriteItems.length === 1 ? 'item' : 'itens'})
                </h2>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    {item.discount && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {item.discount}
                      </span>
                    )}
                    <button
                      onClick={() => onRemoveFromFavorites(item.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-lg font-bold text-red-500">
                          R$ {item.price.toFixed(2)}/{item.unit}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            R$ {item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onAddToCart(item)}
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-semibold text-sm flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Adicionar</span>
                      </button>
                      <button
                        onClick={() => onRemoveFromFavorites(item.id)}
                        className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">💝 Compartilhe seus favoritos</h3>
          <p className="mb-4 opacity-90">Envie sua lista de favoritos para amigos e família</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">
              Compartilhar por WhatsApp
            </button>
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">
              Copiar link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}