---
title: 主題建立者入門流程
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder 入門流程 {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 引入了引導式的 **Theme Builder 入門流程**，這可以在您首次設定時幫助您建立客製化的區塊主題 (block theme)。這取代了舊版的 Site Builder 模式，採用了更靈活、由 AI Agent 輔助的方式。

## 什麼是 Theme Builder 入門流程？ {#what-is-the-theme-builder-onboarding-flow}

Theme Builder 入門流程是一個互動式的設定嚮導，它會：

- 引導您完成設計決策（顏色、字體、版面配置）
- 捕捉您網站的視覺識別偏好
- 根據您的需求生成客製化的區塊主題
- 完成後自動啟用該主題

此流程由 **Setup Assistant agent** 驅動，它會提出澄清問題，並逐步為您建立主題。

## 開始 Theme Builder 入門流程 {#starting-the-theme-builder-onboarding}

### 首次運行設定 {#first-run-setup}

當您在新的 WordPress 安裝上首次啟動 Superdav AI Agent 時，您會看到：

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

請選擇 **"Build a custom theme"**，即可進入 Theme Builder 入門流程。

### 手動啟用 {#manual-activation}

您也可以隨時透過要求以下指令來啟動 Theme Builder 入門流程：

```
"Start the Theme Builder onboarding"
```

或

```
"Help me create a custom theme"
```

## 入門步驟 {#the-onboarding-steps}

### 步驟 1：模式選擇 {#step-1-mode-selection}

Setup Assistant agent 會詢問您的偏好：

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

對於大多數使用者，建議使用 **Guided mode**；此時 Agent 會根據您的行業和目標提供設計建議。

### 步驟 2：網站規格 {#step-2-site-specification}

系統會詢問您的網站相關資訊：

- **Site purpose**（網站用途）：電子商務、部落格、作品集、SaaS 等。
- **Target audience**（目標受眾）：您的訪客是誰？
- **Brand colors**（品牌顏色）：主色和輔色（或「我不確定」）
- **Tone**（語氣）：專業、創意、活潑、極簡等。

這些資訊會儲存在您的 **site_brief** 記憶體中，Agent 在未來的會話中會參考此資料。

### 步驟 3：設計系統決策 {#step-3-design-system-decisions}

Agent 會引導您完成設計代幣 (design token) 的選擇：

- **Typography**（字體）：字體家族（襯線字體、無襯線字體、等寬字體）和字體大小比例
- **Color palette**（顏色組合）：主色、輔色、強調色和中性色
- **Spacing**（間距）：緊湊、正常或寬鬆的版面配置
- **Motion**（動態）：動畫和過渡效果（如果需要）

### 步驟 4：主題生成 {#step-4-theme-generation}

Setup Assistant agent 會使用以下內容為您的客製化區塊主題建立骨架：

- `theme.json`，其中包含所有設計代幣
- 常用版面配置的區塊模板（首頁、部落格、聯絡頁）
- 與您的設計系統匹配的自訂區塊樣式
- 主題元資料和 WordPress 支援聲明

### 步驟 5：啟用與驗證 {#step-5-activation-and-verification}

主題會自動啟用，您會看到：

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

之後您可以造訪您的網站，驗證主題是否顯示正確。

## 網站規格與 site_brief 記憶體 {#site-specification-and-sitebrief-memory}

在入門過程中，Agent 會將您的網站規格捕獲到 **site_brief** 記憶類別中。這包括：

- 網站用途和目標
- 目標受眾
- 品牌顏色和語氣
- 設計偏好
- 內容結構

### 為什麼 site_brief 很重要 {#why-sitebrief-matters}

在未來的會話中，Agent 會參考您的 site_brief 來：

- 在變動中保持設計一致性
- 建議與網站用途一致的功能
- 提供具備情境意識的建議
- 避免重複詢問設定問題

### 查看您的 site_brief {#viewing-your-sitebrief}

您可以要求 Agent：

```
"Show me my site brief"
```

或

```
"What do you know about my site?"
```

Agent 將會顯示您儲存的網站規格。

## 入門後客製化 {#customizing-after-onboarding}

完成 Theme Builder 入門流程後，您可以：

### 使用 Design System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

要求設計細節的調整：

```
"Refine the typography to be more modern"
```

或

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** 會引導您進行有針對性的設計更新。

### 直接編輯 theme.json {#edit-themejson-directly}

對於進階使用者，請編輯 `/wp-content/themes/[theme-name]/theme.json` 來調整：

- 顏色代幣 (Color tokens)
- 字體比例 (Typography scales)
- 間距值 (Spacing values)
- 邊框和陰影定義 (Border and shadow definitions)

### 建立自訂區塊模板 {#create-custom-block-templates}

使用 WordPress 區塊編輯器為以下內容建立自訂模板：

- 首頁版面配置
- 部落格文章頁面
- 產品頁面
- 聯絡表單

## 比較：舊版 vs. 新版入門流程 {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## 疑難排解 {#troubleshooting}

**入門流程沒有完成**
- 重新啟動流程：「Start the Theme Builder onboarding」
- 檢查您的 WordPress 安裝是否已更新到最新版本
- 確認 Setup Assistant agent 已啟用

**我的 site_brief 沒有被使用**
- 確認 Agent 是否有權限存取記憶體 (memory)
- 要求 Agent 「recall my site brief」
- 檢查您的設定中是否已啟用記憶體功能

**生成的主題與我的偏好不符**
- 使用 Design System Aesthetics skill 進行細節調整
- 要求 Agent 「regenerate the theme with [specific changes]」
- 直接編輯 theme.json 以獲得精確控制

## 下一步 {#next-steps}

完成 Theme Builder 入門流程後：

1. **驗證您的網站**：造訪您的網站，查看新的主題
2. **精修設計**：使用 Design System Aesthetics skill 進行調整
3. **新增內容**：開始建立網站內容
4. **探索功能**：了解其他 Agent 功能，例如 scaffold-block-theme 和 activate-theme
