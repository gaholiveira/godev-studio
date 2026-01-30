import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className={cn("bg-zinc-950 border-t border-zinc-900", "py-12 md:py-16")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12",
            "mb-8 md:mb-12",
          )}
        >
          {/* Left: Logo & Description */}
          <div className="space-y-4">
            <h3
              className={cn(
                "font-bold tracking-tighter text-white",
                "text-xl md:text-2xl",
              )}
            >
              GoDev.
            </h3>
            <p className={cn("text-sm text-zinc-400 max-w-xs")}>
              Agência de desenvolvimento high-end.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-4">
            <h4
              className={cn(
                "text-sm font-semibold text-white uppercase tracking-wider",
              )}
            >
              Links Rápidos
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={cn(
                  "text-sm text-zinc-400 hover:text-white",
                  "transition-colors",
                )}
              >
                Home
              </Link>
              <SmoothScrollLink
                href="#planos"
                className={cn(
                  "text-sm text-zinc-400 hover:text-white",
                  "transition-colors",
                )}
              >
                Planos
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#cta"
                className={cn(
                  "text-sm text-zinc-400 hover:text-white",
                  "transition-colors",
                )}
              >
                Contato
              </SmoothScrollLink>
            </nav>
          </div>

          {/* Right: Social Links */}
          <div className="space-y-4">
            <h4
              className={cn(
                "text-sm font-semibold text-white uppercase tracking-wider",
              )}
            >
              Social
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-zinc-400 hover:text-white",
                  "transition-colors",
                  "p-2 rounded-md hover:bg-zinc-900",
                  "min-h-[44px] min-w-[44px] flex items-center justify-center",
                )}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-zinc-400 hover:text-white",
                  "transition-colors",
                  "p-2 rounded-md hover:bg-zinc-900",
                  "min-h-[44px] min-w-[44px] flex items-center justify-center",
                )}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-zinc-400 hover:text-white",
                  "transition-colors",
                  "p-2 rounded-md hover:bg-zinc-900",
                  "min-h-[44px] min-w-[44px] flex items-center justify-center",
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={cn(
            "pt-8 border-t border-zinc-900",
            "text-center text-sm text-zinc-400",
          )}
        >
          <p>Copyright © 2026 GoDev Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
