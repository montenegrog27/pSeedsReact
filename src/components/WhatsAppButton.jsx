import { FaWhatsapp } from "react-icons/fa6";
import { whatsappUrl } from "../config";

// Botón flotante de WhatsApp visible en toda la página.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
    >
      <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
    </a>
  );
}
