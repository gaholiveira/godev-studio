"use client";

import { motion } from "framer-motion";

// Curva de easing cinematográfica (easeOutQuint) - Apple/Dior style
const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

// ============================================
// Kicker/Label com reveal sutil
// ============================================
interface KickerRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function KickerReveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: KickerRevealProps) {
  return (
    <motion.p
      initial={{ 
        opacity: 0, 
        y: 10,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
      }}
      viewport={{ once, amount: 0.5 }}
      transition={{
        duration: 0.6,
        delay,
        ease: CINEMATIC_EASE,
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
