import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    // Reduz tamanho dos bundles: só os módulos usados (lucide, framer-motion)
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
