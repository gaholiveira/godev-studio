"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { cn } from "@/lib/utils";

const titleLines = ["Software de Alta Performance.", "Sem burocracia."];

function clearWillChange(el: HTMLElement | null) {
  if (el?.style) el.style.willChange = "auto";
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export interface HeroProps {
  /** Caminho da imagem de fundo do hero (ex: /Images/hero.png). Opcional. */
  imageSrc?: string;
  /** Texto alternativo para acessibilidade (imagem decorativa: use "" para pular leitura) */
  imageAlt?: string;
}

export function Hero({ imageSrc, imageAlt = "" }: HeroProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex min-h-svh-stable flex-col items-center justify-center",
        "bg-zinc-950 px-4 py-20 md:py-32",
        "overflow-hidden",
        "contain-layout",
      )}
      aria-label="Hero"
    >
      {/* Imagem de fundo (opcional) — LCP, eager load, decorative alt */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 img-scroll-contain touch-no-zoom" aria-hidden>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px"
            quality={80}
            className="object-cover object-center blur-[2px]"
            draggable={false}
          />
          <div className="absolute inset-0 bg-zinc-950/70" aria-hidden />
        </div>
      )}

      {/* Grid Pattern Background */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none z-[1]",
          "bg-grid-pattern opacity-[0.03]",
        )}
      />

      {/* Ambient Glow */}
      <div
        className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-[1]",
          "w-[500px] h-[500px]",
          "bg-white/3 blur-[100px] rounded-full",
        )}
      />

      {/* Content Container - texto centralizado como antes */}
      <div
        className={cn(
          "relative z-10 flex flex-col items-center justify-center",
          "max-w-4xl mx-auto text-center",
          "space-y-6 md:space-y-8",
        )}
      >
        {/* Badge - Aparece primeiro (apenas opacity para evitar CLS) */}
        <motion.div
          ref={badgeRef}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
          onAnimationComplete={() => clearWillChange(badgeRef.current)}
          style={{ willChange: reducedMotion ? "auto" : "opacity" }}
        >
          <Badge
            variant="outline"
            className={cn(
              "rounded-full border-zinc-800 bg-zinc-900/50",
              "px-4 py-1.5 text-xs md:text-sm",
              "text-zinc-300 backdrop-blur-sm",
              "font-normal",
            )}
          >
            Vagas abertas para novos projetos Q1 2026
          </Badge>
        </motion.div>

        {/* Headline - MaskedTextReveal por linhas */}
        <h1
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl",
            "font-bold tracking-tighter",
            "leading-[1.1] md:leading-[1.2]",
            "text-white",
          )}
        >
          {titleLines.map((line, index) => (
            <MaskedTextReveal
              key={index}
              delay={reducedMotion ? 0 : 0.15 + index * 0.08}
              priority
              opacityOnly
              className={cn(
                "block",
                index === 1 && "text-gradient-metallic",
              )}
            >
              {line}
            </MaskedTextReveal>
          ))}
        </h1>

        {/* Subheadline - Aparece depois do título com blur (opacityOnly para CLS) */}
        <TextRevealBlur
          delay={reducedMotion ? 0 : 0.5}
          priority
          opacityOnly
          className={cn(
            "text-base md:text-lg lg:text-xl",
            "text-zinc-300 max-w-2xl",
            "leading-relaxed md:leading-normal",
            "block",
          )}
        >
          Sua equipe de desenvolvimento Next.js sob demanda. Código sênior,
          entrega ágil e foco total no seu produto.
        </TextRevealBlur>

        {/* CTA Buttons - Aparecem por último (apenas opacity para evitar CLS) */}
        <motion.div
          ref={ctaRef}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.65 }}
          onAnimationComplete={() => clearWillChange(ctaRef.current)}
          style={{ willChange: reducedMotion ? "auto" : "opacity" }}
          className={cn(
            "flex flex-col sm:flex-row gap-4 md:gap-6",
            "items-center justify-center",
            "mt-8 md:mt-10",
          )}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className={cn(
                "bg-white text-zinc-950",
                "hover:bg-zinc-200",
                "min-h-[44px] min-w-[160px]",
                "font-medium",
              )}
              asChild
            >
              <SmoothScrollLink href="#planos" duration={1.8}>
                Ver Planos
              </SmoothScrollLink>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "text-zinc-200",
                "hover:bg-zinc-900 hover:text-white",
                "border border-zinc-700",
                "min-h-[44px] min-w-[160px]",
                "font-medium",
              )}
              asChild
            >
              <SmoothScrollLink href="#tech-stack" duration={1.8}>
                Nossa Stack
              </SmoothScrollLink>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
