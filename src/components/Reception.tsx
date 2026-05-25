import Image from "next/image";

export default function Reception() {
  return (
    <section id="hostina" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Hostina</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Info - reversed order on desktop */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h3 className="font-playfair text-2xl text-burgundy mb-4">
                Reštaurácia Stodola
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-burgundy mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-dark">Čas začiatku</span>
                  <p className="text-dark/80">17:30</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-burgundy mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-dark">Adresa</span>
                  <p className="text-dark/80">Duklianska 1399</p>
                  <p className="text-dark/80">085 01 Bardejov</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-burgundy mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-dark">Vzdialenosť od kostola</span>
                  <p className="text-dark/80">~2 km (5 minút autom)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-burgundy mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-dark">Parkovanie</span>
                  <p className="text-dark/80">Priamo pri reštaurácii</p>
                </div>
              </div>
            </div>

            {/* Google Maps link */}
            <a
              href="https://maps.google.com/?q=Reštaurácia+Stodola+Bardejov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-burgundy text-burgundy font-semibold hover:bg-burgundy hover:text-white transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Otvoriť v mape
            </a>
          </div>

          {/* Image */}
          <div className="burgundy-frame order-1 md:order-2">
            <div className="aspect-[4/3] relative">
              <Image
                src="/stodola.jpg"
                alt="Reštaurácia Stodola v Bardejove"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
