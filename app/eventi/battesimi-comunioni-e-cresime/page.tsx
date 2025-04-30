
"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* placeholder immagini gallery */
const gallery = [
  "/img/party-1.jpg",
  "/img/party-2.jpg",
  "/img/party-3.jpg",
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

      {/* griglia gallery */}
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
                alt={`Gallery ${i + 1}`}
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

        {/* frecce decorative desktop */}
        <button
          aria-label="scorri indietro"
          className="
            hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2
            h-12 w-12 items-center justify-center
            rounded-full bg-[#c2953e] text-[#f1ede0]
            hover:bg-[#d0a950] transition
          "
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="scorri avanti"
          className="
            hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2
            h-12 w-12 items-center justify-center
            rounded-full bg-[#c2953e] text-[#f1ede0]
            hover:bg-[#d0a950] transition
          "
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
