---
title: 組み込みエージェント
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# 組み込みAgents

Gratis AI Agent v1.9.0 には、5つの組み込みagentsが同梱されています。それぞれ、特定の目的に合わせたツール一式、調整済みのsystem prompt、そしてその分野でよく使う作業に合った開始用の提案が事前設定されています。agentsを切り替えると、設定作業なしで、assistantができることや応答の仕方が変わります。Superdav AI Agent v1.18.0 は、関連する連携が設定されている場合、これらのワークフローにスケジュール対応ツール、リマインダー記録、承認ゲート、SMS通知を追加できます。

## Agentとは？ {#what-is-an-agent}

各agentは、次を組み合わせた名前付きの設定プロファイルです。

- **ツール** — agentが呼び出せる機能（例: Content Writer は投稿作成機能にアクセスでき、Design Studio はCSSとtheme.jsonの機能にアクセスできます）
- **System prompt** — agentの口調、優先事項、制約を設定する指示
- **提案** — すばやく始められるよう、チャットインターフェースに表示される事前作成済みのプロンプト

## Agent Pickerへのアクセス {#accessing-the-agent-picker}

1. WordPress管理サイドバーで **Gratis AI Agent** パネルを開きます。
2. チャットヘッダー左上の **agentアイコン** をクリックします（アイコンは有効なagentを反映して変わります）。
3. **Agent Picker** がフォームテーブルのオーバーレイとして開きます。各agentは、アイコン、名前、1行の説明とともに表示されます。
4. agent行をクリックして有効化します。チャットヘッダーはすぐに更新されます。

会話の途中でagentsを切り替えることもできます。新しいagentのsystem promptは、次のメッセージから有効になります。

## 5つの組み込みAgents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**焦点:** 投稿、ページ、問い合わせフォームの作成と編集。

**利用可能なツール:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`。Superdav AI Agent v1.18.0 の連携が有効な場合、設定済みのカレンダーコンテキスト、承認ゲート、リマインダー、SMS通知ツールも、承認済みワークフローで利用できる場合があります。

**得意なこと:**
- 概要やアウトラインからブログ投稿を下書きして公開する
- 新しいサイト向けにランディングページをまとめて作成する
- 問い合わせフォームや相談フォームを作成する
- URLまたは検索から投稿のアイキャッチ画像を設定する
- 設定済みのGoogleカレンダーコンテキストからイベントのフォローアップメッセージを下書きし、通知送信前に承認待ちにする

**開始用の提案:**
- *WordPress multisiteの利点について500語のブログ投稿を書いてください。*
- *About、Services、Contactページを作成して公開してください。*
- *Contactページに予約問い合わせフォームを追加してください。*
- *明日の設定済みカレンダーイベントの参加者向けリマインダーを下書きし、送信前に承認を待ってください。*

---

### Site Builder {#site-builder}

**焦点:** 1つのプロンプトからWebサイトを一貫して作成。

**利用可能なツール:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`。Superdav AI Agent v1.18.0 では、管理者が有効にしている場合、設定済みのマネージドサービス、承認、リマインダー、カレンダー、SMSツールを利用できることがあります。

**得意なこと:**
- 説明された事業タイプに合わせて、複数フェーズのサイト構築計画を生成する
- 構造、コンテンツ、ナビゲーション、デザインの各フェーズを自律的に実行する
- 計画の途中でエラーが起きても、手動介入なしで回復する
- 構築の一部として推奨pluginsをインストールする
- チャットインターフェースから直接問い合わせフォームを作成する（Superdav AI Agent v1.10.0以降）
- 承認ゲートとリマインダー記録が有効な場合、重複通知なしでローンチリマインダーや参加者フォローアップを調整する

**開始用の提案:**
- *ギャラリー投稿タイプ、予約ページ、問い合わせフォームを備えた写真ポートフォリオサイトを構築してください。*
- *オンラインメニュー、営業時間、席予約問い合わせフォームを備えたレストランWebサイトを作成してください。*
- *サービスページ、ポートフォリオセクション、ブログを備えたフリーランスコンサルティングサイトを設定してください。*
- *site builderを使ってContactページに問い合わせフォームを追加してください。*
- *サイトローンチチェックリストが承認されたら、設定済みの関係者連絡先にSMSリマインダーを送信してください。*

