---
title: 主題感知技能
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# 主題感知技能

Superdav AI Agent v1.10.0 內建了四種新的主題感知技能，這些技能會自動適應您目前使用的 WordPress 主題。這些技能提供專門的指導和功能，使其能根據您的主題架構和特性進行客製化。

## 什麼是主題感知技能？ {#what-are-theme-aware-skills}

主題感知技能是預先配置的知識庫和工具集，AI 助理會根據您網站目前啟用的 WordPress 主題自動選擇這些技能。當您切換主題時，助理可用的技能也會自動更新——無需手動配置。

每個技能都包含：

- **主題特定文件** — 關於如何使用和客製化主題的指導
- **區塊和模式參考** — 可用的區塊、模式和設計選項
- **客製化範例** — 針對常見任務的程式碼片段和配置模式
- **最佳實踐** — 關於主題架構和工作流程的建議

## 可用的主題感知技能 {#available-theme-aware-skills}

### 區塊主題 (Block Themes) {#block-themes}

**適用對象：** 使用 WordPress 區塊式（全站編輯，Full Site Editing）架構的主題。

區塊主題技能提供以下指導：

- 使用區塊編輯器建立和編輯模板
- 處理區塊模式和可重複使用區塊
- 客製化全域樣式和 `theme.json` 設定
- 使用主題區塊和變體
- 為您的網站建立自訂區塊模式

**自動啟動條件：** 當您的活動主題是區塊主題（支援 `block-templates` 功能）時。

### 經典主題 (Classic Themes) {#classic-themes}

**適用對象：** 使用 PHP 模板和經典編輯器的傳統 WordPress 主題。

經典主題技能提供以下指導：

- 處理 PHP 模板文件和鉤子 (hooks)
- 透過自訂儀表板 (Customizer) 客製化主題外觀
- 使用小工具區域和側邊欄
- 修改 CSS 和子主題開發
- 了解主題層級和模板標籤

**自動啟動條件：** 當您的活動主題是經典（非區塊）主題時。

### Kadence Blocks {#kadence-blocks}

**適用對象：** 使用 Kadence Blocks plugin 進行進階區塊式設計的網站。

Kadence Blocks 技能提供以下指導：

- 使用 Kadence 的進階區塊庫（例如：Hero、Testimonials、Pricing 等）
- 配置 Kadence 區塊設定和響應式選項
- 使用 Kadence 的網格和容器區塊建立自訂佈局
- 將 Kadence 區塊與您的主題整合
- 利用 Kadence 的設計系統和預設值

**自動啟動條件：** 當您的網站啟用了 Kadence Blocks plugin 時。

### Kadence Theme {#kadence-theme}

**適用對象：** 使用 Kadence 主題進行區塊式設計和客製化的網站。

Kadence Theme 技能提供以下指導：

- 透過全域樣式和 `theme.json` 客製化 Kadence 主題
- 使用 Kadence 內建的區塊模式和模板
- 配置 Kadence 主題設定和選項
- 使用 Kadence 的設計系統建立自訂設計
- 將 Kadence 與流行的插件和工具整合

**自動啟動條件：** 當您的活動主題是 Kadence 主題時。

## 技能如何選擇 {#how-skills-are-selected}

助理會在每次訊息時自動偵測您活動的主題和已安裝的插件。如果存在匹配的主題感知技能，它會自動載入到助理的上下文 (context) 中。您無需手動啟用或切換技能。

### 多個技能 {#multiple-skills}

如果您的網站有多個技能適用（例如，您同時啟用了 Kadence Blocks 和 Kadence Theme），助理可以存取所有適用的技能，並可以參考每個技能的指導。

### 切換主題 {#switching-themes}

當您更改活動主題時，助理可用的技能會在下一則訊息時自動更新。舉例來說：

1. 您正在使用一個啟用了 **區塊主題** 技能的區塊主題。
2. 您切換到一個經典主題。
3. 在您的下一則訊息中，**經典主題** 技能會自動載入，而 **區塊主題** 技能將不再可用。

## 使用主題感知技能 {#using-theme-aware-skills}

若要利用主題感知技能，只需在聊天介面中描述您想做的事情即可。助理會自動參考適當技能的指導。

### 範例提示 (Example Prompts) {#example-prompts}

**針對區塊主題：**
> "使用區塊模式建立一個帶背景圖片和置中文字的英雄區塊 (hero section)。"

**針對經典主題：**
> "使用子主題為側邊欄新增一個自訂小工具區域。"

**針對 Kadence Blocks：**
> "使用 Kadence Testimonials 區塊建立一個客戶評價區塊。"

**針對 Kadence Theme：**
> "客製化標頭佈局和導航選單的樣式。"

助理將提供針對您活動主題和插件的特定指導和程式碼範例。

:::note
主題感知技能在 Superdav AI Agent v1.10.0 及更高版本中自動可用。無需額外的設定或配置。
:::
