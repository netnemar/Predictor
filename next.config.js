/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  // Если сайт будет размещен не в корне домена, укажите basePath
  // basePath: '/subdirectory'
}

module.exports = nextConfig 