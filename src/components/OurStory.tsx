export default function OurStory() {
  return (
    <section id="nas-pribeh" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Náš príbeh</h2>
        <p className="section-subtitle">
          Ako to všetko začalo...
        </p>

        {/* 3 fotky vedľa seba */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="burgundy-frame aspect-square bg-cream flex items-center justify-center">
            <span className="text-burgundy/50 text-sm">Fotka 1</span>
          </div>
          <div className="burgundy-frame aspect-square bg-cream flex items-center justify-center">
            <span className="text-burgundy/50 text-sm">Fotka 2</span>
          </div>
          <div className="burgundy-frame aspect-square bg-cream flex items-center justify-center">
            <span className="text-burgundy/50 text-sm">Fotka 3</span>
          </div>
        </div>

        {/* Text pod fotkami */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-dark/80 text-lg leading-relaxed">
            [Tu bude váš príbeh - pošli mi text a doplním ho]
          </p>
        </div>
      </div>
    </section>
  );
}
