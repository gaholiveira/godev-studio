"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, ReactNode, ElementType } from "react";

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
  as?: ElementType;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  threshold = 0.2,
  className = "",
  as: Component = "div",
}: StaggerContainerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once,
    amount: threshold,
  });

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

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </MotionComponent>
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
  as?: ElementType;
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 20,
  duration = 0.6,
  as: Component = "div",
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

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      variants={itemVariants}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </MotionComponent>
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
// Para elementos que NÃO precisam de stagger
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
  as?: ElementType;
}

export function FadeInView({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.3,
  className = "",
  yOffset = 20,
  as: Component = "div",
}: FadeInViewProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: yOffset,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
      } : { 
        opacity: 0, 
        y: yOffset,
      }}
      transition={{
        duration,
        delay,
        ease: CINEMATIC_EASE,
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </MotionComponent>
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.3, // Imperceptível mas suave
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
