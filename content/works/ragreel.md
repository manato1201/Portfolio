---
title: "RAGReel"
subtitle: "RAG の回答からチュートリアル動画を作る"
category: "学習成果物"
order: 1
since: "2026-07"
featured: true
summary: "RAG で作ったチュートリアルを、台本・ナレーション・動画にして公開する動画工場。Qt/QML と FFmpeg で、ヘッドレスに描画します。"
tech: ["C++", "Qt / QML", "FFmpeg", "VP9 / Opus", "Cloudflare Workers", "R2"]
github: "https://github.com/manato1201/RAGReel"
demo: ""
diagram: ""
---
## 何をするか
- 手順ごとのスクリーンショットと台本から、章立てのチュートリアル動画(WebM)を作ります。
- ナレーションは VOICEVOX・クラウドの音声合成・Windows の SAPI を切り替えて使い、字幕(VTT)も生成します。

## 見どころ
- **描画**: QML のシーンを、画面を出さずに FFmpeg へ流して動画にします。
- **画面時間の配分**: ノードエディター 70% / ビューポート 20% / その他 10% を目標に、スライドの長さを割り振ります。
- **ギャラリー**: Cloudflare の Worker と R2 に動画を置き、HTTP Range で配信して、章のタイムラインからシークできます。
- **ランチャー**: 設定・生成・履歴・キューを持つデスクトップアプリ(RAGReel.exe)。
