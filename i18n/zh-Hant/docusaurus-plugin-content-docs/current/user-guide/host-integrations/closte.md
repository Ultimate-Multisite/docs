---
title: Closte 整合
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte 整合

## 概覽
Closte 是一個建構在 Google Cloud 基礎架構上的 WordPress 託管平台。這個整合功能可以在 Ultimate Multisite 和 Closte 之間自動同步網域並管理 SSL 憑證。

## 功能特色
- 自動網域同步
- SSL 憑證管理
- 萬用字元網域支援
- 如果在 Closte 上運行，無需額外設定

## 需求條件
如果你使用 Closte，必須在 `wp-config.php` 檔案中定義以下常數：

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

如果你的網站託管在 Closte 上，這個常數通常已經預先定義好了。

## 設定說明

### 1. 確認你的 Closte API Key

如果你的網站託管在 Closte 上，`CLOSTE_CLIENT_API_KEY` 常數應該已經在你的 `wp-config.php` 檔案中定義好了。你可以檢查 `wp-config.php` 檔案來確認。

### 2. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 點選「Domain Mapping」分頁
3. 向下捲動到「Host Integrations」
4. 啟用 Closte 整合
5. 點擊「Save Changes」

## 運作原理

當網域在 Ultimate Multisite 中完成對應時：

1. 整合功能會向 Closte 的 API 發送請求，將網域新增到你的應用程式
2. Closte 會自動處理 SSL 憑證的配置
3. 當網域對應被移除時，整合功能會從 Closte 移除該網域

這個整合功能也會配合 Ultimate Multisite 中的 DNS 檢查間隔設定，讓你可以設定系統檢查 DNS 傳播和 SSL 憑證簽發的頻率。

## 網域記錄建立

這個整合功能確保當網站建立或複製時，會自動建立網域記錄。這對於 Closte 整合特別重要，因為網域記錄的建立會觸發 Closte API 來建立網域和 SSL 憑證。

## 疑難排解

### API 連線問題
- 確認你的 Closte API key 是否正確
- 確保你的 Closte 帳號具有必要的權限

### SSL 憑證問題
- Closte 可能需要一些時間來簽發 SSL 憑證（通常是 5-10 分鐘）
- 確認你的網域已正確指向 Closte 伺服器的 IP 位址
- 檢查你網域的 DNS 記錄，確保設定正確

### 網域未新增
- 檢查 Ultimate Multisite 的日誌是否有任何錯誤訊息
- 確認該網域是否已經新增到 Closte
- 確保你網域的 DNS 記錄已正確設定

### DNS 檢查間隔
- 如果 SSL 憑證簽發時間過長，你可以在 Domain Mapping 設定中調整 DNS 檢查間隔
- 預設間隔是 300 秒（5 分鐘），但你可以設定為最低 10 秒，以便在測試時更快速地檢查
