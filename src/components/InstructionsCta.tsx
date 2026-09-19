import Link from "next/link";

export default function InstructionsCta() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-burgundy rounded-lg p-8 md:p-10 text-center shadow-lg">
          <h2 className="font-playfair text-3xl text-white mb-3">
            Inštrukcie na deň svadby
          </h2>
          <p className="text-white/85 text-lg leading-relaxed max-w-xl mx-auto mb-7">
            Kde zaparkovať, ako sa dostanete do Stodoly, čo kedy bude a kde
            budete spať – všetko podstatné sme dali na jedno miesto.
          </p>
          <Link
            href="/instrukcie"
            className="inline-block px-8 py-3 rounded-full bg-white text-burgundy font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Pozrieť inštrukcie
          </Link>
        </div>
      </div>
    </section>
  );
}
