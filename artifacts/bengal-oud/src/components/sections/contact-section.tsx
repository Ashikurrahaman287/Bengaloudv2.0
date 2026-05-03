import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", inquiryType: "General Inquiry", message: "" });
  const [sent, setSent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInquiry Type: ${form.inquiryType}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/8801568983888?text=${waText}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
    setSubscribeEmail("");
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <span className="text-primary tracking-widest text-sm uppercase mb-4 block">Connect</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">Get In Touch</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Whether you are seeking a signature scent or inquiring about wholesale distribution, our concierges are ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Phone & WhatsApp</h4>
                  <a href="tel:01568983888" className="text-muted-foreground hover:text-primary transition-colors">01568-983888</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Boutique & Headquarters</h4>
                  <p className="text-muted-foreground">Khilgaon, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Email Inquiries</h4>
                  <a href="mailto:info@bengaloud.com" className="text-muted-foreground hover:text-primary transition-colors">info@bengaloud.com</a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border flex gap-4">
              <a href="https://wa.me/8801568983888" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61558718344683" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors">
                <FaFacebookF size={20} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-card border border-border p-8 md:p-12">
            <h3 className="text-2xl font-serif text-foreground mb-8">Business Inquiry</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} type="text" required className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} type="tel" required className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Phone" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} type="email" required className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Email" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Inquiry Type</label>
                <select value={form.inquiryType} onChange={(e) => setForm((f) => ({ ...f, inquiryType: e.target.value }))} className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Wholesale / Distribution</option>
                  <option>Corporate Gifting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} required rows={4} className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className={`w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium transition-colors ${sent ? "bg-green-700 hover:bg-green-700" : "hover:bg-primary/90"}`}>
                {sent ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-16 bg-card border border-border p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-4xl font-serif text-foreground mb-4">Join the Inner Circle</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Subscribe to receive exclusive access to limited edition releases, private events, and the latest news from Bengal Oud.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                  className="flex-1 bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className={`bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-sm font-medium transition-colors ${subscribed ? "bg-green-700 hover:bg-green-700" : "hover:bg-primary/90"}`}
                >
                  {subscribed ? "Thanks For Subscribing" : "Subscribe"}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
