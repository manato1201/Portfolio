import Link from "next/link";
import type { Work } from "@/lib/works";

export function WorkLinks({ work }: { work: Work }) {
  return (
    <div className="links">
      {work.demo && (
        <a href={work.demo} target="_blank" rel="noopener noreferrer">
          デモ ↗
        </a>
      )}
      {work.github && (
        <a href={work.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      )}
    </div>
  );
}

export function Tags({ tech }: { tech: string[] }) {
  if (tech.length === 0) return null;
  return (
    <ul className="tags" aria-label="使った技術">
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

/** 開閉できる 1 行。JavaScript なしで動く(<details>)ので、キーボードでも開閉できる。 */
export function WorkRow({ work, index }: { work: Work; index: number }) {
  return (
    <details className="row">
      <summary>
        <span className="num idx">{String(index).padStart(2, "0")}</span>
        <span className="title">
          {work.title}
          {work.subtitle && <span className="sub">{work.subtitle}</span>}
        </span>
        <span className="num since">{work.since}</span>
        <span className="chev" aria-hidden="true">
          ▾
        </span>
      </summary>
      <div className="row-body">
        <p>{work.summary}</p>
        <Tags tech={work.tech} />
        <div className="links">
          <Link href={`/works/${work.slug}`}>詳しく見る →</Link>
        </div>
        <WorkLinks work={work} />
      </div>
    </details>
  );
}
