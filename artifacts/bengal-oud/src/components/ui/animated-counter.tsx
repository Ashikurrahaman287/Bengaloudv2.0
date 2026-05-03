import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const START_VALUE = 350026;
const STORAGE_KEY = "bengal_oud_live_count";
const STORAGE_TS_KEY = "bengal_oud_live_ts";
const TICK_MS = 500; // increment every 500 ms

function getPersistedCount(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const savedTs = localStorage.getItem(STORAGE_TS_KEY);
    if (saved && savedTs) {
      const base = parseInt(saved, 10);
      const ts = parseInt(savedTs, 10);
      const elapsed = Date.now() - ts;
      // catch up: add 1 for every 500ms that passed while page was closed
      const catchUp = Math.floor(elapsed / TICK_MS);
      return base + catchUp;
    }
  } catch {}
  return START_VALUE;
}

interface AnimatedCounterProps {
  baseValue?: number;
  className?: string;
}

export function AnimatedCounter({ className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [displayCount, setDisplayCount] = useState<number>(START_VALUE);
  const liveCount = useRef<number>(getPersistedCount());
  const animDone = useRef(false);

  // Animate in: count up from (liveCount - 80) to liveCount over ~1.5s
  useEffect(() => {
    if (!inView || animDone.current) return;
    animDone.current = true;

    const target = liveCount.current;
    const from = Math.max(START_VALUE, target - 80);
    const steps = 40;
    const stepDuration = 1500 / steps;
    const stepAmount = (target - from) / steps;
    let step = 0;

    setDisplayCount(from);

    const introTimer = setInterval(() => {
      step++;
      if (step >= steps) {
        clearInterval(introTimer);
        setDisplayCount(target);
        startLiveTick();
      } else {
        setDisplayCount(Math.round(from + stepAmount * step));
      }
    }, stepDuration);

    return () => clearInterval(introTimer);
  }, [inView]);

  function startLiveTick() {
    const ticker = setInterval(() => {
      liveCount.current += 1;
      setDisplayCount(liveCount.current);
      try {
        localStorage.setItem(STORAGE_KEY, liveCount.current.toString());
        localStorage.setItem(STORAGE_TS_KEY, Date.now().toString());
      } catch {}
    }, TICK_MS);

    // store on unload so catch-up works next visit
    const onUnload = () => {
      try {
        localStorage.setItem(STORAGE_KEY, liveCount.current.toString());
        localStorage.setItem(STORAGE_TS_KEY, Date.now().toString());
      } catch {}
    };
    window.addEventListener("beforeunload", onUnload);

    return () => {
      clearInterval(ticker);
      window.removeEventListener("beforeunload", onUnload);
    };
  }

  return (
    <div ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {displayCount.toLocaleString()}+
      </motion.span>
    </div>
  );
}
