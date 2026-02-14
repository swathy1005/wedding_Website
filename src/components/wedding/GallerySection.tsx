import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  { src: "/couple-photo.jpeg", alt: "Siddharthan & Varsha" },
  { src: "/couple-photo.jpeg", alt: "Couple photo 2" },
  { src: "/couple-photo.jpeg", alt: "Couple photo 3" },
  { src: "/couple-photo.jpeg", alt: "Couple photo 4" },
  { src: "/couple-photo.jpeg", alt: "Couple photo 5" },
  { src: "/couple-photo.jpeg", alt: "Couple photo 6" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          Gallery
        </h2>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-primary/40" />
          <span className="text-primary">♥</span>
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightbox(p.src)}
              className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] border border-border/30"
            >
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          More photos coming soon ✨
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-card">
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
