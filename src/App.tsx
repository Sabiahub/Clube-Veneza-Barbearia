import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, CheckCircle2, ChevronRight, ArrowLeft, Instagram, ChevronLeft, Calendar, MessageCircle, Menu, X, Zap, Sparkles } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { locations, plans, servicesList, professionals } from './data';
import type { Location, Plan } from './types';
import { Testimonials } from './Testimonials';

interface UnitSelectorProps {
  selectedId: string | undefined;
  onSelect: (loc: Location) => void;
}

function UnitSelector({ selectedId, onSelect }: UnitSelectorProps) {
  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className="grid grid-cols-2 gap-4 md:gap-8 py-4">
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            whileHover={{ y: -5 }}
            onClick={() => onSelect(loc)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSelect(loc);
              }
            }}
            className={`group text-left relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md
              ${selectedId === loc.id 
                ? 'border-zinc-300/50 bg-zinc-900/40 shadow-[0_0_15px_rgba(228,228,231,0.15)] scale-[1.02] z-10' 
                : 'border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700/80 hover:shadow-xl'
              }`}
          >
            <div className="aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden">
              <img
                src={loc.imageUrl}
                alt={loc.name}
                className="w-full h-full object-cover sm:object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 sm:bg-transparent z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85 z-0" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6 z-10">
              <h3 className="font-serif text-sm sm:text-2xl font-bold text-white mb-1 sm:mb-2 flex items-center justify-between">
                <span className="truncate pr-2">{loc.name.replace('Comper ', 'Unidade ')}</span>
                <motion.div
                  animate={{ opacity: selectedId === loc.id ? 1 : 0 }}
                  className="text-zinc-300 bg-zinc-900/50 backdrop-blur-sm border border-zinc-300/30 p-1 rounded-full shadow-[0_0_10px_rgba(228,228,231,0.1)] shrink-0"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </motion.div>
              </h3>
              <div className="overflow-hidden">
                <div className="translate-y-0 opacity-100 md:transform md:translate-y-12 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col gap-1 sm:gap-3">
                  <p className="text-zinc-300 text-[10px] sm:text-sm flex items-start gap-1 sm:gap-2 line-clamp-2 sm:line-clamp-none">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-zinc-300" />
                    {loc.address}
                  </p>
                  {loc.mapsUrl && (
                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hidden md:inline-flex w-fit items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-300/50 text-[9px] sm:text-xs font-bold text-zinc-300 hover:text-zinc-100 hover:shadow-[0_0_10px_rgba(228,228,231,0.1)] transition-all duration-300"
                    >
                      Como chegar
                      <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedTeamLocation, setSelectedTeamLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (selectedLocation) {
      setSelectedTeamLocation(selectedLocation);
    }
  }, [selectedLocation]);

  const plansSectionRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);


  const navLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'clube', label: 'Clube' },
    { id: 'unidades-flow', label: 'Unidades' },
    { id: 'franqueado', label: 'Seja um Franqueado' },
    { id: 'curso', label: 'Curso de Barbeiro' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      let currentActive = activeSection;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentActive = entry.target.id;
        }
      });
      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    }, observerOptions);
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(s => observer.observe(s));
    
    return () => observer.disconnect();
  }, [activeSection]);

  const handleNavClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  const [teamRef, teamApi] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' });

  const scrollPrevTeam = useCallback(() => {
    if (teamApi) teamApi.scrollPrev()
  }, [teamApi])
  const scrollNextTeam = useCallback(() => {
    if (teamApi) teamApi.scrollNext()
  }, [teamApi])

  const handleLocationSelect = (loc: Location, shouldScroll = true) => {
    setSelectedLocation(loc);
    if (shouldScroll) {
      setTimeout(() => {
        plansSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const getLocationPlans = (loc: Location): Plan[] => {
    return plans.filter((p) => loc.planIds.includes(p.id));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-300/30 pb-32 lg:pb-0">
      <header className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-24 sm:h-28 flex items-center justify-between relative">
          
          {/* Hamburger (Left on mobile, hidden on desktop) */}
          <button 
            className="lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/5 rounded-xl transition-all duration-300 z-10"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Logo (Centered on mobile, Left on desktop) */}
          <div className="flex flex-1 justify-center lg:justify-start items-center shrink-0 absolute lg:relative left-0 right-0 lg:left-auto lg:right-auto pointer-events-none lg:pointer-events-auto">
            {/* Mobile Logo */}
            <img src="/logotipo-vertical.png" alt="Veneza Barbearia" className="lg:hidden h-24 sm:h-28 w-auto cursor-pointer pointer-events-auto drop-shadow-md transform scale-[1.5] origin-center" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} />
            {/* Desktop Logo */}
            <img src="/logo-white.svg" alt="Veneza Barbearia" className="hidden lg:block h-28 w-auto cursor-pointer pointer-events-auto drop-shadow-md transform scale-[2.2] origin-left" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} />
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 ml-auto mr-8 z-10">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-colors duration-300 relative ${activeSection === link.id ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-300'}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div layoutId="activeNav" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-zinc-300 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 z-10">
            <a
              href="https://cashbarber.com.br/venezabarbearia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-zinc-200 hover:text-zinc-100 text-xs font-bold py-2.5 px-4 rounded-full transition-all duration-300 uppercase tracking-wider items-center gap-1.5 shadow-md shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar pelo App</span>
            </a>
            <a
              href="https://wa.me/49999277782"
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white text-xs font-bold py-2.5 px-4 rounded-full transition-all duration-300 uppercase tracking-wider items-center gap-1.5 shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] max-w-[80vw] bg-zinc-950 border-r border-zinc-800/50 z-[51] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-zinc-800/50">
                <img src="/logo-white.svg" alt="Veneza Barbearia" className="h-10 w-auto transform scale-150 origin-left" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  {navLinks.map(link => (
                    <button
                      key={link.id}
                      onClick={() => {
                        handleNavClick(link.id);
                        setIsMenuOpen(false);
                      }}
                      className={`text-lg font-bold text-left transition-colors ${activeSection === link.id ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-300'}`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Bar (Mobile Only) */}
      <div className="lg:hidden fixed right-3 bottom-6 z-40 flex flex-col items-center gap-0.5 p-1 rounded-full bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <a href="https://wa.me/49999277782" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/10 relative group overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-10 h-10 object-contain relative z-10 pointer-events-none"
          >
            <source src="/whatsapp-animation.webm" type="video/webm" />
          </video>
        </a>
        <a href="https://cashbarber.com.br/venezabarbearia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/10">
          <Calendar className="w-[22px] h-[22px]" />
        </a>
        <a href="https://www.instagram.com/veneza.barbearia/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/10">
          <Instagram className="w-[22px] h-[22px]" />
        </a>
      </div>

      {/* HERO */}
      <section id="hero" className="relative pt-40 pb-20 sm:pt-48 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/18.jpeg"
            alt="Barbearia background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col items-center"
          >
            {/* ========================================= */}
            {/* MOBILE TITLE BLOCK (Original, unchanged) */}
            {/* ========================================= */}
            <div className="w-full flex justify-center mb-6 px-4 sm:px-8 lg:hidden">
              <div className="relative inline-flex flex-col items-center text-center max-w-full">
                
                {/* Subtitle */}
                <span className="text-zinc-300 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 relative z-10">
                  Bem-vindo ao
                </span>

                {/* Main Title */}
                <h1 className="text-[2.75rem] sm:text-6xl font-bold leading-none relative z-10">
                  {/* Badge "V" (Independente, colado no "C") */}
                  <div className="absolute top-0 left-0 -translate-x-[5%] sm:-translate-x-[10%] -translate-y-[35%] sm:-translate-y-[45%] w-24 h-24 sm:w-32 sm:h-32 z-20 pointer-events-none">
                    <img src="/sublogo2.png" alt="Veneza Barbearia" className="w-full h-full object-contain spin-slow" />
                  </div>

                  <span className="font-adam text-white block tracking-widest">CLUBE VENEZA</span>
                  <span className="font-eightone text-zinc-300 text-2xl sm:text-3xl block mt-2 sm:mt-3 lowercase tracking-wider">barbearia</span>
                </h1>
              </div>
            </div>

            {/* ========================================= */}
            {/* DESKTOP TITLE BLOCK (Badge side-by-side)  */}
            {/* ========================================= */}
            <div className="hidden lg:flex w-full justify-center mb-8 px-8">
              <div className="flex items-center gap-8">
                
                {/* Badge "V" parallel */}
                <div className="w-40 h-40 z-20 shrink-0">
                  <img src="/sublogo2.png" alt="Veneza Barbearia" className="w-full h-full object-contain drop-shadow-xl spin-slow" />
                </div>

                {/* Text Block */}
                <div className="flex flex-col text-left">
                  <span className="text-zinc-300 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                    Bem-vindo ao
                  </span>
                  <h1 className="text-7xl font-bold leading-none">
                    <span className="font-adam text-white block tracking-widest">CLUBE VENEZA</span>
                    <span className="font-eightone text-zinc-300 text-4xl block mt-3 lowercase tracking-wider">barbearia</span>
                  </h1>
                </div>

              </div>
            </div>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              O seu estilo sempre impecável. Assine nossos planos mensais, escolha sua unidade favorita e desfrute de serviços ilimitados com atendimento premium.
            </p>
            <button
              onClick={() => {
                document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-zinc-200 hover:text-zinc-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm hover:shadow-[0_0_20px_rgba(228,228,231,0.15)]"
            >
              Conheça nossos planos
            </button>
          </motion.div>
        </div>
      </section>

            {/* SOBRE */}
      <section id="sobre" className="py-20 relative bg-zinc-900/30 border-t border-zinc-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold text-white mb-2">Sobre <span className="text-zinc-300">nós:</span></h2>
            <h3 className="font-serif text-xl md:text-2xl text-zinc-300 mb-6 font-medium">Experiência, conforto e praticidade</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              A Veneza Barbearia é um espaço acolhedor e o nosso objetivo é oferecer praticidade aos clientes, para que não precisem se preocupar com disponibilidade de horários, estacionamento ou encontrar os melhores planos de assinatura.
            </p>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Entregar uma experiência de excelência é o nosso principal compromisso. Por isso, realizamos treinamentos periódicos com nossas equipes, garantindo um padrão de atendimento que faz com que cada cliente se sinta bem-vindo e à vontade em qualquer uma de nossas unidades.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-zinc-500" /> Quatro unidades bem localizadas</li>
              <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-zinc-500" /> Profissionais altamente capacitados</li>
              <li className="flex items-center gap-3 text-zinc-300"><CheckCircle2 className="w-5 h-5 text-zinc-500" /> Ambiente premium e acolhedor</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-800/50">
              <img src="/plano-cabelo-barba-belavista.jpg" alt="Barbearia Veneza" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 flex flex-row gap-2 sm:gap-3">
              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-3 sm:p-5 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <p className="text-xl sm:text-3xl font-bold font-serif text-white mb-1">+4000</p>
                <p className="text-zinc-400 text-[9px] sm:text-xs uppercase tracking-wider">Atendimentos/mês</p>
              </div>
              <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-3 sm:p-5 rounded-2xl shadow-xl flex flex-col items-center text-center">
                <p className="text-xl sm:text-3xl font-bold font-serif text-white mb-1">+650</p>
                <p className="text-zinc-400 text-[9px] sm:text-xs uppercase tracking-wider">Assinantes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLUBE */}
      <section id="clube" className="py-20 relative bg-zinc-950 border-t border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'url(/pattern-sem-fundo.png)', backgroundSize: '150px', backgroundRepeat: 'repeat', maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-zinc-500 font-serif text-xl mb-4 block">O Clube</span>
          <h2 className="font-adam text-3xl md:text-5xl font-bold text-white mb-12">Por que ser um <span className="text-zinc-300">Assinante?</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-8 hover:bg-zinc-800/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(228,228,231,0.05)] text-center">
              <Zap className="w-10 h-10 text-zinc-400 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">Uso Ilimitado</h3>
              <p className="text-zinc-400 text-sm">Você sempre impecável, use o quanto quiser.</p>
            </div>
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-8 hover:bg-zinc-800/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(228,228,231,0.05)] text-center">
              <Calendar className="w-10 h-10 text-zinc-400 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">Praticidade</h3>
              <p className="text-zinc-400 text-sm">Agendamento fácil pelo app ou whatsapp, sem fechar ao meio dia, estacionamento.</p>
            </div>
            <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-8 hover:bg-zinc-800/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(228,228,231,0.05)] text-center">
              <Sparkles className="w-10 h-10 text-zinc-400 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">Descontos Exclusivos</h3>
              <p className="text-zinc-400 text-sm">Acesso a descontos especiais em produtos, bebidas e serviços adicionais fora do seu plano.</p>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center relative z-10">
            <button
              onClick={() => {
                document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-zinc-200 hover:text-zinc-100 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm hover:shadow-[0_0_20px_rgba(228,228,231,0.15)] inline-block"
            >
              Conheça nossos planos
            </button>
          </div>
        </div>
      </section>
      
      <section id="unidades-flow">
      {/* STEP 1: LOCATIONS */}
      <section id="locations" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <span className="text-zinc-300/50 font-serif text-6xl lg:text-8xl absolute left-1/2 -translate-x-1/2 -top-4 opacity-20 pointer-events-none">
              01
            </span>
            <h2 className="font-adam text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Escolha sua Unidade</h2>
            <p className="text-zinc-400 relative z-10">Selecione onde você deseja utilizar os benefícios do seu plano.</p>
          </div>

          <UnitSelector 
            selectedId={selectedLocation?.id} 
            onSelect={(loc) => handleLocationSelect(loc, true)} 
          />
        </div>
      </section>

      {/* STEP 2: PLANS */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.section
            key="plans-section"
            ref={plansSectionRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="py-20 bg-zinc-900/30 border-t border-zinc-800/50 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col items-center text-center mb-16 relative">
                <span className="text-zinc-300/50 font-serif text-6xl lg:text-8xl absolute left-1/2 -translate-x-1/2 -top-12 opacity-20 pointer-events-none">
                  02
                </span>
                <button
                  onClick={() => {
                    setSelectedLocation(null);
                    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-6 text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> Trocar Unidade
                </button>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 relative z-10">
                  Planos Disponíveis
                </h2>
                <p className="text-zinc-300 font-medium relative z-10">Unidade: {selectedLocation.name}</p>
                {selectedLocation.mapsUrl && (
                  <a
                    href={selectedLocation.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-xs sm:text-sm font-bold text-zinc-300 hover:text-zinc-100 hover:shadow-[0_0_15px_rgba(228,228,231,0.1)] transition-all duration-300 uppercase tracking-wider relative z-10"
                  >
                    Como chegar <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getLocationPlans(selectedLocation).map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300/50 transition-colors"
                  >
                    <div className="h-56 relative overflow-hidden">
                      <img
                        src={plan.imageUrl}
                        alt={plan.name}
                        className={`w-full h-full object-cover ${plan.imageClassName || ''}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <h3 className="font-serif text-2xl font-bold text-white">{plan.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-4 sm:p-5 flex-grow flex flex-col">
                      <div className="mb-4 border-b border-zinc-800 pb-4 flex items-end gap-1">
                        <span className="text-4xl font-bold text-white font-serif">R$ {plan.price.toFixed(2).replace('.', ',')}</span>
                        <span className="text-zinc-500 mb-1">/ mês</span>
                      </div>
                      
                      <p className="text-zinc-400 text-sm mb-4 flex-grow">
                        {plan.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-zinc-300 shrink-0" />
                            <span className="text-zinc-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href={plan.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-zinc-200 hover:text-zinc-100 hover:shadow-[0_0_15px_rgba(228,228,231,0.1)] font-semibold flex items-center justify-center gap-2 transition-all mt-auto"
                      >
                        Assinar Agora <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      </section>

      {/* DEPOIMENTOS */}
      <Testimonials />

      {/* SERVICES */}
      <section className="py-20 relative bg-zinc-950 border-t border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'url(/pattern-sem-fundo.png)', backgroundSize: '150px', backgroundRepeat: 'repeat', maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Serviços Oferecidos</h2>
            <p className="text-zinc-400">Não quer assinar um plano mensal agora? Conheça nossos serviços individuais.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {servicesList.map((service, idx) => {
              const IconComponent = service.icon;
              const wppMessage = encodeURIComponent(`Olá, tenho interesse no serviço de ${service.name}. Pode me ajudar?`);
              const wppUrl = `https://wa.me/5549999277782?text=${wppMessage}`;
              return (
              <a 
                href={wppUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={idx} 
                className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-zinc-300/40 hover:bg-zinc-800/60 transition-all duration-300 group cursor-pointer h-32 hover:shadow-[0_0_15px_rgba(228,228,231,0.05)]"
              >
                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-zinc-300/50 mb-2 group-hover:text-zinc-300 transition-colors group-hover:scale-110 duration-300" />
                <span className="text-xs md:text-sm font-semibold text-zinc-200">{service.name}</span>
                <span className="text-[10px] md:text-xs text-zinc-400 mt-1 font-medium">R$ {service.price.toFixed(2).replace('.', ',')}</span>
              </a>
            )})}
          </div>
        </div>
      </section>

            {/* SEJA UM FRANQUEADO */}
      <section id="franqueado" className="py-20 relative bg-zinc-900/30 border-t border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(228,228,231,0.03)_0%,transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-800 max-w-md mx-auto border border-zinc-800/50 shadow-xl">
              <img src="/17.jpg" alt="Franquia Veneza" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-zinc-500 font-serif text-xl mb-4 block">Expansão</span>
            <h2 className="font-adam text-3xl md:text-5xl font-bold text-white mb-6">Seja um <span className="text-zinc-300">Franqueado</span></h2>
            <p className="text-zinc-400 mb-8">
              Faça parte da rede de barbearias que mais cresce na região. Leve o modelo inovador de assinaturas para a sua cidade com suporte completo e modelo de negócios validado.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-1">Baixo Risco</h4>
                <p className="text-zinc-500 text-xs">Modelo validado e altamente rentável.</p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
                <h4 className="text-white font-bold mb-1">Suporte Total</h4>
                <p className="text-zinc-500 text-xs">Treinamento e gestão contínua garantidos.</p>
              </div>
            </div>
            <a href="https://venezabarbearia.com.br/?fbclid=PAVERFWASo_UNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadh5u_rZzFmuzH-UDmRCCxw7STQVueFJzQXCGyfB2oRLCsgxFlzJfVJztpPag_aem_8EgnOcEcZLMb3-ivkdBfsg" target="_blank" rel="noopener noreferrer" className="inline-flex bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-zinc-200 hover:text-zinc-100 font-bold py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-wide text-sm items-center gap-2 shadow-md">
              Saiba Mais <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CURSO DE BARBEIRO */}
      <section id="curso" className="py-20 relative bg-zinc-950 border-t border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url(/pattern.png)', backgroundSize: '400px', backgroundRepeat: 'repeat' }}></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-zinc-500 font-serif text-xl mb-4 block">Formação Profissional</span>
          <h2 className="font-adam text-3xl md:text-5xl font-bold text-white mb-6">Curso de <span className="text-zinc-300">Barbeiro</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12">
            Aprenda as técnicas mais avançadas do mercado com os especialistas da Veneza Barbearia. Do zero ao avançado, prepare-se para uma carreira de sucesso.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto text-left">
            {[
              { title: 'Técnicas de Corte', desc: 'Fade, degradê e uso preciso da tesoura.' },
              { title: 'Barboterapia', desc: 'Técnicas de toalha quente e alinhamento.' },
              { title: 'Gestão e Atendimento', desc: 'Como fidelizar clientes e gerir sua bancada.' }
            ].map((module, i) => (
              <div key={i} className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:border-zinc-300/40 hover:bg-zinc-800/60 transition-colors">
                <span className="text-zinc-600 font-serif text-2xl font-bold mb-2 block">0{i+1}</span>
                <h4 className="text-white font-bold mb-2">{module.title}</h4>
                <p className="text-zinc-500 text-sm">{module.desc}</p>
              </div>
            ))}
          </div>
          
          <a href="https://wa.me/49999277782" target="_blank" rel="noopener noreferrer" className="inline-flex bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-zinc-200 hover:text-zinc-100 font-bold py-4 px-10 rounded-full transition-all duration-300 uppercase tracking-wide text-sm items-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(228,228,231,0.15)] hover:scale-105">
            Garantir Minha Vaga
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden bg-zinc-950 border-t border-zinc-800/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,228,231,0.08)_0%,transparent_60%)]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-adam text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para renovar seu visual?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Agende seu horário com um de nossos especialistas em poucos segundos. Escolha a melhor plataforma para você.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cashbarber.com.br/venezabarbearia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-zinc-200 hover:text-zinc-100 font-bold py-4 px-8 rounded-full transition-all duration-300 uppercase tracking-wide text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(228,228,231,0.15)] hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              Agendar pelo App
            </a>
            <a
              href="https://wa.me/49999277782"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-zinc-900/60 backdrop-blur-md border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 uppercase tracking-wide text-sm flex items-center justify-center gap-2 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="py-20 relative bg-zinc-900/30 border-t border-zinc-800/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-adam text-3xl md:text-4xl font-bold text-white mb-4">Nossa Equipe</h2>
            <p className="text-zinc-400">Conheça os especialistas que vão cuidar do seu visual.</p>
          </div>

          <div className="mb-12 -mx-6 md:mx-0 border-b border-zinc-800/50">
            <div className="flex overflow-x-auto no-scrollbar">
              <div className="flex gap-6 md:gap-12 px-6 md:px-0 md:mx-auto min-w-max">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedTeamLocation(loc)}
                  className={`py-4 px-2 whitespace-nowrap text-sm md:text-base font-bold transition-colors relative ${selectedTeamLocation?.id === loc.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {loc.name.replace('Unidade ', '').replace('Comper ', '')}
                  {selectedTeamLocation?.id === loc.id && (
                    <motion.div layoutId="activeTeamTab" className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-zinc-300 rounded-t-full" />
                  )}
                </button>
              ))}
              </div>
            </div>
          </div>
          
          {selectedTeamLocation ? (
            <div className="relative max-w-6xl mx-auto group">
              <div className="overflow-hidden" ref={teamRef}>
                <div className="flex gap-6 py-4 px-2">
                  {professionals
                    .filter((prof) => prof.locationId === selectedTeamLocation.id)
                    .map((prof, idx) => (
                      <div 
                        key={idx} 
                        className="flex-[0_0_70%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300/50 transition-colors group/card relative shadow-md"
                      >
                        <div className="aspect-[4/5] w-full overflow-hidden relative">
                          <img
                            src={prof.imageUrl}
                            alt={prof.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                        </div>
                        <div className="p-5 text-center bg-zinc-900 relative z-10 border-t border-zinc-800/50 group-hover/card:bg-zinc-800/80 transition-colors">
                          <h3 className="font-serif text-xl font-bold text-white">{prof.name}</h3>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              {/* Navigation Arrows (Desktop Only) */}
              {professionals.filter((prof) => prof.locationId === selectedTeamLocation.id).length > 4 && (
                <>
                  <button onClick={scrollPrevTeam} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 rounded-full items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-300/50 hover:bg-zinc-800/80 transition-all duration-300 z-10 shadow-lg shadow-zinc-950/50 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_15px_rgba(228,228,231,0.15)]">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={scrollNextTeam} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 rounded-full items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-300/50 hover:bg-zinc-800/80 transition-all duration-300 z-10 shadow-lg shadow-zinc-950/50 opacity-0 group-hover:opacity-100 hover:shadow-[0_0_15px_rgba(228,228,231,0.15)]">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-zinc-500 border border-zinc-800 border-dashed rounded-2xl max-w-md mx-auto">
              <p>Selecione uma unidade acima para ver a nossa equipe.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-zinc-800/50 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 items-start text-center md:text-left">
            {/* Brand & Instagram */}
            <div className="flex flex-col items-center md:items-start md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <img src="/logo-white.svg" alt="Veneza Barbearia" className="h-32 sm:h-40 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <a href="https://www.instagram.com/veneza.barbearia/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-zinc-300 hover:border-zinc-300/50 transition-all hover:-translate-y-1 mb-6 md:mb-0">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            {/* Unidade Sul */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider border-b border-zinc-800/80 pb-1 w-full">Unidade Sul</h4>
              <p className="text-zinc-400 text-xs leading-relaxed space-y-1">
                <span className="block text-zinc-300 font-medium">Veneza Barbearia – Unidade Sul</span>
                <span className="block">Av. Nereu Ramos, 1271D</span>
                <span className="block">Sala 03, Bairro Palmital</span>
                <span className="block">Chapecó/SC</span>
                <span className="block text-zinc-500 italic mt-1.5">Agendamento Online</span>
                <span className="block text-zinc-300 font-semibold mt-1">Whats: (49) 99927-7782</span>
              </p>
            </div>

            {/* Unidade Center */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider border-b border-zinc-800/80 pb-1 w-full">Unidade Center</h4>
              <p className="text-zinc-400 text-xs leading-relaxed space-y-1">
                <span className="block text-zinc-300 font-medium">Veneza Barbearia – Unidade Center</span>
                <span className="block">Rua Rui Barbosa, 441E</span>
                <span className="block">Centro (dentro do Celeiro Center)</span>
                <span className="block">Chapecó/SC</span>
                <span className="block text-zinc-500 italic mt-1.5">Agendamento Online / Barber Club</span>
                <span className="block text-zinc-300 font-semibold mt-1">Whats: (49) 99927-7782</span>
              </p>
            </div>

            {/* Unidade Avenida */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider border-b border-zinc-800/80 pb-1 w-full">Unidade Avenida</h4>
              <p className="text-zinc-400 text-xs leading-relaxed space-y-1">
                <span className="block text-zinc-300 font-medium">Veneza Barbearia – Unidade Avenida</span>
                <span className="block">Av. Getúlio Dorneles Vargas, 3430</span>
                <span className="block">Centro, Chapecó/SC</span>
                <span className="block text-zinc-500 mt-1.5">Seg, Qua e Qui: 9h às 21h</span>
                <span className="block text-zinc-500">Ter: 9h às 11h30, 14h às 21h</span>
                <span className="block text-zinc-500">Sáb: 9h às 18h (Dom: fechado)</span>
                <span className="block text-zinc-300 font-semibold mt-1">Whats: (49) 99927-7782</span>
              </p>
            </div>

            {/* Unidade Bela Vista */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider border-b border-zinc-800/80 pb-1 w-full">Unidade Bela Vista</h4>
              <p className="text-zinc-400 text-xs leading-relaxed space-y-1">
                <span className="block text-zinc-300 font-medium">Veneza Barbearia – Unidade Bela Vista</span>
                <span className="block">Travessa Assis Chateaubriand, 21</span>
                <span className="block">Bairro Bela Vista</span>
                <span className="block">Chapecó/SC</span>
                <span className="block text-zinc-300 font-semibold mt-2.5">Whats: (49) 99927-7782</span>
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800/50 text-center text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Veneza Barbearia. Todos os direitos reservados.</p>
            <p>Chapecó - SC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
