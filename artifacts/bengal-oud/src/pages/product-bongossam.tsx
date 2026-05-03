import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import bongossamImg from "@assets/unnamed_(5)_1777766241931.jpg";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61558718344683";

const sizes = [
  { label: "2.5 gm", price: 50, id: "2.5gm" },
  { label: "5 gm", price: 100, id: "5gm" },
  { label: "10 gm", price: 200, id: "10gm" },
];

const scentJourney = [
  {
    phase: "Opening",
    name: "Chilli Blast",
    desc: "The first few minutes deliver an electrifying, unmistakably Assamese chilli note — bold, surprising, and completely unlike any other oud opening. A true declaration of character.",
    color: "text-red-400",
  },
  {
    phase: "Heart",
    name: "Sweet Dance",
    desc: "A honeyed sweetness emerges and dances across the senses — a brief but beautiful interlude that softens the bold opening and draws you deeper in.",
    color: "text-amber-300",
  },
  {
    phase: "Core",
    name: "Wild Animalic & Leather",
    desc: "The oud reveals its raw, primal soul — a crazy animalic tone with rich hints of leather. Roaring, loud, and unforgettable. This is the heart of Assam.",
    color: "text-primary",
  },
  {
    phase: "Drydown",
    name: "Sweet Leather Duet",
    desc: "As the hours pass, the sweetness returns to play with the leathery animalic base in a captivating, lingering drydown. Complex, evolving, and long-lasting.",
    color: "text-primary",
  },
];

const notes = ["Chilli Blast", "Wild Animalic", "Leathery", "Sweet Dance", "Assamese Character"];

