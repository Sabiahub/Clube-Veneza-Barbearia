import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Edson Galleazzi', text: 'Ótimos profissionais, estacionamento ajuda bastante Ja que está dentro do celeiro, voltarei com certeza daqui um mês.' },
  { name: 'Gustavo Silva', text: 'Excelente atendimento ótimos profissionais' },
  { name: 'Tony Francis', text: 'Ambiente agradável e pessoal bem disposto 👏👏' },
  { name: 'Fabiano Biondo', text: 'Local e o atendimento é excelente, aconchegante. O trabalho deles é top! Super recomendo!' },
  { name: 'Raqueline Soares leite', text: 'Sem palavras pra descrever meu filho que é autista se sente em casa não troca por nada o Vini heheh' },
  { name: 'Cristobal Enrique jimenez freire', text: 'Adorei o atendimento naquela barbearia e encontrei lá o que procurava: um barbeiro que se esforça para garantir que seus clientes saiam satisfeitos. Meu barbeiro há um ano, Jesus, eu o recomiendo. 👊 👊' },
  { name: 'nelson carmona', text: 'A barbearia tem uma ótima presença e o atendimento foi excelente. Recomendo muito.' },
  { name: 'Rafael Alves', text: 'Ótimo atendimento. Profissionais educados e sabem o que fazem. Recomendo!' },
  { name: 'marcelo rosa', text: 'Desde já agradecer o excelente trabalho, um ótimo profissional. Atendimento grandioso. Super indico' },
  { name: 'cristian agostinetto', text: 'Atendimento nota 10, mta qualidade e o pessoal muito gente boa !!' },
  { name: 'André Ansolin Pozzo', text: 'Excelente localização com estacionamento amplo, vasto horário de atendimento e com excelentes profissionais.' },
  { name: 'Estela Scheffer', text: 'Ambiente agradável, climatizado, oferece bebidas, Serviço top dos profissionais, o esposo fez serviço completo, barba, cabelo é bigode, feito por profissionais competente.' },
  { name: 'Vítor Rotava', text: 'Ótimo atendimento! Muito satisfeito! Recomendo demais! Super atenciosos!' },
  { name: 'Leonardo Sartori', text: 'Ambiente muito bom e galera MT massa, ótimo lugar sem dúvidas' },
  { name: 'Filipe Nascimento', text: 'É a barbearia que eu mais me identifico em Chapecó, sou sempre bem tratado o atendimento é excepcional, além das amizades que eu fiz, é minha segunda família, sempre estou ali para tomar um café, o ambiente é agradável tanto na unidade sul quanto a do centro se melhorar estraga kkkk, eles sempre estão a disposição pra tratar da melhor forma possível o cliente a qualidade é nota mil sem dúvida nenhuma, só tenho a agradecer!' },
  { name: 'Ana Lopes', text: 'Otimo, eu adorei o corte do meu filho Cabeleleiro atencioso cimpatico deixou meu filho muiito avontade e confortavel..e fes um.escelente trabalho parabéns .' },
];

const TestimonialCard = ({ name, text }: { name: string, text: string }) => (
  <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 p-4 md:p-6 rounded-2xl mb-4 relative hover:border-zinc-500/50 transition-colors shadow-lg">
    <div className="flex gap-1 mb-2 md:mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.4)]" />
      ))}
    </div>
    <p className="text-zinc-300 text-xs md:text-base leading-relaxed mb-3 md:mb-4 italic">"{text}"</p>
    <div className="flex items-center gap-2 md:gap-3">
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-300/10 flex items-center justify-center text-zinc-200 font-bold border border-zinc-300/20 text-xs md:text-sm drop-shadow-sm">
        {name.charAt(0).toUpperCase()}
      </div>
      <div>
        <h4 className="text-white font-bold text-xs md:text-base capitalize">{name}</h4>
      </div>
    </div>
  </div>
);

const MarqueeColumn = ({ items, reverse = false, className = '' }: { items: typeof testimonials, reverse?: boolean, className?: string }) => (
  <div className={`relative h-[600px] overflow-hidden ${className}`}>
    <div className={`flex flex-col gap-4 absolute w-full ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:pause-animation`}>
      {[...items, ...items].map((t, i) => (
        <TestimonialCard key={i} name={t.name} text={t.text} />
      ))}
    </div>
  </div>
);

export function Testimonials() {
  const col1 = testimonials.slice(0, 6);
  const col2 = testimonials.slice(6, 11);
  const col3 = testimonials.slice(11, 16);

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden border-t border-zinc-800/50">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-400/10 via-zinc-950 to-zinc-950"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <span className="text-zinc-300/50 font-serif text-6xl lg:text-8xl absolute left-1/2 -translate-x-1/2 -top-6 opacity-20 pointer-events-none">
            03
          </span>
          <h2 className="font-adam text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Depoimentos</h2>
          <p className="text-zinc-400 relative z-10">A satisfação de quem confia no nosso trabalho.</p>
        </div>

        <div className="relative">
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-20 pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            <MarqueeColumn items={col1} />
            <MarqueeColumn items={col2} reverse={true} />
            <MarqueeColumn items={col3} className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
