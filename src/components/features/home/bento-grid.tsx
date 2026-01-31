"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { Code, MessageSquare, Zap, Package } from "lucide-react";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  span?: "col-span-1" | "col-span-2" | "col-span-3" | "col-span-1 md:col-span-2" | "col-span-1 md:col-span-3";
  children?: React.ReactNode;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => {
        // Remove willChange após animação para evitar conflitos
      },
    },
  },
};

function BentoCard({
  title,
  description,
  icon,
  className,
  span = "col-span-1",
  children,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onAnimationComplete={() => {
        // Remove willChange após animação para evitar conflitos visuais
        if (cardRef.current) {
          cardRef.current.style.willChange = "auto";
        }
      }}
      className={cn(
        "group relative",
        "bg-zinc-900/30 backdrop-blur-md",
        "border border-white/10",
        "rounded-lg p-6 md:p-8",
        "shadow-xl shadow-black/20",
        "hover:border-white/20 hover:bg-zinc-900/50",
        "hover:shadow-2xl hover:shadow-black/30",
        "transition-colors duration-300",
        "before:absolute before:inset-0 before:rounded-lg before:pointer-events-none before:z-0",
        "before:bg-gradient-to-br before:from-white/5 before:to-transparent",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        span,
        className,
      )}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Icon */}
      <div
        className={cn(
          "relative z-10 mb-4 text-zinc-300",
          "group-hover:text-white transition-colors",
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={cn(
            "text-xl md:text-2xl font-bold text-gradient-metallic mb-2",
          )}
        >
          {title}
        </h3>
        <TextRevealBlur
          delay={0.5}
          className={cn(
            "text-sm md:text-base text-zinc-300",
            "group-hover:text-zinc-200 transition-colors",
            "block",
          )}
        >
          {description}
        </TextRevealBlur>
        {children}
      </div>
    </motion.div>
  );
}

function clearWillChange(el: HTMLElement | null) {
  if (el?.style) el.style.willChange = "auto";
}

export function BentoGrid() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section id="servicos" className="py-16 md:py-24 bg-zinc-950 content-visibility-auto contain-layout">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => clearWillChange(titleRef.current)}
          style={{ willChange: "transform, opacity" }}
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-metallic mb-12 md:mb-16",
            "text-center md:text-left",
          )}
        >
          <MaskedTextReveal delay={0.1}>
            Desenvolvimento como Produto.
          </MaskedTextReveal>
        </motion.h2>

        {/* Bento Grid */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          onAnimationComplete={() => clearWillChange(gridRef.current)}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-4",
            "auto-rows-auto",
          )}
        >
          {/* Card 1: Stack de Elite (Span 2) */}
          <BentoCard
            title="Stack de Elite"
            description="Otimização extrema e código limpo por padrão."
            icon={<Code className="h-8 w-8 md:h-10 md:w-10" />}
            span="col-span-1 md:col-span-2"
          >
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700">
                Next.js 15+
              </span>
              <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700">
                TypeScript
              </span>
              <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700">
                Tailwind CSS
              </span>
            </div>
          </BentoCard>

          {/* Card 2: Async First (Quadrado) */}
          <BentoCard
            title="Async First"
            description="Zero reuniões inúteis. Updates diários via texto/vídeo."
            icon={<MessageSquare className="h-8 w-8 md:h-10 md:w-10" />}
            span="col-span-1"
          />

          {/* Card 3: SEO Técnico (Quadrado) */}
          <BentoCard
            title="SEO Técnico"
            description="Lighthouse 100/100 garantido."
            icon={<Zap className="h-8 w-8 md:h-10 md:w-10" />}
            span="col-span-1"
          />

          {/* Card 4: Design System Ready (Span 3 ou 2) */}
          <BentoCard
            title="Design System Ready"
            description="Componentes modulares prontos para escalar (Shadcn/UI + Custom)."
            icon={<Package className="h-8 w-8 md:h-10 md:w-10" />}
            span="col-span-1 md:col-span-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
