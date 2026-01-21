"use client";

import Link from "next/link";
import { forwardRef } from "react";

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer 
      ref={ref}
      className="fixed bottom-0 left-0 right-0 w-full py-8 border-t border-zinc-900 bg-zinc-950 text-zinc-500 text-sm" 
      style={{ zIndex: 0 }}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo à esquerda */}
          <div className="text-white font-bold tracking-tighter">GoDev.js</div>

          {/* Links do meio */}
          <div className="flex gap-6 items-center">
            <Link
              href="/terms"
              className="text-xs text-zinc-500 hover:text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
            >
              Termos
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-zinc-500 hover:text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
            >
              Privacidade
            </Link>
          </div>

          {/* Texto à direita com link */}
          <div>
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/gabriel-oliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all min-h-[44px] inline-flex items-center active:scale-95"
            >
              Gabriel Oliveira
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
