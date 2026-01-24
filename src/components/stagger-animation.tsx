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

// ============================================
// STAGGER GRID
// Container especializado para grids com animação em cascata
// ============================================

interface StaggerGridProps extends StaggerContainerProps {
  /** Colunas do grid (Tailwind classes) */
  cols?: string;
  /** Gap entre itens (Tailwind classes) */
  gap?: string;
}

export function StaggerGrid({
  children,
  staggerDelay = 0.08,
  delay = 0,
  once = true,
  threshold = 0.15,
  className = "",
  cols = "grid-cols-1 md:grid-cols-3",
  gap = "gap-6",
}: StaggerGridProps) {
  return (
    <StaggerContainer
      staggerDelay={staggerDelay}
      delay={delay}
      once={once}
      threshold={threshold}
      className={`grid ${cols} ${gap} ${className}`}
    >
      {children}
    </StaggerContainer>
  );
}

// ============================================
// STAGGER LIST
// Container especializado para listas verticais
// ============================================

interface StaggerListProps extends StaggerContainerProps {
  /** Gap entre itens (Tailwind classes) */
  gap?: string;
}

export function StaggerList({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  threshold = 0.15,
  className = "",
  gap = "space-y-4",
}: StaggerListProps) {
  return (
    <StaggerContainer
      staggerDelay={staggerDelay}
      delay={delay}
      once={once}
      threshold={threshold}
      className={`flex flex-col ${gap} ${className}`}
    >
      {children}
    </StaggerContainer>
  );
}

// ============================================
// FADE IN VIEW
// Fade in simples quando entra na viewport
// ============================================

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  /** Movimento vertical sutil */
  yOffset?: number;
}

export function FadeInView({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.3,
  className = "",
  yOffset = 20,
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: yOffset,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
      }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: CINEMATIC_EASE,
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// INSTANT FADE (NO-MOTION ZONE)
// Para elementos funcionais que precisam de fade imperceptível
// ============================================

interface InstantFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function InstantFade({
  children,
  className = "",
  delay = 0,
}: InstantFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.3,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
