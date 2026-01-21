
import React, { useEffect, useState } from 'react';
import { BENEFITS, PROBLEMS, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-poppins selection:bg-eli-yellow-brand selection:text-eli-black">
      {/* Header & Hero */}
      <header className="relative pt-8 pb-16 md:pb-32 overflow-hidden bg-gradient-to-b from-eli-yellow-brand via-eli-yellow-pastel to-white">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
             {/* Official Logo Section */}
             <div className="flex justify-center mb-10">
               <div className="relative inline-block group">
                 <div className="absolute -inset-4 bg-eli-yellow-brand/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                 <img 
                   src="Logo-sinfondo-finanzasconeli.jpg" 
                   alt="Finanzas con Eli Logo" 
                   className="h-32 md:h-48 w-auto object-contain relative z-10 drop-shadow-md"
                 />
               </div>
             </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-eli-black tracking-tight leading-tight uppercase tracking-tighter">
              Transforma tu relación <br />
              <span className="bg-gradient-to-r from-eli-orange-brand to-eli-yellow-brand bg-clip-text text-transparent">con el dinero</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Mentorías personalizadas para estructurar tus finanzas, reducir el estrés y lograr tu libertad financiera.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToContact}
                className="px-10 py-5 bg-eli-black text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                Agenda tu sesión gratuita
              </button>
              <a 
                href="#ebook"
                className="px-10 py-5 bg-white text-eli-black border-2 border-eli-yellow-brand rounded-full font-bold text-lg hover:bg-eli-yellow-brand transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Mi Ebook
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-[-5%] w-64 h-64 bg-eli-yellow-brand rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-[-5%] w-72 h-72 bg-eli-orange-soft rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
      </header>

      {/* Why Section - With Image */}
      <section className="py-24 bg-white border-y border-eli-yellow-pastel">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-eli-black uppercase tracking-tighter text-center lg:text-left">
                ¿Sientes que tu dinero desaparece cada mes? <br />
                <span className="text-eli-orange-brand">Estás en el lugar correcto.</span>
              </h2>
              <div className="grid gap-4">
                {PROBLEMS.map((problem) => (
                  <div 
                    key={problem.id} 
                    className="flex items-center space-x-4 p-5 rounded-2xl bg-eli-yellow-pastel/10 border border-eli-yellow-brand/20 hover:bg-eli-yellow-pastel/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-eli-yellow-brand flex items-center justify-center text-eli-black">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700 font-medium">{problem.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-square md:aspect-video lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Planificación financiera moderna" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eli-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-xl font-bold italic">"La claridad es el primer paso hacia la libertad."</p>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-eli-orange-brand rounded-full -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Ebook Section - With Enhanced Background */}
      <section id="ebook" className="py-24 bg-eli-yellow-brand relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10 grayscale mix-blend-multiply">
           <img 
            src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Finance background"
           />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative border-8 border-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-eli-yellow-brand rounded-bl-full opacity-50"></div>
            <div className="w-full md:w-2/5 flex justify-center">
              {/* Ebook Mockup */}
              <div className="w-64 h-80 bg-eli-black rounded-lg shadow-2xl p-6 text-white flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                <div>
                  <div className="w-12 h-1 bg-eli-yellow-brand mb-4"></div>
                  <h3 className="text-2xl font-black uppercase leading-tight tracking-tighter">Mandas tú,<br />No el dinero</h3>
                  <p className="text-xs text-gray-400 mt-2 italic">Mini Ebook</p>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-xs font-bold text-eli-yellow-brand">ELI</span>
                  <div className="w-8 h-8 bg-eli-yellow-brand rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-eli-black text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">NUEVO LANZAMIENTO</span>
              <h2 className="text-4xl md:text-5xl font-black text-eli-black mb-6 leading-tight uppercase tracking-tight">Mini Ebook: <br/><span className="text-eli-orange-brand">Mandas tú, No el dinero</span></h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                Toma el control total de tus finanzas personales. Una guía práctica diseñada para quienes quieren resultados inmediatos y una estructura sólida para su prosperidad.
              </p>
              <a 
                href="https://hotmart.com/es/marketplace/productos/mandas-tu-no-el-dinero/A100971190H"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-eli-black text-white rounded-full font-bold text-lg hover:scale-105 shadow-xl transition-all"
              >
                Obtener mi ebook ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-eli-black uppercase tracking-tighter">Lo que aprenderás conmigo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => (
              <div 
                key={benefit.id} 
                className="bg-eli-yellow-brand/5 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-eli-yellow-pastel/30 flex flex-col items-center text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-eli-yellow-brand/20 text-eli-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-eli-yellow-brand group-hover:text-eli-black transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-eli-black uppercase tracking-tighter">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Using Provided Image */}
      <section className="py-24 bg-eli-yellow-pastel/10 overflow-hidden border-t border-eli-yellow-pastel/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-eli-yellow-brand rounded-3xl rotate-3 opacity-30"></div>
              <div className="absolute -inset-4 bg-eli-orange-brand rounded-3xl -rotate-2 opacity-10"></div>
              
              {/* Photo Section with eliana-finazas.png */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white aspect-[9/16] bg-gray-200">
                <img 
                  src="eliana-finazas.png" 
                  alt="Eli - Mentora Financiera" 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                {/* Visual Overlay matching the sticker style in the provided image */}
                <div className="absolute top-6 right-6 flex flex-col items-center opacity-90 scale-90 md:scale-110">
                   <img src="Logo-sinfondo-finanzasconeli.jpg" className="h-16 w-auto drop-shadow-lg" alt="Logo sticker" />
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-eli-yellow-brand px-6 py-3 rounded-xl text-eli-black font-black text-sm shadow-2xl whitespace-nowrap border-2 border-eli-black/5 transform hover:scale-105 transition-transform uppercase tracking-tighter">
                  "Mandas tú, no el dinero"
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-eli-orange-brand font-bold tracking-widest uppercase text-xs mb-4 block px-3 py-1 bg-eli-orange-brand/10 w-fit rounded-full">Conoce a Eli</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-eli-black leading-tight uppercase tracking-tighter">Claridad, planificación y bienestar financiero.</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Soy <strong className="text-eli-orange-brand">Eli</strong>, mentora en organización financiera personal. Mi propósito es ayudarte a transformar tu relación con el dinero a través de mentorías diseñadas a tu medida.
                </p>
                <p>
                  No se trata solo de números, sino de <strong>hábitos y bienestar</strong>. Enseño cómo estructurar las finanzas de forma práctica para que cada mes te sobre dinero, reduzcas el estrés y construyas paso a paso tu libertad financiera.
                </p>
                <p className="bg-eli-yellow-brand/20 p-6 border-l-4 border-eli-yellow-brand rounded-r-lg italic shadow-sm">
                  Si quieres dejar de sentir que tu dinero "desaparece" y comenzar a hacerlo trabajar para ti, estoy aquí para acompañarte en ese cambio.
                </p>
              </div>
              <div className="mt-10 flex items-center space-x-6">
                 <div className="h-px w-12 bg-eli-yellow-brand"></div>
                 <p className="font-quicksand font-bold text-eli-black italic">Tu mejor versión financiera empieza hoy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Section - Full Width Image CTA */}
      <section className="relative h-[400px] flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
          alt="Éxito y libertad financiera" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
        />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Disfruta tu vida mientras alcanzas estabilidad y prosperidad</h2>
          <button 
            onClick={scrollToContact}
            className="px-12 py-5 bg-eli-yellow-brand text-eli-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
          >
            Empezar ahora
          </button>
        </div>
      </section>

      {/* CTA Secondary / Contact */}
      <section id="contacto" className="py-24 bg-gradient-to-r from-eli-yellow-brand to-eli-orange-soft relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-eli-black leading-none uppercase tracking-tighter">¿Listo para comenzar tu cambio?</h2>
          <p className="text-xl text-eli-black/70 mb-4 font-medium">
            Da el primer paso hacia una vida sin estrés financiero. Agenda una sesión exploratoria gratuita y descubramos cómo puedo ayudarte.
          </p>
          <p className="text-lg font-bold text-eli-black mb-12 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-eli-black rounded-full"></span>
            WhatsApp: +55 15 99179-6416
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.link/h87500" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:scale-105 shadow-xl flex items-center justify-center gap-3 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.878-2.053-.978-.275-.099-.475-.15-.675.15-.199.3-.775.978-.95 1.178-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.773-1.665-2.073-.175-.3-.019-.463.13-.613.134-.135.301-.35.451-.525.149-.174.199-.299.299-.499.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.519-.174-.009-.374-.01-.574-.01s-.525.075-.799.375c-.275.3-1.049 1.025-1.049 2.5s1.074 2.9 1.224 3.1c.15.2 2.112 3.225 5.118 4.525.715.309 1.274.494 1.71.632.718.228 1.372.196 1.889.119.576-.087 1.779-.726 2.029-1.426.25-.7.25-1.299.175-1.426-.075-.125-.275-.199-.575-.349z" />
              </svg>
              Chat por WhatsApp
            </a>
            <button 
              onClick={scrollToContact}
              className="w-full md:w-auto px-10 py-5 bg-eli-black text-white rounded-full font-bold text-lg hover:bg-gray-900 transition-all shadow-xl hover:scale-105"
            >
              Agenda Sesión Gratuita
            </button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-eli-yellow-brand/20 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                 <div className="w-10 h-10 bg-eli-yellow-brand rounded-lg flex items-center justify-center font-black text-eli-black text-xs shadow-sm">ELI</div>
                 <span className="text-2xl font-black uppercase tracking-tighter text-eli-black">Finanzas con Eli</span>
              </div>
              <p className="mt-2 text-gray-500 font-light italic">Tu aliada en la libertad financiera.</p>
              <p className="mt-1 text-xs text-gray-400">WhatsApp: +55 15 99179-6416</p>
            </div>
            
            <div className="flex space-x-8">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-eli-orange-brand transition-all transform hover:scale-125 p-2"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400 text-sm font-light">
            &copy; {new Date().getFullYear()} Finanzas con Eli. Todos los derechos reservados. <br className="md:hidden" />
            Empoderando tu bienestar financiero.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
