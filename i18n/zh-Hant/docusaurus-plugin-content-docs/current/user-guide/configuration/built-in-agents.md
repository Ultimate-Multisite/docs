---
title: 內建代理人
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# 內建 Agent

Gratis AI Agent v1.9.0 內建了五個 Agent。每個 Agent 都預先配置了專注的工具集、量身打造的系統提示（system prompt）和與該領域常見任務相匹配的入門建議。切換 Agent 會改變助理的功能和回應方式，而無需您進行任何配置。

## 什麼是 Agent？

每個 Agent 都是一個命名配置檔案，它結合了以下三部分：

- **工具 (Tools)** — Agent 被允許調用的能力（例如：內容寫作者 (Content Writer) 可以存取文章建立能力；設計工作室 (Design Studio) 可以存取 CSS 和 theme.json 能力）
- **系統提示 (System prompt)** — 設定 Agent 語氣、優先順序和限制的指令
- **建議 (Suggestions)** — 在聊天介面中預先寫好的提示，幫助您快速上手

## 如何使用 Agent 選擇器 (Agent Picker)

1. 在 WordPress 管理側邊欄開啟 **Gratis AI Agent** 面板。
2. 點擊聊天標題左上角的 **agent 圖示**（圖示會根據目前活躍的 Agent 改變）。
3. **Agent 選擇器 (Agent Picker)** 會以表單疊層的形式開啟。每個 Agent 都會列出其圖示、名稱和一行的簡短描述。
4. 點擊一個 Agent 的列來啟用它。聊天標題會立即更新。

您也可以在對話過程中切換 Agent — 新 Agent 的系統提示將從下一條訊息開始生效。

## 五個內建 Agent

### 內容寫作者 (Content Writer)

**專注領域：** 建立和編輯文章、頁面和聯絡表單。

**可用工具：** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**擅長處理：**
- 根據簡介或大綱起草和發布部落格文章
- 為新網站建立批次式的登陸頁面
- 建立聯絡和諮詢表單
- 從 URL 或搜尋結果設定文章特色圖片

**入門建議：**
- *撰寫一篇關於 WordPress multisite 優點的 500 字部落格文章。*
- *建立「關於我們」、「服務」和「聯絡我們」頁面並發布。*
- *在「聯絡我們」頁面新增一個預約諮詢表單。*

---

### 網站建構師 (Site Builder)

**專注領域：** 從單一提示完成端到端的網站建立。

**可用工具：** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**擅長處理：**
- 為描述的業務類型生成多階段的網站建構計畫
- 自主執行每個階段——包括結構、內容、導航和設計
- 在計畫執行中遇到錯誤時，無需手動干預即可恢復
- 作為建構的一部分安裝推薦的插件
- 直接從聊天介面建立聯絡表單 (Superdav AI Agent v1.10.0+)

**入門建議：**
- *建立一個包含相簿文章類型、預約頁面和聯絡表單的攝影作品集網站。*
- *建立一個包含線上菜單、營業時間和餐桌預約諮詢表單的餐廳網站。*
- *建立一個包含服務頁面、作品集區塊和部落格的自由職業者諮詢網站。*
- *使用網站建構師在「聯絡我們」頁面新增一個聯絡表單。*

---

### 設計工作室 (Design Studio)

**專注領域：** 視覺化客製化——顏色、字體、CSS 和區塊樣式。

**可用工具：** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**擅長處理：**
- 套用命名主題預設 (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- 透過 theme.json 微調全局字體和顏色調色盤
- 注入客製化 CSS 進行品牌特定的覆蓋
- 截取頁面螢幕畫面並審查其設計問題

**入門建議：**
- *套用 warm-editorial 預設，然後將主色設定為 #2d6a4f。*
- *截取首頁的螢幕畫面，並告訴我您會改進哪些地方。*
- *建立一個帶有全寬背景圖片和居中標題的重複使用型英雄區塊樣式。*

---

### 插件管理器 (Plugin Manager)

**專注領域：** 發現、安裝和管理 WordPress 插件。

**可用工具：** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**擅長處理：**
- 根據描述的使用情境推薦最佳插件
- 從註冊表安裝能力包 (ability packs)
- 依類別瀏覽可用的能力目錄

**入門建議：**
- *什麼是建立會員目錄的最佳插件？*
- *安裝 WooCommerce 能力包。*
- *顯示所有可用的電子商務能力包。*

---

### 支援助理 (Support Assistant)

**專注領域：** 回答關於網站內容、設定和 WordPress 配置的問題。

**可用工具：** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**擅長處理：**
- 查詢當前的網站設定和選項
- 解釋網站上配置了哪些文章類型、分類和選單
- 透過閱讀即時值來回答「這個設定是做什麼的？」等問題
- 在進行更改之前，充當一個唯讀的診斷層

**入門建議：**
- *這個網站目前有哪些插件和設定是啟用的？*
- *列出本網站註冊的所有自定義文章類型。*
- *有哪些導航選單，以及它們分配在哪裡？*

---

## 自訂 Agent

每個內建 Agent 都可以透過 `gratis_ai_agent_agents` 篩選器進行擴充或替換。

### 為現有 Agent 添加自訂系統提示

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 註冊新的 Agent

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

新的 Agent 在篩選器運行後會立即出現在 Agent 選擇器中。

### 移除內建 Agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
