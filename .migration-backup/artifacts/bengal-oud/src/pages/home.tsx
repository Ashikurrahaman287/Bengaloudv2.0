import React, { useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { FounderSection } from "@/components/sections/founder-section";
import { InvestmentSection } from "@/components/sections/investment-section";
import { DeliveryCounterSection } from "@/components/sections/delivery-counter-section";
import { ProductsSection } from "@/components/sections/products-section";
import { CollectionsSection } from "@/components/sections/collections-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background text-foreground transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        
        <main>
          <HeroSection />
          <BrandStorySection />
          <FounderSection />
          <InvestmentSection />
          <DeliveryCounterSection />
          <ProductsSection />
          <CollectionsSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <GallerySection />
          <NewsletterSection />
          <ContactSection />
        </main>

        <Footer />

        <a 
          href="https://wa.me/8801568983888" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
    </>
  );
}