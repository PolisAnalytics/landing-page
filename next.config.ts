import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    email: process.env.EMAIL,
    password: process.env.EMAIL_PASS,
  }
};

export default nextConfig;
