import { MessageCircle } from "lucide-react";
import { CLIENT } from "@/config/client";

export default function BotaoWhatsApp() {
  const whatsappUrl = CLIENT.whatsappLink;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco
      </span>
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        style={{ animation: "whatsapp-pulse 2s infinite" }}
      >
        <MessageCircle className="text-primary-foreground" size={26} />
      </div>
    </a>
  );
}
