import Image from "next/image";

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
            <div className="aspect-video relative">
              <Image
                src="/lipka.jpg"
                alt="Stredisko Lipka v Bardejove"
                fill
                className="object-cover"
              />
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

          {/* Zornička */}
          <div className="bg-cream rounded-lg overflow-hidden shadow-md border border-burgundy/10">
            <div className="aspect-video relative">
              <Image
                src="/zornicka.png"
                alt="Penzión Zornička v Bardejovských Kúpeľoch"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-playfair text-xl text-burgundy mb-3">
                Penzión Zornička
              </h3>
              <div className="flex items-start gap-2 text-dark/80 text-sm mb-4">
                <svg className="w-4 h-4 text-burgundy mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Bardejovské Kúpele 2874/87</span>
              </div>
              <a
                href="https://zornickabj.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-burgundy font-semibold hover:underline text-sm"
              >
                zornickabj.com →
              </a>
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
