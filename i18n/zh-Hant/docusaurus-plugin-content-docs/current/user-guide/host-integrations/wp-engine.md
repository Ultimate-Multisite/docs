---
title: WP Engine 整合
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine 整合

## 概述
WP Engine 是一個頂級的 WordPress 託管服務平台，為 WordPress 網站提供最佳化的效能、安全性和擴展性。這項整合功能可讓 Ultimate Multisite 與 WP Engine 之間自動同步網域。

## 功能特色
- 自動網域同步
- 支援多站點安裝的子網域
- 與 WP Engine 現有系統無縫整合

## 系統需求
如果您的網站託管在 WP Engine 上，系統會自動偵測並使用內建的 WP Engine API。只要 WP Engine 外掛已啟用且設定正確，就不需要額外的設定。

不過，如果您需要手動設定整合功能，可以在 `wp-config.php` 檔案中定義以下其中一個常數：

```php
define('WPE_APIKEY', 'your_api_key'); // 建議使用的方法
// OR
define('WPE_API', 'your_api_key'); // 替代方法
```

## 設定步驟

### 1. 確認 WP Engine 外掛

如果您的網站託管在 WP Engine 上，WP Engine 外掛應該已經安裝並啟用。請確認：

1. WP Engine 外掛已啟用
2. 檔案 `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` 存在

### 2. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 點選「Domain Mapping」分頁
3. 向下捲動到「Host Integrations」
4. 啟用 WP Engine 整合
5. 點選「Save Changes」

## 運作方式

### 網域同步

當網域在 Ultimate Multisite 中完成對應時：

1. 整合功能會使用 WP Engine API 將網域新增到您的 WP Engine 安裝中
2. WP Engine 會處理網域設定和 SSL 憑證的核發
3. 當網域對應被移除時，整合功能會從 WP Engine 移除該網域

### 子網域支援

對於子網域多站點安裝：

1. 當新網站建立時，整合功能會將每個子網域新增到 WP Engine
2. WP Engine 會處理子網域的設定
3. 當網站被刪除時，整合功能會從 WP Engine 移除該子網域

## 重要注意事項

### 萬用字元網域

對於子網域多站點安裝，建議聯繫 WP Engine 支援團隊，請求設定萬用字元網域。這樣所有子網域都能自動運作，不需要逐一新增。

### SSL 憑證

WP Engine 會自動處理透過此整合功能新增的所有網域的 SSL 憑證核發和續約。不需要額外設定。

## 疑難排解

### API 連線問題
- 確認 WP Engine 外掛已啟用且設定正確
- 如果您是手動定義 API 金鑰，請檢查金鑰是否正確
- 如果 API 有問題，請聯繫 WP Engine 支援團隊

### 網域未新增
- 檢查 Ultimate Multisite 記錄檔是否有任何錯誤訊息
- 確認該網域尚未新增到 WP Engine
- 確保您的 WP Engine 方案支援您要新增的網域數量

### 子網域問題
- 如果子網域無法運作，請聯繫 WP Engine 支援團隊請求設定萬用字元網域
- 確認您的 DNS 設定已正確配置主網域和子網域
