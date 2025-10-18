/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
  compress: true,
  optimizeFonts: true,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
