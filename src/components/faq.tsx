"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeadingReveal } from "@/components/text-reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation";

export function FAQ() {
  const faqItems = [
    {
      value: "item-1",
      question: "Por que não contratar um desenvolvedor full-time?",
      answer:
        "O investimento anual em um Sênior ultrapassa R$ 150.000 (salário + benefícios), além do tempo de contratação. Com a GoDev Studio, você tem expertise sênior imediata por uma fração do investimento, com flexibilidade para pausar quando o fluxo diminuir.",
    },
    {
      value: "item-2",
      question: "O que significa 'Pausar a assinatura'?",
      answer:
        "Se você não tiver demandas no momento, pode pausar sua assinatura. Os dias restantes do seu ciclo de cobrança ficam guardados e você pode usá-los quando precisar voltar. Sem desperdício.",
    },
    {
      value: "item-3",
      question: "Quão rápido vocês entregam?",
      answer:
        "A maioria das solicitações é entregada em 48 horas ou menos. Tarefas complexas são quebradas em entregas menores para manter o fluxo constante.",
    },
    {
      value: "item-4",
      question: "E se eu não gostar do código ou do resultado?",
      answer:
        "O desenvolvimento é interativo. Se não estiver 100% satisfeito, revisamos o código quantas vezes for necessário até ficar perfeito.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        {/* Cabeçalho com TextReveal */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          <HeadingReveal 
            text="Perguntas Frequentes" 
            staggerDelay={0.04}
            duration={0.9}
          />
        </h2>

        {/* Accordion com Stagger Pattern */}
        <StaggerContainer
          staggerDelay={0.1}
          delay={0.3}
          threshold={0.2}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <StaggerItem key={item.value} yOffset={20} duration={0.6}>
                <AccordionItem
                  value={item.value}
                  className="border border-zinc-800 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>
      </div>
    </section>
  );
}
