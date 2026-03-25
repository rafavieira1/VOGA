import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { CLIENT } from "@/config/client";
import fundoverde from "@/assets/fundoverde.png";

const galleryItems = CLIENT.galeria;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Galeria() {
  // Indices independentes para cada card
  const [activeIndexes, setActiveIndexes] = useState<number[]>(
    galleryItems.map(() => 0)
  );

  // Estado do lightbox: qual categoria está aberta e qual index de imagem
  const [lightboxState, setLightboxState] = useState<{ categoryIdx: number; imageIdx: number } | null>(null);

  // Navegação num Card Individual
  const nextImage = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setActiveIndexes((prev) => {
      const next = [...prev];
      next[idx] = (next[idx] + 1) % galleryItems[idx].images.length;
      return next;
    });
  };

  const prevImage = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setActiveIndexes((prev) => {
      const next = [...prev];
      const max = galleryItems[idx].images.length;
      next[idx] = next[idx] === 0 ? max - 1 : next[idx] - 1;
      return next;
    });
  };

  // Navegação no Lightbox
  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const { categoryIdx, imageIdx } = lightboxState;
    const max = galleryItems[categoryIdx].images.length;
    setLightboxState({ categoryIdx, imageIdx: (imageIdx + 1) % max });
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxState) return;
    const { categoryIdx, imageIdx } = lightboxState;
    const max = galleryItems[categoryIdx].images.length;
    setLightboxState({ categoryIdx, imageIdx: imageIdx === 0 ? max - 1 : imageIdx - 1 });
  };

  return (
    <section id="galeria" className="py-16 lg:py-24 bg-[#f4eee0]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center mb-16 lg:mb-24"
        >
          {/* Custom Badge based on User request using fundoverde.png */}
          <div className="relative inline-flex items-center justify-center px-5 py-2 rounded-full overflow-hidden shadow-[0_4px_12px_rgba(35,73,50,0.2)] border border-[#e7b167]/30 group mb-6">
            <div className="absolute inset-0 z-0">
              <img src={fundoverde} alt="Fundo Textura" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#234933]/70 backdrop-blur-[2px]" />
            </div>
            <span className="relative z-10 text-[#f4eee0] font-medium tracking-widest text-[10px] sm:text-[11px] uppercase whitespace-nowrap transition-colors duration-300 group-hover:text-[#e7b167]">
              Galeria
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#161117] leading-[1.1]">
            Nosso Trabalho
          </h2>
        </motion.div>

        {/* 2x2 GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#234932]/15 border border-[#234932]/15 shadow-sm"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="relative aspect-square sm:aspect-[4/3] bg-[#f4eee0] flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setLightboxState({ categoryIdx: i, imageIdx: activeIndexes[i] })}
            >
              {/* CORNER TEXT */}
              <div
                className={`absolute top-10 sm:top-14 z-20 pointer-events-none flex flex-col items-center text-center ${item.layout === "left"
                  ? "right-0 w-[45%] sm:w-[50%]"
                  : "left-0 w-[45%] sm:w-[50%]"
                  }`}
              >
                <h3 className="font-display font-bold tracking-tight text-xl sm:text-2xl text-[#161117] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#234932]/60 font-medium text-[11px] sm:text-xs tracking-wide">
                  {item.subtitle}
                </p>
              </div>

              {/* CENTER IMAGE LAYOUT */}
              {item.layout === "center" && (
                <div className="absolute inset-0 flex items-center justify-center p-12 sm:p-20 z-0">
                  <motion.img
                    key={activeIndexes[i]}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={item.images[activeIndexes[i]]}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              {/* RIGHT IMAGE LAYOUT */}
              {item.layout === "right" && (
                <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%] z-0 overflow-hidden">
                  <motion.img
                    key={activeIndexes[i]}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={item.images[activeIndexes[i]]}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f4eee0] via-transparent to-transparent opacity-50 sm:hidden z-10"></div>
                </div>
              )}

              {/* LEFT IMAGE LAYOUT */}
              {item.layout === "left" && (
                <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[50%] z-0 overflow-hidden">
                  <motion.img
                    key={activeIndexes[i]}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={item.images[activeIndexes[i]]}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle gradient to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#f4eee0] via-transparent to-transparent opacity-50 sm:hidden z-10"></div>
                </div>
              )}

              {/* BOTTOM CONTROLS (Dots and Arrows) */}
              <div
                className={`absolute bottom-8 sm:bottom-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 z-30 ${
                  item.layout === "right" ? "left-0 w-[45%] sm:w-[50%]" : "right-0 w-[45%] sm:w-[50%]"
                }`}
              >
                {/* Arrows Funcionais */}
                <div className="flex gap-3 sm:gap-4 text-[#161117]">
                  <button
                    onClick={(e) => prevImage(e, i)}
                    className="hover:text-gray-400 transition-colors focus:outline-none"
                    aria-label="Anterior"
                  >
                    <ChevronLeft strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={(e) => nextImage(e, i)}
                    className="hover:text-gray-400 transition-colors focus:outline-none"
                    aria-label="Próxima"
                  >
                    <ChevronRight strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Dots Reativos (Apple Style) */}
                <div className="flex gap-1.5 items-center">
                  {item.images.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndexes[i] === dotIdx ? 'w-4 bg-[#234932]' : 'w-1.5 bg-[#234932]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {lightboxState !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#f4eee0]/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxState(null)}
          >
            <button
              className="absolute top-6 right-6 text-[#161117] hover:scale-110 transition-transform z-50 p-2 bg-[#f4eee0]/50 rounded-full"
              onClick={() => setLightboxState(null)}
              aria-label="Fechar galeria"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            {/* Setas do Lightbox */}
            <button
              className="absolute left-2 sm:left-12 top-1/2 -translate-y-1/2 text-[#161117] hover:scale-110 transition-transform z-50 p-3 bg-[#f4eee0]/50 backdrop-blur-md rounded-full"
              onClick={prevLightboxImage}
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>

            <button
              className="absolute right-2 sm:right-12 top-1/2 -translate-y-1/2 text-[#161117] hover:scale-110 transition-transform z-50 p-3 bg-[#f4eee0]/50 backdrop-blur-md rounded-full"
              onClick={nextLightboxImage}
              aria-label="Próxima imagem"
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxState.imageIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                src={galleryItems[lightboxState.categoryIdx].images[lightboxState.imageIdx]}
                alt={galleryItems[lightboxState.categoryIdx].title}
                className="max-h-[80vh] max-w-[85vw] md:max-w-[70vw] object-contain shadow-2xl bg-white p-2"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Título e Subtítulo no Lightbox */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <h3 className="font-display font-bold text-2xl text-[#161117] mb-1">
                {galleryItems[lightboxState.categoryIdx].title}
              </h3>
              <p className="text-[#161117]/60 font-medium text-sm">
                {galleryItems[lightboxState.categoryIdx].subtitle} &mdash; {lightboxState.imageIdx + 1} de {galleryItems[lightboxState.categoryIdx].images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
