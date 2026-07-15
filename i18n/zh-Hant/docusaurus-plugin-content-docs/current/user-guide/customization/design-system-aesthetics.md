---
title: 設計系統美學技能
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# 設計系統美學技能

**設計系統美學技能**是一個引導式的流程，旨在完善您網站的視覺識別度。它能幫助您在字體排版、色彩、間距和動態效果（motion tokens）等定義設計系統的元素上，做出一致的決策。

## 什麼是設計系統美學？ {#what-is-design-system-aesthetics}

設計系統美學是一個結構化的技能，涵蓋以下幾個方面：

- **字體排版 (Typography)**：字體家族、字體大小、字重和行高
- **色彩 (Color)**：主色、輔色、強調色和中性色調
- **間距 (Spacing)**：內邊距 (Padding)、外邊距 (Margin) 和間隙 (Gap) 比例
- **邊框 (Borders)**：圓角和寬度代碼標記 (tokens)
- **陰影 (Shadows)**：提升度和深度代碼標記
- **動態效果 (Motion)**：動畫和過渡效果

這些決策會被記錄在您主題的 `theme.json` 檔案中，從而建立一個協調一致的視覺系統。

## 為什麼要使用設計系統美學？ {#why-use-design-system-aesthetics}

### 一致性 (Consistency) {#consistency}

設計系統確保了：

- 所有文字都使用相同的字體排版比例
- 色彩在整個網站上使用得一致
- 間距遵循可預測的模式
- 動畫效果感覺統一流暢

### 效率 (Efficiency) {#efficiency}

您不必為每個頁面單獨做設計決策，而是可以：

- 只定義一次代碼標記 (tokens)
- 在所有地方應用這些代碼標記
- 透過修改一個數值來進行全局更新

### 彈性 (Flexibility) {#flexibility}

您可以：

- 快速調整整個設計系統
- 嘗試不同的美學風格
- 在不斷發展的同時，維持品牌的一致性

## 觸發設計系統美學技能 {#triggering-the-design-system-aesthetics-skill}

### 手動啟動 {#manual-activation}

您隨時都可以啟動此技能：

```
"Help me refine my design system"
```

或

```
"Let's improve my site's aesthetics"
```

或

```
"Guide me through design system decisions"
```

### 自動建議 {#automatic-suggestions}

當您執行以下操作時，系統可能會建議使用此技能：

- 詢問設計更改
- 要求進行「現代」或「專業」的重新設計
- 希望提升視覺一致性
- 準備發布網站時

## 設計系統美學流程 {#the-design-system-aesthetics-process}

### 步驟 1：字體排版 (Typography) {#step-1-typography}

系統會詢問您的字體選擇：

```
您偏好的字體排版風格是什麼？
- 襯線體 (Serif) (傳統、優雅)
- 無襯線體 (Sans-serif) (現代、簡潔)
- 等寬字 (Monospace) (技術、程式碼相關)

關於您的標題字體：
- 您是否想要一個獨立的標題字體，還是使用與內文相同的字體？
- 偏好：粗體、優雅、活潑、極簡？

關於您的內文字體：
- 可讀性是關鍵。您偏好：
  - 字體較大、間距較寬的文字
  - 緊湊、高效的文字
  - 標準尺寸的文字
```

接著，系統會定義：

- **標題字體 (Heading font)**：用於標題和區塊標題的主要字體
- **內文字體 (Body font)**：用於段落和內文的字體
- **等寬字 (Monospace font)**：用於程式碼和技術內容的字體
- **尺寸比例 (Size scale)**：預定義的尺寸（小、基礎、大、XL 等）
- **字重比例 (Weight scale)**：字體字重（常規、中等、粗體等）
- **行高 (Line height)**：用於提高可讀性的行間距

### 步驟 2：色彩調色盤 (Color Palette) {#step-2-color-palette}

```
讓我們定義您的色彩調色盤。

主色 (Primary color) (您的品牌色)：
- 目前：[顯示現有顏色]
- 更改為：[顏色選擇器或十六進制代碼]

輔色 (Secondary color) (支持性顏色)：
- 目前：[顯示現有顏色]
- 更改為：[顏色選擇器或十六進制代碼]

強調色 (Accent color) (亮點和 CTA)：
- 目前：[顯示現有顏色]
- 更改為：[顏色選擇器或十六進制代碼]

中性色調 (Neutral palette) (用於文字、邊框、背景的灰色)：
- 淺色 (Light)：[顏色]
- 中等色 (Medium)：[顏色]
- 深色 (Dark)：[顏色]
```

系統會建立一個完整的調色盤，包括：

- 主色、輔色和強調色
- 中性灰色（淺色、中等色、深色）
- 語義色（成功、警告、錯誤）
- 懸停 (Hover) 和啟用 (Active) 狀態

### 步驟 3：間距 (Spacing) {#step-3-spacing}

```
您想要多少呼吸空間？

間距比例偏好：
- 緊湊 (Compact) (緊密、高效的佈局)
- 標準 (Normal) (平衡的間距)
- 寬敞 (Spacious) (慷慨的留白)

這會影響：
- 按鈕和卡片內部的內邊距 (Padding)
- 區塊之間的外邊距 (Margins)
- 網格項目之間的間隙 (Gap)
```

系統會定義間距代碼標記：

- 基礎單位 (Base unit)（通常是 4px 或 8px）
- 比例：xs, sm, md, lg, xl, 2xl
- 用於內邊距、外邊距和間隙的具體數值

### 步驟 4：邊框和陰影 (Borders and Shadows) {#step-4-borders-and-shadows}

