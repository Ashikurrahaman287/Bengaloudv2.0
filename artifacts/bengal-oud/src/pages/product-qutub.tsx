import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import qutubImg from "@assets/unnamed_(4)_1777766154150.jpg";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61558718344683";

const sizes = [
  { label: "2.5 gm", price: 95, id: "2.5gm" },
  { label: "5 gm", price: 190, id: "5gm" },
  { label: "10 gm", price: 380, id: "10gm" },
];

const notes = [
  { name: "Lightly Burnished", desc: "A gentle warmth that opens the oil — refined, never overwhelming, like sunlight through wood." },
  { name: "Leathery", desc: "Rich and textured, the leather note is deep and sophisticated — a hallmark of aged Nagaland oud." },
  { name: "Dark & Smoky", desc: "Ten years of maturation lend Qutub a brooding darkness — complex, commanding, and unforgettable." },
  { name: "Slightly Floral", desc: "A whisper of florals lifts the composition — rare in Indian ouds, utterly captivating here." },
];

export default function ProductQutub() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `qutub-${selectedSize.id}`,
      name: "Qutub",
      size: selectedSize.label,
      priceUSD: selectedSize.price,
      image: qutubImg,
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
                  src={qutubImg}
                  alt="Qutub Oud Oil"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
            </FadeIn>

            {/* Product Details */}
            <StaggerContainer className="flex flex-col gap-6 pt-2">
              <StaggerItem>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-2">Bengal Oud · Aged Oud Oil · [NAGA-14/SP]</p>
                <h1 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight mb-2">Qutub</h1>
                <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Nagaland, India · Distilled 2014 · 10 Years Aged</p>
              </StaggerItem>

              <StaggerItem>
                <div className="h-[1px] bg-border w-full" />
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/75 text-lg leading-relaxed font-light">
                  <em className="text-primary font-medium not-italic">Qutub</em> — meaning the perfect person, <em>al-Insan al-Kamil</em>. While our Agar Oud may not be widely known, it is the finest in quality. That is why we named it Qutub. A distillation born in 2014, now a decade of age, this oil has evolved into something that words struggle to contain.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/65 text-base leading-relaxed">
                  Lightly burnished, leathery, dark and with a <strong className="text-foreground/80">slightly floral</strong> character — Qutub carries a fragrance that is quite different and unique from other traditional ouds. Ten years have softened its edges and deepened its soul.
                </p>
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

              {/* CTA Buttons */}
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

              {/* Trust Signals */}
              <StaggerItem>
                <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                  {[
                    { label: "10 Years Aged", sub: "Distilled 2014" },
                    { label: "Pure Oil", sub: "Alcohol-free" },
                    { label: "Nagaland Origin", sub: "NAGA-14/SP" },
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
            <h2 className="font-serif text-4xl text-foreground">The Notes of Qutub</h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg leading-relaxed">
              A fragrance quite different and unique from other traditional ouds — refined by a decade of age.
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

      {/* Provenance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Provenance</p>
                <h2 className="font-serif text-4xl text-foreground mb-6">A Decade in the Making</h2>
                <div className="space-y-4 text-foreground/65 text-base leading-relaxed">
                  <p>
                    Distilled in 2014 from agarwood sourced deep in Nagaland, Qutub spent ten years evolving in stillness. The "NAGA" provenance in its batch code is a mark of distinction — Nagaland oud carries a profile unlike anything from Assam or Bengal.
                  </p>
                  <p>
                    The slight floral note — rare in this region's ouds — emerges from the specific microclimate of its harvest site. Combined with its leathery base and burnished warmth, Qutub occupies a unique position in any serious oud collection.
                  </p>
                  <p>
                    We named it after the concept of the perfect person not out of pride, but out of reverence — for the ten-year patience it took to bring this oil to you.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Name Meaning", value: "The Perfect Person (al-Insan al-Kamil)" },
                  { label: "Origin", value: "Nagaland, India" },
                  { label: "Distillation Year", value: "2014" },
                  { label: "Age at Bottling", value: "~10 Years" },
                  { label: "Batch Code", value: "NAGA-14/SP" },
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Experience Qutub</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A decade of patience. Contact us on Facebook to secure your bottle.
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
