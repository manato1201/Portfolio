---
title: "LearningFluidEngine"
subtitle: "流体エンジン(FluidKit)"
category: "学習成果物"
order: 2
since: "2026-06"
featured: false
summary: "流体シミュレーションの学習と実装。SPH・FLIP・格子法、学習型(GNN)、ブラウザで動く WASM 版までを作りました。"
tech: ["Python (NumPy)", "PyTorch", "C++ (WASM)", "Three.js", "Blender"]
github: "https://github.com/manato1201/LearningFluidEngine"
demo: ""
diagram: ""
---
## 見どころ
- 近傍探索を空間ハッシュにして、SPH を約 47 倍に、格子法を約 60〜80 倍に高速化。
- 状態の SHA-256 ハッシュで、同じ設定なら同じ結果になることを保証します。
- Neural Fluid(GNN)の学習と推論、Blender・Houdini との連携、ビューアー。
