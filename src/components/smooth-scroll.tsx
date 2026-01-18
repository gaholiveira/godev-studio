"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenisInstance } from "@/components/smooth-scroll-link";

export function SmoothScroll() {
  useEffect(() => {
    // Adicionar classe lenis ao html
    const html = document.documentElement;
    html.classList.add("lenis", "lenis-smooth");

    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      // Desabilitar interceptação automática de links para controlar manualmente
      syncTouch: false,
    });

    // Registrar a instância globalmente para uso no SmoothScrollLink
    setLenisInstance(lenis);

    // Função de animação
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      setLenisInstance(null);
      html.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return null;
}
