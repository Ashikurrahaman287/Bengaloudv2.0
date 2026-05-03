import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The Royal Bengal Oud is absolutely mesmerizing. The longevity is incredible, lasting over 24 hours on clothes. True authenticity.",
    author: "Tanvir Ahmed",
    location: "Dhaka"
  },
  {
    text: "From the luxury packaging to the rich scent of the attar, everything screams premium. Bengal Oud has raised the bar for fragrances in Bangladesh.",
    author: "Sarah Rahman",
    location: "Chittagong"
  },
  {
    text: "I've bought oud from Dubai before, but what Sezan bhai is providing here locally is on par, if not better. Highly recommended.",
    author: "Mahmud Hasan",
    location: "Sylhet"
  },
  {
    text: "The delivery was surprisingly fast and the product exceeded my expectations. You can feel the quality in every spray.",
    author: "Kamrul Islam",
    location: "Rajshahi"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn className="mb-16">
          <span className="text-primary tracking-widest text-sm uppercase mb-4 block">Client Experiences</span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Echoes of Elegance</h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="p-8 md:p-10 border border-border bg-card relative">
                <Quote className="absolute top-8 right-8 text-primary/20" size={48} />
                <p className="text-lg md:text-xl font-serif text-foreground/90 leading-relaxed mb-8 relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="font-serif text-primary text-lg">{t.author}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
