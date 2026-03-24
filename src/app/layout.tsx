import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Róbert & Alexandra | 25.9.2026",
  description: "Svadobná stránka - Róbert Dufala & Alexandra Ďurajková. Tešíme sa na vás v Bardejove!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream text-dark font-lato">
        {children}
      </body>
    </html>
  );
}
