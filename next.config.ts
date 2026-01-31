import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Performance: compressão e otimização de imagens
  compress: true,
  poweredByHeader: false,
  // Imagens: formatos modernos e sizes para LCP
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
