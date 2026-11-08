// ロードマップのカテゴリ別の項目数。元: ProfileReadme/ROADMAP.md(tools/build_roadmap.py が元の README から数えたもの)。
// 内容を更新したら、ここの数も合わせる。
export const ROADMAP: { no: number; title: string; done: number; review: number; next: number; adv: number }[] = [
  { no: 1, title: "基本 / 開発環境", done: 10, review: 1, next: 1, adv: 1 },
  { no: 2, title: "プログラミング言語", done: 15, review: 3, next: 3, adv: 1 },
  { no: 3, title: "ハードウェア基礎", done: 6, review: 2, next: 2, adv: 2 },
  { no: 4, title: "ゲーム制作", done: 14, review: 1, next: 1, adv: 3 },
  { no: 5, title: "CG 数学・物理・レンダリング", done: 9, review: 2, next: 2, adv: 1 },
  { no: 6, title: "シミュレーション・流体", done: 8, review: 0, next: 2, adv: 3 },
  { no: 7, title: "DCC ツール・アート", done: 6, review: 1, next: 2, adv: 2 },
  { no: 8, title: "AI・LLM・研究基盤", done: 8, review: 0, next: 1, adv: 2 },
  { no: 9, title: "ネットワーク・Web", done: 8, review: 1, next: 1, adv: 1 },
  { no: 10, title: "企画・チーム制作", done: 12, review: 1, next: 0, adv: 1 },
  { no: 11, title: "開発支援ツール・パイプライン基盤", done: 8, review: 0, next: 2, adv: 1 },
];

export const ROADMAP_TOTAL = ROADMAP.reduce((s, r) => s + r.done + r.review + r.next + r.adv, 0);
