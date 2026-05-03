import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import logo from "@assets/ChatGPT_Image_Apr_16,_2026,_02_00_16_AM_1776283223448.png";

export function Footer() {
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <img src={logo} alt="Bengal Oud" className="h-20 w-auto object-contain mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Authentic Oud, Perfume & Perfume Oils Crafted for Bangladesh. Setting the standard for luxury fragrance since 2018.
            </p>
            <div className="inline-block px-3 py-1 border border-primary/30 bg-primary/5 rounded-full">
              <span className="text-[10px] uppercase tracking-widest text-primary font-medium">Backed by AGT Venture</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#story" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#collections" className="hover:text-primary transition-colors">Collections</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Authentic Oud</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Luxury Perfume</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Perfume Oil</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Gift Boxes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Phone: 01568-983888</li>
              <li>WhatsApp: 01568-983888</li>
              <li>Email: info@bengaloud.com</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://wa.me/8801568983888" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61558718344683" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2018 &ndash; 2026 Bengal Oud. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span>Established 2018</span>
            <span>Made for Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
