import { Sparkles, Hand, Scissors, Gem, Palette, Brush } from "lucide-react";

// ─── IMAGENS (substitua pelos arquivos reais do cliente) ─────────────────────
import heroImage from "@/assets/heroupscale.avif";
import aboutImage from "@/assets/sobre.avif";
import ctaImage from "@/assets/procanto.avif";

// Serviços — imagens das categorias
import cuidadosImg from "@/assets/maquiagem.avif";
import rituaisImg from "@/assets/unhas.avif";
import capilaresImg from "@/assets/serviçocabelo.avif";

// Galeria
import skin1 from "@/assets/sobrancelha1.avif";
import skin2 from "@/assets/sobrancelha2.avif";
import skin3 from "@/assets/sobrancelha3.avif";
import loiro1 from "@/assets/loiro1.avif";
import loiro2 from "@/assets/loiro2.avif";
import loiro3 from "@/assets/loiro3.avif";
import make1 from "@/assets/maquiagem1.avif";
import make2 from "@/assets/maquiagem2.avif";
import make3 from "@/assets/maquiagem3.avif";
import spa1 from "@/assets/unhas.avif";
import spa2 from "@/assets/unha2.avif";
import spa3 from "@/assets/unha3.avif";

// ─── TIPOS ───────────────────────────────────────────────────────────────────
type GaleriaLayout = "left" | "right" | "center";

interface GaleriaItem {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  layout: GaleriaLayout;
}

// ─── CONFIGURAÇÃO DO CLIENTE ─────────────────────────────────────────────────
// Para personalizar o site para um novo cliente, edite SOMENTE este arquivo.
// Não é necessário mexer em nenhum componente.
// ──────────────────────────────────────────────────────────────────────────────

