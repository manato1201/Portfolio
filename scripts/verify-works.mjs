// content/works/*.md の形を検査する(npm run verify)。ビルド前に壊れた内容を見つける。
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "content", "works");
const CATEGORIES = ["卒業研究", "アプリ・Web", "補助ツール", "学習成果物", "ゲーム"];
let errors = 0;
const fail = (file, msg) => {
  console.error(`✗ ${file}: ${msg}`);
  errors++;
};

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
const slugs = new Set(files.map((f) => f.replace(/\.md$/, "")));
for (const f of files) {
  const { data, content } = matter(fs.readFileSync(path.join(DIR, f), "utf8"));
  for (const k of ["title", "category", "summary", "github"]) if (!data[k]) fail(f, `${k} がありません`);
  if (!CATEGORIES.includes(data.category)) fail(f, `category が不正: ${data.category}`);
  if (data.github && !/^https:\/\/github\.com\/manato1201\/[\w.-]+$/.test(data.github)) fail(f, `github の形が不正: ${data.github}`);
  if (data.demo && !/^https:\/\//.test(data.demo)) fail(f, `demo は https のみ: ${data.demo}`);
  if (data.diagram && !fs.existsSync(path.join(ROOT, "public", "diagrams", `${data.diagram}.svg`))) fail(f, `public/diagrams/${data.diagram}.svg がありません`);
  for (const m of content.matchAll(/\]\(\/works\/([\w-]+)\)/g)) if (!slugs.has(m[1])) fail(f, `本文のリンク先 /works/${m[1]} がありません`);
  if (/<script/i.test(content)) fail(f, "本文に <script> があります");
}
console.log(`${files.length} 件を検査: ${errors === 0 ? "問題なし" : `${errors} 件の問題`}`);
process.exit(errors ? 1 : 0);
