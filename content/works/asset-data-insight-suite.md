---
title: "AssetDataInsightSuite"
subtitle: "アセット品質の取り込みから可視化まで"
category: "補助ツール"
order: 3
since: "2026-08"
featured: false
summary: "アセットの情報を取り込み、欠陥を検出し、傾向を分析してレポートにするパイプライン。"
tech: ["Python", "SQLite", "Flask", "GitHub Actions"]
github: "https://github.com/manato1201/AssetDataInsightSuite"
demo: ""
diagram: "devtools-pipeline"
---
## 何をするか
- 取り込み → 欠陥検出(YAML のルール)→ 傾向の分析 → レポート(HTML / Excel / NDJSON)までを、1 つのデータベース(insight.db)の上で行います。

## 見どころ
- スキャン間の差分、欠陥の解消の追跡、時系列の傾向グラフ。
- ルールを GUI で編集でき、書き込む前に検証します。
- Slack / Teams への通知と、CI での品質ゲート。
