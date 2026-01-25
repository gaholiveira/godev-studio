"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealBlurProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  priority?: boolean;
}

export function TextRevealBlur({
  children,
  className,
  delay = 0,
  priority = false,
}: TextRevealBlurProps) {
  // Animação de construção para textos menores: blur inicial que vai se limpando
  // Efeito de "foco" gradual
  
  if (priority) {
    return (
      <motion.span
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
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={() => {
          // Remove willChange após animação para evitar conflitos
        }}
        className={cn("inline-block", className)}
        style={{ 
          willChange: "filter, opacity, transform",
        }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.span
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
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        // Remove willChange após animação para evitar conflitos
      }}
      className={cn("inline-block", className)}
      style={{ 
        willChange: "filter, opacity, transform",
      }}
    >
      {children}
    </motion.span>
  );
}
