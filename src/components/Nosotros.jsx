import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Ajuste en la importación
import "swiper/css";
import "swiper/css/navigation"; // Importar estilos de los botones de navegación

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-black text-white py-5 md:py-16 bg-cover bg-center px-6 md:px-0"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390895/images/backgroundNosotros_whfzhn.png')",
      }}
    >
      {/* Título centrado */}
      <div className="text-center mb-8 flex flex-col justify-center items-center">
        <div className="w-[65%]">
          <h1 className="text-customYellow text-2xl md:text-4xl font-bold">
            Registrados en INASE Categoría A Criaderos
          </h1>
          <p className="text-lg md:text-xl mt-4 font-normal">
            Fitomejoramiento, investigación e inscripción de nuevas variedades.
          </p>
          <div className="flex justify-center items-center mt-2 md:mt-5">
            <div className="h-[1px] md:h-[2px] w-[100%] md:w-[70%] bg-gray-400"></div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold my-10">Nosotros</h2>
        </div>
      </div>

      {/* Contenedor del carrusel y el texto */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Contenedor del carrusel */}
        <div className="w-full md:w-1/2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            navigation={true} // Habilitar botones de navegación en escritorio
            modules={[Navigation]}
            className="w-full h-[400px] md:h-[500px]" // Ajuste de tamaño
          >
            <SwiperSlide>
              <img
                src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390896/images/PSsinfondo3_wsim2y.png"
                alt="Descripción de la imagen"
                className="rounded-lg w-full h-auto object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727395792/images/carrousel2_usirp3.png"
                alt="Imagen 2"
                className="rounded-lg w-full h-auto object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727395815/images/carrousel1_kyosda.png"
                alt="Imagen 3"
                className="rounded-lg w-full h-auto object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
          <div className="md:w-[70%] flex-col space-y-10 justify-center items-center md:text-lg">
            <p>
              Somos un banco de semillas de cannabis de Corrientes,{" "}
              <strong>
                con más de 15 años de experiencia en el cultivo del cannabis.
              </strong>
            </p>
            <p>
              Nos dedicamos a la investigación, desarrollo, fitomejoramiento
              genético y registro de diversas variedades de cannabis.
            </p>
            <p>
              Brindamos servicios de asesoramiento en todo el proceso de
              cultivo, desde la elección de la genética hasta los cuidados en
              cada etapa: germinación, vegetativo, floración, almacenamiento y
              consumo responsable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
