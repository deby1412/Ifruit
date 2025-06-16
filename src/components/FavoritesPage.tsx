import React from 'react';
import { Heart, Trash2, Star, ShoppingCart, ArrowLeft } from 'lucide-react';

interface Favorito {
  id: number;
  produtoId: number;
  nomeProduto: string;
  imagemUrl: string;
  categoria: string;
  precoUnitario: number;
  precoOriginal?: number;
  unidade: string;
  rating?: number;
  reviews?: number;
}

interface FavoritesPageProps {
  onNavigate: (page: string) => void;
  favoriteItems: Favorito[];
  onRemoveFromFavorites: (id: number) => void;
  onAddToCart: (item: Favorito) => void;
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
            Voltar à loja
          </button>

          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Nenhum favorito ainda</h2>
            <p className="text-gray-600 mb-6">Adicione produtos que você ama aos seus favoritos</p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Começar a explorar
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
          Voltar à loja
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Meus Favoritos ({favoriteItems.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-100"
            >
              <img
                src={item.imagemUrl}
                alt={item.nomeProduto}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-sm text-red-600 font-medium">{item.categoria}</span>
                    <h3 className="text-lg font-bold text-gray-900">{item.nomeProduto}</h3>
                  </div>
                  <button
                    onClick={() => onRemoveFromFavorites(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-red-500">
                        R$ {item.precoUnitario.toFixed(2)}
                      </span>
                      {item.precoOriginal && (
                        <span className="text-sm text-gray-400 line-through">
                          R$ {item.precoOriginal.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">por {item.unidade}</span>
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-2 rounded-lg hover:from-red-600 hover:to-orange-600 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-1 text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">
                    {item.reviews ?? 0} avaliações
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
