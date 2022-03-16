/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_APP_PHONE: process.env.NEXT_APP_PHONE,
    },
};

module.exports = nextConfig;
