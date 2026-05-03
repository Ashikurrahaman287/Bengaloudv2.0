import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";

const sections = [
  {
    title: "All Sales Are Final",
    body: "Because our products are fragrance oils and personal-use items, all sales are final once purchased.",
  },
  {
    title: "Damaged or Incorrect Orders",
    body: "If your order arrives damaged or incorrect, contact us within 48 hours of delivery with your order details and photos so we can help.",
  },
  {
    title: "How to Reach Us",
    body: "Please contact contact@bengaloud.com or WhatsApp +880 1568-983888 for any return-related concerns.",
  },
  {
    title: "Resolution",
    body: "We review each case individually and will offer a fair resolution where appropriate.",
  },
];

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Return Policy</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Read our policy for damaged, missing, or incorrect orders.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="border border-border bg-card p-8 md:p-10">
                <h2 className="font-serif text-2xl text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-8">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/faq" className="text-primary uppercase tracking-[0.2em] text-[11px]">
              Back to FAQ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
