import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-scroll-area', '@radix-ui/react-separator', '@radix-ui/react-slot', '@radix-ui/react-tooltip'],
  },
  
  // Enable prefetching for faster navigation
  reactStrictMode: true,

  // Turbopack config (Next.js 16+ uses Turbopack by default)
  turbopack: {},

  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
      {
        // ⚠️ NOT `immutable`, AND THAT IS A CORRECTION.
        //
        // These are EDITORIAL assets on STABLE paths — /images/logos/logo_only.png
        // is the same URL whatever it contains, unlike Next's content-hashed
        // /_next/static/* files. Serving them `max-age=31536000, immutable` told
        // every browser and the CDN to never revalidate for a YEAR, so replacing
        // the file changed nothing for anyone who had already loaded the site.
        // Caught replacing the study-app logo with the Events one: the deploy
        // landed, a cache-busted URL returned the new mark, and the plain URL
        // still served the old graduation cap with `age: 5680`.
        //
        // The same trap is recorded against /_next/image in the events repo,
        // where `immutable` pinned replaced event posters for a year.
        //
        // An hour of caching with a day of stale-while-revalidate keeps these
        // effectively free to serve while letting a replacement actually reach
        // people. If an asset genuinely never changes, give it a content-hashed
        // FILENAME — that is what `immutable` is for.
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
