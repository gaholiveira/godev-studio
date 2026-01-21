"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  mode?: "word" | "char";
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  mode = "word",
  className = "",
  delay = 0,
  staggerDelay = 0.04,
}: TextRevealProps) {
  // Divide o texto em palavras ou caracteres
  const items = mode === "char" ? text.split("") : text.split(" ");

  // Variantes para o container pai (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  // Variantes para cada palavra/caractere - Estilo: Tech Precision
  // Movimento vertical afiado, sem rotação, transmitindo eficiência e controle absoluto
  const itemVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Cúbica, rápida no início e pouso suave
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
          style={{ display: "inline-block", lineHeight: "1.2" }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block"
            style={{ lineHeight: "inherit" }}
          >
            {item}
            {mode === "word" && index < items.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
