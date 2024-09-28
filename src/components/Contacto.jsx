import React, { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from "emailjs-com";

export default function Contacto() {
  // Crear referencia para el formulario
  const form = useRef();

  // Función para enviar el formulario usando EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nexvm8q", // Reemplaza con tu ID de servicio de EmailJS
        "template_5gskna8", // Reemplaza con tu ID de plantilla
        form.current,
        "AkgJrl-PPGV15mys2"  // Reemplaza con tu ID de usuario de EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje.");
        }
      );

    e.target.reset(); // Resetea el formulario después de enviarlo
  };

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
        href="https://wa.me/+54379155389253?text=Hola,%20vengo%20de%20la%20web%20de%20Paradigma%20Seeds,%20quiero%20más%20información%20sobre..."
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

        <form
          ref={form} // Añadir la referencia al formulario
          onSubmit={sendEmail} // Manejar el evento de envío
          className="bg-transparent rounded-3xl w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-6"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="user_name" // Añadir el name para EmailJS (campo nombre)
              placeholder="Nombre y Apellido"
              className="border bg-transparent border-customYellow rounded w-full p-2 mb-4 placeholder-white"
              required
            />
            <input
              type="email"
              name="user_email" // Añadir el name para EmailJS (campo email)
              placeholder="Email"
              className="border bg-transparent border-customYellow rounded w-full p-2 mb-4 placeholder-white"
              required
            />
            <input
              type="tel"
              name="user_phone" // Añadir el name para EmailJS (campo teléfono)
              placeholder="Celular"
              className="border bg-transparent border-customYellow rounded w-full p-2 placeholder-white"
              required
            />
          </div>
          <div className="flex flex-col gap-5">
            <textarea
              name="user_message" // Añadir el name para EmailJS (campo mensaje)
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
