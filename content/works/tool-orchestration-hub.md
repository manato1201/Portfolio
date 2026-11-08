---
title: "ToolOrchestrationHub"
subtitle: "ツール群の中継と監視"
category: "補助ツール"
order: 5
since: "2026-08"
featured: false
summary: "これまで作ったツールの状態を集めて見せる、監視のダッシュボード。"
tech: ["Python", "SQLite", "Windows 通知"]
github: "https://github.com/manato1201/ToolOrchestrationHub"
demo: ""
diagram: "devtools-pipeline"
---
## 見どころ
- ツールの登録、死活監視、アラートの集約、通知。
- 過去の時刻を選ぶと、その時点の状態を再現するアラート履歴。
- ローカルの API を守るため、Host と Origin を検査します。
