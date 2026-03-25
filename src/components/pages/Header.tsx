import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/resizable-navbar";
import { FlowButton } from "@/components/ui/flow-button";
import { CLIENT } from "@/config/client";

const navItems = [
  { name: "Início", link: "#inicio" },
  { name: "Sobre", link: "#sobre" },
  { name: "Serviços", link: "#servicos" },
  { name: "Galeria", link: "#galeria" },
  { name: "Depoimentos", link: "#depoimentos" },
  { name: "Localização", link: "#localizacao" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const whatsappUrl = `https://wa.me/${CLIENT.whatsapp}?text=Olá! Gostaria de agendar um horário.`;

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full">
      <Navbar>
        {/* ── Desktop ── */}
        <NavBody>
          {/* Logo */}
          <a
            href="#inicio"
            className={`relative z-20 mr-4 flex items-center px-2 py-1 font-display text-xl sm:text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-[#161117]" : "text-[#f4eee0]"}`}
          >
            {CLIENT.nome}
          </a>

          {/* Links centralizados via wrapper para herdar cor */}
          <div className={`hidden flex-1 lg:flex justify-center transition-colors duration-300 ${isScrolled ? "text-[#234932]" : "text-[#f4eee0]"}`}>
            <NavItems items={navItems} />
          </div>

          {/* CTA */}
          <div className="relative z-20 flex items-center">
            <FlowButton
              text="Agendar agora"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant={isScrolled ? "dark" : "light"}
            />
          </div>
        </NavBody>

        {/* ── Mobile ── */}
        <MobileNav>
          <MobileNavHeader>
            {/* Logo */}
            <a
              href="#inicio"
              className={`relative z-20 flex items-center px-2 py-1 font-display text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-[#161117]" : "text-[#f4eee0]"}`}
            >
              {CLIENT.nome}
            </a>

            {/* Toggle hamburger / X */}
            <div className={`transition-colors duration-300 ${isScrolled ? "text-[#161117]" : "text-[#f4eee0]"}`}>
              <MobileNavToggle
                isOpen={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              />
            </div>
          </MobileNavHeader>

          {/* Menu drop-down mobile */}
          <MobileNavMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="w-full text-base font-medium text-[#161117]/70 hover:text-[#161117] transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-4 w-full">
              <FlowButton
                text="Agendar agora"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
