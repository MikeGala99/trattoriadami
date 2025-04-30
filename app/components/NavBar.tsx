/* ────────────────────────────────────────────────
   app/components/NavBar.tsx – Trattoria Damì
   Colori:  bg #6e5c50  •  testo #f1ede0  •  hover #c2953e
─────────────────────────────────────────────────*/
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/*  Voci di menu  */
const navItems = [
  { label: "MENU", href: "/menu" },
  { label: "LA CANTINA", href: "/la-cantina" },
  { 
    label: "EVENTI", 
    href: "/eventi",
    dropdown: [
      { label: "Battesimi, Comunioni e Cresime", href: "/eventi/battesimi-comunioni-e-cresime" },
      { label: "Compleanni e Lauree", href: "/eventi/compleanni-e-lauree" },
      { label: "Cene Aziendali", href: "/eventi/cene-aziendali" },
      { label: "Matrimoni", href: "/eventi/matrimoni" },
    ]
  },
  { label: "CONTATTI E ORARI", href: "/contatti-e-orari" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Cambia stile in base allo scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Chiudi dropdown quando si clicca fuori */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Animazioni */
  const slideIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
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
            <div key={item.label} className="relative" ref={item.dropdown ? dropdownRef : undefined}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="
                      text-[#f1ede0] font-serif text-lg flex items-center
                      hover:text-[#c2953e] transition-colors
                    "
                  >
                    {item.label}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute left-0 mt-2 w-64 rounded-md bg-[#6e5c50] shadow-lg border border-[#ffffff22] z-50"
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="
                                block px-4 py-2 text-[#f1ede0] font-serif text-base
                                hover:bg-[#ffffff11] hover:text-[#c2953e] transition
                              "
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="
                    text-[#f1ede0] font-serif text-lg
                    hover:text-[#c2953e] transition-colors
                  "
                >
                  {item.label}
                </Link>
              )}
            </div>
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
                  {item.dropdown ? (
                    <>
                      <div
                        className="
                          block w-full px-6 py-3 text-[#f1ede0] font-serif
                          flex justify-between items-center
                          hover:bg-[#ffffff11] hover:text-[#c2953e] transition
                        "
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </div>
                      <div className="pl-8 border-l border-[#ffffff22] ml-10">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileOpen(false)}
                            className="
                              block w-full px-6 py-2 text-[#f1ede0] font-serif text-sm
                              hover:bg-[#ffffff11] hover:text-[#c2953e] transition
                            "
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
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
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}