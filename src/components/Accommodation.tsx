export default function Accommodation() {
  return (
    <section id="ubytovanie" className="py-20 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Kde prenocovať</h2>

        <div className="bg-white rounded-lg p-8 md:p-10 shadow-md border border-burgundy/10">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>

          <div className="space-y-5 text-dark/90 text-lg leading-relaxed">
            <p>
              Pre všetkých nebardejovčanov, ktorí za nami cestujú a chceli by
              s nami osláviť až do rána (a možno aj trochu dlhšie), sme vybrali
              príjemné ubytovanie v blízkosti miesta konania, a to v{" "}
              <span className="font-semibold text-burgundy">stredisku Lipka</span>{" "}
              a{" "}
              <span className="font-semibold text-burgundy">penzióne Zornička</span>.
            </p>

            <p>
              Hosťom mimo Bardejova odporúčame pre vlastné pohodlie prísť už{" "}
              <span className="font-semibold">vo štvrtok večer</span>.
            </p>

            <p>
              Ubytovanie vám{" "}
              <span className="font-semibold text-burgundy">
                zarezervujeme my
              </span>{" "}
              na základe vašej odpovede vo formulári v potvrdení účasti.
            </p>
          </div>

          {/* Termíny */}
          <div className="mt-10 pt-8 border-t border-burgundy/10">
            <h3 className="font-playfair text-lg text-burgundy text-center mb-4">
              Vyberte si termín vo formulári
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-cream px-5 py-3 rounded-lg border border-burgundy/20">
                <span className="font-semibold text-burgundy text-sm">
                  Štvrtok – Sobota
                </span>
              </div>
              <div className="bg-cream px-5 py-3 rounded-lg border border-burgundy/20">
                <span className="font-semibold text-burgundy text-sm">
                  Piatok – Sobota
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
