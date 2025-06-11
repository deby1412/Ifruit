import React from 'react';
import { Truck, Clock, Shield, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f0f9ff%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Frutas Frescas
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                  Direto na Sua Casa
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra a melhor seleção de frutas, verduras e legumes frescos. 
                Entrega rápida e qualidade garantida em cada pedido.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Começar Pedido
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-500 hover:text-green-600 transition-all duration-200">
                Ver Promoções
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Entrega Rápida</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">24h Disponível</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Qualidade Garantida</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">5 Estrelas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Frutas frescas" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">iF</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Mais de 1000+</p>
                    <p className="text-sm text-gray-600">Produtos frescos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Destaque da Semana
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}