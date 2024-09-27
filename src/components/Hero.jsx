export default function Hero  ()  {
    return (
      <section className="flex items-start justify-center max-h-screen  w-full text-white px-5 md:px-20 md:py-20 ">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end gap-[5%] md:gap-[10%]  max-w-screen-2xl py-5 md:py-16">
          <div className="w-full md:w-1/2 space-y-10 pb-10 md:pb-0 md:h-[100%] ">
            <h1 className="text-[200%] md:text-[350%] sm:text-[200%] xl:text-[420%] font-semibold leading-[150%] w-[80%] md:w-[90%] tracking-[-1.1%] text-left not-italic ">
              Bienvenidos a Paradigma Seeds
            </h1>
            <p className="text-[125%] w-[60%] leading-[100%] tracking-[0%] text-left not-italic font-medium w-full md:w-auto">
              Investigación y desarrollo de Cannabis
            </p>
            <div className="flex space-x-4 mt-6 ">
              <a href="#servicios" className="border border-customYellow text-customYellow px-4 py-2 rounded font-bold hover:bg-gray-700 active:border-yellow-200">
                Ver Servicios
              </a>
              <a href="#contacto" className="bg-customYellow text-black px-4 py-2 rounded font-bold hover:opacity-90 active:bg-yellow-200 not-italic">
                Contactar
              </a>
            </div>
          </div>
          {/* Sección de imagen */}
          <div className="w-[90%] md:w-1/2 flex justify-center md:justify-end">
            <img src="https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390896/images/PSsinfondo2_j68epl.png"
             alt="Descripción de la imagen" 
             className="rounded-lg object-contain  w-[85%] h-auto" />
          </div>
        </div>
      </section>
    );
  };
  