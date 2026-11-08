// サイト全体の設定。公開する範囲(名前・リンク)は本人が決める。連絡先は載せない。
export const SITE = {
  name: "松浦真聖",
  handle: "manato1201",
  title: "松浦真聖 — 制作物",
  description:
    "動くものを作りながら、低レイヤーへ潜る。流体・レンダリング・RAG・開発支援ツールの制作物をまとめたポートフォリオ。",
  github: "https://github.com/manato1201",
  // 本番の URL(OGP と sitemap に使う)。Vercel の環境変数 NEXT_PUBLIC_SITE_URL で上書きする。
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-manato1201.vercel.app",
  // 動画・GIF を置く R2(+ Range 配信の Worker)の URL。未設定なら動画は表示しない。
  mediaBase: process.env.NEXT_PUBLIC_MEDIA_BASE ?? "",
} as const;

export const NAV = [
  { href: "/", label: "HOME" },
  { href: "/works", label: "WORK" },
  { href: "/roadmap", label: "ROADMAP" },
  { href: "/about", label: "ABOUT" },
] as const;

/** 表示順(分類)。content/works の category はこの中のどれか。 */
export const CATEGORIES = ["卒業研究", "アプリ・Web", "補助ツール", "学習成果物", "ゲーム"] as const;
export type Category = (typeof CATEGORIES)[number];

export function mediaUrl(path: string): string | null {
  return SITE.mediaBase ? `${SITE.mediaBase.replace(/\/$/, "")}/${path.replace(/^\//, "")}` : null;
}
