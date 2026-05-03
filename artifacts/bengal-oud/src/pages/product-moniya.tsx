import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import moniyaImg from "@assets/unnamed_(2)_1777766090295.jpg";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61558718344683";

const sizes = [
  { label: "2.5 gm", price: 50, id: "2.5gm" },
  { label: "5 gm", price: 100, id: "5gm" },
  { label: "10 gm", price: 200, id: "10gm" },
];

const notes = [
  { name: "Barnyard & Leather", desc: "A hallmark of premium Indian oud — bold, primal, and deeply complex." },
  { name: "Plum", desc: "A ripe, fruity sweetness that softens the wood and adds depth." },
  { name: "Slight Sourness", desc: "The signature 'twang' of authentic aged agarwood. Pure and unmasked." },
  { name: "Woody", desc: "Dense, dark heartwood — the soul of the 50-60 year old Manipuri tree." },
  { name: "Incense", desc: "A gentle smokiness that rises in the drydown — meditative and sacred." },
];

export default function ProductMoniya() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `moniya-${selectedSize.id}`,
      name: "Moniya",
      size: selectedSize.label,
      priceUSD: selectedSize.price,
      image: moniyaImg,
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

            {/* Product Image */}
            <FadeIn className="sticky top-28">
              <div className="aspect-square overflow-hidden bg-card border border-border">
                <motion.img
                  src={moniyaImg}
                  alt="Moniya Oud Oil"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>
              <div className="mt-4 p-4 border border-border bg-card">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">Bengal Oud Moniya · [MONP12-23/B003]</p>
              </div>
            </FadeIn>

            {/* Product Details */}
            <StaggerContainer className="flex flex-col gap-6 pt-2">
              <StaggerItem>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-2">Bengal Oud · Pure Oil · [MONP12-23/B003]</p>
                <h1 className="font-serif text-5xl md:text-6xl text-foreground tracking-tight mb-2">Moniya</h1>
                <p className="text-muted-foreground text-sm uppercase tracking-[0.2em]">Manipur, India · Distilled 2023</p>
              </StaggerItem>

              <StaggerItem>
                <div className="h-[1px] bg-border w-full" />
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/75 text-lg leading-relaxed font-light">
                  Alhamdulillah — Bengal Oud proudly presents its most reputed oud oil: <span className="text-primary font-medium">Moniya</span>. Distilled just seven months ago from the finest selected raw materials sourced from the ancient forests of Manipur, India. The agarwood trees from which this oil was born were estimated to be <span className="text-foreground">50 to 60 years old</span>.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-foreground/65 text-base leading-relaxed">
                  The raw materials were carefully soaked for <strong className="text-foreground/80">10 days</strong> before being distilled using a traditional old-school method in a <strong className="text-foreground/80">copper pot</strong> — a technique that preserves the full spectrum of the oud's character and ensures nothing is lost to modernity.
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
                        <motion.span
                          key="added"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 size={16} /> Added to Cart
                        </motion.span>
                      ) : (
                        <motion.span
                          key="add"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-2"
                        >
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

              {/* Trust signals */}
              <StaggerItem>
                <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                  {[
                    { label: "100% Authentic", sub: "Verified origin" },
                    { label: "Pure Oil", sub: "Alcohol-free" },
                    { label: "Copper Pot", sub: "Traditional distillation" },
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
            <h2 className="font-serif text-4xl text-foreground">The Notes of Moniya</h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg leading-relaxed">
              We have only been able to identify a few notes — and we are sure you will discover a few more, Insha'Allah.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4">
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

      {/* Origin Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Provenance</p>
                <h2 className="font-serif text-4xl text-foreground mb-6">The Story Behind Moniya</h2>
                <div className="space-y-4 text-foreground/65 text-base leading-relaxed">
                  <p>
                    The trees from Manipur's dense forests are among the most prized agarwood sources in all of South Asia. The combination of soil, climate, and a half-century of growth creates a resin profile unlike anything from younger trees.
                  </p>
                  <p>
                    After sourcing the raw materials, our master distiller soaked them for a full ten days — allowing the water to draw out every complex molecule before the copper pot transformed raw wood into liquid gold.
                  </p>
                  <p>
                    The result is Moniya — a deeply personal, unfiltered expression of genuine Indian oud. Nothing has been added. Nothing has been masked.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Origin", value: "Manipur, India" },
                  { label: "Tree Age", value: "50–60 Years" },
                  { label: "Soak Period", value: "10 Days" },
                  { label: "Distillation Method", value: "Copper Pot (Traditional)" },
                  { label: "Distillation Date", value: "2023" },
                  { label: "Batch Code", value: "MONP12-23/B003" },
                  { label: "Format", value: "Pure Oud Oil · Alcohol-Free" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-border/50 text-sm">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{spec.label}</span>
                    <span className="text-foreground/80 font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Purchase CTA */}
      <section className="py-16 bg-primary/8 border-y border-primary/20">
        <FadeIn>
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Experience Moniya?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Limited stock available. Contact us on Facebook to secure your bottle.
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
