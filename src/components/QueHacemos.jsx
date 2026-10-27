import { LuDna, LuFlaskConical, LuFileCheck, LuHeartHandshake } from "react-icons/lu";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: LuDna,
    title: "Fitomejoramiento genético",
    text: "Seleccionamos y cruzamos genéticas para desarrollar nuevas variedades de cannabis.",
  },
  {
    icon: LuFlaskConical,
    title: "Investigación y desarrollo",
    text: "Estudiamos cada variedad en todas sus etapas para comprender su comportamiento y potencial.",
  },
  {
    icon: LuFileCheck,
    title: "Inscripción de variedades",
    text: "Registrados en INASE como Criadero Categoría A, inscribimos nuevas variedades con respaldo oficial.",
  },
  {
    icon: LuHeartHandshake,
    title: "Asesoramiento profesional",
    text: "Acompañamos su proyecto desde la elección de la genética hasta el consumo responsable.",
  },
];

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Ciencia aplicada a cada semilla"
          description="Fitomejoramiento, investigación e inscripción de nuevas variedades, con la experiencia de más de 15 años de trabajo."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="card group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-customYellow/40 hover:bg-white/[0.05]"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-customYellow/0 blur-2xl transition duration-500 group-hover:bg-customYellow/20"
                aria-hidden="true"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-customYellow/20 bg-customYellow/10 text-customYellow">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