export default function ProductBongossam() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `bongossam-${selectedSize.id}`,
      name: "Bongossam",
      size: selectedSize.label,
      priceUSD: selectedSize.price,
      image: bongossamImg,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const handleBuy = () => {
    window.open(FACEBOOK_URL, "_blank", "noopener noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 border-b border-border bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link href="/collections" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back to Collections
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <FadeIn className="sticky top-28">
              <div className="aspect-square overflow-hidden bg-card border border-border">
                <motion.img
                  src={bongossamImg}
                  alt="Bongossam"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
              <div className="mt-4 p-4 border border-border bg-card flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Bongossam · [ASM-F25/B-002]</p>
                <span className="text-[9px] uppercase tracking-[0.18em] text-primary border border-primary/40 px-2 py-0.5">New</span>
              </div>
            </FadeIn>

            {/* Details */}
            <StaggerContainer className="flex flex-col gap-6 pt-2">
              <StaggerItem>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-2">Bengal Oud · Assam Oud Oil · [ASM-F25/B-002]</p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-2 leading-tight">
                  Bongossam
                </h1>
                <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Assam, India · Distilled 2025</p>
              </StaggerItem>

              <StaggerItem>
                <div className="h-[1px] bg-border w-full" />
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/75 text-lg leading-relaxed font-light">
                  Our newbie from Assam — and what an entrance it makes. <span className="text-primary font-medium">Bongossam</span> is a loud, roaring oud that takes you on a four-act scent journey unlike anything in our collection.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/65 text-base leading-relaxed">
                  Opening with an <strong className="text-foreground/80">electrifying chilli blast</strong> in classic Assamese style, evolving through a sweet dance before revealing a <strong className="text-foreground/80">wild animalic and leathery core</strong>, and finally settling into a captivating sweet-leather drydown. A true budget killer at this range, inshaAllah.
                </p>
              </StaggerItem>

              {/* Notes */}
              <StaggerItem>
                <div className="flex flex-wrap gap-2">
                  {notes.map((note) => (
                    <span key={note} className="text-[10px] uppercase tracking-[0.15em] border border-border text-foreground/60 px-3 py-1.5">
                      {note}
                    </span>
                  ))}
                </div>
              </StaggerItem>

              {/* Size Selector */}
              <StaggerItem>
                <div className="border-t border-border pt-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">Select Size</p>
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        className={`flex flex-col items-center px-6 py-4 border transition-all duration-300 ${
                          selectedSize.id === size.id
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-foreground/70 hover:border-primary/50"
                        }`}
                      >
                        <span className="font-serif text-xl font-medium">{size.label}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] mt-1">${size.price} USD</span>
                      </button>
                    ))}
                  </div>
                </div>
              </StaggerItem>

              {/* Price */}
              <StaggerItem>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-4xl text-foreground">${selectedSize.price}</span>
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">USD · {selectedSize.label}</span>
                </div>
              </StaggerItem>

              {/* CTA */}
              <StaggerItem>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={handleAddToCart}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 text-[11px] uppercase tracking-[0.25em] border transition-all duration-300 ${
                      addedToCart
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {addedToCart ? (
                        <motion.span key="added" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center gap-2">
                          <CheckCircle2 size={16} /> Added to Cart
                        </motion.span>
                      ) : (
                        <motion.span key="add" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="flex items-center gap-2">
                          <ShoppingBag size={16} /> Add to Cart
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <motion.button
                    onClick={handleBuy}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary text-primary-foreground py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/85 transition-colors font-medium"
                  >
                    Purchase on Facebook
                  </motion.button>
                </div>
                <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-wider">
                  Orders fulfilled via Facebook · WhatsApp available at +880 1568-983888
                </p>
              </StaggerItem>

              {/* Trust */}
              <StaggerItem>
                <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                  {[
                    { label: "Assam Origin", sub: "India" },
                    { label: "Loud & Bold", sub: "Raw character" },
                    { label: "Budget Killer", sub: "Value at range" },
                  ].map((t, i) => (
                    <div key={i} className="text-center p-3 border border-border">
                      <div className="text-xs font-serif text-foreground mb-0.5">{t.label}</div>
                      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{t.sub}</div>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Scent Journey */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-12">
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-3">The Scent Journey</p>
            <h2 className="font-serif text-4xl text-foreground">Four Acts of Assam</h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg leading-relaxed">
              Bongossam does not simply open and fade — it unfolds. Each phase tells a different story.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-border">
            {scentJourney.map((phase, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ backgroundColor: "hsl(44 55% 54% / 0.05)" }}
                  className={`p-7 h-full transition-colors ${i < scentJourney.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""}`}
                >
                  <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{phase.phase}</div>
                  <div className={`font-serif text-2xl mb-3 ${phase.color}`}>{phase.name}</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{phase.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">The Spirit of Assam</p>
                <h2 className="font-serif text-4xl text-foreground mb-6">Loud, Roaring & Unapologetic</h2>
                <div className="space-y-4 text-foreground/65 text-base leading-relaxed">
                  <p>
                    Assam is one of the world's most celebrated oud-producing regions, known for agarwood that expresses itself boldly — never polite, never restrained. Bongossam captures that spirit faithfully.
                  </p>
                  <p>
                    The name "Bongossam" is a tribute to the Bengal–Assam connection — two great oud heritages brought together under the Bengal Oud banner. This is a fragrance for those who want their oud to announce itself.
                  </p>
                  <p>
                    At this price range, we believe there is nothing quite like it. A true budget killer, inshaAllah.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Product Name", value: "Bongossam" },
                  { label: "Origin", value: "Assam, India" },
                  { label: "Batch Code", value: "ASM-F25/B-002" },
                  { label: "Character", value: "Loud · Roaring · Animalic" },
                  { label: "Opening", value: "Assamese Chilli Blast" },
                  { label: "Format", value: "Pure Oud Oil · Alcohol-Free" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-border/50 text-sm">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{spec.label}</span>
                    <span className="text-foreground/80 font-medium text-right max-w-[55%]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/8 border-y border-primary/20">
        <FadeIn>
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Budget Killer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Roar?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Bongossam is waiting for you. Loud, bold, and worth every penny. Order through Facebook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleBuy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-primary-foreground px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/85 transition-colors"
              >
                Purchase on Facebook
              </motion.button>
              <a
                href="https://wa.me/8801568983888"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground/70 px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