---

### Design Studio {#design-studio}

**焦点:** ビジュアルのカスタマイズ — 色、タイポグラフィ、CSS、ブロックパターン。

**利用可能なツール:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**得意なこと:**
- 名前付きthemeプリセット（minimal-dark、warm-editorial、corporate-blue、vibrant-startup、classic-blog）を適用する
- theme.jsonを通じてグローバルなタイポグラフィとカラーパレットを微調整する
- ブランド固有の上書き用にカスタムCSSを注入する
- ページのスクリーンショットを撮影し、デザイン上の問題をレビューする

**開始用の提案:**
- *warm-editorialプリセットを適用し、その後プライマリーカラーを#2d6a4fに設定してください。*
- *ホームページのスクリーンショットを撮って、改善点を教えてください。*
- *全幅の背景画像と中央揃えの見出しを持つ、再利用可能なヒーローブロックパターンを作成してください。*

### Plugin Manager {#plugin-manager}

**焦点:** WordPress pluginsの発見、インストール、管理。

**利用可能なツール:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**得意なこと:**
- 説明された用途に最適なpluginを推奨する
- レジストリからability packsをインストールする
- カテゴリー別に利用可能なabilityカタログを閲覧する

**開始用の提案:**
- *membership directoryに最適なpluginは何ですか？*
- *WooCommerce abilities packをインストールしてください。*
- *利用可能なecommerce ability packsをすべて表示してください。*

---

### Support Assistant {#support-assistant}

**焦点:** サイトコンテンツ、設定、WordPress構成に関する質問への回答。

**利用可能なツール:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**得意なこと:**
- 現在のサイト設定とオプションを調べる
- サイトで設定されている投稿タイプ、タクソノミー、メニューを説明する
- 実際の値を読み取り、「この設定は何をするのか？」という質問に答える
- 変更前の読み取り専用診断レイヤーとして機能する

**最初に試す提案:**
- *このサイトで現在有効なプラグインと設定は何ですか？*
- *このサイトに登録されているすべてのカスタム投稿タイプを一覧表示してください。*
- *どのナビゲーションメニューが存在し、どこに割り当てられていますか？*

---

## Superdav 自動化連携 {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 の連携が設定されている場合、組み込みエージェントは、スケジュールを考慮したより安全な自動化ワークフローに参加できます。

- **Google Calendar 読み取りツール**により、エージェントはフォローアップ作業の作成前に、設定済みカレンダーとイベントを確認できます。
- **連絡先と参加者のマッピング**は、イベント参加者を WordPress ユーザーまたは既知の連絡先に対応付けるのに役立ちます。
- **人による承認ゲート**は、承認済みユーザーが確認して承認するまで、慎重な扱いが必要な操作を一時停止します。
- **リマインダー記録**は、スケジュール済みジョブが再試行または繰り返し実行されるときに、重複通知を防ぎます。
- **TextBee SMS 通知**は、SMS 認証情報とワークフロー権限が有効な場合にのみ、設定済みテキストメッセージを送信します。

推奨ワークフロー: エージェントにメッセージまたは操作を準備させ、承認プロンプトを確認してから、承認された操作の再開を許可します。定期的なリマインダーでは、同じイベントや連絡先へ繰り返し通知されないように、リマインダーの重複排除を有効にしておきます。

---

## エージェントのカスタマイズ {#customising-agents}

各組み込みエージェントは、`gratis_ai_agent_agents` フィルターを通じて拡張または置き換えできます。

### 既存エージェントにカスタムシステムプロンプトを追加する {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 新しいエージェントを登録する {#registering-a-new-agent}

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

新しいエージェントは、フィルターの実行直後にエージェントピッカーに表示されます。

### 組み込みエージェントを削除する {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
