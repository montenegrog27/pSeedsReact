import { FaWhatsapp } from "react-icons/fa6";
import { LuInstagram, LuFacebook, LuLinkedin } from "react-icons/lu";
import { IMAGES, NAV_LINKS, SOCIAL, WHATSAPP_DISPLAY, whatsappUrl } from "../config";

const socials = [
  { href: SOCIAL.instagram, label: "Instagram", icon: LuInstagram },
  { href: SOCIAL.facebook, label: "Facebook", icon: LuFacebook },
  { href: SOCIAL.linkedin, label: "LinkedIn", icon: LuLinkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img src={IMAGES.logo} alt="Paradigma Seeds" loading="lazy" className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-500">
            Banco de semillas de cannabis de Corrientes. Investigación, desarrollo, fitomejoramiento
            genético y registro de variedades. Registrados en INASE · Categoría A Criaderos.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} de Paradigma Seeds`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-customYellow/50 hover:text-customYellow"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Secciones">
          <h3 className="text-sm font-semibold text-white">Secciones</h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm text-neutral-500 transition hover:text-customYellow">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-500">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-customYellow"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>Corrientes, Argentina</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-neutral-600 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Paradigma Seeds. Todos los derechos reservados.</p>
          <p>Contenido destinado a mayores de 18 años.</p>
        </div>
      </div>
    </footer>
  );
}
