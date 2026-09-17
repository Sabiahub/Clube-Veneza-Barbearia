import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ChevronRight, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { locations, plans } from './data';

// Mapeamento das URLs desejadas para os IDs das unidades
const urlToLocationId: Record<string, string> = {
  'planos_belavista': 'loc-belavista',
  'planos_centro': 'loc-center',
  'planos_sul': 'loc-sul',
  'planos_avenida': 'loc-avenida',
};

export default function PlanosUnidade() {
  const { unidadePath } = useParams();

  if (!unidadePath || !unidadePath.startsWith('planos_')) {
    return <Navigate to="/" />;
  }

  const locationId = urlToLocationId[unidadePath.toLowerCase()];

  if (!locationId) {
    return <Navigate to="/" />;
  }

  const location = locations.find((loc) => loc.id === locationId);

  if (!location) {
    return <Navigate to="/" />;
  }

  const locationPlans = plans.filter((p) => location.planIds.includes(p.id));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-300/30 flex flex-col">
      {/* Header Simplificado */}
      <header className="w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 transition-all fixed top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 sm:h-24 flex items-center justify-between relative overflow-hidden">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm sm:text-base font-medium relative z-10">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" /> Voltar
          </Link>
          <div className="flex-1 flex justify-end lg:justify-center">
            <img src="/logo-white.svg" alt="Veneza Barbearia" className="h-16 sm:h-20 w-auto transform scale-[1.5] origin-right lg:origin-center cursor-pointer drop-shadow-md" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} />
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/pattern-sem-fundo.png)', backgroundSize: '150px', backgroundRepeat: 'repeat', maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Título e Info da Unidade */}
          <div className="flex flex-col items-center text-center mb-16 relative">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
              Planos - {location.name.replace('Comper ', 'Unidade ')}
            </h1>
            <p className="text-zinc-400 max-w-2xl flex items-center justify-center gap-2 text-sm sm:text-base">
              <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
              {location.address}
            </p>
            {location.mapsUrl && (
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-zinc-900/50 hover:bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 hover:border-zinc-300/50 text-xs sm:text-sm font-bold text-zinc-300 hover:text-zinc-100 hover:shadow-[0_0_15px_rgba(228,228,231,0.1)] transition-all duration-300 uppercase tracking-wider"
              >
                Como chegar <ChevronRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Grid de Planos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locationPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300/50 transition-colors shadow-lg"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={plan.imageUrl}
                    alt={plan.name}
                    className={`w-full h-full object-cover ${plan.imageClassName || ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="font-serif text-2xl font-bold text-white pr-4">{plan.name}</h3>
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
      </main>

      {/* Footer Simples */}
      <footer className="py-8 border-t border-zinc-800/50 bg-zinc-950 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Clube Veneza Barbearia. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 items-center justify-center">
            <a href="https://www.instagram.com/veneza.barbearia/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/49999277782" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
