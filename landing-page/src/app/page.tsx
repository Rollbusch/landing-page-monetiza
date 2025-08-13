"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(systemPrefersDark);
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Monetiza Digital</span>
          </div>
          

        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Monetize Rápido
              </span>
              <br />
              Nas Redes Sociais
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Descubra as <strong>estratégias essenciais</strong> para criar conteúdo viral no 
              TikTok, Kwai e YouTube Shorts com nosso ebook completo
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="https://pay.kirvano.com/ccb57f3c-9283-408b-bf54-9fd6901a0222" 
            target="_blank"
            rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
              >
                🔥 QUERO MEU EBOOK AGORA!
          </a>
          <a
                href="/file.pdf" 
            target="_blank"
            rel="noopener noreferrer"
                className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-bold py-4 px-8 rounded-xl text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer inline-block"
              >
                📖 Ver Prévia do Conteúdo
              </a>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Ebook digital</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Download imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>PDF de alta qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Você pode estar <span className="text-red-500">perdendo oportunidades</span>...
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <div className="text-4xl mb-4">😤</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Conteúdo Sem Estratégia</h3>
                <p className="text-gray-600 dark:text-gray-300">Postando sem conhecer as técnicas que realmente funcionam</p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Perdendo Tempo</h3>
                <p className="text-gray-600 dark:text-gray-300">Tentando descobrir sozinho o que já foi testado e aprovado</p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sem Resultados</h3>
                <p className="text-gray-600 dark:text-gray-300">Criando muito mas não vendo o engajamento que deseja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Nosso Ebook Vai Te Ensinar Tudo!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conteúdo Completo</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Um guia detalhado com todas as estratégias para viralizar
                </p>
                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
                  <li>✓ Estratégias para TikTok</li>
                  <li>✓ Táticas para Kwai</li>
                  <li>✓ Métodos para YouTube Shorts</li>
                  <li>✓ Fórmulas de engajamento</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Estratégias Testadas</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Técnicas comprovadas que realmente funcionam nas redes sociais
                </p>
                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
                  <li>✓ Hooks que prendem atenção</li>
                  <li>✓ Timing perfeito para postar</li>
                  <li>✓ Hashtags que funcionam</li>
                  <li>✓ Formatos que viralizam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Por Que Nosso Ebook é Especial?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fácil de Ler</h3>
                <p className="text-gray-600 dark:text-gray-300">Linguagem simples e direta, perfeito para iniciantes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Estratégias Diretas</h3>
                <p className="text-gray-600 dark:text-gray-300">Sem enrolação, apenas o que realmente funciona</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Exemplos Práticos</h3>
                <p className="text-gray-600 dark:text-gray-300">Cases reais e exemplos que você pode aplicar hoje</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sempre Disponível</h3>
                <p className="text-gray-600 dark:text-gray-300">Acesse quando quiser, onde estiver</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Veja o Que Nossos Alunos Estão Dizendo
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Maria Silva</h4>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  &ldquo;O ebook tem dicas muito boas, principalmente os exemplos de hooks. Recomendo!&rdquo;
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    J
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">João Costa</h4>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  &ldquo;Finalmente um material direto ao ponto. As estratégias são fáceis de entender e aplicar.&rdquo;
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Ana Oliveira</h4>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  &ldquo;Ebook bem completo! Gostei especialmente das partes sobre timing e hashtags.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">📚 Seu Ebook Te Espera!</h2>
            <p className="text-xl mb-8">
              Não perca mais tempo tentando descobrir sozinho. Tenha todas as estratégias em suas mãos!
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 mb-8">
              <div className="text-3xl font-bold mb-4">📖 O QUE VOCÊ VAI ENCONTRAR:</div>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div>
                  <h4 className="font-bold">🔥 Fórmulas Virais</h4>
                  <p className="text-sm opacity-90">Estruturas que fazem conteúdo viralizar</p>
                </div>
                <div>
                  <h4 className="font-bold">⏰ Timing Perfeito</h4>
                  <p className="text-sm opacity-90">Quando postar para máximo alcance</p>
                </div>
                <div>
                  <h4 className="font-bold">💡 Hooks Magnéticos</h4>
                  <p className="text-sm opacity-90">Primeiras frases que prendem atenção</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://pay.kirvano.com/ccb57f3c-9283-408b-bf54-9fd6901a0222" 
          target="_blank"
          rel="noopener noreferrer"
              className="bg-white text-purple-600 font-bold text-xl py-4 px-12 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
            >
              🔥 QUERO MEU EBOOK AGORA!
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
                  ❓ É adequado para iniciantes?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sim! O material foi organizado de forma didática para facilitar o entendimento de quem está começando.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  📱 O que tem no ebook?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Estratégias para TikTok, Kwai e YouTube Shorts, incluindo fórmulas de hooks, timing ideal e técnicas de engajamento.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  💻 Como recebo o ebook?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Após a compra, você recebe o link para download imediato do PDF em seu email.
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
            <p>&copy; 2024 Monetiza Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
