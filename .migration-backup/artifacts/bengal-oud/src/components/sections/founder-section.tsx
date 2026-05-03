import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import founderImg from "@assets/image_1776283040455.png";

export function FounderSection() {
  return (
    <section id="founder" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-5 relative">
            <div className="aspect-[3/4] relative group">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500" />
              <img 
                src={founderImg} 
                alt="Maksudul Alam Sezan" 
                className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] contrast-125 border border-border"
              />
            </div>
          </FadeIn>
          
          <div className="lg:col-span-7 lg:pl-12">
            <StaggerContainer className="flex flex-col gap-6">
              <StaggerItem>
                <span className="text-primary tracking-widest text-xs uppercase">The Visionary</span>
                <h2 className="text-3xl md:text-5xl font-serif mt-2 mb-4">Maksudul Alam Sezan</h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  "Fragrance is more than just a scent; it is a memory, an emotion, an unspoken language. When I founded Bengal Oud, my mission was not just to sell perfumes, but to introduce the rich, profound heritage of authentic agarwood to Bangladesh."
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  What started as a passionate endeavor has transformed into a nationwide phenomenon. Through meticulous attention to detail, uncompromising standards for raw materials, and a deep reverence for the craft of perfumery, Sezan has built Bengal Oud into a symbol of absolute luxury and unwavering trust.
                </p>
              </StaggerItem>
              <StaggerItem className="mt-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_Maksudul_Alam.svg" alt="Signature" className="h-12 opacity-50 filter invert" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="font-serif text-xl text-primary italic mt-2">Founder & CEO</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
