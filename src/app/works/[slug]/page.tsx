import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, getWorks, renderBody } from "@/lib/works";
import { mediaUrl } from "@/lib/site";
import { Tags, WorkLinks } from "@/components/WorkRow";

export function generateStaticParams() {
  return getWorks().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  return w ? { title: w.title, description: w.summary } : {};
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const all = getWorks();
  const i = all.findIndex((w) => w.slug === slug);
  const prev = all[i - 1];
  const next = all[i + 1];
  const video = work.video ? mediaUrl(work.video) : null;
  return (
    <article className="wrap article">
      <p className="eyebrow">
        {work.category}
        {work.since && (
          <>
            {" "}
            ・ <span className="num">{work.since}</span>
          </>
        )}
      </p>
      <h1>{work.title}</h1>
      {work.subtitle && <p className="sub">{work.subtitle}</p>}
      <p>{work.summary}</p>
      <Tags tech={work.tech} />
      <WorkLinks work={work} />

      {work.diagram && (
        <figure className="figure">
          <a
            href={`/diagrams/${work.diagram}.svg`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- 静的な SVG */}
            <img
              src={`/diagrams/${work.diagram}.svg`}
              alt={`${work.title} の構成図`}
              loading="lazy"
            />
          </a>
          <figcaption>構成図(タップで大きく開く)</figcaption>
        </figure>
      )}
      {video && (
        <figure className="figure">
          <video src={video} controls preload="none" playsInline />
          <figcaption>動作の様子</figcaption>
        </figure>
      )}

      {/* 本文は content/works の markdown(自作・信頼できる入力)をビルド時に変換したもの */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: renderBody(work) }}
      />

      <nav className="pager" aria-label="前後の制作物">
        {prev ? (
          <Link href={`/works/${prev.slug}`}>← {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/works/${next.slug}`}>{next.title} →</Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
