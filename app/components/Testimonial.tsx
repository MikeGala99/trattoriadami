/* ────────────────────────────────────────────────
   app/components/Testimonials.tsx – Trattoria Damì
─────────────────────────────────────────────────*/
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ↘︎ immagini/recensioni da far scorrere */
const reviews = [
  {
    src: "/img/review-01.png", // carica il PNG della slide che hai mostrato
    alt: "Recensione Google • Marco Barbieri",
  },
  {
    src: "/img/review-02.png",
    alt: "Recensione Google • Laura Rossi",
  },
  {
    src: "/img/review-03.png",
    alt: "Recensione Google • Gianluca Verdi",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = reviews.length;

  const prev = () => setIdx((idx - 1 + total) % total);
  const next = () => setIdx((idx + 1) % total);

  return (
    <section className="bg-[#f1ede0] py-16 md:py-24">
      {/* Titolo */}
      <h2 className="mb-14 text-center font-serif text-[#650602] text-4xl md:text-5xl tracking-wide">
        DICONO DI NOI
      </h2>

      {/* Slider centrale */}
      <div className="relative flex items-center justify-center">
        {/* Freccia sinistra */}
        <button
          onClick={prev}
          aria-label="Recensione precedente"
          className="
            hidden sm:flex
            items-center justify-center
            rounded-full border-2 border-[#650602] text-[#650602]
            w-24 h-24 md:w-28 md:h-28
            hover:bg-[#650602]/10 transition
          "
        >
          <ArrowLeft className="w-10 h-10 stroke-[1.5]" />
        </button>

        {/* Immagine recensione */}
        <div className="mx-8 shadow-lg rounded-lg overflow-hidden max-w-lg w-[90vw]">
          <Image
            src={reviews[idx].src}
            alt={reviews[idx].alt}
            width={800}
            height={600}
            priority
          />
        </div>

        {/* Freccia destra */}
        <button
          onClick={next}
          aria-label="Recensione successiva"
          className="
            hidden sm:flex
            items-center justify-center
            rounded-full border-2 border-[#650602] text-[#650602]
            w-24 h-24 md:w-28 md:h-28
            hover:bg-[#650602]/10 transition
          "
        >
          <ArrowRight className="w-10 h-10 stroke-[1.5]" />
        </button>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <Link
          href="#prenota"
          className="
            inline-block rounded-full
            bg-[#650602] px-14 py-6
            font-serif text-3xl text-[#f1ede0]
            hover:bg-[#7a0a05] transition
          "
        >
          PRENOTA OGGI
        </Link>
      </div>
    </section>
  );
}
