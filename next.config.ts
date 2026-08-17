import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["192.168.0.171"],
  },
};

export default nextConfig;
