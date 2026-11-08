---
title: "FlowchartVisualizerExtension"
subtitle: "制御フローを可視化する IDE 拡張"
category: "補助ツール"
order: 6
since: "2026-08"
featured: false
summary: "書いたスクリプト(C# / TypeScript / Kotlin など)の制御フローを、使っている IDE の上でそのままフローチャートにする拡張。VSCode・Visual Studio・Rider に対応します。"
tech: ["TypeScript", "C# (Roslyn)", "Kotlin", "Mermaid"]
github: "https://github.com/manato1201/FlowchartVisualizerExtension"
demo: ""
diagram: ""
---
## 見どころ
- **共有の中間表現(FlowchartIR)**: 構造の抽出は IDE ごと、中間表現と描画は 3 つの IDE で完全に共有する、非対称な統合方針です。
- Mermaid の出力、SVG / PNG の書き出し、ホストのテーマへの追従、図の上のクリックで該当の行へ移動。
- 2 つの版のフロー図の差分(行のずれや空白は変更と見なさない)。
- 実際の VS Code の拡張ホスト内での結合テストを含む、テストの層を持ちます。
