import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@assets/ChatGPT_Image_Apr_16,_2026,_02_00_16_AM_1776283223448.png";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <img
          src={logo}
          alt="Bengal Oud"
          className="h-32 md:h-40 w-auto object-contain mx-auto mb-8"
        />
        <div className="w-64 h-[1px] bg-border relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-primary"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="mt-4 text-xs font-sans tracking-widest text-muted-foreground uppercase">
          Crafting liquid gold... {progress}%
        </p>
      </motion.div>
    </motion.div>
  );
}
