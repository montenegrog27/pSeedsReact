import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { WHATSAPP_DISPLAY, whatsappUrl } from "../config";

// Credenciales de EmailJS (la public key es pública por diseño).
// Se pueden sobrescribir con variables de entorno VITE_EMAILJS_* (ver .env.example).
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nexvm8q";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_5gskna8";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "AkgJrl-PPGV15mys2";

const inputClass =
  "w-full rounded-lg border border-customYellow/60 bg-white/5 p-3 text-white placeholder-gray-400 outline-none transition focus:border-customYellow focus:ring-2 focus:ring-customYellow/40 disabled:opacity-60";

export default function Contacto() {
  const form = useRef();
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // Honeypot anti-spam: los humanos no ven este campo, los bots lo completan.
    if (form.current.elements.website.value) {
      setStatus("success");
      form.current.reset();
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
          // Evita envíos repetidos desde el mismo navegador en menos de 30 s.
          limitRate: { id: "contacto", throttle: 30000 },
        }
      );
      setStatus("success");
      form.current.reset(); // Solo se limpia si el envío salió bien
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section
      id="contacto"
      className="bg-customBackGround text-white py-16 px-5 md:px-0"
    >
      <div className="text-center mb-12 flex-col flex justify-center items-center gap-6">
        <h2 className="text-white text-4xl font-bold">Contacto</h2>
        <p className="font-normal text-gray-200">
          Comuníquese con nosotros por cualquier duda o consulta
        </p>
      </div>

      <div className="container mx-auto flex justify-center mb-12">
        <div className="flex flex-col justify-center items-center w-full max-w-md">
          <div
            className="border border-gray-500 text-gray-100 rounded-[45px] py-6 w-full flex flex-col items-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dsbrnqc5z/image/upload/v1727390895/images/Frame49_stujar.jpg')",
            }}
          >
            <div className="mb-6 rounded-full bg-yellow-100 p-2">
              <FaWhatsapp className="text-black w-[30px] h-[30px]" aria-hidden="true" />
            </div>
            <p className="text-lg font-semibold mb-4">{WHATSAPP_DISPLAY}</p>
            <div className="bg-gray-100 h-0.5 w-full mb-4"></div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-customYellow text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-200"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col flex justify-center items-center gap-6">
        <p className="font-normal text-gray-200 text-center">
          O deje su mensaje y lo contactaremos a la brevedad
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-6"
        >
          <div className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="user_name">Nombre y Apellido</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              autoComplete="name"
              placeholder="Nombre y Apellido"
              className={inputClass}
              maxLength={100}
              disabled={sending}
              required
            />
            <label className="sr-only" htmlFor="user_email">Email</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              autoComplete="email"
              placeholder="Email"
              className={inputClass}
              maxLength={120}
              disabled={sending}
              required
            />
            <label className="sr-only" htmlFor="user_phone">Celular</label>
            <input
              id="user_phone"
              type="tel"
              name="user_phone"
              autoComplete="tel"
              placeholder="Celular"
              pattern="[0-9+()\s-]{6,20}"
              title="Ingrese un número de teléfono válido"
              className={inputClass}
              disabled={sending}
              required
            />
            {/* Honeypot: oculto para personas */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="user_message">Mensaje</label>
            <textarea
              id="user_message"
              name="user_message"
              placeholder="Escribir su mensaje"
              className={`${inputClass} h-full min-h-[140px] resize-none`}
              rows="5"
              maxLength={2000}
              disabled={sending}
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
            <div role="status" aria-live="polite" className="text-sm min-h-[1.25rem]">
              {status === "success" && (
                <p className="text-green-400">
                  ¡Mensaje enviado con éxito! Le responderemos a la brevedad.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400">
                  No pudimos enviar el mensaje. Intente nuevamente en unos
                  segundos o escríbanos por{" "}
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="self-end inline-flex items-center gap-2 bg-customYellow text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 transition duration-200 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending && (
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"
                  aria-hidden="true"
                />
              )}
              {sending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
