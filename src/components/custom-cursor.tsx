"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  // Usar useSpring diretamente com configurações de luxo
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Verificar se é dispositivo com mouse (pointer: fine)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    
    const checkPointer = () => {
      setIsPointerFine(mediaQuery.matches);
    };

    checkPointer();

    // Listener para mudanças no media query
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    if (!mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      // Evitar getComputedStyle (reflow forçado); checar apenas DOM/tag/role
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest('[role="button"]') !== null;

      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && (e.target as HTMLElement)?.tagName === "BODY") {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isPointerFine || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Cursor principal */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white/80 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
      />
      {/* Cursor outline */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovering ? 1.5 : 0.8,
          opacity: isHovering ? 0.3 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.5,
        }}
      />
    </>
  );
}
