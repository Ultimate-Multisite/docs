---
title: 生成 Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# 生成 Logo SVG

**生成 Logo SVG** 功能讓 Theme Builder 能夠直接在您的 WordPress 網站中建立並嵌入自訂的 Logo SVG，並自動進行命名空間安全的清理。

## 概述 {#overview}

此功能會根據您網站的品牌方向和設計偏好，生成可縮放的向量圖形（SVG）Logo。生成的 SVG 會自動進行清理，確保它們在 WordPress 中使用時是安全的，同時仍能保持視覺完整性。

## 參數 {#parameters}

| 參數 | 類型 | 是否必要 | 描述 |
| :--- | :--- | :--- | :--- |
| `site_name` | string | 是 | 用於生成 Logo 的網站名稱 |
| `style` | string | 是 | 設計風格（例如：「現代」、「經典」、「極簡」、「活潑」） |
| `colors` | array | 否 | 用於 Logo 的十六進制顏色代碼陣列（例如：`["#678233", "#ffffff"]`） |
| `width` | number | 否 | SVG 寬度（單位：像素，預設值：200） |
| `height` | number | 否 | SVG 高度（單位：像素，預設值：200） |
| `include_text` | boolean | 否 | 是否在 Logo 中包含網站名稱作為文字（預設值：true） |

## 輸出格式 {#output-format}

此功能會回傳一個 SVG 字串，結構如下：

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG 清理行為 {#svg-sanitisation-behaviour}

生成的 SVG 會經過自動的命名空間安全清理，以達到以下目的：

- **移除不安全的屬性** — 移除事件處理器、腳本和潛在危險的屬性
- **保留命名空間** — 維護 SVG 命名空間（xmlns, xlink），以確保正確渲染
- **驗證結構** — 確保 SVG 符合 W3C 標準
- **編碼實體** — 正確轉義文字內容中的特殊字元
- **移除外部引用** — 移除外部樣式表和圖片引用

這確保了 SVG 可以直接嵌入 WordPress，而無需額外的清理步驟。

## 使用範例 {#usage-example}

**提示：**
```
為我的科技新創公司 "CloudSync" 生成一個使用藍色和白色顏色的現代 Logo。
```

**結果：**
此功能會創建一個 SVG Logo，該 Logo：
- 融入了網站名稱 "CloudSync"
- 使用了指定的藍色和白色配色方案
- 遵循現代設計原則
- 已經自動清理，可直接使用

## 與 Theme Builder 的整合 {#integration-with-theme-builder}

當使用 Theme Builder 的設計方向選擇功能時，生成 Logo SVG 功能會：

1. 分析您的設計方向和配色方案
2. 生成與您的偏好相符的自訂 SVG Logo
3. 自動將 Logo 嵌入到您網站的標頭/品牌區域
4. 將 SVG 作為自訂 Logo 儲存到 WordPress 媒體庫

## 最佳實踐 {#best-practices}

- **提供清晰的風格偏好** — 描述您想要的設計風格（現代、經典、活潑等）
- **指定顏色** — 包含您的品牌顏色，以保持一致性
- **測試渲染** — 驗證 Logo 在不同螢幕尺寸上顯示是否正確
- **進一步自訂** — 使用 WordPress 的 Logo 自訂工具來調整大小和位置

## 限制 {#limitations}

- SVG Logo 是以靜態圖形生成的（非動畫）
- 元素複雜的 Logo 可能需要手動修飾
- 不支援自訂字體；文字會使用系統字體
- 尺寸過大或過小的尺寸可能會影響品質

## 相關功能 {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — 檢查顏色對比度以確保無障礙性
- [Create Menu](./create-menu.md) — 為您的網站創建導航選單
