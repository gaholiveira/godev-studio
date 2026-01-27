"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { cn } from "@/lib/utils";

export function ViosShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  // Garantir que o componente está montado no cliente antes de aplicar transforms
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Parallax suave na imagem - reduzido no mobile para melhor performance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Reduzir animações no mobile e para usuários que preferem menos movimento
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "10%"]
  );
  // Remover scale no mobile para evitar mudanças de tamanho
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [1, 1, 1] : [1, 1, 1]
  );
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative overflow-hidden",
        "border-y border-white/5 bg-zinc-900/20",
        "group cursor-pointer"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24")}>
        {/* Overlay com texto "Ver Projeto" no hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "absolute inset-0 z-50",
            "flex items-center justify-center",
            "bg-black/40 backdrop-blur-sm",
            "pointer-events-none"
          )}
        >
          <span className="text-2xl font-semibold text-white">
            Ver Projeto
          </span>
        </motion.div>

        {/* Grid Layout */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
            "items-center",
            "transition-opacity duration-300",
            isHovered && "opacity-90"
          )}
        >
          {/* Left: Copy & Contexto */}
          <Link href="/vios" className="block">
            <div className={cn("flex flex-col justify-center space-y-6")}>
            {/* Eyebrow */}
            <p
              className={cn(
                "text-xs tracking-widest uppercase text-zinc-500",
                "font-medium"
              )}
            >
              INTERNAL PRODUCT
            </p>

            {/* Title */}
            <h2
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-light text-white",
                "leading-tight tracking-tight"
              )}
            >
              <MaskedTextReveal delay={0.2}>
                Vios Labs: Pharmaceutical Luxury.
              </MaskedTextReveal>
            </h2>

            {/* Description */}
            <TextRevealBlur
              delay={0.3}
              className={cn(
                "text-base md:text-lg text-zinc-400",
                "leading-relaxed max-w-xl",
                "block"
              )}
            >
              A união entre ciência e design. E-commerce headless desenvolvido com
              Next.js 16, focado em performance extrema e estética sensorial.
            </TextRevealBlur>

            {/* Metrics/Tags */}
            <div className={cn("flex flex-wrap gap-2")}>
              <Badge
                variant="outline"
                className={cn(
                  "border-zinc-700 bg-zinc-800/50 text-zinc-300",
                  "text-xs font-medium"
                )}
              >
                Lighthouse 100
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  "border-zinc-700 bg-zinc-800/50 text-zinc-300",
                  "text-xs font-medium"
                )}
              >
                Server Actions
              </Badge>
              <Badge
                variant="outline"
                className={cn(
                  "border-zinc-700 bg-zinc-800/50 text-zinc-300",
                  "text-xs font-medium"
                )}
              >
                Conversion Rate Optimized
              </Badge>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="ghost"
                className={cn(
                  "w-fit mt-4",
                  "text-zinc-300 hover:text-white",
                  "hover:bg-zinc-800/50"
                )}
                asChild
              >
                <span>Explorar Case</span>
              </Button>
            </motion.div>
            </div>
          </Link>

          {/* Right: Visual */}
          <Link href="/vios" className="block h-full">
            <div
              className={cn(
                "relative",
                "flex items-center justify-center",
                "h-[400px] md:h-[500px] lg:h-[600px]",
                "bg-black",
                "overflow-hidden"
              )}
              style={{
                contain: "layout style paint",
                minHeight: "400px",
              }}
            >
            {/* Atmosphere Effect - Blur verde */}
            <div
              className={cn(
                "absolute inset-0 pointer-events-none",
                "blur-[100px] opacity-50"
              )}
              style={{
                background: "#1a3c34",
              }}
            />

            {/* Image Container - Parallax Effect */}
            <motion.div
              initial={{ 
                opacity: 1, 
                y: "0%", 
                scale: 1 
              }}
              style={isMounted ? { 
                y, 
                scale, 
                opacity,
              } : {
                opacity: 1,
                y: "0%",
                scale: 1,
              }}
              className={cn(
                "relative z-10",
                "w-full",
                "flex items-center justify-center",
                "px-4 md:px-0",
                "backface-hidden",
                "transform-gpu"
              )}
            >
              <div
                className={cn(
                  "relative",
                  "w-full h-full",
                  "max-w-[90vw] md:max-w-full",
                  "flex items-center justify-center"
                )}
              >
                <Image
                  src="/Images/vios-laptop.png"
                  alt="Vios Labs - E-commerce de Pharmaceutical Luxury"
                  width={1200}
                  height={800}
                  className={cn(
                    "object-contain",
                    "w-auto h-full",
                    "max-w-full",
                    "drop-shadow-2xl"
                  )}
                  priority
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
