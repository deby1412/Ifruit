import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-orange-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Atendimento</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                Grupo Fartura de Hortifruti S.A. CNPJ:<br />
                04.972.092/0001-22<br />
                Av. Américo Ribeiro dos Santos<br />
                Sumaré, SP - CEP: 13181-715
              </p>
              <p>
                <strong>Canal do Titular de Dados:</strong><br />
                <span className="text-green-600 font-bold">ReclameAQUI</span>
              </p>
              <div>
                <strong>Formas de Pagamento:</strong>
                <div className="flex space-x-2 mt-2">
                  <div className="w-8 h-6 bg-blue-600 rounded"></div>
                  <div className="w-8 h-6 bg-red-600 rounded"></div>
                  <div className="w-8 h-6 bg-orange-500 rounded"></div>
                  <div className="w-8 h-6 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Informações</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Institucional</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Cliente iFruit</a></li>
              <li><a href="#">Regulamento, Termos & Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
            <div className="mt-6 flex space-x-2">
              <div className="bg-gray-800 px-3 py-1 rounded text-white text-xs">Google Play</div>
              <div className="bg-gray-800 px-3 py-1 rounded text-white text-xs">App Store</div>
            </div>
          </div>

          {/* Dúvidas e Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Dúvidas</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Perguntas Frequentes</a></li>
              <li><a href="#">Frete e Entrega</a></li>
              <li><a href="#">Política de Reembolso</a></li>
              <li><a href="#">Encontre um Mercado</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold text-gray-800 mb-3">Redes Sociais</h4>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <Youtube className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-200 mt-8 pt-6">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">iF</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
