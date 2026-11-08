---
title: "DocsPipeline"
subtitle: "docstring から API 文書を作り、Confluence へ"
category: "補助ツール"
order: 8
since: "2026-10"
featured: false
summary: "コードの docstring から API 文書を自動生成し、構成図を加えて、Confluence に公開できるようにする共通設定と CLI。"
tech: ["Python", "Sphinx", "Doxygen", "Mermaid", "diagrams.net"]
github: "https://github.com/manato1201/DocsPipeline"
demo: ""
diagram: ""
---
## 見どころ
- Python は Sphinx(autodoc + napoleon)、既存の Markdown は MyST、C++ は Doxygen の XML を Breathe で取り込みます。
- 図は Mermaid をビルド時に SVG にし、diagrams.net の図も扱います。
- 公開は Confluence の専用の親ページの下だけ。既定では公開しません。
- Houdini の `hou` を使うコードは、スタブで文書化とテストを行います。
