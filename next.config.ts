import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is needed for Docker containers, but conflicts with Vercel's native file tracer
  output: process.env.VERCEL ? undefined : "standalone",
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
