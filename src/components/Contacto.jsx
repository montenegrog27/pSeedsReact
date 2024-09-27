import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-customBackGround text-white py-16 px-5 md:px-0"
    >
      <div className="text-center mb-12 flex-col flex justify-center items-center gap-10">
        <h2 className="text-white text-4xl font-bold">Contacto</h2>
        <p className="font-normal text-white">
          Comuníquese con nosotros por cualquier duda o consulta
        </p>
      </div>

      <div className="container mx-auto flex justify-center mb-5">
        <div className="flex flex-col justify-center items-center w-[90%] md:w-[40%]">
          <div
            className="border border-gray-150 bg-transparent text-gray-100 rounded-[45px] py-6 w-full flex flex-col items-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390895/images/Frame49_stujar.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mb-6 rounded-full bg-yellow-100 flex justify-start items-center px-2 py-2">
              <FaWhatsapp className="text-black w-[30px] h-[30px]" />
            </div>
            <p className="text-lg font-semibold mb-4">3795389253</p>
            <div id="linea" className="bg-gray-100 h-0.5 w-full mb-4"></div>
            <a
              href="https://wa.me/3795389253"
              className="bg-customYellow text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mb-12 flex-col flex justify-center items-center gap-10">
        <p className="font-normal text-white">
          O deje su mensaje y lo contactaremos a la brevedad
        </p>

        <form className="bg-transparent rounded-3xl w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="border bg-transparent border-customYellow rounded w-full p-2 mb-4 placeholder-white"
              required
            />
            <input
              type="tel"
              placeholder="Celular"
              className="border bg-transparent border-customYellow rounded w-full p-2 placeholder-white"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <textarea
              placeholder="Escribir su mensaje"
              className="border bg-transparent border-customYellow rounded w-full p-2 h-full placeholder-white"
              rows="4"
              required
            ></textarea>
            <div className="flex justify-end items-center mr-10">
              <button
                type="submit"
                className="bg-customYellow text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
