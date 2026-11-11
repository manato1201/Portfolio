// サイトのマーク(「P」+ 差し色の点)。icon.svg と同じ図形を、ImageResponse(apple-icon・PWA アイコン)でも使う。
// 色は globals.css の決めごと(暗い地 #141414・文字 #f1f1ec・差し色 #fb923c / 明るい地 #fafaf8・差し色 #b43a0a)に合わせる。

export const MARK_DARK = { tile: "#141414", ink: "#f1f1ec", dot: "#fb923c" } as const;

/**
 * 32x32 の格子で描いたマーク。`rx` はタイルの角丸(格子の単位)。
 * `inset` は、全面を塗るアイコン(iOS・maskable)で、マークを内側へ縮める割合(0〜0.3)。
 */
export function MarkSvg({
  size,
  rx = 7,
  inset = 0,
  colors = MARK_DARK,
}: {
  size: number;
  rx?: number;
  inset?: number;
  colors?: { tile: string; ink: string; dot: string };
}) {
  const s = 1 - inset * 2;
  const t = 16 * (1 - s); // 中心 (16,16) を保ったまま縮める
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx={rx} fill={colors.tile} />
      <g transform={`translate(${t} ${t}) scale(${s})`}>
        <circle cx="22" cy="22" r="4" fill={colors.dot} />
        <path
          d="M8 20V9h5.5a3.5 3.5 0 0 1 0 7H8"
          fill="none"
          stroke={colors.ink}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
