import { CheckCircle2, ArrowLeft, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-300/30 flex flex-col">
      <header className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-24 sm:h-28 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold hidden sm:inline">Voltar</span>
          </Link>
          <img src="/logo-white.svg" alt="Veneza Barbearia" className="h-16 md:h-28 w-auto drop-shadow-md transform scale-[1.5] md:scale-[2.2]" />
          <div className="w-16"></div> {/* Spacer to center the logo */}
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex-grow flex items-center w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center gap-2 font-sans text-3xl md:text-5xl font-bold text-white mb-12">
            Sobre <span className="text-zinc-300">nós</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-zinc-300 mb-6 font-medium">Experiência, conforto e praticidade</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed text-lg">
                A Veneza Barbearia é um espaço acolhedor e o nosso objetivo é oferecer praticidade aos clientes, para que não precisem se preocupar com disponibilidade de horários, estacionamento ou encontrar os melhores planos de assinatura.
              </p>
              <p className="text-zinc-400 mb-6 leading-relaxed text-lg">
                Entregar uma experiência de excelência é o nosso principal compromisso. Por isso, realizamos treinamentos periódicos com nossas equipes, garantindo um padrão de atendimento que faz com que cada cliente se sinta bem-vindo e à vontade em qualquer uma de nossas unidades.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300 text-lg"><CheckCircle2 className="w-6 h-6 text-zinc-500" /> Quatro unidades bem localizadas</li>
                <li className="flex items-center gap-3 text-zinc-300 text-lg"><CheckCircle2 className="w-6 h-6 text-zinc-500" /> Profissionais altamente capacitados</li>
                <li className="flex items-center gap-3 text-zinc-300 text-lg"><CheckCircle2 className="w-6 h-6 text-zinc-500" /> Ambiente premium e acolhedor</li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800 border border-zinc-800/50">
                <img src="/plano-cabelo-barba-belavista.jpg" alt="Barbearia Veneza" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 flex flex-row gap-2 sm:gap-3">
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
                  <p className="text-2xl sm:text-4xl font-bold font-serif text-white mb-1">+4000</p>
                  <p className="text-zinc-400 text-[10px] sm:text-sm uppercase tracking-wider">Atendimentos/mês</p>
                </div>
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center text-center">
                  <p className="text-2xl sm:text-4xl font-bold font-serif text-white mb-1">+650</p>
                  <p className="text-zinc-400 text-[10px] sm:text-sm uppercase tracking-wider">Assinantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-16 border-t border-zinc-800/50 bg-zinc-950 relative overflow-hidden mt-auto">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 items-start text-center md:text-left">
            <div className="flex flex-col items-center md:items-start md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <img src="/logo-white.svg" alt="Veneza Barbearia" className="h-32 sm:h-40 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <a href="https://www.instagram.com/veneza.barbearia/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-zinc-300 hover:border-zinc-300/50 transition-all hover:-translate-y-1 mb-6 md:mb-0">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
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
