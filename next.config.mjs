/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/neon-ops-dashboard',
  assetPrefix: '/neon-ops-dashboard/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
