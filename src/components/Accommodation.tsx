export default function Accommodation() {
  return (
    <section id="ubytovanie" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Kde prenocovať</h2>

        {/* Intro text */}
        <div className="bg-cream p-8 rounded-lg mb-12 text-center">
          <p className="text-dark/80 text-lg mb-4">
            Pre všetkých, ktorí by chceli osláviť s nami až do rána (a možno aj trochu dlhšie),
            sme vybrali príjemné ubytovanie v blízkosti miesta konania.
          </p>
          <p className="text-burgundy font-medium">
            Hosťom mimo Bardejova odporúčame pre vlastné pohodlie prísť už vo štvrtok večer.
          </p>
        </div>

        {/* Accommodation cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Lipka */}
          <div className="bg-cream rounded-lg overflow-hidden shadow-md border border-burgundy/10">
            <div className="aspect-video bg-burgundy/10 flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="w-12 h-12 mx-auto text-burgundy/30 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-burgundy/50 text-sm">Fotka Lipky</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl text-burgundy mb-3">
                Stredisko Lipka
              </h3>
              <div className="flex items-start gap-2 text-dark/80 text-sm mb-4">
                <svg className="w-4 h-4 text-burgundy mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Duklianska 2988, Bardejov</span>
              </div>
              <a
                href="https://strediskolipka.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy font-semibold hover:underline text-sm"
              >
                strediskolipka.sk →
              </a>
            </div>
          </div>

          {/* Second accommodation - placeholder */}
          <div className="bg-cream rounded-lg overflow-hidden shadow-md border border-burgundy/10 border-dashed">
            <div className="aspect-video bg-burgundy/5 flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="w-12 h-12 mx-auto text-burgundy/20 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-burgundy/40 text-sm">Ďalšie ubytovanie</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl text-burgundy/50 mb-3">
                Čoskoro doplníme
              </h3>
              <p className="text-dark/50 text-sm">
                Pracujeme na zabezpečení ďalšieho ubytovania pre vás. Informácie doplníme čoskoro.
              </p>
            </div>
          </div>
        </div>

        {/* Možnosti ubytovania */}
        <div className="mt-12 text-center">
          <h3 className="font-playfair text-xl text-burgundy mb-4">
            Možnosti ubytovania
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-cream px-6 py-4 rounded-lg border border-burgundy/20">
              <span className="font-semibold text-burgundy">Štvrtok – Sobota</span>
              <p className="text-sm text-dark/70 mt-1">Pre tých, čo chcú viac času v Bardejove</p>
            </div>
            <div className="bg-cream px-6 py-4 rounded-lg border border-burgundy/20">
              <span className="font-semibold text-burgundy">Piatok – Sobota</span>
              <p className="text-sm text-dark/70 mt-1">Klasická voľba</p>
            </div>
          </div>
                  </div>
      </div>
    </section>
  );
}
