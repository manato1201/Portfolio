---
title: "AdvancedVAT"
subtitle: "音声解析に反応する VAT の表現"
category: "ゲーム"
order: 3
since: "2025-09"
featured: false
summary: "頂点アニメーションテクスチャ(VAT)を、リアルタイムの音声解析に反応させた作品。C++ と HLSL で、約 2 か月の個人制作です。"
tech: ["C++", "HLSL", "WinMM"]
github: "https://github.com/manato1201/AdvancedVAT"
demo: ""
diagram: ""
---
## 見どころ
- WinMM のコールバックで PCM から RMS(音量)とゼロ交差数(ピッチの推定)を計算し、`std::atomic` に書き込みます。描画のループはロックなしで最新値を読みます。
- シェーダーの一覧、クラス・モジュールの設計、GoF パターンの対応を、技術設計書にまとめています。
