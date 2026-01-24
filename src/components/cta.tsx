"use client";

import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { HeadingReveal, ParagraphReveal } from "@/components/text-reveal";
import { InstantFade } from "@/components/stagger-animation";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Círculo de gradiente verde difuso no fundo */}
      <div className="bg-emerald-500/10 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none" />

      {/* Conteúdo */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center">
          {/* Título com TextReveal dramático */}
          <HeadingReveal
            text="Pronto para escalar sua engenharia?"
            as="h2"
            staggerDelay={0.03}
            duration={1}
            className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6"
          />

          {/* Subtítulo com ParagraphReveal */}
          <ParagraphReveal
            delay={0.4}
            duration={0.8}
            className="text-zinc-400 text-lg max-w-xl mx-auto mb-10"
          >
            Última vaga disponível para início imediato em Janeiro. Consulte
            disponibilidade.
          </ParagraphReveal>

          {/* Botões - NO-MOTION ZONE: fade instantâneo de 0.3s */}
          <InstantFade delay={0.6} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <SmoothScrollLink
              href="#pricing"
              className="min-h-[44px] h-11 px-8 rounded-md bg-white text-black hover:bg-zinc-200 transition-all font-medium text-sm flex items-center justify-center active:scale-95"
            >
              Iniciar Projeto
            </SmoothScrollLink>
            <a
              href="https://cal.com/gabriel-oliveira-8ajlid/discovery-call-godev-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] h-11 px-8 rounded-md border border-zinc-800 bg-transparent text-white hover:bg-zinc-900 transition-all font-medium text-sm flex items-center justify-center active:scale-95"
            >
              Agendar Discovery
            </a>
          </InstantFade>
        </div>
      </div>
    </section>
  );
}
