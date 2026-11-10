import type { NextConfig } from "next";

// 動画を置く R2(Worker 経由)の URL。設定されているときだけ、その origin を media-src に足す。
function mediaOrigin(): string {
  const base = process.env.NEXT_PUBLIC_MEDIA_BASE;
  if (!base) return "";
  try {
    return new URL(base).origin;
  } catch {
    return "";
  }
}

const isDev = process.env.NODE_ENV !== "production";

// Content-Security-Policy。このサイトは静的で、外部のスクリプト・画像・フォント・API を使わない。
//  - script/style の 'unsafe-inline': Next の起動用インラインスクリプトと、layout.tsx のテーマ初期化(THEME_INIT)のため。
//    静的書き出しでは nonce が使えないので、まずは origin を絞ることで守る。
//  - 'unsafe-eval' は開発サーバー(React の開発ビルド)だけ。
//  - フォントは next/font がビルド時に自前配信にするので 'self' で足りる。
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `media-src 'self' ${mediaOrigin()}`.trim(),
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // frame-ancestors と同じ意味。古いブラウザ向け。
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // 独自ドメインを足したあとにサブドメインへ広げないよう、includeSubDomains は付けない。
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

const nextConfig: NextConfig = {
  // 作品の本文は content/works/*.md をビルド時に読む(サーバーの実行時には要らない)。
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
