import Link from "next/link";

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
        <a
          href="#pricing"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 bg-white text-black hover:bg-zinc-200"
        >
          Começar
        </a>
      </div>
    </header>
  );
}
