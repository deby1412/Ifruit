import React from 'react';
import { Heart, Users, Truck, Award, Leaf, Shield, Clock, MapPin } from 'lucide-react';
import Footer from './Footer';

export default function SobrePage() {
  const stats = [
    { icon: Users, label: 'Clientes Satisfeitos', value: '50.000+' },
    { icon: Truck, label: 'Entregas Realizadas', value: '200.000+' },
    { icon: Award, label: 'Anos de Experiência', value: '15+' },
    { icon: Leaf, label: 'Produtos Orgânicos', value: '500+' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Paixão pela Qualidade',
      description: 'Selecionamos cuidadosamente cada produto para garantir a melhor qualidade para sua família.'
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Apoiamos produtores locais e práticas sustentáveis para um futuro melhor.'
    },
    {
      icon: Shield,
      title: 'Confiança',
      description: 'Transparência em todos os processos, desde a origem até a sua mesa.'
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Entrega rápida e eficiente para que você tenha sempre produtos frescos.'
    }
  ];

  const team = [
    {
      name: 'Anna Júlia Cúrcio',
      role: 'Desenvolvedora Web',
      image: '/Anna.jpg',
      objectPosition: 'center 40%',
      description: 'Traz praticidade e clareza em tudo o que faz.'
    },
    {
      name: 'Arthur Ribeiro',
      role: 'Desenvolvedor web',
      image: '/Arthur.jpg',
      objectPosition: 'center 15%',
      description: 'Gosta de resolver problemas com calma e atenção aos detalhes.'
    },
    {
      name: 'Ana Carolina de Andrade',
      role: 'Desenvolvedora Web',
      image: '/Carol.jpg',
      objectPosition: 'center 15%',
      description: 'Sempre disposta a colaborar e buscar soluções inteligentes.'
    },
    {
      name: 'Débora Valeriano',
      role: 'Desenvolvedora Web',
      image: '/Debora.jpg',
      objectPosition: 'center 30%',
      description: 'Enxerga o todo, mas cuida do que ninguém vê.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section com imagem */}
      <div
        className="relative text-white py-20"
        style={{
          backgroundImage: "url('/imagem4.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-green-800 opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sobre o iFruit</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Conectando você aos melhores produtores locais há mais de 15 anos, levando qualidade e frescor diretamente à sua mesa.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>O iFruit nasceu em 2008 com uma missão simples: conectar famílias brasileiras aos melhores produtos frescos e naturais, diretamente dos produtores locais.</p>
              <p>Começamos como uma pequena feira digital e hoje somos uma das maiores plataformas de hortifruti do país, sempre mantendo nosso compromisso com a qualidade e sustentabilidade.</p>
              <p>Acreditamos que uma alimentação saudável deve ser acessível a todos, e por isso trabalhamos incansavelmente para oferecer os melhores preços sem comprometer a qualidade.</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Nossa história"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              15+ Anos
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e ação em nossa empresa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça as pessoas apaixonadas que fazem o iFruit acontecer todos os dias
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                  style={{ objectPosition: member.objectPosition }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 mb-12">Estamos sempre prontos para ouvir você</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
              <p className="text-gray-600">
                Rua das Frutas, 123<br />
                Centro, São Paulo - SP<br />
                CEP: 01234-567
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário</h3>
              <p className="text-gray-600">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 16h<br />
                Domingo: 9h às 14h
              </p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Atendimento</h3>
              <p className="text-gray-600">
                (11) 1234-5678<br />
                contato@ifruit.com.br<br />
                WhatsApp: (11) 99999-9999
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
