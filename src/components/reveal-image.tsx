"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="overflow-hidden w-full h-full">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {
            clipPath: "inset(100% 0% 0% 0%)",
          },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="relative w-full h-full"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {
              scale: 1.1,
            },
            visible: {
              scale: 1,
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className={`relative w-full h-full ${className}`}
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
}
