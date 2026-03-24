const tips = [
  {
    name: "UNESCO Centrum Bardejova",
    distance: "5 min autom",
    description: "Najkrajšie námestie na Slovensku, Bazilika sv. Egídia, historická radnica",
  },
  {
    name: "Bardejovské Kúpele",
    distance: "10 min autom",
    description: "Historické kúpele kde sa liečila cisárovná Sisi, kolonáda s liečivou vodou",
  },
  {
    name: "Hrad Zborov (Makovica)",
    distance: "12 min + 35 min pešo",
    description: "Nenáročná túra k jednej z najväčších zrúcanín na Slovensku",
  },
  {
    name: "Skanzen",
    distance: "10 min autom",
    description: "Najstarší skanzen na Slovensku, drevené chalúpky a kostolíky",
  },
  {
    name: "Drevený kostolík Hervartov",
    distance: "15 min autom",
    description: "UNESCO pamiatka - najstarší drevený kostol na Slovensku",
  },
  {
    name: "Wellness Hotel Ozón",
    distance: "10 min autom",
    description: "Moderný wellness s bazénmi a saunami",
  },
];

export default function Tips() {
  return (
    <section id="tipy" className="py-20 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Čo robiť v okolí</h2>
        <p className="section-subtitle">
          Ak prídete skôr alebo zostanete dlhšie, tu je pár tipov
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-burgundy/10 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-playfair text-lg text-burgundy font-semibold">
                  {tip.name}
                </h3>
              </div>
              <p className="text-burgundy/70 text-sm font-medium mb-2">
                {tip.distance}
              </p>
              <p className="text-dark/70 text-sm">
                {tip.description}
              </p>
            </div>
          ))}
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
