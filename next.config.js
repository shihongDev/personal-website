/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 has app directory enabled by default
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 