import RSVPForm from "./RSVPForm";

export default function RSVP() {
  return (
    <section id="rsvp" className="py-20 px-4 bg-burgundy">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-semibold mb-4">
            Potvrdenie účasti
          </h2>
          <p className="text-white/80 text-lg">
            Tešíme sa na vašu odpoveď do <strong>30. júna 2026</strong>
          </p>
        </div>

        <div className="bg-cream rounded-lg p-6 md:p-10 shadow-xl">
          <RSVPForm />
        </div>

        <p className="text-white/60 text-sm mt-8 text-center">
          Máte otázky? Napíšte nám na{" "}
          <a
            href="mailto:svadba@example.com"
            className="text-white underline hover:no-underline"
          >
            svadba@example.com
          </a>
        </p>
      </div>
    </section>
  );
}
