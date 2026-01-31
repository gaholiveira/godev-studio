"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

function clearWillChange(el: HTMLElement | null) {
  if (el?.style) el.style.willChange = "auto";
}
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { TextRevealBlur } from "@/components/ui/text-reveal-blur";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { cn } from "@/lib/utils";

/** Links de checkout Stripe e agendamento */
const CHECKOUT_LINKS = {
  landingPage:
    "https://buy.stripe.com/7sY6oH3IPaHKd642e8dMI02", // Landing Page (One-time)
  partner:
    "https://buy.stripe.com/9B614nbbhg243vubOIdMI03", // Dev Partner (Recorrente)
  enterprise: "https://cal.com/gabriel-oliveira-8ajlid/discovery-call-godev-studio", // Enterprise: Link de agendamento
} as const;

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface PricingCardProps {
  title: string;
  price: string;
  subtitle?: string;
  description?: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline" | "ghost";
  buttonHref?: string;
  isFeatured?: boolean;
  badge?: string;
}

function PricingCard({
  title,
  price,
  subtitle,
  description,
  features,
  buttonText,
  buttonVariant = "outline",
  buttonHref,
  isFeatured = false,
  badge,
}: PricingCardProps) {
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
        "relative flex flex-col",
        "bg-zinc-900/30 backdrop-blur-md",
        "border rounded-lg p-6 md:p-8",
        "shadow-xl shadow-black/20",
        "transition-colors duration-300",
        "before:absolute before:inset-0 before:rounded-lg before:pointer-events-none before:z-0",
        "before:bg-gradient-to-br before:from-white/5 before:to-transparent",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        isFeatured
          ? "border-[#d4af37]/30 ring-1 ring-[#d4af37]/20"
          : "border-white/10",
        isFeatured
          ? "hover:border-[#d4af37]/50 hover:bg-zinc-900/50 hover:shadow-2xl hover:shadow-[#d4af37]/10"
          : "hover:border-white/20 hover:bg-zinc-900/50 hover:shadow-2xl hover:shadow-black/30",
      )}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Badge */}
      {badge && (
        <Badge
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 z-20",
            "bg-white text-zinc-950 border-zinc-700",
          )}
        >
          {badge}
        </Badge>
      )}

      {/* Header */}
      <div className="relative z-10 mb-6">
        <h3 className={cn("text-2xl md:text-3xl font-bold text-gradient-metallic mb-2")}>
          {title}
        </h3>
        {description && (
          <TextRevealBlur
            delay={0.6}
            className="text-sm text-zinc-300 mb-3 block"
          >
            {description}
          </TextRevealBlur>
        )}
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span
              className={cn(
                "font-bold text-gradient-metallic",
                isFeatured
                  ? "text-5xl md:text-6xl"
                  : "text-4xl md:text-5xl",
              )}
            >
              {price}
            </span>
          </div>
          {subtitle && (
            <TextRevealBlur
              delay={0.6}
              className="text-xs md:text-sm text-zinc-300 block"
            >
              {subtitle}
            </TextRevealBlur>
          )}
        </div>
      </div>

      {/* Features List */}
      <ul className="flex-1 space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className={cn("w-5 h-5 shrink-0 mt-0.5", "text-emerald-500")}
            />
            <span className="text-sm md:text-base text-zinc-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Link para Case Vios (apenas no Enterprise) */}
      {title === "Enterprise" && (
        <div className="mb-6">
          <Link
            href="/vios"
            className={cn(
              "text-xs md:text-sm",
              "text-[#d4af37] hover:text-[#f3e5ab]",
              "underline-offset-4 hover:underline",
              "transition-colors duration-200",
              "flex items-center gap-1",
              "group"
            )}
          >
            <span>Conheça nosso padrão de entrega Enterprise (Case VIOS)</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}

      {/* Button */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant={buttonVariant}
          size="lg"
          className={cn(
            "w-full font-medium",
            isFeatured
              ? "bg-white text-zinc-950 hover:bg-zinc-100 hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all"
              : "border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700",
          )}
          asChild
        >
          {buttonHref ? (
            <a
              href={buttonHref}
              target={buttonHref.startsWith("http") ? "_blank" : undefined}
              rel={buttonHref.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {buttonText}
            </a>
          ) : (
            <SmoothScrollLink href="#cta">{buttonText}</SmoothScrollLink>
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
}

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      id="planos"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "0px 0px 250px 0px" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => clearWillChange(sectionRef.current)}
      style={{ willChange: "transform, opacity" }}
      className="py-16 md:py-24 bg-zinc-950 contain-layout"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "0px 0px 250px 0px" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => clearWillChange(headerRef.current)}
          style={{ willChange: "transform, opacity" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-metallic mb-4",
            )}
          >
            <MaskedTextReveal delay={0}>
              Investimento Transparente.
            </MaskedTextReveal>
          </h2>
          <TextRevealBlur
            delay={0}
            className={cn(
              "text-base md:text-lg text-zinc-300 max-w-2xl mx-auto",
              "block",
            )}
          >
            Escolha o modelo ideal para o seu momento.
          </TextRevealBlur>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
            "max-w-6xl mx-auto",
          )}
        >
          {/* Card 1: Landing Page (Launch) */}
          <PricingCard
            title="Landing Page"
            price="R$ 3.490"
            subtitle="Pagamento único"
            description="Perfeito para lançamentos, PLRs e validação de MVP."
            features={[
              "Design High-End (Conversão)",
              "Next.js 16 + Tailwind",
              "Otimização Mobile First",
              "SEO Técnico Incluso",
              "Entrega em 5 dias úteis",
            ]}
            buttonText="Começar Agora"
            buttonVariant="outline"
            buttonHref={CHECKOUT_LINKS.landingPage}
          />

          {/* Card 2: Dev Partner (Growth) - DESTAQUE */}
          <PricingCard
            title="Dev Partner"
            price="R$ 5.990"
            subtitle="/mês. Cancele quando quiser."
            description="Substitua contratações caras. Design e código sênior sob demanda."
            features={[
              "Pedidos Ilimitados",
              "1 Task ativa por vez",
              "Updates a cada 48h",
              "Stack: Next.js, TS, Supabase",
              "Comunicação Async (Sem reuniões)",
              "Gerencie via Trello/Notion",
            ]}
            buttonText="Assinar Membership"
            buttonVariant="default"
            buttonHref={CHECKOUT_LINKS.partner}
            isFeatured={true}
            badge="Mais Popular"
          />

          {/* Card 3: Enterprise (Scale) */}
          <PricingCard
            title="Enterprise"
            price="Sob Consulta"
            subtitle="Projetos Complexos"
            description="Para E-commerces Headless (como VIOS) e SaaS escaláveis."
            features={[
              "Squad Dedicada",
              "Arquitetura de Banco de Dados",
              "Migração de Legado",
              "SLA Garantido",
              "Consultoria de Negócio",
            ]}
            buttonText="Agendar Reunião"
            buttonVariant="outline"
            buttonHref={CHECKOUT_LINKS.enterprise}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
