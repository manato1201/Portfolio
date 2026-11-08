import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// OGP 画像。日本語フォントを同梱しないため、英数字だけで構成する(罫線 1 本 + 差し色の点 1 つ)。
export const alt = `${SITE.handle} — Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fafaf8",
        color: "#141414",
        padding: 80,
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 6, color: "#5c5c57" }}>
        PORTFOLIO
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 120, fontWeight: 700 }}>
          {SITE.handle}
          <span style={{ color: "#b43a0a" }}>.</span>
        </div>
        <div
          style={{
            marginTop: 32,
            borderTop: "1px solid #dcdcd6",
            paddingTop: 24,
            fontSize: 32,
            color: "#5c5c57",
          }}
        >
          Fluid / Rendering / RAG / Dev tools
        </div>
      </div>
    </div>,
    size,
  );
}
