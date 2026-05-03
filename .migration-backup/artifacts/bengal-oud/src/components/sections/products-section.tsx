import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import product3 from "@/assets/images/product-3.png";

const products = [
  {
    id: 1,
    name: "Royal Bengal Oud",
    category: "Authentic Oud",
    description: "Our signature distillation, aged 15 years. Deep, woody, and profoundly resinous with an ancient character.",
    notes: "Agarwood, Amber, Leather",
    size: "50ml Parfum",
    price: "৳ 8,500",
    image: product1
  },
  {
    id: 2,
    name: "Midnight Saffron",
    category: "Luxury Perfume",
    description: "A mysterious blend of spiced saffron and dark woods for the evening connoisseur who commands presence.",
    notes: "Saffron, Rose, Dark Oud",
    size: "100ml EDP",
    price: "৳ 6,200",
    image: product2
  },
  {
    id: 3,
    name: "Imperial Rose Attar",
    category: "Perfume Oil",
    description: "Pure, undiluted essence of Taif rose masterfully blended with aged Indian oud. Timeless femininity.",
    notes: "Taif Rose, Sandalwood, Musk",
    size: "12ml Pure Oil",
    price: "৳ 4,800",
    image: product3
  },
  {
    id: 4,
    name: "Heritage Collection",
    category: "Gift Box",
    description: "The ultimate tasting menu of our four most beloved signature fragrances in hand-crafted packaging.",
    notes: "Assorted Premium Notes",
    size: "4 x 15ml Set",
    price: "৳ 12,000",
    image: product1
  },
  {
    id: 5,
    name: "Amber Majesty",
    category: "Signature Collection",
    description: "Warm, glowing amber wrapped in vanilla and soft spices. A comforting embrace for long evenings.",
    notes: "Amber, Vanilla, Cardamom",
    size: "100ml EDP",
    price: "৳ 5,500",
    image: product2
  },
  {
    id: 6,
    name: "Oud Cambodi Pure",
    category: "Authentic Oud",
    description: "Direct from the jungles of Cambodia. Sweet, fruity top notes settling into rich, barnyard dark wood.",
    notes: "Cambodian Agarwood",
    size: "6ml Pure Oil",
    price: "৳ 15,000",
    image: product3
  },
  {
    id: 7,
    name: "Dhaka Noir",
    category: "Luxury Perfume",
    description: "A bold urban fragrance born from the streets of Dhaka. Smoky, leathery, and unapologetically modern.",
    notes: "Smoke, Leather, Vetiver",
    size: "100ml EDP",
    price: "৳ 5,800",
    image: product1
  },
  {
    id: 8,
    name: "Bengal Gold Attar",
    category: "Perfume Oil",
    description: "Our most celebrated attar — a luminous golden accord of rare resins and precious woods.",
    notes: "Oud, Frankincense, Gold Resin",
    size: "10ml Pure Oil",
    price: "৳ 7,200",
    image: product2
  },
  {
    id: 9,
    name: "Silk Road",
    category: "Signature Collection",
    description: "An odyssey in a bottle — tracing the ancient trade routes through spice markets and desert rose fields.",
    notes: "Rose, Spices, Sandalwood",
    size: "100ml EDP",
    price: "৳ 6,800",
    image: product3
  },
  {
    id: 10,
    name: "White Oud",
    category: "Authentic Oud",
    description: "Light yet complex. A rare white oud expression — ethereal, clean, and meditative in character.",
    notes: "White Agarwood, Musk, Cedar",
    size: "20ml Pure Oil",
    price: "৳ 9,500",
    image: product1
  },
  {
    id: 11,
    name: "Royal Gift Set",
    category: "Gift Box",
    description: "The crown jewel of gifting. A curated luxury box of six signature scents with gold-embossed packaging.",
    notes: "Full Collection Assortment",
    size: "6 x 10ml Set",
    price: "৳ 18,500",
    image: product2
  },
  {
    id: 12,
    name: "Jasmine Oud",
    category: "Perfume Oil",
    description: "Sun-drenched jasmine from the gardens of Bangladesh fused with aged agarwood. Deeply romantic.",
    notes: "Jasmine, Oud, Musk",
    size: "12ml Pure Oil",
    price: "৳ 4,200",
    image: product3
  }
];

const categories = ["All", "Authentic Oud", "Luxury Perfume", "Perfume Oil", "Signature Collection", "Gift Box"];

import { useState } from "react";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn className="text-center mb-12">
          <span className="text-primary tracking-widest text-sm uppercase mb-4 block">The Collection</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Masterpieces of Perfumery</h2>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
        </FadeIn>

        {/* Category Filter */}
        <FadeIn className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <StaggerItem key={product.id}>
              <div className="bg-background border border-border group overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors duration-500">
                <div className="aspect-square overflow-hidden relative p-8 bg-muted/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-background/80 backdrop-blur-sm border border-border text-primary text-xs px-3 py-1 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20 -mt-12 bg-gradient-to-t from-background via-background to-transparent">
                  <div className="flex justify-between items-start mb-4 pt-4">
                    <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">{product.description}</p>

                  <div className="space-y-2 mb-6 text-xs text-foreground/70 uppercase tracking-wider">
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span>Notes</span>
                      <span className="text-right ml-4 text-primary">{product.notes}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span>Size</span>
                      <span className="text-right">{product.size}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-xl font-serif text-foreground">{product.price}</span>
                    <a
                      href="https://wa.me/8801568983888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 text-sm uppercase tracking-widest transition-colors duration-300"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center mt-16">
          <a href="https://wa.me/8801568983888" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-primary text-primary hover:text-foreground hover:border-foreground transition-colors pb-1 uppercase tracking-widest text-sm">
            Inquire for Custom Orders
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
