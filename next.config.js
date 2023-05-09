/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
}

module.exports = nextConfig
