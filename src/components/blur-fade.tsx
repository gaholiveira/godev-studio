"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Curva de easing cinematográfica (easeOutQuint)
const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
  threshold = 0.3,
}: BlurFadeProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.span
      ref={ref}
      initial={{ 
        opacity: 0, 
        filter: "blur(10px)", 
        y: 20 
      }}
      animate={isInView ? { 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0 
      } : {
        opacity: 0, 
        filter: "blur(10px)", 
        y: 20 
      }}
      transition={{
        duration,
        delay,
        ease: CINEMATIC_EASE,
      }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.span>
  );
}
