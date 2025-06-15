import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SidebarBebidas() {
  const [openSections, setOpenSections] = useState({
    categories: true,
    subcategories: false,
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
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Filtros</h2>

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
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Refrigerantes</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Sucos</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Água</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Energéticos</span>
            </label>
          </div>
        )}
      </div>

      {/* Subcategorias */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('subcategories')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Subcategorias
          {openSections.subcategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {openSections.subcategories && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Sem Açúcar</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Com Gas</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Natural</span>
            </label>
          </div>
        )}
      </div>

      {/* Marcas */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-800 mb-3"
        >
          Marcas
          {openSections.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {openSections.brand && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Coca-Cola</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Del Valle</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
              <span className="ml-2 text-sm text-gray-600">Bonafont</span>
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
            <div className="bg-orange-100 p-3 rounded-lg">
              <div className="text-center text-sm font-medium text-orange-700">
                R$ 2,00 até 100,00
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
