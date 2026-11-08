---
title: "VisualRegressionQATool"
subtitle: "スクリーンショット差分による QA"
category: "補助ツール"
order: 4
since: "2026-08"
featured: false
summary: "画像を比べて品質を確認する QA ツール。Unity や Houdini の画面を撮り、前回との差を判定します。"
tech: ["Python (FastAPI)", "SQLite", "React", "GitHub Actions"]
github: "https://github.com/manato1201/VisualRegressionQATool"
demo: ""
diagram: "devtools-pipeline"
---
## 見どころ
- JPEG のノイズに強い比較(許容値と、小さな領域の除去)と、しきい値を試せるラボ。
- 差分ビューアは、並べて表示・スライダー・点滅・ピクセルの検査に対応します。
- 同じ条件で撮るための決定的なキャプチャ(固定時刻・動きの抑制)。
- 不安定な結果の自動検出と、CI から呼べるチェックスクリプト。
