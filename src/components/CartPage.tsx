import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, CreditCard, MapPin, Clock } from 'lucide-react';
import { CartItem } from '../type/Product';

interface CartPageProps {
  onNavigate: (page: string) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export default function CartPage({ 
  onNavigate, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}: CartPageProps) {
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryOption === 'delivery' ? (subtotal >= 50 ? 0 : 8.99) : 0;
  const total = subtotal + deliveryFee;

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      onRemoveItem(id);
    } else {
      onUpdateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    // Simulate order processing
    setTimeout(() => {
      alert('Pedido realizado com sucesso! Você receberá um e-mail de confirmação.');
      onClearCart();
      setShowCheckout(false);
      onNavigate('home');
    }, 2000);
  };

  if (cartItems.length === 0) {
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
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Seu carrinho está vazio</h2>
            <p className="text-gray-600 mb-6">Adicione produtos deliciosos ao seu carrinho</p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Começar a comprar
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Meu Carrinho ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})
                  </h2>
                  <button
                    onClick={onClearCart}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    Limpar carrinho
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-lg font-bold text-red-500">
                          R$ {item.price.toFixed(2)}/{item.unit}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            R$ {item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-gray-800">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-600 mt-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Resumo do Pedido</h3>
              
              {/* Delivery Options */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Opção de Entrega</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      value="delivery"
                      checked={deliveryOption === 'delivery'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="text-red-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium">Entrega</span>
                      </div>
                      <p className="text-sm text-gray-600">Em até 2 horas</p>
                    </div>
                    <span className="font-semibold">
                      {subtotal >= 50 ? 'Grátis' : 'R$ 8,99'}
                    </span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryOption === 'pickup'}
                      onChange={(e) => setDeliveryOption(e.target.value)}
                      className="text-red-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium">Retirada</span>
                      </div>
                      <p className="text-sm text-gray-600">Em 30 minutos</p>
                    </div>
                    <span className="font-semibold">Grátis</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Forma de Pagamento</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-red-500"
                    />
                    <CreditCard className="w-5 h-5 text-gray-500" />
                    <span>Cartão de Crédito</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="debit"
                      checked={paymentMethod === 'debit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-red-500"
                    />
                    <CreditCard className="w-5 h-5 text-gray-500" />
                    <span>Cartão de Débito</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === 'pix'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-red-500"
                    />
                    <div className="w-5 h-5 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">
                      P
                    </div>
                    <span>PIX</span>
                  </label>
                </div>
              </div>

              {/* Price Summary */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxa de entrega</span>
                  <span>{deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2)}`}</span>
                </div>
                {subtotal >= 50 && deliveryOption === 'delivery' && (
                  <div className="text-green-600 text-sm">
                    🎉 Você ganhou frete grátis!
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-red-500">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={showCheckout}
                className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {showCheckout ? 'Processando...' : 'Finalizar Pedido'}
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                <p>🔒 Pagamento 100% seguro</p>
                <p>📱 Acompanhe seu pedido em tempo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}