---
title: 更新日誌
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# 更新日誌

## 1.9.0 — 發布於 2026-04-28

### 新增功能

- **`create_contact_form` 能力** — 可使用目前啟用的表單外掛（如 Contact Form 7、WPForms、Fluent Forms 或 Gravity Forms）建立聯絡表單，並回傳一個可嵌入任何文章或頁面的短代碼。
- **`set_featured_image` 能力** — 可從現有的媒體庫附件 ID 或遠端 URL 為文章或頁面設定特色圖片；如果提供 URL，系統會自動匯入該圖片。
- **`batch_create_posts` 能力** — 可以在單一的能力呼叫中建立多篇文章。它支援與 `create_post` 相同的參數，會報告每篇文章的成功或失敗狀態，並新增了可選的 `stop_on_error` 模式。
- **`page_template` 參數** — 已新增至 `create_post` 和 `update_post`。用於在建立或更新文章時指定 PHP 頁面模板檔案（例如：`page-full-width.php`）。若在 `update_post` 中傳入空字串，則會恢復使用主題預設模板。
- **客戶端截圖能力** — 包括 `capture_screenshot`、`compare_screenshots` 和 `review_page_design`。透過伺服器端的無頭瀏覽器，可以擷取實時頁面的完整或視窗截圖；比較兩張截圖；並提供 AI 生成的設計審查報告，涵蓋版面、字體、顏色和可存取性。
- **五個內建代理人** — 包括內容撰寫者 (Content Writer)、網站建構師 (Site Builder)、設計工作室 (Design Studio)、外掛管理器 (Plugin Manager) 和支援助理 (Support Assistant)。每個代理人都有專屬的工具集、量身打造的系統提示，以及入門建議。您可以在聊天標頭的新的 **Agent Picker** 中切換代理人。詳情請參閱 [內建代理人](../../user-guide/configuration/built-in-agents)。
- **功能開關 (Feature flags)** — 新增 **設定 → 功能開關** 頁籤，提供存取控制開關（限制為管理員、限制為網路管理員、訂閱者存取、為非會員停用）和品牌化選項（隱藏頁腳歸屬、自訂代理人名稱、隱藏代理人選擇器、使用網站圖標作為聊天頭像）。詳情請參閱 [Gratis AI Agent 設定](../../user-guide/administration/gratis-ai-agent-settings)。
- **恢復上次會話** — 聊天面板現在會在頁面載入和小工具開啟時自動重新載入最近的對話，確保在頁面導航過程中不會丟失上下文。
- **外掛操作連結** — WordPress **外掛 → 已安裝外掛** 畫面下方，現在會顯示指向設定和能力註冊表快速連結。

### 改進之處

- **圖片來源重試** — 代理人在下載失敗時，現在會先重試所有配置的免費圖片來源，然後才會回退到 AI 生成的圖片。
- **模型資訊面板** — 位於聊天標頭，現在始終可見；不再在發送第一則訊息後隱藏。
- **自動滾動行為** — 當使用者向上滾動閱讀時，自動滾動會暫停；一個浮動的 **滾動至底部** 按鈕會出現，當使用者到達最新訊息時會自動消失。
- **Agent Picker UI** — 已重新設計為帶有每個代理人圖標的表單表格疊層，讓您能一目瞭然地識別和切換代理人。
- **延遲載入 JS 區塊** — 聊天小工具的初始 JavaScript 捆綁包現在被拆分成延遲載入的區塊，將初始捆綁大小減少了 75–90%。
- **聊天小工具重新設計** — 通用的 AI 圖標取代了原有的自訂頭像；與內建代理人系統保持一致。
- **URL 連結化** — 系統訊息和錯誤訊息氣泡中出現的 URL 現在會渲染成可點擊的連結。

### 修復之處

