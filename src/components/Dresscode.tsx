export default function Dresscode() {
  return (
    <section id="dresscode" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title">Čo na seba</h2>

        <div className="bg-cream p-8 md:p-12 rounded-lg">
          {/* Icons */}
          <div className="flex justify-center gap-8 mb-8">
            {/* Dress icon */}
            <div className="text-burgundy">
              <svg
                className="w-20 h-20 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 2C10.5 2 9 3 9 4.5V5l-3 3v3l2 1v9h8v-9l2-1V8l-3-3v-.5C15 3 13.5 2 12 2z"
                />
              </svg>
            </div>
            {/* Suit icon */}
            <div className="text-burgundy">
              <svg
                className="w-20 h-20 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 2l3 3v2l4 2v12H5V9l4-2V5l3-3zm0 0v6m-3 0h6"
                />
              </svg>
            </div>
          </div>

          <p className="text-lg text-dark/90 leading-relaxed">
            Dresscode nemáme pevne stanovený. Chceme, aby ste sa cítili príjemne
            a obliekli si niečo slávnostné, v čom sa budete cítiť dobre
            a pripravení ovládnuť parket. Ak budete chcieť doladiť outfit
            k atmosfére nášho dňa, potešia nás{" "}
            <span className="font-playfair font-semibold text-burgundy">
              elegantné tmavšie a tlmenejšie odtiene
            </span>.
          </p>

                  </div>
      </div>
    </section>
  );
}
