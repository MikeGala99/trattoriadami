/* ────────────────────────────────────────────────
   app/components/SiteFooter.tsx – versione semplificata
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-[#6e5c50] text-[#f1ede0] py-14">
      <div className="container mx-auto max-w-screen-xl px-6">
        {/* blocco principale */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Contatti */}
          <div className="md:max-w-lg space-y-6">
            <h3 className="uppercase [font-family:'Libre_Baskerville',Helvetica] text-xl md:text-2xl">
              I nostri contatti e posizione
            </h3>

            <address className="[font-family:'Lora',Helvetica] not-italic leading-relaxed space-y-1">
              Damì Snc di Palladini Marco e Maurizi&nbsp;Manuela<br />
              Via Sillaro, 2 – Fraz. Sassoleone<br />
              40020&nbsp;Casalfiumanese&nbsp;(Bo)<br />
              C.F./P.Iva&nbsp;03433511205
            </address>

            <p className="underline text-sm [font-family:'Lora',Helvetica]">
              ANIMALI AMMESSI, ma ricordatevi che i cani sono come i padroni
            </p>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h3 className="uppercase text-right [font-family:'Libre_Baskerville',Helvetica] text-xl md:text-2xl">
              I nostri social
            </h3>

            <div className="flex justify-end gap-4">
              {[
                { icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/trattoriadamiitalia" },
                { icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/trattoriadamiitalia/" },
                { icon: <MapPin className="h-6 w-6" />, href: "https://maps.app.goo.gl/X7c62puSNu4HqoxG9" },
              ].map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="
                    p-3 rounded-full border border-[#f1ede0]/40
                    hover:bg-[#f1ede0]/10 transition
                  "
                  aria-label="Social link"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
