import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Efecto de deslizamiento
    }
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic
  };

  return (
    <header className="shadow-md">
      <nav className="container mx-auto pt-4 flex justify-between items-center px-5 md:px-20">
        <div className="text-2xl font-bold">
          {/* Logotipo para desktop */}
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390894/images/Logo_lkdzsg.png"
            alt="Logotipo de Paradigma Seeds Desktop"
            className="w-[60%] h-[60%] hidden md:block"
          />
          {/* Logotipo para mobile */}
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727392658/images/PS_simbolo_blanco_Preferente_o7ilqx.png"
            alt="Logotipo de Paradigma Seeds Mobile"
            className="w-[75%] h-[75%] block md:hidden"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed inset-0 bg-black transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-20`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-white text-4xl">
              &times; {/* X para cerrar */}
            </button>
          </div>
          <ul className="flex flex-col items-start justify-start mt-14 ml-10 h-full space-y-4">
            <li>
              <button
                className="text-white text-lg font-bold hover:text-blue-500"
                onClick={() => scrollToSection("nosotros")}
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                className="text-white text-lg font-bold hover:text-blue-500"
                onClick={() => scrollToSection("servicios")}
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                className="text-white text-lg font-bold hover:text-blue-500"
                onClick={() => scrollToSection("contacto")}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#nosotros" className="text-gray-100 hover:text-gray-500 font-bold">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" className="text-gray-100 hover:text-gray-500 font-bold">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-gray-100 hover:text-gray-500 font-bold">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

 
 
 
 
