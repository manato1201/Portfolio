---
title: "LearningQuickDraw"
subtitle: "ミニレンダラーと DCC 連携"
category: "学習成果物"
order: 3
since: "2026-06"
featured: false
summary: "QuickDraw の学習から、CPU / GPU のミニレンダラーと、Blender・Houdini・After Effects 向けのツールを作りました。"
tech: ["C++", "SDL2", "OpenGL", "AVX2", "Python"]
github: "https://github.com/manato1201/LearningQuickDraw"
demo: ""
diagram: ""
---
## 見どころ
- DDA・スラブ・Z バッファのレンダラーを、固定小数点・バックフェースのカリング・AVX2 で高速化。
- 共通の quickdraw_core に、.vol の読み込み・ダーティ矩形・LOD をまとめました。
- C++ の GoogleTest と、Python のベンチマークの基準値。
