import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  LuArrowUpRight,
  LuMapPin,
  LuInstagram,
  LuSend,
  LuLoader2,
  LuCheckCircle2,
  LuAlertCircle,
} from "react-icons/lu";
import { SOCIAL, WHATSAPP_DISPLAY, whatsappUrl } from "../config";
import Reveal from "./Reveal";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-neutral-500 outline-none transition focus:border-customYellow/70 focus:bg-white/[0.06] focus:ring-4 focus:ring-customYellow/10 disabled:opacity-60";
const labelClass = "mb-2 block text-sm font-medium text-neutral-300";

const channels = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: whatsappUrl(),
    external: true,
  },
  {
    icon: LuInstagram,
    label: "Instagram",
    value: "@paradigma.seeds",
    href: SOCIAL.instagram,
    external: true,
  },
  { icon: LuMapPin, label: "Ubicación", value: "Corrientes, Argentina" },
];

export default function Contacto() {
  const form = useRef();
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const fields = Object.fromEntries(new FormData(form.current));
    setStatus("sending");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.user_name,
          email: fields.user_email,
          phone: fields.user_phone,
          message: fields.user_message,
          website: fields.website, // honeypot anti-spam
        }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        setErrorMsg(result.error || "");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.current.reset(); // Solo se limpia si el envío salió bien
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrorMsg("");
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section id="contacto" className="relative py-20 md:py-28">
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-customYellow/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
        {/* Columna de información */}
        <Reveal className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-customYellow">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Hablemos de su proyecto
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            Comuníquese con nosotros por cualquier duda o consulta. Le responderemos a la brevedad.
          </p>

          <ul className="mt-10 space-y-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-customYellow/10 text-customYellow">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-neutral-500">{label}</span>
                    <span className="block font-semibold text-white">{value}</span>
                  </span>
                  {href && (
                    <LuArrowUpRight
                      className="h-5 w-5 text-neutral-500 transition group-hover:text-customYellow"
                      aria-hidden="true"
                    />
                  )}
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="card group flex items-center gap-4 p-4 transition hover:border-customYellow/40 hover:bg-white/[0.05]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4 p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Formulario */}
        <Reveal delay={120} className="lg:col-span-3">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="card relative p-6 shadow-2xl shadow-black/40 md:p-10"
          >
            <h3 className="text-xl font-semibold text-white">Envíenos un mensaje</h3>
            <p className="mt-1 text-sm text-neutral-500">Todos los campos son obligatorios.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="user_name">Nombre y apellido</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  autoComplete="name"
                  placeholder="Juan Pérez"
                  className={inputClass}
                  maxLength={100}
                  disabled={sending}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="user_email">Email</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  autoComplete="email"
                  placeholder="nombre@correo.com"
                  className={inputClass}
                  maxLength={120}
                  disabled={sending}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="user_phone">Celular</label>
                <input
                  id="user_phone"
                  type="tel"
                  name="user_phone"
                  autoComplete="tel"
                  placeholder="379 123 4567"
                  pattern="[0-9+()\s-]{6,20}"
                  title="Ingrese un número de teléfono válido"
                  className={inputClass}
                  disabled={sending}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="user_message">Mensaje</label>
                <textarea
                  id="user_message"
                  name="user_message"
                  placeholder="Cuéntenos en qué podemos ayudarle"
                  className={`${inputClass} min-h-[140px] resize-y`}
                  rows="5"
                  maxLength={2000}
                  disabled={sending}
                  required
                ></textarea>
              </div>
              {/* Honeypot anti-spam: oculto para personas, los bots lo completan */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
            </div>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                  <LuCheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>¡Mensaje enviado con éxito! Le responderemos a la brevedad.</p>
                </div>
              )}
              {status === "error" && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                  <LuAlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>
                    {errorMsg ? `${errorMsg} ` : "No pudimos enviar el mensaje. "}
                    Intente nuevamente o escríbanos por{" "}
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            <button type="submit" disabled={sending} className="btn-primary mt-8 w-full !py-4 text-base">
              {sending ? (
                <>
                  <LuLoader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <LuSend className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
