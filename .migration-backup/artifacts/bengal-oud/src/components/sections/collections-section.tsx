import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import product3 from "@/assets/images/product-3.png";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";

const collections = [
  {
    name: "Royal Oud Collection",
    desc: "The pinnacle of our aged agarwood reserves. Each piece hand-selected for maximum resin content.",
    image: product1,
    badge: "Signature"
  },
  {
    name: "Signature Perfume Oils",
    desc: "Concentrated luxury in every single drop. Pure attars crafted without a single drop of alcohol.",
    image: product2,
    badge: "Pure"
  },
  {
    name: "Exclusive Limited Editions",
    desc: "Rare seasonal blends for the true collector. Released twice yearly in numbered quantities.",
    image: gallery1,
    badge: "Limited"
  },
  {
    name: "Best Sellers",
    desc: "The fragrances that defined our legacy. Loved by over 350,000 customers across Bangladesh.",
    image: product3,
    badge: "Popular"
  },
  {
    name: "Luxury Gift Boxes",
    desc: "Beautifully curated sets in gold-embossed packaging — the perfect luxury gift for every occasion.",
    image: gallery2,
    badge: "Gift"
  },
  {
    name: "Oud Wood Selection",
    desc: "Raw, unprocessed agarwood chips and shavings — the purest expression of Bangladesh's forest heritage.",
    image: gallery3,
    badge: "Raw"
  },
];

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn className="text-center mb-16">
          <span className="text-primary tracking-widest text-sm uppercase mb-4 block">Curated For You</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Featured Collections</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Each collection is designed to evoke a distinct mood, memory, and presence — from the darkest woods to the brightest florals.
          </p>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6" />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <StaggerItem key={i}>
              <div className="group relative aspect-[4/3] overflow-hidden bg-card border border-border cursor-pointer hover:border-primary/50 transition-colors duration-500">
                <img
                  src={col.image}
                  alt={col.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors duration-500" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary/20 border border-primary/40 text-primary text-xs px-3 py-1 uppercase tracking-widest backdrop-blur-sm">
                    {col.badge}
                  </span>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background/95 via-background/30 to-transparent">
                  <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors mb-2">{col.name}</h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {col.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
