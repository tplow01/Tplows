import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: '/:path*.mov',
        headers: [{ key: 'Content-Type', value: 'video/quicktime' }],
      },
      {
        source: '/:path*.MOV',
        headers: [{ key: 'Content-Type', value: 'video/quicktime' }],
      },
    ]
  },
};

export default nextConfig;
