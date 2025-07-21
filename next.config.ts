/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
  reactStrictMode: true,
  images: {
    // The 'domains' property is deprecated. It is recommended to use 'remotePatterns' instead for better security.
    // See: https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
    // TODO: Replace 'your-external-domain.com' with the actual hostnames of your image sources.
    domains: ['your-external-domain.com'],
  },
};

module.exports = nextConfig;
