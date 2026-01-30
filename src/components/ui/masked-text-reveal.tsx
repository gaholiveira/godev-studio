"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MaskedTextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  priority?: boolean;
}

export function MaskedTextReveal({
  children,
  className,
  delay = 0,
  priority = false,
}: MaskedTextRevealProps) {
  // Efeito de "construção" simplificado: apenas movimento
  // Garantir que o texto sempre seja visível (sem opacity inicial)
  
  if (priority) {
    return (
      <motion.span
        initial={{ 
          y: 30,
        }}
        animate={{ 
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn("inline-block", className)}
        style={{ opacity: 1 }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ y: 30 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("inline-block", className)}
      style={{ opacity: 1 }}
    >
      {children}
    </motion.span>
  );
}
