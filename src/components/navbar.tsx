import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container px-4 md:px-6 mx-auto h-14 flex items-center justify-between">
        {/* Logo à esquerda */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tighter text-white flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          GoDev.js
          <span className="w-2 h-2 bg-emerald-500"></span>
        </Link>

        {/* Links no centro (apenas desktop) */}
        <nav className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden md:flex gap-6">
          <a
            href="#pricing"
            className="hover:text-white transition-colors"
          >
            Preços
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* CTA à direita */}
        <Button size="sm" variant="default" className="bg-white text-black hover:bg-zinc-200">
          Começar
        </Button>
      </div>
    </header>
  );
}
