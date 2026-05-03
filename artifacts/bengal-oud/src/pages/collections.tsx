import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
    distilled: "2023",
    age: "Fresh · 7 Months",
    badge: "New Arrival",
    badgeStyle: "border-border text-primary",
    description:
      "Alhamdulillah — our most reputed oud oil. Distilled from 50–60 year old agarwood sourced from the forests of Manipur, India. Soaked for 10 days, distilled in a traditional copper pot. Nothing added, nothing masked.",
    notes: ["Barnyard & Leather", "Plum", "Slight Sour", "Woody", "Incense"],
    sizes: [
      { label: "2.5 gm", price: 50, id: "2.5gm" },
      { label: "5 gm", price: 100, id: "5gm" },
      { label: "10 gm", price: 200, id: "10gm" },
    ],
    image: moniyaImg,
  },
  {
    id: "qutub",
    name: "Qutub",
    sku: "NAGA-14/SP",
    origin: "Nagaland, India",
    distilled: "2014",
    age: "10 Years Aged",
    badge: "Aged Reserve",
    badgeStyle: "border-border text-primary",
    description:
      "Named after al-Insan al-Kamil — the perfect person. Distilled in 2014, aged a full decade. Lightly burnished, leathery, dark and with a slightly floral character quite different and unique from other traditional ouds.",
    notes: ["Burnished", "Leathery", "Dark & Smoky", "Slightly Floral"],
    sizes: [
      { label: "2.5 gm", price: 95, id: "2.5gm" },
      { label: "5 gm", price: 190, id: "5gm" },
      { label: "10 gm", price: 380, id: "10gm" },
    ],
    image: qutubImg,
  },
  {
    id: "dehnal-oud-sylhet",
    name: "Dehnal Oud Sylhet",
    sku: "SYL04-24/B002",
    origin: "Sylhet, Bangladesh",
    distilled: "2024",
    age: "Classic Distilled",
    badge: "Limited Stock",
    badgeStyle: "border-destructive/50 text-destructive",
    description:
      "A classic distilled oud oil that embodies the rich history and aromatic heritage of the Sylhet region of Bangladesh. Defined by its strong animalic notes, softened by a subtle barnyard, tangy allure — with unparalleled longevity and commanding presence.",
    notes: ["Strong Animalic", "Subtle Barnyard", "Tangy Allure", "Commanding Projection"],
    sizes: [
      { label: "2.5 gm", price: 50, id: "2.5gm" },
      { label: "5 gm", price: 100, id: "5gm" },
      { label: "10 gm", price: 200, id: "10gm" },
    ],
    image: dehnalImg,
  },
  {
    id: "bongossam",
    name: "Bongossam",
    sku: "ASM-F25/B-002",
    origin: "Assam, India",
    distilled: "2025",
    age: "New Release",
    badge: "New",
    badgeStyle: "border-border text-primary",
    description:
      "Our newbie from Assam — and what an entrance it makes. Opens with an electrifying chilli blast, evolves through a sweet dance, reveals a wild animalic and leathery core, and closes with a captivating sweet-leather drydown. A loud, roaring oud. A true budget killer.",
    notes: ["Chilli Blast", "Wild Animalic", "Leathery", "Sweet Dance"],
    sizes: [
      { label: "2.5 gm", price: 50, id: "2.5gm" },
      { label: "5 gm", price: 100, id: "5gm" },
      { label: "10 gm", price: 200, id: "10gm" },
    ],
    image: bongossamImg,
  },
];

export default function Collections() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-40 pb-20 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn>
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Our Offerings</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6 tracking-tight">Collections</h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Every fragrance in our collection is a story of craft, heritage, and the singular beauty of authentic oud.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <StaggerContainer className="space-y-20">
            {products.map((product, idx) => (
              <StaggerItem key={product.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border ${idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                  {/* Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <Link href={`/products/${product.id}`}>
                      <motion.img
                        src={product.image}
                        alt={`${product.name} Oud Oil`}
                        className="w-full h-full object-cover cursor-pointer"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                    </Link>
                    <div className="absolute top-5 left-5">
                      <span className={`bg-background/90 backdrop-blur-sm border text-[10px] px-3 py-1.5 uppercase tracking-[0.18em] ${product.badgeStyle}`}>
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-10 md:p-14 bg-card flex flex-col justify-between">
                    <div>
                      <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-2">{product.sku}</p>
                      <Link href={`/products/${product.id}`}>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2 hover:text-primary transition-colors cursor-pointer leading-tight">
                          {product.name}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">
                        {product.origin} · {product.age} · Distilled {product.distilled}
                      </p>

                      <p className="text-foreground/65 leading-relaxed mb-6 text-base">{product.description}</p>

                      {/* Notes */}
                      <div className="mb-8">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Olfactory Notes</p>
                        <div className="flex flex-wrap gap-2">
                          {product.notes.map((note) => (
                            <span key={note} className="text-[10px] uppercase tracking-[0.15em] border border-border text-foreground/60 px-3 py-1.5">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Size + Quick Add */}
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Select Size & Add to Cart</p>
                        <div className="grid grid-cols-3 gap-3">
                          {product.sizes.map((size) => (
                            <motion.button
                              key={size.id}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => addToCart({
                                id: `${product.id}-${size.id}`,
                                name: product.name,
                                size: size.label,
                                priceUSD: size.price,
                                image: product.image,
                              })}
                              className="flex flex-col items-center border border-border p-4 hover:border-primary hover:text-primary transition-all group"
                            >
                              <span className="font-serif text-lg text-foreground group-hover:text-primary">{size.label}</span>
                              <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">${size.price} USD</span>
                              <ShoppingBag size={12} className="mt-2 text-muted-foreground group-hover:text-primary transition-colors" />
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-8 pt-8 border-t border-border">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 text-center bg-primary text-primary-foreground py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/85 transition-colors"
                      >
                        View Full Details
                      </Link>
                      <a
                        href="https://www.facebook.com/profile.php?id=61558718344683"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-border text-foreground/70 py-4 text-[11px] uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
                      >
                        Purchase on Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-10 text-center">At a Glance</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr>
                    <th className="p-4 border-r border-border text-left text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-normal w-24" />
                    {products.map((p) => (
                      <th key={p.id} className="p-4 border-r last:border-r-0 border-border text-center font-serif text-primary text-base font-normal">
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Origin", vals: products.map(p => p.origin) },
                    { label: "Distilled", vals: products.map(p => p.distilled) },
                    { label: "Age / Style", vals: products.map(p => p.age) },
                    { label: "From", vals: products.map(p => `$${p.sizes[0].price} USD`) },
                  ].map((row) => (
                    <tr key={row.label} className="border-t border-border">
                      <td className="p-4 border-r border-border text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{row.label}</td>
                      {row.vals.map((val, i) => (
                        <td key={i} className="p-4 border-r last:border-r-0 border-border text-center text-xs text-foreground/70">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/8 border-t border-primary/20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <FadeIn>
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Bespoke</p>
            <h3 className="font-serif text-3xl text-foreground mb-4">Looking for Something Unique?</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8 leading-relaxed">
              We craft bespoke fragrance commissions. Contact us to discuss your vision.
            </p>
            <a
              href="https://wa.me/8801568983888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/85 transition-colors"
            >
              Inquire via WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
