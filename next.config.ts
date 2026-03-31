import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autoriser la qualité 90 en plus de la qualité par défaut 75
    qualities: [75, 90],
  },
};

export default nextConfig;
