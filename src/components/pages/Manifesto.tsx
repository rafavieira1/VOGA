import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CLIENT } from "@/config/client";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  // A palavra vai de 15% de opacidade até 100%
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
};

export default function Manifesto() {
  const textContainer = useRef<HTMLDivElement>(null);

  // Mapeia o progresso do scroll diretamente no bloco de texto
  const { scrollYProgress } = useScroll({
    target: textContainer,
    offset: ["start 85%", "end 50%"],
  });

  const titleWords = CLIENT.nome.split(" ");
  const phrase = `O ${CLIENT.nome} ${CLIENT.manifesto.frase}`;
  const subtitleWords = phrase.split(" ");
  const totalWords = titleWords.length + subtitleWords.length;

  return (
      <section
      id="manifesto"
      className="bg-[#f4eee0] py-16 sm:py-20 md:py-32 lg:py-48 px-4 sm:px-6 min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center overflow-hidden border-t border-[#161117]/10"
    >
      <div ref={textContainer} className="max-w-[1400px] mx-auto flex flex-col items-center justify-center w-full">
        {/* Title */}
        <h2
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9.5rem] font-serif font-black tracking-tighter text-[#234932] leading-[0.9] text-center mb-6 md:mb-10 flex flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-6 justify-center drop-shadow-sm"
        >
          {titleWords.map((word, i) => {
            const start = i / totalWords;
            const end = start + (1 / totalWords);
            return (
              <Word key={`title-${i}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>

        {/* Cinematic Scroll Subtitle */}
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold tracking-tight text-[#161117] leading-[1.25] text-center max-w-5xl mx-auto w-full">
          {subtitleWords.map((word, i) => {
            const start = (titleWords.length + i) / totalWords;
            const end = start + (1 / totalWords);

            return (
              <span key={`sub-${i}`}>
                <Word progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
                {i < subtitleWords.length - 1 && " "}
              </span>
            );
          })}
        </p>

        {/* Action Call */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 sm:mt-24 w-full flex justify-center"
        >
          <a
            href={CLIENT.manifesto.linkHref}
            className="text-sm md:text-base font-bold tracking-wider text-[#234932] border-b-[2px] border-[#234932] pb-1 hover:text-[#e7b167] hover:border-[#e7b167] transition-colors uppercase"
          >
            {CLIENT.manifesto.linkTexto}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
