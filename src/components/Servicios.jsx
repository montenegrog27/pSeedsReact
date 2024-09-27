import React from "react";

// Datos de servicios
const servicios = [
  {
    titulo: "Asesoramiento",
    descripcion:
      "Desarrolle de la manera más eficiente su propio proyecto. El asesoramiento profesional es la mejor inversión. Ofrecemos nuestra experiencia y conocimientos para que pueda tomar las mejores decisiones sobre todo el proceso de emprender un proyecto de cannabis.",
    imagen:
      "https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390895/images/Frame4.png",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-black text-white md:h-screen py-20 md:py-10 px-5 md:px-0 md:py-20"
    >
      {/* Título centrado */}
      <div className="text-center">
        <h2 className="text-white text-4xl font-bold mb-10">
          Nuestros servicios
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:justify-center gap-20 md:gap-10 px-10 ">
        {/* Contenedor de las cards */}
        <div className="container mx-auto flex flex-col gap-6 px-15 h-[500px] w-full md:w-[50%] justify-center items-center">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center rounded-[10%] shadow-lg pt-5 px-9 border border-customYellow pb-10 md:pb-0 h-full md:w-[50%]"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390895/images/Frame49_stujar.jpg)`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-2xl font-bold mb-5">
                  {servicio.titulo}
                </h3>
                <p className="text-lg md:text-base leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Imagen a la izquierda */}
        <div className="hidden md:block w-full flex justify-end items-center flex-1  ">
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727404146/images/imagen44_podfgh.png"
            alt="Descripción de la imagen"
            className="rounded-lg  "
          />
        </div>
      </div>
    </section>
  );
}
