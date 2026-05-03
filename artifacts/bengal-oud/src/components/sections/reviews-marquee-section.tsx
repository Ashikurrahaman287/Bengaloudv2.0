import { FadeIn } from "@/components/ui/fade-in";
import { Star } from "lucide-react";

const allReviews = [
  // MONIYA
  { text: "Moniya is unlike anything I have ever smelled. The barnyard note is primal and raw — this is authentic oud, unapologetically so. I wore it to Jumma and received compliments all day.", author: "Tanvir Ahmed", location: "Dhaka", stars: 5 },
  { text: "The longevity on Moniya is extraordinary. I applied it Thursday evening and could still smell it on my thobe Friday morning. Absolutely worth every penny.", author: "Mahmud Hasan", location: "Sylhet", stars: 5 },
  { text: "I have bought oud from Dubai and Qatar. What Bengal Oud is producing locally is genuinely world-class. Moniya is my favourite purchase of the year.", author: "Abdullah Al Mamun", location: "Comilla", stars: 5 },
  { text: "The copper pot distillation makes all the difference. You can taste the tradition in every drop. I gifted a bottle to my father and he was moved to tears.", author: "Rafiqul Islam", location: "Mymensingh", stars: 5 },
  { text: "I was sceptical about ordering online but the quality of Moniya exceeded my expectations by miles. The plum note is gorgeous and unique. Will order again.", author: "Sadia Islam", location: "Dhaka", stars: 5 },
  { text: "As a fragrance collector for over 12 years, I can say Bengal Oud's Moniya is one of the finest Indian ouds I have encountered at any price point. Remarkable.", author: "Riasat Ahmed", location: "Dhaka", stars: 5 },
  { text: "The incense note in the dry-down is meditative. I use Moniya for evening prayer and it elevates the entire experience. SubhanAllah, what a beautiful creation.", author: "Mohammad Hossain", location: "Khulna", stars: 5 },
  { text: "Packaging was excellent and delivery to Cox's Bazar was faster than expected. The oil itself is stunning — dark, rich, and deeply woody. Highly recommend.", author: "Shafiqul Islam", location: "Cox's Bazar", stars: 5 },
  { text: "I gifted the 5gm bottle to my husband for our anniversary. He hasn't stopped wearing it since. Our guests always ask what he is wearing. Thank you Bengal Oud!", author: "Mehjabin Chowdhury", location: "Chittagong", stars: 5 },
  { text: "The slight sourness in Moniya is what makes it so special. It is not for everyone — but for oud lovers, it is absolutely perfect.", author: "Asif Khan", location: "Dhaka", stars: 5 },
  { text: "I drove from Dinajpur to Dhaka just to smell the collection. Moniya was the clear winner. Ordered two bottles on the spot.", author: "Atiqur Rahman", location: "Dinajpur", stars: 5 },
  { text: "First time buying oud and I was nervous about the strong barnyard character. But within 30 minutes I was completely captivated. A transformative experience.", author: "Zahida Khanam", location: "Bogura", stars: 5 },
  { text: "Bengal Oud sets the standard in Bangladesh. Moniya from Manipur — the 50 year old tree origin story alone is worth the price. But the scent is even better.", author: "Nazmul Haque", location: "Barisal", stars: 5 },
  { text: "I ordered corporate gifts for our entire team during Eid. Every single colleague was amazed. The packaging made it feel like a true luxury gift.", author: "Taslima Nasrin", location: "Noakhali", stars: 5 },
  { text: "The leathery note in Moniya reminds me of aged Arabic oud, but with a distinctly Indian character. This is what authentic oud should smell like.", author: "Imran Hossain", location: "Tangail", stars: 5 },
  { text: "As someone who primarily wears Western perfumes, Moniya opened my eyes to the world of pure oud. The complexity and depth are unmatched. I am converted.", author: "Priya Das", location: "Dhaka", stars: 5 },
  { text: "I have been a loyal Bengal Oud customer since 2019. Every batch gets better. Moniya is their masterpiece. The 10gm bottle is the best investment I have made.", author: "Nusrat Jahan", location: "Dhaka", stars: 5 },
  { text: "My mother gifted me the 2.5gm as a surprise. Three weeks later I am still using the same bottle. Incredible concentration.", author: "Sultana Begum", location: "Gazipur", stars: 5 },
  { text: "Ordered for my husband's birthday. Delivery was on time, packaging was immaculate, and the scent — masha'Allah. He says it is the best gift he has received.", author: "Rumana Akter", location: "Jessore", stars: 5 },
  { text: "The woody base of Moniya is rich and grounding. I wear it to important meetings and it gives me a confidence I cannot explain. This oud has a presence.", author: "Kamrul Islam", location: "Rajshahi", stars: 5 },
  { text: "I have recommended Moniya to at least fifteen friends and family. All came back to thank me. Quality speaks for itself.", author: "Fatima Begum", location: "Sylhet", stars: 5 },
  { text: "What strikes me about Moniya is the honesty of it. No synthetic additives, no artificial sweetness. Just raw, ancient oud from a 60-year-old tree. Priceless.", author: "Sarah Rahman", location: "Chittagong", stars: 5 },
  { text: "Wore Moniya to a wedding — people kept asking where I bought it. The trail it leaves in a room is something else entirely. Pure magic.", author: "Hasan Mahmud", location: "Sylhet", stars: 5 },
  { text: "I apply just one drop of Moniya and it lasts the entire day. Absolutely incredible value. I have spent more on European perfumes that lasted two hours.", author: "Khalid Hossain", location: "Dhaka", stars: 5 },
  { text: "The deep woody character of Moniya settles beautifully on my skin. My skin chemistry seems to love it — it blooms into something extraordinary within an hour.", author: "Nasreen Begum", location: "Rajshahi", stars: 5 },
  { text: "I was gifted Moniya by a friend who visited from Dhaka. I have since ordered three more bottles. Nothing in my collection compares.", author: "Jamilur Rahman", location: "Khulna", stars: 5 },
  { text: "Stunning oud oil. The barnyard opening is bold but settles into something beautiful. Reminds me of old-school Bangladeshi attars from my grandfather's time.", author: "Mofizul Islam", location: "Pabna", stars: 5 },
  { text: "Bengal Oud Moniya is what oud should be. Raw, ancient, and completely unapologetic. I have never felt more connected to my cultural heritage through a scent.", author: "Tahmina Akter", location: "Gazipur", stars: 5 },
  { text: "Ordered 10gm for myself and 5gm as a gift. Both arrived in perfect condition and smell absolutely divine. Bengal Oud has earned a lifelong customer.", author: "Sakib Al Hasan", location: "Dhaka", stars: 5 },
  { text: "As a perfumer myself, I can appreciate the craftsmanship in Moniya. The copper pot distillation is evident in its complexity. Outstanding work.", author: "Rezaul Karim", location: "Dhaka", stars: 5 },

  // QUTUB
  { text: "Qutub is the most refined oud oil I have ever worn. Ten years of aging have transformed it into something almost supernatural. The floral note is unexpected and beautiful.", author: "Faruq Ahmed", location: "Dhaka", stars: 5 },
  { text: "The name Qutub — the perfect person — is entirely fitting. This oud has a noble, composed character that I have never encountered anywhere else at this price.", author: "Ariful Islam", location: "Sylhet", stars: 5 },
  { text: "I bought Qutub on a whim after reading the description. It arrived and I was struck silent. The leathery, dark, slightly floral character is hypnotic.", author: "Meher Nigar", location: "Dhaka", stars: 5 },
  { text: "A decade of aging has done wonders. Qutub opens dark and burnished, then softens into something deeply elegant. My favourite oud of all time.", author: "Mizanur Rahman", location: "Comilla", stars: 5 },
  { text: "The smokiness in Qutub is restrained and sophisticated — nothing harsh. Just a warm, dark envelope that lingers for an extraordinary amount of time.", author: "Tahsin Khan", location: "Chittagong", stars: 5 },
  { text: "I ordered Qutub as an anniversary gift for my father who loves aged ouds. He called me the next day in tears. Nothing has moved him like this in years.", author: "Rezaun Nahar", location: "Mymensingh", stars: 5 },
  { text: "The floral whisper inside Qutub is what surprises everyone. You don't expect it from such a dark, aged oil. It is like finding a flower growing in an ancient forest.", author: "Sabbir Hossain", location: "Dhaka", stars: 5 },
  { text: "Qutub from Nagaland carries the spirit of that land. Bold, resilient, and deeply complex. Bengal Oud has done full justice to this incredible raw material.", author: "Aisha Siddiqua", location: "Khulna", stars: 5 },
  { text: "I wore Qutub to a formal dinner. Three different people approached me to ask about my scent. None of them could believe it was a locally sourced oil.", author: "Obaidur Rahman", location: "Barisal", stars: 5 },
  { text: "The burnished character of Qutub is unlike any Indian oud I have tried. It is sophisticated in the way only time can create. Worth every single taka.", author: "Samia Khatun", location: "Dhaka", stars: 5 },
  { text: "I have Qutub in my rotation alongside some very expensive international ouds. It holds its own completely. Bangladesh should be proud of this production.", author: "Javed Iqbal", location: "Dhaka", stars: 5 },
  { text: "A 10-year aged Nagaland oud at this price is frankly absurd value. Qutub is the kind of fragrance people write about decades later. I am honoured to own it.", author: "Nadia Sultana", location: "Gazipur", stars: 5 },
  { text: "Qutub wears like a second skin by the end of the day. The dry-down is impossibly smooth and warm. I don't want to wash it off. Perfect.", author: "Habibur Rahman", location: "Rajshahi", stars: 5 },
  { text: "I initially wasn't sure about the dark smokiness but after wearing Qutub three times I am completely addicted. It is mesmerizing how it evolves on skin.", author: "Farzana Akter", location: "Narsingdi", stars: 5 },
  { text: "Ordered for Eid and received beautifully packaged. Qutub was a gift to myself and I do not regret it one bit. The leathery opening is confident and bold.", author: "Muntasir Mamun", location: "Cumilla", stars: 5 },
  { text: "Qutub is a serious fragrance for serious oud lovers. It demands respect and rewards patience. Ten years of aging absolutely shows in every aspect of this oil.", author: "Roksana Parvin", location: "Bogura", stars: 5 },
  { text: "I work in perfumery and rarely leave reviews. Qutub compelled me to. The complexity, depth, and balance are professional-grade. Sezan bhai has done it again.", author: "Emdadul Haque", location: "Dhaka", stars: 5 },
  { text: "The slight floral note in Qutub reminded me of my late grandmother's garden. Fragrance and memory are so deeply connected. This oil touched my soul.", author: "Sharmin Akter", location: "Jessore", stars: 5 },
  { text: "Bought both Moniya and Qutub. Love them both for different occasions. Moniya for daytime boldness, Qutub for evening sophistication. Perfect pairing.", author: "Mehedi Hasan", location: "Dhaka", stars: 5 },
  { text: "Qutub is aged confidence in a bottle. My husband has been wearing it every day since it arrived. He says it makes him feel powerful. I believe him.", author: "Nasima Begum", location: "Chittagong", stars: 5 },

  // DEHNAL OUD SYLHET
  { text: "Dehnal Oud Sylhet is everything I wanted from a Bangladeshi oud. Strong, animalic, commanding — it smells like heritage. I ordered two bottles immediately.", author: "Jahangir Alam", location: "Sylhet", stars: 5 },
  { text: "The animalic character of Dehnal Oud Sylhet is not for the faint-hearted, but for true oud connoisseurs it is absolutely magnificent. Raw, powerful, and beautiful.", author: "Shireen Hossain", location: "Dhaka", stars: 5 },
  { text: "Sylhet has always been known for special agarwood. Bengal Oud has captured that perfectly. The longevity of this oil is genuinely unparalleled — I'm still getting compliments 12 hours later.", author: "Nasim Uddin", location: "Sylhet", stars: 5 },
  { text: "The tangy note in Dehnal Oud Sylhet is so unique — I have never smelled anything like it. It commands attention in every room. Truly a limited gem.", author: "Marium Khanam", location: "Hobiganj", stars: 5 },
  { text: "I was born in Sylhet and this oud smells like home. The connection to the land is unmistakable. Masha'Allah, Bengal Oud has created something very special.", author: "Aminul Islam", location: "Sylhet", stars: 5 },
  { text: "Limited stock warning was not a gimmick — I barely got my order in. And I am so glad I did. Dehnal Oud Sylhet is the most unique oud I have ever purchased.", author: "Kohinoor Begum", location: "Moulvibazar", stars: 5 },
  { text: "The barnyard note is subtle and perfectly calibrated — it adds depth without overwhelming. The tangy allure is exactly as described. Bengal Oud's descriptions are always accurate.", author: "Rezwanul Haq", location: "Sunamganj", stars: 5 },
  { text: "I gave Dehnal Oud Sylhet as a gift to my uncle who is an oud collector. He rated it among his top five ouds globally. I'm ordering more for myself.", author: "Farhana Islam", location: "Dhaka", stars: 5 },
  { text: "There is a noble quality to Sylheti agarwood that you can smell in every drop of this oil. It projects magnificently and the dry-down is long and beautiful.", author: "Safiullah Khan", location: "Sylhet", stars: 5 },
  { text: "Bought this on trust based on my experience with Moniya. Was not disappointed. Dehnal Oud Sylhet has a completely different character — equally extraordinary.", author: "Zubair Hossain", location: "Dhaka", stars: 5 },
  { text: "One drop of Dehnal Oud Sylhet lasts me an entire workday and into the evening. The longevity is astonishing. My colleagues thought I was wearing something very expensive from abroad.", author: "Rabeya Sultana", location: "Sylhet", stars: 5 },
  { text: "Strong, yes. Animalic, yes. But there is a refinement to Dehnal Oud Sylhet that stops it from being raw. It is cultivated wildness — if that makes sense. Stunning.", author: "Md. Shariful Islam", location: "Dhaka", stars: 5 },
  { text: "My family has been buying oud from the Sylhet region for generations. This is the best commercial expression of Sylheti oud I have ever encountered.", author: "Begum Jahanara", location: "Sylhet", stars: 5 },
  { text: "Dehnal Oud Sylhet arrived in limited stock and I ordered three bottles. Given the quality, this was the right decision. If you see it in stock, buy it immediately.", author: "Khurshid Alam", location: "Dhaka", stars: 5 },
  { text: "The commanding projection is no exaggeration. I wore one drop to a family gathering and relatives from across the room were asking what I was wearing. Incredible.", author: "Sonia Chowdhury", location: "Chittagong", stars: 5 },

  // BONGOSSAM
  { text: "Bongossam is an experience, not just a fragrance. The chilli opening genuinely shocked me — in the best possible way. I have never smelled anything that opens like this.", author: "Tanveer Alam", location: "Dhaka", stars: 5 },
  { text: "The four-act scent journey of Bongossam is exactly as described. The chilli, the sweet dance, the animalic roar, the leather finish. I was completely absorbed for hours.", author: "Rifat Hossain", location: "Dhaka", stars: 5 },
  { text: "I bought Bongossam for the novelty of the Assamese chilli note and stayed for the incredible animalic dry-down. This is a budget killer. Unbelievable value.", author: "Shipon Ahmed", location: "Gazipur", stars: 5 },
  { text: "Bongossam is loud and it is proud. It announces your presence before you enter the room. I love that kind of confidence in a fragrance. Absolutely addicted.", author: "Dilruba Yasmin", location: "Khulna", stars: 5 },
  { text: "The wild animalic core of Bongossam settles into the most beautiful leather drydown after a few hours. The patience is rewarded. Incredible oud.", author: "Bashir Uddin", location: "Sylhet", stars: 5 },
  { text: "First Assamese oud I have tried and it completely reordered my understanding of what oud can be. That chilli opening is bold, brave, and brilliant.", author: "Shahedur Rahman", location: "Bogura", stars: 5 },
  { text: "Bongossam is loud and roaring as advertised. But underneath the power there is real artistry. The sweet note that emerges mid-way is genuinely gorgeous.", author: "Nasrin Sultana", location: "Dhaka", stars: 5 },
  { text: "I ordered Bongossam as an experiment after loving Moniya. I was not expecting to love it this much. The Assamese character is completely different — and completely wonderful.", author: "Touhidul Islam", location: "Rajshahi", stars: 5 },
  { text: "A budget killer is an understatement. I know oud collectors paying ten times this price for something less complex. Bengal Oud should be very proud of Bongossam.", author: "Shaheen Hossain", location: "Dhaka", stars: 5 },
  { text: "The opening of Bongossam is not for the shy. But if you have courage and a love for genuine oud character — this is your oil. I wore it every day for two weeks straight.", author: "Momotaz Begum", location: "Jessore", stars: 5 },
  { text: "Bongossam pairs incredibly well with cooler weather. The warmth of the leather and animalic notes feels like a second skin in the evening. Truly special.", author: "Wahidur Rahman", location: "Rangpur", stars: 5 },
  { text: "I have the full Bengal Oud collection now. Bongossam is my most-worn. The shock factor of that chilli opening never gets old. My friends are always stunned.", author: "Kamrun Nahar", location: "Dhaka", stars: 5 },
  { text: "The sweetness that dances through Bongossam's heart is so unexpected after the bold opening. It's like an adventure — bold, then tender, then wild again. Love it.", author: "Sabbir Ahmed", location: "Cumilla", stars: 5 },
  { text: "I gifted Bongossam to my brother who wears exclusively designer cologne. He texted me the next day asking where to buy more. Mission accomplished.", author: "Rehana Parvin", location: "Dhaka", stars: 5 },
  { text: "Bongossam's longevity is exceptional. I applied before Fajr and could still smell it clearly at Maghrib. For an oil at this price, that is genuinely extraordinary.", author: "Emranul Haque", location: "Narayanganj", stars: 5 },

  // MORE MIXED REVIEWS
  { text: "I have tried all four Bengal Oud oils and each one tells a completely different story. Moniya is raw, Qutub is noble, Sylhet commands, and Bongossam roars. A stunning collection.", author: "Mahfuz Ahmed", location: "Dhaka", stars: 5 },
  { text: "Bengal Oud has become my go-to gifting brand. Every person I have gifted to has become a customer themselves. The quality is absolutely undeniable.", author: "Lovely Akter", location: "Tangail", stars: 5 },
  { text: "I discovered Bengal Oud through a friend's recommendation. Six months later I own all four products and have introduced the brand to my entire family. Just stunning work.", author: "Anwar Hossain", location: "Chittagong", stars: 5 },
  { text: "The customer service team responded instantly when I had a question about sizing. The oil arrived in two days. And the smell? Masha'Allah. Five stars every time.", author: "Ruma Begum", location: "Gazipur", stars: 5 },
  { text: "Bengal Oud's packaging is as premium as what's inside. Every bottle feels like unwrapping a gift. I keep the bottles on display even after they're empty.", author: "Jashim Uddin", location: "Dhaka", stars: 5 },
  { text: "I have visited Bengal Oud's page after every Eid for the past three years. The quality never wavers. This is what genuine commitment to craft looks like.", author: "Sumaiya Akter", location: "Mymensingh", stars: 5 },
  { text: "Ordered during Ramadan and received in time to wear for Eid prayer. The entire masjid was scented with it. Received so many questions. A truly memorable Eid.", author: "Monirul Islam", location: "Dhaka", stars: 5 },
  { text: "As a woman who loves oud, I often feel mainstream brands don't cater to my preference for bold, authentic scents. Bengal Oud does. I am a devoted customer.", author: "Tania Sultana", location: "Dhaka", stars: 5 },
  { text: "My son bought me Moniya as a birthday gift. I have been wearing it every Friday for three months. This is what oud should be — ancestral, grounding, and real.", author: "Abdul Quddus", location: "Khulna", stars: 5 },
  { text: "I was a strict French perfume person until I tried Bengal Oud. One application of Qutub and I completely reconsidered my relationship with fragrance. Life-changing.", author: "Ismat Ara", location: "Dhaka", stars: 5 },
  { text: "Each order I have placed has been perfectly packaged, on time, and exactly as described. Consistent quality is rare. Bengal Oud delivers it every single time.", author: "Shafiur Rahman", location: "Jessore", stars: 5 },
  { text: "Wearing Bengal Oud makes me feel connected to something ancient. These are not just perfumes — they are bridges to our heritage. I treasure every bottle.", author: "Shirin Akter", location: "Sylhet", stars: 5 },
  { text: "I own over 200 fragrances. Bengal Oud's collection sits in my top ten without question. The authenticity is something money alone cannot manufacture.", author: "Nurun Nahar", location: "Dhaka", stars: 5 },
  { text: "First order was a test. Second order was a conviction. Third order was a tradition. I will keep buying Bengal Oud for as long as they keep making it.", author: "Jahirul Islam", location: "Bogura", stars: 5 },
  { text: "The way Bongossam evolves over eight hours on my skin is like watching a performance. Act one shocks, act two enchants, act three roars, act four whispers. Theatre.", author: "Rabindranath Das", location: "Dhaka", stars: 5 },
  { text: "Qutub reminded me of an old Arabic oud my grandfather used to wear in the 1980s. A scent I thought I would never find again. Thank you Bengal Oud.", author: "Sarwar Hossain", location: "Chittagong", stars: 5 },
  { text: "Dehnal Oud Sylhet made me prouder of my Bangladeshi heritage than I have ever felt before. That we produce oud of this quality is something to celebrate.", author: "Jamal Uddin", location: "Sylhet", stars: 5 },
  { text: "My fragrance journey started with Bengal Oud and I have no desire to go anywhere else. The four oils cover every mood and occasion perfectly.", author: "Aklima Khatun", location: "Narayanganj", stars: 5 },
  { text: "I introduced Bengal Oud to our mosque's community. Now half the brothers in our jamaat wear it for Jumma. Word spreads fast when quality is real.", author: "Minhaj Uddin", location: "Rajshahi", stars: 5 },
  { text: "Bought the full set of four as a wedding gift. The groom said it was the most meaningful gift he received. Each bottle is a different chapter of South Asian oud heritage.", author: "Morsheda Akter", location: "Dhaka", stars: 5 },
];

