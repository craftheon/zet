const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  sw: '/pwa/sw.js',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = withPWA(nextConfig)