- **能力可發現性** — 已修正描述、系統提示的引用和命名空間對齊，確保所有能力都能可靠地出現在代理人的工具列表中。
- **提供者快取** — 透過版本計數器進行網站級別的提供者快取，防止在多站點網路中出現過時的提供者問題。
- **`ability_invalid_output`** — 已在 12 個能力處理器中解決；所有處理器現在都能回傳結構化的 JSON 回應。
- **`pending_client_tool_calls` 流程** — 已端到端接線，確保客戶端工具呼叫能正確完成並將結果回傳給模型。
- **歷史記錄抽屜** — 不可復原的變更已從復原清單中排除；**查看完整歷史記錄** 連結現在能正常運作。
- **變更/復原系統** — 修復了五個獨立的錯誤，並將它們統一到新的管理介面下。
- **儲存設定通知** — 點擊 **儲存設定** 後，現在能可靠地顯示小通知 (snackbar)。
- **垃圾桶上下文選單** — 新增了 **永久刪除** 選項，讓項目可以在不離開垃圾桶視圖的情況下被硬刪除。
- **編輯與重新發送** — 點擊編輯圖標現在只會進入所點訊息的編輯模式，而不是整個討論串的訊息。
- **聊天佈局高度** — 當頁面上方出現外掛注入的內容（管理通知、橫幅）時，聊天面板會適應其高度，防止輸入區域被推到螢幕外。

---

## 1.4.0 — 發布於 2026-04-09

### 新增功能

- **WP-CLI 基準測試指令** (`wp gratis-ai-agent benchmark`) — 可從命令列執行 Agent Capabilities v1 基準測試套件，用於 CI 流程和模型評估工作流。支援按問題執行、提供者/模型覆寫，以及 JSON/CSV 輸出。
- **Agent Capabilities v1 基準測試套件** — 一組結構化的複雜多步驟提示，用於測試完整的能力表面，並提供評分和 Token/持續時間報告。
- **自訂文章類型能力** — `register_post_type`、`list_post_types`、`delete_post_type`。註冊的內容會在重啟後透過選項表保留。
- **自訂分類能力** — `register_taxonomy`、`list_taxonomies`、`delete_taxonomy`。支援分層和扁平分類，並可選化重寫的 Slug。
- **設計系統能力** — `inject_custom_css`、`add_block_pattern`、`list_block_patterns`、`set_site_logo`、`apply_theme_json_preset`。包含五個精選預設：`minimal-dark`、`warm-editorial`、`corporate-blue`、`vibrant-startup`、`classic-blog`。
- **全域樣式能力** — `get_global_styles`、`set_global_styles`、`reset_global_styles`。透過 WordPress Global Styles API 讀取和寫入 `theme.json` 的值。
- **導航選單管理能力** — `create_menu`、`update_menu`、`add_menu_item`、`remove_menu_item`、`list_menus`。支援巢狀選單和主題位置指定。
- **選項管理能力** — `get_option`、`set_option`、`delete_option`、`list_options`。包含一個內建的安全黑名單，保護關鍵的 WordPress 選項不被修改。
- **可安裝能力註冊表** — `list_available_abilities`、`install_ability`、`recommend_plugin`。用於發現和啟用作為 WordPress 外掛分發的能力包。
- **網站建構器協調 v2** — `create_site_plan`、`execute_site_plan`、`get_plan_progress`、`handle_plan_error`。具備多階段網站建構計畫，包含外掛發現、步驟輸出參考、進度追蹤和自主錯誤恢復。
- **餐廳網站基準測試問題** (`q-restaurant-website`) — 涵蓋 CPT 註冊、設計系統、導航和外掛發現的端到端測試。
- **AI 提供者連接外掛** 已添加到 WordPress Playground 藍圖中，以實現更快速的本地開發環境設置。

### 改進之處

- README 已更新，增加了 AI 提供者連接的文檔和設置說明。

### 修復之處

- 解決了 `main` 分支上的 25 個 PHPUnit 測試失敗。
- 修正了 `blueprint.json` 中的 GitHub 發布 URL 格式。
- 重新編號了任務 ID，以避免與舊 ID 發生衝突。

---

## 1.3.x

_較早版本的更新日誌請參閱外掛儲存庫。_
