"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WEDDING_DATE = new Date("2026-09-25T14:00:00");

function calculateTimeLeft() {
  const now = new Date();
  const difference = WEDDING_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="uvod"
      className="min-h-screen flex flex-col items-center relative overflow-hidden bg-black"
    >
      {/* Hero Photo - native 16:9, no cropping */}
      <div className="relative w-full aspect-[16/9] flex-shrink-0">
        <Image
          src="/hero.jpg"
          alt="Róbert a Alexandra"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Bottom fade to black — blends photo into section bg */}
        <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Content on black, pulled up just slightly over fade */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start text-center px-4 pt-8 pb-20 w-full">
        <div className="max-w-3xl w-full">
          {/* Names */}
          <h1 className="font-great-vibes text-5xl sm:text-7xl md:text-8xl text-cream mb-3 leading-tight drop-shadow-lg">
            Róbert &amp; Alexandra
          </h1>

          {/* Date */}
          <p className="font-playfair text-lg sm:text-2xl text-cream/90 font-medium tracking-wide mb-10">
            25. september 2026
            <span className="text-cream/40 mx-2">·</span>
            Bardejov
          </p>

          {/* Countdown */}
          {mounted && (
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-10">
              {[
                { value: timeLeft.days, label: "dní" },
                { value: timeLeft.hours, label: "hodín" },
                { value: timeLeft.minutes, label: "minút" },
                { value: timeLeft.seconds, label: "sekúnd" },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-5 shadow-lg border border-cream/15 min-w-[68px] sm:min-w-[88px]"
                >
                  <span className="font-playfair text-2xl sm:text-4xl font-bold text-cream block">
                    {unit.value}
                  </span>
                  <span className="text-xs sm:text-sm text-cream/70">{unit.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <a
            href="#rsvp"
            className="inline-block px-8 py-4 rounded-full bg-burgundy text-white font-semibold text-lg shadow-lg hover:bg-burgundy-dark hover:scale-105 transition-all"
          >
            Potvrdiť účasť
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-cream/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
