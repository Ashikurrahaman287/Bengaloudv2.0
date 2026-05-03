import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Authentic Products", desc: "100% pure and genuine ingredients sourced globally." },
  { title: "Premium Ingredients", desc: "We use only the highest grade oils and woods." },
  { title: "Expert Craftsmanship", desc: "Blended by master perfumers with decades of experience." },
  { title: "Trusted Since 2024", desc: "A legacy of excellence and customer satisfaction." },
  { title: "Nationwide Supply", desc: "Delivering luxury to every district in Bangladesh." },
  { title: "Luxury Packaging", desc: "Unboxing an experience as premium as the scent itself." },
  { title: "Investor-Backed", desc: "Supported by AGT Venture for continuous quality scaling." },
  { title: "Customer Satisfaction", desc: "Over 350,000+ happy clients trust our brand." }
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Why Choose Bengal Oud</h2>
          <div className="w-16 h-[1px] bg-primary mx-auto" />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="p-6 border border-border bg-background hover:border-primary/40 transition-colors h-full">
                <CheckCircle2 className="text-primary mb-4" size={24} />
                <h3 className="text-lg font-serif text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
