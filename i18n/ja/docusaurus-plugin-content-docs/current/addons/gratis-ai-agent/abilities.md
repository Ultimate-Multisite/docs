---
title: 機能リファレンス
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities リファレンス {#abilities-reference}

Abilities は、Gratis AI Agent があなたの WordPress インストール上で呼び出せる最小単位の操作です。各 ability は登録済みの PHP クラスで、JSON スキーマを公開します。agent は実行時にこのスキーマを読み取り、必要なパラメーターと ability の戻り値を把握します。

このページでは、Gratis AI Agent v1.9.0 に同梱されるすべての abilities を説明します。

---

## カスタム投稿タイプ {#custom-post-types}

これらの abilities は、agent 経由で登録されたカスタム投稿タイプ（CPT）を管理します。登録内容は WordPress options テーブルに保存されるため、plugin の無効化と再有効化の後も保持されます。

### `register_post_type` {#registerposttype}

新しいカスタム投稿タイプを登録します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 投稿タイプキー（最大 20 文字、大文字不可、空白不可） |
| `singular_label` | string | Yes | 人が読める単数名。例: `Portfolio Item` |
| `plural_label` | string | Yes | 人が読める複数名。例: `Portfolio Items` |
| `public` | boolean | No | 投稿タイプを公開アクセス可能にするかどうか。既定値は `true` |
| `supports` | array | No | サポートする機能: `title`、`editor`、`thumbnail`、`excerpt`、`comments`、`revisions`、`custom-fields`。既定値は `["title","editor"]` |
| `has_archive` | boolean | No | 投稿タイプのアーカイブページを有効にするかどうか。既定値は `false` |
| `menu_icon` | string | No | 管理メニューアイコン用の Dashicons クラスまたは URL。既定値は `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | 投稿タイプ用の URL slug。既定では `slug` |

**例**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**戻り値** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent によって登録されたすべてのカスタム投稿タイプを返します。

**パラメーター** — なし

**戻り値**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type` {#deleteposttype}

agent によって以前登録されたカスタム投稿タイプの登録を解除します。そのタイプの既存投稿はデータベースに残りますが、投稿タイプ経由ではアクセスできなくなります。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 削除する投稿タイプキー |

**戻り値** `{ "success": true, "slug": "portfolio" }`

---

## カスタムタクソノミー {#custom-taxonomies}

これらの abilities はカスタムタクソノミーを管理します。CPT と同様に、タクソノミーの登録内容は保存されます。

### `register_taxonomy` {#registertaxonomy}

新しいカスタムタクソノミーを登録します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | タクソノミーキー（最大 32 文字） |
| `singular_label` | string | Yes | 人が読める単数名。例: `Project Category` |
| `plural_label` | string | Yes | 人が読める複数名。例: `Project Categories` |
| `post_types` | array | Yes | このタクソノミーを関連付ける投稿タイプの slugs |
| `hierarchical` | boolean | No | カテゴリー形式の場合は `true`、タグ形式の場合は `false`。既定値は `true` |
| `public` | boolean | No | term を公開アクセス可能にするかどうか。既定値は `true` |
| `rewrite_slug` | string | No | タクソノミー用の URL slug。既定では `slug` |

**例**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**戻り値** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent によって登録されたすべてのカスタムタクソノミーを返します。

**パラメーター** — なし

**戻り値**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

agent によって以前登録されたカスタムタクソノミーの登録を解除します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 削除するタクソノミーキー |

**戻り値** `{ "success": true, "slug": "project-category" }`

---

## デザインシステム {#design-system}

デザインシステムの abilities は、カスタム CSS からブロックパターン、site ロゴまで、WordPress site の見た目を変更します。

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` 経由で site の `<head>` に CSS を追加します。CSS は `gratis_ai_agent_custom_css` option に保存され、ability がリセットされるときにきれいに dequeued されます。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | 注入する有効な CSS |
| `label` | string | No | この CSS ブロック用の人が読めるラベル。デバッグログで使用されます。既定値は `"agent-injected"` |
| `replace` | boolean | No | `true` の場合、以前に注入されたすべての CSS を置き換えます。既定値は `false`（追加） |

**例**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**戻り値** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress パターンライブラリに再利用可能なブロックパターンを登録します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | パターン識別子。例: `gratis/hero-dark` |
| `title` | string | Yes | エディターに表示される人が読めるパターン名 |
| `content` | string | Yes | パターン用のシリアライズ済みブロックマークアップ（HTML） |
| `categories` | array | No | パターンカテゴリー slugs。例: `["featured", "hero"]` |
| `description` | string | No | パターン選択画面に表示される短い説明 |
| `keywords` | array | No | 検索キーワード |

**戻り値** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent によって登録されたすべてのブロックパターンを一覧表示します。

**パラメーター** — なし

**戻り値**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

WordPress site のロゴを指定された添付ファイル ID またはリモート画像 URL に設定します。URL が指定された場合、画像はダウンロードされ、メディアライブラリに取り込まれます。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | 既存のメディアライブラリ添付ファイルの ID |
| `url` | string | No | 取り込んでロゴとして設定するリモート画像 URL |

`attachment_id` または `url` のいずれかを指定する必要があります。

**戻り値** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

有効な theme の `theme.json`（または `global-styles`）に、名前付きの色／タイポグラフィプリセットを適用します。プリセットは Gratis AI Agent チームが管理する厳選バンドルです。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | プリセット名。例: `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | `true` の場合、置き換えではなく既存値と結合します。既定値は `false` |

**利用可能なプリセット**

| Preset | Description |
|---|---|
| `minimal-dark` | ほぼ黒の背景、白いテキスト、単一のアクセントカラー |
| `warm-editorial` | 暖かみのあるオフホワイトの背景、セリフ体の見出し、アースカラーのアクセント |
| `corporate-blue` | ネイビーと白のパレット、プロフェッショナルなタイポグラフィ |
| `vibrant-startup` | 明るいグラデーション、角丸、モダンなサンセリフ体 |
| `classic-blog` | ニュートラルなグレー、読みやすい行間、伝統的なレイアウト間隔 |

**戻り値** `{ "success": true, "preset": "minimal-dark" }`

---

## グローバルスタイル {#global-styles}

グローバルスタイル機能は、WordPress Global Styles API を通じて theme.json の値を読み書きし、site 全体のすべてのブロックとテンプレートに影響します。

### `get_global_styles` {#getglobalstyles}

現在のグローバルスタイル設定を返します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | 特定の値への JSON ポインター。例: `/color/palette` または `/typography/fontSizes`。省略した場合はオブジェクト全体を返します。 |

**戻り値** `path` の値、または完全なグローバルスタイルオブジェクト。

---

### `set_global_styles` {#setglobalstyles}

グローバルスタイル設定内の 1 つ以上の値を更新します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | 設定する値への JSON ポインター。例: `/color/palette` |
| `value` | any | Yes | 新しい値 |

**例** — パレットに色を追加

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**戻り値** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

agent が適用したすべてのグローバルスタイル変更をリセットし、theme の既定値に戻します。

**パラメーター** — なし

**戻り値** `{ "success": true }`

---

## ナビゲーションメニュー {#navigation-menus}

ナビゲーションメニュー機能は、WordPress ナビゲーションメニューとその項目を作成・管理します。

### `create_menu` {#createmenu}

新しい WordPress ナビゲーションメニューを作成します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | メニュー名。例: `Primary Navigation` |
| `location` | string | No | このメニューを割り当てる theme の位置。例: `primary` |

**戻り値** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

メニュー名を変更するか、theme の位置に再割り当てします。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | 更新するメニューの ID |
| `name` | string | No | 新しいメニュー名 |
| `location` | string | No | 割り当てまたは再割り当てする theme の位置 |

**戻り値** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

既存のナビゲーションメニューに項目を追加します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | 対象メニューの ID |
| `type` | string | Yes | 項目タイプ: `custom`、`post_type`、または `taxonomy` |
| `title` | string | No | メニュー項目のラベル（`custom` タイプでは必須） |
| `url` | string | No | `custom` 項目の URL |
| `object_id` | integer | No | `post_type`/`taxonomy` 項目の投稿 ID またはターム ID |
| `parent_id` | integer | No | この項目を入れ子にする親メニュー項目 ID |
| `position` | integer | No | メニュー内の 0 始まりの位置 |

**戻り値** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

ナビゲーションメニューから項目を削除します。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | 削除するメニュー項目 ID |

**戻り値** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

割り当てられた theme の位置を含め、すべての WordPress ナビゲーションメニューを一覧表示します。

**パラメーター** — なし

**戻り値**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## オプション管理 {#options-management}

オプション機能は、`get_option` / `update_option` を通じて WordPress オプションを読み書きします。組み込みの安全ブロックリストにより、重要な設定の誤変更を防ぎます。

### `get_option` {#getoption}

WordPress オプションを読み取ります。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | オプションキー。例: `blogname` |

**戻り値** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` が安全ブロックリストに含まれる場合はエラーを返します。

---

### `set_option` {#setoption}

WordPress オプションを書き込みます。

**パラメーター**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | オプションキー |
| `value` | any | Yes | 新しい値（配列／オブジェクトは自動でシリアライズされます） |
| `autoload` | string | No | `"yes"` または `"no"`。既定では既存の autoload 設定を保持します |

`option_name` が安全ブロックリストに含まれる場合はエラーを返します。

**戻り値** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress のオプションを削除します。

**パラメータ**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `option_name` | string | はい | 削除するオプションキー |

`option_name` が安全ブロックリストに含まれる場合はエラーを返します。

**戻り値** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

パターンに一致する WordPress オプションを一覧表示します。

**パラメータ**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `pattern` | string | いいえ | オプション名を絞り込む SQL LIKE パターン。例: `gratis_%`。省略した場合はすべてのオプションを返します（大規模なデータベースでは注意して使用してください）。 |
| `limit` | integer | いいえ | 結果の最大数。デフォルトは `50`、最大は `500` |

**戻り値**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## コンテンツ管理 {#content-management}

コンテンツ管理機能は、WordPress の投稿とページを作成・編集します。投稿 ID が返されるため、複数機能のプランにおける後続の手順で、作成されたコンテンツを参照できます。

### `create_post` {#createpost}

新しい WordPress 投稿、ページ、またはカスタム投稿タイプのエントリを作成します。

**パラメータ**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `title` | string | はい | 投稿タイトル |
| `content` | string | いいえ | 投稿本文 — プレーンテキスト、HTML、またはシリアライズ済みブロックマークアップを受け付けます |
| `status` | string | いいえ | `draft`、`publish`、`pending`、`private`。デフォルトは `draft` |
| `post_type` | string | いいえ | 投稿タイプのスラッグ。例: `post`、`page`、または登録済みの任意の CPT。デフォルトは `post` |
| `excerpt` | string | いいえ | アーカイブと検索結果に表示される短い要約 |
| `categories` | array | いいえ | 割り当てるカテゴリー名または ID の配列 |
| `tags` | array | いいえ | 割り当てるタグ名または ID の配列 |
| `author` | integer | いいえ | 投稿者として設定する WordPress ユーザー ID。デフォルトは現在のユーザー |
| `date` | string | いいえ | ISO 8601 形式の公開日時。例: `2026-05-01T09:00:00` |
| `page_template` | string | いいえ | この投稿またはページに割り当てるテンプレートファイル。例: `page-full-width.php`。`post_type` が `page`、またはページテンプレートをサポートする CPT の場合にのみ意味があります。 |

**例**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**戻り値** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

既存の WordPress 投稿またはページを更新します。

**パラメータ**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `post_id` | integer | はい | 更新する投稿の ID |
| `title` | string | いいえ | 新しい投稿タイトル |
| `content` | string | いいえ | 新しい投稿本文 |
| `status` | string | いいえ | 新しいステータス: `draft`、`publish`、`pending`、`private` |
| `excerpt` | string | いいえ | 新しい抜粋 |
| `categories` | array | いいえ | カテゴリー一覧全体を、この名前または ID の配列で置き換えます |
| `tags` | array | いいえ | タグ一覧全体を、この名前または ID の配列で置き換えます |
| `page_template` | string | いいえ | この投稿またはページに割り当てる新しいテンプレートファイル。例: `page-full-width.php`。空文字列を渡すと、テンプレート割り当てを削除し、theme のデフォルトに戻します。 |

**例** — 作成後にテンプレートを変更

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**戻り値** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

1 回の機能呼び出しで複数の投稿を作成し、サイト構築や一括コンテンツ取り込み時の往復を減らします。投稿は順番に作成されます。1 件が失敗しても他は続行され、失敗は結果配列で報告されます。

**パラメータ**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `posts` | array | はい | 投稿オブジェクトの配列。各オブジェクトは `create_post` と同じパラメータを受け付けます |
| `stop_on_error` | boolean | いいえ | `true` の場合、最初の失敗後に処理を停止します。デフォルトは `false` |

**例**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**戻り値**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

既存の投稿またはページにアイキャッチ画像（投稿サムネイル）を割り当てます。既存の Media Library 添付ファイル ID、またはリモート画像 URL を受け付けます。URL が指定された場合、画像は自動的にダウンロードされ、取り込まれます。

**パラメータ**

| パラメータ | 型 | 必須 | 説明 |
|---|---|---|---|
| `post_id` | integer | はい | 更新する投稿またはページの ID |
| `attachment_id` | integer | いいえ | 既存の Media Library 添付ファイルの ID |
| `url` | string | いいえ | 取り込んでアイキャッチ画像として設定するリモート画像 URL |
| `alt_text` | string | いいえ | URL から取り込まれる場合に添付ファイルへ適用する代替テキスト |

`attachment_id` または `url` のいずれかを指定する必要があります。

**戻り値** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

有効なフォームプラグイン（インストールされているものに応じて Contact Form 7、WPForms、Fluent Forms、または Gravity Forms）を使用してお問い合わせフォームを作成します。任意の投稿またはページに埋め込めるショートコードを返します。

**パラメータ**

| パラメーター | 型 | 必須 | 説明 |
|---|---|---|---|
| `title` | string | はい | フォーム plugin の管理画面に表示されるフォーム名 |
| `fields` | array | はい | フォーム項目の順序付きリスト（下記の Field object を参照） |
| `recipient` | string | いいえ | 送信内容を受信するメールアドレス。既定では WordPress 管理者メールアドレス |
| `subject` | string | いいえ | メールの件名行。Contact Form 7 を使用する場合、`[your-name]` と `[your-subject]` のプレースホルダーに対応 |
| `confirmation_message` | string | いいえ | 送信成功後に表示されるメッセージ。既定値: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| キー | 型 | 必須 | 説明 |
|---|---|---|---|
| `name` | string | はい | 内部項目名 / 機械用キー |
| `label` | string | はい | フォームに表示される人間が読めるラベル |
| `type` | string | はい | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | いいえ | 送信前にこの項目への入力が必須かどうか。既定値 `false` |
| `options` | array | いいえ | `select`、`checkbox`、`radio` 項目の選択肢 |
| `placeholder` | string | いいえ | テキスト型入力用のプレースホルダーテキスト |

**例**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**戻り値**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## ビジュアルレビュー {#visual-review}

ビジュアルレビュー機能により、agent は公開中ページのスクリーンショットを取得して分析できます。ブラウザー拡張機能なしで、自律的なデザインレビュー、前後比較、視覚的な回帰チェックが可能です。

### `capture_screenshot` {#capturescreenshot}

指定された URL の WordPress ページのスクリーンショットを、サーバー側のヘッドレスブラウザーで取得します。画像はメディアライブラリに保存され、CDN URL が返されます。

**パラメーター**

| パラメーター | 型 | 必須 | 説明 |
|---|---|---|---|
| `url` | string | はい | スクリーンショットを取得するページの完全な URL。例: `https://example.com/about/` |
| `width` | integer | いいえ | ビューポートの幅（ピクセル）。既定値 `1280` |
| `height` | integer | いいえ | ビューポートの高さ（ピクセル）。既定値 `800` |
| `full_page` | boolean | いいえ | ビューポートだけでなく、スクロール可能なページ全体を取得します。既定値 `false` |
| `delay_ms` | integer | いいえ | ページ読み込み後、取得前に待機するミリ秒数。アニメーション付きコンテンツに便利です。既定値 `500` |
| `label` | string | いいえ | メディアライブラリ内の添付ファイルに保存される人間が読めるラベル |

**戻り値**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots` {#comparescreenshots}

2 つのスクリーンショットを取得し、視覚的な差分スコアと、変更された領域を強調表示した差分画像を返します。デザイン変更が期待どおりの結果になったか確認したり、意図しない回帰を検出したりするのに便利です。

**パラメーター**

| パラメーター | 型 | 必須 | 説明 |
|---|---|---|---|
| `before_url` | string | はい | 「変更前」の状態として取得するページの URL |
| `after_url` | string | はい | 「変更後」の状態として取得するページの URL。時間差で比較する場合は同じ URL でもかまいません |
| `width` | integer | いいえ | 両方の取得に使用するビューポート幅。既定値 `1280` |
| `threshold` | float | いいえ | ピクセル差分のしきい値（0.0–1.0）。この許容範囲内のピクセルは未変更とみなされます。既定値 `0.1` |

**戻り値**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` が `0.0` の場合は見た目の変化がないことを意味し、`1.0` の場合はすべてのピクセルが変化したことを意味します。

---

### `review_page_design` {#reviewpagedesign}

ページのスクリーンショットを取得し、視覚分析のために言語モデルへ送信します。レイアウト、タイポグラフィ、色の使い方、アクセシビリティ上の懸念を含む構造化された評価を返します。

**パラメーター**

| パラメーター | 型 | 必須 | 説明 |
|---|---|---|---|
| `url` | string | はい | レビューするページの完全な URL |
| `focus` | string | いいえ | 重視するレビュー領域のカンマ区切りリスト: `layout`, `typography`, `colour`, `accessibility`, `mobile`。既定: すべての領域 |
| `width` | integer | いいえ | ビューポート幅。既定値 `1280` |

**戻り値**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## インストール可能な機能 {#installable-abilities}

インストール可能な機能レジストリを使うと、WordPress plugin として配布される追加機能パックで agent を拡張できます。各パックは標準の機能 API を使って 1 つ以上の機能を登録します。

### `list_available_abilities` {#listavailableabilities}

レジストリからインストールできる機能パックのカタログを返します。

**パラメーター**

| パラメーター | 型 | 必須 | 説明 |
|---|---|---|---|
| `category` | string | いいえ | カテゴリーで絞り込み: `ecommerce`, `seo`, `media`, `social`, `developer` |

**戻り値**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installability}

レジストリから機能パックをダウンロードして有効化します。

**パラメーター**

| パラメーター | 型 | 必須 | 説明 |
|---|---|---|---|
| `slug` | string | はい | 機能パックプラグインのslug |

**戻り値** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

説明されたユースケースに最適なプラグインを見つけるため、機能レジストリに問い合わせます。必要に応じてインストールも行います。

**パラメーター**

| パラメーター | 型 | 必須 | 説明 |
|---|---|---|---|
| `description` | string | はい | 目的の機能を自然言語で説明したもの |
| `install` | boolean | いいえ | `true` の場合、推奨プラグインをすぐにインストールします。既定値は `false` |

**例**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**戻り値**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
