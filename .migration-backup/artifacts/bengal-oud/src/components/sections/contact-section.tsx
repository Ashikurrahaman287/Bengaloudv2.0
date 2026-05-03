import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

export function ContactSection() {
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
                  <p className="text-muted-foreground">Dhaka, Bangladesh</p>
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <input type="tel" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Phone" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input type="email" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Inquiry Type</label>
                <select className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Wholesale / Distribution</option>
                  <option>Corporate Gifting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
