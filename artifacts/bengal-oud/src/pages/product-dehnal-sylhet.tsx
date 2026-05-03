import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import dehnalImg from "@assets/d6f47034-4467-429d-a647-7d4a7e9e88c1_1777766223234.jfif";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61558718344683";

const sizes = [
  { label: "2.5 gm", price: 50, id: "2.5gm" },
  { label: "5 gm", price: 100, id: "5gm" },
  { label: "10 gm", price: 200, id: "10gm" },
];

const notes = [
  { name: "Strong Animalic", desc: "Bold, primal, and unapologetic — the defining signature of Sylheti agarwood. Not for the faint of heart." },
  { name: "Subtle Barnyard", desc: "A softened barnyard whisper that grounds the animalic opening and adds authentic depth." },
  { name: "Tangy Allure", desc: "A distinctive tangy character unique to the Sylhet region — sharp, captivating, and utterly memorable." },
  { name: "Commanding Projection", desc: "Unparalleled longevity that projects an aura long after application — a fragrance that demands attention." },
];

export default function ProductDehnalSylhet() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `dehnal-sylhet-${selectedSize.id}`,
      name: "Dehnal Oud Sylhet",
      size: selectedSize.label,
      priceUSD: selectedSize.price,
      image: dehnalImg,
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
                  src={dehnalImg}
                  alt="Dehnal Oud Sylhet"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
              <div className="mt-4 p-4 border border-border bg-card flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Dehnal Oud Sylhet · [SYL04-24/B002]</p>
                <span className="text-[9px] uppercase tracking-[0.18em] text-destructive border border-destructive/40 px-2 py-0.5">Limited Stock</span>
              </div>
            </FadeIn>

            {/* Details */}
            <StaggerContainer className="flex flex-col gap-6 pt-2">
              <StaggerItem>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-2">Bengal Oud · Dehnal Oil · [SYL04-24/B002]</p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-2 leading-tight">
                  Dehnal Oud<br /><em className="text-primary not-italic">Sylhet</em>
                </h1>
                <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Sylhet, Bangladesh · Distilled 2024</p>
              </StaggerItem>

              <StaggerItem>
                <div className="h-[1px] bg-border w-full" />
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/75 text-lg leading-relaxed font-light">
                  A classic distilled oud oil that embodies the rich history and aromatic heritage of the <span className="text-primary font-medium">Sylhet region</span> of Bangladesh. Sylhet holds a geographical history and shares a special kind of oud oil that echoes in the essence of their agarwood.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/65 text-base leading-relaxed">
                  Dehnal Oud Sylhet is a <strong className="text-foreground/80">sensory masterpiece</strong>, defined by its strong, animalic notes, softened by a subtle barnyard, tangy allure. This oud oil offers <strong className="text-foreground/80">unparalleled longevity</strong> and projects an aura that commands attention. Sylhet is renowned for its exceptional agarwood trees, and this offering from Bengal Oud captures the essence of this geographical treasure.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="p-4 border border-primary/30 bg-primary/5">
                  <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-medium">⚠ Limited Stock Available</p>
                  <p className="text-foreground/60 text-xs mt-1">Secure your bottle before it's gone.</p>
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
                    { label: "Sylhet Origin", sub: "Bangladesh" },
                    { label: "Pure Oil", sub: "Alcohol-free" },
                    { label: "Exceptional", sub: "Longevity" },
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

      {/* Olfactory Profile */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-12">
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-3">Olfactory Profile</p>
            <h2 className="font-serif text-4xl text-foreground">The Character of Dehnal Oud Sylhet</h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg leading-relaxed">
              Bold, commanding, and unmistakably Sylheti — a fragrance that sets itself apart from all traditional ouds.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {notes.map((note, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "hsl(44 55% 54% / 0.5)" }}
                  className="p-6 border border-border bg-background h-full transition-colors"
                >
                  <div className="text-primary font-serif text-3xl mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-serif text-base text-foreground mb-2">{note.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{note.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">The Heritage of Sylhet</p>
                <h2 className="font-serif text-4xl text-foreground mb-6">A Geographical Treasure</h2>
                <div className="space-y-4 text-foreground/65 text-base leading-relaxed">
                  <p>
                    Sylhet holds a place of profound geographical and cultural significance in Bangladesh. Its dense forests have long been home to some of the most exceptional agarwood trees in the subcontinent — trees that absorb the unique climate, soil, and spiritual character of the region.
                  </p>
                  <p>
                    This Dehnal Oud is not merely a fragrance — it is a liquid record of Sylhet's aromatic heritage. Every drop carries the DNA of its forests, its people, and its centuries of oud-crafting tradition.
                  </p>
                  <p>
                    Bengal Oud is proud to present this rare offering. Stock is strictly limited — once it is gone, it is gone.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Product Name", value: "Dehnal Oud Sylhet" },
                  { label: "Origin", value: "Sylhet, Bangladesh" },
                  { label: "Distillation Year", value: "2024" },
                  { label: "Batch Code", value: "SYL04-24/B002" },
                  { label: "Stock Status", value: "Limited — Rare" },
                  { label: "Format", value: "Pure Dehnal Oud Oil · Alcohol-Free" },
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
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Limited Stock</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Feel the Pride of Sylhet</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Immerse yourself in the charm of this unique oud oil. Contact us on Facebook before stock runs out.
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
