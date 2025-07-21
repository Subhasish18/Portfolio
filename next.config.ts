/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },

  // This will disable ESLint during the build process
  eslint: {
    ignoreDuringBuilds: true,
  },

  // This will disable TypeScript error checking during the build process
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
