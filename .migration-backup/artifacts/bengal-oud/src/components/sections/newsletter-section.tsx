import { FadeIn } from "@/components/ui/fade-in";

export function NewsletterSection() {
  return (
    <section className="py-24 bg-primary/10 border-y border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Join the Inner Circle</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Subscribe to receive exclusive access to limited edition releases, private events, and the latest news from Bengal Oud.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-background border border-border px-6 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
