import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import logo from "@assets/ChatGPT_Image_Apr_16,_2026,_02_00_16_AM_1776283223448.png";

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Animated Particles (CSS based or Framer Motion) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {/* We'll just use a subtle repeating gradient or overlay for smoke/particles if needed, 
            or a few floating elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-xl"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={logo}
            alt="Bengal Oud"
            className="h-36 md:h-48 w-auto object-contain mx-auto mb-6 drop-shadow-2xl"
          />
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Authentic Oud, Perfume & Perfume Oils Crafted for Bangladesh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <a href="#products" className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors">
            Explore Products
          </a>
          <a href="#story" className="border border-border text-foreground px-8 py-4 rounded-sm text-sm tracking-widest uppercase font-medium hover:bg-foreground hover:text-background transition-colors">
            Our Story
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      >
        <a href="#story" className="text-primary hover:text-foreground transition-colors flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
