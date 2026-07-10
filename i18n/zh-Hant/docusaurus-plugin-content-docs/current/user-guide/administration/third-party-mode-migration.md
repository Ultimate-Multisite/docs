---
title: 第三方模式遷移
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# 第三方模式遷移 {#third-party-mode-migration}

Superdav AI Agent v1.12.0 改變了第三方能力（third-party abilities）的處理方式。**第三方模式現在預設為自動（auto）**，這使得在 WordPress 7.0+ 上無需手動配置即可整合原生的 WordPress Abilities API。

## 變動了什麼？ {#what-changed}

### v1.12.0 之前 {#before-v1120}

第三方能力需要手動配置：

- 您必須明確啟用「第三方模式」（third-party mode）
- 能力是從自定義的註冊表（custom registry）載入的
- 與 WordPress Abilities API 的整合是可選的
- 預設模式是舊版模式（Legacy mode）

### v1.12.0 之後 {#after-v1120}

第三方能力可以自動運作：

- 第三方模式預設為「自動」（auto）
- 能力能原生整合到 WordPress Abilities API
- 在 WordPress 7.0+ 上無需手動配置
- 舊版模式（Legacy mode）仍可供較舊的 WordPress 版本使用

## 哪些用戶會受到影響？ {#who-is-affected}

### 新安裝（WordPress 7.0+） {#new-installations-wordpress-70}

**無需操作。** 第三方模式會自動設定為「自動」（auto），能力開箱即用。

### 現有安裝 {#existing-installations}

**您的設定會被保留。** 如果您之前使用過：

- **舊版模式（Legacy mode）**：您將繼續使用舊版模式（無變動）
- **手動第三方模式（Manual third-party mode）**：您將繼續使用手動模式（無變動）
- **自動模式（Auto mode）**：您將繼續使用自動模式（無變動）

### WordPress 版本早於 7.0 {#wordpress-versions-before-70}

**舊版模式（Legacy mode）仍然可用。** 如果您使用的是 WordPress 6.x 或更早版本：

- 第三方模式預設為「舊版」（legacy）
- 如果需要，您可以手動啟用第三方模式
- 升級到 WordPress 7.0+ 以使用原生的 Abilities API

## 了解各種模式 {#understanding-the-modes}

### 自動模式（Auto Mode）（新的預設值） {#auto-mode-new-default}

**自動模式**使用原生的 WordPress Abilities API 整合：

- 能力透過 WordPress hooks 進行註冊
- 與 WordPress 7.0+ Abilities API 完全相容
- 自動發現第三方能力
- 無需手動配置

**何時使用**：使用第三方能力的 WordPress 7.0+

### 手動模式（Manual Mode） {#manual-mode}

**手動模式**需要明確的配置：

- 您指定要載入哪些第三方能力
- 對於測試或選擇性載入能力很有用
- 需要編輯配置檔案
- 控制力更強，但設定步驟更多

**何時使用**：測試、選擇性能力載入或自定義配置

### 舊版模式（Legacy Mode） {#legacy-mode}

**舊版模式**使用舊的第三方能力系統：

- 自定義能力註冊表（非 WordPress Abilities API）
- 與較舊的 WordPress 版本向後相容
- 沒有原生的 WordPress 整合
- 已棄用但仍受支援

**何時使用**：WordPress 6.x 或更早版本，或當您需要舊版相容性時

## 檢查您目前的模式 {#checking-your-current-mode}

### 透過管理面板 {#via-admin-panel}

1. 前往 **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. 尋找 **Third-Party Mode** 設定
3. 您將看到目前的模式，以及更改它的選項

