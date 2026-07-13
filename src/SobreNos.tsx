import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-300/30">
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

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
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
    </div>
  );
}
