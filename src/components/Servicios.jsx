import React from "react";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-black text-white py-20 px-5 md:px-0"
    >
      {/* Título centrado */}
      <div className="text-center mb-10">
        <h2 className="text-white text-4xl font-bold">
          Nuestros servicios
        </h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-5">
        {/* Contenedor de la card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div
            className="relative bg-cover bg-center rounded-[8%] shadow-lg p-5 border border-customYellow h-[500px] w-[350px]"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390895/images/Frame49_stujar.jpg)`,
              backgroundSize: "cover",
            }}
          >
            <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl font-bold mb-5">Asesoramiento</h3>
              <p className="text-lg leading-relaxed">
                Desarrolle de la manera más eficiente su propio proyecto. El
                asesoramiento profesional es la mejor inversión. Ofrecemos
                nuestra experiencia y conocimientos para que pueda tomar las
                mejores decisiones sobre todo el proceso de emprender un
                proyecto de cannabis.
              </p>
            </div>
          </div>
        </div>

        {/* Imagen a la izquierda */}
        <div className="hidden md:block w-full md:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727404146/images/imagen44_podfgh.png"
            alt="Descripción de la imagen"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
