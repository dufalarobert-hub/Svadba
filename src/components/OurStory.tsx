import Image from "next/image";

const storyPhotos = [
  { src: "/pribeh-1.png", alt: "Náš príbeh — 1" },
  { src: "/pribeh-2.png", alt: "Náš príbeh — 2" },
  { src: "/pribeh-3.png", alt: "Náš príbeh — 3" },
  { src: "/pribeh-4.png", alt: "Náš príbeh — 4" },
];

export default function OurStory() {
  return (
    <section id="nas-pribeh" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Náš príbeh</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {storyPhotos.map((photo) => (
            <div key={photo.src} className="burgundy-frame">
              <div className="aspect-square relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
