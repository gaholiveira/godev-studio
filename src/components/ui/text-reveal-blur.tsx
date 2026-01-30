"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealBlurProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  priority?: boolean;
  /** Apenas opacity + blur (sem movimento y) para reduzir CLS acima da dobra */
  opacityOnly?: boolean;
}

function clearWillChange(el: HTMLElement | null) {
  if (el?.style) el.style.willChange = "auto";
}

export function TextRevealBlur({
  children,
  className,
  delay = 0,
  priority = false,
  opacityOnly = false,
}: TextRevealBlurProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const initialPriority = opacityOnly
    ? { filter: "blur(10px)" as const, opacity: 0 }
    : { filter: "blur(10px)" as const, opacity: 0, y: 10 };
  const animatePriority = opacityOnly
    ? { filter: "blur(0px)" as const, opacity: 1 }
    : { filter: "blur(0px)" as const, opacity: 1, y: 0 };

  if (priority) {
    return (
      <motion.span
        ref={ref}
        initial={initialPriority}
        animate={animatePriority}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={() => clearWillChange(ref.current)}
        className={cn("inline-block", className)}
        style={{ willChange: "filter, opacity" + (opacityOnly ? "" : ", transform") }}
      >
        {children}
      </motion.span>
    );
  }

  const initial = opacityOnly
    ? { filter: "blur(10px)" as const, opacity: 0 }
    : { filter: "blur(10px)" as const, opacity: 0, y: 10 };
  const whileInViewAnimate = opacityOnly
    ? { filter: "blur(0px)" as const, opacity: 1 }
    : { filter: "blur(0px)" as const, opacity: 1, y: 0 };

  return (
    <motion.span
      ref={ref}
      initial={initial}
      whileInView={whileInViewAnimate}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => clearWillChange(ref.current)}
      className={cn("inline-block", className)}
      style={{ willChange: "filter, opacity" + (opacityOnly ? "" : ", transform") }}
    >
      {children}
    </motion.span>
  );
}
