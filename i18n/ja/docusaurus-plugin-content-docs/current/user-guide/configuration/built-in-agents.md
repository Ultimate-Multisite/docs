---
title: 組み込みエージェント
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# 標準搭載のエージェント

Gratis AI Agent v1.9.0には、標準搭載のエージェントが5種類含まれています。これらはそれぞれ、特定のツール群、調整されたシステムプロンプト、そしてその分野の一般的なタスクに合わせたスターターサジェスチョン（初期提案）が事前に設定されています。エージェントを切り替えるだけで、アシスタントができることや応答の仕方が変わりますが、ユーザー側での設定は一切不要です。

## エージェントとは何ですか？

エージェントとは、以下の要素を組み合わせた、名前付きの構成プロファイルです。

- **ツール** — エージェントが呼び出す権限を持つ機能（例：コンテンツライターは投稿作成機能にアクセスできます。デザインスタジオはCSSや`theme.json`の機能にアクセスできます）
- **システムプロンプト** — エージェントのトーン、優先順位、制約を設定する指示
- **サジェスチョン** — チャットインターフェースに表示される、すぐに作業を始めるのを助ける事前作成されたプロンプト

## エージェントピッカーへのアクセス方法

1. WordPress管理画面のサイドバーにある**Gratis AI Agent**パネルを開きます。
2. チャットヘッダーの左上にある**エージェントアイコン**をクリックします（アイコンはアクティブなエージェントを反映して変化します）。
3. **Agent Picker**がフォームテーブルのオーバーレイとして開きます。各エージェントは、アイコン、名前、そして一行の説明とともにリスト表示されています。
4. エージェントの行をクリックすると、それがアクティブになります。チャットヘッダーが即座に更新されます。

会話の途中でエージェントを切り替えることも可能です。新しいエージェントのシステムプロンプトは、次のメッセージから適用されます。

## 5つの標準搭載エージェント

### Content Writer（コンテンツライター）

**焦点:** 投稿、ページ、お問い合わせフォームの作成と編集。

**利用可能なツール:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**得意なこと:**
- 概要やアウトラインからブログ記事を起草し、公開すること
- 新しいサイト向けのランディングページをまとめて作成すること
- お問い合わせフォームや見積もりフォームを構築すること
- URLや検索結果から投稿のアイキャッチ画像を設定すること

**スターターサジェスチョン:**
- *WordPressマルチサイトの利点について、500語のブログ記事を書いてください。*
- *「会社概要」「サービス」「お問い合わせ」のページを作成し、公開してください。*
- *お問い合わせページに見積もり依頼フォームを追加してください。*

---

### Site Builder（サイトビルダー）

**焦点:** 単一のプロンプトからエンドツーエンドのウェブサイト作成。

**利用可能なツール:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**得意なこと:**
- 説明されたビジネスタイプに基づいた、複数のフェーズに分かれたサイト構築計画の生成
- 各フェーズを自律的に実行すること（構造、コンテンツ、ナビゲーション、デザイン）
- 手動での介入を必要とせずに、計画途中のエラーから回復すること
- 構築の一部として推奨プラグインをインストールすること
- チャットインターフェースから直接お問い合わせフォームを作成すること（Superdav AI Agent v1.10.0以降）

**スターターサジェスチョン:**
- *ギャラリーのカスタム投稿タイプ、予約ページ、お問い合わせフォームを備えた写真ポートフォリオサイトを構築してください。*
- *オンラインメニュー、営業時間、テーブル予約フォームを備えたレストランのウェブサイトを作成してください。*
- *サービスページ、ポートフォリオセクション、ブログを備えたフリーランスコンサルティングサイトをセットアップしてください。*
- *サイトビルダーを使って、お問い合わせページにお問い合わせフォームを追加してください。*

---

### Design Studio（デザインスタジオ）

**焦点:** 色、タイポグラフィ、CSS、ブロックパターンなどのビジュアルカスタマイズ。

**利用可能なツール:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**得意なこと:**
- 名前付きのテーマプリセット（minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog）の適用
- `theme.json`を介したグローバルなタイポグラフィとカラーパレットの微調整
- ブランド固有のオーバーライドのためのカスタムCSSの注入
- ページのスクリーンショットを撮影し、デザイン上の問題がないかレビューすること

**スターターサジェスチョン:**
- *warm-editorialプリセットを適用し、次にプライマリカラーを#2d6a4fに設定してください。*
- *ホームページのスクリーンショットを撮影し、どこを改善できるか教えてください。*
- *フル幅の背景画像と中央揃えの見出しを持つ、再利用可能なヒーローブロックパターンを作成してください。*

---

### Plugin Manager（プラグインマネージャー）

**焦点:** WordPressプラグインの発見、インストール、管理。

**利用可能なツール:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**得意なこと:**
- 説明されたユースケースに最適なプラグインを推奨すること
- レジストリから機能パックをインストールすること
- カテゴリごとに利用可能な機能カタログを閲覧すること

**スターターサジェスチョン:**
- *メンバーシップディレクトリに最適なプラグインは何ですか？*
- *WooCommerce機能パックをインストールしてください。*
- *利用可能なeコマース機能パックをすべて表示してください。*

---

### Support Assistant（サポートアシスタント）

**焦点:** サイトのコンテンツ、設定、WordPressの構成に関する質問への回答。

**利用可能なツール:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**得意なこと:**
- 現在のサイト設定やオプションの検索
- サイトに設定されているカスタム投稿タイプ、タクソノミー、メニューの説明
- ライブの値を読むことで、「この設定は何をしますか？」という質問に回答すること
- 変更を加える前に、読み取り専用の診断レイヤーとして機能すること

**スターターサジェスチョン:**
- *このサイトで現在アクティブなプラグインと設定は何ですか？*
- *このサイトに登録されているすべてのカスタム投稿タイプをリストアップしてください。*
- *どのようなナビゲーションメニューが存在し、どこに割り当てられていますか？*

---

## エージェントのカスタマイズ

標準搭載のエージェントは、`gratis_ai_agent_agents`フィルターを通じて拡張または置き換えることができます。

### 既存のエージェントにカスタムシステムプロンプトを追加する

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 新しいエージェントを登録する

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

新しいエージェントは、フィルターが実行された直後にAgent Pickerに表示されます。

### 標準搭載のエージェントを削除する

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
