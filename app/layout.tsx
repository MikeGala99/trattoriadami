import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Lora } from "next/font/google";
import NavBar from "./components/NavBar";
import InstagramBanner from "./components/InstagramBanner";
import Footer from "./components/Footer";

// Font optimization 
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Trattoria Damì | Tradizione e buon cibo tosco-emiliano",
  description: "Scopri i sapori autentici della cucina tosco-emiliana in un ambiente rustico e accogliente. Prodotti locali e ricette della tradizione dal 1985.",
  keywords: "trattoria, ristorante, cucina toscana, cucina emiliana, Casalfiumanese, Sassoleone, fatto in casa",
  authors: [{ name: "Trattoria Damì" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Trattoria Damì | Tradizione e buon cibo tosco-emiliano",
    description: "Sapori autentici della cucina tosco-emiliana in un ambiente rustico e accogliente.",
    url: "https://trattoria-dami.it",
    siteName: "Trattoria Damì",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={lora.variable}>
      <body className="flex min-h-screen flex-col">
        {/* Header con navigazione principale */}
        <NavBar />
        <InstagramBanner instagramUrl="https://www.instagram.com/trattoriadamiitalia/" />

        {/* Contenuto principale - cresce per spingere il footer verso il basso */}
        <main className="flex-grow flex flex-col gap-16 md:gap-24 py-8 md:py-12">
          {children}
        </main>

        {/* Footer con informazioni di contatto e copyright */}
        <Footer />
      </body>
    </html>
  );
}
