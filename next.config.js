/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    // This will make Next.js use the regular eval in development
    config.optimization.minimize = false;
    return config;
  },
}

module.exports = nextConfig 