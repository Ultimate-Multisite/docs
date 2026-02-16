---
title: Cloudflare 整合
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare 整合

## 概述
Cloudflare 是領先的內容傳遞網路（CDN）和安全服務供應商，能夠協助保護並加速網站。這項整合功能可在 Ultimate Multisite 和 Cloudflare 之間自動管理網域，特別適用於子網域多站點架構。

## 功能特色
- 自動在 Cloudflare 建立子網域
- 支援代理子網域
- DNS 記錄管理
- 在 Ultimate Multisite 管理介面中提供進階 DNS 記錄顯示

## 系統需求
您必須在 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 設定步驟

### 1. 取得您的 Cloudflare API 金鑰

1. 登入您的 Cloudflare 控制台
2. 前往「My Profile」（點擊右上角的電子郵件）
3. 從選單中選擇「API Tokens」
4. 建立新的 API token，並設定以下權限：
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. 複製您的 API token

### 2. 取得您的 Zone ID

1. 在 Cloudflare 控制台中，選擇您要使用的網域
2. Zone ID 會顯示在「Overview」分頁的右側邊欄「API」區塊中
3. 複製該 Zone ID

### 3. 將常數新增至 wp-config.php

在您的 `wp-config.php` 檔案中新增以下常數：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 啟用整合功能

1. 在 WordPress 管理介面中，前往 Ultimate Multisite > Settings
2. 切換到「Domain Mapping」分頁
3. 向下捲動至「Host Integrations」
4. 啟用 Cloudflare 整合
5. 點擊「Save Changes」

## 運作原理

### 子網域管理

當子網域多站點架構中建立新網站時：

1. 整合功能會向 Cloudflare API 發送請求，為該子網域新增 CNAME 記錄
2. 子網域預設會設定為透過 Cloudflare 代理（可透過 filter 變更此設定）
3. 當網站被刪除時，整合功能會從 Cloudflare 移除該子網域

### DNS 記錄顯示

這項整合功能會強化 Ultimate Multisite 管理介面中的 DNS 記錄顯示，包括：

1. 直接從 Cloudflare 擷取 DNS 記錄
2. 顯示記錄是否已啟用代理
3. 顯示 DNS 記錄的額外資訊

## 重要說明

根據 Cloudflare 近期的更新，萬用字元代理功能現已開放給所有客戶使用。這意味著 Cloudflare 整合對於子網域多站點架構的重要性已不如以往，因為您只需在 Cloudflare 中設定萬用字元 DNS 記錄即可。

## 疑難排解

### API 連線問題
- 確認您的 API token 正確無誤，且具備必要的權限
- 檢查您的 Zone ID 是否正確
- 確保您的 Cloudflare 帳戶擁有必要的權限

### 子網域未新增
- 檢查 Ultimate Multisite 的記錄檔是否有錯誤訊息
- 確認該子網域尚未新增至 Cloudflare
- 確保您的 Cloudflare 方案支援您要建立的 DNS 記錄數量

### 代理問題
- 如果您不希望子網域啟用代理，可以使用 `wu_cloudflare_should_proxy` filter
- 某些功能在啟用代理時可能無法正常運作（例如特定的 WordPress 管理功能）
- 建議使用 Cloudflare 的 Page Rules 為管理頁面略過快取
