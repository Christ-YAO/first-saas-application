/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "avatar.githubusercontent.com"],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //       path: false,
  //       net: false,
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfig;
