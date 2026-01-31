"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { cn } from "@/lib/utils";

const titleLines = ["Software de Alta Performance.", "Sem burocracia."];

export function HeroContent() {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col items-center justify-center",
        "max-w-4xl mx-auto text-center",
        "space-y-6 md:space-y-8",
      )}
    >
      <Badge
        variant="outline"
        className={cn(
          "rounded-full border-slate-800 bg-zinc-900/50",
          "px-4 py-1.5 text-xs md:text-sm",
          "text-zinc-300 backdrop-blur-sm",
          "font-normal",
        )}
      >
        Vagas abertas para novos projetos Q1 2026
      </Badge>

      <h1
        className={cn(
          "text-4xl md:text-6xl lg:text-7xl",
          "font-bold tracking-tighter",
          "leading-[1.1] md:leading-[1.2]",
          "text-gradient-metallic",
        )}
      >
        {titleLines.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p
        className={cn(
          "text-base md:text-lg lg:text-xl",
          "text-zinc-300 max-w-2xl",
          "leading-relaxed md:leading-normal",
        )}
      >
        Sua equipe de desenvolvimento Next.js sob demanda. Código sênior,
        entrega ágil e foco total no seu produto.
      </p>

      <div
        className={cn(
          "flex flex-col sm:flex-row gap-4 md:gap-6",
          "items-center justify-center",
          "mt-8 md:mt-10",
        )}
      >
        <Button
          size="lg"
          className={cn(
            "bg-white text-zinc-950",
            "hover:bg-zinc-200",
            "min-h-[44px] min-w-[160px]",
            "font-medium",
            "border border-slate-800/50",
          )}
          asChild
        >
          <SmoothScrollLink href="#planos" duration={1.8}>
            Ver Planos
          </SmoothScrollLink>
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className={cn(
            "text-zinc-300",
            "hover:bg-slate-800/50 hover:text-white",
            "border border-slate-800",
            "min-h-[44px] min-w-[160px]",
            "font-medium",
          )}
          asChild
        >
          <SmoothScrollLink href="#tech-stack" duration={1.8}>
            Nossa Stack
          </SmoothScrollLink>
        </Button>
      </div>
    </div>
  );
}
