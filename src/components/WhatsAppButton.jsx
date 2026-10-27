import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { whatsappUrl } from "../config";

// Botón flotante de WhatsApp; aparece después de empezar a bajar por la página.
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={`group fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-all duration-300 hover:scale-110 md:bottom-8 md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span
        className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]"
        aria-hidden="true"
      />
      <FaWhatsapp className="relative h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
        ¿Hablamos?
      </span>
    </a>
  );
}
