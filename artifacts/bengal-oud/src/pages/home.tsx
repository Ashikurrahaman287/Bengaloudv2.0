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
import { ReviewsMarqueeSection } from "@/components/sections/reviews-marquee-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && (
          <motion.div
            className="min-h-screen bg-background text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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
              <ReviewsMarqueeSection />
              <GallerySection />
              <NewsletterSection />
              <ContactSection />
            </main>

            <Footer />

            {/* WhatsApp FAB */}
            <motion.a
              href="https://wa.me/8801568983888"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 shadow-2xl shadow-black/50 hover:scale-110 transition-transform"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
            >
              <FaWhatsapp size={28} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
