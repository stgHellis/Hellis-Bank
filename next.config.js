/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
};

module.exports = nextConfig;
