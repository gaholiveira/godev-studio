"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MaskedTextReveal } from "@/components/ui/masked-text-reveal";
import { cn } from "@/lib/utils";

function clearWillChange(el: HTMLElement | null) {
  if (el?.style) el.style.willChange = "auto";
}

const itemVariants: Variants = {
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
    },
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Como funciona o modelo de assinatura?",
    answer:
      "Uma taxa fixa mensal, pedidos ilimitados, um por vez. Você pode solicitar quantas tarefas quiser, mas processamos uma de cada vez para garantir qualidade e foco total em cada entrega.",
  },
  {
    question: "Qual a stack utilizada?",
    answer:
      "Next.js App Router, TypeScript, Tailwind e Supabase/Postgres se necessário. Sempre usando as melhores práticas e tecnologias modernas para garantir performance e escalabilidade.",
  },
  {
    question: "E se eu não gostar do design?",
    answer:
      "Revisões ilimitadas até atingir a perfeição. Nosso objetivo é entregar exatamente o que você precisa, então trabalhamos iterativamente até você estar 100% satisfeito.",
  },
  {
    question: "Vocês fazem manutenção de código legado?",
    answer:
      "Foco em projetos novos ou refatorações completas. Preferimos trabalhar com código moderno e bem estruturado para garantir qualidade e performance. Para código legado, oferecemos serviços de refatoração completa.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      id="faq"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => clearWillChange(sectionRef.current)}
      style={{ willChange: "transform, opacity" }}
      className="py-16 md:py-24 bg-zinc-950 content-visibility-auto contain-layout"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
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
            <MaskedTextReveal delay={0.1}>
              Perguntas Frequentes
            </MaskedTextReveal>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
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
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className={cn(
                    "border border-white/10 rounded-lg px-6",
                    "bg-zinc-900/30 backdrop-blur-md",
                    "shadow-lg shadow-black/10",
                    "transition-all duration-300",
                    "hover:border-white/20 hover:bg-zinc-900/40",
                    "hover:shadow-xl hover:shadow-black/20",
                  )}
                >
              <AccordionTrigger
                className={cn(
                  "text-left text-zinc-200 hover:text-white",
                  "hover:no-underline py-6",
                  "font-medium",
                )}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                className={cn("text-zinc-300 pb-6", "leading-relaxed")}
              >
                {item.answer}
              </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
