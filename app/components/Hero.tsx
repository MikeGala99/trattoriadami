/* app/components/Hero.tsx */
"use client";

import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  const heroPoster = "/images/heroimage.webp"; // immagine nel public
  const heroVideo = "/video/videohero_1.mp4"; // video locale in public/videos/

  return (
    <section className="w-full bg-[#f1ede0]">
      {/*  ⬇︎ 60 vh su mobile, 70 vh su desktop, ma max 720 px  */}
      <div className="relative w-full h-[60vh] lg:h-[70vh] max-h-[720px] overflow-hidden">
        {/* Video in background */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Fallback immagine se il video non carica */}
          <img
            src={heroPoster}
            alt="Tagliata alla Trattoria Damì"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </video>

      </div>
    </section>
  );
}
