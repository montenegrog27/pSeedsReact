import React from "react";
import { FaFacebook, FaInstagram,FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 p-5 md:p-20">
      <div className="container mx-auto flex flex-row md:flex-row items-center justify-around md:justify-between">
        {/* Logo en móvil y escritorio */}
        <div id="mobile-divIzquierda" className="flex items-center justify-center md:justify-start mb-4 md:mb-0 ">
          {/* Logo para móvil */}
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727392658/images/PS_simbolo_blanco_Preferente_o7ilqx.png"
            alt="Logotipo de Paradigma Seeds móvil"
            className="h-10 md:hidden" // Solo visible en móvil
          />
          {/* Logo para escritorio */}
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390894/images/Logo_lkdzsg.png"
            alt="Logotipo de Paradigma Seeds escritorio"
            className="hidden md:block h-14" // Solo visible en escritorio
          />
        </div>

        {/* Redes sociales */}
        <div id="mobile-divDerecha ">
        <div className="flex space-x-4 mb-4 md:mb-0 md:order-2 justify-end ">
        <a
            href="https://ar.linkedin.com/in/paradigmaseeds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin className="h-6 w-6" />

          </a>
          <a
            href="https://www.facebook.com/share/Cmwm3uQzcRhkHrFT/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/paradigma.seeds/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaInstagram className="h-6 w-6" />
          </a>

        </div>

        {/* Links en móvil y escritorio */}
        <ul className="flex flex-row text-sm md:text-md md:flex-col items-center text-center justify-rounded gap-1   md:space-y-0 md:space-x-6 md:order-1">
          <li>
            <a href="#nosotros" className="hover:text-blue-500 font-bold ">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-blue-500 font-bold ">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-blue-500 font-bold ">
              Contacto
            </a>
          </li>
        </ul>
        </div>
      </div>

      {/* Copyright en la parte inferior */}
      <div className="text-center mt-4">
        <p className="text-gray-400 text-xs md:text-md">
          © 2024 Paradigma Seeds. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
