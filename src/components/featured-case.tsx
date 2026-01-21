"use client";

import { TextReveal } from "@/components/text-reveal";
import { Magnetic } from "@/components/magnetic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealImage } from "@/components/reveal-image";

export function FeaturedCase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax suave na imagem
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

  return (
    <section id="work" className="py-24 bg-black relative overflow-hidden">
      <div ref={containerRef} className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          {/* Kicker */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="tracking-[0.2em] text-xs font-semibold text-emerald-500 uppercase mb-6"
          >
            Selected Work — 2026
          </motion.p>

          {/* Título Grande */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            <TextReveal text="VIOS Labs" delay={0.2} staggerDelay={0.04} />
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-zinc-400 tracking-wide max-w-3xl">
            <TextReveal
              text="Arquitetura de E-commerce para o Mercado de Luxo."
              delay={0.5}
              staggerDelay={0.03}
            />
          </p>
        </div>

        {/* Visual Principal (Hero do Case) com Parallax */}
        <div
          ref={imageRef}
          className="relative w-full aspect-video md:aspect-[21/9] mb-24 md:mb-32 overflow-hidden rounded-lg"
        >
          {/* Placeholder Verde VIOS */}
          <motion.div
            style={{ y, scale }}
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-zinc-900"
          >
            <RevealImage
              src="/Images/mockvioslabs.png"
              alt="Dashboard da plataforma Vios Labs"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Grid de Detalhes (A Narrativa) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Coluna 1: O Desafio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.2,
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1]
            }}
            className="border-t border-white/10 pt-8"
          >
            <h3 className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-4">
              O Desafio
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed tracking-wide">
              <TextReveal
                text="O mercado de suplementos premium exigia uma vitrine digital que convertesse desejo em vendas, sem a lentidão das plataformas genéricas."
                delay={0.3}
                staggerDelay={0.02}
              />
            </p>
          </motion.div>

          {/* Coluna 2: A Solução */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.35,
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1]
            }}
            className="border-t border-white/10 pt-8"
          >
            <h3 className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-4">
              A Engenharia
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed tracking-wide">
              <TextReveal
                text="Desenvolvimento de uma arquitetura Headless. Foco total em Motion UI para retenção e otimização extrema de Core Web Vitals para SEO."
                delay={0.4}
                staggerDelay={0.02}
              />
            </p>
          </motion.div>

          {/* Coluna 3: A Stack & Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.5,
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1]
            }}
            className="border-t border-white/10 pt-8"
          >
            <h3 className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-4">
              Stack & Performance
            </h3>
            {/* Tags Minimalistas */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Next.js 15", "Tailwind", "Stripe", "Framer Motion", "Vercel"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1.5 rounded border border-zinc-800/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            {/* Score Destaque */}
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <TextReveal text="Score 100/100" delay={0.5} staggerDelay={0.03} />
            </div>
          </motion.div>
        </div>

        {/* Botão de Ação */}
        <div className="flex justify-center">
          <Magnetic strength={0.3}>
            <motion.a
              href="https://vioslabs.com.br"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="group inline-flex items-center gap-3 text-sm font-medium text-zinc-300 border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-lg transition-colors tracking-wide"
            >
              Visitar ViosLabs.com.br
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
