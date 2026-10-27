import { FaWhatsapp } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";
import { IMAGES, whatsappUrl } from "../config";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="px-5 md:px-8" aria-label="Contacto rápido">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-customYellow/20 px-6 py-14 text-center md:px-16 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('${IMAGES.texture}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-customYellow/25 via-ink/90 to-ink"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            ¿Listo para empezar su proyecto?
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            El asesoramiento profesional es la mejor inversión. Escríbanos y lo orientamos.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Escribir por WhatsApp
            </a>
            <a href="#contacto" className="btn-secondary">
              Dejar un mensaje
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
