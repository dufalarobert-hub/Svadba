export default function Ceremony() {
  return (
    <section id="obrad" className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Obrad</h2>
        <p className="section-subtitle">
          Sľúbime si lásku v jednom z najkrajších gotických kostolov na Slovensku
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image placeholder */}
          <div className="burgundy-frame">
            <div className="aspect-[4/3] bg-white flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="w-16 h-16 mx-auto text-burgundy/30 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-burgundy/50 text-sm">Fotka Baziliky sv. Egídia</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-2xl text-burgundy mb-4">
                Bazilika sv. Egídia
              </h3>
              <p className="text-dark/80 mb-4">
                Bazilika sv. Egídia sa pyšní históriou siahajúcou do 13. storočia a je súčasťou svetového dedičstva UNESCO. V roku 2001 bola povýšená pápežom Jánom Pavlom II. na baziliku minor.
              </p>
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
                  <span className="font-semibold text-dark">Čas</span>
                  <p className="text-dark/80">14:00</p>
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
                  <p className="text-dark/80">Radničné námestie č. 3</p>
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
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-dark">Parkovanie</span>
                  <p className="text-dark/80">V okolí námestia</p>
                </div>
              </div>
            </div>

            {/* Google Maps link */}
            <a
              href="https://maps.google.com/?q=Bazilika+sv.+Egídia+Bardejov"
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
        </div>
      </div>
    </section>
  );
}
