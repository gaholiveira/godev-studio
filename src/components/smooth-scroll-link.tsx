"use client";

import { ReactNode, MouseEvent } from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  duration?: number;
  offset?: number;
  as?: "a" | "button";
  onClick?: () => void;
}

// Tipo para a instância do Lenis (genérico para compatibilidade com diferentes versões)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LenisInstance = any;

// Armazenar a instância global do Lenis
let lenisInstance: LenisInstance = null;

// Função para obter a instância do Lenis
function getLenisInstance(): LenisInstance {
  // Tenta acessar via window (Lenis pode expor globalmente)
  if (typeof window !== "undefined") {
    const windowLenis = (window as { lenis?: LenisInstance }).lenis;
    if (windowLenis) {
      return windowLenis;
    }

    // Tenta acessar via document.querySelector
    const lenisElement = document.querySelector(".lenis") as HTMLElement & { lenis?: LenisInstance };
    if (lenisElement?.lenis) {
      return lenisElement.lenis;
    }
  }

  return lenisInstance;
}

// Função para registrar a instância (será chamada pelo SmoothScroll)
export function setLenisInstance(lenis: LenisInstance) {
  lenisInstance = lenis;
  if (typeof window !== "undefined") {
    (window as { lenis?: LenisInstance }).lenis = lenis;
  }
}

export function SmoothScrollLink({
  href,
  children,
  className = "",
  duration = 1.8,
  offset = -80,
  as = "a",
  onClick,
}: SmoothScrollLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // IMPORTANTE: preventDefault deve ser a primeira coisa
    e.preventDefault();
    e.stopPropagation();

    // Chama onClick callback se fornecido
    if (onClick) {
      onClick();
    }

    // Se não for um hash link, deixar comportamento padrão
    if (!href.startsWith("#")) {
      return;
    }

    // Extrair o ID do href (remover #)
    const targetId = href.slice(1);
    if (!targetId) {
      // Link é apenas "#" sem ID - ignorar silenciosamente em produção
      return;
    }

    // Obter instância do Lenis PRIMEIRO
    const lenis = getLenisInstance();

    // Encontrar o elemento alvo no DOM
    const targetElement = document.getElementById(targetId) || document.querySelector(href);
    if (!targetElement) {
      return;
    }

    // Adicionar blur no body quando o scroll inicia (evitar reflow: não ler offsetHeight)
    if (typeof document !== "undefined") {
      document.body.classList.add("scroll-blur");
    }

    // Callback para remover blur quando o scroll terminar
    let blurRemoved = false;
    const removeBlur = () => {
      if (!blurRemoved && typeof document !== "undefined") {
        blurRemoved = true;
        document.body.classList.remove("scroll-blur");
      }
    };

    if (lenis && targetElement) {
      // Função de easing Exponential Out
      const exponentialOut = (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t));

      // Variável para rastrear se o scroll está ativo
      let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
      let scrollTimeout: NodeJS.Timeout;
      let isListening = false;
      let scrollStartTime = Date.now();

      // Função para verificar se o scroll parou (debounce melhorado)
      const checkScrollStop = () => {
        const currentScrollY = typeof window !== "undefined" ? window.scrollY : 0;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        // Limpar timeout anterior
        clearTimeout(scrollTimeout);
        
        // Se a posição mudou significativamente, o scroll ainda está ativo
        if (scrollDelta > 1) {
          lastScrollY = currentScrollY;
          scrollStartTime = Date.now();
          // Agendar nova verificação
          scrollTimeout = setTimeout(checkScrollStop, 100);
        } else {
          // Verificar se passou tempo suficiente desde o último movimento
          const timeSinceLastMove = Date.now() - scrollStartTime;
          if (timeSinceLastMove > 200) {
            // Ler layout no próximo frame para evitar reflow forçado (após Lenis escrever)
            requestAnimationFrame(() => {
              const rect = targetElement.getBoundingClientRect();
              const viewportH = window.innerHeight || document.documentElement.clientHeight;
              const isInViewport =
                rect.top >= 0 && rect.top <= viewportH * 0.3;

              if (isInViewport) {
                setTimeout(() => removeBlur(), 300);
                if (lenis && typeof lenis.off === "function" && isListening) {
                  lenis.off("scroll", checkScrollStop);
                  isListening = false;
                }
              } else {
                scrollTimeout = setTimeout(checkScrollStop, 100);
              }
            });
          } else {
            scrollTimeout = setTimeout(checkScrollStop, 100);
          }
        }
      };

      // Escutar eventos de scroll do Lenis para detectar quando para
      if (lenis && typeof lenis.on === "function") {
        lenis.on("scroll", checkScrollStop);
        isListening = true;
      }

      // Executar scroll com fallback
      try {
        // Método 1: Usando elemento DOM diretamente
        lenis.scrollTo(targetElement, {
          duration,
          easing: exponentialOut,
          offset,
        });
      } catch {
        // Método 2: Fallback usando string (seletor CSS)
        lenis.scrollTo(href, {
          duration,
          easing: exponentialOut,
          offset,
        });
      }

      // Iniciar verificação periódica do scroll
      scrollTimeout = setTimeout(checkScrollStop, 50);

      // Fallback: remover blur após a duração + buffer (caso o listener não funcione)
      setTimeout(() => {
        removeBlur();
        if (lenis && typeof lenis.off === "function" && isListening) {
          lenis.off("scroll", checkScrollStop);
          isListening = false;
        }
        clearTimeout(scrollTimeout);
      }, duration * 1000 + 500);
    } else {
      // Fallback para scroll nativo: ler layout em rAF para evitar reflow forçado
      requestAnimationFrame(() => {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition + offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      });

      // Remover blur após um tempo estimado para scroll nativo
      setTimeout(() => {
        removeBlur();
      }, 800);
    }
  };

  const commonProps = {
    onClick: handleClick,
    className,
  };

  if (as === "button") {
    return <button {...commonProps}>{children}</button>;
  }

  return (
    <a href={href} {...commonProps}>
      {children}
    </a>
  );
}
