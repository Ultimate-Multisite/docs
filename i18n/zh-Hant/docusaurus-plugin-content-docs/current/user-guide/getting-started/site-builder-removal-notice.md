---
title: 網站建構模式移除通知
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# 網站建構模式移除通知 {#site-builder-mode-removal-notice}

**Superdav AI Agent v1.12.0 版本已移除 Site Builder 模式。** 如果您之前使用過 Site Builder 模式，建議您轉移到 **Setup Assistant agent** 來進行主題創建和網站設定。

## 發生了什麼事？ {#what-happened}

### Site Builder 模式（舊版） {#site-builder-mode-legacy}

Site Builder 模式是一個基於嚮導式介面（wizard-based interface）的工具，用於：

- 從範本創建網站
- 配置基本設定
- 選擇主題
- 設定初始內容

### 取代它的是什麼？ {#what-replaced-it}

**Setup Assistant agent** 現在負責處理所有 Site Builder 的功能，它具備：

- 更靈活、由代理引導的設定流程
- 更完善的主題自訂選項
- 與 Theme Builder 入門流程的整合
- 儲存持久的 `site_brief` 記憶體，供未來使用

## 如果您使用過 Site Builder 模式 {#if-you-were-using-site-builder-mode}

### 您的網站是安全的 {#your-sites-are-safe}

- 使用 Site Builder 模式創建的現有網站仍可正常運作
- 不會造成資料遺失或網站中斷
- 您可以像往常一樣管理您的網站

### 轉移到 Setup Assistant Agent {#migrate-to-setup-assistant-agent}

對於新的網站設定或主題變更，請使用 Setup Assistant agent：

```
"Help me set up a new site"
```

或

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent 提供了相同的功能，但更具彈性。

## 比較：Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| 功能 | Site Builder (已移除) | Setup Assistant (新版) |
|---------|----------------------|----------------------|
| 設定方式 | 嚮導式表單 | 代理對話 |
| 主題選擇 | 預定義範本 | 客製化生成 |
| 自訂程度 | 選項有限 | 完整的設計系統 |
| 網站概要 | 不儲存 | 持久記憶體 |
| 未來會話 | 重複設定 | 使用儲存的 site_brief |
| 彈性度 | 固定工作流程 | 適應性對話 |

## 轉移到 Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### 針對新網站 {#for-new-sites}

取代使用 Site Builder 模式：

1. 提出請求：「Help me set up a new site」
2. Setup Assistant agent 將引導您完成以下步驟：
   - 網站目的和目標
   - 目標受眾
   - 品牌識別
   - 主題生成
   - 初始配置

### 針對現有網站 {#for-existing-sites}

如果您有一個使用 Site Builder 模式創建的現有網站：

1. 您可以保持現狀繼續使用
2. 若要更新主題，請提出請求：「Redesign my site」
3. Setup Assistant agent 將協助您創建一個新的主題
4. 您的網站資料將保持不變

### 針對主題變更 {#for-theme-changes}

取代 Site Builder 模式的主題選擇：

1. 提出請求：「Change my theme」
2. Setup Assistant agent 將：
   - 詢問您的設計偏好
   - 生成一個客製化主題
   - 將其啟用到您的網站上

## 主要差異 {#key-differences}

### Site Builder 模式 {#site-builder-mode}

```
1. 選擇一個範本
2. 選擇一個主題
3. 配置基本設定
4. 完成
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. 描述網站的用途
2. 定義目標受眾
3. 選擇設計偏好
4. 代理生成客製化主題
5. 代理啟用主題
6. 網站概要儲存，供未來會話參考
```

## Setup Assistant Agent 的優點 {#benefits-of-setup-assistant-agent}

### 更具彈性 {#more-flexible}

- 您可以用自然語言描述您的網站
- 獲得客製化的建議
- 能適應您的特定需求

### 更佳的自訂性 {#better-customization}

- 客製化主題生成
- 設計系統決策
- 持久化的設計 Token

### 持久記憶體 {#persistent-memory}

- 您的 `site_brief` 會被儲存
- 未來的代理會了解您的網站背景
- 無需重複提供設定資訊

### 整合工作流程 {#integrated-workflow}

- Theme Builder 入門流程
- Design System Aesthetics skill
- Ability Visibility controls
- 所有功能無縫協作

## 疑難排解 {#troubleshooting}

### 我找不到 Site Builder 模式 {#i-cant-find-site-builder-mode}

Site Builder 模式已經移除。請改用 Setup Assistant agent：

```
"Help me set up a new site"
```

### 我想用 Site Builder 重新創建一個網站 {#i-want-to-recreate-a-site-from-site-builder}

您可以使用 Setup Assistant agent 重新創建它：

1. 提出請求：「Help me set up a new site」
2. 描述您原始網站的用途和設計
3. 代理將生成一個相似的主題
4. 您的 `site_brief` 將會被儲存，供未來參考

### 我的現有 Site Builder 網站無法使用 {#my-existing-site-builder-site-isnt-working}

使用 Site Builder 模式創建的現有網站仍可正常運作。如果您遇到問題：

1. 確認您的主題是否仍然啟用
2. 驗證您的 plugins 是否已啟用
3. 檢查 WordPress 錯誤日誌
4. 如果問題持續存在，請聯繫支援人員

### 我還能使用我舊的 Site Builder 範本嗎？ {#can-i-still-use-my-old-site-builder-templates}

Site Builder 範本已不再提供。不過：

- 您現有的網站仍可正常運作
- 您可以使用 Setup Assistant agent 重新創建類似的網站
- Setup Assistant agent 提供了更多自訂選項

## 後續步驟 {#next-steps}

1. **針對新網站**：使用 Setup Assistant agent
2. **針對現有網站**：繼續保持現狀使用
3. **針對主題變更**：向 Setup Assistant agent 尋求協助
4. **針對設計精修**：使用 Design System Aesthetics skill

## 相關主題 {#related-topics}

- **Theme Builder Onboarding**：客製化主題的引導式設定
- **Setup Assistant Agent**：代理引導的網站設定
- **Site Specification Skill**：定義網站的目標和受眾
- **Design System Aesthetics Skill**：精修網站的視覺識別度
