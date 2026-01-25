"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { cn } from "@/lib/utils";

export function ViosShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax suave na imagem
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
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
      style={{ willChange: "transform, opacity" }}
      className={cn(
        "relative overflow-hidden",
        "border-y border-white/5 bg-zinc-900/20"
      )}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24")}>
        {/* Grid Layout */}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
            "items-center"
          )}
        >
          {/* Left: Copy & Contexto */}
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
                <a
                  href="https://vioslabs.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explorar Case
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div
            className={cn(
              "relative",
              "flex items-center justify-center",
              "min-h-[400px] lg:min-h-[600px]",
              "bg-black"
            )}
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
              style={{ 
                y, 
                scale, 
                opacity,
                willChange: "transform, opacity"
              }}
              className={cn(
                "relative z-10",
                "w-full h-full",
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
                  "w-full h-auto",
                  "max-w-full max-h-[600px]",
                  "drop-shadow-2xl"
                )}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
