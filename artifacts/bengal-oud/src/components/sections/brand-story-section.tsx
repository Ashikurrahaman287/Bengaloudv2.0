import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";

export function BrandStorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

          <FadeIn className="lg:col-span-5 relative hidden lg:grid grid-rows-2 gap-4 pr-8">
            <div className="row-span-1 overflow-hidden">
              <img
                src={gallery1}
                alt="Agarwood — the heart of Bengal Oud"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="row-span-1 overflow-hidden pl-12">
              <img
                src={gallery2}
                alt="Artisan craft at Bengal Oud"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <StaggerContainer className="lg:col-span-7 flex flex-col gap-8 lg:pl-16 justify-center">
            <StaggerItem>
              <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-2">Our Heritage</p>
              <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight tracking-tight">
                Born from the<br />forests of Bengal.
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-foreground/60 leading-relaxed text-lg font-light max-w-lg">
                Established in 2024, Bengal Oud has become the most trusted fragrance house in Bangladesh — a luxury atelier dedicated to the ancient art of agarwood perfumery.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-foreground/60 leading-relaxed text-lg font-light max-w-lg">
                From sourcing rare oud in the ancient forests of Sylhet to composing each signature blend in our Dhaka atelier, every bottle carries an uncompromising commitment to authenticity and craft.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-serif text-primary mb-1">2024</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Established</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-primary mb-1">100%</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Authentic</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-primary mb-1">64</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Districts</div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
              >
                Read Our Full Story
                <span className="text-base">→</span>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
