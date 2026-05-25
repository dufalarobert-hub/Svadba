export default function Transport() {
  return (
    <section id="doprava" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Doprava do Bardejova</h2>

        <div className="bg-cream rounded-lg p-8 md:p-10 shadow-md border border-burgundy/10">
          <div className="flex justify-center mb-6">
            <svg
              className="w-12 h-12 text-burgundy"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1"
              />
            </svg>
          </div>

          <p className="text-dark/90 text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Dopravu do Bardejova nezabezpečujeme, radi vám však pomôžeme
            s organizáciou odvozu tak, aby ste sa bez problémov dostali
            tam aj naspäť.
          </p>

          <p className="text-dark/80 mt-6 text-center max-w-2xl mx-auto">
            Najjednoduchší spôsob bude cestovať{" "}
            <span className="font-semibold text-burgundy">autom</span>, prípadne
            sa pridať k niekomu, kto bude mať voľné miesto. Z Prahy a Bratislavy
            sa na východ dostanete aj{" "}
            <span className="font-semibold text-burgundy">letecky do Košíc</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
