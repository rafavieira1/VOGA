import { Instagram, MessageCircle, Facebook, Sparkles } from "lucide-react";
import { CLIENT } from "@/config/client";
import fundoverde from "@/assets/fundoverde.png";

const companyLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
];

const serviceLinks = [
  { label: "Nossos Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const contactLinks = [
  { label: "Localização", href: "#localizacao" },
  { label: "WhatsApp", href: `https://wa.me/${CLIENT.whatsapp}` },
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}`;

  return (
    <footer className="relative overflow-hidden bg-[#ede7d9] pt-12 lg:pt-24 pb-20 lg:pb-48 flex flex-col justify-end">

      {/* Marca D'Água no fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none select-none z-0 w-full overflow-hidden">
        <span className="font-serif text-[25vw] md:text-[22vw] lg:text-[20vw] font-black uppercase tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-[#234932]/15 to-transparent whitespace-nowrap translate-y-[23%] lg:translate-y-[33%]">
          {CLIENT.footerMarcaDagua}
        </span>
      </div>

      {/* Container principal para o card */}
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        {/* Card Principal */}
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_8px_40px_rgba(35,73,50,0.15)] border border-[#e7b167]/20">
          
          {/* Imagem de Fundo Enviada */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img 
              src={fundoverde} 
              alt="Textura de Fundo" 
              className="w-full h-full object-cover"
            />
            {/* Overlay escuro e embaçado */}
            <div className="absolute inset-0 bg-[#234933]/70 backdrop-blur-[4px]" />
          </div>

          {/* Conteúdo do Card */}
          <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-12">

            {/* Top Section do Card */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-12">

            {/* Left Area - Logo & Descrição */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#e7b167] shadow-sm">
                  <Sparkles size={16} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#e7b167]">{CLIENT.nome}</h3>
              </div>
              <p className="text-[#f4eee0]/70 text-sm leading-relaxed mb-6 font-medium">
                {CLIENT.slogan} {CLIENT.footerDescricao}
              </p>

              {/* Redes Sociais */}
              <div className="flex gap-4">
                <a
                  href={`https://instagram.com/${CLIENT.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4eee0] hover:text-[#e7b167] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={2.5} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4eee0] hover:text-[#e7b167] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} strokeWidth={2.5} />
                </a>
                {CLIENT.facebook && (
                  <a
                    href={`https://facebook.com/${CLIENT.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f4eee0] hover:text-[#e7b167] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </div>

            {/* Right Area - Grid de Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20">

              {/* Coluna 1 - Empresa (Oculta no mobile) */}
              <div className="hidden md:block">
                <h4 className="font-bold text-[#f4eee0] mb-4 text-sm">Empresa</h4>
                <nav className="flex flex-col gap-3">
                  {companyLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-[#f4eee0]/70 hover:text-[#e7b167] hover:underline transition-all text-xs sm:text-sm font-medium">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Coluna 2 */}
              <div>
                <h4 className="font-bold text-[#f4eee0] mb-4 text-sm">Serviços</h4>
                <nav className="flex flex-col gap-3">
                  {serviceLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-[#f4eee0]/70 hover:text-[#e7b167] hover:underline transition-all text-xs sm:text-sm font-medium">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Coluna 3 */}
              <div>
                <h4 className="font-bold text-[#f4eee0] mb-4 text-sm">Contato</h4>
                <nav className="flex flex-col gap-3">
                  {contactLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-[#f4eee0]/70 hover:text-[#e7b167] hover:underline transition-all text-xs sm:text-sm font-medium">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

            </div>
          </div>

          {/* Bottom Bar do Card */}
          <div className="border-t border-[#e7b167]/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#f4eee0]/50">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} {CLIENT.nome}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#e7b167] transition-colors underline decoration-transparent hover:decoration-[#e7b167] underline-offset-4">Política de Privacidade</a>
              <a href="#" className="hover:text-[#e7b167] transition-colors underline decoration-transparent hover:decoration-[#e7b167] underline-offset-4">Termos de Serviço</a>
            </div>
          </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
