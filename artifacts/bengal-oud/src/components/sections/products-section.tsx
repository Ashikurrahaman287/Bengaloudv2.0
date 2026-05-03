import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import { useCart } from "@/context/cart-context";
import { ShoppingBag } from "lucide-react";
import moniyaImg from "@assets/unnamed_(2)_1777766090295.jpg";
import qutubImg from "@assets/unnamed_(4)_1777766154150.jpg";
import dehnalImg from "@assets/d6f47034-4467-429d-a647-7d4a7e9e88c1_1777766223234.jfif";
import bongossamImg from "@assets/unnamed_(5)_1777766241931.jpg";

const products = [
  {
    id: "moniya",
    name: "Moniya",
    sku: "MONP12-23/B003",
    origin: "Manipur, India",
    tagline: "Copper Pot Distilled · 50–60 Year Old Tree",
    description: "Sourced from ancient Manipuri forests, soaked 10 days, distilled in an old-school copper pot. Unmasked. Unapologetic.",
    notes: ["Barnyard & Leather", "Plum", "Incense"],
    sizes: [
      { label: "2.5 gm", price: 50, id: "2.5gm" },
      { label: "5 gm", price: 100, id: "5gm" },
      { label: "10 gm", price: 200, id: "10gm" },
    ],
    image: moniyaImg,
    badge: "New Arrival",
    badgeStyle: "border-border text-primary",
  },
  {
    id: "qutub",
    name: "Qutub",
    sku: "NAGA-14/SP",
    origin: "Nagaland, India",
    tagline: "10 Years Aged · Rare Nagaland Agar",
    description: "Named after al-Insan al-Kamil. Distilled 2014, aged a full decade. Leathery, dark, and hauntingly floral.",
    notes: ["Burnished", "Leathery", "Slightly Floral"],
    sizes: [
      { label: "2.5 gm", price: 95, id: "2.5gm" },
      { label: "5 gm", price: 190, id: "5gm" },
      { label: "10 gm", price: 380, id: "10gm" },
    ],
    image: qutubImg,
    badge: "10 Years Aged",
    badgeStyle: "border-border text-primary",
  },
  {
    id: "dehnal-oud-sylhet",
    name: "Dehnal Oud Sylhet",
    sku: "SYL04-24/B002",
    origin: "Sylhet, Bangladesh",
    tagline: "Classic Distilled · Commanding Longevity",
    description: "Aromatic heritage of Sylhet. Strong animalic, subtle barnyard, tangy allure. Unparalleled longevity.",
    notes: ["Strong Animalic", "Barnyard", "Tangy"],
    sizes: [
      { label: "2.5 gm", price: 50, id: "2.5gm" },
      { label: "5 gm", price: 100, id: "5gm" },
      { label: "10 gm", price: 200, id: "10gm" },
    ],
    image: dehnalImg,
    badge: "Limited Stock",
    badgeStyle: "border-destructive/50 text-destructive",
  },
  {
    id: "bongossam",
    name: "Bongossam",
    sku: "ASM-F25/B-002",
    origin: "Assam, India",
    tagline: "Loud & Roaring · Assamese Wild",
    description: "Chilli blast opening, sweet dance, wild animalic core, leather drydown. A budget killer from the heart of Assam.",
    notes: ["Chilli Blast", "Animalic", "Leather"],
    sizes: [
      { label: "2.5 gm", price: 50, id: "2.5gm" },
      { label: "5 gm", price: 100, id: "5gm" },
      { label: "10 gm", price: 200, id: "10gm" },
    ],
    image: bongossamImg,
    badge: "New",
    badgeStyle: "border-border text-primary",
  },
];

export function ProductsSection() {
  const { addToCart } = useCart();

  return (
    <section id="products" className="py-24 md:py-32 bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn>
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-3">Our Collection</p>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground tracking-tight leading-tight">
              Pure Oud Oils
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/collections"
              className="text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
            >
              View Full Collections →
            </Link>
          </FadeIn>
        </div>

        {/* Products 2×2 Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {products.map((product, idx) => {
            const borderR = idx % 2 === 0 ? "md:border-r border-border" : "";
            const borderB = idx < 2 ? "border-b border-border" : "";
            return (
              <StaggerItem key={product.id}>
                <div className={`flex flex-col h-full ${borderR} ${borderB}`}>

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Link href={`/products/${product.id}`}>
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover cursor-pointer"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                    </Link>
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] px-2.5 py-1 uppercase tracking-[0.15em] border backdrop-blur-sm bg-background/90 ${product.badgeStyle}`}>
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-7 bg-background flex flex-col flex-1">
                    <p className="text-primary text-[10px] uppercase tracking-[0.22em] mb-1">{product.sku}</p>
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-serif text-2xl text-foreground mb-1 hover:text-primary transition-colors cursor-pointer leading-tight">{product.name}</h3>
                    </Link>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-[0.13em] mb-3">{product.origin} · {product.tagline}</p>

                    <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>

                    {/* Notes */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.notes.map((note) => (
                        <span key={note} className="text-[9px] uppercase tracking-[0.12em] border border-border text-foreground/50 px-2 py-1">
                          {note}
                        </span>
                      ))}
                    </div>

                    {/* Quick Add */}
                    <div className="mt-auto space-y-3">
                      <div className="grid grid-cols-3 gap-1.5">
                        {product.sizes.map((size) => (
                          <motion.button
                            key={size.id}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => addToCart({
                              id: `${product.id}-${size.id}`,
                              name: product.name,
                              size: size.label,
                              priceUSD: size.price,
                              image: product.image,
                            })}
                            className="flex flex-col items-center border border-border py-2.5 hover:border-primary hover:text-primary transition-all group"
                          >
                            <span className="font-serif text-sm text-foreground group-hover:text-primary leading-none">{size.label}</span>
                            <span className="text-[9px] text-muted-foreground mt-0.5">${size.price}</span>
                            <ShoppingBag size={10} className="mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                          </motion.button>
                        ))}
                      </div>

                      <Link
                        href={`/products/${product.id}`}
                        className="block text-center bg-primary text-primary-foreground py-3 text-[10px] uppercase tracking-[0.22em] hover:bg-primary/85 transition-colors"
                      >
                        Discover →
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
