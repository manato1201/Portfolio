---
title: "JunkShooting"
subtitle: "音声認識つきのシューティング"
category: "ゲーム"
order: 2
since: "2025-07"
featured: false
summary: "音声認識を取り入れたシューティングゲーム。C++ と Python で、約 1 か月(90 時間)かけた個人制作です。"
tech: ["C++", "Python", "Google Speech API"]
github: "https://github.com/manato1201/JunkShooting"
demo: ""
diagram: ""
---
## 見どころ
- Python の Google Speech API を C++ から外部プロセスとして起動し、`std::thread::detach()` で 60FPS のメインループを止めずに音声認識を行います。
- 技術設計書に、ディレクトリ構成・データ構造・外部ライブラリ・GoF パターンの対応・既知の問題をまとめています。
