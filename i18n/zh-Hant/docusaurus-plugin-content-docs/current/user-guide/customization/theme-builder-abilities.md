---
title: 主題建立器功能
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold and Activate Block Themes

Superdav AI Agent v1.12.0 引入了兩項強大的功能，讓您可以直接透過聊天介面生成和部署自訂的 Block Themes（區塊主題）。

## 概述

**scaffold-block-theme** 和 **activate-theme** 這兩項功能讓 Agent 能夠：
- 根據您的需求，生成完整、可直接上線的 Block Themes
- 自動在您的網站上啟用主題，無需手動操作
- 透過引導式的設計決策，建立一致的視覺風格

## Scaffold Block Theme（搭建 Block Theme）

**scaffold-block-theme** 功能會生成一個具有完整主題結構的 WordPress Block Theme，包括：

- 包含設計 Token 的 `theme.json` 設定檔
- 用於常見佈局的 Block 模板檔案
- 自訂的 Block 風格和變體
- 主題的元數據和支援宣告

### 如何呼叫

在您與 Superdav AI Agent 的聊天中，您可以要求生成主題：

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent 將會：
1. 透過對話收集您的設計偏好
2. 生成完整的主題結構
3. 建立所有必要的主題檔案
4. 準備主題以供啟用

### 預期輸出

當此功能成功執行時，您會看到：

- 確認主題已成功搭建（scaffolded）
- 主題名稱和位置
- 應用設計 Token 的摘要（顏色、字體、間距）
- 可立即啟用的狀態

範例輸出：
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme（啟用主題）

**activate-theme** 功能會將您的網站切換到一個新搭建或現有的 Block Theme。

### 如何呼叫

在搭建完主題後，您可以立即啟用它：

```
"Activate the Modern Agency theme"
```

或者啟用任何現有的主題：

```
"Switch to the Twentytwentyfour theme"
```

### 預期輸出

當啟用成功時：

- 活躍主題的確認訊息
- 原本的主題名稱（供參考）
- 主題目前上線的網站 URL
- 任何主題特定的設定備註

範例輸出：
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## 工作流程：搭建與啟用

一個典型的工作流程會結合這兩個功能：

1. **要求生成主題**：「為我的 SaaS 登陸頁面創建一個 Block Theme」
2. **Agent 搭建主題**：生成檔案和設計 Token
3. **審閱與精修**：如果需要，討論設計變更
4. **啟用**：「現在啟用這個主題」
5. **驗證**：造訪您的網站，確認新設計已上線

## Design Tokens 和自訂化

搭建的主題使用 WordPress 的設計 Token（透過 `theme.json`）來管理以下內容：

- **Colors**：主色、輔色、強調色、中性色調
- **Typography**：字體家族、字體大小、字重、行高
- **Spacing**：內邊距（Padding）、外邊距（Margin）、間距比例（Gap scales）
- **Borders**：圓角和寬度 Token
- **Shadows**：提升層級（Elevation levels）

這些 Token 都集中在 `theme.json` 中，讓您只需修改一個檔案，就能輕鬆調整整個設計系統。

## 限制與注意事項

- 主題會被搭建到 `/wp-content/themes/` 目錄下，並且必須遵循 WordPress 的命名慣例
- 啟用主題需要您在 WordPress 網站上擁有適當的權限
- 主題中的自訂 PHP 程式碼極少；複雜的功能請使用 plugins
- Block Themes 在搭配 WordPress 5.9 或更高版本時表現最佳

## 故障排除

**搭建後主題沒有出現**
- 驗證主題目錄是否存在且權限正確
- 檢查 `theme.json` 是否為有效的 JSON 格式
- 確保主題名稱不與現有主題衝突

**啟用失敗**
- 確認您擁有管理員（administrator）權限
- 檢查主題目錄是否可供 WordPress 讀取
- 查閱 WordPress 錯誤日誌以了解詳細資訊

**設計 Token 未生效**
- 驗證 `theme.json` 的語法是否正確
- 清除任何快取 plugins
- 檢查您的 WordPress 版本是否支援您使用的 Token

## 下一步

啟用主題後，您可以：
- 使用 **Design System Aesthetics skill** 來精修字體、顏色和間距
- 透過 WordPress block editor 自訂個別 Block 的樣式
- 在主題的 `style.css` 檔案中新增自訂 CSS
- 為特定頁面類型創建自訂 Block 模板
