import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export function BrandStorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StaggerContainer className="order-2 lg:order-1 flex flex-col gap-6">
            <StaggerItem>
              <h2 className="text-3xl md:text-5xl font-serif text-primary">About Bengal Oud</h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Established in 2018, Bengal Oud has risen to become the most trusted fragrance brand in Bangladesh. We are a luxury house dedicated to the art of fine perfumery, specializing in authentic oud, exquisite perfumes, and rich perfume oils.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Our journey began with a singular vision: to bring the world's most precious scent profiles to the discerning connoisseurs of Bangladesh. From sourcing rare agarwood to crafting signature blends, every bottle represents our unyielding commitment to quality, elegance, and trust.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="pt-6 border-t border-border mt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-serif text-primary">2018</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Established</span>
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-primary">100%</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Authentic</span>
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-primary">64</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Districts Reached</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] bg-background p-4 border border-border">
              <div className="absolute inset-0 border border-primary/20 m-6" />
              <div className="w-full h-full bg-muted/30 flex items-center justify-center p-8 text-center relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative">
                  <span className="text-4xl text-primary font-serif mb-4 block">"</span>
                  <p className="text-xl md:text-2xl font-serif text-foreground leading-snug italic">
                    Perfume is the unseen, unforgettable, ultimate accessory of fashion that heralds your arrival and prolongs your departure.
                  </p>
                  <div className="mt-8 w-12 h-[1px] bg-primary mx-auto" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
