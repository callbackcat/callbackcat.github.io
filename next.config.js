// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/kirill',
  assetPrefix: '/kirill/',
  images: {
    loader: 'default',
    path: '/kirill/',
  },
  distDir: 'dist',
};

module.exports = nextConfig;
