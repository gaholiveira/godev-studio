"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealBlurProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  priority?: boolean;
}

function clearWillChange(el: HTMLElement | null) {
  if (el?.style) el.style.willChange = "auto";
}

export function TextRevealBlur({
  children,
  className,
  delay = 0,
  priority = false,
}: TextRevealBlurProps) {
  const ref = useRef<HTMLSpanElement>(null);

  if (priority) {
    return (
      <motion.span
        ref={ref}
        initial={{
          filter: "blur(10px)",
          opacity: 0,
          y: 10,
        }}
        animate={{
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={() => clearWillChange(ref.current)}
        className={cn("inline-block", className)}
        style={{ willChange: "filter, opacity, transform" }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.span
      ref={ref}
      initial={{
        filter: "blur(10px)",
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => clearWillChange(ref.current)}
      className={cn("inline-block", className)}
      style={{ willChange: "filter, opacity, transform" }}
    >
      {children}
    </motion.span>
  );
}
