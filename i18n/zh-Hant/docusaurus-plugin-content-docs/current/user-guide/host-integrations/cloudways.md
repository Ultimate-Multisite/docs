---
title: Cloudways 整合
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways 整合

## 概述
Cloudways 是一個託管式雲端主機平台，讓您能夠在 DigitalOcean、AWS、Google Cloud 等多種雲端服務商上部署 WordPress 網站。透過這項整合功能，Ultimate Multisite 可以與 Cloudways 自動同步網域並管理 SSL 憑證。

## 功能特色
- 自動同步網域
- SSL 憑證管理
- 支援額外網域
- SSL 憑證的 DNS 驗證

## 系統需求
您必須在 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

您也可以選擇性地定義：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 設定步驟

### 1. 取得 Cloudways API 憑證

1. 登入您的 Cloudways 控制台
2. 前往「Account」>「API Keys」
3. 如果您還沒有 API 金鑰，請產生一組
4. 複製您的電子郵件和 API 金鑰

### 2. 取得伺服器和應用程式 ID

1. 在 Cloudways 控制台中，前往「Servers」
2. 選擇您 WordPress 多站點所在的伺服器
3. 伺服器 ID 會顯示在網址列中：`https://platform.cloudways.com/server/{SERVER_ID}`
4. 前往「Applications」並選擇您的 WordPress 應用程式
5. 應用程式 ID 會顯示在網址列中：`https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. 將常數加入 wp-config.php

在您的 `wp-config.php` 檔案中加入以下常數：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

如果您有需要一併加入的額外網域：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 切換到「Domain Mapping」分頁
3. 向下捲動至「Host Integrations」
4. 啟用 Cloudways 整合
5. 點擊「Save Changes」

## 運作原理

### 網域同步

當您在 Ultimate Multisite 中對應網域時：

1. 整合功能會擷取所有目前已對應的網域
2. 將新網域加入清單（如果適用，也會加入 www 版本）
3. 透過 API 將完整清單傳送至 Cloudways
4. Cloudways 更新您應用程式的網域別名

請注意：Cloudways API 每次都需要傳送完整的網域清單，而不是單獨新增或移除個別網域。

### SSL 憑證管理

網域同步完成後：

1. 整合功能會檢查哪些網域具有指向您伺服器的有效 DNS 記錄
2. 向 Cloudways 發送請求，為這些網域安裝 Let's Encrypt SSL 憑證
3. Cloudways 負責處理 SSL 憑證的核發與安裝

## 額外網域

`WU_CLOUDWAYS_EXTRA_DOMAINS` 常數可讓您指定與 Cloudways 同步時應一律包含的額外網域。這適用於：

- 非由 Ultimate Multisite 管理的網域
- 萬用字元網域（例如 `*.example.com`）
- 開發或測試環境的網域

## 疑難排解

### API 連線問題
- 確認您的電子郵件和 API 金鑰正確無誤
- 檢查您的伺服器和應用程式 ID 是否正確
- 確保您的 Cloudways 帳號擁有必要的權限

### SSL 憑證問題
- Cloudways 要求網域必須有指向您伺服器的有效 DNS 記錄，才能核發 SSL 憑證
- 整合功能會在請求 SSL 憑證前先驗證 DNS 記錄
- 如果 SSL 憑證未能核發，請檢查您的網域是否正確指向伺服器的 IP 位址

### 網域未加入
- 查看 Ultimate Multisite 記錄檔中是否有任何錯誤訊息
- 確認該網域尚未加入 Cloudways
- 確保您的 Cloudways 方案支援您要新增的網域數量
