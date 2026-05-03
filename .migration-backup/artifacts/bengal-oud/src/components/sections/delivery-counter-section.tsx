import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function DeliveryCounterSection() {
  return (
    <section className="py-32 bg-background relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
      
      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        <FadeIn>
          <span className="text-primary tracking-widest text-sm uppercase font-medium mb-4 block">Trust in Numbers</span>
          
          <div className="py-12 md:py-16">
            <AnimatedCounter 
              baseValue={350000} 
              className="text-6xl md:text-8xl lg:text-[8rem] font-serif text-primary drop-shadow-[0_0_15px_rgba(201,168,76,0.3)] tracking-tighter"
            />
            <h3 className="text-2xl md:text-4xl font-serif text-foreground mt-8">Authentic Oud Products Delivered</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-border pt-12">
            <div>
              <div className="text-foreground/80 font-medium text-lg mb-1">Since 2018</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Heritage</div>
            </div>
            <div>
              <div className="text-foreground/80 font-medium text-lg mb-1">Nationwide</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Delivery</div>
            </div>
            <div>
              <div className="text-foreground/80 font-medium text-lg mb-1">100% Premium</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Authentic Collection</div>
            </div>
            <div>
              <div className="text-foreground/80 font-medium text-lg mb-1">#1 Trusted</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">By Fragrance Lovers</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
