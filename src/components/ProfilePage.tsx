import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, User, Mail, Edit3, Save, X, 
  Shield, Heart 
} from 'lucide-react';

// Tipos compatíveis com o backend do seu amigo
interface UserData {
  id?: number;
  nome: string;
  nomeUsuario: string;
  email: string;
  role?: string;
  favoritos?: unknown[];
}

interface ProfilePageProps {
  onNavigate: (page: string) => void;
  userId: number; 
}

export default function ProfilePage({ onNavigate, userId }: ProfilePageProps) {
 
  const [userData, setUserData] = useState<UserData>({
    nome: '',
    nomeUsuario: '',
    email: '',
  });
  
  const [tempUserData, setTempUserData] = useState<UserData>(userData);
  const [isEditing, setIsEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

 
  const mockApi = {
    getUser: async (id: number): Promise<UserData> => ({
      id,
      nome: "Maria Silva",
      nomeUsuario: "maria.silva",
      email: "maria@exemplo.com",
      role: "USER",
      favoritos: []
    }),
    updateUser: async (id: number, data: Partial<UserData>) => {
      console.log("Dados enviados para o backend:", data);
      return { success: true };
    },
    updatePassword: async (id: number, data: { senhaAtual: string; novaSenha: string }) => {
      console.log("Senha enviada para o backend:", data);
      return { success: true };
    }
  };

  
  useEffect(() => {
    mockApi.getUser(userId).then(setUserData);
  }, [userId]);

  
  useEffect(() => {
    setTempUserData(userData);
  }, [userData]);

 
  const handleInputChange = (field: keyof UserData, value: string) => {
    setTempUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    
    await mockApi.updateUser(userId, {
      nome: tempUserData.nome,
      nomeUsuario: tempUserData.nomeUsuario,
      email: tempUserData.email
    });
    setIsEditing(false);
  };

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

   
    const result = await mockApi.updatePassword(userId, {
      senhaAtual: passwordData.currentPassword,
      novaSenha: passwordData.newPassword
    });

    if (result.success) {
      alert("Senha alterada com sucesso!");
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    }
  };

 
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Cabeçalho */}
        <div className="bg-red-500 p-4 text-white flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center">
            <ArrowLeft className="mr-2" /> Voltar
          </button>
          <h1 className="text-xl font-bold">Meu Perfil</h1>
          {isEditing ? (
            <div className="flex gap-2">
              <button onClick={handleSave} className="bg-white text-red-500 px-3 py-1 rounded flex items-center">
                <Save className="mr-1" size={16} /> Salvar
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-3 py-1 rounded flex items-center">
                <X className="mr-1" size={16} /> Cancelar
              </button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)} className="bg-white text-red-500 px-3 py-1 rounded flex items-center">
              <Edit3 className="mr-1" size={16} /> Editar
            </button>
          )}
        </div>

        {/* Corpo */}
        <div className="p-6 grid md:grid-cols-3 gap-6">
          {/* Coluna Esquerda */}
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="w-20 h-20 bg-red-300 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold">
                {userData.nomeUsuario?.charAt(0).toUpperCase()}
              </div>
              <h3 className="font-bold">{userData.nome}</h3>
              <p className="text-sm text-gray-600">{userData.email}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Heart className="mr-2 text-red-500" size={18} /> Favoritos
              </h4>
              <p>{userData.favoritos?.length || 0} itens</p>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-lg font-bold border-b pb-2 mb-4 flex items-center">
                <User className="mr-2" size={18} /> Dados Pessoais
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  {isEditing ? (
                    <input
                      value={tempUserData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    <div className="p-2 bg-gray-100 rounded">{userData.nome}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome de Usuário</label>
                  {isEditing ? (
                    <input
                      value={tempUserData.nomeUsuario}
                      onChange={(e) => handleInputChange('nomeUsuario', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    <div className="p-2 bg-gray-100 rounded">{userData.nomeUsuario}</div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={tempUserData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    <div className="p-2 bg-gray-100 rounded flex items-center">
                      <Mail className="mr-2 text-gray-500" size={16} />
                      {userData.email}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold border-b pb-2 mb-4 flex items-center">
                <Shield className="mr-2" size={18} /> Segurança
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha Atual</label>
                  <div className="relative">
                    <input
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                      className="w-full p-2 border rounded pr-10"
                    />
                    <button 
                      className="absolute right-2 top-2 text-gray-500"
                      onClick={() => setPasswordData({...passwordData, currentPassword: ''})}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nova Senha</label>
                  <div className="relative">
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      className="w-full p-2 border rounded pr-10"
                    />
                    <button 
                      className="absolute right-2 top-2 text-gray-500"
                      onClick={() => setPasswordData({...passwordData, newPassword: ''})}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                <button 
                  onClick={handlePasswordChange}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                >
                  Alterar Senha
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
