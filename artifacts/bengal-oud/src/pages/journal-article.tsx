import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Link, useLocation } from "wouter";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import heroBg from "@/assets/images/hero-bg.png";

const articles: Record<string, any> = {
  "the-ancient-art-of-agarwood": {
    title: "The Ancient Art of Agarwood: Why Oud is the World's Most Precious Scent",
    category: "Heritage",
    date: "March 2026",
    readTime: "12 min read",
    image: gallery1,
    intro:
      "For over a thousand years, agarwood has been treasured by kings, mystics, and connoisseurs across the Arab world, South Asia, and Japan. Its rarity is only one part of the story. The true reason oud holds such a powerful place in fragrance culture is that it behaves like a living archive — carrying geography, weather, patience, and human craft inside every drop.",
    body: [
      "Agarwood begins in an ordinary tree. When the aquilaria is wounded or infected, it responds by producing a dark aromatic resin. That transformation can take years, sometimes decades, and it is never identical from tree to tree. This unpredictability is what makes oud so fascinating: it is not manufactured in a tidy industrial process, but born out of time and stress. A piece of wood that once seemed unremarkable becomes resinous, fragrant, and deeply valued.",
      "Historically, agarwood travelled along old trade routes from the forests of Bengal and Southeast Asia to the courts of the Middle East and the temples of East Asia. It was burned as incense, distilled into oils, and reserved for ceremonial moments. In each culture, its meaning changed slightly, but the admiration remained the same. Oud represented reverence, wealth, and an understanding of rarity. To possess it was to possess something that could not easily be replaced.",
      "At Bengal Oud, we think of oud not as a luxury trophy but as a material with moral weight. A responsible house must respect the forests, the people, and the knowledge systems that make the material possible. That means choosing sources carefully, working with patience, and refusing to treat fragrance as disposable. We believe the best oud is the one that still feels connected to where it came from.",
      "The sensory profile of oud is equally complex. Depending on origin, age, and extraction method, it may smell smoky, leathery, honeyed, balsamic, or dry and woody. Some oils are soft and meditative, while others are intensely animalic and dark. This range is why oud appeals to collectors: it is impossible to reduce to a single note. It develops on skin, changes with temperature, and often reveals more after the first hour than it did in the opening minutes.",
      "Modern fragrance consumers often ask why oud commands such high prices. The answer is not just rarity, but labor. Harvesting, sorting, cleaning, and distilling resinous wood requires skill and restraint. The finished oil is a concentrated expression of a resource that may have taken nature years to form. When handled properly, the final scent feels less like a product and more like a distilled memory of the forest.",
      "That is why oud has remained timeless even as fragrance trends shift. Fresh citrus scents may come and go. Sweet gourmand compositions may dominate a season. But oud endures because it offers depth, gravity, and character. It feels ceremonial without being old-fashioned. It can be intimate on skin or majestic in the air. In a world that moves quickly, oud encourages a slower kind of attention — one that values nuance over noise.",
      "Our own approach at Bengal Oud is to preserve the elegance of that tradition while making it wearable for contemporary customers. We work to balance strength with refinement, creating oils that open clearly, settle beautifully, and leave a dignified trail. For us, the ancient art of agarwood is not a museum object. It is a living craft, one that still has room to evolve without losing its soul.",
    ],
    pullquote:
      "Oud is not simply a fragrance note — it is a record of time, weather, and patience.",
    extra:
      "The finest oils reveal themselves gradually. They reward attention, wear beautifully on skin, and leave behind a memory that feels older than language. The best way to understand oud is not by reading about it once, but by returning to it again and again as it changes.",
    sections: [
      "What makes agarwood rare",
      "How oud travelled through history",
      "Why the material still matters today",
      "How Bengal Oud treats sourcing with care",
    ],
  },
  "inside-the-sylhet-forests": {
    title: "Inside the Sylhet Forests: How We Source Our Oud",
    category: "Behind the Scenes",
    date: "February 2026",
    readTime: "11 min read",
    image: gallery2,
    intro:
      "Our founder Maksudul Alam Sezan takes us deep into the agarwood forests of Sylhet — where every piece of resinous heartwood is selected by hand, every conversation matters, and every choice reflects the responsibility of working with a living landscape.",
    body: [
      "Source quality begins long before distillation. It starts in the field, under hot sun and humidity, with harvesters who understand how to read the forest. The trees do not reveal their secrets quickly. One must inspect the bark, the weight, the density, and the smell of the wood itself. Skilled eyes can tell when a piece is worth collecting, and when it should remain undisturbed.",
      "Sylhet is unique because it sits at the intersection of tradition and abundance. Its forests hold a long cultural memory of fragrance work, and the people who live near them often have generational knowledge of resin, wood, and scent. Our job is to collaborate respectfully. We do not simply arrive, purchase material, and leave. We build relationships, ask questions, and learn from the local expertise that has made this work possible for decades.",
      "One of the most misunderstood parts of sourcing oud is that not all dark wood is automatically good wood. Resin density alone does not guarantee a beautiful oil. We look for balance, character, and aroma potential. Some pieces are too dry, some too green, some too noisy in profile. The best harvests are the ones that have both presence and elegance once distilled.",
      "The journey from forest to bottle is meticulous. Material is sorted, cleaned, graded, and documented before distillation. At each stage, there is a chance to lose clarity or introduce inconsistency. For that reason, we slow the process down rather than accelerate it. We believe the final fragrance should carry the discipline of the sourcing process inside its structure.",
      "Working in the forest also changes the way we think about value. It is easy, from a distance, to talk about oud as an elite product. But once you stand among the trees and hear the people who care for them, luxury becomes a different word. It begins to mean stewardship, trust, and the willingness to invest in doing things properly. That perspective shapes every bottle we release.",
      "For Bengal Oud, the forest is not a backdrop. It is the origin point of the brand’s identity. Every time we release a fragrance, we want the wearer to feel something of Sylhet’s quiet intensity — the damp earth, the resinous bark, the stillness between harvesting days. A good fragrance can do that without ever becoming literal.",
      "Our promise is simple: source with respect, distill with precision, and present the final oil with the dignity it deserves. That is how we protect both the craft and the people behind it.",
    ],
    pullquote:
      "Every harvest begins with listening — to the forest, to the wood, and to the people who know it best.",
    extra:
      "Sylhet’s fragrance culture has always been special. Our work is to preserve that richness and present it with the care it deserves, so the next generation inherits both the material and the wisdom around it.",
    sections: [
      "Reading the forest",
      "Sorting and grading the wood",
      "Why relationships matter in sourcing",
      "Protecting the origin story",
    ],
  },
  "the-anatomy-of-a-fragrance": {
    title: "The Anatomy of a Fragrance: Understanding Notes, Accords, and Longevity",
    category: "Education",
    date: "January 2026",
    readTime: "10 min read",
    image: product1,
    intro:
      "Top notes, heart notes, base notes — what do they mean and how do they affect your fragrance experience? The answer is less technical than it first appears. Fragrance is a structure of arrival, transformation, and memory, and each layer plays a different emotional role on skin.",
    body: [
      "Top notes are the first impression. They are the bright, volatile molecules that reach the nose immediately after application. Citrus, herbs, and airy spices often live here. Their purpose is not to last forever, but to invite you in. A great opening should feel crisp, clean, and intentional without overwhelming the senses.",
      "The heart, or middle, is where the fragrance reveals its character. Florals, woods, resins, and spices often live here, giving the composition shape and identity. This is the section people remember most when they say a perfume feels warm, elegant, or mysterious. It is where a fragrance stops introducing itself and starts speaking in its own voice.",
      "Base notes are the foundation. They are slower, heavier molecules that linger long after the opening fades. Amber, musk, oud, sandalwood, leather, and vanilla can appear here. Their role is to hold the composition together and create depth. Without a strong base, a fragrance can feel pleasant but forgettable.",
      "Accords are another important concept. An accord is a combination of materials designed to create a new impression larger than any single ingredient. For example, a smoky accord may blend wood, resin, and spice to produce the sense of embered heat. A floral accord may make several blossoms feel like one seamless bouquet. The magic of perfumery is often hidden in these invisible structures.",
      "Longevity is often discussed as if it were only a technical metric, but it is also aesthetic. A fragrance that lasts should not merely remain detectable; it should evolve gracefully. Too much projection can become tiring. Too little structure can vanish too quickly. The best compositions know when to speak loudly and when to fade into memory.",
      "Skin chemistry matters. Climate matters. Application technique matters. Two people can wear the same fragrance and experience entirely different outcomes. That is why education matters. A customer who understands notes and structure is better equipped to choose the perfume that fits their temperament, routine, and environment.",
      "For oud fragrances in particular, this anatomy becomes even more important. Oud can dominate a formula if it is not balanced carefully. At Bengal Oud, we often think in layers: the first breath, the emotional center, and the lasting base. When those layers are aligned, the result is a composition that feels luxurious from the first spray to the final drydown.",
    ],
    pullquote:
      "A great fragrance is built like a composition: the opening attracts, the heart speaks, and the base remembers.",
    extra:
      "This structure is why oud oils can feel so layered. They evolve over hours, revealing warmth, darkness, sweetness, and depth in sequence. Knowing how to read that evolution makes fragrance far more rewarding.",
    sections: [
      "Top notes and first impressions",
      "Heart notes and identity",
      "Base notes and memory",
      "Why balance matters more than strength",
    ],
  },
  "bengal-oud-named-bangladeshs-number-one-luxury-fragrance-brand": {
    title: "Bengal Oud Named Bangladesh's #1 Luxury Fragrance Brand",
    category: "Press",
    date: "December 2025",
    readTime: "9 min read",
    image: product2,
    intro:
      "For the third consecutive year, Bengal Oud has been recognised as the nation's most trusted fragrance house by independent consumer research. Awards matter less than the people behind them, but this recognition still says something important about what customers value most: consistency, elegance, and a sense of trust that survives the first purchase.",
    body: [
      "Recognition is never the endpoint. It is a reflection of how many small promises were kept over time. In fragrance, those promises include the quality of the oil, the reliability of the bottle, the accuracy of the packaging, and the care shown after the sale. Customers may not name each of those elements individually, but they can feel when the entire experience is aligned.",
      "What makes luxury credible is consistency. If a fragrance smells different every time, or if a product arrives with uneven presentation, trust fades quickly. Our team has worked hard to ensure that Bengal Oud feels dependable without becoming predictable. We want the customer to feel that every bottle carries the same standard of respect.",
      "Bangladesh’s luxury market has matured significantly in recent years. Customers are more knowledgeable, more selective, and more interested in brands that feel culturally grounded. Bengal Oud’s growth reflects that shift. People want products with identity — products that do not merely imitate international luxury, but build something locally meaningful and globally competitive.",
      "Being named number one also places responsibility on us. It means we must keep improving education, service, and product development. We cannot rely on one successful season or one strong launch. The trust customers give us is renewed every time they choose a fragrance, recommend it to a friend, or return for a second bottle.",
      "We also believe that prestige should never feel distant. A luxury house can be refined without being cold. It can be premium without being inaccessible. Bengal Oud aims to make the customer feel welcomed into a world of high craft rather than intimidated by it. That balance has become part of our identity.",
      "The recognition from independent research is therefore meaningful because it validates the whole ecosystem — the oils, the presentation, the storytelling, and the service. A luxury fragrance brand is not built by product alone. It is built by the sum of many exacting decisions, repeated quietly over time.",
      "As we look ahead, our focus remains clear: preserve the craftsmanship, deepen the customer experience, and continue building a fragrance house that feels distinctly Bangladeshi in its point of view.",
    ],
    pullquote:
      "Luxury means nothing without trust, consistency, and care.",
    extra:
      "Our mission has never been volume for its own sake. It is to create enduring value through craftsmanship and authenticity, so each customer feels the difference from the first unboxing to the final wear.",
    sections: [
      "Why consistency defines luxury",
      "What customers in Bangladesh expect now",
      "How trust is built over time",
      "Why recognition creates responsibility",
    ],
  },
  "how-to-layer-fragrances": {
    title: "How to Layer Fragrances: The Art of Personalised Scent",
    category: "Education",
    date: "November 2025",
    readTime: "10 min read",
    image: gallery3,
    intro:
      "Scent layering is an ancient technique perfected in the Middle East and adapted across cultures for generations. Done well, it allows a fragrance wearer to create something deeply personal — a composition that reflects mood, season, and identity rather than following a fixed formula.",
    body: [
      "Layering works best when the base scent is given time to settle. Applying one fragrance directly after another can create noise, but allowing each layer to breathe helps the materials interact naturally. The skin becomes a canvas, and the final effect is smoother, richer, and more deliberate.",
      "Start with a stable base. Oud oils, warm musks, sandalwood, or soft amber compositions are excellent foundations because they anchor the structure. On top of that, you can add freshness, sweetness, or floral brightness depending on the mood you want to create. The goal is not to stack as many scents as possible, but to create balance.",
      "Contrast is often more interesting than repetition. A dark oud with a delicate rose can feel regal. A creamy sandalwood with citrus can feel clean and modern. A smoky base with a soft vanilla can feel intimate and comforting. Layering becomes successful when each element contributes a different shade rather than competing for attention.",
      "The environment matters too. In humid weather, a lighter hand usually works better. In colder seasons, richer layers can open more beautifully because the air slows diffusion. The best fragrance wardrobes are seasonal and responsive, not static. Learning to adapt your layers helps your scent feel appropriate and elegant in every setting.",
      "Application technique matters as much as selection. A small amount on pulse points can be enough. If you over-apply, the composition can flatten or become difficult to read. We often advise customers to test combinations on skin over several hours, because the opening can be very different from the drydown.",
      "There is also an emotional side to layering. People often build signature combinations around memories, rituals, or special occasions. One oil may remind them of home. Another may feel like confidence before an event. When layered carefully, fragrance becomes a language for the self rather than a simple accessory.",
      "At Bengal Oud, we encourage experimentation, but always with restraint. Personal scent should feel tailored, not overloaded. A thoughtful combination can say more than a loud one. The best layering looks effortless, even when it has been considered carefully.",
    ],
    pullquote:
      "Layering should feel intentional — like tailoring a fragrance to your own rhythm.",
    extra:
      "A few drops can completely change the personality of a scent. That is why balance matters more than intensity, and why testing matters before committing to a final combination.",
    sections: [
      "Choosing a base",
      "Building contrast",
      "Seasonal considerations",
      "How to test and refine",
    ],
  },
  "agt-venture-investment": {
    title: "AGT Venture Investment: What It Means for the Future of Bengal Oud",
    category: "Press",
    date: "October 2025",
    readTime: "12 min read",
    image: heroBg,
    intro:
      "Following our landmark 10 Crore BDT investment, we sat down with the team at AGT Venture to discuss the shared vision for luxury fragrance in South Asia. This moment matters not because of the headline number alone, but because it signals a longer-term confidence in craftsmanship, culture, and category-building.",
    body: [
      "Growth matters only when it strengthens craft rather than replacing it. A luxury fragrance house can scale in the wrong way if it becomes too eager to produce more without preserving quality. The point of investment, for us, is to improve systems while keeping the core product uncompromised.",
      "The partnership with AGT Venture is designed to support this balance. It gives us room to deepen operations, refine packaging, improve customer experience, and invest in future collections. But those improvements are only meaningful if the fragrance itself remains beautiful and distinctive. The oil still comes first.",
      "There is also a broader regional opportunity. South Asia has a deep fragrance heritage, but not every brand has translated that heritage into a modern luxury identity. Bengal Oud aims to occupy that space with integrity. We want to show that a Bangladeshi fragrance house can stand confidently beside the best international names without losing its own accent.",
      "The investment also reflects a changing customer base. Today’s customers care about provenance, storytelling, and consistency. They want a brand that feels alive, not abstract. They want transparency around ingredients, sourcing, and service. As the category grows, the brands that succeed will be the ones that combine emotional resonance with operational discipline.",
      "Internally, this moment has sharpened our priorities. We are focusing on product development, logistics, retail presentation, and digital storytelling. Each of these areas affects how the brand is experienced in the real world. Luxury is not just what happens in the bottle; it is what happens around it.",
      "We also see this as a responsibility to the communities and craftsmen who support our work. Growth should create more opportunity, more visibility, and more stability for everyone involved in the chain. If investment can help us do that while keeping our standards high, then it becomes more than a financial event. It becomes part of the brand’s history.",
      "The future of Bengal Oud will be built carefully. We are excited, but not hurried. The goal is to expand what is possible without abandoning what made the brand respected in the first place.",
    ],
    pullquote:
      "Scaling a heritage brand should amplify the craft, not dilute it.",
    extra:
      "We are building for the long term, so every decision is measured against the standard of permanence. That discipline will matter more than any single round of funding.",
    sections: [
      "Why growth must protect craft",
      "How the partnership supports the brand",
      "What regional luxury can look like",
      "The long-term responsibility of capital",
    ],
  },
  "the-gift-of-scent": {
    title: "The Gift of Scent: How to Choose a Fragrance for Someone You Love",
    category: "Lifestyle",
    date: "September 2025",
    readTime: "9 min read",
    image: gallery1,
    intro:
      "Gifting a fragrance is one of the most intimate gestures you can make. Unlike many gifts, scent is experienced on the body, in memory, and in daily life. It becomes part of the recipient’s routine, and in some cases, part of their identity.",
    body: [
      "The first rule of gifting fragrance is to think about the person rather than the product. What do they wear? Are they drawn to warmth or freshness? Do they prefer quiet elegance or a more noticeable presence? These clues matter more than trend charts or bestseller lists.",
      "Consider the season and setting. A gift for winter may be richer and more enveloping, while a gift for summer may be lighter and cleaner. If the person is new to fragrance collecting, a versatile composition usually works best because it can fit many situations without requiring specialist knowledge.",
      "Oud oils make especially memorable gifts because they feel personal and substantial. They carry the sense that someone did not just buy something quickly, but chose it with care. A well-chosen oud can become a signature scent, especially when paired with a beautiful presentation and a thoughtful message.",
      "Presentation matters too. Fragrance gifting is as much about the moment of unboxing as it is about the scent itself. The opening should feel considered and generous. Even before the wearer tries the oil, the package should communicate respect. That feeling of care often determines how the gift is remembered.",
      "If you are uncertain, choose compositions with balance rather than extremes. Fragrances that combine wood, softness, and clarity tend to adapt more easily to different tastes. They are elegant without being loud, and they allow the wearer to discover the scent over time rather than being overwhelmed immediately.",
      "A gift of scent can become a memory attached to a person, a season, or a relationship. That is why we treat fragrance gifting as something intimate rather than transactional. When selected thoughtfully, it can communicate affection in a way that words sometimes cannot.",
      "At Bengal Oud, our concierge mindset is simple: make the choice feel personal, make the presentation feel beautiful, and let the fragrance speak for itself after the gift is opened.",
    ],
    pullquote:
      "The best gift feels like it was chosen with the person in mind, not the shelf.",
    extra:
      "For many people, scent becomes part of their identity. A well-chosen fragrance can become a memory they carry every day, which is why gifting it deserves patience and attention.",
    sections: [
      "Reading the recipient",
      "Matching season and mood",
      "Why oud makes a strong gift",
      "The role of presentation",
    ],
  },
};

