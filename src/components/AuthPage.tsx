import React, { useState } from 'react';
import {
  User, ArrowLeft, Store, Truck
} from 'lucide-react';

interface AuthPageProps {
  onNavigate: (page: string) => void;
}

export default function AuthPage({ onNavigate }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'customer' | 'supplier' | 'delivery'>('customer');
  const [showPassword] = useState(false);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      businessName: formData.businessName,
      cnpj: formData.cnpj,
      address: formData.address,
      phone: formData.phone,
      vehicleType: formData.vehicleType,
      licenseNumber: formData.licenseNumber,
      userType
    };

    try {
      const response = await fetch(
        isLogin ? 'http://localhost:3000/auth/login' : 'http://localhost:3000/auth/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Erro desconhecido');

      alert(isLogin ? 'Login realizado com sucesso!' : 'Cadastro realizado com sucesso!');
      onNavigate(
        userType === 'supplier' ? 'supplier-dashboard' :
        userType === 'delivery' ? 'delivery-dashboard' :
        'home'
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message || 'Erro ao enviar os dados.');
      } else {
        alert('Erro ao enviar os dados.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-gray-600 hover:text-red-500 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para início
        </button>

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
              : 'Cadastre-se e aproveite nossas ofertas'}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Tipo de conta</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setUserType('customer')}
              className={`p-3 rounded-lg border-2 transition-colors ${userType === 'customer'
                ? 'border-red-500 bg-red-50 text-red-700'
                : 'border-gray-200 hover:border-gray-300'}`}
            >
              <User className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Cliente</span>
            </button>
            <button
              onClick={() => setUserType('supplier')}
              className={`p-3 rounded-lg border-2 transition-colors ${userType === 'supplier'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-200 hover:border-gray-300'}`}
            >
              <Store className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Fornecedor</span>
            </button>
            <button
              onClick={() => setUserType('delivery')}
              className={`p-3 rounded-lg border-2 transition-colors ${userType === 'delivery'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'}`}
            >
              <Truck className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">Entregador</span>
            </button>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && userType === 'supplier' && (
              <input
                name="businessName"
                placeholder="Nome do Negócio"
                required
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            )}
            {!isLogin && (userType === 'customer' || userType === 'delivery') && (
              <input
                name="name"
                placeholder="Seu nome completo"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            )}
            <input
              name="email"
              type="email"
              placeholder="seu@email.com"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
            {!isLogin && (
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirmar senha"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            )}
            {!isLogin && userType === 'delivery' && (
              <>
                <input
                  name="phone"
                  placeholder="Telefone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <select
                  name="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Selecione o tipo de veículo</option>
                  <option value="bike">Bicicleta</option>
                  <option value="motorcycle">Moto</option>
                  <option value="car">Carro</option>
                  <option value="van">Van</option>
                </select>
                <input
                  name="licenseNumber"
                  placeholder="Número da CNH"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </>
            )}
            {!isLogin && (userType === 'supplier' || userType === 'delivery') && (
              <input
                name="address"
                placeholder="Endereço completo"
                required={userType === 'delivery'}
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 rounded-lg font-semibold bg-gradient-to-r ${colorClasses.button} text-white`}
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
              className={`ml-2 font-semibold ${colorClasses.link}`}
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
