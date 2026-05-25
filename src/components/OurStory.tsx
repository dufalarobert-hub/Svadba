"use client";

import Image from "next/image";
import { useRef } from "react";

const storyPhotos = [
  { src: "/pribeh-1.png", alt: "Náš príbeh — prvá správa" },
  { src: "/pribeh-2.png", alt: "Náš príbeh — spolu v bare" },
  { src: "/pribeh-3.png", alt: "Náš príbeh — zásnubný prsteň" },
  { src: "/pribeh-4.png", alt: "Náš príbeh — na štadióne" },
];

export default function OurStory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.7 * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id="nas-pribeh" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Náš príbeh</h2>

        <p className="text-dark/85 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Náš príbeh sa možno nezačal tak romanticky ako iné love story.
          Stretli sme sa v momente, keď to nikto z nás nečakal, no prijatie
          pozvania na <span className="font-semibold text-burgundy">Gambačik 10ku</span>{" "}
          bolo jedno z najlepších rozhodnutí. Odvtedy sme jeden v druhom našli
          domov, pochopenie a bezpečie byť sami sebou. Naučili sme sa podporovať
          sa v tom, čo milujeme, rešpektovať svet toho druhého a vedieť, že
          nech sa deje čokoľvek, vždy stojíme jeden pri druhom.
        </p>

        <div className="relative">
          {/* Carousel — scroll-snap */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {storyPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className="snap-center flex-shrink-0 w-56 sm:w-64 md:w-72"
              >
                <div className="burgundy-frame">
                  <div className="aspect-square relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-center text-burgundy/60 text-xs mt-2 font-playfair">
                  {i + 1} / {storyPhotos.length}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Predchádzajúca fotka"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Ďalšia fotka"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="text-center text-dark/50 text-sm mt-4 sm:hidden">
          ← potiahnite pre ďalšiu fotku →
        </p>
      </div>
    </section>
  );
}
