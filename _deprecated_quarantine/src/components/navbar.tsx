import Link from "next/link";
import { Magnetic } from "@/components/magnetic";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container px-4 md:px-6 mx-auto h-14 flex items-center justify-between">
        {/* Logo à esquerda */}
        <Magnetic>
          <Link
            href="/"
            className="font-bold text-xl tracking-tighter text-white flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            GoDev.js
            <span className="w-2 h-2 bg-emerald-500"></span>
          </Link>
        </Magnetic>

        {/* Links no centro (apenas desktop) */}
        <nav className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:flex gap-6">
          <Magnetic>
            <SmoothScrollLink
              href="#pricing"
              className="hover:text-white transition-colors"
            >
              Investimento
            </SmoothScrollLink>
          </Magnetic>
          <Magnetic>
            <SmoothScrollLink
              href="#faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </SmoothScrollLink>
          </Magnetic>
        </nav>

        {/* CTA à direita - Thumb Zone friendly em mobile */}
        <Magnetic>
          <SmoothScrollLink
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 min-h-[44px] h-9 md:h-9 px-4 md:px-4 bg-white text-black hover:bg-zinc-200 active:scale-95"
          >
            Iniciar Projeto
          </SmoothScrollLink>
        </Magnetic>
      </div>
    </header>
  );
}
