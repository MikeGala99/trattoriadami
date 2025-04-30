/* ────────────────────────────────────────────────
   app/app-menu/page.tsx   (rotta /app-menu)
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import Link from "next/link";

/* ---------- DATI (sostituisci con i tuoi) ---------- */

/* Menù degustazione */
const tastingMenus = [
  {
    title: "DEGUSTAZIONE PRIMI",
    items: [
      "Crostini misti della casa  •  pomodoro, porcini, fegatini",
      "Tris di minestre",
      "Tortelli di ricotta burro e salvia, pappardelle al ragù di cinghiale, tortelli di patate ai porcini",
      "Sorbetto al limone o al caffè",
      "Acqua naturalizzata",
      "Caffè e amari della casa",
    ],
    note: "MINIMO 2 PERSONE – EURO 20 A PERSONA  (vino escluso)",
  },
  {
    title: "DEGUSTAZIONE CARNE",
    items: [
      "Crostini misti della casa  •  pomodoro, porcini, fegatini",
      "Grigliata mista  •  tagliata, castrato, salsiccia, pancetta",
      "Contorno misto  •  verdure al forno e patatine fritte",
      "Dessert  •  sorbetto al limone o al caffè",
      "Acqua naturalizzata",
      "Caffè e amari della casa",
    ],
    note: "MINIMO 2 PERSONE – EURO 28 A PERSONA  (vino escluso)",
  },
  {
    title: "MENU DAMÌ",
    items: [
      "Crostini misti della casa  •  pomodoro, porcini, fegatini",
      "Tris di minestre  – a scelta tra –",
      "Tortelli di ricotta, tortelli di patate, pappardelle, tagliatelle",
      "   condimento a scelta tra   •  burro e salvia, ragù, ragù di cinghiale, porcini",
      "Sorbetto al limone o al caffè",
      "Grigliata mista  •  tagliata, castrato, salsiccia, pancetta",
      "Contorno misto  •  verdure al forno e patatine fritte",
      "Caffè e amari della casa",
    ],
    note: "MINIMO 2 PERSONE – EURO 38 A PERSONA  (bevande escluse)",
  },
];

/* Carta alla carta (categorie + voci + prezzo) */
const aLaCarte = [
  {
    category: "ANTIPASTI",
    dishes: [
      ["ANTIPASTO DELLA CASA  – crostini misti", "4.50"],
      ["SALUMI MISTI  (prosciutto, salame, sbriciolona)", "6.50"],
      ["FORMAGGIO PECORINO", "5.00"],
      ["SQUACQUERONE", "5.00"],
      ["CRESCENTINA FRITTA", "4.00"],
      ["POLENTA FRITTA", "4.00"],
      ["TAGLIERE AFFETTATO MISTO, FORMAGGIO E CRESCENTINA O POLENTA FRITTA", "12.00"],
      ["CIOTOLA DI FUNGHI", "6.00"],
      ["SALSE NOSTRE (ragù, cinghiale, fegatini, funghi)", "9.00"],
    ],
  },
  {
    category: "PRIMI PIATTI",
    dishes: [
      ["TORTELLI DI RICOTTA/PATATE (burro e salvia)", "9.00"],
      ["TORTELLI DI RICOTTA/PATATE (ragù)", "10.00"],
      ["PASSATELLI (BRODO O PORCINI)", "13.00"],
      ["TAGLIATELLE (ragù)", "8.00"],
      ["TORTELLI DI PATATE AI FUNGHI", "12.00"],
      ["TORTELLI DI RICOTTA AI FUNGHI", "12.00"],
      ["TAGLIATELLE AI FUNGHI", "10.00"],
      ["TAGLIOLINI RAGÙ/VERDURE", "8.00"],
      ["PAPPARDELLE AL RAGÙ DI CINGHIALE", "12.00"],
      ["TORTELLINI (brodo, panna o ragù)", "13.00"],
      ["BIS DI MINESTRE (min. 2 persone)", "12.00"],
      ["TRIS DI MINESTRE (min. 2 persone)", "14.00"],
    ],
  },
  {
    category: "SECONDI PIATTI",
    dishes: [
      ["FIORENTINA DRYAGE", "60.00/kg"],
      ["TAGLIATA – con rucola o al rosmarino (3 etti)", "22.00"],
      ["TAGLIATA – al lardo di colonnata (3 etti)", "25.00"],
      ["NODINO DI FIORENTINA", "18.00"],
      ["NODINO DI FIORENTINA – al lardo di colonnata", "23.00"],
      ["FILETTO", "15.00"],
      ["FILETTO – al lardo di colonnata", "20.00"],
      ["BRACIOLA DI VITELLO", "42.00/kg"],
      ["BRACIOLA DI MAIALE", "8.00"],
      ["CASTRATO", "15.00"],
      ["SALSICCIA", "8.00"],
      ["PANCETTA", "8.00"],
      ["ARROSTO DI VITELLA", "8.00"],
      ["ROASTBEEF", "8.00"],
      ["GRIGLIATA MISTA (min. 2 persone)", "18.00/pers"],
      ["TAGLIATA CON OSSO", "50.00/kg"],
      ["SALSICCIA E PANCETTA", "10.00"],
    ],
  },
  {
    category: "CONTORNI",
    dishes: [
      ["PATATE FRITTE", "3.00"],
      ["FIORI DI ZUCCA (in estate)", "5.00"],
      ["POLENTA FRITTA", "4.00"],
      ["PATATE AL FORNO", "4.00"],
      ["MELANZANE DAMÌ AL FORNO (con pomodoro e GRANA)", "4.50"],
      ["PATATE DAMÌ", "4.50"],
      ["POMODORI AL FORNO", "4.00"],
      ["CIPOLLE AL FORNO", "4.00"],
      ["PEPERONI AL FORNO", "4.00"],
      ["RADICCHIO AL FORNO", "4.50"],
      ["MISTO DI VERDURE AL FORNO", "5.00"],
      ["MISTO DI VERDURE AL FORNO E PATATINE FRITTE O AL FORNO", "5.50/pers"],
    ],
  },
];

