import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { CATEGORIES, type Category } from "./site";

export interface Work {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  order: number;
  since: string; // "2026-06"
  featured: boolean;
  summary: string;
  tech: string[];
  github: string;
  demo: string;
  diagram: string; // public/diagrams/<name>.svg
  video: string; // R2 上のパス(NEXT_PUBLIC_MEDIA_BASE からの相対)
  body: string; // markdown
}

const DIR = path.join(process.cwd(), "content", "works");

function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function parse(file: string): Work {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(
    fs.readFileSync(path.join(DIR, file), "utf8"),
  );
  const category = str(data.category) as Category;
  if (!CATEGORIES.includes(category)) {
    throw new Error(
      `${file}: category "${category}" は ${CATEGORIES.join(" / ")} のどれかにしてください`,
    );
  }
  return {
    slug,
    title: str(data.title) || slug,
    subtitle: str(data.subtitle),
    category,
    order: typeof data.order === "number" ? data.order : 99,
    since: str(data.since),
    featured: data.featured === true,
    summary: str(data.summary),
    tech: Array.isArray(data.tech) ? data.tech.map(String) : [],
    github: str(data.github),
    demo: str(data.demo),
    diagram: str(data.diagram),
    video: str(data.video),
    body: content,
  };
}

let cache: Work[] | null = null;

/** 分類の順 → order の順 */
export function getWorks(): Work[] {
  if (!cache) {
    cache = fs
      .readdirSync(DIR)
      .filter((f) => f.endsWith(".md"))
      .map(parse)
      .sort(
        (a, b) =>
          CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category) ||
          a.order - b.order ||
          a.slug.localeCompare(b.slug),
      );
  }
  return cache;
}

export function getWork(slug: string): Work | undefined {
  return getWorks().find((w) => w.slug === slug);
}

export function renderBody(work: Work): string {
  return marked.parse(work.body, { async: false }) as string;
}

/** 技術ごとの入口。`min` 件以上の作品で使われている技術だけを、件数の多い順に返す。 */
export function worksByTech(min = 2): { tech: string; works: Work[] }[] {
  const map = new Map<string, Work[]>();
  for (const w of getWorks()) {
    for (const t of new Set(w.tech)) {
      map.set(t, [...(map.get(t) ?? []), w]);
    }
  }
  return [...map.entries()]
    .filter(([, works]) => works.length >= min)
    .map(([tech, works]) => ({ tech, works }))
    .sort(
      (a, b) => b.works.length - a.works.length || a.tech.localeCompare(b.tech),
    );
}

export function worksByCategory(): { category: Category; works: Work[] }[] {
  const all = getWorks();
  return CATEGORIES.map((category) => ({
    category,
    works: all.filter((w) => w.category === category),
  })).filter((g) => g.works.length > 0);
}
