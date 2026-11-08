import type { Metadata } from "next";
import { ROADMAP, ROADMAP_TOTAL } from "@/lib/roadmap";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "ROADMAP",
  description: "学習・制作の全体と、これからの道筋(復習 → 学習 → 応用)。",
};

export default function RoadmapPage() {
  const sum = (k: "done" | "review" | "next" | "adv") => ROADMAP.reduce((s, r) => s + r[k], 0);
  return (
    <div className="wrap section">
      <p className="eyebrow">Roadmap</p>
      <h1 style={{ fontSize: "clamp(1.8rem,5vw,2.8rem)", margin: "0 0 8px" }}>学習・制作のロードマップ</h1>
      <p className="lead">
        11 カテゴリ・{ROADMAP_TOTAL} 項目。🟢 習得済み(実績あり)／🟡 復習(言語化が必要)／🔵 今後学ぶ／🟣 応用・発展(掛け合わせ)。
      </p>

      <figure className="figure">
        <a href="/diagrams/roadmap.svg" target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element -- 静的な SVG */}
          <img src="/diagrams/roadmap.svg" alt="今後の道筋: 復習・言語化、次に学ぶ、応用・発展の 3 段と、制作ロードマップ" />
        </a>
        <figcaption>今後の道筋(タップで大きく開く)</figcaption>
      </figure>

      <div className="table-wrap">
        <table className="counts">
          <caption className="eyebrow" style={{ textAlign: "left" }}>
            カテゴリ別の項目数
          </caption>
          <thead>
            <tr>
              <th scope="col">カテゴリ</th>
              <th scope="col">🟢</th>
              <th scope="col">🟡</th>
              <th scope="col">🔵</th>
              <th scope="col">🟣</th>
            </tr>
          </thead>
          <tbody>
            {ROADMAP.map((r) => (
              <tr key={r.no}>
                <td>
                  <span className="num">{r.no}</span> {r.title}
                </td>
                {[r.done, r.review, r.next, r.adv].map((v, i) => (
                  <td key={i} className="num">
                    {v || "–"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>合計</td>
              <td className="num">{sum("done")}</td>
              <td className="num">{sum("review")}</td>
              <td className="num">{sum("next")}</td>
              <td className="num">{sum("adv")}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="links">
        <a href={`${SITE.github}/${SITE.handle}/blob/main/ROADMAP.md`} target="_blank" rel="noopener noreferrer">
          各項目の中身(GitHub の ROADMAP.md)↗
        </a>
      </div>
    </div>
  );
}
