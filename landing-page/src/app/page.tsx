"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Check system preference on mount
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(systemPrefersDark);
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Ganhando com o Digital</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Faturando com
              </span>
              <br />
              Vendas Automáticas
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Descubra como <strong>vender produtos digitais automaticamente</strong> no Instagram 
              com robôs que trabalham 24h por dia para você
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="https://pay.kiwify.com.br/m9Phdr3?afid=Qum1JOMM" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
              >
                🚀 QUERO COMEÇAR AGORA!
              </a>
              <a
                href="#beneficios" 
                className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-bold py-4 px-8 rounded-xl text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer inline-block"
              >
                📋 Ver Todos os Benefícios
              </a>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Suporte via WhatsApp</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Comunidade exclusiva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              O Que Você Vai Receber
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Produtos Prontos</h3>
                <p className="text-gray-600 dark:text-gray-300">Produtos que já vendem todos os dias — você só precisa copiar e colar</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Modelos de Postagens</h3>
                <p className="text-gray-600 dark:text-gray-300">Modelos prontos de postagens e carrosséis estratégicos para começar a vender ainda essa semana</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Robô Automático</h3>
                <p className="text-gray-600 dark:text-gray-300">Robô automático no Direct (ManyChat) que apresenta, atende e vende por você no automático</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Comunidade Exclusiva</h3>
                <p className="text-gray-600 dark:text-gray-300">Comunidade exclusiva de alunos, pra trocar ideias e crescer junto com quem também está aplicando</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Suporte Individual</h3>
                <p className="text-gray-600 dark:text-gray-300">Suporte individual e direto via WhatsApp, com um canal exclusivo só seu para tirar dúvidas com a equipe</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <div className="text-4xl mb-4">📲</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">100% pelo Celular</h3>
                <p className="text-gray-600 dark:text-gray-300">Tudo 100% pelo celular — sem precisar de computador, sem complicações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Conteúdo Completo do Curso
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Aulas Gravadas</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Acesso imediato a 2 horas de aulas gravadas com o passo a passo completo para montar sua estrutura de vendas no Instagram
                </p>
                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
                  <li>✓ Configuração do robô</li>
                  <li>✓ Estratégias de vendas</li>
                  <li>✓ Otimização de conversão</li>
                  <li>✓ Análise de resultados</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">🎥</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Aulas ao Vivo</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Aulas ao vivo toda quinta-feira, pra tirar dúvidas, atualizar estratégias e acelerar seus resultados
                </p>
                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
                  <li>✓ Suporte em tempo real</li>
                  <li>✓ Atualizações de estratégias</li>
                  <li>✓ Networking com outros alunos</li>
                  <li>✓ Dicas exclusivas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantage Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              💡 A Maior Vantagem
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl border border-green-200 dark:border-green-800">
              <div className="text-6xl mb-6">🤖</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Você não precisa aparecer, nem responder ninguém e nem criar conteúdo todos os dias
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                É só seguir o passo a passo e deixar o robô vender por você
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Resultados Reais dos Nossos Alunos
            </h2>
            
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 - Images 1 & 2 */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            ✓
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Resultado WhatsApp</h4>
                            <div className="text-green-500">Venda Automática</div>
                          </div>
                        </div>
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                          <Image
                            src="/images/img_builder_09a30339-9b3c-450d-ab55-7ffa507269fa_f2cb77861ca2413fa694e493739ae0c6.png"
                            alt="Resultado de venda automática no WhatsApp"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            ✓
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Conversa de Venda</h4>
                            <div className="text-green-500">Robô em Ação</div>
                          </div>
                        </div>
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                          <Image
                            src="/images/img_builder_548e66b1-4f47-4977-8c93-3472b95fd90c_8093751d7c904e25b8fc0c830db2aea1.png"
                            alt="Conversa de venda automática"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Slide 2 - Images 3 & 4 */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            ✓
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Resultado Real</h4>
                            <div className="text-green-500">Venda Concluída</div>
                          </div>
                        </div>
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                          <Image
                            src="/images/img_builder_76595e3f-fb65-4bdf-8afd-de73a1f91edd_0d0e5941cb744224941b26551078ba18.jpg"
                            alt="Resultado real de venda"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            ✓
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">Feedback Positivo</h4>
                            <div className="text-green-500">Cliente Satisfeito</div>
                          </div>
                        </div>
                        <div className="relative w-full h-80 rounded-lg overflow-hidden">
                          <Image
                            src="/images/img_builder_e91e596c-ed5d-46b8-87a5-b09d9948b062_8677d7c2c20749859aaeeeb56512f753.jpg"
                            alt="Feedback positivo do cliente"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1].map((index) => (
                  <button 
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index 
                        ? 'bg-purple-600' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">🚀 Comece Hoje Mesmo!</h2>
            <p className="text-xl mb-8">
              Finalize sua inscrição agora mesmo e comece ainda hoje a faturar com vendas automáticas!
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="text-3xl font-bold mb-4">🎯 O QUE VOCÊ VAI CONSEGUIR:</div>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div>
                  <h4 className="font-bold">💰 Vendas Automáticas</h4>
                  <p className="text-sm opacity-90">Robô que vende 24h por dia</p>
                </div>
                <div>
                  <h4 className="font-bold">⏰ Tempo Livre</h4>
                  <p className="text-sm opacity-90">Não precisa ficar respondendo</p>
                </div>
                <div>
                  <h4 className="font-bold">📈 Crescimento Constante</h4>
                  <p className="text-sm opacity-90">Resultados que aumentam</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://pay.kiwify.com.br/m9Phdr3?afid=Qum1JOMM" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 font-bold text-xl py-4 px-12 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
            >
              🚀 QUERO COMEÇAR AGORA!
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  ❓ Preciso aparecer nas redes sociais?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Não! O robô trabalha automaticamente sem você precisar aparecer ou responder ninguém.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  📱 Como funciona o robô?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  O robô no ManyChat apresenta, atende e vende automaticamente no seu Instagram, trabalhando 24h por dia.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  💻 Preciso de computador?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Não! Tudo funciona 100% pelo celular, sem complicações.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  🎥 As aulas são ao vivo?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Você tem acesso imediato às aulas gravadas e também aulas ao vivo toda quinta-feira.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Ganhando com o Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
