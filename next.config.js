/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'globaltax.lifecalc.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig