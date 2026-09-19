import Image from "next/image";

const program = [
  {
    time: "13:30",
    title: "Príchod k Bazilike sv. Egídia",
    note: "Autá prosím zaparkujte v okolí námestia. Pred Bazilikou vás bude čakať malé občerstvenie a niečo na zahriatie.",
  },
  {
    time: "14:00 – 14:45",
    title: "Obrad",
    note: "Po skončení obradu nemáme klasické gratulácie. Gratuláciu nám budete môcť zanechať až v Stodole – na video alebo ako odkaz na obraz. Takto si vytvoríme trvácnu spomienku. Družičky vás nasmerujú. Ďakujeme!",
  },
  {
    time: "14:45 – 15:15",
    title: "Fotenie",
    note: "Po obrade budeme mať priestor na skupinové fotky. Radi by sme vytvorili niekoľko väčších skupín. Fotografka ich bude vyhlasovať.",
  },
  {
    time: "15:15",
    title: "Presun do Stodoly",
    note: "Prosím použite na presun vaše autá, ktorými ste prišli ku Bazilike. Budeme vďační, pokiaľ prevezmete aj hostí, ktorí sú bez auta. Ďakujeme!",
  },
  {
    time: "15:30 – 16:30",
    title: "Recepcia v Stodole",
    note: "Party warm up. Recepcia sa koná vo vonkajších priestoroch Stodoly. Občerstvite sa, dajte si welcome drink, zanechajte nám gratuláciu na video alebo odkaz na obraz a pripravte sa na oslavu!",
  },
  {
    time: "16:30",
    title: "Príchod novomanželov",
    note: "Dufaloviiiiiiiiiii",
  },
  {
    time: "17:00",
    title: "Privítanie hostí a príhovory",
    note: "Príhovory svedkov a odvážlivcov?",
  },
  {
    time: "17:30",
    title: "Večera",
    note: "Dobrú chuť!",
  },
  {
    time: "18:30",
    title: "Prvý manželský tanec a otvorenie parketu",
    note: "Pokúsime sa vás ohúriť našou choreo. Možno to bude freestyle a možno nie.",
  },
  {
    time: "20:30",
    title: "Sľúbili sme punčáky, budú punčáky!",
    note: "Budeme radi, keď vezmete ku krájaniu torty prskavky a prídete za nami. Prskavky vám rozdajú družičky.",
  },
  {
    time: "22:00",
    title: "Začiatok bufetových stolov",
    note: "Všetci zo „západu“ ochutnajte máčanku! A samozrejme pirohy.",
  },
  {
    time: "22:30",
    title: "Borovička cup",
    note: "Tradícia z malej dediny pri Žiline to dotiahne v upravenej forme až na svadbu do Bardejova. Pripravte si súťažného ducha a chuť na borovičku.",
  },
  {
    time: "00:00",
    title: "Čepčenie",
    note: "",
  },
];

const lipkaHostia = [
  "Adam Laurenčík",
  "Alica Buchová",
  "Alice Stuchlíková",
  "Andrea Hlavenková",
  "Andrea Měchurová",
  "Andrej Grajciar",
  "Dan Drábek",
  "Jachym Vaněk",
  "Jiří Štaffa",
  "Karel Fischer",
  "Katka Keprtová",
  "Kristýna Randus",
  "Lucie Hajnová",
  "Lukáš Měchura",
  "Michal Presse",
  "Nina Mlynáriková",
  "Petra Dubovská",
  "Soňa Měchurová",
  "Štěpán Kučera",
  "Tomáš Měchura",
  "Vanesa Sklárčíková",
  "Veronika Letková",
];

