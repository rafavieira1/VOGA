import { motion, Variants } from "framer-motion";
import { CLIENT } from "@/config/client";
import { FlowButton } from "@/components/ui/flow-button";
import fundoverde from "@/assets/fundoverde.avif";

export default function Sobre() {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="sobre" className="bg-[#f4eee0] py-16 sm:py-24 md:py-32 overflow-hidden border-t border-[#234932]/10">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1400px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex justify-center mb-16"
        >
          {/* Custom Badge based on User request using fundoverde.png */}
          <div className="relative inline-flex items-center justify-center px-5 py-2 rounded-full overflow-hidden shadow-[0_4px_12px_rgba(35,73,50,0.2)] border border-[#e7b167]/30 group">
            <div className="absolute inset-0 z-0">
              <img src={fundoverde} alt="Fundo Textura" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#234933]/70 backdrop-blur-[2px]" />
            </div>
            <span className="relative z-10 text-[#f4eee0] font-medium tracking-widest text-[10px] sm:text-[11px] uppercase whitespace-nowrap transition-colors duration-300 group-hover:text-[#e7b167]">
              Sobre Nós
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row lg:items-stretch justify-center gap-10 lg:gap-0"
        >
          {/* Left: Titles */}
          <motion.div variants={fadeUp} className="flex-1 w-full lg:text-right relative mt-0 flex flex-col justify-center gap-2 lg:pr-8 xl:pr-12">
            <h2 className="text-[12vw] sm:text-[11vw] lg:text-5xl xl:text-6xl 2xl:text-[6.5rem] font-normal leading-[1.1] tracking-tight text-[#161117] flex flex-col">
              {CLIENT.sobre.titulos.map((titulo, i) => (
                <span key={i}>{titulo}</span>
              ))}
            </h2>
          </motion.div>

          {/* Middle: Image */}
          <motion.div variants={fadeUp} className="w-full mx-auto lg:w-[320px] xl:w-[420px] shrink-0">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src={CLIENT.sobre.imagem}
                alt={`Sobre ${CLIENT.nome}`}
                className="w-full h-full object-cover shadow-sm scale-[1.12]"
              />
            </div>
          </motion.div>

          {/* Right: Content & Stats */}
          <motion.div variants={fadeUp} className="flex-1 w-full mx-auto max-w-xl lg:max-w-none flex flex-col lg:justify-between items-start lg:pl-8 xl:pl-12">
            <div className="flex flex-col items-start w-full">
              <p className="text-[15px] sm:text-base text-[#161117]/70 font-medium leading-relaxed mb-10 text-justify sm:text-left">
                O {CLIENT.nome} {CLIENT.sobre.descricao}
              </p>

              <FlowButton text="Quem Somos" href="#servicos" className="mb-6 lg:mb-0 w-fit" />
            </div>

            {/* Stats inline */}
            <div className="flex items-center gap-6 sm:gap-14 w-full mt-6 lg:mt-0">
              {CLIENT.sobre.estatisticas.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-['Lora'] font-medium text-4xl sm:text-5xl md:text-6xl xl:text-[5rem] tracking-tighter text-[#161117] leading-none">
                    {stat.valor}
                  </span>
                  <span
                    className="text-[9px] md:text-[10px] text-[#161117]/60 font-semibold uppercase leading-tight tracking-[0.2em] whitespace-pre-line"
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
