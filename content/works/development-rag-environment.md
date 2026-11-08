---
title: "DevelopmentRAGEnvironment"
subtitle: "RAG を用いた動的チュートリアル生成"
category: "卒業研究"
order: 1
since: "2026-06"
featured: true
summary: "Houdini の公式ドキュメントを検索して根拠つきのチュートリアルを自動で作る、卒業研究のシステム。Houdini のパネルと Cloudflare 上の RAG で動きます。"
tech: ["Python", "PySide6", "Cloudflare Workers", "D1", "Vectorize", "Houdini 21/22"]
github: "https://github.com/manato1201/DevelopmentRAGEnvironment"
demo: ""
diagram: "thesis-rag"
---
## 何をするか
- Houdini の Python パネルから質問すると、公式ドキュメントを検索し、出典つきでチュートリアルを生成します。
- ノードの作成・パラメータの設定といった操作のたびにスクリーンショットを撮り、手順ごとの素材として残します。
- 生成したチュートリアルは [RAGReel](/works/ragreel) が動画にします。

## 見どころ
- **検索**: Cloudflare Worker 上で、D1 の全文検索(FTS5)と Vectorize のベクトル検索を組み合わせたハイブリッド検索。
- **サーバー側の守り**: API キーごとの認証、トークン予算、レート制限をサーバーで強制します。
- **品質**: 100 点満点のレビュー基準を持つ品質ゲートと、基礎 → 応用 → 発展の難易度別の連続生成。
- **評価**: パイロットテスト用に、タスクの所要時間やアンケートを計測する仕組みを備えます。
