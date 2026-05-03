import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Link } from "wouter";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import heroBg from "@/assets/images/hero-bg.png";

const featured = {
  slug: "the-ancient-art-of-agarwood",
  title: "The Ancient Art of Agarwood: Why Oud is the World's Most Precious Scent",
  category: "Heritage",
  date: "March 2026",
  excerpt: "For over a thousand years, agarwood has been treasured by kings, mystics, and connoisseurs across the Arab world, South Asia, and Japan. We trace the history of the world's most expensive raw material — and why Bengal Oud's approach to sourcing it is unlike any other.",
  image: gallery1,
  readTime: "12 min read",
};

const articles = [
  {
    slug: "inside-the-sylhet-forests",
    title: "Inside the Sylhet Forests: How We Source Our Oud",
    category: "Behind the Scenes",
    date: "February 2026",
    excerpt: "Our founder Maksudul Alam Sezan takes us deep into the agarwood forests of Sylhet — where every piece of resinous heartwood is selected by hand.",
    image: gallery2,
    readTime: "11 min read",
  },
  {
    slug: "the-anatomy-of-a-fragrance",
    title: "The Anatomy of a Fragrance: Understanding Notes, Accords, and Longevity",
    category: "Education",
    date: "January 2026",
    excerpt: "Top notes, heart notes, base notes — what do they mean and how do they affect your fragrance experience? Our master perfumer explains.",
    image: product1,
    readTime: "10 min read",
  },
  {
    slug: "bengal-oud-named-bangladeshs-number-one-luxury-fragrance-brand",
    title: "Bengal Oud Named Bangladesh's #1 Luxury Fragrance Brand",
    category: "Press",
    date: "December 2025",
    excerpt: "For the third consecutive year, Bengal Oud has been recognised as the nation's most trusted fragrance house by independent consumer research.",
    image: product2,
    readTime: "9 min read",
  },
  {
    slug: "how-to-layer-fragrances",
    title: "How to Layer Fragrances: The Art of Personalised Scent",
    category: "Education",
    date: "November 2025",
    excerpt: "Scent layering is an ancient technique perfected in the Middle East. Here is how to build your own signature combination using Bengal Oud's collection.",
    image: gallery3,
    readTime: "10 min read",
  },
  {
    slug: "agt-venture-investment",
    title: "AGT Venture Investment: What It Means for the Future of Bengal Oud",
    category: "Press",
    date: "October 2025",
    excerpt: "Following our landmark 10 Crore BDT investment, we sat down with the team at AGT Venture to discuss the shared vision for luxury fragrance in South Asia.",
    image: heroBg,
    readTime: "12 min read",
  },
  {
    slug: "the-gift-of-scent",
    title: "The Gift of Scent: How to Choose a Fragrance for Someone You Love",
    category: "Lifestyle",
    date: "September 2025",
    excerpt: "Gifting a fragrance is one of the most intimate gestures you can make. Our concierge team reveals how to choose the perfect scent for any personality.",
    image: gallery1,
    readTime: "9 min read",
  },
];

const categories = ["All", "Heritage", "Education", "Behind the Scenes", "Press", "Lifestyle"];

export default function Journal() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-20 bg-card border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Stories & Press</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6 tracking-tight">Journal</h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Dispatches from the world of fine fragrance — stories, education, press, and the craft behind Bengal Oud.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <Link href={`/journal/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border group">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary border border-primary/30 px-3 py-1">
                    {featured.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{featured.date}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug group-hover:text-primary transition-colors">{featured.title}</h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5">Read Article →</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{featured.readTime}</span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] border border-border text-muted-foreground hover:border-primary hover:text-primary bg-transparent transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <StaggerItem key={i}>
                <Link href={`/journal/${article.slug}`}>
                  <article className="group cursor-pointer flex flex-col h-full border border-border hover:border-primary/30 transition-colors bg-card">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-7 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-primary">{article.category}</span>
                        <span className="text-[10px] text-muted-foreground">·</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{article.date}</span>
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug flex-grow">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                        <span className="text-[10px] uppercase tracking-[0.18em] text-primary/80 group-hover:text-primary transition-colors">
                          Read More →
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{article.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="text-center mb-14">
            <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-4">As Featured In</p>
            <h2 className="font-serif text-3xl text-foreground">In the Press</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["The Daily Star", "Prothom Alo Business", "Daily Sun", "Business Bangladesh"].map((outlet, i) => (
              <StaggerItem key={i}>
                <div className="border border-border p-6 text-center hover:border-primary/40 transition-colors">
                  <p className="font-serif text-foreground/60 text-sm italic">"{outlet}"</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
