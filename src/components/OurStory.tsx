export default function OurStory() {
  return (
    <section id="nas-pribeh" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Náš príbeh</h2>
        <p className="section-subtitle">
          Ako to všetko začalo...
        </p>

        {/* Timeline placeholder */}
        <div className="space-y-12">
          {/* Story item 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3">
              <div className="burgundy-frame aspect-square bg-cream flex items-center justify-center">
                <span className="text-burgundy/50 text-sm">Fotka 1</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="font-playfair text-xl text-burgundy mb-2">
                Ako sme sa spoznali
              </h3>
              <p className="text-dark/80">
                [Tu bude váš príbeh o tom, ako ste sa spoznali...]
              </p>
            </div>
          </div>

          {/* Story item 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="w-full md:w-1/3">
              <div className="burgundy-frame aspect-square bg-cream flex items-center justify-center">
                <span className="text-burgundy/50 text-sm">Fotka 2</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-right">
              <h3 className="font-playfair text-xl text-burgundy mb-2">
                Prvé rande
              </h3>
              <p className="text-dark/80">
                [Tu bude váš príbeh o prvom rande...]
              </p>
            </div>
          </div>

          {/* Story item 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3">
              <div className="burgundy-frame aspect-square bg-cream flex items-center justify-center">
                <span className="text-burgundy/50 text-sm">Fotka 3</span>
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="font-playfair text-xl text-burgundy mb-2">
                Žiadosť o ruku
              </h3>
              <p className="text-dark/80">
                [Tu bude váš príbeh o žiadosti o ruku...]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
