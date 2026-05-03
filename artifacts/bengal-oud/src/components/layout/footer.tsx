import { Link } from "wouter";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "@assets/ChatGPT_Image_Apr_16,_2026,_02_00_16_AM_1776283223448.png";
import comingTag from "@assets/image_1777771799270.png";

export function Footer() {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <img src={logo} alt="Bengal Oud" className="h-16 w-auto object-contain mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Authentic Oud, Perfume & Perfume Oils crafted for the discerning connoisseur. Redefining luxury fragrance in Bangladesh since 2024.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="https://wa.me/8801568983888" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                <FaWhatsapp size={16} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61558718344683" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                <FaInstagram size={16} />
              </a>
            </div>
            <div className="inline-flex items-center px-3 py-1.5 border border-primary/30 bg-primary/5">
              <span className="text-[10px] uppercase tracking-widest text-primary font-medium">Business Since 2024</span>
            </div>
          </div>

          <div>
            <h4 className="text-foreground text-[10px] uppercase tracking-[0.2em] mb-7 font-medium">Explore</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><a href="/#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Heritage</Link></li>
              <li><Link href="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-[10px] uppercase tracking-[0.2em] mb-7 font-medium">Products</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/collections" className="hover:text-primary transition-colors">Authentic Oud</Link></li>
              <li className="flex items-center gap-2">
                <Link href="/collections" className="hover:text-primary transition-colors">Luxury Perfume</Link>
                <span className="text-[9px] uppercase tracking-[0.18em] text-primary border border-primary/40 px-2 py-0.5">Coming</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/collections" className="hover:text-primary transition-colors">Perfume Oils</Link>
                <span className="text-[9px] uppercase tracking-[0.18em] text-primary border border-primary/40 px-2 py-0.5">Coming</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/collections" className="hover:text-primary transition-colors">Gift Boxes</Link>
                <span className="text-[9px] uppercase tracking-[0.18em] text-primary border border-primary/40 px-2 py-0.5">Coming</span>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/collections" className="hover:text-primary transition-colors">Limited Editions</Link>
                <span className="text-[9px] uppercase tracking-[0.18em] text-primary border border-primary/40 px-2 py-0.5">Coming</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground text-[10px] uppercase tracking-[0.2em] mb-7 font-medium">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="tel:01568983888" className="hover:text-primary transition-colors">01568-983888</a></li>
              <li><a href="https://wa.me/8801568983888" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
              <li><a href="mailto:info@bengaloud.com" className="hover:text-primary transition-colors">info@bengaloud.com</a></li>
              <li className="leading-relaxed">Khilgaon, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 - 2026 Bengal Oud. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/return-policy" className="hover:text-primary transition-colors">Return Policy</Link>
            <span>Business Since 2024 · Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
