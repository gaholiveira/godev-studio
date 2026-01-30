"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";

function clearWillChange(el: HTMLElement | null) {
  if (el?.style) el.style.willChange = "auto";
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Bloquear scroll do body quando menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Fechar menu com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "bg-zinc-950/80 backdrop-blur-md",
        "border-b border-white/5",
      )}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")}>
        <div
          className={cn("flex items-center justify-between", "h-16 md:h-20")}
        >
          {/* Logo - Esquerda */}
          <Link
            href="/"
            className={cn(
              "font-bold tracking-tighter text-white",
              "text-xl md:text-2xl",
              "hover:opacity-80 transition-opacity",
            )}
            onClick={closeMobileMenu}
          >
            GoDev.
          </Link>

          {/* Navegação - Centro (Desktop apenas) */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-8",
              "text-sm font-medium",
            )}
          >
            <SmoothScrollLink
              href="#servicos"
              className={cn(
                "text-zinc-300 hover:text-white",
                "transition-colors",
              )}
            >
              Serviços
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#planos"
              className={cn(
                "text-zinc-300 hover:text-white",
                "transition-colors",
              )}
            >
              Planos
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#tech-stack"
              className={cn(
                "text-zinc-300 hover:text-white",
                "transition-colors",
              )}
            >
              Tech Stack
            </SmoothScrollLink>
            <Link
              href="/vios"
              className={cn(
                "text-zinc-300 hover:text-white",
                "transition-colors",
                "flex items-center gap-1.5",
                "relative group"
              )}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors" />
              <span>Showcase</span>
            </Link>
          </nav>

          {/* Direita - Desktop: Botão | Mobile: Menu Icon */}
          <div className="flex items-center gap-4">
            {/* Botão Área do Cliente - Desktop */}
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "hidden md:inline-flex",
                "border-zinc-700 text-zinc-200",
                "hover:bg-zinc-900 hover:text-white",
              )}
            >
              Área do Cliente
            </Button>

            {/* Menu Icon - Mobile */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={cn(
                "md:hidden",
                "relative p-2 rounded-md",
                "text-zinc-300 hover:text-white",
                "hover:bg-zinc-900",
                "transition-colors",
                "min-h-[44px] min-w-[44px]",
                "flex items-center justify-center",
                "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-950",
              )}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: isMobileMenuOpen ? 90 : 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Menu
                  className={cn(
                    "h-6 w-6 transition-opacity",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100",
                  )}
                />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  rotate: isMobileMenuOpen ? 0 : -90,
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X
                  className={cn(
                    "h-6 w-6 transition-opacity",
                    isMobileMenuOpen ? "opacity-100" : "opacity-0",
                  )}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Overlay e Container */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Overlay com blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className={cn(
                "fixed inset-0 top-16 md:top-20",
                "bg-black/60 backdrop-blur-sm",
                "z-40",
              )}
              aria-hidden="true"
            />

            {/* Menu Container */}
            <motion.div
              ref={menuPanelRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "fixed top-16 md:top-20 left-0 right-0",
                "bg-zinc-950/95 backdrop-blur-md",
                "border-b border-white/10",
                "z-50",
                "max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)]",
                "overflow-y-auto",
              )}
              style={{ willChange: "transform, opacity" }}
              onAnimationComplete={() => clearWillChange(menuPanelRef.current)}
            >
              <nav
                className={cn("flex flex-col items-center", "px-4 py-6")}
                role="navigation"
                aria-label="Menu mobile"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                  className="space-y-1 w-full max-w-xs"
                >
                  {[
                    { href: "#servicos", label: "Serviços", isLink: false },
                    { href: "#planos", label: "Planos", isLink: false },
                    { href: "#tech-stack", label: "Tech Stack", isLink: false },
                    { href: "/vios", label: "Showcase", isLink: true },
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: -10,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                    >
                      {item.isLink ? (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "block",
                            "text-base font-medium",
                            "text-zinc-300 hover:text-white",
                            "px-4 py-3 rounded-lg",
                            "text-center",
                            "hover:bg-zinc-900/50",
                            "transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-950",
                            "flex items-center justify-center gap-1.5"
                          )}
                        >
                          <Sparkles className="h-3.5 w-3.5 text-[#d4af37]/60" />
                          {item.label}
                        </Link>
                      ) : (
                        <SmoothScrollLink
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "block",
                            "text-base font-medium",
                            "text-zinc-300 hover:text-white",
                            "px-4 py-3 rounded-lg",
                            "text-center",
                            "hover:bg-zinc-900/50",
                            "transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-950",
                          )}
                        >
                          {item.label}
                        </SmoothScrollLink>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