/* ---------- COMPONENTE PAGINA MENU ---------- */

export default function MenuPage() {
  return (
    <main className="bg-[#f1ede0] pb-24">
      {/* INTRO TITOLO */}
      <section className="container mx-auto max-w-screen-sm px-6 text-center space-y-6 pt-16">
        <h1 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-3xl">
          IL NOSTRO MENU
        </h1>
        <p className="[font-family:'Lora',Helvetica] text-[#6e5c50]/90 text-sm leading-relaxed">
          Il menù che vi proponiamo è un omaggio ai sapori provenienti dalle
          colline tosco-emiliane, con attenzione alla qualità e alla tradizione.
          Nel nostro menù à la carte troverete una selezione di antipasti, primi
          piatti fatti in casa, carne alla griglia, contorni e pizze cotte nel
          forno a legna.
        </p>
      </section>

      {/* BARRA SOCIAL */}
      <div className="mt-10 bg-[#650602] py-4 text-center text-[#f1ede0] text-sm px-4">
        Seguici sui nostri social&nbsp;
        <Link
          href="https://www.instagram.com/"
          className="underline underline-offset-4"
        >
          @trattoriadamitalia
        </Link>
        &nbsp;•&nbsp;
        <Link
          href="https://www.facebook.com/"
          className="underline underline-offset-4"
        >
          Trattoria Damì
        </Link>
        <br />
        per scoprire tutte le proposte del giorno
      </div>

      {/* MENÙ DEGUSTAZIONE */}
      <section className="container mx-auto max-w-screen-md px-6 pt-16 space-y-16">
        {tastingMenus.map((m, idx) => (
          <div key={m.title} className="space-y-6 text-center">
            {idx !== 0 && <hr className="border-[#6e5c50]/30" />}
            <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-xl uppercase">
              MENU
              <br />
              {m.title}
            </h2>
            <ul className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-xs leading-snug space-y-1">
              {m.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <p className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-[11px] pt-4 uppercase tracking-wide">
              {m.note}
            </p>
          </div>
        ))}
      </section>

      {/* CARTA A LA CARTE */}
      <section className="container mx-auto max-w-screen-sm px-6 pt-24 space-y-20">
        {aLaCarte.map((cat) => (
          <div key={cat.category} className="space-y-6">
            <h3 className="[font-family:'Libre_Baskerville',Helvetica] text-[#6e5c50] text-xl text-center">
              {cat.category}
            </h3>
            <table className="w-full text-xs [font-family:'Lora',Helvetica] text-[#6e5c50]">
              <tbody>
                {cat.dishes.map(([dish, price]) => (
                  <tr key={dish}>
                    <td className="pr-4 py-1">{dish}</td>
                    <td className="text-right py-1">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </main>
  );
}
