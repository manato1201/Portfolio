---
title: "LoreDesktopAndWebSystem"
subtitle: "Lore の GUI(Web + Qt)と Rust 製 API"
category: "アプリ・Web"
order: 1
since: "2026-07"
featured: true
summary: "大きなバイナリを扱うバージョン管理 Lore のために、Web(Next.js)とデスクトップ(Qt)の画面と、共通の Rust 製 API を作ったシステム。"
tech: ["Rust (Axum)", "Next.js 16", "Qt6 / QML", "SQLite", "Docker"]
github: "https://github.com/manato1201/LoreDesktopAndWebSystem"
demo: "https://lore-desktop-and-web-system.vercel.app"
diagram: "lore-ecosystem"
---
## 何をするか
- ブラウザ(LoreHub Web)と、デスクトップの LoreForge Client・Server Admin の 3 つが、同じ Rust 製の API を使います。
- ファイルのロック、コミット、ブランチ、プルリクエストの差分レビュー、アクセス制御を扱えます。

## 見どころ
- **自前の VCS バックエンド**: SHA-256 によるコンテンツアドレスの保存、ブランチごとのツリー、行単位の差分。
- **認証と認可**: 二重トークン(アクセス + リフレッシュ)のセッション、ロールとパスごとの ACL。
- **デザイントークンの共有**: 1 つの定義から Web の CSS と Qt の Theme.qml を生成し、CI で同期を検査します。
- **配布**: Docker Compose、Windows のインストーラー(NSIS / Inno Setup)、Cloudflare Containers の試作。
