require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TODOISTAPI: process.env.TODOISTAPI,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
