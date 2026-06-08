---
title: 驗證色盤對比度
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# 驗證調色盤對比度

**驗證調色盤對比度**功能會檢查您設計調色盤中的顏色組合，以確保其符合 WCAG（網頁內容無障礙指南）標準，然後再將這些顏色應用到您的主題上。

## 概述

此功能透過驗證文字與背景顏色之間的對比度比，確保您的網站配色方案符合無障礙標準。這有助於避免那些對視力受損用戶難以閱讀的顏色組合。

## 輸入格式

此功能接受一個顏色調色盤作為輸入：

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### 參數

| 參數 | 類型 | 是否必要 | 描述 |
|-----------|------|----------|-------------|
| `colors` | array | 是 | 包含 `name` 和 `hex` 屬性的顏色物件陣列 |
| `wcag_level` | string | 否 | WCAG 符合度等級：「A」、「AA」（預設），或「AAA」 |
| `pairs_to_check` | array | 否 | 需要驗證的特定顏色組合（例如：`["primary-text", "background-text"]`） |

## 檢查的 WCAG 等級

此功能會根據 WCAG 標準來驗證對比度比：

| 等級 | 一般文字 | 大文字 | 最低比率 |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **一般文字** — 小於 18pt（或 14pt 粗體）的文字
- **大文字** — 18pt 或更大的文字（或 14pt 粗體或更大）

## 輸出結構

此功能會回傳一份詳細的驗證報告：

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### 輸出欄位

| 欄位 | 類型 | 描述 |
|-------|------|-------------|
| `compliant` | boolean | 整個調色盤是否符合指定的 WCAG 等級 |
| `wcag_level` | string | 檢查的 WCAG 等級 |
| `pairs` | array | 每個顏色組合的詳細結果 |
| `contrast_ratio` | number | 計算出的對比度比（範圍為 1:1 到 21:1） |
| `status` | string | 每個組合的狀態，為 "pass" 或 "fail" |
| `recommendations` | array | 改善失敗組合的建議 |

## 使用範例

**提示：**
```
請檢查我的配色方案是否符合 WCAG AA 標準。我有主色 #678233、文字色 #ffffff，以及背景色 #f5f5f5。
```

**結果：**
此功能會驗證所有顏色組合並回傳：
- ✅ 主色 + 文字：5.2:1 比率（符合 WCAG AA）
- ✅ 背景 + 文字：12.1:1 比率（符合 WCAG AAA）
- 總體：符合 WCAG AA 標準

## 與主題建立器整合

當您使用 Theme Builder 的設計方向選擇功能時，驗證調色盤對比度功能會：

1. 分析您選擇的顏色調色盤
2. 檢查所有文字與背景的組合
3. 根據您選擇的 WCAG 等級進行驗證
4. 為不符合標準的組合提供建議
5. 防止應用無法存取的配色方案

## 最佳實踐

- **從 AA 等級開始** — WCAG AA 是大多數網站的標準
- **應用前進行測試** — 在確定設計前，先驗證您的調色盤
- **檢查所有組合** — 確保文字、連結和 UI 元素都符合標準
- **考慮用戶偏好** — 有些用戶可能會有額外的顏色敏感度
- **使用對比度檢查器** — 將此功能與瀏覽器工具結合使用以進行驗證

## 失敗組合與建議

如果某個顏色組合驗證失敗，此功能會提供建議：

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "將文字顏色調亮至 #ffffff（比率將為 5.2:1）",
    "將背景顏色調暗至 #556b2f（比率將為 4.8:1）",
    "使用不同的主色，例如 #4a6b1f（比率將為 6.1:1）"
  ]
}
```

## 相關功能

- [Generate Logo SVG](./generate-logo-svg.md) — 使用您驗證過的調色盤創建 Logo
- [Create Menu](./create-menu.md) — 使用無障礙顏色建立導航菜單
