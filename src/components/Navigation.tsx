"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#uvod", label: "Úvod" },
  { href: "#nas-pribeh", label: "Náš príbeh" },
  { href: "#obrad", label: "Obrad" },
  { href: "#hostina", label: "Hostina" },
  { href: "#organizacia", label: "Organizácia" },
  { href: "#ubytovanie", label: "Ubytovanie" },
  { href: "#tipy", label: "Tipy v okolí" },
  { href: "#dresscode", label: "Dresscode" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Names */}
        <a
          href="#uvod"
          className="font-great-vibes text-2xl text-burgundy hover:text-burgundy-dark transition-colors"
        >
          R & A
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-dark hover:text-burgundy transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#rsvp"
            className="px-5 py-2 rounded-full bg-burgundy text-white font-semibold text-sm shadow-md hover:bg-burgundy-dark hover:scale-105 transition-all"
          >
            Potvrdiť účasť
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-burgundy text-white"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full bg-cream/98 backdrop-blur-md shadow-xl border-t border-burgundy/10">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-dark hover:text-burgundy transition-colors py-2 border-b border-burgundy/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-5 py-3 rounded-full bg-burgundy text-white font-semibold text-center shadow-md hover:bg-burgundy-dark transition-all"
            >
              Potvrdiť účasť
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