export default function JournalArticle() {
  const [location] = useLocation();
  const slug = location.split("/journal/")[1] ?? "";
  const article = articles[slug];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {article ? (
        <main className="pt-36 pb-24">
          <div className="w-full max-w-[1720px] mx-auto px-6 xl:px-12 2xl:px-16">
            <Link href="/journal" className="text-[11px] uppercase tracking-[0.24em] text-primary mb-8 inline-block">
              ← Back to Journal
            </Link>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
              <aside className="xl:col-span-3 sticky top-28 hidden xl:block">
                <div className="border border-border bg-card p-10 space-y-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Category</p>
                    <p className="text-foreground font-medium text-lg">{article.category}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Published</p>
                    <p className="text-foreground font-medium text-lg">{article.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Read Time</p>
                    <p className="text-foreground font-medium text-lg">{article.readTime}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Explore</p>
                    <Link href="/collections" className="block text-primary text-sm mb-3">
                      View Collections
                    </Link>
                    <Link href="/about" className="block text-primary text-sm">
                      About Bengal Oud
                    </Link>
                  </div>
                </div>
              </aside>

              <section className="xl:col-span-9">
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary border border-primary/30 px-3 py-1">{article.category}</span>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-4 xl:hidden">
                    {article.date} · {article.readTime}
                  </p>
                </div>

                <h1 className="font-serif text-6xl md:text-8xl xl:text-[6.5rem] text-foreground leading-[0.9] tracking-tight mb-8 max-w-6xl">
                  {article.title}
                </h1>

                <p className="text-2xl md:text-3xl text-muted-foreground leading-[1.35] mb-12 max-w-5xl">
                  {article.intro}
                </p>

                <div className="aspect-[16/7] overflow-hidden border border-border mb-14">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <article className="lg:col-span-8 space-y-10">
                    {article.sections ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {article.sections.map((section: string) => (
                          <div key={section} className="border border-border bg-card p-5 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                            {section}
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {article.body.map((paragraph: string, index: number) => (
                      <p key={index} className="text-xl md:text-[1.35rem] text-foreground/75 leading-[2.1]">
                        {paragraph}
                      </p>
                    ))}
                  </article>

                  <aside className="lg:col-span-4">
                    <div className="border border-border bg-card p-10 sticky top-28">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Editor's Note</p>
                      <p className="text-foreground/70 leading-8 text-base">
                        {article.extra}
                      </p>
                      <div className="mt-8 pt-6 border-t border-border">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Highlighted Thought</p>
                        <blockquote className="font-serif text-3xl text-primary leading-tight">
                          {article.pullquote}
                        </blockquote>
                      </div>
                    </div>
                  </aside>
                </div>
              </section>
            </div>
          </div>
        </main>
      ) : (
        <main className="pt-40 pb-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="font-serif text-4xl text-foreground mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-6">This journal post does not exist yet.</p>
            <Link href="/journal" className="text-primary uppercase tracking-[0.2em] text-[11px]">
              Back to Journal
            </Link>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}
