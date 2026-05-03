import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import founderImg from "@assets/image_1776283040455.png";

const values = [
  {
    title: "Authenticity",
    desc: "Every product we sell is verified authentic. We source directly from agarwood forests and trusted artisan perfumers — no shortcuts, no compromises.",
  },
  {
    title: "Heritage",
    desc: "Oud has been treasured in Bengal for centuries. We honour that history in everything we create, drawing from the deep forests of Sylhet and beyond.",
  },
  {
    title: "Craftsmanship",
    desc: "Our blends are composed through innovative distillation techniques refined over years. Each formula is tested and hand-checked before it leaves our hands.",
  },
  {
    title: "Trust",
    desc: "Every customer who chooses Bengal Oud places their trust in us. We take that responsibility seriously — in every bottle, every interaction, every delivery.",
  },
];

export default function About() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/8801568983888?text=${waText}`, "_blank", "noopener noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24 bg-card border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn>
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground tracking-tight mb-8 leading-tight">
              Heritage &<br />
              <em className="text-primary not-italic">Craft.</em>
            </h1>
            <p className="text-foreground/65 text-xl max-w-2xl leading-relaxed">
              Bengal Oud represents an aroma and mystery that is <span className="text-primary">golden</span>, highly pleasant, intense, and beautiful — an extraordinary, well-balanced melding of traditions from around the world.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-6">About Bengal Oud</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Where tradition meets a modern twist
              </h2>
              <div className="space-y-5 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Bengal Oud combines the meaningful depth, aggressive intensity, and simplicity of our culture, the mystery and luxurious character of <strong className="text-foreground/85">Arabian perfumery</strong>, and the delicate elegance, whispering charm of the finest olfactory traditions.
                </p>
                <p>
                  Through the use of nearly forgotten, rare ingredients of the highest quality, combined with <strong className="text-foreground/85">innovative distillation techniques</strong>, Bengal Oud aspires to return one to the ancient roots of perfumery — as well as revitalize the olfactory experience with a modern twist.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-6">
              <div className="p-8 border border-primary/30 bg-primary/5">
                <p className="text-foreground/75 text-base leading-relaxed">
                  We curate sublime fragrances from nature's most precious sources — artisanal attars, rich oud oils, and elegant perfumes. Each bottle captures a timeless story, blending heritage with artistry. Our creations are an invitation to experience profound depth and sophistication, designed for those who seek an enduring signature scent.
                </p>
              </div>

              <div className="p-8 border border-border bg-card">
                <p className="text-foreground/75 text-base leading-relaxed">
                  We are architects of scent, weaving stories with precious oud and rare botanicals. Our attars and perfumes are not just fragrances, but <em className="text-primary">liquid poetry</em> — capturing whispered secrets of ancient forests and the golden warmth of amber. Dare to adorn your soul with an olfactive signature that is profoundly and uniquely yours.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2024", label: "Established" },
              { value: "350K+", label: "Happy Customers" },
              { value: "64", label: "Districts Reached" },
              { value: "100%", label: "Authentic Products" },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-4xl md:text-5xl font-serif text-primary mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-5 relative">
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-0 bg-primary/15 translate-x-5 translate-y-5" />
                <img
                  src={founderImg}
                  alt="Founder Bengal Oud"
                  className="absolute inset-0 w-full h-full object-cover border border-border relative z-10"
                />
              </div>
            </FadeIn>

            <div className="lg:col-span-7 lg:pl-8">
              <StaggerContainer className="flex flex-col gap-6">
                <StaggerItem>
                  <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">The Vision</p>
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground">Bengal Oud</h2>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.15em] mt-2">Feel the Real Aroma</p>
                </StaggerItem>
                <StaggerItem>
                  <blockquote className="border-l-2 border-primary pl-6 py-1">
                    <p className="text-foreground/80 text-xl font-serif italic leading-relaxed">
                      "Fragrance is more than a scent — it is a memory, an emotion, an unspoken language. Our mission is to bring the world's most precious oud heritage to those who truly seek it."
                    </p>
                  </blockquote>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-foreground/65 leading-relaxed text-base">
                    With deep roots in the agarwood traditions of the Indian subcontinent and an obsessive reverence for the craft of perfumery, Bengal Oud has spent years forging direct relationships with agarwood artisans across Manipur, Nagaland, Sylhet, and Assam — ensuring every drop that reaches you is the real thing.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href="https://wa.me/8801568983888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-primary text-primary px-7 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Connect with Us
                  </a>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-16">
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">What We Stand For</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Our Values</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ borderColor: "hsl(44 55% 54% / 0.4)" }}
                  className="p-10 border border-border transition-colors bg-background h-full"
                >
                  <div className="text-primary font-serif text-4xl mb-4">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Get in Touch</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                We are honoured you chose to visit
              </h2>
              <p className="text-foreground/65 text-base leading-relaxed mb-10">
                Please stay in touch. Feel free to inquire, suggest, or comment on what we share with you. We read every message and respond personally.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 border border-border bg-card">
                  <div className="w-10 h-10 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Customer Service Email</p>
                    <a href="mailto:contact@bengaloud.com" className="text-foreground hover:text-primary transition-colors font-medium">
                      contact@bengaloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 border border-border bg-card">
                  <div className="w-10 h-10 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">WhatsApp</p>
                    <a href="https://wa.me/8801568983888" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
                      +880 1568-983888
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 border border-border bg-card">
                  <div className="w-10 h-10 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Facebook / Order Here</p>
                    <a href="https://www.facebook.com/profile.php?id=61558718344683" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
                      Bengal Oud on Facebook
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border border-border bg-card p-8 md:p-10">
                <h3 className="font-serif text-2xl text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                      placeholder="Inquiry, order, or feedback"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-background border border-border text-foreground px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/40"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 text-[11px] uppercase tracking-[0.25em] transition-all duration-300 ${
                      sent
                        ? "bg-primary/20 text-primary border border-primary"
                        : "bg-primary text-primary-foreground hover:bg-primary/85"
                    }`}
                  >
                    {sent ? "Message sent via WhatsApp ✓" : "Send Message via WhatsApp"}
                  </motion.button>

                  <p className="text-[10px] text-muted-foreground text-center">
                    Submitting this form will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/8 border-y border-primary/20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Experience the Collection</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every fragrance carries the story of our heritage. Find yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/collections"
                className="bg-primary text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/85 transition-colors"
              >
                Shop Collections
              </Link>
              <a
                href="https://wa.me/8801568983888"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground/80 px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
