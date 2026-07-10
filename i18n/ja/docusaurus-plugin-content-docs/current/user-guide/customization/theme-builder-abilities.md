---
title: テーマビルダー機能
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: ブロックテーマの骨組み構築と有効化 {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 は、チャットインターフェースからカスタムのブロックテーマを生成し、デプロイするための2つの強力な機能（アビリティ）を導入しました。

## 概要 {#overview}

**scaffold-block-theme** と **activate-theme** のアビリティを使用すると、エージェントは以下のことが可能になります。

*   指定に基づいて、完全で本番環境に対応したブロックテーマを生成する
*   手動での操作なしに、サイト上でテーマを自動的に有効化する
*   デザインの決定プロセスをガイドすることで、統一感のあるビジュアルアイデンティティを構築する

## ブロックテーマの骨組み構築 (Scaffold Block Theme) {#scaffold-block-theme}

**scaffold-block-theme** アビリティは、以下の要素を含む、完全なテーマ構造を持つ新しい WordPress ブロックテーマを生成します。

*   デザイントークンを含む `theme.json` の設定ファイル
*   一般的なレイアウトのためのブロックテンプレートファイル
*   カスタムブロックのスタイルとバリエーション
*   テーマのメタデータとサポート宣言

### 呼び出し方法 {#how-to-invoke}

Superdav AI Agent とのチャットで、テーマの生成をリクエストできます。

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

エージェントは以下の手順を実行します。
1.  会話を通じてデザインの好みを収集する
2.  完全なテーマ構造を生成する
3.  必要なすべてのテーマファイルを作成する
4.  テーマを有効化する準備を整える

### 期待される出力 {#expected-output}

アビリティが正常に実行されると、以下が表示されます。

*   テーマが骨組み構築されたことの確認
*   テーマ名と場所
*   適用されたデザイントークン（色、タイポグラフィ、間隔）の概要
*   すぐに有効化できる状態であること

出力例:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## テーマの有効化 (Activate Theme) {#activate-theme}

**activate-theme** アビリティは、サイトを新しく骨組み構築された、または既存のブロックテーマに切り替えます。

### 呼び出し方法 {#how-to-invoke-1}

テーマを骨組み構築した後、すぐに有効化できます。

```
"Activate the Modern Agency theme"
```

または、既存の任意のテーマを有効化できます。

```
"Switch to the Twentytwentyfour theme"
```

### 期待される出力 {#expected-output-1}

有効化が成功した場合:

*   現在有効なテーマの確認
*   以前のテーマ名（参考用）
*   テーマが現在適用されているサイトの URL
*   テーマ固有の設定に関するメモ

出力例:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## ワークフロー：骨組み構築と有効化 {#workflow-scaffold-and-activate}

一般的なワークフローでは、これら両方のアビリティを組み合わせて使用します。

1.  **テーマ生成のリクエスト**: 「SaaSのランディングページ用のブロックテーマを作成して」
2.  **エージェントがテーマを骨組み構築**: ファイルとデザイントークンを生成する
3.  **レビューと調整**: 必要に応じてデザインの変更について議論する
4.  **有効化**: 「今すぐテーマを有効化して」
5.  **確認**: サイトにアクセスし、新しいデザインが適用されていることを確認する

## デザイントークンとカスタマイズ {#design-tokens-and-customization}

骨組み構築されたテーマは、以下の目的で WordPress のデザイントークン（`theme.json` を経由）を使用します。

*   **Colors**: Primary、secondary、accent、neutral パレット
*   **Typography**: フォントファミリー、サイズ、ウェイト、行の高さ
*   **Spacing**: パディング、マージン、ギャップスケール
*   **Borders**: ラディウスと幅のトークン
*   **Shadows**: エレベーションレベル

これらのトークンは `theme.json` に一元管理されているため、一つのファイルからデザインシステム全体を簡単に調整できます。

## 制限事項と注意点 {#limitations-and-notes}

*   テーマは `/wp-content/themes/` に骨組み構築され、WordPress の命名規則に従う必要があります。
*   有効化には、WordPress サイト上で適切な権限が必要です。
*   テーマ内のカスタム PHP コードは最小限に留めるべきです。複雑な機能にはプラグインを使用してください。
*   ブロックテーマは、WordPress 5.9 以降で最もよく機能します。

## トラブルシューティング {#troubleshooting}

**骨組み構築後、テーマが表示されない**
*   テーマディレクトリが存在し、適切な権限が設定されているか確認してください。
*   `theme.json` が有効な JSON であるか確認してください。
*   テーマ名が既存のテーマと競合していないか確認してください。

**有効化が失敗する**
*   管理者権限を持っていることを確認してください。
*   テーマディレクトリが WordPress から読み取り可能であることを確認してください。
*   詳細については、WordPress のエラーログを確認してください。

**デザイントークンが適用されない**
*   `theme.json` の構文が正しいか確認してください。
*   キャッシュプラグインをクリアしてください。
*   使用しているトークンを WordPress のバージョンがサポートしているか確認してください。

## 次のステップ {#next-steps}

テーマを有効化した後、以下のことができます。
*   **Design System Aesthetics skill** を使用して、タイポグラフィ、色、間隔を調整する
*   WordPress のブロックエディターを通じて、個々のブロックのスタイルをカスタマイズする
*   テーマの `style.css` ファイルにカスタム CSS を追加する
*   特定のページタイプ用のカスタムブロックテンプレートを作成する
