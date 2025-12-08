import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "domain.com" },
      { protocol: "https", hostname: "domain.com" },
    ],
  },
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
