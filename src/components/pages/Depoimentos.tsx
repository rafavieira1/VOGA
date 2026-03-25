import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { CLIENT } from "@/config/client";
import fundoverde from "@/assets/fundoverde.png";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Depoimentos() {
  const getCardClasses = (index: number) => {
    const baseClass = "rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300";
    
    // Card 0: Destacado, escuro, ocupe 2 linhas na esquerda.
    if (index === 0) {
      return `${baseClass} bg-[#234932] text-white md:col-span-1 md:row-span-2`;
    }
    
    // Cards largos
    const isWide = index === 2;
    
    // Card extra largo (toda a extensão direita)
    const isExtraWide = index === 3;
    
    // Cards padrão (quadrados)
    const isSquare = index === 1 || index === 4;
    
    return `${baseClass} bg-[#f4eee0] text-[#161117] ${isWide ? 'md:col-span-2' : ''} ${isExtraWide ? 'md:col-span-3' : ''} ${isSquare ? 'md:col-span-1' : ''} md:row-span-1`;
  };

  return (
    <section id="depoimentos" className="py-14 sm:py-16 lg:py-32 bg-[#ede7d9]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1400px]">
        {/* TÍTULO PADRONIZADO */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 lg:mb-24 flex flex-col items-center"
        >
           {/* Custom Badge based on User request using fundoverde.png */}
           <div className="relative inline-flex items-center justify-center px-5 py-2 rounded-full overflow-hidden shadow-[0_4px_12px_rgba(35,73,50,0.2)] border border-[#e7b167]/30 group mb-6">
             <div className="absolute inset-0 z-0">
               <img src={fundoverde} alt="Fundo Textura" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-[#234933]/70 backdrop-blur-[2px]" />
             </div>
             <span className="relative z-10 text-[#f4eee0] font-medium tracking-widest text-[10px] sm:text-[11px] uppercase whitespace-nowrap transition-colors duration-300 group-hover:text-[#e7b167]">
               Depoimentos
             </span>
           </div>
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-[#161117] max-w-4xl mx-auto leading-[1.1]">
             O que dizem sobre nós
           </h2>
        </motion.div>

        {/* BENTO GRID DE DEPOIMENTOS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 lg:gap-6 relative z-10"
        >
          {CLIENT.depoimentos.map((dep, i) => {
            const initials = dep.nome.substring(0, 2).toUpperCase();
            
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={getCardClasses(i)}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar com Iniciais */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border border-[#e7b167]/20 ${
                    i === 0 
                      ? 'bg-[#f4eee0] text-[#234932]' 
                      : 'bg-[#234932] text-[#f4eee0]'
                  }`}>
                    {initials}
                  </div>
                  
                  {/* Nota */}
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <span>{dep.nota}.0</span>
                    <Star className="w-4 h-4 fill-current text-current" />
                    <span className={`font-normal uppercase tracking-wide text-[10px] md:text-xs ml-0.5 ${i === 0 ? 'opacity-70' : 'opacity-60'}`}>
                      Rating
                    </span>
                  </div>
                </div>

                {/* Texto do Depoimento */}
                <p className={`mt-4 lg:mt-6 mb-6 text-[15px] sm:text-base lg:text-lg xl:text-xl font-medium leading-relaxed tracking-tight ${i === 0 ? 'text-white/95' : 'text-[#161117]/90'}`}>
                  "{dep.texto}"
                </p>

                {/* Nome e Papel (Rodapé do Card) */}
                <div className="mt-auto">
                  <p className="font-bold text-sm md:text-base">{dep.nome}</p>
                  <p className={`text-xs md:text-sm mt-0.5 ${i === 0 ? 'text-white/50' : 'text-[#161117]/50'}`}>
                    {dep.papel || "Cliente"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
