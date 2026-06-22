import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, CheckCircle2, ChevronRight, ArrowLeft, Scissors, Instagram } from 'lucide-react';
import { locations, plans, servicesList, professionals } from './data';
import type { Location, Plan } from './types';

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const plansSectionRef = useRef<HTMLElement>(null);

  const handleLocationSelect = (loc: Location) => {
    setSelectedLocation(loc);
    setTimeout(() => {
      plansSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const getLocationPlans = (loc: Location): Plan[] => {
    return plans.filter((p) => loc.planIds.includes(p.id));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-amber-500/30">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-500">
            <Scissors className="w-6 h-6" />
            <span className="font-serif text-xl tracking-wider font-bold text-white">VENEZA</span>
          </div>
          <a
            href="https://celcash.celcoin.com.br/venezabarbearia/clubeveneza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Área do Cliente
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop"
            alt="Barbearia background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-amber-500 uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
              Bem-vindo ao
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Clube Veneza
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
              O seu estilo sempre impecável. Assine nossos planos mensais, escolha sua unidade favorita e desfrute de serviços ilimitados com atendimento premium.
            </p>
            <button
              onClick={() => {
                document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm"
            >
              Quero Assinar
            </button>
          </motion.div>
        </div>
      </section>

      {/* STEP 1: LOCATIONS */}
      <section id="locations" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500/50 font-serif text-6xl lg:text-8xl absolute left-1/2 -translate-x-1/2 -top-4 opacity-20 pointer-events-none">
              01
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Escolha sua Unidade</h2>
            <p className="text-zinc-400">Selecione onde você deseja utilizar os benefícios do seu plano.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <motion.button
                key={loc.id}
                whileHover={{ y: -5 }}
                onClick={() => handleLocationSelect(loc)}
                className={`group text-left relative overflow-hidden rounded-2xl border transition-all duration-300
                  ${selectedLocation?.id === loc.id 
                    ? 'border-amber-500 ring-1 ring-amber-500/50 scale-[1.02]' 
                    : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/50'
                  }`}
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={loc.imageUrl}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                </div>
                
                <div className="absolute bottom-0 w-full p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 flex items-center justify-between">
                    {loc.name}
                    <motion.div
                      animate={{ opacity: selectedLocation?.id === loc.id ? 1 : 0 }}
                      className="text-amber-500 bg-amber-500/10 p-1.5 rounded-full"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.div>
                  </h3>
                  <p className="text-zinc-400 text-sm flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-500/70" />
                    {loc.address}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
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
                <span className="text-amber-500/50 font-serif text-6xl lg:text-8xl absolute left-1/2 -translate-x-1/2 -top-12 opacity-20 pointer-events-none">
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
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                  Planos Disponíveis
                </h2>
                <p className="text-amber-500 font-medium">Unidade: {selectedLocation.name}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getLocationPlans(selectedLocation).map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={plan.imageUrl}
                        alt={plan.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <h3 className="font-serif text-2xl font-bold text-white">{plan.name}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-6 border-b border-zinc-800 pb-6 flex items-end gap-1">
                        <span className="text-4xl font-bold text-white font-serif">R$ {plan.price.toFixed(2).replace('.', ',')}</span>
                        <span className="text-zinc-500 mb-1">/ mês</span>
                      </div>
                      
                      <p className="text-zinc-400 text-sm mb-6 flex-grow">
                        {plan.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                            <span className="text-zinc-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href={plan.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold flex items-center justify-center gap-2 transition-all mt-auto"
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

      {/* SERVICES */}
      <section className="py-20 relative bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Serviços Avulsos</h2>
            <p className="text-zinc-400">Não quer assinar um plano mensal agora? Conheça nossos serviços individuais.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {servicesList.map((service, idx) => (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col items-center text-center hover:border-amber-500/50 transition-colors">
                <Scissors className="w-6 h-6 text-amber-500/50 mb-3" />
                <span className="text-sm font-semibold text-zinc-200">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="py-20 relative bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Nossa Equipe</h2>
            <p className="text-zinc-400">Conheça os especialistas que vão cuidar do seu visual.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {professionals.map((prof, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-colors group"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={prof.imageUrl}
                    alt={prof.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-xl font-bold text-white mb-1">{prof.name}</h3>
                  <p className="text-zinc-500 text-sm">
                    {prof.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-zinc-800/50 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center md:items-start text-center md:text-left">
            {/* Brand */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-500 mb-4">
                <Scissors className="w-8 h-8" />
                <span className="font-serif text-2xl tracking-wider font-bold text-white">VENEZA</span>
              </div>
              <p className="text-zinc-400 text-sm max-w-sm mx-auto md:mx-0">
                O seu estilo sempre impecável. Assine nossos planos mensais e desfrute de serviços exclusivos com atendimento premium.
              </p>
            </div>
            
            {/* Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white font-bold mb-4 font-serif">Acesso Rápido</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><a href="#locations" className="hover:text-amber-500 transition-colors">Nossas Unidades</a></li>
                <li><a href="https://celcash.celcoin.com.br/venezabarbearia/clubeveneza" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">Área do Cliente</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-white font-bold mb-4 font-serif">Redes Sociais</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/veneza.barbearia/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-all hover:-translate-y-1">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
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
