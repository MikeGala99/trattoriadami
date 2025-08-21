"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const gallery = [
  "/images/cenaaziendale.webp",
  "/images/cenaaziendale2.webp",
  "/images/dami3.webp",
  "/images/cameriere.webp",
  "/images/cene.webp",
  "/images/cene1.webp",
  "/images/cene2.webp",
  "/images/cene3.webp",
  "/images/cene4.webp",
];

export default function BusinessDinnersSection() {
  return (
    <section className="bg-[#f1ede0]">
      {/* riquadro grigio-marrone semi-trasparente */}
      <div className="relative bg-[#6e5c50]/90 text-[#f1ede0] px-6 py-16 lg:py-20">
        <div className="container mx-auto max-w-screen-md space-y-8 text-center">
          <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-2xl sm:text-3xl lg:text-4xl uppercase">
            CENE AZIENDALI
          </h2>

          <p className="[font-family:'Lora',Helvetica] text-sm sm:text-base leading-relaxed">
            Siete un team affiatato o un gruppo appena formato? In ogni caso,
            qui troverete l’atmosfera giusta per rilassarvi, conoscervi meglio e
            gustare una cena che mette d’accordo tutti. Proponiamo menù su
            misura, pizze cotte nel forno a legna e piatti della tradizione
            tosco-emiliana. Ampi spazi e possibilità di riservare sale vi
            permettono di vivere la serata con riservatezza. E se la serata si
            fa lunga… abbiamo anche camere comode per il pernottamento.
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
          className="[--swiper-navigation-color:#fff] [--swiper-pagination-color:#fff]"
        >
          {gallery.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow">
                <img
                  src={src}
                  alt={`Foto cena aziendale ${i + 1}`}
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
