import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap lost">
      <p aria-hidden="true">
        <span className="wanderer" />
      </p>
      <h1 style={{ fontSize: "1.6rem" }}>
        お探しのページは見つかりませんでした
      </h1>
      <p className="lead" style={{ margin: "0 auto" }}>
        点がひとつ、迷子になっています。
      </p>
      <div className="links" style={{ justifyContent: "center" }}>
        <Link href="/">トップへ戻る →</Link>
      </div>
    </div>
  );
}
