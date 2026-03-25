import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT } from "@/config/client";
import { NavBar } from "@/components/ui/tubelight-navbar";
import fundoverde from "@/assets/fundoverde.png";

const categorias = CLIENT.categoriasServicos.map((cat) => ({
  ...cat,
  services: CLIENT.servicos.filter((s) => cat.filtro.includes(s.nome)),
}));

// Preparar itens para o NavBar
const navItems = categorias.map((c) => ({
  name: c.label,
  icon: c.icon,
}));

export default function Servicos() {
  const [activeTab, setActiveTab] = useState(categorias[0].label);
  const active = categorias.find((c) => c.label === activeTab) ?? categorias[0];

  return (
    <section id="servicos" className="relative py-14 sm:py-16 lg:py-32 overflow-hidden">

      {/* Imagem de Fundo Enviada */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={fundoverde}
          alt="Textura de Fundo"
          className="w-full h-full object-cover"
        />
        {/* Overlay escuro e embaçado para leitura premium */}
        <div className="absolute inset-0 bg-[#234933]/70 backdrop-blur-[4px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-[1500px] relative z-10">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center text-center mb-8 lg:mb-16"
        >
          {/* Custom Creme Badge */}
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full mb-6 bg-[#f4eee0] shadow-sm border border-[#e7b167]/30">
            <span className="text-[#234932] font-semibold tracking-widest text-[10px] sm:text-[11px] uppercase whitespace-nowrap">
              O que oferecemos
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#e7b167] leading-[1.1]">
            Nossos serviços
          </h2>
        </motion.div>

        {/* ── TAB BAR (Tubelight) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-10 lg:mb-20"
        >
          <NavBar
            items={navItems}
            activeTab={activeTab}
            onTabChange={(name) => setActiveTab(name)}
          />
        </motion.div>

        {/* ── CONTENT AREA ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-stretch"
          >
            {/* LEFT — Image + Category Title */}
            <div className="lg:w-[45%] flex flex-col gap-8">
              {/* Category Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl lg:rounded-3xl bg-gray-100">
                <img
                  src={active.imagem}
                  alt={active.label}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Category title overlaying bottom-left of image */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#e7b167] leading-[1.1] whitespace-pre-line drop-shadow-lg">
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#f4eee0]/80 text-sm md:text-base leading-relaxed font-medium max-w-lg">
                {active.descricao}
              </p>
            </div>

            {/* RIGHT — Services List */}
            <div className="lg:w-[55%] flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs font-bold tracking-widest uppercase text-[#e7b167]/70">
                  {active.services.length}{" "}
                  {active.services.length === 1 ? "serviço" : "serviços"}{" "}
                  disponíveis
                </p>
                <div className="h-px flex-1 bg-[#e7b167]/20 ml-6" />
              </div>

              <div className="flex flex-col divide-y divide-[#e7b167]/10">
                {active.services.map((servico, idx) => (
                  <motion.div
                    key={servico.nome}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.05,
                      ease: "easeOut",
                    }}
                    className="group py-5 sm:py-6 lg:py-8 flex items-start justify-between gap-4 sm:gap-6 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#f4eee0] group-hover:text-[#e7b167] transition-colors duration-300">
                          {servico.nome}
                        </h4>
                        {(servico as any).preco && (
                          <span className="text-sm lg:text-base font-semibold text-[#e7b167] px-3 py-1 rounded-full bg-[#e7b167]/10 whitespace-nowrap self-start sm:self-auto border border-[#e7b167]/20">
                            {(servico as any).preco}
                          </span>
                        )}
                      </div>
                      <p className="text-[#f4eee0]/60 text-sm leading-relaxed max-w-md">
                        {servico.descricao}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#e7b167]/20 flex items-center justify-center shrink-0 mt-1 group-hover:border-[#e7b167] group-hover:bg-[#e7b167] transition-all duration-300">
                      <svg
                        className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#e7b167]/40 group-hover:text-[#234932] transition-colors duration-300 -rotate-45"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