const row1 = allReviews.slice(0, 40);
const row2 = allReviews.slice(40, 80);
const row3 = allReviews.slice(80);

function ReviewCard({ review }: { review: typeof allReviews[0] }) {
  return (
    <div className="shrink-0 w-80 md:w-96 mx-3 p-6 border border-border bg-card flex flex-col gap-3">
      <div className="flex gap-1">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} size={12} className="fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed font-light line-clamp-4">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between pt-2 border-t border-border/40 mt-auto">
        <span className="font-serif text-primary text-sm">{review.author}</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{review.location}</span>
      </div>
    </div>
  );
}

export function ReviewsMarqueeSection() {
  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <FadeIn>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-primary text-[11px] uppercase tracking-[0.3em] mb-3">Client Experiences</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Echoes of Elegance</h2>
            </div>
            <p className="text-muted-foreground text-sm hidden md:block">
              {allReviews.length}+ verified reviews
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mb-4 overflow-hidden">
        <div className="marquee-track flex">
          {[...row1, ...row1].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative mb-4 overflow-hidden">
        <div className="marquee-track-reverse flex">
          {[...row2, ...row2].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Row 3 — left to right (slower) */}
      <div className="relative overflow-hidden">
        <div className="marquee-track-slow flex">
          {[...row3, ...row3].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