### 透過程式碼 {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', 或 'legacy'
```

## 更改您的模式 {#changing-your-mode}

### 切換到自動模式（Auto Mode） {#switch-to-auto-mode}

如果您使用的是 WordPress 7.0+ 並且想使用自動模式：

1. 前往 **Superdav AI Agent** → **Settings**
2. 找到 **Third-Party Mode**
3. 選擇 **Auto (WordPress Abilities API)**
4. 點擊 **Save**

Superdav AI Agent 將會自動發現並註冊第三方能力。

### 切換到手動模式（Manual Mode） {#switch-to-manual-mode}

如果您想手動控制哪些能力會載入：

1. 前往 **Superdav AI Agent** → **Settings**
2. 找到 **Third-Party Mode**
3. 選擇 **Manual**
4. 點擊 **Save**
5. 編輯您的配置檔案，指定要載入哪些能力

### 切換到舊版模式（Legacy Mode） {#switch-to-legacy-mode}

如果您需要舊版相容性：

1. 前往 **Superdav AI Agent** → **Settings**
2. 找到 **Third-Party Mode**
3. 選擇 **Legacy**
4. 點擊 **Save**

## 自動模式的優點 {#benefits-of-auto-mode}

### 自動發現（Automatic Discovery） {#automatic-discovery}

能力會自動從以下來源發現：

- 已安裝的插件（plugins）
- 啟用的主題（theme）
- 必須使用插件（must-use plugins）
- 滴入式插件（drop-in plugins）

無需手動註冊。

### 原生整合（Native Integration） {#native-integration}

能力與 WordPress Abilities API 整合：

- 與 WordPress 核心一致
- 可在 WordPress 管理介面使用
- 與使用 Abilities API 的其他插件相容
- 隨著 WordPress 的發展，具有前瞻性

### 簡化管理（Simplified Management） {#simplified-management}

- 不需要編輯配置檔案
- 不需要手動註冊能力
- 能力可見性（Ability Visibility）控制自動運作
- 管理通知會提醒您未分類的能力

### 更好的效能（Better Performance） {#better-performance}

- 能力會被快取（cached）
- 根據需求延遲載入（lazy-loaded）
- 為 WordPress 7.0+ 進行優化

## 遷移路徑 {#migration-path}

### 如果您使用的是 WordPress 6.x {#if-youre-on-wordpress-6x}

1. **升級到 WordPress 7.0+**（準備好時）
2. **將 Superdav AI Agent 更新到 v1.12.0+**
3. **將第三方模式更改為自動（Auto）**（可選；舊版模式仍可使用）
4. **審查能力可見性**，確保存取控制正確

### 如果您使用的是 WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **將 Superdav AI Agent 更新到 v1.12.0+**
2. **驗證第三方模式是否設定為自動（Auto）**（預設應該是這樣）
3. **審查能力可見性**，確保存取控制正確
4. **測試第三方能力**，確認它們正常運作

## 故障排除 {#troubleshooting}

### 自動模式下能力沒有載入 {#abilities-arent-loading-in-auto-mode}

- 確認您使用的是 WordPress 7.0+
- 檢查第三方模式是否設定為「自動」（Auto）
- 確認提供該能力的插件已啟用
- 檢查 WordPress 錯誤日誌是否有註冊錯誤

### 我想保留舊版模式（Legacy mode） {#i-want-to-keep-legacy-mode}

- 前往 **Settings** → **Third-Party Mode**
- 選擇 **Legacy**
- 點擊 **Save**
- 舊版模式將繼續運作

### 我的自定義能力沒有顯示 {#my-custom-abilities-arent-showing}

- 確認它們是否透過 WordPress hooks 進行了註冊
- 檢查它們是否正確實作了 Abilities API
- 審查 WordPress 錯誤日誌
- 使用 **Ability Visibility** 管理頁面查看所有已註冊的能力

### 我收到「未分類能力」的通知 {#im-getting-unclassified-ability-notices}

- 對於新的第三方能力來說，這是正常的
- 在管理通知中審查並分類它們
- 參閱 **Ability Visibility** 以了解分類的詳細資訊

## 向後相容性 {#backward-compatibility}

### 現有的配置 {#existing-configurations}

如果您有現有的第三方能力配置：

- **舊版模式（Legacy mode）**：您的配置將繼續有效
- **手動模式（Manual mode）**：您的配置將繼續有效
- **自動模式（Auto mode）**：您的配置將被忽略（自動模式會接管）

如需保留自定義配置，請停留在手動或舊版模式。

### 棄用時間表 {#deprecation-timeline}

- **v1.12.0**：舊版和手動模式仍完全支援
- **v1.13.0+**：舊版模式可能會顯示棄用通知
- **v2.0.0**：舊版模式可能會被移除（待定）

## 最佳實踐 {#best-practices}

### 對於新安裝 {#for-new-installations}

- 使用自動模式（這是預設值）
- 讓 Superdav AI Agent 自動發現能力
- 使用 Ability Visibility 來控制存取權限

### 對於現有安裝 {#for-existing-installations}

- 盡可能升級到 WordPress 7.0+
- 切換到自動模式以簡化管理
- 使用 Ability Visibility 審查和分類能力

### 對於自定義能力 {#for-custom-abilities}

- 透過 WordPress hooks 註冊能力（Abilities API）
- 避免使用自定義能力註冊表
- 在 WordPress 7.0+ 的自動模式下進行測試

## 後續步驟 {#next-steps}

1. **檢查您的 WordPress 版本**：確認您是否在 7.0+，以便使用自動模式
2. **審查您的第三方模式**：前往 Settings 檢查您目前的模式
3. **如有需要，進行更新**：如果您在 WordPress 7.0+，請切換到自動模式
4. **分類能力**：審查並分類任何未分類的能力
5. **測試**：驗證您的第三方能力是否能正確運作

## 相關主題 {#related-topics}

- **Ability Visibility**：控制哪些能力可以在何處被暴露
- **WordPress Abilities API**：了解原生的 WordPress 能力註冊
- **Third-Party Ability Development**：創建與自動模式協同運作的能力
