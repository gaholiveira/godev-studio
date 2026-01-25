"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Curva de easing cinematográfica (easeOutQuint) - Apple/Dior style
const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

// ============================================
// STAGGER CONTAINER
// Container pai que orquestra a entrada dos filhos em cascata
// ============================================

interface StaggerContainerProps {
  children: ReactNode;
  /** Delay entre cada filho (waterfall effect) */
  staggerDelay?: number;
  /** Delay inicial antes de começar */
  delay?: number;
  /** Se true, anima apenas uma vez */
  once?: boolean;
  /** Porcentagem visível para trigger */
  threshold?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  threshold = 0.2,
  className = "",
}: StaggerContainerProps) {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER ITEM
// Filho que anima com movimento sutil de baixo para cima + fade
// ============================================

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  /** Distância do movimento vertical (padrão: 20px) */
  yOffset?: number;
  /** Duração da animação */
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 20,
  duration = 0.6,
}: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: CINEMATIC_EASE,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
