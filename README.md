# kiuchimitsuru.com

静岡県議会議員 木内満（きうちみつる）の公式Webサイトです。

## 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **コンテンツ**: Markdown (Astro Content Collections)
- **ホスティング**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## サイト構成

- `/` - トップページ
- `/about/` - プロフィール
- `/blog/` - 活動報告一覧
- `/blog/[slug]/` - 活動報告個別記事

## ブログ記事の追加

`src/content/blog/` ディレクトリにMarkdownファイルを追加してください。

```markdown
---
title: "記事タイトル"
description: "記事の説明"
pubDate: 2025-01-01
category: "活動報告"
tags: ["タグ1", "タグ2"]
---

記事本文...
```

## デプロイ

Cloudflare Pagesで自動デプロイされます。

- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist`
- Node.js: 20+
