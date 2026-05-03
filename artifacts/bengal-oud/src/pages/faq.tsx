import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Plus, Minus } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Ordering & Products",
    items: [
      {
        q: "How do I place an order?",
        a: "You can order directly through WhatsApp by messaging us at +880 1568-983888. Our concierge team will guide you through product selection, confirm availability, and arrange delivery. We aim to respond within a few hours during business hours."
      },
      {
        q: "Are all your products 100% authentic?",
        a: "Absolutely. Every product we sell is verified authentic — sourced directly from agarwood forests and trusted artisan perfumers. We do not sell diluted, synthetic, or counterfeit oud under any circumstances. Authenticity is the foundation of our brand."
      },
      {
        q: "What is the difference between oud oil, attar, and EDP?",
        a: "Oud oil and attar are pure, alcohol-free concentrated fragrance oils applied directly to skin. EDP (Eau de Parfum) is a spray-format fragrance with a high concentration of oils (15-20%) mixed with alcohol, giving a broader sillage and projection. We offer all three formats."
      },
      {
        q: "Can I sample a fragrance before purchasing?",
        a: "Yes — we offer sample sets of our most popular fragrances. Contact us via WhatsApp to ask about our current sampling options."
      },
      {
        q: "Do you offer gift wrapping?",
        a: "All Bengal Oud products are delivered in our signature luxury packaging. For special occasions, we also offer bespoke gold-embossed gift boxes — inquire via WhatsApp for details."
      }
    ]
  },
  {
    title: "Shipping & Delivery",
    items: [
      {
        q: "Do you deliver across Bangladesh?",
        a: "Yes — we deliver to all 64 districts of Bangladesh through our nationwide logistics network. Delivery timelines vary by location: Dhaka typically receives orders within 24 hours; other districts within 2-4 business days."
      },
      {
        q: "What are your delivery charges?",
        a: "Delivery is free for orders above ৳ 5,000 within Dhaka. For outside Dhaka or orders below the threshold, standard courier charges apply. Our concierge will confirm the exact fee at the time of ordering."
      },
      {
        q: "Do you ship internationally?",
        a: "We are currently focused on serving customers within Bangladesh. International shipping is available on a case-by-case basis — please contact us for a quote."
      },
      {
        q: "How can I track my order?",
        a: "Once your order is dispatched, we will send you a tracking number via WhatsApp. You can track your delivery directly through our courier partner's website."
      }
    ]
  },
  {
    title: "Returns & Refunds",
    items: [
      {
        q: "What is your return policy?",
        a: "We accept returns on unopened, sealed products within 7 days of delivery, provided the packaging is in its original condition. Due to the nature of fragrances, opened products cannot be returned unless there is a verified quality defect."
      },
      {
        q: "What if I receive a damaged or incorrect product?",
        a: "We sincerely apologise if this occurs. Please contact us via WhatsApp within 24 hours of receiving your order, with a photo of the issue. We will arrange an immediate replacement or full refund — no questions asked."
      },
      {
        q: "How long does a refund take?",
        a: "Once we receive and inspect the returned product, refunds are processed within 3-5 business days. The refund will be credited via bKash, Nagad, or bank transfer based on your preference."
      }
    ]
  },
  {
    title: "Authenticity & Quality",
    items: [
      {
        q: "How do I know my oud is genuinely authentic?",
        a: "All our raw oud is sourced directly from verified agarwood farmers in Sylhet and Cambodia, with direct supply chain relationships that bypass brokers. Each batch is tested for purity before being used in our products. We back every purchase with our authenticity guarantee."
      },
      {
        q: "Why does your oud smell different from others I have tried?",
        a: "Genuine agarwood is one of the most complex natural materials in the world — no two batches are identical. The scent profile varies depending on the species of tree, region of origin, age of resin, and distillation method. This natural variation is a mark of authenticity, not inconsistency."
      },
      {
        q: "Are your fragrances alcohol-free?",
        a: "Our pure oud oils and attars are entirely alcohol-free. Our EDP (Eau de Parfum) range contains alcohol as a carrier. Each product listing clearly states its format."
      }
    ]
  },
  {
    title: "Wholesale & Corporate",
    items: [
      {
        q: "Do you offer wholesale pricing?",
        a: "Yes — we work with retailers, boutiques, and distributors across Bangladesh. Contact our business team via WhatsApp or email at info@bengaloud.com to discuss wholesale terms."
      },
      {
        q: "Can we order corporate gifts with custom branding?",
        a: "Absolutely. We offer bespoke corporate gifting packages with personalised packaging, engraving, and branded elements. These are popular for Eid gifts, company events, and client appreciation. Minimum quantities apply — contact us for a quote."
      }
    ]
  }
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-start justify-between py-6 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
          {q}
        </span>
        <span className="text-primary shrink-0 mt-1">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground text-base leading-relaxed pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-40 pb-20 bg-card border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Customer Service</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6 tracking-tight">
              FAQ &<br />Policies
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Everything you need to know about our products, ordering, shipping, and policies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 border-b border-border bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Free Delivery", sub: "On orders above ৳5,000" },
              { label: "7-Day Returns", sub: "Sealed products only" },
              { label: "100% Authentic", sub: "Verified guarantee" },
              { label: "Nationwide", sub: "All 64 districts" },
            ].map((badge, i) => (
              <StaggerItem key={i}>
                <div className="p-5 border border-border">
                  <div className="text-sm font-serif text-foreground mb-1">{badge.label}</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{badge.sub}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {sections.map((section, si) => (
            <FadeIn key={si} delay={si * 0.05} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-serif text-4xl text-primary/30">{String(si + 1).padStart(2, "0")}</span>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground">{section.title}</h2>
              </div>
              <div className="border-t border-border">
                {section.items.map((item, ii) => (
                  <AccordionItem key={ii} q={item.q} a={item.a} index={ii} />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground text-base mb-10 leading-relaxed max-w-md mx-auto">
              Our concierge team is available via WhatsApp and email. We typically respond within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8801568983888"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/85 transition-colors"
              >
                Chat on WhatsApp
              </a>
              <a
                href="mailto:info@bengaloud.com"
                className="border border-border text-foreground/70 px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
              >
                Email Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
