"use client";

import { motion } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function BlurFade({
  children,
  delay = 0,
  className = "",
}: BlurFadeProps) {
  return (
    <motion.span
      initial={{ 
        opacity: 0, 
        filter: "blur(10px)", 
        y: 20 
      }}
      animate={{ 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0 
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
