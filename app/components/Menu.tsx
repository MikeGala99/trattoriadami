/* ────────────────────────────────────────────────
   app/components/MenuPreview.tsx
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import Link from "next/link";

export default function MenuPreview() {
  return (
    <section className="bg-[#650602] py-12 lg:py-16">
      <div
        className="
          container mx-auto max-w-screen-xl
          flex flex-col lg:flex-row items-center
          gap-10 lg:gap-16 px-6
        "
      >
        {/* Titolo a capo forzato */}
        <h2
          className="
            shrink-0
            [font-family:'Libre_Baskerville',Helvetica]
            text-[#f1ede0]
            text-3xl sm:text-4xl lg:text-5xl
            font-bold leading-[1.1]
            whitespace-pre-line
            text-center lg:text-left
          "
        >
          {`Il Nostro\nMenu`}
        </h2>

        {/* Descrizione */}
        <p
          className="
            flex-1
            [font-family:'Lora',Helvetica]
            text-[#f1ede0]/95
            text-lg sm:text-xl
            leading-relaxed
            text-center lg:text-left
            max-w-3xl
          "
        >
          Sfoglia il nostro menù con i sapori provenienti dalle colline
          tosco-emiliane, di altissima qualità e tradizione.
        </p>

        {/* CTA */}
        <Link
          href="menu"
          className="
            shrink-0
            rounded-full
            bg-[#f1ede0]
            px-12 lg:px-16 py-6
            [font-family:'Libre_Baskerville',Helvetica]
            text-[#650602]
            text-2xl lg:text-3xl
            transition hover:bg-[#e5e1d4]
            focus-visible:outline-none
          "
        >
          MENU
        </Link>
      </div>
    </section>
  );
}
