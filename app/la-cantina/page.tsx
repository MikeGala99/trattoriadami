/* ────────────────────────────────────────────────
   app/components/CellarSection.tsx
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import Link from "next/link";

/*  ↓  sostituisci PNG con foto reali e prezzi corretti */
const wines = [
  {
    name: "PROSECCO DA ORE\nD’ARFANTA DOC\nTREVISO BRUT",
    img: "/img/wines/prosecco-1.png",
    price: "€ 15,00",
  },
  {
    name: "PROSECCO GERONAZZO\nSUP. BRUT DOCG\nSANTA EUROSIA",
    img: "/img/wines/prosecco-2.png",
    price: "€ 19,00",
  },
  {
    name: "GERONAZZO\nVALDOBBIADENE PROSECCO\nSUPERIORE EXTRA DRY",
    img: "/img/wines/prosecco-3.png",
    price: "€ 19,00",
  },
  {
    name: "ROSATO\n‘CAMPO MACCIONE’\nROCCA DELLE MACÌE",
    img: "/img/wines/rosato.png",
    price: "€ 19,00",
  },
];

export default function CellarSection() {
  return (
    <section className="bg-[#f1ede0]">
      {/* hero immagine cantina */}
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src="/img/cantina-banner.jpg" /* sostituisci */
          alt="Chianti – dettaglio fiasco"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-screen-xl px-6 py-16 space-y-16">
        {/* titolo + intro */}
        <div className="text-center space-y-6">
          <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-3xl md:text-4xl">
            LA NOSTRA CANTINA
          </h2>
          <p className="[font-family:'Lora',Helvetica] mx-auto max-w-2xl text-[#6e5c50]/90">
            Oltre ai nostri vini locali sfusi: sangiovese, rosso toscano,
            offriamo un’ampia scelta di vini in bottiglia. (qui potrai aggiungere
            la carta dei vini completa)
          </p>
        </div>

        {/* barra social */}
        <div className="text-center bg-[#650602] text-[#f1ede0] py-6 px-4 rounded">
          Seguici sui nostri social 
          <Link
            href="https://www.instagram.com/"
            className="underline underline-offset-4"
          >
            @trattoriadamitalia
          </Link>{" "}
          <span className="hidden sm:inline">  •  </span>
          <Link
            href="https://www.facebook.com/"
            className="underline underline-offset-4"
          >
            Trattoria Damì
          </Link>
          <div className="mt-1">
            per scoprire tutte le proposte del giorno
          </div>
        </div>

        {/* griglia vini */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {wines.map((w) => (
            <article
              key={w.name}
              className="flex flex-col items-center text-center gap-6"
            >
              {/* bottiglia */}
              <div className="h-64 w-auto flex items-end justify-center">
                <img
                  src={w.img}
                  alt={w.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* nome */}
              <h3 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-sm font-bold leading-snug uppercase whitespace-pre-line">
                {w.name}
              </h3>

              {/* icona bottiglia decorativa */}
              <img
                src="/img/bottle-icon.png" /* placeholder icona nera */
                alt=""
                className="h-8 w-auto opacity-70"
              />

              {/* prezzo */}
              <p className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-sm">
                {w.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
