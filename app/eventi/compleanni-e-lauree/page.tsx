"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const gallery = [
  "/images/compleanni.webp",
  "/images/compleanni2.webp",
  "/images/compleanni3.webp",
  "/images/compleanni4.webp",
  "/images/compleanni5.webp",
  "/images/compleanni1.webp",
];

export default function PartySection() {
  return (
    <section className="bg-[#f1ede0]">
      {/* riquadro rosso */}
      <div className="bg-[#650602] text-[#f1ede0] px-6 py-16 lg:py-20 text-center">
        <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-2xl sm:text-3xl lg:text-4xl uppercase">
          COMPLEANNI, LAUREE, EVENTI
        </h2>
       <p className="[font-family:'Lora',Helvetica] text-sm sm:text-base leading-relaxed">
            Compleanni, feste di laurea o semplicemente voglia di stare insieme:
    ogni scusa è buona per fare festa da noi. Potete scegliere tra il
    nostro giardino estivo e le sale interne, allestite secondo i vostri
    desideri. Offriamo menù flessibili, pizza a volontà, vini locali e
    tutta la gioia che si respira in una vera trattoria di confine.
    Musica, decorazioni, torta: pensiamo a tutto insieme a voi. Voi
    portate la voglia di festeggiare, noi ci mettiamo il resto.
          </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/menu"
            className="inline-block rounded bg-[#d9d9d9] text-[#6e5c50] px-8 py-3 text-sm font-semibold hover:bg-[#e5e5e5] transition"
          >
            VEDI MENU
          </Link>
          <Link
            href="tel:+39054297863"
            className="inline-block rounded bg-[#d9d9d9] text-[#6e5c50] px-8 py-3 text-sm font-semibold hover:bg-[#e5e5e5] transition"
          >
            PRENOTA
          </Link>
        </div>
      </div>

      {/* titolo gallery */}
      <div className="py-16 text-center">
        <h3 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-2xl">
          FOTOGALLERY
        </h3>
      </div>

      {/* carosello swiper */}
      <div className="container mx-auto max-w-screen-xl px-6 pb-16">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="[--swiper-navigation-color:#fff] [--swiper-pagination-color:#fff]"
        >
          {gallery.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
