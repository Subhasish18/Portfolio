/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
  reactStrictMode: true,
  images: {
    // The 'domains' property is deprecated. It is recommended to use 'remotePatterns' instead for better security.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

module.exports = nextConfig;
