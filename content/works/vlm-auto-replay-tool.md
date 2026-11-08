---
title: "VLMAutoReplayTool"
subtitle: "VLM でゲームを自動プレイ"
category: "学習成果物"
order: 4
since: "2026-08"
featured: false
summary: "画面を見て操作を決めるエージェントで、ゲームを自動でプレイする仕組み。"
tech: ["Python (FastAPI)", "SQLite", "WebSocket"]
github: "https://github.com/manato1201/VLMAutoReplayTool"
demo: ""
diagram: ""
---
## 見どころ
- 基盤モデルと実行モデルを分け、スキル・API・知識(RAG)・ウォッチドッグの層で組みました。
- 停滞したときにウォッチドッグが介入し、TODO を作り直します。
- 実行の様子を見る監視 HUD(WebSocket)と、実行履歴の永続化。
