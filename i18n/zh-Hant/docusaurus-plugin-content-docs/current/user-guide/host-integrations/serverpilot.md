---
title: ServerPilot 整合
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot 整合

## 概述
ServerPilot 是一項雲端服務，可在 DigitalOcean、Amazon、Google 或任何其他伺服器供應商上託管 WordPress 及其他 PHP 網站。此整合功能可讓 Ultimate Multisite 與 ServerPilot 之間自動同步網域並管理 SSL 憑證。

## 功能特色
- 自動同步網域
- 透過 Let's Encrypt 管理 SSL 憑證
- 自動續約 SSL 憑證

## 系統需求
您必須在 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## 設定步驟

### 1. 取得 ServerPilot API 憑證

1. 登入您的 ServerPilot 控制台
2. 前往「Account」>「API」
3. 如果還沒有 API 金鑰，請建立一組新的
4. 複製您的 Client ID 和 API Key

### 2. 取得 App ID

1. 在 ServerPilot 控制台中，前往「Apps」
2. 選擇託管您 WordPress 多站網路的應用程式
3. App ID 會顯示在網址中：`https://manage.serverpilot.io/apps/{APP_ID}`

### 3. 將常數加入 wp-config.php

將以下常數加入您的 `wp-config.php` 檔案：

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 切換到「Domain Mapping」分頁
3. 向下捲動至「Host Integrations」
4. 啟用 ServerPilot 整合
5. 點擊「Save Changes」

## 運作原理

### 網域同步

當在 Ultimate Multisite 中對應網域時：

1. 整合功能會從 ServerPilot 取得目前的網域清單
2. 將新網域加入清單（如適用，也會加入 www 版本）
3. 透過 API 將更新後的清單傳送至 ServerPilot
4. ServerPilot 更新您應用程式的網域清單

### SSL 憑證管理

網域同步完成後：

1. 整合功能會自動為您的應用程式啟用 AutoSSL
2. ServerPilot 會透過 Let's Encrypt 處理 SSL 憑證的核發與安裝
3. ServerPilot 也會自動處理 SSL 憑證的續約

## SSL 憑證驗證

此整合功能已設定為增加 ServerPilot 的 SSL 憑證驗證嘗試次數，因為 ServerPilot 可能需要一些時間來核發和安裝 SSL 憑證。預設會嘗試最多 5 次，但您可以透過 filter 調整此設定。

## 疑難排解

### API 連線問題
- 確認您的 Client ID 和 API Key 是否正確
- 檢查 App ID 是否正確
- 確保您的 ServerPilot 帳號具有必要的權限

### SSL 憑證問題
- ServerPilot 要求網域必須有有效的 DNS 記錄指向您的伺服器，才能核發 SSL 憑證
- 如果 SSL 憑證未能核發，請檢查您的網域是否正確指向伺服器的 IP 位址
- ServerPilot 核發和安裝 SSL 憑證可能需要一些時間（通常為 5-15 分鐘）

### 網域未新增
- 查看 Ultimate Multisite 記錄檔中是否有任何錯誤訊息
- 確認該網域尚未新增至 ServerPilot
- 確保您的 ServerPilot 方案支援您要新增的網域數量

### 網域移除
- 目前 ServerPilot API 不提供移除單一網域的方式
- 當在 Ultimate Multisite 中移除網域對應時，整合功能會更新 ServerPilot 的網域清單，排除已移除的網域
