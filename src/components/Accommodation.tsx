export default function Accommodation() {
  return (
    <section id="ubytovanie" className="py-20 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Kde prenocovať</h2>

        <div className="bg-white rounded-lg p-8 md:p-10 shadow-md border border-burgundy/10">
          <div className="space-y-5 text-dark/90 text-lg leading-relaxed">
            <p>
              Pre všetkých nebardejovčanov, ktorí za nami cestujú a chceli by
              s nami oslavovať až do rána (a možno aj o niečo dlhšie), sme
              vybrali príjemné ubytovanie v blízkosti miesta konania – v{" "}
              <span className="font-semibold text-burgundy">stredisku Lipka</span>{" "}
              a v{" "}
              <span className="font-semibold text-burgundy">penzióne Zornička</span>.{" "}
              Ubytovanie z{" "}
              <span className="font-semibold text-burgundy">
                piatka na sobotu vám radi uhradíme my
              </span>.
            </p>

            <p>
              Pre vaše pohodlie odporúčame prísť už{" "}
              <span className="font-semibold">vo štvrtok večer</span>.
            </p>

            <p>
              Ubytovanie vám zarezervujeme na základe vašej odpovede vo
              formulári na potvrdenie účasti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
