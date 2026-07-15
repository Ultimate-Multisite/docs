---
title: 能力參考
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# 能力參考

能力是 Gratis AI Agent 可以在你的 WordPress 安裝中呼叫的原子動作。每項能力都是已註冊的 PHP 類別，會公開 JSON schema — agent 會在執行時讀取此 schema，以了解需要哪些參數以及該能力會回傳什麼。

本頁記錄 Gratis AI Agent v1.9.0 隨附的所有能力。

---

## 自訂文章類型 {#custom-post-types}

這些能力管理透過 agent 註冊的自訂文章類型（CPT）。註冊資料會持久保存到 WordPress options 資料表，因此在 plugin 停用與重新啟用後仍會保留。

### `register_post_type` {#registerposttype}

註冊新的自訂文章類型。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 文章類型鍵（最多 20 個字元，不可使用大寫，不可有空格） |
| `singular_label` | string | Yes | 人類可讀的單數名稱，例如 `Portfolio Item` |
| `plural_label` | string | Yes | 人類可讀的複數名稱，例如 `Portfolio Items` |
| `public` | boolean | No | 此文章類型是否可公開存取。預設為 `true` |
| `supports` | array | No | 要支援的功能：`title`、`editor`、`thumbnail`、`excerpt`、`comments`、`revisions`、`custom-fields`。預設為 `["title","editor"]` |
| `has_archive` | boolean | No | 是否啟用文章類型彙整頁面。預設為 `false` |
| `menu_icon` | string | No | 管理選單圖示的 Dashicons 類別或 URL。預設為 `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | 文章類型的 URL slug。預設為 `slug` |

**範例**

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

**回傳** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

回傳 agent 註冊的所有自訂文章類型。

**參數** — 無

**回傳**

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

取消註冊先前由 agent 註冊的自訂文章類型。該類型的既有文章會保留在資料庫中，但不再能透過該文章類型存取。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 要移除的文章類型鍵 |

**回傳** `{ "success": true, "slug": "portfolio" }`

---

## 自訂分類法 {#custom-taxonomies}

這些能力管理自訂分類法。與 CPT 一樣，分類法註冊資料會持久保存。

### `register_taxonomy` {#registertaxonomy}

註冊新的自訂分類法。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 分類法鍵（最多 32 個字元） |
| `singular_label` | string | Yes | 人類可讀的單數名稱，例如 `Project Category` |
| `plural_label` | string | Yes | 人類可讀的複數名稱，例如 `Project Categories` |
| `post_types` | array | Yes | 此分類法應附加到的文章類型 slug |
| `hierarchical` | boolean | No | 類別樣式為 `true`，標籤樣式為 `false`。預設為 `true` |
| `public` | boolean | No | 詞彙是否可公開存取。預設為 `true` |
| `rewrite_slug` | string | No | 分類法的 URL slug。預設為 `slug` |

**範例**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**回傳** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

回傳 agent 註冊的所有自訂分類法。

**參數** — 無

**回傳**

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

取消註冊先前由 agent 註冊的自訂分類法。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 要移除的分類法鍵 |

**回傳** `{ "success": true, "slug": "project-category" }`

---

## 設計系統 {#design-system}

設計系統能力會修改 WordPress 網站的視覺呈現 — 從自訂 CSS 到區塊版型與網站標誌。

### `inject_custom_css` {#injectcustomcss}

透過 `wp_add_inline_style` 將 CSS 附加到網站的 `<head>`。CSS 會儲存在 `gratis_ai_agent_custom_css` option 中，並在能力重設時乾淨地移出佇列。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | 要注入的有效 CSS |
| `label` | string | No | 此 CSS 區塊的人類可讀標籤，用於除錯記錄。預設為 `"agent-injected"` |
| `replace` | boolean | No | 若為 `true`，會取代所有先前注入的 CSS。預設為 `false`（附加） |

**範例**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**回傳** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

在 WordPress 版型庫中註冊可重複使用的區塊版型。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 版型識別碼，例如 `gratis/hero-dark` |
| `title` | string | Yes | 編輯器中顯示的人類可讀版型名稱 |
| `content` | string | Yes | 版型的序列化區塊標記（HTML） |
| `categories` | array | No | 版型分類 slug，例如 `["featured", "hero"]` |
| `description` | string | No | 版型選擇器中顯示的簡短描述 |
| `keywords` | array | No | 搜尋關鍵字 |

**回傳** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

列出 agent 註冊的所有區塊版型。

**參數** — 無

**傳回**

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

將 WordPress 網站標誌設定為指定的附件 ID 或遠端圖片 URL。提供 URL 時，圖片會被下載並匯入媒體庫。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `attachment_id` | integer | 否 | 現有媒體庫附件的 ID |
| `url` | string | 否 | 要匯入並設定為標誌的遠端圖片 URL |

必須提供 `attachment_id` 或 `url` 其中之一。

**傳回** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

將具名色彩／排版預設套用至啟用中佈景主題的 `theme.json`（或 `global-styles`）。預設是由 Gratis AI Agent 團隊維護的精選套件。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `preset` | string | 是 | 預設名稱，例如 `minimal-dark`、`warm-editorial`、`corporate-blue` |
| `merge` | boolean | 否 | 若為 `true`，則與現有值合併，而非取代。預設為 `false` |

**可用預設**

| 預設 | 說明 |
|---|---|
| `minimal-dark` | 近黑色背景、白色文字、單一強調色 |
| `warm-editorial` | 溫暖的米白背景、襯線標題、泥土色系強調色 |
| `corporate-blue` | 海軍藍與白色調色盤，搭配專業排版 |
| `vibrant-startup` | 明亮漸層、圓角、現代無襯線字體 |
| `classic-blog` | 中性灰階、舒適行高、傳統版面間距 |

**傳回** `{ "success": true, "preset": "minimal-dark" }`

---

## 全域樣式 {#global-styles}

全域樣式能力會透過 WordPress Global Styles API 讀寫 theme.json 值，影響整個網站的所有區塊與範本。

### `get_global_styles` {#getglobalstyles}

傳回目前的全域樣式設定。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `path` | string | 否 | 指向特定值的 JSON 指標，例如 `/color/palette` 或 `/typography/fontSizes`。若省略，則傳回整個物件。 |

**傳回**完整全域樣式物件，或 `path` 位置的值。

---

### `set_global_styles` {#setglobalstyles}

更新全域樣式設定中的一個或多個值。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `path` | string | 是 | 要設定之值的 JSON 指標，例如 `/color/palette` |
| `value` | any | 是 | 新值 |

**範例** — 將色彩新增至調色盤

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**傳回** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

重設所有由代理套用的全域樣式變更，還原佈景主題預設值。

**參數** — 無

**傳回** `{ "success": true }`

---

## 導覽選單 {#navigation-menus}

導覽選單能力可建立及管理 WordPress 導覽選單及其項目。

### `create_menu` {#createmenu}

建立新的 WordPress 導覽選單。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `name` | string | 是 | 選單名稱，例如 `Primary Navigation` |
| `location` | string | 否 | 要指派此選單的佈景主題位置，例如 `primary` |

**傳回** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

重新命名選單，或將其重新指派至佈景主題位置。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `menu_id` | integer | 是 | 要更新的選單 ID |
| `name` | string | 否 | 新選單名稱 |
| `location` | string | 否 | 要指派或重新指派的佈景主題位置 |

**傳回** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

將項目新增至現有導覽選單。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `menu_id` | integer | 是 | 目標選單的 ID |
| `type` | string | 是 | 項目類型：`custom`、`post_type` 或 `taxonomy` |
| `title` | string | 否 | 選單項目的標籤（`custom` 類型為必填） |
| `url` | string | 否 | `custom` 項目的 URL |
| `object_id` | integer | 否 | `post_type`/`taxonomy` 項目的文章 ID 或詞彙 ID |
| `parent_id` | integer | 否 | 用來將此項目巢狀放置其下的選單項目 ID |
| `position` | integer | 否 | 選單中的零起始位置 |

**傳回** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

從導覽選單移除項目。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `item_id` | integer | 是 | 要移除的選單項目 ID |

**傳回** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

列出所有 WordPress 導覽選單，包含其已指派的佈景主題位置。

**參數** — 無

**傳回**

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

## 選項管理 {#options-management}

選項能力透過 `get_option` / `update_option` 讀寫 WordPress 選項。內建安全封鎖清單可防止意外修改關鍵設定。

### `get_option` {#getoption}

讀取 WordPress 選項。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `option_name` | string | 是 | 選項鍵，例如 `blogname` |

**傳回** `{ "option_name": "blogname", "value": "My Site" }`

若 `option_name` 位於安全封鎖清單中，則傳回錯誤。

---

### `set_option` {#setoption}

寫入 WordPress 選項。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `option_name` | string | 是 | 選項鍵 |
| `value` | any | 是 | 新值（陣列／物件會自動序列化） |
| `autoload` | string | 否 | `"yes"` 或 `"no"`。預設會保留現有的自動載入設定 |

如果 `option_name` 位於安全封鎖清單上，則傳回錯誤。

**傳回** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

刪除 WordPress 選項。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `option_name` | string | 是 | 要刪除的選項鍵 |

如果 `option_name` 位於安全封鎖清單上，則傳回錯誤。

**傳回** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

列出符合模式的 WordPress 選項。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `pattern` | string | 否 | 用於篩選選項名稱的 SQL LIKE 模式，例如 `gratis_%`。若省略則傳回所有選項（在大型資料庫上請謹慎使用）。 |
| `limit` | integer | 否 | 結果的最大數量。預設 `50`，最大 `500` |

**傳回**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## 內容管理 {#content-management}

內容管理能力可建立和編輯 WordPress 文章與頁面。系統會傳回文章 ID，讓多能力方案中的後續步驟可以參照已建立的內容。

### `create_post` {#createpost}

建立新的 WordPress 文章、頁面或自訂文章類型項目。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `title` | string | 是 | 文章標題 |
| `content` | string | 否 | 文章內文 — 接受純文字、HTML 或序列化區塊標記 |
| `status` | string | 否 | `draft`、`publish`、`pending`、`private`。預設 `draft` |
| `post_type` | string | 否 | 文章類型代稱，例如 `post`、`page`，或任何已註冊的 CPT。預設 `post` |
| `excerpt` | string | 否 | 顯示於彙整與搜尋結果中的簡短摘要 |
| `categories` | array | 否 | 要指派的分類名稱或 ID 陣列 |
| `tags` | array | 否 | 要指派的標籤名稱或 ID 陣列 |
| `author` | integer | 否 | 要設為文章作者的 WordPress 使用者 ID。預設為目前使用者 |
| `date` | string | 否 | ISO 8601 格式的發布日期，例如 `2026-05-01T09:00:00` |
| `page_template` | string | 否 | 要指派給此文章或頁面的範本檔案，例如 `page-full-width.php`。只有在 `post_type` 為 `page` 或支援頁面範本的 CPT 時才有意義。 |

**範例**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**傳回** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

更新現有的 WordPress 文章或頁面。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `post_id` | integer | 是 | 要更新的文章 ID |
| `title` | string | 否 | 新文章標題 |
| `content` | string | 否 | 新文章內文 |
| `status` | string | 否 | 新狀態：`draft`、`publish`、`pending`、`private` |
| `excerpt` | string | 否 | 新摘要 |
| `categories` | array | 否 | 以此名稱或 ID 陣列取代完整分類清單 |
| `tags` | array | 否 | 以此名稱或 ID 陣列取代完整標籤清單 |
| `page_template` | string | 否 | 要指派給此文章或頁面的新範本檔案，例如 `page-full-width.php`。傳入空字串可移除範本指派並還原為 theme 預設值。 |

**範例** — 建立後變更範本

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**傳回** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

在單一能力呼叫中建立多篇文章，以減少網站建置或大量內容匯入期間的往返次數。文章會依序建立；如果其中一篇失敗，其他文章仍會繼續，且失敗情況會回報在結果陣列中。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `posts` | array | 是 | 文章物件陣列，每個物件接受與 `create_post` 相同的參數 |
| `stop_on_error` | boolean | 否 | 若為 `true`，在第一次失敗後停止處理。預設 `false` |

**範例**

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

**傳回**

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

將精選圖片（文章縮圖）指派給現有文章或頁面。接受現有 Media Library 附件 ID 或遠端圖片 URL；提供 URL 時，圖片會自動下載並匯入。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `post_id` | integer | 是 | 要更新的文章或頁面 ID |
| `attachment_id` | integer | 否 | 現有 Media Library 附件的 ID |
| `url` | string | 否 | 要匯入並設為精選圖片的遠端圖片 URL |
| `alt_text` | string | 否 | 若附件是從 URL 匯入，要套用至附件的替代文字 |

必須提供 `attachment_id` 或 `url` 其中之一。

**傳回** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

使用啟用中的表單 plugin（Contact Form 7、WPForms、Fluent Forms 或 Gravity Forms，取決於已安裝哪一個）建立聯絡表單。傳回可嵌入任何文章或頁面的 shortcode。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `title` | string | 是 | 顯示在表單外掛管理介面的表單名稱 |
| `fields` | array | 是 | 表單欄位的排序清單（請見下方 Field 物件） |
| `recipient` | string | 否 | 接收提交內容的電子郵件地址。預設為 WordPress 管理員電子郵件 |
| `subject` | string | 否 | 電子郵件主旨列。使用 Contact Form 7 時支援 `[your-name]` 與 `[your-subject]` 佔位符 |
| `confirmation_message` | string | 否 | 成功提交後顯示的訊息。預設：`"Thank you for your message. We'll be in touch soon."` |

**Field 物件**

| 鍵 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `name` | string | 是 | 內部欄位名稱／機器鍵 |
| `label` | string | 是 | 顯示在表單上的人類可讀標籤 |
| `type` | string | 是 | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | 否 | 提交前是否必須填寫此欄位。預設 `false` |
| `options` | array | 否 | `select`、`checkbox` 與 `radio` 欄位的選項 |
| `placeholder` | string | 否 | 文字類型輸入的佔位文字 |

**範例**

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

**回傳**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## 視覺審查 {#visual-review}

視覺審查能力可讓代理程式擷取即時頁面的螢幕截圖並進行分析，支援自主設計審查、前後比較與視覺迴歸檢查，且不需要任何瀏覽器擴充功能。

### `capture_screenshot` {#capturescreenshot}

使用伺服器端無頭瀏覽器擷取指定 URL 的 WordPress 頁面螢幕截圖。圖片會儲存到媒體庫，並回傳 CDN URL。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `url` | string | 是 | 要擷取螢幕截圖的頁面完整 URL，例如 `https://example.com/about/` |
| `width` | integer | 否 | 視窗寬度（像素）。預設 `1280` |
| `height` | integer | 否 | 視窗高度（像素）。預設 `800` |
| `full_page` | boolean | 否 | 擷取完整可捲動頁面，而不只是視窗範圍。預設 `false` |
| `delay_ms` | integer | 否 | 頁面載入後等待多少毫秒再擷取，適用於動畫內容。預設 `500` |
| `label` | string | 否 | 與媒體庫中附件一同儲存的人類可讀標籤 |

