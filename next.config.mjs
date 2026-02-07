/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  basePath: '/propose',
  images: {
    unoptimized: true,
  },
  // Ensure static files from public folder are properly served
  reactStrictMode: true,
}

export default nextConfig;
