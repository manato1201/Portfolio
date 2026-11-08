# Portfolio — 制作物まとめサイト

`manato1201` の制作物と、学習・制作のロードマップをまとめた静的サイト。
**Next.js 16.2.10 + React 19.2.4 + TypeScript(App Router)**。他のサイト(The-Algorithm-Illustrated・ColorEncyclopedia・FoundationsEncyclopedia)と同じ版・同じ作りで、**gray-matter + marked で markdown を読み込み**、**Vercel** に載せ、動画などの重いメディアは **Cloudflare(R2 + Worker)** に置く。

- 設計: [PORTFOLIO_SITE_DESIGN.md](PORTFOLIO_SITE_DESIGN.md)(画面・データ・構成図)
- 公開の手順: [DEPLOY.md](DEPLOY.md)
- UI の決めごと: [IMPROVEMENT_DESIGN_2026-10.md](IMPROVEMENT_DESIGN_2026-10.md)

## 使い方

```bash
npm install
npm run dev        # http://localhost:3000
npm run verify     # content/works の形を検査
npm run lint
npm run build      # 先に verify が自動で走る
```

## 制作物を足す・直す

`content/works/<slug>.md` を 1 つ足すだけ(コードは変えない)。

```markdown
---
title: "名前"
subtitle: "ひとこと"
category: "アプリ・Web"      # 卒業研究 / アプリ・Web / 補助ツール / 学習成果物 / ゲーム
order: 1                      # 分類の中の並び
since: "2026-08"
featured: false               # true にするとトップの「まずはここから」に出る
summary: "概要を 1〜2 文"
tech: ["Next.js 16", "Rust"]
github: "https://github.com/manato1201/<repo>"
demo: ""                      # あれば https のみ
diagram: ""                   # public/diagrams/<name>.svg の name
---
本文(markdown)
```

## 構成

```
content/works/     制作物 1 件 = 1 ファイル
public/diagrams/   構成図(SVG)。元は ProfileReadme/tools/diagrams/specs
src/app/           ページ(/ /works /works/[slug] /roadmap /about /404)
src/lib/           site.ts(設定)・works.ts(読み込み)・roadmap.ts(項目数)
scripts/           verify-works.mjs
```

## 環境変数(任意)

| 名前 | 用途 |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | 本番の URL(OGP・sitemap)。未設定なら `src/lib/site.ts` の既定値 |
| `NEXT_PUBLIC_MEDIA_BASE` | 動画を置く R2(Worker)の URL。未設定なら動画は表示しない |
