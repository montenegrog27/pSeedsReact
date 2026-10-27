import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuCheck } from "react-icons/lu";
import { IMAGES } from "../config";
import Reveal from "./Reveal";

const highlights = [
  "Más de 15 años de experiencia en el cultivo del cannabis",
  "Investigación, desarrollo y fitomejoramiento genético",
  "Registro de diversas variedades ante INASE",
  "Acompañamiento en todo el proceso de cultivo",
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('${IMAGES.nosotrosBg}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/80 to-ink"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 mx-auto w-full min-w-0 max-w-md lg:order-1">
          <div
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-customYellow/20 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <div className="card relative overflow-hidden p-3">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              loop
              spaceBetween={12}
              className="swiper-brand rounded-[1.25rem]"
            >
              {IMAGES.carousel.map(({ src, alt }) => (
                <SwiperSlide key={src}>
                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-white/[0.04] to-transparent">
                    <img src={src} alt={alt} loading="lazy" className="h-full w-full object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-customYellow">
              Nosotros
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Un banco de semillas nacido en Corrientes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-400">
              Somos un banco de semillas de cannabis de Corrientes,{" "}
              <strong className="font-semibold text-white">
                con más de 15 años de experiencia en el cultivo del cannabis.
              </strong>{" "}
              Nos dedicamos a la investigación, desarrollo, fitomejoramiento genético y registro de
              diversas variedades de cannabis.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 80} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-customYellow/15 text-customYellow">
                  <LuCheck className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-neutral-300">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
