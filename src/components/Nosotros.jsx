
export default function Nosotros  ()  {
    return (
      <section id="nosotros" className="bg-black text-white py-5 md:py-16 bg-cover bg-center px-6 md:px-0" style={{ backgroundImage: "url('https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390895/images/backgroundNosotros_whfzhn.png')" }}>
        {/* Título centrado */}
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <div className="w-[65%]">
            <h1 className="text-customYellow text-2xl md:text-4xl font-bold">Registrados en INASE Categoría A Criaderos</h1>
            <p className="text-lg md:text-xl mt-4 font-normal">Fitomejoramiento, investigación e inscripción de nuevas variedades.</p>
            <div className="flex justify-center items-center mt-2 md:mt-5">
              <div className="h-[1px] md:h-[2px] w-[100%] md:w-[70%] bg-gray-400"></div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-white text-4xl font-bold my-10">Nosotros</h2>
          </div>
        </div>
  
        {/* Contenedor con dos columnas (imagen y texto) */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-20 md:gap-8">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390896/images/PSsinfondo3_wsim2y.png" alt="Descripción de la imagen" className="rounded-lg w-[95%] md:w-[60%] h-auto object-contain md:object-cover" />
          </div>
  
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
          <div className="md:w-[70%] flex-col space-y-10 justify-center items-center md:text-lg">
            <p>Somos un banco de semillas de cannabis de Corrientes, <strong>con más de 15 años de experiencia en el cultivo del cannabis.</strong></p>
            <p>Nos dedicamos a la investigación, desarrollo, fitomejoramiento genético y registro de diversas variedades de cannabis.</p>
            <p>Brindamos servicios de asesoramiento en todo el proceso de cultivo, desde la elección de la genética hasta los cuidados en cada etapa: germinación, vegetativo, floración, almacenamiento y consumo responsable.</p>
          </div>
          </div>
        </div>
      </section>
    );
  };