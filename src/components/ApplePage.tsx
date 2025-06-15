import React, { useState } from 'react';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, Clock, Plus, Minus, Share2, MessageCircle } from 'lucide-react';
import { Product } from '../type/Product';

interface ApplePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
}

export default function ApplePage({ onNavigate, onAddToCart, onToggleFavorite, isFavorite }: ApplePageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const appleProduct: Product = {
    id: 5,
    name: 'Maçã Fuji Premium',
    price: 3.99,
    originalPrice: 6.99,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800',
    discount: '43% OFF',
    category: 'Frutas',
    unit: 'kg',
    description: 'Maçãs Fuji Premium selecionadas, conhecidas por sua doçura natural e textura crocante. Colhidas no ponto ideal de maturação, essas maçãs são perfeitas para consumo in natura ou para suas receitas favoritas.',
    supplier: 'Produtor Local',
    rating: 4.8,
    reviews: 127
  };

  const productImages = [
    'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const reviews = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      comment: 'Maçãs deliciosas! Muito frescas e doces. Chegaram em perfeito estado.',
      date: '2 dias atrás',
      verified: true
    },
    {
      id: 2,
      name: 'João Santos',
      rating: 5,
      comment: 'Excelente qualidade! Minhas crianças adoraram. Vou comprar novamente.',
      date: '1 semana atrás',
      verified: true
    },
    {
      id: 3,
      name: 'Ana Costa',
      rating: 4,
      comment: 'Muito boas, só achei que poderiam estar um pouco mais doces.',
      date: '2 semanas atrás',
      verified: false
    }
  ];

  const nutritionalInfo = [
    { nutrient: 'Calorias', value: '52 kcal', per: '100g' },
    { nutrient: 'Carboidratos', value: '14g', per: '100g' },
    { nutrient: 'Fibras', value: '2.4g', per: '100g' },
    { nutrient: 'Vitamina C', value: '4.6mg', per: '100g' },
    { nutrient: 'Potássio', value: '107mg', per: '100g' }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(appleProduct);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => onNavigate('home')}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              Início
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => onNavigate('promocoes')}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              Promoções
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">Maçã Fuji Premium</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('promocoes')}
          className="flex items-center text-gray-600 hover:text-red-500 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para promoções
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt={appleProduct.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {appleProduct.discount}
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                OFERTA LIMITADA
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${appleProduct.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">
                  {appleProduct.category}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  Produto Fresco
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{appleProduct.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8) • 127 avaliações</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-red-500">
                    R$ {appleProduct.price.toFixed(2)}
                  </span>
                  <span className="text-gray-600 ml-2">/{appleProduct.unit}</span>
                </div>
                {appleProduct.originalPrice && (
                  <div className="text-right">
                    <span className="text-lg text-gray-500 line-through">
                      R$ {appleProduct.originalPrice.toFixed(2)}
                    </span>
                    <div className="text-green-600 font-semibold">
                      Economia: R$ {(appleProduct.originalPrice - appleProduct.price).toFixed(2)}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-red-500 text-white p-3 rounded-lg text-center">
                <Clock className="w-5 h-5 inline mr-2" />
                <span className="font-semibold">Oferta válida por tempo limitado!</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade (kg)
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Total: R$ {(appleProduct.price * quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
                <button
                  onClick={() => onToggleFavorite(appleProduct)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors ${
                    isFavorite(appleProduct.id)
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite(appleProduct.id) ? 'fill-current' : ''}`} />
                </button>
                <button className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Informações de Entrega</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Entrega em até 2 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">Produto com garantia de frescor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-600">Colhido hoje pela manhã</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button className="py-4 px-1 border-b-2 border-red-500 text-red-600 font-medium text-sm">
                  Descrição
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  Informações Nutricionais
                </button>
                <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
                  Avaliações ({reviews.length})
                </button>
              </nav>
            </div>

            <div className="p-6">
              {/* Description Tab */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Sobre o Produto</h3>
                <p className="text-gray-600 leading-relaxed">
                  {appleProduct.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Características</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Variedade: Fuji Premium</li>
                      <li>• Origem: Produtores locais selecionados</li>
                      <li>• Sabor: Doce e crocante</li>
                      <li>• Conservação: Geladeira por até 2 semanas</li>
                      <li>• Ideal para: Consumo in natura, sucos, sobremesas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Benefícios</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Rica em fibras e antioxidantes</li>
                      <li>• Fonte de vitamina C</li>
                      <li>• Baixo índice glicêmico</li>
                      <li>• Ajuda na digestão</li>
                      <li>• Fortalece o sistema imunológico</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional Information */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações Nutricionais</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {nutritionalInfo.map((info, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-red-500">{info.value}</div>
                <div className="text-sm text-gray-600">{info.nutrient}</div>
                <div className="text-xs text-gray-500">por {info.per}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Avaliações dos Clientes</h3>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Escrever Avaliação</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-800">{review.name}</span>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            Compra Verificada
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 ml-13">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Produtos Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 13,
                name: 'Maçã Verde',
                price: 4.49,
                originalPrice: 5.99,
                image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
                discount: '25% OFF'
              },
              {
                id: 14,
                name: 'Pêra Williams',
                price: 5.99,
                originalPrice: 7.99,
                image: 'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=400',
                discount: '25% OFF'
              },
              {
                id: 15,
                name: 'Banana Prata',
                price: 3.49,
                originalPrice: 4.99,
                image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
                discount: '30% OFF'
              },
              {
                id: 16,
                name: 'Laranja Lima',
                price: 3.99,
                originalPrice: 5.49,
                image: 'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=400',
                discount: '27% OFF'
              }
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {product.discount}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-red-500">R$ {product.price.toFixed(2)}/kg</span>
                      <span className="text-sm text-gray-500 line-through ml-2">R$ {product.originalPrice.toFixed(2)}</span>
                    </div>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors text-sm font-semibold">
                      Ver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}