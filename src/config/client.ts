import { Sparkles, Hand, Scissors, Gem, Palette, Brush } from "lucide-react";

// ─── IMAGENS (substitua pelos arquivos reais do cliente) ─────────────────────
import heroImage from "@/assets/herosec.png";
import aboutImage from "@/assets/foto1.jpg";
import ctaImage from "@/assets/cta.avif";
import numerosImage from "@/assets/numeros.avif";

// Serviços — imagens das categorias
import cuidadosImg from "@/assets/cuidados.avif";
import rituaisImg from "@/assets/rituaiscorporais.avif";
import capilaresImg from "@/assets/foto4.jpg";

// Galeria
import skin1 from "@/assets/skin1.avif";
import skin2 from "@/assets/skin2.avif";
import skin3 from "@/assets/skin3.avif";
import loiro1 from "@/assets/loiro1.avif";
import loiro2 from "@/assets/loiro2.avif";
import loiro3 from "@/assets/loiro3.avif";
import make1 from "@/assets/make1.avif";
import make2 from "@/assets/make2.avif";
import make3 from "@/assets/make3.avif";
import spa1 from "@/assets/spa1.avif";
import spa2 from "@/assets/spa2.avif";
import spa3 from "@/assets/spa3.avif";

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
  whatsapp: "5545999999999",
  instagram: "@vogacentroestetico",
  facebook: "", // ex: "vogacentroestetico" (deixe vazio para ocultar)
  endereco: "Av. Brasília, 1032 — Centro, Medianeira - PR",

  horarios: {
    "Segunda a Sexta": "09h às 19h",
    "Sábado": "09h às 17h",
    "Domingo": "Fechado",
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
      "nasceu com o propósito de transformar o cuidado estético em uma experiência sensorial única. Com atendimento humanizado e profissionais altamente qualificados, cada detalhe é pensado para realçar sua melhor versão — do cuidado personalizado ao conforto dos nossos ambientes.",
    // A descrição usa CLIENT.nome automaticamente: "O {nome} nasceu com..."
    imagem: aboutImage,
    estatisticas: [
      { valor: 3, label: "Anos de\nExcelência" },
      { valor: 3000, label: "Clientes\nAtendidos" },
    ],
  },

  // ── Serviços ───────────────────────────────────────────────────────────────
  servicos: [
    { icone: "scissors", nome: "Corte Feminino", descricao: "Cortes modernos e personalizados que valorizam sua identidade" },
    { icone: "scissors", nome: "Corte Masculino", descricao: "Barbearia com estilo — cortes e acabamentos impecáveis" },
    { icone: "sparkles", nome: "Coloração & Mechas", descricao: "Técnicas modernas com produtos de alta performance" },
    { icone: "hand", nome: "Manicure & Pedicure", descricao: "Unhas impecáveis com acabamento profissional e esmaltação em gel" },
    { icone: "eye", nome: "Sobrancelhas", descricao: "Design e micropigmentação que valorizam o seu olhar" },
    { icone: "star", nome: "Maquiagem", descricao: "Make profissional para eventos, noivas e dia a dia" },
    { icone: "sparkles", nome: "Limpeza de Pele", descricao: "Renovação celular e remoção de impurezas profundas" },
    { icone: "zap", nome: "Terapia Capilar", descricao: "Tratamentos avançados para saúde e vitalidade dos fios" },
    { icone: "eye", nome: "Brow & Lashes", descricao: "Extensão de cílios e design de sobrancelhas com técnicas premium" },
  ],

  categoriasServicos: [
    {
      id: "estetica",
      label: "Estética & Bem-estar",
      title: "Estética\n& bem-estar",
      icon: Sparkles,
      filtro: ["Sobrancelhas", "Maquiagem", "Limpeza de Pele", "Brow & Lashes"],
      imagem: cuidadosImg,
      descricao:
        "Realce o que há de mais bonito em você. Nossos tratamentos combinam técnicas avançadas com produtos selecionados para resultados que transformam.",
    },
    {
      id: "cabelo",
      label: "Cabelo & Barbearia",
      title: "Cabelo\n& barbearia",
      icon: Scissors,
      filtro: ["Corte Feminino", "Corte Masculino", "Coloração & Mechas", "Terapia Capilar"],
      imagem: capilaresImg,
      descricao:
        "Fios saudáveis, cortes precisos e cores vibrantes. Cada detalhe é pensado para que seu cabelo conte a sua história com autenticidade.",
    },
    {
      id: "unhas",
      label: "Unhas & Acabamentos",
      title: "Unhas\n& acabamentos",
      icon: Hand,
      filtro: ["Manicure & Pedicure"],
      imagem: rituaisImg,
      descricao:
        "Unhas impecáveis com esmaltação em gel, nail art e acabamentos que refletem seu estilo pessoal com excelência.",
    },
  ],

  // ── Galeria ────────────────────────────────────────────────────────────────
  galeria: [
    {
      id: "skin",
      title: "Skin Glow",
      subtitle: "Tratamentos Faciais",
      images: [skin1, skin2, skin3],
      layout: "left",
    },
    {
      id: "loiro",
      title: "Loiro Perfeito",
      subtitle: "Mechas & Tonalização",
      images: [loiro1, loiro2, loiro3],
      layout: "right",
    },
    {
      id: "make",
      title: "Make Glamour",
      subtitle: "Maquiagem Profissional",
      images: [make1, make2, make3],
      layout: "left",
    },
    {
      id: "spa",
      title: "Spa Relax",
      subtitle: "Rituais de Beleza",
      images: [spa1, spa2, spa3],
      layout: "right",
    },
  ] as GaleriaItem[],

  // ── Depoimentos ────────────────────────────────────────────────────────────
  depoimentos: [
    {
      nome: "Ana Clara",
      papel: "Cliente Fiel",
      avatar: "https://i.pravatar.cc/150?img=47",
      nota: 5,
      texto: "O VOGA superou todas as minhas expectativas. O ambiente é lindo, acolhedor e os profissionais são incríveis. Me sinto em casa toda vez que vou.",
    },
    {
      nome: "Juliana M.",
      papel: "Noiva",
      avatar: "https://i.pravatar.cc/150?img=43",
      nota: 5,
      texto: "Fiz meu dia da noiva no VOGA e foi uma experiência mágica. Profissionalismo e cuidado em cada detalhe. Super recomendo!",
    },
    {
      nome: "Camila R.",
      papel: "Empresária",
      avatar: "https://i.pravatar.cc/150?img=32",
      nota: 5,
      texto: "É meu refúgio semanal. A equipe do VOGA sabe exatamente o que fazer pra me desconectar da correria do dia a dia.",
    },
    {
      nome: "Beatriz L.",
      papel: "Cliente",
      avatar: "https://i.pravatar.cc/150?img=5",
      nota: 5,
      texto: "Os resultados que tive com os tratamentos de pele foram maravilhosos. O espaço é lindíssimo e o atendimento é impecável!",
    },
    {
      nome: "Fernanda S.",
      papel: "Cliente Frequente",
      avatar: "https://i.pravatar.cc/150?img=44",
      nota: 5,
      texto: "Me sinto outra pessoa depois de cada visita ao VOGA. É com certeza o melhor investimento em mim mesma.",
    },
  ],

  // ── Estatísticas (seção de números) ────────────────────────────────────────
  estatisticas: {
    imagem: numerosImage,
    itens: [
      { valor: 3, sufixo: "+", label: "Anos de excelência" },
      { valor: 3000, sufixo: "+", label: "Clientes atendidos" },
    ],
  },

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
