"use client";

import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
      {/* Glow verde sutil no fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Investimento transparente e estratégico.
          </h2>
          <p className="text-zinc-400">
            Flexibilidade total. Pause quando necessário.
          </p>
        </div>

        {/* Cards de Preço */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Card 1: Core */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-white/5 backdrop-blur-md rounded-lg p-8 flex flex-col relative"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Core</h3>
              <p className="text-sm text-zinc-400 mb-3">
                Para MVPs e sites institucionais.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">R$ 4.990</span>
                <span className="text-zinc-400">/mês</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">1 solicitação por vez</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <Tooltip content="Para tarefas de complexidade padrão">
                  <span className="text-zinc-300">
                    Entrega média em 48h<span className="text-emerald-400">*</span>
                  </span>
                </Tooltip>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">
                  Stack: Next.js + Tailwind + React
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">
                  Gestão assíncrona (Trello)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">
                  Pause ou cancele quando quiser
                </span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/5kQ14nbbh17a0ji2e8dMI00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] h-11 px-4 py-2 rounded-md border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30 transition-all font-medium text-sm flex items-center justify-center active:scale-95"
            >
              Selecionar Core
            </a>
          </motion.div>

          {/* Card 2: Scale - RECOMENDADO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-white/20 bg-white/5 backdrop-blur-md rounded-lg p-8 flex flex-col relative"
          >
            {/* Glow dourado sutil para destacar */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none rounded-lg" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Badge */}
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black border-white/20 z-20">
              Recomendado
            </Badge>

            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-1">Scale</h3>
              <p className="text-sm text-zinc-400 mb-3">
                Para E-commerces, SaaS e Escala.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">R$ 8.990</span>
                <span className="text-zinc-400">/mês</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8 relative z-10">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">
                  2 solicitações simultâneas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">
                  Consultoria Quinzenal (Call Estratégica com Founder)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">
                  Stack Completa: Next.js + Supabase (Backend/Auth)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <Tooltip content="Resposta em horário comercial">
                  <span className="text-zinc-300">
                    Suporte Prioritário via Chat<span className="text-emerald-400">*</span>
                  </span>
                </Tooltip>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300">
                  Code Review e Auditoria de Segurança
                </span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/7sY3cva7d8zC2rq1a4dMI01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] h-11 bg-white text-black hover:bg-emerald-400 hover:text-black transition-all rounded-md px-4 py-2 font-medium text-sm flex items-center justify-center active:scale-95 relative z-10"
            >
              Assinar Scale
            </a>
          </motion.div>
        </div>

        {/* Setup Fee - Texto discreto abaixo dos preços */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-zinc-500 mt-8"
        >
          Setup Fee: R$ 2.000 (ISENTO para os 3 primeiros parceiros)
        </motion.p>

        {/* Texto abaixo dos cards */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-zinc-500 mt-12"
        >
          Soluções customizadas para Enterprise?{" "}
          <a
            href="https://cal.com/gabriel-oliveira-8ajlid/discovery-call-godev-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-all underline min-h-[44px] inline-flex items-center active:scale-95"
          >
            Agendar Discovery.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
