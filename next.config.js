/** @type {import('next').NextConfig} */

const SUPABASE_DOMAIN = process.env.NEXT_PUBLIC_SUPABASE_DOMAIN

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [SUPABASE_DOMAIN],
  },
}

module.exports = nextConfig
