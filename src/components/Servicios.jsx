import { LuArrowRight, LuDna, LuSprout, LuLeaf, LuFlower2, LuArchive, LuShieldCheck } from "react-icons/lu";
import { IMAGES, whatsappUrl } from "../config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  { icon: LuDna, title: "Elección de la genética", text: "La variedad adecuada para su proyecto." },
  { icon: LuSprout, title: "Germinación", text: "Un comienzo sano y uniforme." },
  { icon: LuLeaf, title: "Vegetativo", text: "Desarrollo fuerte de la planta." },
  { icon: LuFlower2, title: "Floración", text: "Máximo potencial de cada genética." },
  { icon: LuArchive, title: "Almacenamiento", text: "Conservación correcta de la cosecha." },
  { icon: LuShieldCheck, title: "Consumo responsable", text: "Información clara y segura." },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Asesoramiento en cada etapa del cultivo"
          description="Desarrolle de la manera más eficiente su propio proyecto. El asesoramiento profesional es la mejor inversión."
        />

        {/* Tarjeta principal */}
        <Reveal className="card relative mt-16 grid overflow-hidden lg:grid-cols-5">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url('${IMAGES.texture}')` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40"
            aria-hidden="true"
          />

          <div className="relative p-8 md:p-12 lg:col-span-3">
            <span className="inline-flex rounded-full border border-customYellow/30 bg-customYellow/10 px-3 py-1 text-xs font-semibold text-customYellow">
              Servicio destacado
            </span>
            <h3 className="mt-5 text-2xl font-bold text-white md:text-3xl">Asesoramiento profesional</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-neutral-300">
              Ofrecemos nuestra experiencia y conocimientos para que pueda tomar las mejores
              decisiones sobre todo el proceso de emprender un proyecto de cannabis: desde la
              elección de la genética hasta los cuidados en cada etapa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn-primary">
                Solicitar asesoramiento
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappUrl("Hola, quiero consultar por el servicio de asesoramiento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          <div className="relative hidden items-end justify-center lg:col-span-2 lg:flex">
            <img
              src={IMAGES.servicios}
              alt="Asesoramiento en cultivo de cannabis"
              loading="lazy"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>
        </Reveal>

        {/* Proceso */}
        <div className="mt-20">
          <Reveal as="h3" className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Lo acompañamos en todo el proceso
          </Reveal>
          <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            <div
              className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-gradient-to-r from-transparent via-customYellow/40 to-transparent lg:block"
              aria-hidden="true"
            />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 80}
                className="card relative flex items-start gap-4 p-5 lg:flex-col lg:items-center lg:border-0 lg:bg-transparent lg:p-3 lg:text-center lg:backdrop-blur-none"
              >
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-customYellow/30 bg-ink text-customYellow shadow-[0_0_0_6px_#0a0a0a]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-customYellow text-[10px] font-bold text-black">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white lg:mt-4">{title}</h4>
                  <p className="mt-1 text-sm text-neutral-400">{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
