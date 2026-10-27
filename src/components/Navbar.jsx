import { useEffect, useState } from "react";
import { LuMenu, LuX, LuArrowUpRight } from "react-icons/lu";
import { IMAGES, NAV_LINKS } from "../config";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta en el menú la sección que se está viendo
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Bloquear el scroll del fondo y permitir cerrar con Escape cuando el menú está abierto
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" className="flex items-center" aria-label="Paradigma Seeds - Inicio">
          <img src={IMAGES.logo} alt="Paradigma Seeds" className="hidden h-9 w-auto md:block" />
          <img src={IMAGES.logoSymbol} alt="Paradigma Seeds" className="h-9 w-auto md:hidden" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === id ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="btn-primary hidden !py-2.5 md:inline-flex">
          Contactanos
          <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="rounded-full p-2 text-white md:hidden"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <LuMenu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex h-[100dvh] flex-col bg-ink/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <img src={IMAGES.logoSymbol} alt="" className="h-9 w-auto" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full p-2 text-white"
            aria-label="Cerrar menú"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <LuX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
          {NAV_LINKS.map(({ id, label }, i) => (
            <li
              key={id}
              className={`transition-all duration-500 ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${100 + i * 60}ms` : "0ms" }}
            >
              <a
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
                className="block py-3 text-3xl font-semibold text-white transition hover:text-customYellow"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-8">
          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? 0 : -1}
            className="btn-primary w-full"
          >
            Contactanos
          </a>
        </div>
      </div>
    </header>
  );
}
