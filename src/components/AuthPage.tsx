import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft, Store, Truck } from 'lucide-react';

interface AuthPageProps {
  onNavigate: (page: string) => void;
}

export default function AuthPage({ onNavigate }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'customer' | 'supplier' | 'delivery'>('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    cnpj: '',
    address: '',
    phone: '',
    vehicleType: '',
    licenseNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userType === 'supplier') {
      onNavigate('supplier-dashboard');
    } else if (userType === 'delivery') {
      onNavigate('delivery-dashboard');
    } else {
      console.log('Customer form submitted:', formData);
      onNavigate('home');
    }
  };

  const getUserTypeColor = () => {
    switch (userType) {
      case 'supplier': return 'green';
      case 'delivery': return 'blue';
      default: return 'red';
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        border: 'border-red-500',
        bg: 'bg-red-50',
        text: 'text-red-700',
        focus: 'focus:ring-red-500',
        button: 'from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600',
        link: 'text-red-600 hover:text-red-500'
      },
      green: {
        border: 'border-green-500',
        bg: 'bg-green-50',
        text: 'text-green-700',
        focus: 'focus:ring-green-500',
        button: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
        link: 'text-green-600 hover:text-green-500'
      },
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        focus: 'focus:ring-blue-500',
        button: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
        link: 'text-blue-600 hover:text-blue-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const colorClasses = getColorClasses(getUserTypeColor());

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-gray-600 hover:text-red-500 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para início
        </button>

        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">iF</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Entrar na sua conta' : 'Criar nova conta'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin 
              ? 'Acesse sua conta para continuar' 
              : 'Cadastre-se e aproveite nossas ofertas'
            }
          </p>
        </div>

        {/* User Type Selection */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Tipo de conta</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setUserType('customer')}
              className={`p-3 rounded-lg border-2 transition-colors ${
                userType === 'customer'
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <User className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Cliente</span>
            </button>
            <button
              onClick={() => setUserType('supplier')}
              className={`p-3 rounded-lg border-2 transition-colors ${
                userType === 'supplier'
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Store className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Fornecedor</span>
            </button>
            <button
              onClick={() => setUserType('delivery')}
              className={`p-3 rounded-lg border-2 transition-colors ${
                userType === 'delivery'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Truck className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Entregador</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && userType === 'supplier' && (
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Negócio *
                </label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required={!isLogin && userType === 'supplier'}
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                    placeholder="Ex: Hortifruti do João"
                  />
                </div>
              </div>
            )}

            {!isLogin && (userType === 'customer' || userType === 'delivery') && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin && (userType === 'customer' || userType === 'delivery')}
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {!isLogin && userType === 'delivery' && (
              <>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required={!isLogin && userType === 'delivery'}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Veículo *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    required={!isLogin && userType === 'delivery'}
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                  >
                    <option value="">Selecione o tipo de veículo</option>
                    <option value="bike">Bicicleta</option>
                    <option value="motorcycle">Moto</option>
                    <option value="car">Carro</option>
                    <option value="van">Van</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    CNH (se aplicável)
                  </label>
                  <input
                    id="licenseNumber"
                    name="licenseNumber"
                    type="text"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                    placeholder="Número da CNH"
                  />
                </div>
              </>
            )}

            {!isLogin && userType === 'supplier' && (
              <div>
                <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-1">
                  CNPJ
                </label>
                <input
                  id="cnpj"
                  name="cnpj"
                  type="text"
                  value={formData.cnpj}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                  placeholder="00.000.000/0000-00"
                />
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                  placeholder="Sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar senha *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    required={!isLogin}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                    placeholder="Confirme sua senha"
                  />
                </div>
              </div>
            )}

            {!isLogin && (userType === 'supplier' || userType === 'delivery') && (
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Endereço {userType === 'delivery' ? '*' : ''}
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required={!isLogin && userType === 'delivery'}
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 ${colorClasses.focus} focus:border-transparent transition-colors`}
                  placeholder="Endereço completo"
                />
              </div>
            )}
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className={`h-4 w-4 border-gray-300 rounded ${colorClasses.focus}`}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Lembrar de mim
                </label>
              </div>
              <button 
                type="button" 
                className={`text-sm hover:opacity-80 ${colorClasses.link}`}
              >
                Esqueceu a senha?
              </button>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${colorClasses.button} text-white`}
          >
            {isLogin ? 'Entrar' : 'Criar conta'}
          </button>

          <div className="text-center">
            <span className="text-gray-600">
              {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
            </span>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className={`ml-2 font-semibold hover:opacity-80 ${colorClasses.link}`}
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </div>
        </form>

        {/* Benefits */}
        {userType === 'supplier' && (
          <div className="bg-green-50 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-green-800 mb-2">🌱 Benefícios para Fornecedores</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Venda diretamente para consumidores</li>
              <li>• Gerencie seus produtos facilmente</li>
              <li>• Acompanhe vendas em tempo real</li>
              <li>• Sem taxas de cadastro</li>
            </ul>
          </div>
        )}

        {userType === 'delivery' && (
          <div className="bg-blue-50 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-blue-800 mb-2">🚚 Benefícios para Entregadores</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Ganhe dinheiro com flexibilidade de horário</li>
              <li>• Receba pagamentos semanalmente</li>
              <li>• Acompanhe seus ganhos em tempo real</li>
              <li>• Suporte 24/7 para entregadores</li>
            </ul>
          </div>
        )}

        {/* Terms */}
        {!isLogin && (
          <p className="text-center text-xs text-gray-600">
            Ao criar uma conta, você concorda com nossos{' '}
            <button className={colorClasses.link}>
              Termos de Uso
            </button>
            {' '}e{' '}
            <button className={colorClasses.link}>
              Política de Privacidade
            </button>
          </p>
        )}
      </div>
    </div>
  );
}