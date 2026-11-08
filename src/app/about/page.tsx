import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "ABOUT", description: "このサイトと制作の軸について。" };

export default function AboutPage() {
  return (
    <div className="wrap article">
      <p className="eyebrow">About</p>
      <h1>{SITE.name}</h1>
      <p className="sub">{SITE.handle}</p>
      <div className="prose">
        <h2>制作の軸</h2>
        <p>
          「動くものを作りながら低レイヤーへ潜る」。高校の組込み(Raspberry Pi)とアプリ(C#)から、大学のゲームのフルスクラッチ、3D 数学とハードウェア、自作のソルバーとレンダラー、機械学習へと、手を動かして広げてきました。
        </p>
        <h2>他と重ならない資産</h2>
        <ul>
          <li>自作の流体エンジン一式(SPH / FLIP / GNN / WASM)</li>
          <li>LLM / RAG / MCP の基盤(卒業研究)</li>
          <li>Steam でのリリース実績</li>
          <li>高校由来の組込み・ハードウェアの知識</li>
          <li>内製の開発支援ツール群(QA 自動化・アセット可視化・ツール監視)</li>
        </ul>
        <h2>テクニカルアーティストとしてのスキル</h2>
        <p>
          CEDEC 2021「テクニカルアーティスト スキルレーダーチャート」の 21 項目で自己評価しました(0〜5)。強いのはプログラミング・モーション(シミュレーション)・パイプライン、これから伸ばすのはセットアップとモデリングです。
        </p>
        <figure className="figure">
          <a href="/diagrams/ta-skill-radar.svg" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element -- 静的な SVG */}
            <img
              src="/diagrams/ta-skill-radar.svg"
              alt="Technical Artist Skill Radar。プログラミング4.0、モーション3.8、パイプライン3.6、2D3.2、VFX3.0、描画2.8、モデリング2.3、セットアップ1.5(いずれもカテゴリ平均、0〜5)"
              loading="lazy"
            />
          </a>
          <figcaption>21 項目の根拠は GitHub プロフィールの README にあります。図はタップで大きく開けます。</figcaption>
        </figure>
        <h2>このサイトについて</h2>
        <p>
          制作物は GitHub のリポジトリが一次の情報です。ここでは、構成図と短い説明で全体を見渡せるようにしています。
        </p>
        <p>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer">
            GitHub / {SITE.handle} ↗
          </a>
        </p>
      </div>
    </div>
  );
}
