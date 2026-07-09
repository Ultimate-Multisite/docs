---
title: サイト仕様スキル
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# サイト仕様スキル {#site-specification-skill}

**サイト仕様スキル**は、サイトの目標、ターゲットユーザー、ブランドのアイデンティティを体系的に把握するためのアプローチです。この情報は**site_brief**メモリに保存され、エージェントがセッションをまたいで参照することで、一貫性があり、コンテキストを理解したサポートを提供します。

## サイト仕様とは？ {#what-is-site-specification}

サイト仕様とは、以下の要素を文書化するプロセスです。

- **サイトの目的**: サイトが何を行い、なぜ存在しているのか
- **ターゲットユーザー**: 誰がサイトを訪れ、何に困っているのか
- **ブランドアイデンティティ**: 色、トーン、ビジュアルスタイル
- **ビジネス目標**: サイトにとっての「成功」とは何か
- **コンテンツ構造**: サイトがどのように構成されているか

この仕様が**site_brief**となり、エージェントがサイトのコンテキストを理解するために使用する永続的なメモリとなります。

## サイト仕様を使うメリット {#why-use-site-specification}

### セッションをまたいだ一貫性 {#consistency-across-sessions}

site_briefがない場合、新しいセッションを始めるたびに、サイトの目的を再説明する必要があります。site_briefがあれば、エージェントは以下のことを即座に理解します。

- サイトの目標とターゲットユーザー
- ブランドの色とトーン
- コンテンツ構造
- ビジネス上の目的

### より良い提案 {#better-recommendations}

エージェントはsite_briefを使用して、以下のことを行います。

- サイトの目的に合った機能の提案
- 目標に合致したコンテンツ構造の推奨
- ブランドに一貫したデザインの提案
- 互換性のない機能の提案を回避

### オンボーディングの迅速化 {#faster-onboarding}

新しいエージェント（または新しいセッションのエージェント）は、不明点を質問する代わりにsite_briefを読むだけで、迅速にキャッチアップできます。

## サイト仕様の開始方法 {#initiating-site-specification}

### テーマビルダーのオンボーディング中 {#during-theme-builder-onboarding}

サイト仕様スキルは、**テーマビルダーのオンボーディングフロー**中に自動的に開始されます。セットアップアシスタントエージェントが質問を行い、site_briefを構築します。

### 手動での開始 {#manual-initiation}

いつでもサイト仕様を開始できます。

```
"Let's define my site specification"
```

または

```
"Help me create a site brief"
```

## サイト仕様のプロセス {#the-site-specification-process}

### ステップ1：サイトの目的 {#step-1-site-purpose}

エージェントが尋ねます。

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

カテゴリを選択するか、独自の目的を説明できます。

### ステップ2：ターゲットユーザー {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### ステップ3：ブランドアイデンティティ {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### ステップ4：ビジネス目標 {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### ステップ5：コンテンツ構造 {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## あなたのsite_briefメモリ {#your-sitebrief-memory}

サイト仕様を完了すると、あなたの情報はエージェントのメモリ内に**site_brief**として保存されます。これには以下の構造化された記録が含まれます。

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## site_briefの確認と更新 {#viewing-and-updating-your-sitebrief}

### site_briefの確認 {#view-your-sitebrief}

エージェントに尋ねてください。

```
"Show me my site brief"
```

または

```
"What do you know about my site?"
```

エージェントが保存されている仕様を表示します。

### site_briefの更新 {#update-your-sitebrief}

サイトが進化した場合、更新することができます。

```
"Update my site brief: we're now targeting B2B customers"
```

または

```
"Refresh my site specification"
```

これにより、既存の情報が開始点となって、サイト仕様スキルが再実行されます。

## エージェントによるsite_briefの利用方法 {#how-agents-use-sitebrief}

### デザインの提案 {#design-recommendations}

デザインの変更を依頼すると、エージェントはsite_briefを参照します。

```
あなた: "Redesign my homepage"
エージェント: "あなたのsite briefに基づくと、あなたは25〜45歳の、温かく職人技が光るサステナブルなファッションに関心のある女性をターゲットにしています。手作りのジュエリーとサステナブルな価値を強調するデザインを作成します。"
```

### 機能の提案 {#feature-suggestions}

エージェントは目標に沿った機能を提案します。

```
あなた: "What features should I add?"
エージェント: "顧客ロイヤルティに焦点を当てたEコマースストアの場合、ロイヤリティプログラム、顧客レビュー、メールニュースレター、商品レコメンデーションをお勧めします。"
```

### コンテンツ構造 {#content-structure}

エージェントは構造に基づいてコンテンツの整理を提案します。

```
あなた: "How should I organize my blog?"
エージェント: "商品カタログとブログを使用しているため、投稿を商品カテゴリごとに整理し、複数の商品を一緒に紹介する「スタイリングガイド」を作成することをお勧めします。"
```

## ベストプラクティス {#best-practices}

### 具体的にする {#be-specific}

「一般のオーディエンス」ではなく、実際のユーザー層を説明してください。

- ✓ 「25〜45歳の、サステナブルなファッションに関心のある女性」
- ✗ 「すべての人」

### 定期的に更新する {#update-regularly}

サイトが進化するにつれて、site_briefを更新してください。

- ターゲットユーザーを変更した場合
- 新しい商品ラインを追加した場合
- ブランドアイデンティティが変更された場合
- ビジネス目標がシフトした場合

### 一貫した用語を使用する {#use-consistent-terminology}

セッションをまたいで同じ用語を使用してください。

- ✓ 常に「サステナブルなジュエリー」と言う（「環境に優しいジュエリー」や「グリーン製品」とは言わない）
- ✓ 常に同じ方法でユーザー層を参照する

### コンテキストを含める {#include-context}

エージェントがあなたの決定を理解するのに役立つ背景情報を提供してください。

- 「価格よりも品質を重視するプロフェッショナルをターゲットにしています」
- 「私たちのオーディエンスはテクノロジーに精通しており、モダンなデザインを期待しています」
- 「資金繰りに苦しむスタートアップなので、費用対効果の高いソリューションが必要です」

## テーマビルダーのオンボーディングとの関係 {#relationship-to-theme-builder-onboarding}

サイト仕様スキルは、**テーマビルダーのオンボーディングフロー**に統合されています。オンボーディングを完了すると、提供した情報に基づいてsite_briefが自動的に作成されます。

必要に応じて、サイト仕様を独立して実行することもできます。

- 初期設定後に仕様を洗練したい場合
- サイトの進化に合わせてsite_briefを更新したい場合
- テーマビルダーを開始する前に詳細な仕様を作成したい場合

## トラブルシューティング {#troubleshooting}

**site_briefが使われていない**
- エージェントがメモリにアクセスできるか確認してください
- エージェントに「my site briefを思い出させて」と尋ねてください
- 設定でメモリが有効になっているか確認してください

**新しいsite_briefからやり直したい**
- エージェントに「Clear my site brief and start fresh」と尋ねてください
- その後、再度サイト仕様を実行してください

**エージェントの提案がsite_briefと合っていない**
- エージェントに「review my site brief」と尋ねてください
- site_briefが古い場合は更新してください
- リクエストに追加のコンテキストを提供してください

## 次のステップ {#next-steps}

サイト仕様を定義した後：

1. **テーマビルダーを使用する**: site_briefに基づいてカスタムテーマを作成します
2. **デザインを洗練する**: 詳細なデザイン作業には、Design System Aestheticsスキルを使用します
3. **コンテンツを計画する**: エージェントにコンテンツ構造の推奨を求めます
4. **機能を構築する**: ビジネス目標に沿った機能のリクエストを行います
