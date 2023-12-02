/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "openweathermap.org",
        protocol: "http",
      },
    ],
  },
};
