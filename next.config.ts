import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 作品の本文は content/works/*.md をビルド時に読む(サーバーの実行時には要らない)。
  poweredByHeader: false,
};

export default nextConfig;
