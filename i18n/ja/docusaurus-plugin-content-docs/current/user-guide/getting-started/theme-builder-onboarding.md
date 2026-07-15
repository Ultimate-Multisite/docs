---
title: テーマビルダーのオンボーディングフロー
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder オンボーディングフロー

Superdav AI Agent v1.12.0 は、初期設定時にカスタムブロックテーマを作成するのに役立つ、ガイド付きの**Theme Builder オンボーディングフロー**を導入しました。これは、従来の Site Builder モードに代わる、より柔軟でエージェント支援型のアプローチです。

## Theme Builder オンボーディングフローとは？ {#what-is-the-theme-builder-onboarding-flow}

Theme Builder オンボーディングフローは、以下の機能を持つ対話型のセットアップウィザードです。

*   デザインの決定事項（色、タイポグラフィ、レイアウト）をガイドします。
*   サイトのビジュアルアイデンティティの好みをキャプチャします。
*   ユーザーのニーズに合わせたカスタムブロックテーマを生成します。
*   完了すると、自動的にテーマを有効化します。

このフローは、明確化のための質問を投げかけ、テーマを段階的に構築する**Setup Assistant agent**によって動作します。

## Theme Builder オンボーディングの開始方法 {#starting-the-theme-builder-onboarding}

### 初回セットアップ {#first-run-setup}

新しい WordPress インストールで Superdav AI Agent を初めて起動すると、以下が表示されます。

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

**「Build a custom theme」**を選択すると、Theme Builder オンボーディングフローに入ります。

### 手動での有効化 {#manual-activation}

また、いつでも以下のリクエストを行うことで、Theme Builder オンボーディングを開始できます。

```
"Start the Theme Builder onboarding"
```

または

```
"Help me create a custom theme"
```

## オンボーディングのステップ {#the-onboarding-steps}

### ステップ 1: モードの選択 {#step-1-mode-selection}

Setup Assistant agent が、以下の質問をします。

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

ほとんどのユーザーには**Guided mode**が推奨されます。このモードでは、エージェントが業界や目標に基づいてデザインの推奨を行います。

### ステップ 2: サイトの仕様定義 {#step-2-site-specification}

サイトについて尋ねられます。

*   **Site purpose**: Eコマース、ブログ、ポートフォリオ、SaaS など。
*   **Target audience**: 訪問者は誰ですか？
*   **Brand colors**: メインカラーとサブカラー（または「よくわからない」）
*   **Tone**: プロフェッショナル、クリエイティブ、遊び心がある、ミニマルなど。

この情報は、**site_brief** メモリに保存され、エージェントが今後のセッションで参照します。

### ステップ 3: デザインシステムの決定 {#step-3-design-system-decisions}

エージェントが、デザイントークンの選択を通じてガイドします。

*   **Typography**: フォントファミリー（セリフ、サンセリフ、モノスペース）とサイズスケール
*   **Color palette**: プライマリ、セカンダリ、アクセント、ニュートラルカラー
*   **Spacing**: コンパクト、ノーマル、またはスペーシーなレイアウト
*   **Motion**: アニメーションとトランジション（必要な場合）

### ステップ 4: テーマの生成 {#step-4-theme-generation}

Setup Assistant agent は、以下の要素を用いてカスタムブロックテーマの骨組みを構築します。

*   すべてのデザイントークンを含む `theme.json`
*   一般的なレイアウト（ホームページ、ブログ、お問い合わせ）用のブロックテンプレート
*   デザインシステムに合わせたカスタムブロックスタイル
*   テーマのメタデータと WordPress のサポート宣言

### ステップ 5: 有効化と検証 {#step-5-activation-and-verification}

テーマが自動的に有効化され、以下が表示されます。

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

その後、サイトにアクセスして、テーマが正しく表示されているかを確認できます。

## site_brief の仕様定義とメモリ {#site-specification-and-sitebrief-memory}

オンボーディング中、エージェントはサイトの仕様を**site_brief** メモリカテゴリにキャプチャします。これには以下が含まれます。

*   サイトの目的と目標
*   ターゲットオーディエンス
*   ブランドカラーとトーン
*   デザインの好み
*   コンテンツの構造

### site_brief が重要な理由 {#why-sitebrief-matters}

今後のセッションにおいて、エージェントは site_brief を参照して、以下のことを行います。

*   変更にわたるデザインの一貫性を維持する
*   サイトの目的に沿った機能の提案を行う
*   コンテキストを考慮した推奨事項を提供する
*   セットアップの質問を繰り返すのを避ける

### site_brief の確認方法 {#viewing-your-sitebrief}

エージェントに以下のように尋ねることができます。

```
"Show me my site brief"
```

または

```
"What do you know about my site?"
```

エージェントが保存されているサイトの仕様を表示します。

## オンボーディング後のカスタマイズ {#customizing-after-onboarding}

Theme Builder オンボーディングが完了した後、以下のことができます。

### Design System Aesthetics Skill の使用 {#use-the-design-system-aesthetics-skill}

デザインの調整をリクエストします。

```
"Refine the typography to be more modern"
```

または

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** は、ターゲットを絞ったデザインの更新を通じてガイドします。

### theme.json の直接編集 {#edit-themejson-directly}

上級者向けに、`/wp-content/themes/[theme-name]/theme.json` を編集して、以下を調整できます。

*   カラー トークン
*   タイポグラフィ スケール
*   スペーシングの値
*   ボーダーとシャドウの定義

### カスタムブロックテンプレートの作成 {#create-custom-block-templates}

WordPress のブロックエディターを使用して、以下のためのカスタムテンプレートを作成します。

*   ホームページレイアウト
*   ブログ記事ページ
*   商品ページ
*   お問い合わせフォーム

## 比較：旧方式 vs. 新方式のオンボーディング {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## トラブルシューティング {#troubleshooting}

**オンボーディングフローが完了しなかった**
*   フローを再開：「Start the Theme Builder onboarding」
*   WordPress のインストールが最新であることを確認してください
*   Setup Assistant agent が有効になっていることを確認してください

**site_brief が使用されていない**
*   エージェントがメモリにアクセスできることを確認してください
*   エージェントに「recall my site brief」と尋ねてください
*   設定でメモリが有効になっていることを確認してください

**生成されたテーマが好みに合わない**
*   Design System Aesthetics skill を使用して調整してください
*   エージェントに「regenerate the theme with [specific changes]」と尋ねてください
*   正確な制御が必要な場合は、theme.json を直接編集してください

## 次のステップ {#next-steps}

Theme Builder オンボーディングを完了した後：

1. **サイトの確認**: サイトにアクセスして新しいテーマを確認します。
2. **デザインの調整**: Design System Aesthetics skill を使用して調整を行います。
3. **コンテンツの追加**: サイトのコンテンツの構築を開始します。
4. **機能の探索**: scaffold-block-theme や activate-theme のような他のエージェント機能について学びます。
