---
title: WP-CLI 參考資料
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI 參考資料

Gratis AI Agent 提供一個 `wp gratis-ai-agent` 指令群組，用於從命令列執行基準測試（benchmarking）代理程式、管理能力（abilities）和查詢代理程式狀態。所有指令都需要 WP-CLI 2.0 或更高版本。

## 安裝

當此 plugin 啟用時，WP-CLI 指令會自動註冊。請使用以下指令驗證：

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

執行代理程式能力基準測試套件 — 這是一組複雜、多步驟的提示（prompts），用於測試完整的能力範圍。您可以使用此功能來評估模型效能、比較不同的 AI 供應商，或在部署到生產環境前驗證能力包。

### 語法結構 (Synopsis)

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### 選項 (Options)

| 選項 | 說明 |
|---|---|
| `--question=<id>` | 根據 ID 運行單一基準測試問題，而非整個套件 |
| `--provider=<provider>` | 覆蓋本次執行的預設 AI 供應商（例如：`anthropic`、`openai`） |
| `--model=<model>` | 覆蓋本次執行的預設模型（例如：`claude-opus-4-6`、`gpt-4o`） |
| `--output=<format>` | 輸出格式：`table` (預設)、`json`、`csv` |
| `--save` | 將基準測試結果儲存到資料庫，以便進行歷史比較 |

### 範例 (Examples)

使用當前供應商和模型運行完整的基準測試套件：

```bash
wp gratis-ai-agent benchmark
```

運行單一問題（`q-restaurant-website`）並以 JSON 格式輸出：

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

針對特定模型運行並儲存結果：

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### 輸出 (Output)

基準測試會為每個問題輸出一行，包含以下欄位：

| 欄位 | 說明 |
|---|---|
| `ID` | 問題識別碼 |
| `Description` | 基準測試情境的簡短摘要 |
| `Score` | 通過/失敗或數值分數（0–100） |
| `Abilities Used` | 啟用的能力清單（以逗號分隔） |
| `Tokens` | 消耗的總 Token 數 |
| `Duration` | 實際經過時間（秒） |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### 基準測試問題 (Benchmark Questions)

預設套件包含：

| ID | 情境 |
|---|---|
| `q-portfolio-site` | 建立一個帶有專案分類法（Project Category taxonomy）的 Portfolio CPT，並註冊一個區塊模式（block pattern） |
| `q-restaurant-website` | 建立一個包含菜單 CPT、預約表單和導航的完整餐廳網站 |
| `q-dark-mode-theme` | 套用深色模式預設，並注入品牌顏色 |
| `q-nav-builder` | 建立一個包含巢狀下拉選單的四項主要導航選單 |
| `q-options-roundtrip` | 讀取、修改並還原一組 WordPress 選項（options） |
| `q-ability-install` | 根據描述的使用案例，發現並安裝最合適的能力包 |

您也可以透過 `gratis_ai_agent_benchmark_questions` filter 註冊額外的問題。

---

## `wp gratis-ai-agent abilities`

用於管理已安裝的能力和能力包。

### `wp gratis-ai-agent abilities list`

列出所有已註冊的能力、它們的來源（核心或能力包），以及它們目前的狀態。

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**選項 (Options)**

| 選項 | 說明 |
|---|---|
| `--format=<format>` | 輸出格式：`table` (預設)、`json`、`csv` |

**範例輸出 (Example output)**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install`

從註冊表下載並啟用一個能力包。

```bash
wp gratis-ai-agent abilities install <slug>
```

**參數 (Arguments)**

| 參數 | 說明 |
|---|---|
| `<slug>` | 能力包的 plugin slug，例如：`gratis-ai-agent-woocommerce` |

**範例 (Example)**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

停用特定的能力，但不會移除該能力包。這對於限制代理程式在特定網站上的作用範圍非常有用。

```bash
wp gratis-ai-agent abilities disable <ability>
```

**範例 (Example)**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

重新啟用先前停用的能力。

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

顯示目前的代理程式配置和連線狀態。

```bash
wp gratis-ai-agent status
```

**範例輸出 (Example output)**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs`

顯示來自除錯日誌的近期代理程式活動。

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**選項 (Options)**

| 選項 | 說明 |
|---|---|
| `--last=<n>` | 顯示最近 N 筆日誌記錄。預設為 `50` |
| `--level=<level>` | 依級別過濾：`info`、`warning`、`error` |
| `--ability=<ability>` | 依能力名稱過濾 |

**範例 (Example)**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

重置代理程式狀態：清除注入的 CSS、移除代理程式註冊的 CPT 和分類法、重置全域樣式，並清空代理程式的選項快取。此操作不會移除 plugin 或其設定。

```bash
wp gratis-ai-agent reset [--yes]
```

新增 `--yes` 參數可跳過確認提示。

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## 退出碼 (Exit Codes)

所有指令成功時退出碼為 `0`。非零退出碼：

| Code | 意義 |
|---|---|
| `1` | 一般錯誤（請參閱錯誤訊息） |
| `2` | 供應商連線失敗 |
| `3` | 找不到能力 (Ability not found) |
| `4` | 找不到基準測試問題 (Benchmark question not found) |
