import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedCounterProps {
  baseValue: number;
  title?: string;
  className?: string;
}

export function AnimatedCounter({ baseValue, className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    // Logic for counter
    const today = new Date().toISOString().split('T')[0];
    const storedBase = localStorage.getItem('bengal_oud_counter_base');
    const storedDate = localStorage.getItem('bengal_oud_counter_date');
    const storedIncrement = localStorage.getItem('bengal_oud_counter_increment');
    
    let currentBase = storedBase ? parseInt(storedBase) : baseValue;
    if (!storedBase) {
      localStorage.setItem('bengal_oud_counter_base', baseValue.toString());
    }

    let currentIncrement = 0;
    if (storedDate === today && storedIncrement) {
      currentIncrement = parseInt(storedIncrement);
    } else {
      localStorage.setItem('bengal_oud_counter_date', today);
      localStorage.setItem('bengal_oud_counter_increment', '0');
    }

    const targetValue = currentBase + currentIncrement;

    if (inView) {
      let startValue = targetValue - 150; // Animate last 150
      
      const duration = 2500; // 2.5 seconds
      const steps = 60;
      const stepTime = duration / steps;
      const stepValue = (targetValue - startValue) / steps;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.floor(startValue + (stepValue * currentStep)));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(targetValue);
          
          // Start the slow tick
          const tickInterval = setInterval(() => {
            const increment = Math.floor(Math.random() * 3) + 1; // 1-3
            setCount(prev => {
              const newVal = prev + increment;
              localStorage.setItem('bengal_oud_counter_increment', (currentIncrement + (newVal - targetValue)).toString());
              return newVal;
            });
          }, Math.random() * 30000 + 30000); // 30-60 seconds
          
          return () => clearInterval(tickInterval);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, baseValue]);

  return (
    <div ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {count.toLocaleString()}+
      </motion.span>
    </div>
  );
}
