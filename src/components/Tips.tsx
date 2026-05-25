type Tip = {
  name: string;
  meta?: string;
  description: string;
};

const restaurants: Tip[] = [
  {
    name: "Reštaurácia Bašta",
    meta: "Bardejov, centrum",
    description: "Tradičná slovenská kuchyňa v historickej budove pri námestí.",
  },
  {
    name: "Stredoveká krčma",
    meta: "Bardejov, centrum",
    description: "Stredoveká atmosféra a sýte porcie — pravý zážitok.",
  },
  {
    name: "Pizzeria Avalon",
    meta: "Bardejov, centrum",
    description: "Klasická pec pizza pre rýchle a chutné jedlo.",
  },
  {
    name: "Café Tipico",
    meta: "Bardejov, centrum",
    description: "Príjemná kaviareň na námestí — káva, koláče, raňajky.",
  },
  {
    name: "Café La Belle",
    meta: "Bardejov",
    description: "Útulný interiér, výborné dezerty.",
  },
];

const around: Tip[] = [
  {
    name: "UNESCO centrum Bardejova",
    meta: "5 min autom",
    description: "Najkrajšie námestie na Slovensku, Bazilika sv. Egídia, historická radnica.",
  },
  {
    name: "Bardejovské Kúpele",
    meta: "10 min autom",
    description: "Historické kúpele, kde sa liečila cisárovná Sisi. Kolonáda s liečivou vodou.",
  },
  {
    name: "Hrad Zborov (Makovica)",
    meta: "12 min + 35 min pešo",
    description: "Nenáročná túra k jednej z najväčších zrúcanín na Slovensku.",
  },
  {
    name: "Skanzen Bardejovské Kúpele",
    meta: "10 min autom",
    description: "Najstarší skanzen na Slovensku — drevené chalúpky a kostolíky.",
  },
  {
    name: "Drevený kostolík Hervartov",
    meta: "15 min autom",
    description: "UNESCO pamiatka — najstarší drevený kostol na Slovensku.",
  },
  {
    name: "Wellness Hotel Ozón",
    meta: "10 min autom",
    description: "Moderný wellness s bazénmi a saunami.",
  },
];

const onTheWay: Tip[] = [
  {
    name: "Vysoké Tatry",
    meta: "cca 2 h od Bardejova",
    description: "Najvyššie štíty Slovenska — lanovky, túry, panorámy.",
  },
  {
    name: "Čutkovská dolina",
    meta: "cca 3 h od Bardejova",
    description: "Skvelé halušky, prechádzka popri jazere v Liptove.",
  },
  {
    name: "Terchová a Vrátna",
    meta: "cca 3,5 h od Bardejova",
    description: "Príjemná turistika v Malej Fatre, rodisko Jánošíka.",
  },
  {
    name: "Súľovské skaly",
    meta: "cca 4 h od Bardejova",
    description: "Skalné mesto a okruh cez Súľovský hrad.",
  },
  {
    name: "Spišský hrad",
    meta: "cca 1,5 h od Bardejova",
    description: "Najväčší hradný komplex v strednej Európe — UNESCO.",
  },
];

const googleMapsRoute =
  "https://www.google.com/maps/dir/Brno/Súľovské+skaly/Terchová/Čutkovská+dolina,+Ružomberok/Vysoké+Tatry/Spišský+hrad/Bardejov";

function TipColumn({
  title,
  description,
  tips,
}: {
  title: string;
  description: string;
  tips: Tip[];
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        <h3 className="font-playfair text-xl text-burgundy font-semibold mb-2">
          {title}
        </h3>
        <p className="text-dark/60 text-sm">{description}</p>
      </div>
      <div className="space-y-3 flex-1">
        {tips.map((tip) => (
          <div
            key={tip.name}
            className="bg-white rounded-lg p-4 shadow-sm border border-burgundy/10 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="font-playfair text-base text-burgundy font-semibold leading-tight">
                {tip.name}
              </h4>
            </div>
            {tip.meta && (
              <p className="text-burgundy/70 text-xs font-medium mb-2">
                {tip.meta}
              </p>
            )}
            <p className="text-dark/70 text-sm leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Tips() {
  return (
    <section id="tipy" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Čo robiť v okolí</h2>
        <p className="section-subtitle">
          Ak prídete skôr alebo zostanete dlhšie, tu je pár tipov
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <TipColumn
            title="Reštaurácie a kaviarne"
            description="V Bardejove a okolí"
            tips={restaurants}
          />
          <TipColumn
            title="Okolie Bardejova"
            description="Tipy v dosahu pár minút"
            tips={around}
          />
          <TipColumn
            title="Cesta do Bardejova"
            description="Zastávky, ktoré stoja za odbočku"
            tips={onTheWay}
          />
        </div>

        {/* Mapa trasy Brno → Bardejov */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-md border border-burgundy/10">
          <div className="text-center mb-6">
            <h3 className="font-playfair text-xl text-burgundy font-semibold mb-2">
              Trasa Brno → Bardejov
            </h3>
            <p className="text-dark/70 text-sm max-w-2xl mx-auto">
              Tipy na cestu sme vyznačili na mape ako zastávky popri trase.
              Kliknite a otvorte si trasu v Google Maps.
            </p>
          </div>

          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-burgundy/10 mb-6 bg-cream">
            <iframe
              title="Trasa Brno - Bardejov"
              src="https://maps.google.com/maps?q=Brno+to+Bardejov&t=&z=7&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="text-center">
            <a
              href={googleMapsRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy text-white font-semibold shadow-md hover:bg-burgundy-dark hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Otvoriť celú trasu v Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-dark/60 text-sm">
            Pre viac informácií o okolí Bardejova navštívte{" "}
            <a
              href="https://visitbardejov.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy hover:underline"
            >
              visitbardejov.sk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
