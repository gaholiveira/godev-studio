export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-900 bg-zinc-950 text-zinc-500 text-sm">
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center">
        {/* Logo à esquerda */}
        <div className="text-white font-bold tracking-tighter">GoDev.js</div>

        {/* Texto à direita com link */}
        <div>
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/gabriel-oliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Gabriel Oliveira
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