const zornickaHostia = [
  "Adam Štefanec",
  "Alenka Kianicová",
  "Alojz Vykloukal",
  "Andrea Smetanová",
  "Anna Pollino",
  "Barbora Bartlová",
  "Danka Vaneková",
  "Denisa Kianicová",
  "Dominik Hašek",
  "Dominika Leváková",
  "Filip Zeman",
  "Janka Gregorová",
  "Lenka Harciniková",
  "Lucia Gregorová",
  "Lukáš Levák",
  "Maria Hašek",
  "Martin Bartl",
  "Martin Kmeť",
  "Martin Švábek",
  "Martina Gregorová",
  "Matúš Ďurajka",
  "Miloš Gregor",
  "Radovan Kianica",
  "Richard Vojtech",
  "Róbert Ďurajka",
  "Soňa Kmeťová",
  "Stanislav Mištrík",
  "Tereza Smetanová",
  "Tibor Škorvánek",
  "Václav Smetana",
  "Viera Vykloukalová",
  "Vladimír Kianica",
  "Zora Fáziková",
];

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-lg p-7 md:p-9 shadow-md border border-burgundy/10">
      <h3 className="font-playfair text-2xl text-burgundy mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function Instructions() {
  return (
    <section id="instrukcie" className="pt-10 pb-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Inštrukcie</h2>
        <p className="section-subtitle">
          Všetko dôležité na jednom mieste
        </p>

        <div className="space-y-6">
          {/* Úvod */}
          <div className="bg-cream rounded-lg p-7 md:p-9 border border-burgundy/10 text-dark/90 text-lg leading-relaxed space-y-4">
            <p>
              Ďakujeme, že si na nás v ten deň spravíte čas a prídete ho
              osláviť s nami. Znamená to pre nás naozaj veľa.
            </p>
            <p>
              Aby ste sa nemuseli nič pýtať a mohli si to hlavne užiť, dali
              sme sem všetko podstatné – kde zaparkovať, ako sa dostať do
              Stodoly, čo kedy bude a kde budete spať.
            </p>
          </div>

          {/* Parkovanie */}
          <Card title="Parkovanie pri Bazilike">
            <div className="space-y-4 text-dark/90 leading-relaxed">
              <p>
                Parkovanie okolo celého Radničného námestia je{" "}
                <strong>platené</strong>. Pár tipov, kde zaparkovať:
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex gap-3">
                  <span className="text-burgundy font-bold">•</span>
                  <span>
                    <strong>Parkovisko XAWAX</strong> – na mape vpravo hore
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-burgundy font-bold">•</span>
                  <span>
                    <strong>Parkovisko pri Republic Hotel Club</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-burgundy font-bold">•</span>
                  <span>
                    Priamo na námestí sa zmestí ešte{" "}
                    <strong>8 – 10 áut</strong> – miesta sú na mape vyznačené
                    červenou
                  </span>
                </li>
              </ul>

              <div className="burgundy-frame rounded-lg overflow-hidden mt-5">
                <Image
                  src="/parkovanie.jpg"
                  alt="Mapa parkovania okolo Radničného námestia v Bardejove"
                  width={1400}
                  height={1150}
                  className="w-full h-auto rounded"
                />
              </div>
              <p className="text-sm text-dark/60 text-center">
                Červenou sú vyznačené odporúčané parkovacie miesta.
              </p>
            </div>
          </Card>

          {/* Presun */}
          <Card title="Presun do Stodoly">
            <div className="space-y-4 text-dark/90 leading-relaxed">
              <p>
                Hostina sa koná v{" "}
                <strong className="text-burgundy">
                  Reštaurácii Stodola Bardejov
                </strong>
                , Duklianska 3471, Bardejov. Z Radničného námestia je to{" "}
                <strong>asi 10 minút autom</strong>.
              </p>
              <p>
                Na presun prosím použite autá, ktorými ste prišli ku Bazilike.
                Budeme vďační, ak zoberiete aj niekoho, kto je bez auta.
              </p>
              <p className="bg-cream rounded-md p-4 border-l-4 border-burgundy">
                <strong>Auto odporúčame nechať pri Stodole.</strong> Parkovanie
                je priamo pri reštaurácii a odvozy na ubytovanie máme
                vybavené – nemusíte teda riešiť, ako sa dostanete spať.
              </p>
            </div>
          </Card>

          {/* Ubytovanie */}
          <Card title="Kde budete spať">
            <div className="space-y-5 text-dark/90 leading-relaxed">
              <p>
                Ubytovanie máme zarezervované v dvoch penziónoch, oba sú na
                dosah od Stodoly. <strong>Odvozy sú vybavené</strong>, takže sa
                o nič nestarajte.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-cream rounded-lg p-5 border border-burgundy/10">
                  <h4 className="font-playfair text-xl text-burgundy mb-1">
                    Penzión Lipka
                  </h4>
                  <p className="text-sm text-dark/70">Duklianska 2988, Bardejov</p>
                  <p className="text-sm text-dark/70 mt-1">
                    <strong>10 minút pešo</strong> od Stodoly
                  </p>
                </div>
                <div className="bg-cream rounded-lg p-5 border border-burgundy/10">
                  <h4 className="font-playfair text-xl text-burgundy mb-1">
                    Penzión Zornička
                  </h4>
                  <p className="text-sm text-dark/70">
                    Bardejovské Kúpele 2874/87, Bardejov
                  </p>
                  <p className="text-sm text-dark/70 mt-1">
                    <strong>20 minút pešo</strong> od Stodoly
                  </p>
                </div>
              </div>

              <div className="bg-burgundy/5 rounded-md p-5 border-l-4 border-burgundy">
                <p>
                  Noc <strong>z piatka na sobotu hradíme my</strong> – berte to
                  ako naše poďakovanie za to, že ste prišli. Ak by ste to chceli
                  nejako zohľadniť pri svadobnom dare, potešíme sa, ale nie je
                  to nič, čo by sme očakávali. Hlavné je, že tam s nami budete.
                </p>
              </div>

              <div>
                <h4 className="font-playfair text-lg text-burgundy mb-3">
                  Kto kde spí
                </h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-dark mb-2 text-sm uppercase tracking-wide">
                      Lipka
                    </p>
                    <ul className="text-[15px] text-dark/80 space-y-1">
                      {lipkaHostia.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-dark mb-2 text-sm uppercase tracking-wide">
                      Zornička
                    </p>
                    <ul className="text-[15px] text-dark/80 space-y-1">
                      {zornickaHostia.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-dark/60 mt-4">
                  Konkrétne izby vám povieme na mieste. Ak by vám niečo
                  nesedelo, ozvite sa nám.
                </p>
              </div>
            </div>
          </Card>

          {/* Gratulácie */}
          <Card title="Gratulácie">
            <div className="space-y-4 text-dark/90 leading-relaxed">
              <p>
                Po obrade <strong>nebudeme mať klasické gratulácie</strong> pred
                kostolom. Namiesto toho nám gratuláciu zanecháte až v Stodole –
                nahráte nám ju <strong>na video</strong> alebo napíšete{" "}
                <strong>odkaz na obraz</strong>.
              </p>
              <p>
                Chceli by sme z toho mať spomienku, ku ktorej sa budeme vracať
                aj o pár rokov. Družičky vás na mieste nasmerujú. Ďakujeme!
              </p>
            </div>
          </Card>

          {/* Program */}
          <Card title="Program dňa">
            <ol className="space-y-5">
              {program.map((item) => (
                <li
                  key={item.time}
                  className="border-l-2 border-burgundy/25 pl-5"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-playfair text-burgundy font-semibold text-lg">
                      {item.time}
                    </span>
                    <span className="font-semibold text-dark">
                      {item.title}
                    </span>
                  </div>
                  {item.note && (
                    <p className="text-dark/70 text-[15px] leading-relaxed mt-1">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </Card>

        </div>
      </div>
    </section>
  );
}
