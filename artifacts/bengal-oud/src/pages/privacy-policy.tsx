import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you share with us directly, such as name, phone number, email, and order details, when you contact us or place an order.",
  },
  {
    title: "How We Use It",
    body: "We use your information to respond to inquiries, process orders, provide customer support, and improve our website and services.",
  },
  {
    title: "Sharing",
    body: "We do not sell your personal information. We may share information only when required to fulfill your order or comply with legal obligations.",
  },
  {
    title: "Contact",
    body: "For privacy questions, email contact@bengaloud.com or reach us on WhatsApp at +880 1568-983888.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            This policy explains how Bengal Oud handles your personal information when you visit our website or contact us.
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
