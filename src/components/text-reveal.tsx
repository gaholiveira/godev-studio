"use client";

import { motion, Variants } from "framer-motion";

// Curva de easing cinematográfica (easeOutQuint) - Apple/Dior style
const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

interface TextRevealProps {
  text: string;
  mode?: "word" | "char";
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  /** Se true, anima apenas uma vez quando entra na viewport */
  once?: boolean;
  /** Porcentagem do elemento visível para trigger (0-1) */
  threshold?: number;
  /** Se true, anima automaticamente sem esperar viewport (para elementos above-the-fold como Hero) */
  autoPlay?: boolean;
}

export function TextReveal({
  text,
  mode = "word",
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  duration = 0.8,
  once = true,
  threshold = 0.3,
  autoPlay = false,
}: TextRevealProps) {
  // Divide o texto em palavras ou caracteres
  const items = mode === "char" ? text.split("") : text.split(" ");

  // Variantes para o container pai (stagger orchestration)
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  // Variantes para cada palavra/caractere - Movimento vertical dramático
  const itemVariants: Variants = {
    hidden: { 
      y: "110%",
    },
    visible: {
      y: "0%",
      transition: {
        duration,
        ease: CINEMATIC_EASE,
      },
    },
  };

  // Props de animação baseado em autoPlay
  const animationProps = autoPlay
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: { once, amount: threshold } };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      {...animationProps}
      className={`inline-block ${className}`}
    >
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-bottom"
          style={{ 
            display: "inline-block", 
            verticalAlign: "bottom",
          }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block"
            style={{ 
              willChange: "transform",
            }}
          >
            {item}
            {mode === "word" && index < items.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// ============================================
// Variante para títulos grandes (H1, H2)
// Renderiza como span mas estilizado como heading
// ============================================
export function HeadingReveal({
  staggerDelay = 0.03,
  duration = 1,
  ...props
}: TextRevealProps) {
  return (
    <TextReveal
      staggerDelay={staggerDelay}
      duration={duration}
      {...props}
    />
  );
}

// ============================================
// Variante para parágrafos com blur fade
// ============================================
interface ParagraphRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function ParagraphReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
  threshold = 0.3,
}: ParagraphRevealProps) {
  return (
    <motion.p
      initial={{ 
        opacity: 0, 
        y: 20,
        filter: "blur(8px)",
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: CINEMATIC_EASE,
      }}
      className={className}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.p>
  );
}

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
