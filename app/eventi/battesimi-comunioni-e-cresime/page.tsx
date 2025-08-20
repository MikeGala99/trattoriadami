"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* immagini gallery */
const gallery = [
  "/images/battesimo.webp",
  "/images/tagliere.webp",
  "/images/battesimo1.webp",
  "/images/giochibambini.webp", // puoi aggiungere quante immagini vuoi
  "/images/giochibambini1.webp",
  "/images/giochibambini2.webp",
  "/images/trattoria.webp",
];

export default function BaptismsSection() {
  return (
    <section className="bg-[#f1ede0]">
      {/* riquadro ocra */}
      <div className="bg-[#c2953e] text-[#f1ede0] px-6 py-16 lg:py-20">
        <div className="container mx-auto max-w-screen-md space-y-8 text-center">
          <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-2xl sm:text-3xl lg:text-4xl uppercase">
            BATTESIMI, COMUNIONI<br />E CRESIME
          </h2>

          <p className="[font-family:'Lora',Helvetica] text-sm sm:text-base leading-relaxed">
            Battesimi, comunioni e cresime trovano qui il calore che serve per un
            giorno sereno, curato e felice. La nostra trattoria è pensata per
            accogliere le famiglie: con spazi ampi, un grande giardino estivo e
            un parco giochi che fa la gioia dei più piccoli. Il menù è
            personalizzabile, sempre fedele alla tradizione, per far contenti
            tutti, dai nonni ai bambini. Ogni dettaglio è pensato per farvi
            sentire a casa, senza rinunciare a un tocco speciale.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/menu"
              className="
                inline-block rounded
                bg-[#d9d9d9] text-[#6e5c50]
                px-8 py-3 text-sm font-semibold
                hover:bg-[#e5e5e5] transition
              "
            >
              VEDI MENU
            </Link>
            <Link
              href="tel:+39054297863"
              className="
                inline-block rounded
                bg-[#d9d9d9] text-[#6e5c50]
                px-8 py-3 text-sm font-semibold
                hover:bg-[#e5e5e5] transition
              "
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
