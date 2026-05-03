import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { TrendingUp, ShieldCheck, MapPin } from "lucide-react";

export function InvestmentSection() {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-primary/30 bg-primary/5 rounded-full mb-6">
            <span className="text-xs uppercase tracking-widest text-primary font-medium">Backed by AGT Venture</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">A Legacy of Growth</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In 2020, Bengal Oud secured a landmark investment of <span className="text-primary font-semibold">10 Crore BDT</span> from AGT Venture, propelling our mission to redefine luxury fragrances in Bangladesh.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem>
            <div className="bg-background border border-border p-8 text-center h-full hover:border-primary/50 transition-colors duration-500 group">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">Production Expansion</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Scaled our artisan facilities to meet growing demand without compromising the meticulous hand-crafted quality of our signature blends.
              </p>
            </div>
          </StaggerItem>
          
          <StaggerItem>
            <div className="bg-background border border-border p-8 text-center h-full hover:border-primary/50 transition-colors duration-500 group">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">Nationwide Distribution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Established a robust logistics network ensuring our premium authentic collection reaches connoisseurs in every corner of the country.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="bg-background border border-border p-8 text-center h-full hover:border-primary/50 transition-colors duration-500 group">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-3 text-foreground">Brand Scaling</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Solidified our position as the undeniable market leader in authentic oud, raising the standard for the entire fragrance industry.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
