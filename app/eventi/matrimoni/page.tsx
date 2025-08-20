"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const gallery = [
  "/images/matrimonio1.webp",
  "/images/matrimonio2.webp",
  "/images/matrimonio3.webp",
  "/images/matrimoni4.webp",
  "/images/trattoria.webp",
];

export default function WeddingSection() {
  return (
    <section className="bg-[#f1ede0]">
      {/* riquadro rosso scuro */}
      <div className="bg-[#650602] text-[#f1ede0] px-6 py-16 lg:py-20">
        <div className="container mx-auto max-w-screen-md space-y-8 text-center">
          <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-2xl sm:text-3xl lg:text-4xl uppercase">
            MATRIMONI
          </h2>

          <p className="[font-family:'Lora',Helvetica] text-sm sm:text-base leading-relaxed">
            Il vostro giorno speciale merita un luogo che sappia raccontare
            emozioni: la Trattoria&nbsp;Damì accoglie gli sposi con spazi verdi,
            sale intime e una cucina fedele alla tradizione tosco-emiliana.
            Dall’aperitivo sotto il portico alla cena illuminata da luci
            soffuse, personalizziamo ogni dettaglio: menù su misura, vini del
            territorio, musica live o DJ set, torta nuziale e decorazioni
            floreali. Lasciate a noi la regia della festa, voi pensate solo a
            dire “sì”.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      </div>

      {/* titolo gallery */}
      <div className="py-16 text-center">
        <h3 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-2xl">
          FOTOGALLERY
        </h3>
      </div>

      {/* swiper gallery */}
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
          className="[--swiper-navigation-color:#650602] [--swiper-pagination-color:#650602] relative"
        >
          {gallery.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow">
                <img
                  src={src}
                  alt={`Wedding gallery ${i + 1}`}
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
