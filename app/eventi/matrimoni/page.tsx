
"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* placeholder foto gallery */
const gallery = [
  "/img/wedding-1.jpg",
  "/img/wedding-2.jpg",
  "/img/wedding-3.jpg",
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
              href="#menu"
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
              href="#prenota"
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

      {/* simple gallery grid */}
      <div className="relative">
        <div
          className="
            container mx-auto max-w-screen-xl px-6
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
          "
        >
          {gallery.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow"
            >
              <img
                src={src}
                alt={`Wedding gallery ${i + 1}`}
                className="h-full w-full object-cover"
              />
              <span
                className="
                  absolute inset-0 m-auto
                  flex h-12 w-12 items-center justify-center
                  rounded-full border border-white/80
                  bg-white/10 backdrop-blur-[2px]
                "
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </span>
            </div>
          ))}
        </div>

        {/* decorative arrows desktop */}
        <button
          aria-label="scorri indietro"
          className="
            hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2
            h-12 w-12 items-center justify-center
            rounded-full bg-[#650602] text-[#f1ede0]
            hover:bg-[#7a0a05] transition
          "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="scorri avanti"
          className="
            hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2
            h-12 w-12 items-center justify-center
            rounded-full bg-[#650602] text-[#f1ede0]
            hover:bg-[#7a0a05] transition
          "
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
