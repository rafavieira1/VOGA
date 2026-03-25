import { CLIENT } from "@/config/client";
import { FlowButton } from "@/components/ui/flow-button";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[100dvh] min-h-[700px] flex items-center overflow-hidden pt-20 lg:pt-0">

      {/* Imagem de Fundo (Cobrindo tudo) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={CLIENT.hero.imagem}
          className="w-full h-full object-cover object-center"
          alt="VOGA Hero"
        />
        {/* Overlay Escuro para garantir leitura na esquerda */}
        <div className="absolute inset-0 bg-black/40 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#161117]/90 lg:via-[#161117]/60 lg:to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] h-full flex flex-col items-start justify-center relative z-10">

        {/* Texto na Esquerda */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center pt-8 sm:pt-16 pb-20 lg:py-0 text-left">

          <h1 className="font-serif text-[50vw] sm:text-[40vw] lg:text-[10vw] xl:text-[15vw] font-black leading-[0.82] tracking-tighter text-[#e7b167] uppercase mb-6 sm:mb-8 drop-shadow-lg">
            <span className="block pr-4">VO</span>
            <span className="block pr-4">GA</span>
          </h1>

          <p className="max-w-xl text-[#f4eee0]/90 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-8 sm:mb-12 drop-shadow-md">
            {CLIENT.slogan} <br className="hidden sm:block" />
            Dedicados à beleza e experiência premium. Cada detalhe importa para destacar você em evidência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-start">
            <FlowButton text="Shop now" href={`https://wa.me/${CLIENT.whatsapp}`} target="_blank" />
            <a href="#servicos" className="text-sm font-bold uppercase tracking-widest text-[#f4eee0]/80 hover:text-[#e7b167] transition-colors py-3 px-6 mt-2 sm:mt-0">
              NOSSOS SERVIÇOS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
