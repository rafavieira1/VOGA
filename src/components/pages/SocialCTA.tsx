import { motion } from "framer-motion";
import { CLIENT } from "@/config/client";
import { FlowButton } from "@/components/ui/flow-button";
import { BadgeGlass } from "@/components/ui/badge-glass";

export default function SocialCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#f4eee0]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Banner/Card Largo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden flex flex-col justify-center min-h-[500px] lg:min-h-[600px] shadow-2xl"
        >
          {/* Imagem de Fundo (Cobrindo tudo) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={CLIENT.socialCTA.imagem}
              alt="Interior do VOGA"
              className="w-full h-full object-cover object-[center_20%]"
            />
            {/* Overlay Escuro para garantir leitura na esquerda */}
            <div className="absolute inset-0 bg-black/40 lg:bg-transparent lg:bg-gradient-to-r lg:from-black/80 lg:via-black/40 lg:to-transparent pointer-events-none" />
          </div>

          {/* Conteúdo de Texto */}
          <div className="relative z-10 w-full flex flex-col justify-center items-start text-left py-12 px-8 sm:py-16 sm:px-12 lg:py-24 lg:px-20 max-w-2xl xl:max-w-3xl">
            {/* Tag */}
            <div className="flex justify-start mb-6">
              <BadgeGlass variant="dark">Fique Por Dentro</BadgeGlass>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              {CLIENT.socialCTA.titulo}
            </h2>

            <p className="text-base sm:text-lg text-white/90 mb-10 max-w-lg font-light leading-relaxed drop-shadow-md">
              {CLIENT.socialCTA.descricao}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <FlowButton
                text="Siga no Instagram"
                variant="light"
                href={`https://instagram.com/${CLIENT.instagram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-[240px] md:w-[260px]"
              />

              <FlowButton
                text="Fale no WhatsApp"
                variant="light"
                href={`https://wa.me/${CLIENT.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-[240px] md:w-[260px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
