---
title: 內建代理程式
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# 內建 Agents {#built-in-agents}

Gratis AI Agent v1.9.0 隨附五個內建 agents，每個都預先配置了一組專注的工具、量身打造的系統提示，以及符合該領域常見任務的入門建議。在 agents 之間切換會改變 assistant 能做什麼以及它如何回應——而不需要您進行任何配置。當相關整合已配置時，Superdav AI Agent v1.18.0 可為這些工作流程加入具備排程感知的工具、提醒記錄、核准關卡，以及 SMS 通知。

## 什麼是 Agent？ {#what-is-an-agent}

每個 agent 都是一個具名配置設定檔，結合了：

- **工具**——agent 被允許呼叫的能力（例如 Content Writer 可存取文章建立能力；Design Studio 可存取 CSS 與 theme.json 能力）
- **系統提示**——設定 agent 語氣、優先事項與限制的指示
- **建議**——顯示在聊天介面中的預先撰寫提示，協助您快速開始

## 存取 Agent Picker {#accessing-the-agent-picker}

1. 在 WordPress 管理側邊欄中開啟 **Gratis AI Agent** 面板。
2. 點擊聊天標頭左上角的 **agent 圖示**（該圖示會變更以反映目前啟用的 agent）。
3. **Agent Picker** 會以表格式疊加層開啟。每個 agent 都會列出其圖示、名稱與一句描述。
4. 點擊某個 agent 列以啟用它。聊天標頭會立即更新。

您也可以在對話途中切換 agents——新的 agent 系統提示會從下一則訊息開始生效。

## 五個內建 Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**焦點：** 建立和編輯文章、頁面與聯絡表單。

**可用工具：** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`。啟用 Superdav AI Agent v1.18.0 整合後，已配置的日曆脈絡、核准關卡、提醒與 SMS 通知工具也可能可供已核准的工作流程使用。

**擅長項目：**
- 根據簡介或大綱草擬並發佈部落格文章
- 為新網站批次建立登陸頁面
- 建立聯絡與詢問表單
- 從 URL 或搜尋為文章設定精選圖片
- 從已配置的 Google Calendar 脈絡草擬活動後續訊息，然後在傳送通知前暫停等待核准

**入門建議：**
- *撰寫一篇 500 字的部落格文章，介紹 WordPress multisite 的好處。*
- *建立「關於」、「服務」與「聯絡」頁面並發佈。*
- *在「聯絡」頁面新增預約詢問表單。*
- *為明天已配置日曆活動的參與者草擬提醒，並在傳送前等待核准。*

---

### Site Builder {#site-builder}

**焦點：** 從單一提示完成端對端網站建立。

**可用工具：** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`。使用 Superdav AI Agent v1.18.0 時，在管理員啟用的情況下，已配置的託管服務、核准、提醒、日曆與 SMS 工具可能可用。

**擅長項目：**
- 為描述的業務類型產生多階段網站建置計畫
- 自主執行每個階段——結構、內容、導覽、設計
- 在計畫中途從錯誤中復原，不需要手動介入
- 作為建置的一部分安裝建議的外掛
- 直接從聊天介面建立聯絡表單（Superdav AI Agent v1.10.0+）
- 在啟用核准關卡與提醒記錄時，協調上線提醒或參與者後續追蹤，且不會重複通知

**入門建議：**
- *建置一個攝影作品集網站，包含圖庫文章類型、預約頁面與聯絡表單。*
- *建立一個餐廳網站，包含線上菜單、營業時間與訂位詢問表單。*
- *設定一個自由接案顧問網站，包含服務頁面、作品集區段與部落格。*
- *使用 site builder 在「聯絡」頁面新增聯絡表單。*
- *在網站上線檢查清單核准後，傳送 SMS 提醒給已配置的利害關係人聯絡人。*

---

### Design Studio {#design-studio}

**焦點：** 視覺自訂——顏色、排版、CSS 與區塊版型。

**可用工具：** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**擅長項目：**
- 套用具名 theme 預設（minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog）
- 透過 theme.json 微調全域排版與色彩調色盤
- 注入自訂 CSS 以進行品牌專屬覆寫
- 擷取頁面螢幕截圖並檢視設計問題

**入門建議：**
- *套用 warm-editorial 預設，然後將主要顏色設定為 #2d6a4f。*
- *擷取首頁的螢幕截圖，並告訴我你會改進什麼。*
- *建立一個可重複使用的主視覺區塊版型，包含全寬背景圖片與置中標題。*

### Plugin Manager {#plugin-manager}

**焦點：** 探索、安裝與管理 WordPress plugins。

**可用工具：** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**擅長項目：**
- 為描述的使用案例推薦最佳 plugin
- 從登錄庫安裝能力套件
- 依分類瀏覽可用的能力目錄

**入門建議：**
- *會員目錄最好的 plugin 是什麼？*
- *安裝 WooCommerce abilities pack。*
- *顯示所有可用的電子商務能力套件。*

---

### Support Assistant {#support-assistant}

**焦點：** 回答有關網站內容、設定與 WordPress 配置的問題。

**可用工具：** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**擅長事項：**
- 查詢目前的網站設定與選項
- 說明網站上設定了哪些文章類型、分類法與選單
- 透過讀取即時值來回答「這項設定有什麼作用？」這類問題
- 在進行變更前，作為唯讀的診斷層

**入門建議：**
- *目前這個網站上啟用了哪些 plugin 和設定？*
- *列出這個網站上註冊的所有自訂文章類型。*
- *有哪些導覽選單存在，以及它們被指派到哪裡？*

---

## Superdav 自動化整合 {#superdav-automation-integrations}

設定 Superdav AI Agent v1.18.0 整合後，內建代理程式可以參與更安全、具排程感知能力的自動化工作流程：

- **Google Calendar 讀取工具**允許代理程式在草擬後續工作前，檢查已設定的日曆與事件。
- **聯絡人與出席者對應**有助於將事件參與者配對到 WordPress 使用者或已知聯絡人。
- **人工核准關卡**會暫停敏感動作，直到授權使用者審查並確認。
- **提醒記錄**可在排程工作重試或重複時，防止重複通知。
- **TextBee SMS 通知**只會在 SMS 憑證與工作流程權限啟用時，傳送已設定的文字訊息。

建議工作流程：要求代理程式準備訊息或動作，審查核准提示，然後允許已核准的動作繼續執行。對於週期性提醒，請保持提醒去重功能啟用，讓同一事件或聯絡人不會被重複通知。

---

## 自訂代理程式 {#customising-agents}

每個內建代理程式都可以透過 `gratis_ai_agent_agents` filter 進行擴充或替換。

### 將自訂系統提示加入現有代理程式 {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 註冊新的代理程式 {#registering-a-new-agent}

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

新的代理程式會在 filter 執行後立即出現在代理程式選擇器中。

### 移除內建代理程式 {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
