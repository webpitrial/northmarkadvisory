import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' completely
  // Remove images.unoptimized completely
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;