// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/kirill',
  assetPrefix: '/callbackcat.github.io/kirill/',
  images: {
    loader: 'default',
    path: '/callbackcat.github.io/kirill/',
  },
  distDir: 'dist',
};

module.exports = nextConfig;
