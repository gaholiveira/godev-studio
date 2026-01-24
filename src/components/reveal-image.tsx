"use client";

import Image from "next/image";

interface RevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function RevealImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  priority = false,
  sizes,
}: RevealImageProps) {
  // Componente simplificado - a animação de entrada é controlada pelo container pai (FadeInView)
  // Mantém apenas o wrapper com overflow-hidden para efeitos de hover se necessário
  return (
    <div className="overflow-hidden w-full h-full">
      <div className={`relative w-full h-full ${className}`}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
            sizes={sizes}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover"
            priority={priority}
            sizes={sizes}
          />
        )}
      </div>
    </div>
  );
}
