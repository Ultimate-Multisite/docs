---
title: GridPane 整合
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane 整合

## 概述
GridPane 是一款專為 WordPress 專業人士打造的主機控制面板。這個整合功能可以讓 Ultimate Multisite 與 GridPane 之間自動同步網域並管理 SSL 憑證。

## 功能
- 自動網域同步
- SSL 憑證管理
- 自動設定 SUNRISE 常數

## 系統需求
您必須在 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## 設定步驟

### 1. 取得您的 GridPane API 憑證

1. 登入您的 GridPane 控制台
2. 前往「Settings」>「API」
3. 如果您還沒有 API 金鑰，請產生一組
4. 複製您的 API 金鑰

### 2. 取得伺服器和網站 ID

1. 在 GridPane 控制台中，前往「Servers」
2. 選擇您 WordPress 多站網路所在的伺服器
3. 記下伺服器 ID（可在網址或伺服器詳細資訊頁面中找到）
4. 前往「Sites」並選擇您的 WordPress 網站
5. 記下網站 ID（可在網址或網站詳細資訊頁面中找到）

### 3. 將常數加入 wp-config.php

將以下常數加入您的 `wp-config.php` 檔案：

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 切換到「Domain Mapping」分頁
3. 向下捲動到「Host Integrations」
4. 啟用 GridPane 整合
5. 點擊「Save Changes」

## 運作原理

當您在 Ultimate Multisite 中對應網域時：

1. 整合功能會向 GridPane 的 API 發送請求，將網域加入您的網站
2. GridPane 會自動處理 SSL 憑證的配置
3. 當網域對應被移除時，整合功能會將該網域從 GridPane 中移除

這個整合功能還會自動處理 wp-config.php 中的 SUNRISE 常數，這是網域對應正常運作所必需的。

## SUNRISE 常數管理

GridPane 整合的一個獨特功能是，它會自動還原 wp-config.php 中的 SUNRISE 常數，以避免與 GridPane 自身的網域對應系統產生衝突。這確保了兩個系統可以順利協同運作。

## 疑難排解

### API 連線問題
- 確認您的 API 金鑰是否正確
- 檢查伺服器和網站 ID 是否正確
- 確保您的 GridPane 帳號擁有必要的權限

### SSL 憑證問題
- GridPane 可能需要一些時間來核發 SSL 憑證
- 確認您的網域已正確指向伺服器的 IP 位址
- 檢查網站的 GridPane SSL 設定

### 網域未成功加入
- 查看 Ultimate Multisite 的日誌是否有錯誤訊息
- 確認該網域是否已經存在於 GridPane 中
- 確保您的網域 DNS 記錄已正確設定
