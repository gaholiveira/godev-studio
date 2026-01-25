"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { cn } from "@/lib/utils";

const titleLines = ["Software de Alta Performance.", "Sem burocracia."];

export function Hero() {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center",
        "bg-zinc-950 px-4 py-20 md:py-32",
        "overflow-hidden",
      )}
    >
      {/* Grid Pattern Background */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          "bg-grid-pattern opacity-[0.03]",
        )}
      />

      {/* Ambient Glow */}
      <div
        className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2",
          "w-[500px] h-[500px]",
          "bg-white/3 blur-[100px] rounded-full",
          "pointer-events-none",
        )}
      />

      {/* Content Container */}
      <div
        className={cn(
          "relative z-10 flex flex-col items-center justify-center",
          "max-w-4xl mx-auto text-center",
          "space-y-6 md:space-y-8",
        )}
      >
        {/* Badge - Aparece primeiro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ willChange: "transform, opacity" }}
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
              delay={0.15 + index * 0.08}
              priority
              className="block"
            >
              {line}
            </MaskedTextReveal>
          ))}
        </h1>

        {/* Subheadline - Aparece depois do título com blur */}
        <TextRevealBlur
          delay={0.5}
          priority
          className={cn(
            "text-base md:text-lg lg:text-xl",
            "text-zinc-400 max-w-2xl",
            "leading-relaxed md:leading-normal",
            "block",
          )}
        >
          Sua equipe de desenvolvimento Next.js sob demanda. Código sênior,
          entrega ágil e foco total no seu produto.
        </TextRevealBlur>

        {/* CTA Buttons - Aparecem por último */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ willChange: "transform, opacity" }}
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
                "text-zinc-300",
                "hover:bg-zinc-900 hover:text-white",
                "border border-zinc-800",
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
