"use client";

import { RevealImage } from "@/components/reveal-image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  badge?: string;
  badgeColor?: string;
}

const projects: Project[] = [
  {
    id: "vios",
    title: "VIOS Labs",
    description:
      "Ecossistema D2C com gestão de estoque e experiência de checkout otimizada.",
    image: "/Images/mockvioslabs.png",
    imageAlt: "Dashboard da plataforma Vios Labs",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
  },
  {
    id: "uplevel",
    title: "Uplevel Marketplaces",
    description:
      "Experiência digital de alta performance focada em conversão de leads B2B.",
    image: "/Images/mockuplevelmktp.png",
    imageAlt: "Landing page Uplevel Marketplaces",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "React"],
  },
  {
    id: "godev",
    title: "GoDev SaaS Infrastructure",
    description:
      "Infraestrutura interna para validar integrações complexas de pagamentos, dashboards dinâmicos e arquitetura multi-tenant. Esta base funciona como acelerador tecnológico para soluções personalizadas.",
    image: "/Images/mockdash.png",
    imageAlt: "Dashboard da infraestrutura SaaS GoDev",
    tags: ["Next.js", "Stripe API", "Tailwind CSS", "Auth.js", "Supabase"],
    badge: "INTERNAL",
    badgeColor: "emerald",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full"
      style={{
        top: `calc(${index} * 25px)`,
        height: "80vh",
        zIndex: projects.length - index,
      }}
      initial={{ scale: 1 }}
      animate={{
        scale: isInView ? 1 : 0.95,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="h-full bg-[#0a0a0a] rounded-2xl border border-white/5 shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Conteúdo Textual - Esquerda (Desktop) / Topo (Mobile) */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg">
            {/* Badge (se existir) */}
            {project.badge && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-4 ${
                  project.badgeColor === "emerald"
                    ? "text-emerald-500/80 bg-emerald-500/10 border-emerald-500/20"
                    : "text-zinc-400 bg-zinc-800/50 border-zinc-700/30"
                }`}
              >
                {project.badge}
              </motion.span>
            )}

            {/* Título */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
            >
              {project.title}
            </motion.h3>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-3 py-1.5 rounded border border-zinc-700/30"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Botão Ver Case */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group inline-flex items-center gap-2 text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-colors"
            >
              Ver Case
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
            </motion.button>
          </div>
        </div>

        {/* Mockup - Direita (Desktop) / Embaixo (Mobile) */}
        <div className="flex-1 relative bg-zinc-950 min-h-[300px] md:min-h-0">
          <RevealImage
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="py-24 bg-black relative overflow-hidden">
      {/* Container Principal */}
      <div className="container px-4 md:px-6 mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="tracking-widest text-xs font-semibold text-emerald-500 uppercase mb-4">
            SELECTED WORK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Software com alma.
          </h2>
        </motion.div>

        {/* Container dos Cards Sticky */}
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Espaçamento final para garantir scroll adequado */}
        <div className="h-[60vh]" />
      </div>
    </section>
  );
}
