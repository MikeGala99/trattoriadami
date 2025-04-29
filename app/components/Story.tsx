/* ────────────────────────────────────────────────
   app/components/Story.tsx – versione “screenshot”
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import Link from "next/link";

export default function Story() {
  return (
    <section className="bg-[#f1ede0] py-16 md:py-24">
      {/* CTA PRENOTA OGGI */}
      <div className="flex justify-center mb-16">
        <Link
          href="#prenota"
          className="
            inline-block rounded-full
            bg-[#650602] px-14 py-6
            font-serif text-3xl md:text-4xl text-[#f1ede0]
            hover:bg-[#7a0a05] transition
          "
        >
          PRENOTA OGGI
        </Link>
      </div>

      {/* Testo “La nostra storia” */}
      <div className="container mx-auto max-w-screen-md px-6 space-y-10">
        <h2 className="text-center font-serif text-[#6e5c50] text-3xl md:text-4xl">
          LA NOSTRA STORIA
        </h2>

        <article className="space-y-6 text-[#6e5c50]/90 [font-family:'Lora',Helvetica] text-lg leading-relaxed">
          <p>
            La Trattoria Damì è un punto di riferimento storico della ristorazione
            tosco-emiliana. Sul crinale tra le due regioni e al confine tra Emilia
            e Romagna.
          </p>
          <p>
            Il nome Damì era il soprannome del padre di Marco, in quanto si
            chiamava Adamo, diminutivo Adamino, abbreviato Damì, che fece nascere
            la trattoria Damì.
          </p>
          <p>
            Rimasti per anni nella sede storica nel centro della località di
            Giugnola, dall’estate del 2015 si sono trasferiti a pochi chilometri di
            distanza, al Bivio Bordona, tra Giugnola e Sassoleone.
          </p>
          <p>
            La trattoria riflette la personalità dei due gestori, Marco e Manuela,
            portando a tavola tutta la tradizione del territorio che li ha visti
            crescere.
          </p>
          <p>
            E così la storia ci porta a Damì come la conosciamo oggi, una
            trattoria, fiera di essere trattoria, fiera delle sue origini e della
            sua essenza. Dove i clienti si mettono comodi, mangiano bene e si
            lasciano trasportare dall’atmosfera familiare.
          </p>
          <p>
            Oltre ai piatti che hanno costruito la fama della trattoria, si può
            ordinare anche la pizza cotta nel forno a legna e, se siete stanchi e
            preferite non rimettervi alla guida, potete soggiornare in una delle 7
            camere da letto con tutti i comfort.
          </p>
          <p>
            Si possono organizzare eventi, raduni e cerimonie. Ci sono ampi spazi
            esterni: parco giochi e giardino estivo.
          </p>
        </article>
      </div>
    </section>
  );
}
