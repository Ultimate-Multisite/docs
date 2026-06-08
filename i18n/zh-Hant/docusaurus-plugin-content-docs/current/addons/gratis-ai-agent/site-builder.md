---
title: 網站建構器協調 v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# 網站建構協調 v2

網站建構協調 v2（在 Gratis AI Agent v1.4.0 中引入）是驅動多步驟網站創建的引擎。當您要求代理「建立一家餐廳網站」或「創建一個帶部落格的作品集」時，協調器會將這個高層目標分解成一個結構化的**計畫**，找出完成它所需的外掛，依序執行每個步驟，追蹤進度，並能自主從錯誤中恢復。

---

## 工作原理

### 1. 計畫生成

當代理收到網站建構指令時，它會呼叫 `create_site_plan` 功能來產生一個 JSON **網站計畫**。該計畫描述了：

- **目標 (Goal)** — 最終網站應該具備的功能
- **階段 (Phases)** — 步驟的有序分組（例如：_設定_、_內容類型_、_設計_、_內容_）
- **步驟 (Steps)** — 每個階段內單獨的功能呼叫
- **外掛需求 (Plugin requirements)** — 某些步驟運行必須啟用外掛
- **備用方案 (Fallbacks)** — 如果主要步驟失敗時的替代步驟

**範例計畫（簡化版）**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "建立一個帶線上菜單、預約表單和聯絡頁面的餐廳網站",
  "phases": [
    {
      "id": "setup",
      "label": "設定",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "菜單項目", "plural_label": "菜單項目" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "菜單區塊", "plural_label": "菜單區塊", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "設計",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "導航",
      "steps": [
        { "ability": "create_menu", "params": { "name": "主要導航", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "菜單", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "預約餐桌", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "預約和聯絡表單所需" }
  ]
}
```

### 2. 外掛發現

在執行開始之前，協調器會掃描計畫中的 `plugin_requirements`，並檢查哪些外掛已經啟用。對於缺少的外掛，它會：

1. 透過 `recommend_plugin` 查詢註冊表，尋找最佳匹配。
2. 提示代理確認此建議。
3. 如果獲批（或如果設定中啟用了自動安裝），則觸發安裝。

外掛發現失敗並不會導致致命錯誤 — 協調器會將受影響的步驟標記為 `skipped`（跳過），並繼續執行計畫的其餘部分。

### 3. 計畫執行

協調器會使用計畫 ID 呼叫 `execute_site_plan`。執行會按階段、按步驟進行：

- **步驟引用** (`__ref:` 前綴) — 步驟可以引用先前步驟的輸出。在上面的範例中，`__ref:create_menu.menu_id` 會被解析為 `create_menu` 步驟返回的 `menu_id`。
- **平行步驟** — 同一個階段內、沒有相互依賴性的步驟，在設定了 `parallel` 旗標時會同時發送執行。
- **步驟超時** — 每個步驟都有獨立的超時時間（預設為 `Ability Timeout` 設定）。超時的步驟會被標記為 `failed`（失敗），但計畫會繼續執行。

### 4. 進度追蹤

隨時呼叫 `get_plan_progress` 來檢查執行狀態：

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

WP-CLI 使用者可以使用以下指令監控進度：

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. 錯誤恢復

當一個步驟失敗時，協調器會檢查計畫中是否定義了**備用方案**：

- **有備用方案** — 會立即嘗試備用步驟。如果成功，執行會繼續。如果備用步驟也失敗了，該步驟會被標記為 `failed`，但執行會繼續到下一個步驟。
- **無備用方案** — 該步驟會被標記為 `failed`。非關鍵步驟會被跳過；關鍵步驟（標記為 `required: true`）會暫停當前階段，並觸發階段級別的恢復嘗試。

代理會在最終的計畫摘要中報告所有失敗，並可能為無法恢復的錯誤建議手動修復步驟。

---

## 網站計畫功能 (Site Plan Abilities)

### `create_site_plan`

根據自然語言的目標描述，生成結構化的網站計畫。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | 期望網站的自然語言描述 |
| `style` | string | No | 視覺風格偏好：`minimal`、`bold`、`professional`、`playful`。預設：代理根據目標選擇 |
| `plugins` | array | No | 要包含在計畫中的外掛 slug。協調器會自動新增所需外掛。 |
| `dry_run` | boolean | No | 如果為 `true`，則返回計畫 JSON，但不會儲存或執行它。預設 `false` |

**回傳值** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

開始執行先前生成的網站計畫。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 要執行的計畫 ID |
| `auto_install_plugins` | boolean | No | 如果為 `true`，則自動安裝所需外掛，無需確認。預設 `false` |
| `max_retries` | integer | No | 在移動到下一個步驟之前，重試失敗步驟的次數。預設 `1` |

**回傳值** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

回傳網站計畫目前的執行狀態。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 要查詢的計畫 ID |

**回傳值** 參閱上方 [進度追蹤](#4-進度追蹤) 描述的進度物件。

---

### `handle_plan_error`

手動解決失敗的步驟，並從下一個步驟恢復計畫執行。當自動恢復不可行，且您需要介入時使用此功能。

**參數**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 計畫 ID |
| `step_id` | string | Yes | 失敗步驟的 ID |
| `resolution` | string | Yes | 選擇 `skip`（跳過並繼續）、`retry`（立即重試步驟），或 `mark_done`（視為成功，無需重新運行） |

**回傳值** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 與 v2 的比較

| Feature | v1 | v2 |
|---|---|---|
| 多階段計畫 | No | Yes |
| 步驟輸出引用 (`__ref:`) | No | Yes |
| 外掛發現 | 手動 | 自動 |
| 進度追蹤 API | No | Yes |
| 錯誤恢復 | 失敗即停止 | 備用方案 + 繼續 |
| 平行步驟執行 | No | Yes (每個階段可選) |
| WP-CLI 計畫指令 | No | Yes |
| 基準測試整合 | No | Yes (`q-restaurant-website`) |

---

## WP-CLI 計畫指令

### `wp gratis-ai-agent plan create`

根據目標描述生成網站計畫。

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

執行先前生成的計畫。

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

顯示正在執行或已完成計畫的當前進度。

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

列出所有網站計畫（待處理、進行中和已完成）。

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

將失敗的計畫重置為 `pending` 狀態，以便從頭開始重新執行。

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
