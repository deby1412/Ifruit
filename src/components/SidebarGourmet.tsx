import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SidebarGourmet() {
  const [openSections, setOpenSections] = useState({
    categories: true,
    special: false,
    brand: false,
    price: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow-sm p-6 h-fit">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Filtros Gourmet</h2>

      {/* Categorias */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Categorias
          {openSections.categories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {openSections.categories && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Frutas Premium</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Importados</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Orgânicos Premium</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Exóticos</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Cestas Gourmet</span>
            </label>
          </div>
        )}
      </div>

      {/* Tipos Especiais */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('special')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Seleções Especiais
          {openSections.special ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {openSections.special && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Orgânicos</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Importados</span>
            </label>
          </div>
        )}
      </div>

      {/* Marca */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Marca
          {openSections.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {openSections.brand && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">iFruit Gourmet</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Fazenda Elite</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-purple-500 focus:ring-purple-500" />
              <span className="ml-2 text-sm text-gray-600">Frutas do Mundo</span>
            </label>
          </div>
        )}
      </div>

      {/* Faixa de Preço */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Faixa de Preço
          {openSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {openSections.price && (
          <div className="space-y-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <div className="text-center text-sm font-medium text-purple-700">
                R$ 10,00 até 150,00
              </div>
            </div>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
