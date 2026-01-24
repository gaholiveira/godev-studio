"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, ElementType, ComponentPropsWithoutRef } from "react";

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
  /** Wrapper element: span, h1, h2, h3, p, etc */
  as?: ElementType;
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
  as: Component = "span",
  autoPlay = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once,
    amount: threshold,
  });
  
  // Se autoPlay=true, anima imediatamente sem esperar viewport
  const shouldAnimate = autoPlay ? true : isInView;

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
  // Estilo cinematográfico: mask reveal puro (sem opacity para compatibilidade com text-transparent/gradients)
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

  // Type-safe motion component
  const MotionComponent = motion(Component) as React.ComponentType<
    ComponentPropsWithoutRef<typeof Component> & {
      ref?: React.Ref<HTMLElement>;
      variants?: Variants;
      initial?: string;
      animate?: string;
      className?: string;
    }
  >;

  return (
    <MotionComponent
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
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
    </MotionComponent>
  );
}

// ============================================
// Variante para títulos grandes (H1, H2)
// ============================================
interface HeadingRevealProps extends Omit<TextRevealProps, 'as'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function HeadingReveal({
  as = "h2",
  staggerDelay = 0.03,
  duration = 1,
  ...props
}: HeadingRevealProps) {
  return (
    <TextReveal
      as={as}
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
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.p
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 20,
        filter: "blur(8px)",
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
      } : { 
        opacity: 0, 
        y: 20,
        filter: "blur(8px)",
      }}
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
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  return (
    <motion.p
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 10,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
      } : { 
        opacity: 0, 
        y: 10,
      }}
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
