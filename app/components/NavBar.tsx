/* ────────────────────────────────────────────────
   app/components/NavBar.tsx – Trattoria Damì
   Colori:  bg #6e5c50  •  testo #f1ede0  •  hover #c2953e
─────────────────────────────────────────────────*/
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/*  Voci di menu  */
const navItems = [
  { label: "MENU", href: "/menu" },
  { label: "LA CANTINA", href: "/cantina" },
  { label: "EVENTI", href: "/eventi" },
  { label: "CONTATTI E ORARI", href: "/contatti" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Cambia stile in base allo scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Animazioni */
  const slideIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideIn}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#6e5c50]/95 shadow-md" : "bg-[#6e5c50]"
      }`}
    >
      {/* Prima riga: solo logo */}
      <div className="container mx-auto max-w-screen-xl flex items-center justify-center h-20 px-4 lg:px-6">
        {/* Logo ingrandito */}
        <Link href="/" className="flex items-center">
          <img
            src="https://c.animaapp.com/ma2lcns5bFQT5W/img/dami-blanco-3x-1.png"
            alt="Trattoria Damì"
            className="h-14 w-auto" 
          />
        </Link>

        {/* ---------- BURGER MOBILE ---------- */}
        <div className="absolute right-4 lg:hidden">
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="p-2 rounded-md text-[#f1ede0] hover:bg-[#ffffff22] focus-visible:outline-none"
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Seconda riga: menu centrato */}
      <div className={`container mx-auto max-w-screen-xl px-4 lg:px-6 ${isScrolled ? 'py-2' : 'py-3'} hidden lg:block border-t border-[#ffffff22]`}>
        <nav className="flex justify-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                text-[#f1ede0] font-serif text-lg
                hover:text-[#c2953e] transition-colors
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ---------- MOBILE PANEL ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#6e5c50]"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.05 } }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      block w-full px-6 py-3 text-[#f1ede0] font-serif
                      hover:bg-[#ffffff11] hover:text-[#c2953e] transition
                    "
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}