export const CLIENT = {
  // ── Dados Gerais ──────────────────────────────────────────────────────────
  nome: "VOGA",
  slogan: "Você em evidência — Cabelo, Barbearia, Unhas, Estética e bem-estar",
  cidade: "Medianeira, PR",
  whatsapp: "554599129695", // Mantido para Schema SEO interno
  whatsappLink: "https://api.whatsapp.com/message/JK5LZRY4PK7AE1?autoload=1&app_absent=0",
  instagram: "@vogacentroestetico",
  facebook: "voga.byaurora", // ex: "vogacentroestetico" (deixe vazio para ocultar)
  endereco: "Av. Brasília, 1032 — Centro, Medianeira - PR",

  horarios: {
    "Terça a Sábado": "07:00 às 20:00",
    "Domingo e Segunda": "Fechado",
  } as Record<string, string>,

  // ── Hero ───────────────────────────────────────────────────────────────────
  // Cada item é uma linha do texto gigante no hero
  hero: {
    linhas: ["VOGA"],
    imagem: heroImage,
  },

  // ── Manifesto (scroll reveal) ─────────────────────────────────────────────
  manifesto: {
    // A frase usa CLIENT.nome automaticamente: "O {nome} oferece..."
    frase: "é um espaço completo dedicado à beleza, bem-estar e experiência premium. Com ambientes modernos e acolhedores, unimos técnica, inovação e produtos de alta performance para entregar resultados impecáveis.",
    linkTexto: "Conheça o espaço",
    linkHref: "#sobre",
  },

  // ── Sobre ──────────────────────────────────────────────────────────────────
  sobre: {
    titulos: ["VOCÊ", "EM", "EVIDÊNCIA"],
    descricao:
      "nasceu com o propósito de transformar o cuidado estético em uma experiência sensorial única. Com atendimento humanizado e profissionais altamente qualificados, cada detalhe é pensado para realçar sua melhor versão. Do cuidado personalizado ao conforto dos nossos ambientes.",
    // A descrição usa CLIENT.nome automaticamente: "O {nome} nasceu com..."
    imagem: aboutImage,
    estatisticas: [
      { valor: 3, label: "Anos de\nExcelência" },
      { valor: "+3000", label: "Clientes\nAtendidos" },
    ],
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: [
    { icone: "scissors", nome: "Corte Feminino", descricao: "Cortes modernos e personalizados que valorizam sua identidade" },
    { icone: "scissors", nome: "Corte Masculino", descricao: "Barbearia com estilo — cortes e acabamentos impecáveis" },
    { icone: "scissors", nome: "Barba", descricao: "Design de barba com toalha quente e acabamento perfeito" },
    { icone: "sparkles", nome: "Escova", descricao: "Escovação profissional para um acabamento duradouro" },
    { icone: "sparkles", nome: "Coloração & Mechas", descricao: "Técnicas modernas com produtos de alta performance" },
    { icone: "hand", nome: "Manicure (Mão)", descricao: "Unhas impecáveis com acabamento profissional" },
    { icone: "hand", nome: "Pedicure", descricao: "Cuidados completos para os pés com esmaltação em gel" },
    { icone: "eye", nome: "Designer de Sobrancelhas", descricao: "Design que valoriza o formato do seu rosto e olhar" },
    { icone: "star", nome: "Maquiagem", descricao: "Make profissional para eventos, noivas e dia a dia" },
    { icone: "sparkles", nome: "Limpeza de Pele", descricao: "Renovação celular e remoção de impurezas profundas" },
    { icone: "zap", nome: "Terapia Capilar", descricao: "Tratamentos avançados para saúde e vitalidade dos fios" },
    { icone: "eye", nome: "Extensão de Cílios", descricao: "Técnicas premium de alongamento para o seu olhar" },
  ],

  categoriasServicos: [
    {
      id: "estetica",
      label: "Estética & Bem-estar",
      title: "Estética\n& bem-estar",
      icon: Sparkles,
      filtro: ["Designer de Sobrancelhas", "Extensão de Cílios", "Maquiagem", "Limpeza de Pele"],
      imagem: cuidadosImg,
      descricao:
        "Realce o que há de mais bonito em você. Nossos tratamentos combinam técnicas avançadas com produtos selecionados para resultados que transformam.",
    },
    {
      id: "cabelo",
      label: "Cabelo & Barbearia",
      title: "Cabelo\n& barbearia",
      icon: Scissors,
      filtro: ["Corte Feminino", "Corte Masculino", "Escova", "Coloração & Mechas"],
      imagem: capilaresImg,
      descricao:
        "Fios saudáveis, cortes precisos e cores vibrantes. Cada detalhe é pensado para que seu cabelo conte a sua história com autenticidade.",
    },
    {
      id: "unhas",
      label: "Unhas & Acabamentos",
      title: "Unhas\n& acabamentos",
      icon: Hand,
      filtro: ["Manicure (Mão)", "Pedicure"],
      imagem: rituaisImg,
      descricao:
        "Unhas impecáveis com esmaltação em gel, nail art e acabamentos que refletem seu estilo pessoal com excelência.",
    },
  ],

  // ── Galeria ────────────────────────────────────────────────────────────────
  galeria: [
    {
      id: "cabelo",
      title: "Loiros & Coloração",
      subtitle: "Mechas, Cortes & Escovas",
      images: [loiro1, loiro2, loiro3],
      layout: "left",
    },
    {
      id: "olhar",
      title: "Cílios & Sobrancelhas",
      subtitle: "Sobrancelhas & Cílios Premium",
      images: [skin1, skin2, skin3],
      layout: "right",
    },
    {
      id: "make",
      title: "Maquiagem",
      subtitle: "Maquiagem para Eventos",
      images: [make1, make2, make3],
      layout: "left",
    },
    {
      id: "unhas",
      title: "Unhas",
      subtitle: "Manicure & Pedicure em Gel",
      images: [spa1, spa2, spa3],
      layout: "right",
    },
  ] as GaleriaItem[],

  // ── Depoimentos ────────────────────────────────────────────────────────────
  depoimentos: [
    {
      nome: "Ana Clara",
      papel: "Cliente",
      avatar: "https://i.pravatar.cc/150?img=47",
      nota: 5,
      texto: "Hoje eu tive o prazer de conhecer o salão VOGA. Que aconchego!! Fui muito bem recebida os profissionais foram maravilhosos super atenciosos.A profissional Ruth foi quem me atendeu para corte e eu simplesmente amei. Entendeu o que eu realmente queria fazer. E ficou maravilhoooosoooo!!! Super indico",
    },
    {
      nome: "Luciana Simon",
      papel: "Cliente",
      avatar: "https://i.pravatar.cc/150?img=43",
      nota: 5,
      texto: "Já sou cliente da Ruth há anos. Ele realiza os procedimentos de corte, coloração de raiz e mechas no meu cabelo. Excelente profissional, realiza um trabalho impecável.",
    },
    {
      nome: "Adriana Wahl",
      papel: "Cliente",
      avatar: "https://i.pravatar.cc/150?img=32",
      nota: 5,
      texto: "Tratamento excelente, ótimos profissionais, espaço agradável. Fiz corte e pintura nos meus cabelos e ficou exatamente como queria. Fiz sobrancelhas também, super recomendo, muito cuidadosos.",
    },
    {
      nome: "Natalyria Mittmann",
      papel: "Cliente",
      avatar: "https://i.pravatar.cc/150?img=5",
      nota: 5,
      texto: "Atendimento excelente. O ambiente está lindo e a energia dos profissionais é maravilhosa. Rudinei é incrível! Meu cabeleireiro há anos, entende meu estilo e o que eu gosto, me dá ótimas dicas e sempre supera minhas expectativas. Recomendo de verdade!",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────────────────
  faq: [
    {
      pergunta: "Como funciona o agendamento?",
      resposta: "Você pode agendar pelo nosso WhatsApp ou Instagram. Basta escolher o serviço e o horário de sua preferência. Nosso time confirmará sua reserva o mais rápido possível.",
    },
    {
      pergunta: "Quais serviços o VOGA oferece?",
      resposta: "Somos um espaço completo: cabelo, barbearia, estética, terapia capilar, unhas e maquiagem. Atendemos todos os públicos com profissionais altamente qualificados.",
    },
    {
      pergunta: "Os procedimentos estéticos causam desconforto?",
      resposta: "Nossa prioridade é o seu bem-estar. Utilizamos técnicas avançadas, produtos de alta tecnologia e métodos que garantem uma experiência confortável e relaxante.",
    },
    {
      pergunta: "Quais são as formas de pagamento?",
      resposta: "Aceitamos PIX, cartões de débito e crédito, com possibilidade de parcelamento dependendo do serviço escolhido.",
    },
    {
      pergunta: "E se eu precisar remarcar meu horário?",
      resposta: "Imprevistos acontecem! Pedimos apenas que nos comunique com pelo menos 24 horas de antecedência para reorganizarmos nossa agenda sem custos adicionais.",
    },
  ],

  // Opções de turno para o formulário de agendamento
  turnos: [
    "Manhã (09h - 12h)",
    "Tarde (13h - 18h)",
    "Sem preferência específica",
  ],

  // ── Localização (detalhe completo) ─────────────────────────────────────────
  localizacao: {
    rua: "Av. Brasília, 1032",
    complemento: "Centro — Medianeira, PR",
    cep: "CEP 85884-000",
    descricao: "Estamos localizados no coração de Medianeira, em um ponto de fácil acesso. Venha nos visitar e viva a experiência VOGA.",
    titulo: "Encontre o VOGA e viva essa experiência",
  },

  // ── Social CTA ─────────────────────────────────────────────────────────────
  socialCTA: {
    titulo: "Pronta para se colocar em evidência?",
    descricao: "Acompanhe nossa rotina, dicas de autocuidado e confira os resultados dos nossos profissionais no Instagram @vogacentroestetico.",
    imagem: ctaImage,
  },

  // ── Footer ─────────────────────────────────────────────────────────────────
  footerMarcaDagua: "VOGA",
  footerDescricao: "Dedicados à beleza, bem-estar e experiência premium. Cada detalhe importa — do cuidado personalizado à experiência que transforma sua rotina de autocuidado.",

  // ── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    siteUrl: "https://vogacentroestetico.com.br", // URL final do site (sem / no final)
    metaDescricao:
      "VOGA Centro Estético em Medianeira, PR. Cabelo, barbearia, estética, unhas e maquiagem. Atendimento premium com profissionais qualificados. Agende pelo WhatsApp!",
    ogImagem: "/og-image.jpg", // Imagem 1200×630 em public/
    geo: {
      latitude: "-25.2969",
      longitude: "-54.0943",
    },
    faixaPreco: "$$",
  },

  cores: {
    primaria: "#2B4A3B",
    secundaria: "#1E3A2C",
    acento: "#D4A853",
  },
};
