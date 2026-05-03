import { FadeIn } from "@/components/ui/fade-in";
import img1 from "@assets/468934098_122150332646290611_5212555899231582762_n_1777771322941.jpg";
import img2 from "@assets/468788834_122150328068290611_2481269974211893889_n_1777771322941.jpg";
import img3 from "@assets/468822351_122150319368290611_4415546699109604540_n_1777771322942.jpg";
import img4 from "@assets/468719791_122150135138290611_4726195660932254943_n_1777771322942.jpg";
import img5 from "@assets/468446300_122149698260290611_6224792958653385769_n_1777771322942.jpg";
import img6 from "@assets/468405436_122149689014290611_5331433743515035029_n_1777771322942.jpg";
import img7 from "@assets/474009301_122156720648290611_5763324821170269434_n_1777771333315.jpg";
import img8 from "@assets/474057436_122156719820290611_1796254186957065453_n_1777771333316.jpg";
import img9 from "@assets/473947443_122156716364290611_7971568115740895870_n_1777771333316.jpg";
import img10 from "@assets/473812402_122156712266290611_6413549222777447190_n_1777771333316.jpg";
import img11 from "@assets/472718562_122155204520290611_8285436456484451702_n_1777771333316.jpg";
import img12 from "@assets/473005653_122155202426290611_2007557415601644911_n_1777771333316.jpg";

const images = [
  { src: img1, alt: "Bengal Oud product photo 1", label: "Bengal Oud" },
  { src: img2, alt: "Bengal Oud product photo 2", label: "Bengal Oud" },
  { src: img3, alt: "Bengal Oud product photo 3", label: "Bengal Oud" },
  { src: img4, alt: "Bengal Oud product photo 4", label: "Bengal Oud" },
  { src: img5, alt: "Bengal Oud product photo 5", label: "Bengal Oud" },
  { src: img6, alt: "Bengal Oud product photo 6", label: "Bengal Oud" },
  { src: img7, alt: "Bengal Oud product photo 7", label: "Bengal Oud" },
  { src: img8, alt: "Bengal Oud product photo 8", label: "Bengal Oud" },
  { src: img9, alt: "Bengal Oud product photo 9", label: "Bengal Oud" },
  { src: img10, alt: "Bengal Oud product photo 10", label: "Bengal Oud" },
  { src: img11, alt: "Bengal Oud product photo 11", label: "Bengal Oud" },
  { src: img12, alt: "Bengal Oud product photo 12", label: "Bengal Oud" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-card border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn className="text-center mb-16">
          <span className="text-primary tracking-widest text-sm uppercase mb-4 block">Visual Journey</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">The Art of Oud</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Every bottle tells a story rooted in Bangladesh's rich heritage, master craftsmanship, and an uncompromising love for authentic fragrance.
          </p>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.04} className="relative overflow-hidden bg-muted/20 aspect-[4/3] group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">{img.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
