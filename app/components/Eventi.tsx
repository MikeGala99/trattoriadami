/* ────────────────────────────────────────────────
   app/components/EventsAndHours.tsx
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import Link from "next/link";

// dati “eventi” — se servono altre label basta aggiungerle qui
const eventTypes = [
  "CENE AZIENDALI",
  "MATRIMONI",
  "BATTESIMI, COMUNIONI E CRESIME",
  "COMPLEANNI, LAUREE, EVENTI",
];

export default function EventsAndHours() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(2,minmax(0,1fr))]">
      {/* ─────────────────────────── Blocco EVENTI */}
      <div className="bg-[#6e5c50] p-10 lg:p-14 flex flex-col justify-center gap-8">
        <div className="space-y-6">
          <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-[#f1ede0] text-3xl lg:text-4xl">
            EVENTI
          </h2>
          <p className="[font-family:'Lora',Helvetica] text-[#f1ede0] text-lg leading-relaxed max-w-md">
            Da noi lo spazio non manca, sale riservate, ampia veranda, giardino
            e parco giochi.
          </p>
        </div>

        {/* bottoni evento */}
        <ul className="space-y-4">
          {eventTypes.map((ev) => (
            <li key={ev}>
              <Link
                href="#contatti" /* oppure una route dedicata */
                className="
                  block text-center
                  bg-[#c2953e] hover:bg-[#cca753]
                  [font-family:'Libre_Baskerville',Helvetica]
                  text-[#f1ede0] text-sm font-bold
                  px-6 py-3 rounded
                  transition
                "
              >
                {ev}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ─────────────────────────── Immagine bar (angolo in alto a destra) */}
      <div className="relative h-72 lg:h-auto">
        <img
          src="https://c.animaapp.com/ma2lcns5bFQT5W/img/image-3.png"
          alt="Aperitivo al bancone della Trattoria Damì"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ─────────────────────────── Immagine drone (angolo in basso a sinistra) */}
      <div className="relative h-72 lg:h-auto order-last lg:order-none">
        <img
          src="https://c.animaapp.com/ma2lcns5bFQT5W/img/-r617970-1.png"
          alt="Vista aerea della Trattoria Damì"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* ─────────────────────────── Blocco ORARI */}
      <div className="bg-[#650602] p-10 lg:p-14 flex flex-col justify-center">
        <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-[#f1ede0] text-3xl lg:text-4xl mb-6">
          GLI ORARI
        </h2>
        <p className="[font-family:'Lora',Helvetica] text-[#f1ede0] text-lg leading-relaxed max-w-md">
          Siamo aperti dal <strong>martedì alla domenica</strong>, a pranzo e
          cena:<br />
          dalle <strong>11:30 alle 14:30</strong> / dalle{" "}
          <strong>19:00 alle 23:00</strong>.<br />
          <span className="font-semibold">Chiusi il lunedì.</span>
        </p>
      </div>
    </section>
  );
}
