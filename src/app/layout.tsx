import type { Metadata, Viewport } from "next";
import { Geist, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";

// 書体は 2 つまで(見出し = Geist、本文 = Zen Kaku Gothic New)。
const geist = Geist({ subsets: ["latin"], variable: "--font-head" });
const zen = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
    locale: "ja_JP",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

// 描画の前にテーマを決める(ちらつき防止)。保存が使えなくても動く。
const THEME_INIT = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${geist.variable} ${zen.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <a className="skip" href="#main">
          本文へ移動
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="wrap footer-row">
            <span>© 2026 {SITE.name}</span>
            <a href={SITE.github} rel="noopener noreferrer" target="_blank">
              GitHub / {SITE.handle} ↗
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
