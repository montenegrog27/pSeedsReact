import { LuArrowRight, LuBadgeCheck } from "react-icons/lu";
import { IMAGES } from "../config";

const stats = [
  { value: "+15", label: "años de experiencia" },
  { value: "Cat. A", label: "Criadero INASE" },
  { value: "6", label: "etapas de cultivo acompañadas" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28 md:pt-36 lg:min-h-[100svh] lg:pt-0"
    >
      {/* Fondo: cuadrícula + resplandor de marca */}
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-customYellow/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-[-15%] -z-10 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 md:px-8 lg:min-h-[100svh] lg:grid-cols-2 lg:gap-8 lg:pb-0">
        <div className="max-w-xl">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-customYellow/30 bg-customYellow/10 px-4 py-1.5 text-xs font-medium text-customYellow">
            <LuBadgeCheck className="h-4 w-4" aria-hidden="true" />
            Registrados en INASE · Categoría A Criaderos
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Genética de cannabis{" "}
            <span className="bg-gradient-to-r from-customYellow via-[#f5dc7a] to-customYellow bg-clip-text text-transparent">
              con respaldo científico
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            Paradigma Seeds es un banco de semillas de Corrientes dedicado a la investigación,
            el fitomejoramiento y la inscripción de nuevas variedades de cannabis.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              Hablar con un especialista
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-bold text-white md:text-3xl">{value}</dd>
                <dd className="mt-1 text-xs leading-snug text-neutral-500 md:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-md lg:max-w-lg">
          <div
            className="absolute inset-[12%] rounded-full bg-customYellow/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[4%] rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[16%] rounded-full border border-dashed border-customYellow/20"
            aria-hidden="true"
          />
          <img
            src={IMAGES.hero}
            alt="Planta de cannabis de Paradigma Seeds"
            className="relative w-full animate-float object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
