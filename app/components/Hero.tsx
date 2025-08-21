/* app/components/Hero.tsx */
"use client";

import React from "react";

export default function Hero() {
  const heroPoster = "/images/heroimage.webp"; // immagine nel public
  const heroVideo = "/video/videohero_1.mp4"; // video locale in public/videos/

  return (
    <section className="w-full bg-[#f1ede0]">
      {/*  ⬇︎ 60 vh su mobile, 70 vh su desktop, ma max 720 px  */}
     <div className="relative w-full h-[75vh] lg:h-[90vh] max-h-[900px] overflow-hidden">
  <video
    className="absolute inset-0 h-full w-full object-cover"
    src={heroVideo}
    poster={heroPoster}
    autoPlay
    muted
    loop
    playsInline
  >
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
