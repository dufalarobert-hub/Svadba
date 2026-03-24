"use client";

import { useState, useEffect } from "react";

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
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20"
    >
      {/* Placeholder for hero image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-cream via-cream to-burgundy/5" />
        {/* When you have the image, replace with:
        <Image src="/hero.jpg" alt="Róbert a Alexandra" fill className="object-cover opacity-30" />
        */}
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Names */}
        <h1 className="font-great-vibes text-6xl sm:text-7xl md:text-8xl text-burgundy mb-4">
          Róbert & Alexandra
        </h1>

        {/* Subtitle */}
        <p className="font-playfair text-xl sm:text-2xl text-dark/80 mb-2">
          Vydávame sa!
        </p>

        {/* Date */}
        <p className="font-playfair text-2xl sm:text-3xl text-burgundy font-semibold mb-12">
          25. september 2026
        </p>

        {/* Countdown */}
        {mounted && (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-burgundy/20 min-w-[80px]">
              <span className="font-playfair text-3xl sm:text-4xl font-bold text-burgundy block">
                {timeLeft.days}
              </span>
              <span className="text-sm text-dark/70">dní</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-burgundy/20 min-w-[80px]">
              <span className="font-playfair text-3xl sm:text-4xl font-bold text-burgundy block">
                {timeLeft.hours}
              </span>
              <span className="text-sm text-dark/70">hodín</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-burgundy/20 min-w-[80px]">
              <span className="font-playfair text-3xl sm:text-4xl font-bold text-burgundy block">
                {timeLeft.minutes}
              </span>
              <span className="text-sm text-dark/70">minút</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg border border-burgundy/20 min-w-[80px]">
              <span className="font-playfair text-3xl sm:text-4xl font-bold text-burgundy block">
                {timeLeft.seconds}
              </span>
              <span className="text-sm text-dark/70">sekúnd</span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <a
          href="#rsvp"
          className="inline-block px-8 py-4 rounded-full bg-burgundy text-white font-semibold text-lg shadow-lg hover:bg-burgundy-dark hover:scale-105 transition-all"
        >
          Potvrdiť účasť
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-burgundy"
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
      </div>
    </section>
  );
}
