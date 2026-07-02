import { Location, Plan, Professional, Service } from './types';
import { Scissors, Zap, Sparkles, Droplets, Paintbrush, PlusSquare, Smile, SprayCan, Sun, Wind } from 'lucide-react';


const BASE_CHECKOUT_URL = 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza';

export const plans: Plan[] = [
  // Planos - Sul, Center, Avenida
  {
    id: 'black',
    name: 'BLACK - Cabelo, Barba e Sobrancelha - ILIMITADO',
    price: 239.90,
    description: 'Corte + Barba + Sobrancelha + Raspado máquina. O pacote mais completo para o seu visual.',
    features: [
      'ILIMITADO',
      'Desconto em Produtos',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/10.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/black-cabelo-barba-e-sobrancelha-ilimita/10'
  },
  {
    id: 'premium',
    name: 'PREMIUM - Corte de Cabelo + Sobrancelha - ILIMITADO',
    price: 129.90,
    description: 'Corte e sobrancelha sem limites para um rosto sempre bem alinhado.',
    features: [
      'ILIMITADO',
      'Desconto em Produtos',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/3.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/premium-corte-de-cabelo-sobrancelha-ilim/9'
  },
  {
    id: 'week',
    name: 'WEEK - Corte de Cabelo - Terça a Quinta',
    price: 109.90,
    description: 'Corte de cabelo de terça a quinta para os dias mais tranquilos de semana.',
    features: [
      'Terça a Quinta',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/2.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/week-corte-de-cabelo-terca-a-quinta/20'
  },
  {
    id: 'barba-ili',
    name: 'Barba ILIMITADO',
    price: 169.90,
    description: 'Apenas barba, mas com visitas ilimitadas ao longo do mês.',
    features: [
      'Barba ILIMITADA',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/5.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/barba-ilimitado/6'
  },
  {
    id: 'duo',
    name: 'Plano DUO - Corte de Cabelo + Sobrancelha - (2 pessoas)',
    price: 249.90,
    description: 'Corte + Sobrancelha para você e mais uma pessoa do seu círculo.',
    features: [
      '2 Pessoas',
      'Desconto em Produtos',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/6.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/plano-duo-corte-de-cabelo-sobrancelha-2-/21'
  },
  {
    id: 'one',
    name: 'Plano ONE - Corte de Cabelo - 1 Corte por Mês',
    price: 55.00,
    description: 'A assinatura mínima para não perder o ritmo: 1 corte mensal.',
    features: [
      '1 Corte por Mês',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/plano-one-sul-center-avenida.png',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/plano-one-corte-de-cabelo-1-corte-por-me/22'
  },
  {
    id: 'careca',
    name: 'Careca Club - Somente Máquina',
    price: 89.90,
    description: 'Focado em quem raspa na máquina. Venha quantas vezes precisar.',
    features: [
      'Somente Máquina',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/plano-careca-real.jpg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/careca-club-somente-maquina/23'
  },

  // Planos - Bela Vista (Exclusivos)
  {
    id: 'bv-vip',
    name: 'VIP - COMBO - HORÁRIO FIXO (SOMENTE UNIDADE BELA VISTA)',
    price: 250.00,
    description: 'Corte + Barba + Sobrancelha com seu horário já cravado na agenda.',
    features: [
      'Horário Fixo',
      'Desconto em Produtos',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/13.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/vip-combo-horario-fixo-somente-unidade-b/42'
  },
  {
    id: 'bv-smart',
    name: 'SMART - 2 CORTES E 2 BARBAS (SOMENTE UNIDADE BELA VISTA)',
    price: 159.90,
    description: 'O pacote que te acompanha com a frequência ideal de visitas.',
    features: [
      '2 Cortes e 2 Barbas/mês',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/12.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/smart-2-cortes-e-2-barbas-somente-unidad/39'
  },
  {
    id: 'bv-corte-ili',
    name: 'CORTE ILIMITADO (SOMENTE UNIDADE BELA VISTA)',
    price: 99.90,
    description: 'Corte seu cabelo quantas vezes quiser o dia que quiser.',
    features: [
      'Corte ILIMITADO',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/plano-cabelo-barba-belavista.jpg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/corte-ilimitado-somente-unidade-bela-vis/24'
  },
  {
    id: 'bv-week',
    name: 'Week - Segunda a Quarta - (SOMENTE UNIDADE BELA VISTA)',
    price: 79.90,
    description: 'Comece a semana alinhado vindo na parte inicial da semana.',
    features: [
      'Segunda a Quarta',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/14.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/week-segunda-a-quarta-somente-unidade-be/37'
  },
  {
    id: 'bv-cabelo-barba',
    name: 'CABELO E BARBA ILIMITADO (SOMENTE UNIDADE BELA VISTA)',
    price: 180.00,
    description: 'A experiência total de barbearia do jeito que você preferir e quando quiser.',
    features: [
      'Raspado Máquina Incluso',
      'ILIMITADO',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/9.jpeg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/cabelo-e-barba-ilimitado-somente-unidade/26'
  },
  {
    id: 'bv-barba-ili',
    name: 'BARBA ILIMITADO (SOMENTE UNIDADE BELA VISTA)',
    price: 119.90,
    description: 'Sua barba desenhada toda semana sem preocupações.',
    features: [
      'Barba ILIMITADA',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/plano-careca.jpg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/barba-ilimitado-somente-unidade-bela-vis/25'
  },
  {
    id: 'bv-one',
    name: 'ONE - 1 CORTE POR MÊS (SOMENTE UNIDADE BELA VISTA)',
    price: 40.00,
    description: 'Um trato por mês para seu cabelo.',
    features: [
      '1 Corte por Mês',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/plano-one-belavista.jpg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/one-1-corte-por-mes-somente-unidade-bela/40'
  },
  {
    id: 'bv-combo-one',
    name: 'COMBO ONE - 1 CORTE + BARBA POR MÊS (SOMENTE UNIDADE BELA VISTA)',
    price: 85.00,
    description: 'O combo básico.',
    features: [
      '1 Corte + 1 Barba/mês',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/plano-corte.jpg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/combo-one-1-corte-barba-por-mes-somente-/45'
  },
  {
    id: 'bv-careca',
    name: 'CARECA CLUB - (SOMENTE UNIDADE BELA VISTA)',
    price: 69.90,
    description: 'Focado na máquina e no estilo rápido.',
    features: [
      'Apenas Máquina',
      'Sem taxa de adesão',
      'Cancele quando quiser'
    ],
    imageUrl: '/plano-careca-real.jpg',
    checkoutUrl: 'https://celcash.celcoin.com.br/venezabarbearia/clubeveneza/assinar-plano/careca-club-somente-unidade-bela-vista/41'
  }
];

const mainPlansIds = [
  'black', 'premium', 'week', 'barba-ili', 'duo', 'one', 'careca'
];

const belaVistaPlansIds = [
  'bv-vip', 'bv-smart', 'bv-corte-ili', 'bv-week', 'bv-cabelo-barba', 'bv-barba-ili', 'bv-one', 'bv-combo-one', 'bv-careca'
];

export const locations: Location[] = [
  {
    id: 'loc-sul',
    name: 'Unidade Sul',
    address: 'Av. Nereu Ramos, 1271d - Palmital, Chapecó - SC, 89814-247',
    imageUrl: '/Sul.jpeg',
    planIds: mainPlansIds,
    mapsUrl: 'https://share.google/XwEJmQZq51X5kIQOr',
  },
  {
    id: 'loc-center',
    name: 'Unidade Center',
    address: 'R. Rui Barbosa, 441E - Centro, Chapecó - SC, 89802-140',
    imageUrl: '/center.jpeg',
    planIds: mainPlansIds,
    mapsUrl: 'https://share.google/guET0INTzM3oeYssR',
  },
  {
    id: 'loc-avenida',
    name: 'Unidade Avenida',
    address: 'Av. Getúlio Dorneles Vargas, 3430 - Centro, Chapecó - SC, 89802-001',
    imageUrl: '/Avenida.jpeg',
    planIds: mainPlansIds,
    mapsUrl: 'https://share.google/x7u0gNG0E4ANDmXNI',
  },
  {
    id: 'loc-belavista',
    name: 'Unidade Bela Vista',
    address: 'R. Afonso Pena - Bela Vista, Chapecó - SC, 89804-111',
    imageUrl: '/bela-vista.jpeg',
    planIds: belaVistaPlansIds,
    mapsUrl: 'https://share.google/msOuWTOYJT5hseJ4w',
  }
];

export const servicesList: Service[] = [
  { name: 'CORTE', icon: Scissors },
  { name: 'BARBA', icon: Zap },
  { name: 'COMBO', icon: PlusSquare },
  { name: 'BARBA RÁPIDA', icon: Zap },
  { name: 'CORTE RASPADO', icon: Scissors },
  { name: 'DEPILAÇÃO NARIZ', icon: Smile },
  { name: 'DEPILAÇÃO NARIZ ORELHA', icon: Smile },
  { name: 'LIMPEZA DE PELE', icon: Sparkles },
  { name: 'HIDRATAÇÃO', icon: Droplets },
  { name: 'SELAGEM CAPILAR', icon: Sparkles },
  { name: 'PEZINHO', icon: Scissors },
  { name: 'PIGMENTAÇÃO DA BARBA', icon: Paintbrush },
  { name: 'RELAXAMENTO CAPILAR', icon: Wind },
  { name: 'SOBRANCELHA', icon: Scissors }
];

export const professionals: Professional[] = [
  // Avenida
  { name: 'Jesus', description: '', imageUrl: '/JESUS.webp', locationId: 'loc-avenida' },
  { name: 'Lucas', description: '', imageUrl: '/LUCAS.webp', locationId: 'loc-avenida' },
  { name: 'Rafa', description: '', imageUrl: '/RAFA.webp', locationId: 'loc-avenida' },
  // Bela Vista
  { name: 'Alexandre', description: '', imageUrl: '/ALEXANDRE.webp', locationId: 'loc-belavista' },
  { name: 'Diego', description: '', imageUrl: '/DIEGO.webp', locationId: 'loc-belavista' },
  { name: 'Iago', description: '', imageUrl: '/IAGO.webp', locationId: 'loc-belavista' },
  { name: 'James', description: '', imageUrl: '/JAMES.png', locationId: 'loc-belavista' },
  // Center
  { name: 'Hasus', description: '', imageUrl: '/HASUS.webp', locationId: 'loc-center' },
  { name: 'Hiago', description: '', imageUrl: '/HIAGO.webp', locationId: 'loc-center' },
  { name: 'Vini', description: '', imageUrl: '/VINI.webp', locationId: 'loc-center' },
  // Sul
  { name: 'Gustavo', description: '', imageUrl: '/GUSTAVO.webp', locationId: 'loc-sul' },
  { name: 'Eliseu', description: '', imageUrl: '/ELISEU.webp', locationId: 'loc-sul' },
  { name: 'Enzo', description: '', imageUrl: '/ENZO.webp', locationId: 'loc-sul' },
  { name: 'Leonardo', description: '', imageUrl: '/LEONARDO.webp', locationId: 'loc-sul' }
];
