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
    img: "/images/proseccodaore.webp",
    price: "€ 15,00",
  },
  {
    name: "PROSECCO GERONAZZO\nSUP. BRUT DOCG\nSANTA EUROSIA",
    img: "/images/proseccogeronazzo.webp",
    price: "€ 19,00",
  },
  {
    name: "GERONAZZO\nVALDOBBIADENE PROSECCO\nSUPERIORE EXTRA DRY",
    img: "/images/geronazzovaldobiadene.webp",
    price: "€ 19,00",
  },
  {
    name: "ROSATO\n‘CAMPO MACCIONE’\nROCCA DELLE MACÌE",
    img: "/images/rosatocampomaccione.webp",
    price: "€ 19,00",
  },
    {
    name: "ROMANDIOLA PIGNOLETTO\nCOLLI DI IMOLA\nFRIZZANTE",
    img: "/images/romandiolapignoletto.webp",
    price: "€ 15,00",
  },
   {
    name: "COZZAROLO\nRIBOLLA GIALLA",
    img: "/images/cozzaroloribollagialla.webp",
    price: "€ 20,00",
  },
   {
    name: "PINOT GRIGIO\nVILLA VESCOVILE",
    img: "/images/pinotgrigiovillavescovile.webp",
    price: "€ 22,00",
  },
  {
    name: "TOSCANA CHARDONNAY\nIGT MOONLITE\nROCCA DELLE MACÌE",
    img: "/images/toscanachardonnayigtmoonlite.webp",
    price: "€ 20,00",
  },
  {
    name: "GEWURZTRAMINER\nTRENTINO DOC\nVILLA VESCOVILE",
    img: "/images/gewurztraminertrentinodoc.webp",
    price: "€ 21,00",
  },
  {
    name: "FALANGHINA\nBENEVENTANO IGT\nMACCHIALUPA",
    img: "/images/falanginabeneventano.webp",
    price: "€ 20,00",
  },
  {
    name: "CAMPOMACCIONE\nVERMENTINO\nMAREMMA TOSCANA DOC",
    img: "/images/campomaccionevermentino.webp",
    price: "€ 22,00",
  },
   {
    name: "LAGREIN\nVILLA VESCOVILE",
    img: "/images/lagreinvillavescovile.webp",
    price: "€ 26,00",
  },
  {
    name: "LE ROCCHE MALATESTIANE\nSIGISMONDO SANGIOVESE\nSUPERIORE DOC",
    img: "/images/sigismondosangiovese.webp",
    price: "€ 18,00",
  },
  {
    name: "LAMBRUSCO\nDELL’EMILIA IGP\nLIRICO RIÒ",
    img: "/images/lambruscoigp.webp",
    price: "€ 15,00",
  },
  {
    name: "CORTE SOLE\nVALPOLICELLA RIPASSO\nSUPERIORE",
    img: "/images/cortesolevalpolicellaripasso.webp",
    price: "€ 26,00",
  },
   {
    name: "SASYR\nROCCA DELLE MACÌE",
    img: "/images/sasyrroccadellemacie .webp",
    price: "€ 18,00",
  },
    {
    name: "FAMIGLIA ZINGARELLI\nCHIANTI CLASSICO DOCG\nROCCA DELLE MACÌE",
    img: "/images/chianticlassicozingarelli.webp",
    price: "€ 20,00",
  },
   {
    name: "FAMIGLIA ZINGARELLI\nCHIANTI CLASSICO RISERVA\nROCCA DELLE MACÌE",
    img: "/images/chianticlassicoriservazingarelli.webp",
    price: "€ 26,00",
  },
   {
    name: "ROSSO DI MONTALCINO\nESPERIENZA N°8",
    img: "/images/rossodimontalcinoesperienza8.webp",
    price: "€ 28,00",
  },
  {
    name: "BRUNELLO DI MONTALCINO DOCG\nESPERIENZA N°8",
    img: "/images/brunellodimontalcino8.webp",
    price: "€ 41,00",
  },
  {
    name: "PREDELLA\nMONTEPULCIANO D’ABRUZZO\nDOC",
    img: "/images/predellamontepulcinano.webp",
    price: "€ 15,00",
  },
    {
    name: "LANDINI\nCHIANTI",
    img: "/images/chiantilandini.webp",
    price: "€ 14,00",
  },
    {
    name: "NERO D’AVOLA BIO\nCORTE CAMARÌ",
    img: "/images/nerodavolacamari.webp",
    price: "€ 21,00",
  },
   {
    name: "MANDUS\nPRIMITIVO DI MANDURIA DOC\nPIETRAPURA",
    img: "/images/primitivodimanduria.webp",
    price: "€ 21,00",
  },
];
const glasses = [
  {
    name: "CALICE DI SANGIOVESE SFUSO",
    img: "/images/logocalice.webp",
    price: "€ 3,50",
  },
  {
    name: "CALICE DI ROSSO ZONA SCANSANO SFUSO",
    img: "/images/logocalice.webp",
    price: "€ 4,00",
  },
  {
    name: "CALICE DI BIANCO FERMO/FRIZZANTE SFUSO",
    img: "/images/logocalice.webp",
    price: "€ 3,00",
  },
];
const bottles = [
  {
    name: "FRANCIACORTA DOCG EXTRA\nBRUT CUVÈE PRESTIGE\nCA’ DEL BOSCO",
    img: "/images/cadelbosco.webp",
    price: "€ 45,00",
  },
  {
    name: "FRANCIACORTA\nBERLUCCHI ‘61\nFRANCIACORTA ROSÉ",
    img: "/images/franciacortaberlucchirose.webp",
    price: "€ 28,00",
  },
  {
    name: "FRANCIACORTA\nBERLUCCHI ‘61\nFRANCIACORTA SATÈN",
    img: "/images/franciacortaberlucchisaten.webp",
    price: "€ 28,00",
  },
  {
    name: "BELLAVISTA\nFRANCIACORTA BRUT\nGRANDE CUVÉE ALMA",
    img: "/images/franciacortaberlucchisaten.webp",
    price: "€ 50,00",
  },
];



