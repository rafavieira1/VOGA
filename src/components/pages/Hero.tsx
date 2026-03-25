import { CLIENT } from "@/config/client";
import { FlowButton } from "@/components/ui/flow-button";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[100dvh] min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden pt-20 lg:pt-0">

      {/* Imagem de Fundo (Cobrindo tudo) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={CLIENT.hero.imagem}
          className="w-full h-[115%] lg:h-full object-cover object-[85%_top] min-[425px]:object-[88%_top] md:object-[100%_top] lg:object-[65%_center] xl:object-[75%_center]"
          alt="VOGA Hero"
        />
        {/* Overlay Escuro para garantir leitura na esquerda */}
        <div className="absolute inset-0 bg-[#161117]/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#161117]/90 lg:via-[#161117]/60 lg:to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1400px] h-full flex flex-col items-center lg:items-start justify-start lg:justify-center relative z-10 pt-10 sm:pt-16 lg:pt-0">

        {/* Texto na Esquerda no Desktop / Centro Topo no Mobile */}
        <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start justify-center pt-8 sm:pt-12 md:pt-4 pb-16 sm:pb-20 md:pb-auto lg:py-0 text-center lg:text-left">

          <h1 className="font-serif text-[35vw] sm:text-[32vw] md:text-[28vw] lg:text-[16vw] xl:text-[18vw] 2xl:text-[20vw] font-black leading-[0.82] tracking-tighter text-[#e7b167] uppercase mb-4 sm:mb-8 drop-shadow-lg">
            <span className="block lg:pr-4">VO</span>
            <span className="block lg:pr-4">GA</span>
          </h1>

          <p className="max-w-xl text-[#f4eee0]/90 text-[13px] sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6 sm:mb-12 drop-shadow-md">
            Dedicados à beleza e experiência premium. Cada detalhe importa para destacar você em evidência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <div className="hidden lg:block">
              <FlowButton text="Agendar Horário" href={CLIENT.whatsappLink} target="_blank" />
            </div>
            <a href="#servicos" className="text-sm font-bold uppercase tracking-widest text-[#f4eee0]/80 hover:text-[#e7b167] transition-colors py-3 px-6 mt-2 sm:mt-0">
              NOSSOS SERVIÇOS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
