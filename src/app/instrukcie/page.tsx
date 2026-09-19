import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Instructions from "@/components/Instructions";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inštrukcie | Róbert & Alexandra 25.9.2026",
  description:
    "Všetko dôležité k svadbe na jednom mieste – parkovanie, presun do Stodoly, program dňa a ubytovanie.",
};

export default function InstrukciePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Instructions />
      </main>
      <Footer />
    </>
  );
}
