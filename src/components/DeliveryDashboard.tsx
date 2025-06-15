import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Package, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Truck, 
  CheckCircle, 
  XCircle,
  Navigation,
  Phone,
  MessageCircle,
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';

interface DeliveryDashboardProps {
  onNavigate: (page: string) => void;
  deliveryPersonName: string;
}

interface DeliveryOrder {
  id: number;
  customerName: string;
  customerPhone: string;
  pickupAddress: string;
  deliveryAddress: string;
  items: string[];
  totalValue: number;
  distance: string;
  estimatedTime: string;
  status: 'pending' | 'accepted' | 'picked_up' | 'delivered' | 'cancelled';
  paymentMethod: string;
  deliveryFee: number;
}

export default function DeliveryDashboard({ onNavigate, deliveryPersonName }: DeliveryDashboardProps) {
  type TabId = 'available' | 'active' | 'history' | 'earnings';
  const [activeTab, setActiveTab] = useState<TabId>('available');
  const [isOnline, setIsOnline] = useState(true);

  // Mock data for delivery orders
  const availableOrders: DeliveryOrder[] = [
    {
      id: 1,
      customerName: 'Maria Silva',
      customerPhone: '(11) 99999-1234',
      pickupAddress: 'Hortifruti do João - Rua das Flores, 123',
      deliveryAddress: 'Rua das Palmeiras, 456 - Apto 302',
      items: ['2kg Maçã', '1kg Banana', '500g Tomate'],
      totalValue: 25.90,
      distance: '2.3 km',
      estimatedTime: '15 min',
      status: 'pending',
      paymentMethod: 'Cartão',
      deliveryFee: 4.50
    },
    {
      id: 2,
      customerName: 'João Santos',
      customerPhone: '(11) 99999-5678',
      pickupAddress: 'Mercado Verde - Av. Principal, 789',
      deliveryAddress: 'Rua do Comércio, 321',
      items: ['1kg Laranja', '2kg Batata', '1 Alface'],
      totalValue: 18.50,
      distance: '1.8 km',
      estimatedTime: '12 min',
      status: 'pending',
      paymentMethod: 'Dinheiro',
      deliveryFee: 3.50
    }
  ];

  const activeOrders: DeliveryOrder[] = [
    {
      id: 3,
      customerName: 'Ana Costa',
      customerPhone: '(11) 99999-9999',
      pickupAddress: 'Hortifruti Premium - Rua Central, 555',
      deliveryAddress: 'Av. das Américas, 1000 - Casa 15',
      items: ['3kg Maçã Gala', '2kg Pêra', '1kg Uva'],
      totalValue: 42.80,
      distance: '3.5 km',
      estimatedTime: '20 min',
      status: 'picked_up',
      paymentMethod: 'PIX',
      deliveryFee: 6.00
    }
  ];

  const todayEarnings = {
    deliveries: 8,
    totalEarnings: 67.50,
    averageRating: 4.8,
    onlineTime: '6h 30min'
  };

  const weeklyStats = {
    deliveries: 45,
    totalEarnings: 337.50,
    averageDeliveryTime: '18 min',
    customerRating: 4.9
  };

  const handleAcceptOrder = (orderId: number) => {
    console.log('Pedido aceito:', orderId);
    // Aqui você implementaria a lógica para aceitar o pedido
  };

  const handleRejectOrder = (orderId: number) => {
    console.log('Pedido rejeitado:', orderId);
    // Aqui você implementaria a lógica para rejeitar o pedido
  };

  const handleCompleteDelivery = (orderId: number) => {
    console.log('Entrega concluída:', orderId);
    // Aqui você implementaria a lógica para marcar como entregue
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-blue-100 text-blue-800';
      case 'picked_up': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Disponível';
      case 'accepted': return 'Aceito';
      case 'picked_up': return 'Coletado';
      case 'delivered': return 'Entregue';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Sair
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Dashboard Entregador</h1>
                  <p className="text-sm text-gray-600">Olá, {deliveryPersonName}!</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Online/Offline Toggle */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Status:</span>
                <button
                  onClick={() => setIsOnline(!isOnline)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isOnline ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isOnline ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>

              {/* Today's Earnings */}
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Hoje</p>
                    <p className="text-lg font-bold text-blue-600">R$ {todayEarnings.totalEarnings.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Package className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Entregas Hoje</p>
                <p className="text-2xl font-bold text-gray-900">{todayEarnings.deliveries}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tempo Online</p>
                <p className="text-2xl font-bold text-gray-900">{todayEarnings.onlineTime}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avaliação</p>
                <p className="text-2xl font-bold text-gray-900">{todayEarnings.averageRating}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Esta Semana</p>
                <p className="text-2xl font-bold text-gray-900">R$ {weeklyStats.totalEarnings.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'available', label: 'Pedidos Disponíveis', icon: Package },
                { id: 'active', label: 'Entregas Ativas', icon: Truck },
                { id: 'history', label: 'Histórico', icon: Calendar },
                { id: 'earnings', label: 'Ganhos', icon: DollarSign }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  onClick={() => setActiveTab(id as TabId)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Available Orders Tab */}
            {activeTab === 'available' && (
              <div className="space-y-4">
                {!isOnline ? (
                  <div className="text-center py-12">
                    <Truck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Você está offline</h3>
                    <p className="text-gray-600 mb-4">Ative seu status para receber pedidos</p>
                    <button
                      onClick={() => setIsOnline(true)}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Ficar Online
                    </button>
                  </div>
                ) : availableOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum pedido disponível</h3>
                    <p className="text-gray-600">Novos pedidos aparecerão aqui automaticamente</p>
                  </div>
                ) : (
                  availableOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{order.customerName}</h3>
                          <p className="text-sm text-gray-600">{order.customerPhone}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">R$ {order.deliveryFee.toFixed(2)}</p>
                          <p className="text-sm text-gray-600">{order.distance} • {order.estimatedTime}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Coleta</p>
                            <p className="text-sm text-gray-600">{order.pickupAddress}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Entrega</p>
                            <p className="text-sm text-gray-600">{order.deliveryAddress}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">Itens:</p>
                        <p className="text-sm text-gray-600">{order.items.join(', ')}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Total do pedido: R$ {order.totalValue.toFixed(2)} • {order.paymentMethod}
                        </p>
                      </div>

                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleAcceptOrder(order.id)}
                          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                        >
                          <CheckCircle className="w-5 h-5" />
                          <span>Aceitar Pedido</span>
                        </button>
                        <button
                          onClick={() => handleRejectOrder(order.id)}
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Active Orders Tab */}
            {activeTab === 'active' && (
              <div className="space-y-4">
                {activeOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <Truck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma entrega ativa</h3>
                    <p className="text-gray-600">Aceite pedidos para começar suas entregas</p>
                  </div>
                ) : (
                  activeOrders.map((order) => (
                    <div key={order.id} className="border border-blue-200 bg-blue-50 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{order.customerName}</h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">R$ {order.deliveryFee.toFixed(2)}</p>
                          <p className="text-sm text-gray-600">{order.distance} • {order.estimatedTime}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Entregar em</p>
                            <p className="text-sm text-gray-600">{order.deliveryAddress}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                          <Navigation className="w-5 h-5" />
                          <span>Navegar</span>
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          <Phone className="w-5 h-5" />
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleCompleteDelivery(order.id)}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                        >
                          <CheckCircle className="w-5 h-5" />
                          <span>Concluir</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Histórico de Entregas</h3>
                <p className="text-gray-600">Suas entregas anteriores aparecerão aqui</p>
              </div>
            )}

            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Ganhos desta semana</p>
                        <p className="text-3xl font-bold">R$ {weeklyStats.totalEarnings.toFixed(2)}</p>
                        <p className="text-blue-100 text-sm">{weeklyStats.deliveries} entregas</p>
                      </div>
                      <Award className="w-12 h-12 text-blue-200" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100">Avaliação média</p>
                        <p className="text-3xl font-bold">{weeklyStats.customerRating}</p>
                        <p className="text-green-100 text-sm">Tempo médio: {weeklyStats.averageDeliveryTime}</p>
                      </div>
                      <Star className="w-12 h-12 text-green-200" />
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo de Ganhos</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Entregas realizadas (semana)</span>
                      <span className="font-medium">{weeklyStats.deliveries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxa média por entrega</span>
                      <span className="font-medium">R$ {(weeklyStats.totalEarnings / weeklyStats.deliveries).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gorjetas recebidas</span>
                      <span className="font-medium">R$ 45.00</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total da semana</span>
                      <span className="text-green-600">R$ {(weeklyStats.totalEarnings + 45).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}