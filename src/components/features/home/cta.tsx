"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative overflow-hidden",
        "bg-zinc-950 border-y border-white/5",
        "py-16 md:py-24",
        "content-visibility-auto contain-layout",
      )}
    >

      {/* Conteúdo */}
      <div
        className={cn("relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8")}
      >
        {/* Card Glassmorphism Centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative",
            "bg-zinc-900/30 backdrop-blur-md",
            "border border-white/10 rounded-2xl p-8 md:p-12",
            "shadow-2xl shadow-black/30",
            "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:z-0",
            "before:bg-gradient-to-br before:from-white/5 before:to-transparent",
            "before:opacity-0 before:transition-opacity before:duration-300",
            "hover:before:opacity-100",
          )}
        >
          {/* Badge de Urgência */}
          <div className="relative z-10 flex justify-center mb-6">
            <Badge
              variant="outline"
              className={cn(
                "rounded-full border-zinc-700 bg-zinc-800/50",
                "px-4 py-1.5 text-xs md:text-sm",
                "text-zinc-300 backdrop-blur-sm",
                "font-medium flex items-center gap-2",
              )}
            >
              <Zap className="h-3 w-3" />
              Vagas Q1 2026 limitadas
            </Badge>
          </div>

          {/* Título Principal */}
          <h2
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl",
              "font-bold tracking-tighter text-gradient-metallic mb-4",
              "text-center",
            )}
          >
            <MaskedTextReveal delay={0.1}>
              Pronto para escalar seu produto?
            </MaskedTextReveal>
          </h2>

          {/* Subtexto com Benefício */}
          <TextRevealBlur
            delay={0.2}
            className={cn(
              "text-base md:text-lg text-zinc-300 mb-8",
              "max-w-2xl mx-auto text-center",
              "leading-relaxed",
              "block",
            )}
          >
            Junte-se a empresas que escolheram código de elite. Entrega rápida,
            sem burocracia, foco total no resultado.
          </TextRevealBlur>

          {/* CTAs - Duplo para Alta Conversão */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* CTA Primário - Grande e Destaque */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className={cn(
                  "h-14 px-10 text-lg font-semibold",
                  "bg-white text-zinc-950",
                  "hover:bg-zinc-100",
                  "transition-all duration-300",
                  "shadow-xl hover:shadow-2xl",
                  "min-w-[200px]",
                  "group",
                )}
                asChild
              >
                <SmoothScrollLink
                  href="#planos"
                  className={cn("flex items-center justify-center gap-2")}
                >
                  Ver Planos
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </SmoothScrollLink>
              </Button>
            </motion.div>

            {/* CTA Secundário */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                size="lg"
                className={cn(
                  "h-14 px-8 text-lg font-medium",
                  "text-zinc-200 border border-white/10",
                  "hover:bg-white/5 hover:text-white hover:border-white/20",
                  "transition-all duration-300",
                  "min-w-[180px]",
                )}
                asChild
              >
                <SmoothScrollLink href="#tech-stack">Conhecer Stack</SmoothScrollLink>
              </Button>
            </motion.div>
          </div>

          {/* Social Proof Sutil */}
          <div className="relative z-10 mt-8 flex items-center justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <span>Disponível agora</span>
            </div>
            <div className="h-4 w-px bg-zinc-800" />
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <span>Sem compromisso</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
