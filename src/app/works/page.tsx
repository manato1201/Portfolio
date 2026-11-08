import type { Metadata } from "next";
import Link from "next/link";
import { getWorks, worksByCategory, worksByTech } from "@/lib/works";
import { WorkRow } from "@/components/WorkRow";

export const metadata: Metadata = {
  title: "WORK",
  description: "卒業研究・アプリ・補助ツール・学習成果物・ゲームの一覧。",
};

export default function WorksPage() {
  const all = getWorks();
  const featured = all.filter((w) => w.featured);
  const techs = worksByTech(2);
  const groups = worksByCategory();
  let n = 0;
  return (
    <div className="wrap section">
      <p className="eyebrow">Work</p>
      <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", margin: "0 0 8px" }}>制作物</h1>
      <p className="lead">行を開くと概要と技術が出ます。「詳しく見る」で構成図つきの説明へ進めます。</p>

      <nav className="entry" aria-label="入口">
        <a href="#start">まずはここから</a>
        <a href="#tech">技術から</a>
        <a href="#all">
          すべて(<span className="num">{all.length}</span>)
        </a>
      </nav>

      <section className="group" id="start" aria-labelledby="h-start">
        <h2 id="h-start">まずはここから(代表作)</h2>
        <div className="featured">
          {featured.map((w, i) => (
            <Link key={w.slug} href={`/works/${w.slug}`}>
              <span className="num idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="title">{w.title}</span>
              <p>{w.subtitle || w.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="group" id="tech" aria-labelledby="h-tech">
        <h2 id="h-tech">技術から(2 件以上で使っているもの)</h2>
        <div className="rows">
          {techs.map(({ tech, works }) => (
            <details key={tech} className="row tech-row">
              <summary>
                <span className="title">{tech}</span>
                <span className="num since">{works.length}</span>
                <span className="chev" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <ul className="tech-list">
                {works.map((w) => (
                  <li key={w.slug}>
                    <Link href={`/works/${w.slug}`}>{w.title}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <div id="all">
        {groups.map((g) => (
          <section key={g.category} className="group" aria-labelledby={`c-${g.category}`}>
            <h2 id={`c-${g.category}`}>{g.category}</h2>
            <div className="rows">
              {g.works.map((w) => (
                <WorkRow key={w.slug} work={w} index={++n} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
