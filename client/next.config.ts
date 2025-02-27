import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'static.wikia.nocookie.net',
      },
    ],
  }
};

export default nextConfig;
