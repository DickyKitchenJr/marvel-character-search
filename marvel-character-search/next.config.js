/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
        port: '',
      },
    ],
  },
};
// TODO: Image not loading, see error when calling character on page; research and resolve this issue
module.exports = nextConfig
