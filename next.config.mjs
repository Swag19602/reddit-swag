/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  loader: "file-loader",
  options: {
    name: "[name].[ext]",
  },
};

export default nextConfig;
