import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    resend_key: process.env.RESEND,
    email: process.env.EMAIL
  }
};

export default nextConfig;
