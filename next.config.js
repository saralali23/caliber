/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "res.cloudinary.com", "tecdn.b-cdn.net"],
  },
};

module.exports = nextConfig;
