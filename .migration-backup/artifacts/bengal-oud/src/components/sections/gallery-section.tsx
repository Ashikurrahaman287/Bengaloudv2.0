import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import product3 from "@/assets/images/product-3.png";
import heroBg from "@/assets/images/hero-bg.png";
import founderImg from "@assets/image_1776283040455.png";

const images = [
  { src: gallery1, alt: "Raw oud wood — the heart of Bengal Oud", label: "Raw Agarwood", span: "md:col-span-2 md:row-span-2" },
  { src: product1, alt: "Royal Bengal Oud signature collection", label: "Signature Collection", span: "md:col-span-1 md:row-span-1" },
  { src: gallery2, alt: "Artisan hand-weighing precious oud chips", label: "The Craft", span: "md:col-span-1 md:row-span-1" },
  { src: gallery3, alt: "Luxury perfume boutique display", label: "Boutique Display", span: "md:col-span-1 md:row-span-1" },
  { src: product2, alt: "Premium perfume bottle lifestyle", label: "Premium Bottles", span: "md:col-span-1 md:row-span-1" },
  { src: heroBg, alt: "Bengal Oud brand atmosphere", label: "Brand Experience", span: "md:col-span-2 md:row-span-1" },
  { src: product3, alt: "Pure perfume oil collection", label: "Pure Oils", span: "md:col-span-1 md:row-span-1" },
  { src: gallery1, alt: "Oud wood texture close-up", label: "Oud Texture", span: "md:col-span-1 md:row-span-1" },
  { src: gallery2, alt: "Fragrance craftsmanship at work", label: "Craftsmanship", span: "md:col-span-1 md:row-span-1" },
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <StaggerItem key={i} className={`${img.span} relative group overflow-hidden bg-muted/20`}>
              <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">{img.label}</span>
              </div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Brand Lifestyle Row */}
        <FadeIn className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: product1, alt: "Oud product detail", label: "Product Detail" },
            { src: gallery3, alt: "Packaging design", label: "Luxury Packaging" },
            { src: product2, alt: "Perfume lifestyle", label: "Lifestyle" },
            { src: gallery2, alt: "Nationwide delivery", label: "Nationwide Reach" },
          ].map((img, i) => (
            <div key={i} className="relative group overflow-hidden bg-muted/20 h-48">
              <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-3 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-xs uppercase tracking-widest text-primary">{img.label}</span>
              </div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
