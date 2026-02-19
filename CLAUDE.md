# CLAUDE.md - kiuchimitsuru.com

## プロジェクト概要
静岡県議会議員 木内満（きうちみつる）の公式Webサイト。
Strikinglyからの移行プロジェクト。

## 技術スタック
- **フレームワーク**: Astro (最新版)
- **ホスティング**: Cloudflare Pages
- **スタイリング**: Tailwind CSS
- **コンテンツ**: Markdown/MDX (Content Collections)
- **言語**: 日本語サイト

## サイト構成
1. **トップページ** - ヒーロー + プロフィール + 活動報告（最新ブログ）
2. **ブログ一覧** (/blog/) - 活動報告・県政だより等
3. **ブログ個別記事** (/blog/[slug]/) - 記事詳細
4. **プロフィール** (/about/) - 経歴・実績

## デザイン方針
- モダンでクリーン、政治家サイトらしい信頼感
- レスポンシブ（モバイルファースト）
- カラー: ネイビー系（信頼感）+ アクセントカラー
- フォント: Noto Sans JP
- 画像: 富士山・富士宮のイメージを活用

## Cloudflare Pages 設定
- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist`
- Node.js: 20+

## やること（Phase 1）
1. Astroプロジェクト初期化（`npm create astro@latest`相当）
2. Tailwind CSS セットアップ
3. レイアウト作成（ヘッダー、フッター、ナビゲーション）
4. トップページ作成
5. ブログ機能（Content Collections）
6. サンプル記事3件作成（既存サイトから移行テスト）
7. プロフィールページ
8. wrangler.toml / Cloudflare Pages対応
9. README.md

## コミットルール
- 日本語コミットメッセージOK
- こまめにコミット
- 最後に `git push origin main`

## 注意
- package-lock.json を使う（npm）
- Node.js 20+ 前提
- 日本語コンテンツなのでフォント・文字組みに注意
