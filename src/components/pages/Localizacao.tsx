import { motion } from "framer-motion";
import { CLIENT } from "@/config/client";
import { FlowButton } from "@/components/ui/flow-button";
import fundoverde from "@/assets/fundoverde.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Localizacao() {
  const whatsappUrl = CLIENT.whatsappLink;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLIENT.endereco)}`;

  const horarioEntries = Object.entries(CLIENT.horarios);

  return (
    <section id="localizacao" className="py-16 lg:py-32 bg-[#ede7d9]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1400px]">
        {/* TÍTULO CENTRALIZADO NO TOPO */}
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
              Localização
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#161117] leading-[1.1]">
            Onde nos encontrar
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-stretch"
        >
          {/* Left Column */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col pt-0 lg:pr-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#161117] leading-[1.1] mb-6">
              {CLIENT.localizacao.titulo}<br className="hidden lg:block" />
            </h3>

            <p className="text-[#161117]/60 text-sm md:text-base leading-relaxed max-w-lg mb-12 font-medium">
              {CLIENT.localizacao.descricao}
            </p>

            <div className="mb-14 flex flex-row flex-wrap gap-10 sm:gap-16">
              {/* Endereço */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#161117]/40 mb-3">Endereço</p>
                <p className="text-sm font-medium text-[#161117] leading-relaxed">
                  {CLIENT.localizacao.rua}<br />
                  {CLIENT.localizacao.complemento}<br />
                  {CLIENT.localizacao.cep}
                </p>
              </div>

              {/* Horários */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#161117]/40 mb-3">Horários</p>
                <div className="text-sm font-medium text-[#161117] leading-relaxed space-y-0.5">
                  {horarioEntries.map(([dia, hora]) => (
                    <p key={dia}>
                      <span className={hora === "Fechado" ? "text-[#161117]/40" : "text-[#161117]/70"}>{dia}</span>
                      &nbsp;&nbsp;{hora}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <FlowButton
                text="Falar no WhatsApp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              />
              <FlowButton
                text="Ver no Mapa"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              />
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] bg-[#ede7d9] border-8 border-[#f4eee0] shadow-2xl">
            <iframe
              title="Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(CLIENT.endereco)}&output=embed`}
              className="w-full h-full border-0 pointer-events-auto"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