**回傳**

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

取得兩張螢幕截圖，並回傳視覺差異分數以及標示變更區域的差異圖片。適合用於確認設計變更是否產生預期結果，或偵測非預期的迴歸。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `before_url` | string | 是 | 要擷取作為「之前」狀態的頁面 URL |
| `after_url` | string | 是 | 要擷取作為「之後」狀態的頁面 URL。若要跨時間比較，可使用相同 URL |
| `width` | integer | 否 | 兩次擷取使用的視窗寬度。預設 `1280` |
| `threshold` | float | 否 | 像素差異閾值（0.0–1.0）。在此容差內的像素會被視為未變更。預設 `0.1` |

**回傳**

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

`diff_score` 為 `0.0` 表示沒有可見變更；`1.0` 表示每個像素都已變更。

---

### `review_page_design` {#reviewpagedesign}

擷取頁面的螢幕截圖，並將其傳送至語言模型進行視覺分析。回傳涵蓋版面配置、字體排印、色彩使用與無障礙疑慮的結構化評估。

**參數**

| 參數 | 類型 | 必填 | 說明 |
|---|---|---|---|
| `url` | string | 是 | 要審查的頁面完整 URL |
| `focus` | string | 否 | 以逗號分隔、要著重的審查領域清單：`layout`、`typography`、`colour`、`accessibility`、`mobile`。預設：所有領域 |
| `width` | integer | 否 | 視窗寬度。預設 `1280` |

**回傳**

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

## 可安裝能力 {#installable-abilities}

可安裝能力登錄檔可讓你使用以 WordPress 外掛形式發佈的額外能力套件來擴充代理程式。每個套件都會使用標準能力 API 註冊一項或多項能力。

### `list_available_abilities` {#listavailableabilities}

回傳可從登錄檔安裝的能力套件目錄。

**參數**

| 參數 | Type | 必填 | 描述 |
|---|---|---|---|
| `category` | string | 否 | 依類別篩選：`ecommerce`、`seo`、`media`、`social`、`developer` |

**回傳**

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

從註冊庫下載並啟用能力套件。

**參數**

| 參數 | Type | 必填 | 描述 |
|---|---|---|---|
| `slug` | string | 是 | 能力套件 plugin slug |

**回傳** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

查詢能力註冊庫，以找出最符合所描述使用案例的 plugin，並可選擇安裝它。

**參數**

| 參數 | Type | 必填 | 描述 |
|---|---|---|---|
| `description` | string | 是 | 所需功能的自然語言描述 |
| `install` | boolean | 否 | 若為 `true`，會立即安裝建議的 plugin。預設為 `false` |

**範例**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**回傳**

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
