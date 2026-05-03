import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";
import { Link } from "wouter";

const smokePaths = [
  "M0 220C80 180 140 140 210 150C290 162 320 228 390 236C470 246 520 190 600 172C690 152 780 182 840 236",
  "M10 260C90 230 150 200 220 208C300 218 334 286 410 292C490 298 560 248 640 230C730 210 802 238 860 280",
  "M0 300C70 278 132 250 198 256C276 262 316 320 392 326C476 332 548 290 622 270C702 248 780 270 842 312",
];

const dust = [
  { left: "62%", top: "28%", size: "2px", delay: 0 },
  { left: "68%", top: "36%", size: "1.5px", delay: 1.2 },
  { left: "74%", top: "24%", size: "2.5px", delay: 2.1 },
  { left: "82%", top: "42%", size: "1.5px", delay: 0.6 },
  { left: "88%", top: "30%", size: "2px", delay: 1.8 },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroBg}
          alt="Bengal Oud"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.08 }}
          animate={{ scale: [1.08, 1.14, 1.08], x: [0, -10, 0], y: [0, 8, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[32rem] h-[32rem] rounded-full bg-primary/5 blur-3xl"
          animate={{ opacity: [0.15, 0.35, 0.15], x: [0, 24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-y-0 right-0 w-[58vw] md:w-[50vw] pointer-events-none select-none overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ filter: "blur(18px)", opacity: 0.24 }}
            animate={{ x: [40, -24, 40], y: [26, -18, 26] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          >
            {smokePaths.map((d, index) => (
              <motion.svg
                key={d}
                viewBox="0 0 900 380"
                className="absolute left-0 top-1/2 h-[30rem] w-auto text-white/70"
                style={{
                  width: index === 0 ? "120%" : index === 1 ? "105%" : "95%",
                  opacity: 0.18 + index * 0.04,
                  transform: `translateY(${index * 34 - 34}px)`,
                }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0.65, 1, 0.75], opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 18 + index * 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.path
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1 14"
                  animate={{ strokeDashoffset: [0, -220] }}
                  transition={{ duration: 18 + index * 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.svg>
            ))}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/55" />
          {dust.map((particle, index) => (
            <motion.span
              key={`${particle.left}-${index}`}
              className="absolute rounded-full bg-primary/70"
              style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size, boxShadow: "0 0 10px rgba(212,175,55,0.35)" }}
              initial={{ opacity: 0, y: 20, x: 0 }}
              animate={{ opacity: [0, 0.45, 0], y: [-10, -70, -130], x: [-10, -26, -42] }}
              transition={{ duration: 12 + index * 1.5, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pb-24 md:pb-32 pt-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-primary text-[11px] uppercase tracking-[0.3em] mb-6 font-medium"
          >
            Est. 2024 · Bangladesh
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.25 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.02] mb-8 tracking-tight"
          >
            The Art<br />of Pure<br />
            <motion.span
              className="text-primary italic inline-block"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Oud.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-foreground/55 text-base md:text-lg max-w-md leading-relaxed mb-12 font-light"
          >
            Authentic agarwood fragrances — from the ancient forests of Bengal to your skin. Crafted for those who demand the extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link href="/collections" className="bg-primary text-primary-foreground px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-primary/85 transition-colors">
              Explore Collections
            </Link>
            <Link href="/about" className="border border-foreground/25 text-foreground/75 px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:border-primary hover:text-primary transition-colors">
              Our Heritage
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 right-12 z-10 hidden md:flex flex-col items-center gap-3 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-foreground/35" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
          Scroll to Discover
        </span>
        <motion.div
          className="w-[1px] h-16 bg-primary/50 mt-3"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
