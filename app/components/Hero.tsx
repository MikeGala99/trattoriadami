/* app/components/Hero.tsx */
"use client";

import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  const heroImage =
    "https://c.animaapp.com/ma2lcns5bFQT5W/img/shotbymatvei-046-2.png";

  return (
    <section className="w-full bg-[#f1ede0]">
      {/*  ⬇︎ 60 vh su mobile, 70 vh su desktop, ma max 720 px  */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] max-h-[720px] overflow-hidden">
        <img
          src={heroImage}
          alt="Tagliata alla Trattoria Damì"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <button
          aria-label="Guarda il video"
          className="
            absolute inset-0 m-auto flex h-20 w-20 lg:h-24 lg:w-24
            items-center justify-center rounded-full
            border-2 border-white/80 backdrop-blur-[2px]
            bg-white/10 hover:bg-white/20 transition
          "
        >
          <Play className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
        </button>
      </div>
    </section>
  );
}
