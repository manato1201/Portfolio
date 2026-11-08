---
title: "piece-peace"
subtitle: "ゲーム依存症対策のシリアスゲーム"
category: "ゲーム"
order: 1
since: "2025-04"
featured: false
summary: "授業の課題として、株式会社 Game for It から出されたお題「ゲーム依存症対策のシリアスゲーム」を、6 名のチームで約 9 か月かけて作りました。私は framework 層を担当しました。"
tech: ["C#", "Unity", "Addressables", "デザインパターン"]
github: "https://github.com/manato1201/piece-peace"
demo: ""
diagram: ""
---
## 体制と担当
- チーム制作(6 名)。manato1201 は framework 層、パズルゲームのロジック層と UI 層は別のメンバーが担当しました。
- 依頼元: 株式会社 Game for It(授業「デジタルコンテンツ制作応用」)。

## 見どころ
- framework 層・manager 層・UI 層・ゲームロジック層に分けた構成と、GoF のデザインパターン(23 種)への対応表。
- Addressables による構成。既知の問題・要改善点も技術設計書に書いています。
