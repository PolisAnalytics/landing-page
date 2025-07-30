import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    resend_key: process.env.RESEND,
    email: process.env.EMAIL,
    password: process.env.EMAIL_PASS,
    base: "http://localhost:300"
  }
};

export default nextConfig;