export default function CellarSection() {
  return (
    <section className="bg-[#f1ede0]">
      {/* hero immagine cantina */}
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src="/images/dettagli.webp" /* sostituisci */
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
            href="https://www.instagram.com/trattoriadamiitalia/"
            className="underline underline-offset-4"
          >
            @trattoriadamitalia
          </Link>{" "}
          <span className="hidden sm:inline">  •  </span>
          <Link
            href="https://www.facebook.com/trattoriadamiitalia"
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

          

              {/* prezzo */}
              <p className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-sm">
                {w.price}
              </p>
            </article>
          ))}
        </div>

        {/* immagine introduttiva dei calici */}
<div className="flex justify-center mb-8">
  <img
    src="/images/calici.webp"
    alt="Calici"
    className="max-w-full h-auto"
  />
</div>

{/* griglia calici */}
<div className="grid grid-cols-1 md:grid-cols-1 gap-8">
  {glasses.map((g) => (
    <article
      key={g.name}
      className="flex flex-col items-center text-center gap-3"
    >
      {/* logo calice */}
      <div className="h-48 w-auto flex items-end justify-center">
        <img
          src={g.img}
          alt={g.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* nome calice */}
      <h3 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-sm font-bold leading-snug uppercase whitespace-pre-line">
        {g.name}
      </h3>

      {/* prezzo */}
      <p className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-sm">
        {g.price}
      </p>
    </article>
  ))}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {bottles.map((bottle) => (
    <article
      key={bottle.name}
      className="flex flex-col items-center text-center gap-2" // gap tra elementi
    >
      {/* Immagine bottiglia */}
      <div className="h-48 w-auto flex items-end justify-center">
        <img
          src={bottle.img}
          alt={bottle.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Nome bottiglia */}
      <h3 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-sm font-bold leading-snug uppercase whitespace-pre-line">
        {bottle.name}
      </h3>

      {/* Prezzo */}
      <p className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-sm">
        {bottle.price}
      </p>
    </article>
  ))}
</div>


      </div>
    </section>
  );
}
