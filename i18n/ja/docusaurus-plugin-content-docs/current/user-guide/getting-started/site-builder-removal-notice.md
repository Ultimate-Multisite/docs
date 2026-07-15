---
title: Site Builder Mode Removal Notice
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builderモード廃止のお知らせ

**Superdav AI Agent v1.12.0にて、Site Builderモードが廃止されました。** Site Builderモードをご利用されていた場合は、テーマの作成やサイトのセットアップには、**Setup Assistantエージェント**への移行をお願いいたします。

## 何が変わったのか？ {#what-happened}

### Site Builderモード（旧機能） {#site-builder-mode-legacy}

Site Builderモードは、以下の作業を行うためのウィザード形式のインターフェースでした。

- テンプレートからのサイト作成
- 基本設定の構成
- テーマの選択
- 初期コンテンツの設定

### 代替となる機能 {#what-replaced-it}

これに代わって、**Setup Assistantエージェント**がSite Builderのすべての機能を引き継ぎ、以下の機能を提供します。

- より柔軟な、エージェントによるガイド付きセットアップ
- より優れたテーマカスタマイズオプション
- Theme Builderのオンボーディングとの統合
- 将来のセッションのために、永続的な`site_brief`メモリ

## Site Builderモードを利用していた場合 {#if-you-were-using-site-builder-mode}

### サイトは安全です {#your-sites-are-safe}

- Site Builderモードで作成された既存のサイトは引き続き動作します。
- データ損失やサイトの停止はありません。
- 通常通りサイトの管理を続けることができます。

### Setup Assistantエージェントへの移行 {#migrate-to-setup-assistant-agent}

新しいサイトのセットアップやテーマの変更を行う際は、Setup Assistantエージェントをご利用ください。

```
"Help me set up a new site"
```

または

```
"Start the Theme Builder onboarding"
```

Setup Assistantエージェントは、より柔軟性を高めながら、これまでの機能と同じ操作を提供します。

## 比較：Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| 機能 | Site Builder (廃止) | Setup Assistant (新機能) |
|---------|----------------------|----------------------|
| セットアップ方法 | ウィザード形式のフォーム | エージェントとの会話形式 |
| テーマ選択 | 事前定義されたテンプレート | カスタム生成 |
| カスタマイズ性 | 限定的なオプション | 完全なデザインシステム |
| サイト概要 (Site brief) | 保存されない | 永続的なメモリとして保存 |
| 将来のセッション | セットアップを繰り返す | 保存された`site_brief`を利用 |
| 柔軟性 | 固定されたワークフロー | 適応性の高い会話形式 |

## Setup Assistantエージェントへの移行方法 {#migrating-to-setup-assistant-agent}

### 新規サイトの場合 {#for-new-sites}

Site Builderモードを使用する代わりに、以下の手順で進めてください。

1. リクエスト：「Help me set up a new site」
2. Setup Assistantエージェントが以下の点についてガイドします。
   - サイトの目的と目標
   - ターゲットオーディエンス
   - ブランドのアイデンティティ
   - テーマの生成
   - 初期設定

### 既存サイトの場合 {#for-existing-sites}

Site Builderモードで作成された既存のサイトがある場合：

1. そのまま引き続き利用できます。
2. テーマを更新するには、「Redesign my site」とリクエストしてください。
3. Setup Assistantエージェントが新しいテーマの作成を支援します。
4. サイトデータは変更されません。

### テーマ変更の場合 {#for-theme-changes}

Site Builderモードのテーマ選択の代わりに：

1. リクエスト：「Change my theme」
2. Setup Assistantエージェントが以下の作業を行います。
   - デザインの好みについて質問します。
   - カスタムテーマを生成します。
   - サイトに適用（アクティベート）します。

## 主な違い {#key-differences}

### Site Builderモード {#site-builder-mode}

```
1. テンプレートを選択
2. テーマを選択
3. 基本設定を構成
4. 完了
```

### Setup Assistantエージェント {#setup-assistant-agent}

```
1. サイトの目的を説明
2. ターゲットオーディエンスを定義
3. デザインの好みを伝える
4. エージェントがカスタムテーマを生成
5. エージェントがテーマを適用
6. 将来の参照のためにサイト概要を保存
```

## Setup Assistantエージェントのメリット {#benefits-of-setup-assistant-agent}

### より柔軟性が高い {#more-flexible}

- サイトを自然言語で説明できます。
- カスタムの推奨事項を得られます。
- 特定のニーズに適応できます。

### カスタマイズ性が向上 {#better-customization}

- カスタムテーマの生成が可能。
- デザインシステムに基づいた決定が可能。
- デザイントークンが永続的に保持されます。

### 永続的なメモリ {#persistent-memory}

- サイト概要（`site_brief`）が保存されます。
- 将来のエージェントがサイトの背景を理解します。
- セットアップ情報を繰り返す必要がありません。

### 統合されたワークフロー {#integrated-workflow}

- Theme Builderのオンボーディング機能。
- Design System Aestheticsスキル。
- Ability Visibilityコントロール。
- すべての機能がシームレスに連携します。

## トラブルシューティング {#troubleshooting}

### Site Builderモードが見つからない {#i-cant-find-site-builder-mode}

Site Builderモードは廃止されました。代わりにSetup Assistantエージェントをご利用ください。

```
"Help me set up a new site"
```

### Site Builderのサイトを再作成したい {#i-want-to-recreate-a-site-from-site-builder}

Setup Assistantエージェントを使って再作成できます。

1. リクエスト：「Help me set up a new site」
2. 元のサイトの目的とデザインを説明します。
3. エージェントが類似のテーマを生成します。
4. サイト概要（`site_brief`）が将来の参照のために保存されます。

### 既存のSite Builderサイトが動作しない {#my-existing-site-builder-site-isnt-working}

Site Builderモードで作成された既存のサイトは引き続き動作します。問題が発生している場合は：

1. テーマがまだアクティブであることを確認してください。
2. プラグインが有効になっているか確認してください。
3. WordPressのエラーログを確認してください。
4. 問題が解決しない場合は、サポートにご連絡ください。

### 古いSite Builderテンプレートは使えますか？ {#can-i-still-use-my-old-site-builder-templates}

Site Builderテンプレートは利用できなくなりました。しかしながら：

- 既存のサイトは引き続き動作します。
- Setup Assistantエージェントを使って同様のサイトを再作成できます。
- Setup Assistantエージェントは、より多くのカスタマイズオプションを提供します。

## 次のステップ {#next-steps}

1. **新規サイトの場合**: Setup Assistantエージェントを使用してください。
2. **既存サイトの場合**: そのまま引き続き利用してください。
3. **テーマ変更の場合**: Setup Assistantエージェントに支援をリクエストしてください。
4. **デザインの調整の場合**: Design System Aestheticsスキルを使用してください。

## 関連トピック {#related-topics}

- **Theme Builder Onboarding**: カスタムテーマのためのガイド付きセットアップ
- **Setup Assistant Agent**: エージェントによるサイトセットアップ
- **Site Specification Skill**: サイトの目標とオーディエンスを定義
- **Design System Aesthetics Skill**: サイトのビジュアルアイデンティティを洗練