```
視覺深度和定義：

圓角偏好 (Border radius)：
- 銳利 (Sharp) (無圓角)
- 細微 (Subtle) (小圓角)
- 圓潤 (Rounded) (中等圓角)
- 極圓 (Very rounded) (大圓角)

陰影深度 (Shadow depth)：
- 平面 (Flat) (無陰影)
- 細微 (Subtle) (輕微陰影)
- 顯著 (Pronounced) (強烈陰影)
```

系統會建立：

- 邊框圓角代碼標記（用於按鈕、卡片、輸入框）
- 用於提升等級的陰影代碼標記
- 邊框寬度代碼標記

### 步驟 5：動態效果和動畫 (Motion and Animation) {#step-5-motion-and-animation}

```
當網站進行互動時，您希望它感覺如何？

動畫偏好：
- 極簡 (Minimal) (無動畫)
- 細微 (Subtle) (柔和的過渡效果)
- 活潑 (Playful) (可察覺的動畫)

特定動畫：
- 頁面過渡：淡入、滑入，還是無？
- 按鈕懸停：縮放、變色，還是兩者都做？
- 載入狀態：旋轉動畫、骨架屏，還是進度條？
```

系統會定義：

- 過渡持續時間（快、標準、慢）
- 彈性函數 (Easing functions)（ease-in, ease-out, ease-in-out）
- 用於常見互動的動畫關鍵幀 (keyframes)

## 應用設計系統美學 {#applying-design-system-aesthetics}

### 自動應用 {#automatic-application}

完成此技能後，系統會：

1. 將所有代碼標記更新到您主題的 `theme.json`
2. 將設計系統應用到您當前的主題
3. 重新生成區塊樣式以匹配新的系統
4. 啟用更新後的主題

### 手動應用 {#manual-application}

您也可以直接編輯 `theme.json`：

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## 查看您的設計系統 {#viewing-your-design-system}

### 詢問系統 {#ask-the-agent}

```
"Show me my design system"
```

或

```
"What are my current design tokens?"
```

系統將會顯示您的字體排版、色彩、間距和其他代碼標記。

### 查看 theme.json {#view-themejson}

請在文字編輯器中開啟 `/wp-content/themes/[theme-name]/theme.json`，即可查看原始的代碼標記定義。

## 更新您的設計系統 {#updating-your-design-system}

### 快速更新 {#quick-updates}

詢問系統進行特定更改：

```
"Make the primary color darker"
```

或

```
"Increase the spacing scale by 20%"
```

或

```
"Change the heading font to a serif"
```

### 全面重新設計 {#full-redesign}

重新執行設計系統美學技能：

```
"Let's redesign my entire design system"
```

這將引導您再次完成所有決策，從您當前的數值開始。

### 部分更新 {#partial-updates}

只更新特定方面：

```
"Just update the color palette, keep everything else"
```

## 設計系統最佳實踐 {#design-system-best-practices}

### 一致性 {#consistency-1}

- 在所有地方使用相同的代碼標記
- 不要創建一次性的顏色或尺寸
- 引用代碼標記，而不是硬編碼數值

### 命名 {#naming}

使用清晰、語義化的名稱：

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### 可擴展性 (Scalability) {#scalability}

設計您的系統使其具備擴展性：

- 使用相對單位 (rem, em) 而非像素 (pixels)
- 創建比例尺 (scales) (xs, sm, md, lg, xl) 而非任意數值
- 為未來的增補做好規劃

### 文件化 (Documentation) {#documentation}

記錄您的設計系統：

- 您選擇特定顏色的原因
- 何時使用每個代碼標記
- 例外情況和邊緣案例

## 常見設計系統模式 {#common-design-system-patterns}

### 現代極簡風 (Modern Minimalist) {#modern-minimalist}

- 無襯線體字體排版 (Inter, Helvetica)
- 有限的色彩調色盤 (2-3 種顏色)
- 寬敞的間距
- 細微的陰影
- 流暢、快速的動畫

### 溫暖友善風 (Warm and Friendly) {#warm-and-friendly}

- 襯線體和無襯線體的混合搭配
- 溫暖的色彩調色盤（橘色、暖灰色）
- 圓角
- 柔和的陰影
- 活潑的動畫

### 專業企業風 (Professional Corporate) {#professional-corporate}

- 簡潔的無襯線體 (Roboto, Open Sans)
- 帶有強調色的中性調色盤
- 結構化的間距
- 極簡的陰影
- 細微的過渡效果

### 創意大膽風 (Creative and Bold) {#creative-and-bold}

- 獨特的字體排版
- 大膽的色彩調色盤
- 多樣化的間距
- 強烈的陰影
- 可察覺的動畫

## 故障排除 (Troubleshooting) {#troubleshooting}

**我的設計系統更改沒有顯示**
- 清除瀏覽器快取
- 如果使用靜態生成器，請重建您的網站
- 檢查 `theme.json` 是否為有效的 JSON
- 確認主題是否已啟用

**不同頁面上的顏色看起來不同**
- 檢查插件中是否有衝突的 CSS
- 確認所有頁面是否使用相同的主題
- 清除任何快取插件

**我想恢復到以前的設計系統**
- 詢問系統：「Show me my design system history」
- 手動編輯 `theme.json` 以恢復到舊值
- 使用不同的選擇重新執行此技能

## 下一步 (Next Steps) {#next-steps}

定義完設計系統後：

1. **審閱您的網站**：造訪您的網站，查看新的設計
2. **進一步完善**：再次使用此技能進行調整
3. **創建模板**：使用您的設計代碼標記建立自定義區塊模板
4. **文件化**：與團隊成員分享您的設計系統
