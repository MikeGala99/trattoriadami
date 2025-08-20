/* ────────────────────────────────────────────────
   app/eventi/page.tsx
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import Link from "next/link";

/**  ↓  aggiungi / sostituisci le immagini reali */
const events = [
  {
    title: "CENE AZIENDALI",
    img: "/images/heroimage.webp",
    text:
      "Per la vostra cena aziendale scegliete un luogo dove il lavoro incontra la buona cucina e l’accoglienza autentica. Da Damì si lavora meglio… a tavola!",
    color: "bg-[#650602]",
  },
  {
    title: "MATRIMONI",
    img: "/images/matrimonio3.webp",
    text:
      "Un giorno così speciale merita un luogo altrettanto speciale. Alla Trattoria Damì accogliamo il vostro matrimonio con calore, semplicità e tanta bellezza.",
    color: "bg-[#6e5c50]",
  },
  {
    title: "BATTESIMI, COMUNIONI E CRESIME",
    img: "/images/compleanni.webp",
    text:
      "Per le prime tappe importanti della vita ci vuole un luogo che profumi di famiglia. Damì è la scelta giusta per celebrare con gusto e semplicità.",
    color: "bg-[#6e5c50]",
  },
  {
    title: "COMPLEANNI,  LAUREE ED EVENTI",
    img: "/images/battesimo1.webp",
    text:
      "Qualsiasi sia la vostra occasione speciale, da Damì la festa prende vita tra sapori genuini, risate e un’atmosfera familiare che scalda il cuore.",
    color: "bg-[#650602]",
  },
];

export default function EventsSection() {
  return (
    <section className="bg-[#f1ede0]">
      {/* banner orizzontale sopra la sezione – immagine fissa */}
      <div className="w-full h-40 md:h-52 lg:h-64 overflow-hidden">
        <img
  src="/images/eventi.webp"
  alt="Festa alla Trattoria Damì"
  className="h-full w-full object-cover object-top"
/>

      </div>

      {/* intro testo */}
      <div className="container mx-auto max-w-screen-md px-6 py-16 text-center space-y-6">
        <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-3xl md:text-4xl">
          EVENTI
        </h2>
        <p className="[font-family:'Lora',Helvetica] text-[#6e5c50]/90 leading-relaxed">
          Da noi lo spazio non manca. Sale riservate, ampia veranda, giardino e
          parco&nbsp;giochi.
        </p>
      </div>

      {/* cards */}
      <div className="container mx-auto max-w-screen-xl px-6 pb-24 grid gap-12 md:grid-cols-2">
        {events.map(({ title, img, text, color }) => (
          <article
            key={title}
            className="flex flex-col rounded-lg overflow-hidden shadow-md"
          >
            {/* immagine */}
            <div className="h-60 md:h-64 lg:h-72 w-full overflow-hidden">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* contenuto */}
            <div
              className={`
                flex flex-col gap-6 p-6
                text-center text-[#f1ede0]
                [font-family:'Lora',Helvetica]
                ${color}
              `}
            >
              <h3 className="[font-family:'Libre_Baskerville',Helvetica] text-base md:text-lg font-bold leading-snug uppercase">
                {title}
              </h3>

              <p className="text-xs md:text-sm leading-relaxed">{text}</p>

              <div className="mt-auto space-y-3">
                <Link
                  href="/contatti-e-orari"
                  className="
                    block w-full rounded
                    bg-[#f1ede0] text-[#6e5c50]
                    text-xs font-semibold py-3
                    hover:bg-[#e8e4d8] transition
                  "
                >
                  + INFORMAZIONI
                </Link>
                <Link
                  href="tel:+39054297863"
                  className="
                    block w-full rounded
                    bg-[#c2953e] text-[#6e5c50]
                    text-xs font-semibold py-3
                    hover:bg-[#d2a954] transition
                  "
                >
                  PRENOTA OGGI
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
