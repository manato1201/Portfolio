import Link from "next/link";
import { SITE } from "@/lib/site";
import { getWorks } from "@/lib/works";
import { ROADMAP_TOTAL } from "@/lib/roadmap";

export default function Home() {
  const works = getWorks();
  const featured = works.filter((w) => w.featured);
  return (
    <>
      <section className="wrap hero">
        <h1>
          動くものを作りながら、
          <br />
          低レイヤーへ潜る<span className="dot">。</span>
        </h1>
        <p className="lead">
          {SITE.name}
          。流体・レンダリング・RAG・開発支援ツールを、一人で設計して実装しています。ここには制作物と、これからの道筋をまとめています。
        </p>
        <div className="hero-meta" aria-label="件数">
          <span>
            <b className="num">{works.length}</b>制作物
          </span>
          <span>
            <b className="num">{ROADMAP_TOTAL}</b>ロードマップの項目
          </span>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="featured">
        <p className="eyebrow" id="featured">
          まずはここから
        </p>
        <div className="featured">
          {featured.map((w, i) => (
            <Link key={w.slug} href={`/works/${w.slug}`}>
              <span className="num idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="title">{w.title}</span>
              <p>{w.subtitle || w.summary}</p>
            </Link>
          ))}
        </div>
        <div className="links">
          <Link href="/works">すべての制作物({works.length}) →</Link>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="map">
        <p className="eyebrow" id="map">
          これから
        </p>
        <p className="lead">
          学習と制作の道筋(復習 → 学習 →
          応用)は、カテゴリごとの一覧と合わせて公開しています。
        </p>
        <div className="links">
          <Link href="/roadmap">ロードマップを見る →</Link>
        </div>
      </section>
    </>
  );
}
