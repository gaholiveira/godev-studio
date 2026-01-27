"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useEffect } from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function ViosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ocultar Header e Footer para experiência imersiva
  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div className={`${playfairDisplay.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
