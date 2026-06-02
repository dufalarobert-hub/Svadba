export default function Schedule() {
  const schedule = [
    { time: "14:30", event: "Príchod hostí pred kostol", icon: "couple" },
    { time: "15:00", event: "Začiatok obradu", icon: "church" },
    { time: "16:00", event: "Presun do Stodoly", icon: "car" },
    { time: "16:00 - 17:00", event: "Recepcia", icon: "reception" },
    { time: "17:15", event: "Príchod novomanželov", icon: "couple" },
    { time: "17:30", event: "Hostina a začiatok zábavy", icon: "party" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "church":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        );
      case "car":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h8m-8 4h8m-6 4h4M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        );
      case "party":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          />
        );
      case "music":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        );
      case "reception":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        );
      case "couple":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        );
      default:
        return null;
    }
  };

  return (
    <section id="organizacia" className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Ako to bude prebiehať</h2>
        <p className="section-subtitle">
          Harmonogram nášho veľkého dňa
        </p>

        <p className="text-center text-dark/70 italic max-w-2xl mx-auto -mt-8 mb-12">
          Bližšie organizačné informácie vám dáme vedieť v dostatočnom
          predstihu pred svadbou.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-burgundy/20 -translate-x-1/2" />

          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 pl-20 md:pl-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md border border-burgundy/10">
                    <span className="font-playfair text-2xl text-burgundy font-semibold">
                      {item.time}
                    </span>
                    <p className="text-dark mt-2">{item.event}</p>
                  </div>
                </div>

                {/* Icon circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-burgundy flex items-center justify-center shadow-lg z-10">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {getIcon(item.icon)}
                  </svg>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Transport info */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md border border-burgundy/10 text-center">
          <h3 className="font-playfair text-xl text-burgundy mb-3">
            Presun z obradu na hostinu
          </h3>
          <p className="text-dark/80">
            Z Baziliky sv. Egídia na Radničnom námestí je to do Stodoly len{" "}
            <strong>5 minút autom</strong> (2 km).
          </p>
          <p className="text-dark/80 mt-2">
            Každý sa presunie <strong>autami</strong> – parkovanie je k dispozícii priamo pri reštaurácii.
          </p>
        </div>
      </div>
    </section>
  );
}
