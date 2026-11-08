---
title: "WeatherGeoBridge"
subtitle: "天気と地図のダッシュボード"
category: "アプリ・Web"
order: 5
since: "2026-09"
featured: false
summary: "Open-Meteo の天気データを、地図・グラフ・通知で見せるアプリ。画面は Vercel、API は Cloudflare Workers で動かしています。"
tech: ["Next.js", "Cloudflare Workers (Hono)", "KV", "R2 / PMTiles", "MapLibre", "Three.js"]
github: "https://github.com/manato1201/WeatherGeoBridge"
demo: "https://weathergeobridge.vercel.app"
diagram: ""
---
## 見どころ
- 地図は自前で配信する PMTiles(R2)と MapLibre。平面と 3D を同じデータから描きます。
- Web Push による天気変化の通知を、購読者の場所ごとに判定して送ります(15 分ごとの定期実行)。
- AI が使える MCP サーバーも備え、「傘は要るか」を根拠つきで答えます。
