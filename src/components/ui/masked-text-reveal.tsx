"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MaskedTextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Duração da animação (default 0.5 para títulos já visíveis ao chegar na seção) */
  duration?: number;
  priority?: boolean;
  /** Apenas opacity (sem movimento y) para reduzir CLS acima da dobra */
  opacityOnly?: boolean;
}

export function MaskedTextReveal({
  children,
  className,
  delay = 0,
  duration,
  priority = false,
  opacityOnly = false,
}: MaskedTextRevealProps) {
  const initial = opacityOnly ? { opacity: 0 } : { y: 30 };
  const animate = opacityOnly ? { opacity: 1 } : { y: 0 };
  const whileInViewAnimate = opacityOnly ? { opacity: 1 } : { y: 0 };
  const durationValue = duration ?? (opacityOnly ? 0.5 : 0.5);

  if (priority) {
    return (
      <motion.span
        initial={initial}
        animate={animate}
        transition={{
          duration: duration ?? (opacityOnly ? 0.6 : 0.9),
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn("inline-block", className)}
        style={opacityOnly ? undefined : { opacity: 1 }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={initial}
      whileInView={whileInViewAnimate}
      viewport={{ once: true, amount: 0, margin: "0px 0px 200px 0px" }}
      transition={{
        duration: durationValue,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("inline-block", className)}
      style={opacityOnly ? undefined : { opacity: 1 }}
    >
      {children}
    </motion.span>
  );
}
