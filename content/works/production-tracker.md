---
title: "ProductionTracker"
subtitle: "制作進行ボード"
category: "補助ツール"
order: 9
since: "2026-10"
featured: false
summary: "アセット・タスク・版・ノートを管理する小さな制作進行ボード。ShotGrid(Flow Production Tracking)のデータモデルを理解しながら、Web の技術を一度に実践するための学習用プロジェクトです。"
tech: ["Django 5.2", "React 19", "TypeScript", "MUI 7", "PostgreSQL", "Docker"]
github: "https://github.com/manato1201/ProductionTracker"
demo: ""
diagram: ""
---
## 構成
- バックエンドは Django 5.2 LTS + Django REST framework、フロントは Vite + React 19 + MUI 7 + Sass(デザイントークン)+ dnd-kit。
- 監視は Sentry と `/healthz`、JSON ログ。テストは pytest。
