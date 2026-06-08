---
title: 建立選單
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# 建立選單

**建立選單** 功能可以建立 WordPress 導航選單，並且支援與頁面標題不同的獨立導航標籤。

## 概述

此功能擴展了標準的選單建立功能，增加了指定 `navigation_label` 參數的能力。這讓您能夠建立一個導航標籤與頁面標題不同的選單，從而為網站結構和使用者體驗提供更高的靈活性。

## 參數

| 參數 | 類型 | 是否必填 | 說明 |
| :--- | :--- | :--- | :--- |
| `name` | string | 是 | 選單名稱，例如：`Primary Navigation` |
| `location` | string | 否 | 要將此選單指定的主題位置，例如：`primary` |
| `navigation_label` | string | 否 | 導航中顯示的標籤（與頁面標題不同） |

## 回傳值

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## 導航標籤 vs 頁面標題

`navigation_label` 參數讓您能夠將內部選單名稱與顯示給使用者的標籤分開：

- **`name`** — WordPress 使用的內部選單識別名稱（例如：「Primary Navigation」）
- **`navigation_label`** — 顯示在網站導航中的標籤（例如：「Main Menu」）

當您遇到以下情況時，這點會很有用：
- 您的內部命名慣例與使用者看到的標籤不同
- 您希望導航中的標籤比管理介面上的更簡短
- 您需要支援多種語言，且各語言的標籤長度不同
- 您正在為特定地區或使用者群體建立選單

## 使用範例

### 範例 1：帶有導航標籤的簡單選單

**提示:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**結果:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 範例 2：用於特定主題位置的選單

**提示:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**結果:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## 與 Theme Builder 的整合

當使用 Theme Builder 時，建立選單功能會：

1. 自動偵測可用的主題選單位置
2. 為您的設計建立帶有適當導航標籤的選單
3. 將選單指定到正確的主題位置
4. 支援在建立選單後新增選單項目

## 相關功能

- **`add_menu_item`** — 為現有的選單新增項目
- **`update_menu`** — 重新命名選單或將其重新指定到主題位置
- **`delete_menu`** — 從您的網站移除選單

## 最佳實踐

- **使用清晰的導航標籤** — 保持標籤簡潔且具描述性，方便使用者理解
- **匹配主題位置** — 將選單指定到正確的主題位置，以確保正確顯示
- **規劃選單結構** — 在建立項目之前，先決定好您的選單層級結構
- **測試響應式設計** — 驗證選單在行動裝置上顯示正確
- **本地化標籤** — 為不同的語言版本使用不同的導航標籤

## 限制

- 導航標籤僅用於顯示；內部 `name` 仍用於 WordPress 的識別。
- 主題支援度不一；並非所有主題都支援所有選單位置。
- 選單項目必須在建立選單後單獨新增。
- 更改導航標籤需要更新選單。

## 相關功能

- [Generate Logo SVG](./generate-logo-svg.md) — 為您的網站標頭建立 Logo
- [Validate Palette Contrast](./validate-palette-contrast.md) — 確保顏色方案具有可訪問性
