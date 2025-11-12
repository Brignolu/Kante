/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Kante' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Kante/' : '',
}

module.exports = nextConfig
