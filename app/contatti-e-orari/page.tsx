/* ────────────────────────────────────────────────
   app/components/ContactHours.tsx
─────────────────────────────────────────────────*/
"use client";

import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function ContactHours() {
  return (
    <section className="bg-[#f1ede0]">
      {/* blocco principale */}
      <div className="container mx-auto max-w-screen-xl px-6 py-20 grid gap-12 md:grid-cols-2">
        {/* foto trattoria */}
        <div className="w-full h-72 md:h-auto rounded-lg overflow-hidden shadow">
          <img
            src="/img/trattoria-esterno.jpg" /* sostituisci con la tua foto */
            alt="Trattoria Damì"
            className="h-full w-full object-cover"
          />
        </div>

        {/* testo & contatti */}
        <div className="space-y-6">
          <h2 className="[font-family:'Libre_Baskerville',Helvetica] text-3xl md:text-4xl text-[#6e5c50]">
            CONTATTI E ORARI
          </h2>

          <p className="[font-family:'Lora',Helvetica] text-[#6e5c50]/90 leading-relaxed">
            Lo staff della Trattoria Damì vi aspetta, dal martedì alla domenica a
            pranzo e cena, in via Sillaro 2 (Sassoleone).
          </p>

          <p className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-sm">
            <strong>Orari:</strong> dal martedì alla domenica&nbsp;
            <strong>11:30 - 14:30</strong> / <strong>19:00 - 23:00</strong><br />
            <span className="uppercase">lunedi chiuso</span>
          </p>

          <div className="space-y-3">
            <Item icon={<Phone className="h-4 w-4" />} label="0542 97863" />
            <Item
              icon={<Mail className="h-4 w-4" />}
              label="trattoriadami@icloud.com"
              href="mailto:trattoriadami@icloud.com"
            />
            <Item
              icon={<Facebook className="h-4 w-4" />}
              label="Trattoria Damì"
              href="https://www.facebook.com/"
            />
            <Item
              icon={<Instagram className="h-4 w-4" />}
              label="@trattoriadamitalia"
              href="https://www.instagram.com/"
            />
          </div>

          <p className="[font-family:'Lora',Helvetica] text-[#6e5c50] text-sm pt-4">
            <strong>Posizione:</strong> Casalfiumanese, via Sillaro 2, 40022
            Sassoleone BO
          </p>
        </div>
      </div>

      {/* mappa embed */}
      <div className="w-full h-[400px] lg:h-[500px]">
        <iframe
          title="Mappa Trattoria Damì"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.4713512854355!2d11.433927476572603!3d44.20823887290445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cce3333673c33%3A0x5a2ddcaad419acf0!2sTrattoria%20Dam%C3%AC!5e0!3m2!1sit!2sit!4v1715450000000!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

/* ────────────── componente riga contatto ────────────── */
function Item({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center gap-3 text-[#6e5c50] text-sm hover:underline"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <span className="flex items-center justify-center">{icon}</span>
        {label}
      </Link>
    );
  }
  
  return (
    <span className="flex items-center gap-3 text-[#6e5c50] text-sm">
      <span className="flex items-center justify-center">{icon}</span>
      {label}
    </span>
  );
}
