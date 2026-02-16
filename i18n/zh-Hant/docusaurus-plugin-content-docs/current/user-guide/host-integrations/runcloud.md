---
title: RunCloud 整合
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud 整合

## 概覽
RunCloud 是一個雲端伺服器管理平台，讓你可以輕鬆地在自己的雲端伺服器上部署和管理網頁應用程式。這個整合功能可以在 Ultimate Multisite 和 RunCloud 之間自動同步網域並管理 SSL 憑證。

## 功能特色
- 自動網域同步
- SSL 憑證管理
- 刪除對應時自動移除網域

## 需求條件
你必須在 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## 設定步驟

### 1. 取得 RunCloud API 憑證

1. 登入你的 RunCloud 控制台
2. 前往「User Profile」（點擊右上角的個人頭像）
3. 從選單中選擇「API」
4. 如果還沒有 API 金鑰，請點擊「Generate API Key」
5. 複製你的 API Key 和 API Secret

### 2. 取得伺服器和應用程式 ID

1. 在 RunCloud 控制台中，前往「Servers」
2. 選擇託管你 WordPress 多站點的伺服器
3. Server ID 會顯示在網址中：`https://manage.runcloud.io/servers/{SERVER_ID}`
4. 前往「Web Applications」並選擇你的 WordPress 應用程式
5. App ID 會顯示在網址中：`https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. 將常數加入 wp-config.php

將以下常數加入你的 `wp-config.php` 檔案：

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 切換到「Domain Mapping」分頁
3. 往下捲動到「Host Integrations」
4. 啟用 RunCloud 整合
5. 點擊「Save Changes」

## 運作方式

當網域在 Ultimate Multisite 中完成對應時：

1. 整合功能會向 RunCloud 的 API 發送請求，將網域加入你的應用程式
2. 如果網域成功加入，整合功能也會重新部署 SSL 憑證
3. 當網域對應被移除時，整合功能會從 RunCloud 中移除該網域

對於子網域安裝模式，當新網站加入你的網路時，整合功能會自動在 RunCloud 中建立子網域。

## 疑難排解

### API 連線問題
- 確認你的 API 憑證是否正確
- 檢查伺服器和應用程式 ID 是否正確
- 確保你的 RunCloud 帳戶有必要的權限

### SSL 憑證問題
- RunCloud 可能需要一些時間來核發 SSL 憑證
- 確認你的網域已正確指向伺服器的 IP 位址
- 檢查應用程式的 RunCloud SSL 設定

### 網域未加入
- 檢查 Ultimate Multisite 日誌中是否有任何錯誤訊息
- 確認該網域是否已經加入 RunCloud
- 確保你的 RunCloud 方案支援多個網域
