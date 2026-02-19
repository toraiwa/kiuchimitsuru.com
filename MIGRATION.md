# Strikingly → Cloudflare Pages 移行ガイド

## 現状（2026-02-20時点）

### ✅ 完了
- [x] リポジトリ作成 (`toraiwa/kiuchimitsuru.com`)
- [x] Astro + Tailwind CSS プロジェクト初期化
- [x] レイアウト（ヘッダー/フッター/モバイルメニュー）
- [x] トップページ（ヒーロー/ごあいさつ/重点政策/最新記事/CTA）
- [x] プロフィールページ (`/about/`)
- [x] ブログ機能（Content Collections + 一覧/個別ページ）
- [x] サンプル記事3件
- [x] OGP / Twitter Card メタタグ
- [x] Noto Sans JP フォント
- [x] wrangler.toml（Cloudflare Pages設定）
- [x] ビルド確認済み（`dist/` に出力済み）

### 📋 残タスク
- [ ] **Cloudflare Pagesにデプロイ** → Cloudflareダッシュボードでプロジェクト作成 → GitHubリポ接続
- [ ] **デザイン確認・調整** → `npm run dev` でローカル確認 → 先生フィードバック
- [ ] **既存40記事のMarkdown移行** → Strikinglyから本文・画像を抽出
- [ ] **画像の移行** → Strikingly CDNの画像をダウンロード → `public/images/` に配置
- [ ] **DNS切り替え** → ネームサーバーをCloudflareに変更（MX/SPF/TXTレコード維持）
- [ ] **本番切り替え** → kiuchimitsuru.com をCloudflare Pagesに向ける
- [ ] **Strikingly解約**

## 再開手順

```bash
# 1. クローン
git clone https://github.com/toraiwa/kiuchimitsuru.com.git
cd kiuchimitsuru.com

# 2. 依存関係インストール
npm install

# 3. 開発サーバー起動
npm run dev
# → http://localhost:4321 で確認

# 4. ビルド
npm run build

# 5. プレビュー
npm run preview
```

## 現行サイトの情報

- **URL**: https://www.kiuchimitsuru.com/
- **ホスト**: Strikingly
- **DNS**: name-services.com（Strikinglyのネームサーバー）
- **IP**: 54.183.102.22
- **www CNAME**: www.kiuchimitsuru.com.s.strikinglydns.com
- **MX**: smtp.google.com（Google Workspace）
- **SPF**: `v=spf1 include:_spf.google.com ~all`
- **ブログ記事**: 約40件（2017年12月〜2021年3月）
- **最終更新**: 2021年3月

## 記事移行のヒント

Strikinglyのブログデータは初回ロード時のJSON（`$S.serverData`）に全記事が含まれている。
`curl -sL https://www.kiuchimitsuru.com/ | python3 -c "import sys,json; ..."` で抽出可能。

各記事の構造:
- `title`: 記事タイトル
- `longBlurb`: 本文（HTMLエンコード済み）
- `publishedAt`: 公開日時
- `publicUrl`: 公開URL
- `icon.storageKey`: ヘッダー画像のキー

画像URL: `https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/{storageKey}`
