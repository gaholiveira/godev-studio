"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Zap, ShoppingCart, Package, BarChart3, Shield, Smartphone, TrendingUp } from "lucide-react";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Componente ScrollReveal customizado com duração de 1.2s
function ViosScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ViosCaseStudy() {
  return (
    <main className="relative min-h-screen bg-[#0F1F1A] text-[#F5F5DC] overflow-hidden">
      {/* Gradiente radial sutil para profundidade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.06) 0%, rgba(15, 31, 26, 1) 70%)",
        }}
      />

      {/* Botão flutuante "Voltar para Studio" */}
      <ViosScrollReveal delay={0.2}>
        <motion.div
          className="fixed top-4 left-4 md:top-8 md:left-8 z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "backdrop-blur-md bg-white/5 border border-[#D4AF37]/20",
              "text-[#F5F5DC] hover:text-[#D4AF37]",
              "hover:bg-white/10 hover:border-[#D4AF37]/40",
              "transition-all duration-300",
              "text-xs md:text-sm",
              "px-3 md:px-4 py-2",
              "min-h-[44px]"
            )}
            asChild
          >
            <Link href="/" className="flex items-center gap-1.5 md:gap-2">
              <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Voltar para Studio</span>
              <span className="sm:hidden">Voltar</span>
            </Link>
          </Button>
        </motion.div>
      </ViosScrollReveal>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Lado Esquerdo: Texto */}
            <ViosScrollReveal delay={0.1}>
              <div className="space-y-6 md:space-y-10 lg:space-y-12">
                <h1
                  className={cn(
                    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
                    "text-[#D4AF37] mb-4 md:mb-6",
                    "leading-tight tracking-tight",
                    "font-[var(--font-playfair)]"
                  )}
                >
                  <MaskedTextReveal delay={0.2} priority>
                    Vios Pulse: Bioengenharia & Performance.
                  </MaskedTextReveal>
                </h1>
                
                <TextRevealBlur delay={0.4} className="block">
                  <p
                    className={cn(
                      "text-base sm:text-lg md:text-xl lg:text-2xl",
                      "text-[#F5F5DC]/90",
                      "leading-relaxed",
                      "max-w-xl"
                    )}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Um ecossistema digital desenvolvido para refletir a precisão de uma fórmula de elite.
                  </p>
                </TextRevealBlur>
              </div>
            </ViosScrollReveal>

            {/* Lado Direito: Visual */}
            <ViosScrollReveal delay={0.3}>
              <div className="relative w-full flex items-center justify-center mt-8 lg:mt-0">
                <div
                  className={cn(
                    "relative",
                    "w-full max-w-md lg:max-w-full"
                  )}
                  style={{
                    filter: "drop-shadow(0 15px 30px rgba(212, 175, 55, 0.25)) drop-shadow(0 5px 15px rgba(212, 175, 55, 0.15))",
                  }}
                >
                  <Image
                    src="/Images/vios/hero-mockup.png"
                    alt="Vios Pulse - Produto de Bioengenharia"
                    width={800}
                    height={1000}
                    className={cn(
                      "w-full h-auto",
                      "object-contain"
                    )}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                  />
                </div>
              </div>
            </ViosScrollReveal>
          </div>
        </div>
      </section>

      {/* Seção "O Desafio" */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Esquerda: Texto */}
            <ViosScrollReveal delay={0.2}>
              <div>
                <h2
                  className={cn(
                    "text-3xl sm:text-4xl md:text-5xl font-serif mb-4 md:mb-6",
                    "text-[#F5F5DC]",
                    "font-[var(--font-playfair)]"
                  )}
                >
                  <MaskedTextReveal delay={0.1}>
                    O Desafio
                  </MaskedTextReveal>
                </h2>
                <TextRevealBlur delay={0.3} className="block">
                  <p
                    className={cn(
                      "text-base sm:text-lg md:text-xl text-[#F5F5DC]/80",
                      "leading-relaxed mb-3 md:mb-4"
                    )}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Criar um e-commerce farmacêutico de luxo que unisse a
                    precisão científica com uma experiência digital impecável.
                    O desafio era desenvolver uma plataforma que transmitisse
                    confiança, elegância e performance técnica de nível
                    enterprise através de uma <strong className="text-[#D4AF37]">Arquitetura Escalável</strong>.
                  </p>
                  <p
                    className={cn(
                      "text-base sm:text-lg md:text-xl text-[#F5F5DC]/80",
                      "leading-relaxed"
                    )}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Cada detalhe precisava refletir o padrão de excelência da
                    Vios Labs, desde a <strong className="text-[#D4AF37]">Ciência de Dados</strong> até a <strong className="text-[#D4AF37]">Curadoria Digital</strong>,
                    garantindo uma <strong className="text-[#D4AF37]">Experiência de Luxo</strong> em cada interação.
                  </p>
                </TextRevealBlur>
              </div>
            </ViosScrollReveal>

            {/* Direita: Card de Feature - Design System */}
            <ViosScrollReveal delay={0.4}>
              <div
                className={cn(
                  "relative",
                  "bg-white/5 backdrop-blur-xl",
                  "border border-[#D4AF37]/20 rounded-2xl",
                  "p-6 md:p-8 lg:p-10",
                  "shadow-2xl shadow-black/50"
                )}
              >
                <h3
                  className={cn(
                    "text-2xl font-serif mb-6",
                    "text-[#D4AF37]",
                    "font-[var(--font-playfair)]"
                  )}
                >
                  Design System
                </h3>

                {/* Paleta de Cores */}
                <div className="mb-8">
                  <p
                    className={cn(
                      "text-sm text-[#F5F5DC]/60 mb-4",
                      "font-[var(--font-inter)]"
                    )}
                  >
                    Paleta de Cores
                  </p>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <div
                        className="h-20 rounded-lg mb-2"
                        style={{ backgroundColor: "#0B1E19" }}
                      />
                      <p className="text-xs text-[#F5F5DC]/50">Deep Forest</p>
                    </div>
                    <div className="flex-1">
                      <div
                        className="h-20 rounded-lg mb-2"
                        style={{ backgroundColor: "#D4AF37" }}
                      />
                      <p className="text-xs text-[#F5F5DC]/50">Metallic Gold</p>
                    </div>
                    <div className="flex-1">
                      <div
                        className="h-20 rounded-lg mb-2"
                        style={{ backgroundColor: "#F2F2F0" }}
                      />
                      <p className="text-xs text-[#F5F5DC]/50">Off White</p>
                    </div>
                  </div>
                </div>

                {/* Tipografia */}
                <div>
                  <p
                    className={cn(
                      "text-sm text-[#F5F5DC]/60 mb-5",
                      "font-[var(--font-inter)]",
                      "uppercase tracking-wider"
                    )}
                  >
                    Tipografia
                  </p>
                  <div className="space-y-5">
                    {/* Playfair Display */}
                    <div
                      className={cn(
                        "relative",
                        "bg-white/3 rounded-lg",
                        "border border-[#D4AF37]/10",
                        "p-4"
                      )}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p
                            className={cn(
                              "text-2xl md:text-3xl font-serif text-[#D4AF37] mb-1",
                              "font-[var(--font-playfair)]"
                            )}
                          >
                            Playfair Display
                          </p>
                          <p className="text-xs text-[#F5F5DC]/50">
                            Títulos e Headings
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#D4AF37]/10">
                        <p
                          className={cn(
                            "text-lg md:text-xl text-[#F5F5DC]",
                            "font-[var(--font-playfair)]",
                            "leading-tight"
                          )}
                        >
                          Aa Bb Cc
                        </p>
                        <p
                          className={cn(
                            "text-sm text-[#F5F5DC]/70 mt-2",
                            "font-[var(--font-playfair)]"
                          )}
                        >
                          Elegância & Precisão
                        </p>
                      </div>
                    </div>

                    {/* Inter */}
                    <div
                      className={cn(
                        "relative",
                        "bg-white/3 rounded-lg",
                        "border border-[#D4AF37]/10",
                        "p-4"
                      )}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <p
                            className={cn(
                              "text-lg md:text-xl text-[#F5F5DC] mb-1",
                              "font-[var(--font-inter)]",
                              "font-semibold"
                            )}
                          >
                            Inter
                          </p>
                          <p className="text-xs text-[#F5F5DC]/50">
                            Corpo de Texto
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#D4AF37]/10">
                        <p
                          className={cn(
                            "text-sm md:text-base text-[#F5F5DC]/90",
                            "font-[var(--font-inter)]",
                            "leading-relaxed"
                          )}
                        >
                          Aa Bb Cc Dd Ee Ff
                        </p>
                        <p
                          className={cn(
                            "text-xs md:text-sm text-[#F5F5DC]/70 mt-2",
                            "font-[var(--font-inter)]",
                            "leading-relaxed"
                          )}
                        >
                          Legibilidade e clareza para conteúdos extensos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ViosScrollReveal>
          </div>
        </div>
      </section>

      {/* Seção "Diferenciais Técnicos" - 4 Blocos */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ViosScrollReveal delay={0.1}>
            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-serif mb-8 md:mb-12 lg:mb-16 text-center",
                "text-[#F5F5DC]"
              )}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <MaskedTextReveal delay={0.1}>
                Arquitetura Escalável
              </MaskedTextReveal>
            </h2>
          </ViosScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 lg:gap-8">
            {/* Linha 1: Card 1 (2 cols) + Card 2 (1 col) */}
            {/* Bloco 01: E-commerce Headless - Destaque (2 colunas, linha 1) */}
            <ViosScrollReveal delay={0.2}>
              <div
                className={cn(
                  "relative group",
                  "bg-white/5 backdrop-blur-xl",
                  "border-2 border-[#D4AF37]/30 rounded-2xl",
                  "p-6 md:p-8 lg:p-10 overflow-hidden",
                  "shadow-2xl shadow-black/50",
                  "hover:border-[#D4AF37]/50 transition-all duration-300",
                  "md:col-span-2 md:row-span-1",
                  "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
                  "before:bg-gradient-to-br before:from-[#D4AF37]/5 before:to-transparent",
                  "before:opacity-0 group-hover:before:opacity-100 before:transition-opacity",
                  "flex flex-col h-full"
                )}
              >
                <div className="relative z-10">
                  <h3
                    className={cn(
                      "text-xl sm:text-2xl md:text-3xl font-serif text-[#D4AF37] mb-3 md:mb-4"
                    )}
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    E-commerce Headless
                  </h3>
                  <p
                    className="text-sm sm:text-base md:text-lg text-[#F5F5DC]/80 mb-4 md:mb-6 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Desenvolvimento focado em performance extrema e design de alta fidelidade.
                  </p>
                  
                  {/* Preview de Produto */}
                  <div
                    className={cn(
                      "relative mt-6",
                      "bg-gradient-to-br from-[#1a3c34]/40 to-[#0B1E19]",
                      "border border-[#D4AF37]/20 rounded-xl",
                      "p-6",
                      "overflow-hidden"
                    )}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center">
                        <Package className="h-8 w-8 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-[#D4AF37]/20 rounded mb-2 w-3/4" />
                        <div className="h-3 bg-[#F3E5AB]/10 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-[#F3E5AB]/5 rounded" />
                      <div className="h-3 bg-[#F3E5AB]/5 rounded w-5/6" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-[#F5F5DC]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                          Ciência de Dados
                        </span>
                        <div className="px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full">
                          <span className="text-xs text-[#D4AF37] font-medium">Premium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ViosScrollReveal>

            {/* Bloco 02: Stripe Connect - Técnico (1 coluna, linha 1) */}
            <ViosScrollReveal delay={0.3}>
              <div
                className={cn(
                  "relative group",
                  "bg-white/5 backdrop-blur-xl",
                  "border border-[#D4AF37]/20 rounded-2xl",
                  "p-6 md:p-8 overflow-hidden",
                  "shadow-xl shadow-black/50",
                  "hover:border-[#D4AF37]/40 transition-all duration-300",
                  "md:col-span-1 md:row-span-1",
                  "flex flex-col h-full"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={cn(
                        "text-xl sm:text-2xl md:text-3xl font-serif text-[#D4AF37]"
                      )}
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Stripe Connect
                    </h3>
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37]" />
                  </div>
                  <p
                    className="text-sm sm:text-base md:text-lg text-[#F5F5DC]/80 mb-4 md:mb-6 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Fluxo de checkout otimizado com Apple Pay e Google Pay integrado.
                  </p>
                  
                  {/* Badge Secure Payment */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <div
                      className={cn(
                        "px-3 py-2 rounded-lg",
                        "bg-[#D4AF37]/10 border border-[#D4AF37]/30",
                        "flex items-center gap-2"
                      )}
                    >
                      <Shield className="h-4 w-4 text-[#D4AF37]" />
                      <span className="text-xs text-[#D4AF37] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                        Secure Payment
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div
                        className={cn(
                          "px-3 py-1.5 rounded-lg flex-1",
                          "bg-white/5 border border-[#F3E5AB]/20",
                          "flex items-center justify-center gap-1.5"
                        )}
                      >
                        <ShoppingCart className="h-3.5 w-3.5 text-[#F5F5DC]/70" />
                        <span className="text-xs text-[#F5F5DC]/70" style={{ fontFamily: "Inter, sans-serif" }}>
                          Apple Pay
                        </span>
                      </div>
                      <div
                        className={cn(
                          "px-3 py-1.5 rounded-lg flex-1",
                          "bg-white/5 border border-[#F3E5AB]/20",
                          "flex items-center justify-center gap-1.5"
                        )}
                      >
                        <ShoppingCart className="h-3.5 w-3.5 text-[#F5F5DC]/70" />
                        <span className="text-xs text-[#F5F5DC]/70" style={{ fontFamily: "Inter, sans-serif" }}>
                          Google Pay
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-[#F5F5DC]/50 mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    Curadoria Digital de pagamentos
                  </p>
                </div>
              </div>
            </ViosScrollReveal>

            {/* Linha 2: Card 3 (1 col) + Card 4 (2 cols) */}
            {/* Bloco 03: SEO & Performance - Dados (1 coluna, linha 2) */}
            <ViosScrollReveal delay={0.4}>
              <div
                className={cn(
                  "relative group",
                  "bg-white/5 backdrop-blur-xl",
                  "border border-[#D4AF37]/20 rounded-2xl",
                  "p-6 md:p-8 overflow-hidden",
                  "shadow-xl shadow-black/50",
                  "hover:border-[#D4AF37]/40 transition-all duration-300",
                  "md:col-span-1 md:row-span-1",
                  "flex flex-col h-full"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={cn(
                        "text-xl sm:text-2xl md:text-3xl font-serif text-[#D4AF37]"
                      )}
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      SEO & Performance
                    </h3>
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37]" />
                  </div>
                  <p
                    className="text-sm sm:text-base md:text-lg text-[#F5F5DC]/80 mb-4 md:mb-6 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Lighthouse Score 100/100. Rankeamento orgânico priorizado pela arquitetura Next.js.
                  </p>
                  
                  {/* Gráfico de Linhas Simples */}
                  <div className="relative h-28 md:h-32 bg-[#0B1E19]/50 rounded-lg p-3 md:p-4 border border-[#D4AF37]/10 mt-auto">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 200 100"
                      preserveAspectRatio="none"
                    >
                      {/* Grid lines */}
                      <line
                        x1="0"
                        y1="50"
                        x2="200"
                        y2="50"
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        opacity="0.2"
                      />
                      {/* Performance line */}
                      <polyline
                        points="10,80 40,60 70,45 100,30 130,25 160,20 190,15"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      {/* Points */}
                      {[
                        { x: 10, y: 80 },
                        { x: 40, y: 60 },
                        { x: 70, y: 45 },
                        { x: 100, y: 30 },
                        { x: 130, y: 25 },
                        { x: 160, y: 20 },
                        { x: 190, y: 15 },
                      ].map((point, i) => (
                        <circle
                          key={i}
                          cx={point.x}
                          cy={point.y}
                          r="3"
                          fill="#D4AF37"
                        />
                      ))}
                    </svg>
                    <div className="absolute bottom-2 right-2">
                      <span className="text-xs text-[#D4AF37] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                        Score: 100/100
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-[#F5F5DC]/50 mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    Arquitetura Escalável otimizada
                  </p>
                </div>
              </div>
            </ViosScrollReveal>

            {/* Bloco 04: Mobile First - UX (2 colunas, linha 2) */}
            <ViosScrollReveal delay={0.5}>
              <div
                className={cn(
                  "relative group",
                  "bg-white/5 backdrop-blur-xl",
                  "border border-[#D4AF37]/20 rounded-2xl",
                  "p-6 md:p-8 lg:p-10 overflow-hidden",
                  "shadow-xl shadow-black/50",
                  "hover:border-[#D4AF37]/40 transition-all duration-300",
                  "md:col-span-2 md:row-span-1",
                  "flex flex-col h-full"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className={cn(
                        "text-xl sm:text-2xl md:text-3xl font-serif text-[#D4AF37]"
                      )}
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Mobile First
                    </h3>
                    <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37]" />
                  </div>
                  <p
                    className="text-sm sm:text-base md:text-lg text-[#F5F5DC]/80 mb-4 md:mb-6 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Experiência de compra fluida em qualquer dispositivo, simulando apps nativos.
                  </p>
                  
                  {/* Mobile Preview */}
                  <div className="relative flex items-center justify-center gap-6 md:gap-8 mt-auto">
                    <div
                      className={cn(
                        "w-24 h-40 md:w-32 md:h-56 rounded-2xl",
                        "bg-gradient-to-br from-[#1a3c34]/40 to-[#0B1E19]",
                        "border-2 border-[#D4AF37]/30",
                        "p-2 md:p-3",
                        "shadow-lg"
                      )}
                    >
                      <div className="h-full bg-[#0B1E19]/50 rounded-lg p-1.5 md:p-2 flex flex-col gap-1.5 md:gap-2">
                        <div className="h-6 md:h-8 bg-[#D4AF37]/20 rounded" />
                        <div className="flex-1 space-y-1.5 md:space-y-2">
                          <div className="h-8 md:h-12 bg-[#F3E5AB]/5 rounded" />
                          <div className="h-8 md:h-12 bg-[#F3E5AB]/5 rounded" />
                          <div className="h-8 md:h-12 bg-[#F3E5AB]/5 rounded" />
                        </div>
                        <div className="h-8 md:h-10 bg-[#D4AF37]/20 rounded" />
                      </div>
                    </div>
                    <div className="hidden md:block w-24 h-40 md:w-32 md:h-56 rounded-2xl bg-gradient-to-br from-[#1a3c34]/40 to-[#0B1E19] border-2 border-[#D4AF37]/30 p-2 md:p-3 shadow-lg opacity-60">
                      <div className="h-full bg-[#0B1E19]/50 rounded-lg p-1.5 md:p-2 flex flex-col gap-1.5 md:gap-2">
                        <div className="h-6 md:h-8 bg-[#D4AF37]/20 rounded" />
                        <div className="flex-1 space-y-1.5 md:space-y-2">
                          <div className="h-8 md:h-12 bg-[#F3E5AB]/5 rounded" />
                          <div className="h-8 md:h-12 bg-[#F3E5AB]/5 rounded" />
                        </div>
                        <div className="h-8 md:h-10 bg-[#D4AF37]/20 rounded" />
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-[#F5F5DC]/50 mt-4 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                    Experiência de Luxo em cada toque
                  </p>
                </div>
              </div>
            </ViosScrollReveal>
          </div>
        </div>
      </section>

      {/* Seção "Stack de Performance" */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ViosScrollReveal delay={0.1}>
            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-serif mb-8 md:mb-12 lg:mb-16 text-center",
                "text-[#F5F5DC]"
              )}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <MaskedTextReveal delay={0.1}>
                Stack de Performance
              </MaskedTextReveal>
            </h2>
          </ViosScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Zap,
                title: "Next.js 16",
                subtitle: "Arquitetura Escalável",
              },
              {
                icon: ShoppingCart,
                title: "Stripe Connect",
                subtitle: "Curadoria Digital",
              },
              {
                icon: BarChart3,
                title: "Sub-second",
                subtitle: "Ciência de Dados",
              },
              {
                icon: Package,
                title: "SEO",
                subtitle: "Experiência de Luxo",
              },
            ].map((item, index) => (
              <ViosScrollReveal key={index} delay={0.2 + index * 0.1}>
                <div
                  className={cn(
                    "relative group",
                    "bg-white/5 backdrop-blur-xl",
                    "border border-[#D4AF37]/20 rounded-xl",
                    "p-6 text-center",
                    "shadow-xl shadow-black/50",
                    "hover:border-[#D4AF37]/40 transition-all duration-300"
                  )}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={cn(
                        "p-4 rounded-lg",
                        "bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                      )}
                    >
                      <item.icon className="h-8 w-8 text-[#D4AF37]" />
                    </div>
                  </div>
                  <h3
                    className={cn(
                      "text-lg sm:text-xl font-serif text-[#F5F5DC] mb-1",
                      "font-[var(--font-playfair)]"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "text-xs sm:text-sm text-[#F5F5DC]/60",
                      "font-[var(--font-inter)]"
                    )}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </ViosScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ViosScrollReveal delay={0.2}>
            <h2
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-serif mb-6 md:mb-8",
                "text-[#F5F5DC]"
              )}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <MaskedTextReveal delay={0.1}>
                Deseja uma solução deste nível para sua marca?
              </MaskedTextReveal>
            </h2>
          </ViosScrollReveal>

            <ViosScrollReveal delay={0.4}>
            <TextRevealBlur delay={0.3} className="block mb-8 md:mb-12">
              <p
                className={cn(
                  "text-base sm:text-lg md:text-xl text-[#F5F5DC]/80",
                  "leading-relaxed max-w-2xl mx-auto px-4"
                )}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Entre em contato e descubra como nossa <strong className="text-[#D4AF37]">Arquitetura Escalável</strong> e 
                <strong className="text-[#D4AF37]"> Curadoria Digital</strong> podem elevar sua presença
                digital ao próximo nível, criando uma <strong className="text-[#D4AF37]">Experiência de Luxo</strong> para seus clientes.
              </p>
            </TextRevealBlur>
          </ViosScrollReveal>

          <ViosScrollReveal delay={0.6}>
            <Button
              size="lg"
              className={cn(
                "h-12 md:h-14 px-6 md:px-10 text-base md:text-lg font-semibold",
                "bg-[#D4AF37] text-[#0B1E19]",
                "hover:bg-[#F3E5AB]",
                "transition-all duration-300",
                "shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/30",
                "min-w-[200px]",
                "w-full sm:w-auto"
              )}
              asChild
            >
              <a
                href="https://cal.com/gabriel-oliveira-8ajlid/discovery-call-godev-studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Reunião Enterprise
              </a>
            </Button>
          </ViosScrollReveal>
        </div>
      </section>
    </main>
  );
}
