import { useEffect, useState } from "react";

const links = [
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-black"
      }`}
    >
      <nav className="container mx-auto py-3 flex justify-between items-center px-5 md:px-20">
        <a href="#" className="block" aria-label="Paradigma Seeds - Inicio">
          {/* Logotipo para desktop */}
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390894/images/Logo_lkdzsg.png"
            alt="Paradigma Seeds"
            className="h-12 w-auto hidden md:block"
          />
          {/* Logotipo para mobile */}
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727392658/images/PS_simbolo_blanco_Preferente_o7ilqx.png"
            alt="Paradigma Seeds"
            className="h-10 w-auto block md:hidden"
          />
        </a>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-customYellow rounded"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menú móvil */}
        <div
          id="mobile-menu"
          className={`fixed inset-0 h-screen bg-black transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-30`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-4xl leading-none p-2"
              aria-label="Cerrar menú"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-start mt-14 ml-10 space-y-6">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="text-white text-2xl font-bold hover:text-customYellow transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-gray-100 hover:text-customYellow font-bold transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
