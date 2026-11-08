---
title: "MagicCircleGenerator"
subtitle: "魔法陣を動的に生成"
category: "補助ツール"
order: 7
since: "2026-08"
featured: false
summary: "魔法陣を動的に生成する Web アプリ。同心円のリングを積み重ねる構造と、N 回転対称をもとに作ります。"
tech: ["TypeScript", "Vite"]
github: "https://github.com/manato1201/MagicCircleGenerator"
demo: ""
diagram: ""
---
## 設計
- 魔法陣を「同心円リングの順序つきリスト」として表し、エフェクト(グロー・ノイズ)は形のデータと分けた独立のレイヤーにしています。
- 素材の組み合わせ・自動生成・ハイブリッドの複数の生成方法を、同じデータモデルで扱います。
