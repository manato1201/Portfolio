# 公開の手順(Vercel + Cloudflare)

**まだ公開していません。** 下の順に、あなたが操作します(公開・DNS の変更は外に出る操作のため)。

## 1. GitHub にリポジトリを作る

`Web/Portfolio` は現在、`create-next-app` の初回コミットだけを持つローカルのリポジトリ(リモートなし)。

```bash
cd C:\Users\matuu\Desktop\GameDevelopment\Web\Portfolio
git add -A && git commit -m "feat: 制作物まとめサイトを作成"
gh repo create manato1201/Portfolio --public --source . --push
```

- コミットの文面は日本語・Claude の共著行なし(各リポジトリの `commit-msg` フックが除去する)。

## 2. Vercel

1. Vercel の「Add New → Project」で `manato1201/Portfolio` を選ぶ。Framework は **Next.js**(自動)。
2. 環境変数(任意): `NEXT_PUBLIC_SITE_URL` = 公開後の URL。`NEXT_PUBLIC_MEDIA_BASE` = 動画の URL(後で)。
3. Deploy。`npm run build` が通ることはローカルで確認済み。`npm run build` の前に `npm run verify` が自動で走る(`prebuild`)ので、Build Command は既定のままでよい。

## 3. Cloudflare(独自ドメインを使うとき)

- ドメインを Cloudflare に置き、Vercel の案内に従って DNS レコードを追加する。**Vercel 向けのレコードは「DNS のみ(灰色の雲)」**にする(プロキシを通すと証明書の更新が不安定になる)。
- ドメインを使わないなら、この手順は不要(`*.vercel.app` のまま)。

## 4. 動画・GIF を載せるとき(後でよい)

1. R2 にバケットを作る(例: `portfolio-media`)。公開は Worker 経由にする。
2. Range 対応の Worker は、RAGReel の `cloudflare/ragreel-gallery` の仕組みを流用する(動画の 206 / `Accept-Ranges`)。
3. 作品の markdown に `video: "<R2 上のパス>"` を書き、Vercel の環境変数 `NEXT_PUBLIC_MEDIA_BASE` に Worker の URL を設定する。
4. R2 の公開バケットは **CORS** の設定が無いと、ブラウザが読めない場合がある(WeatherGeoBridge で起きた)。`wrangler r2 bucket cors set` で設定する。

## 5. 公開前の確認

- [ ] `/works` の行が開く(キーボードの Enter / Space でも)
- [ ] UnityGameJam_B の説明を書いた(または、一覧から外した)
- [ ] 公開してよい内容か確認した(連絡先・経歴の詳細は載せていない)
- [ ] `NEXT_PUBLIC_SITE_URL` を実際の URL にした
