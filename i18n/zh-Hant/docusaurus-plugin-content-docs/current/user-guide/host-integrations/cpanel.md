---
title: cPanel 整合
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel 整合

## 概覽
cPanel 是最受歡迎的網站主機控制面板之一，許多共享主機和專屬主機服務商都在使用。這個整合功能讓 Ultimate Multisite 與 cPanel 之間能夠自動同步網域，讓你可以自動將網域別名和子網域新增到你的 cPanel 帳戶。

## 功能特色
- 在 cPanel 中自動建立附加網域
- 在 cPanel 中自動建立子網域（適用於子網域多站點安裝）
- 當網域對應被刪除時，自動移除網域

## 系統需求
你必須在 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

你也可以選擇性地定義：

```php
define('WU_CPANEL_PORT', 2083); // 預設值為 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // 預設值為 /public_html
```

## 設定步驟

### 1. 取得你的 cPanel 憑證

1. 向你的主機服務商取得 cPanel 帳號和密碼
2. 確認你的 cPanel 主機位址（通常是 `cpanel.yourdomain.com` 或 `yourdomain.com:2083`）

### 2. 在 wp-config.php 中新增常數

在你的 `wp-config.php` 檔案中新增以下常數：

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

你也可以選擇性地自訂連接埠和根目錄：

```php
define('WU_CPANEL_PORT', 2083); // 如果你的 cPanel 使用不同的連接埠，請在此修改
define('WU_CPANEL_ROOT_DIR', '/public_html'); // 如果你的文件根目錄不同，請在此修改
```

### 3. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 切換到「Domain Mapping」分頁
3. 向下捲動到「Host Integrations」
4. 啟用 cPanel 整合
5. 點擊「Save Changes」

## 運作原理

### 附加網域

當網域在 Ultimate Multisite 中完成對應時：

1. 整合功能會向 cPanel 的 API 發送請求，將該網域新增為附加網域
2. 網域會被設定指向你的根目錄
3. 當網域對應被移除時，整合功能會從 cPanel 中移除該附加網域

### 子網域

對於子網域多站點安裝，當建立新網站時：

1. 整合功能會從完整網域中擷取子網域部分
2. 它會向 cPanel 的 API 發送請求來新增該子網域
3. 子網域會被設定指向你的根目錄

## 重要注意事項

- 這個整合功能使用 cPanel 的 API2 與你的 cPanel 帳戶進行通訊
- 你的 cPanel 帳戶必須擁有新增附加網域和子網域的權限
- 部分主機服務商可能會限制你可以建立的附加網域或子網域數量
- 這個整合功能不處理 DNS 設定；你仍然需要將網域指向你伺服器的 IP 位址

## 疑難排解

### API 連線問題
- 確認你的 cPanel 帳號和密碼是否正確
- 檢查你的 cPanel 主機位址是否正確且可以存取
- 確保你的 cPanel 帳戶擁有必要的權限
- 嘗試使用完整的 URL 作為主機位址（例如 `https://cpanel.yourdomain.com`）

### 網域未被新增
- 檢查 Ultimate Multisite 日誌中是否有錯誤訊息
- 確認該網域是否已經存在於 cPanel 中
- 確保你的 cPanel 帳戶尚未達到附加網域或子網域的數量上限

### SSL 憑證問題
- 這個整合功能不處理 SSL 憑證的簽發
- 你需要使用 cPanel 的 SSL/TLS 工具或 AutoSSL 功能來為你的網域簽發 SSL 憑證
- 或者，你可以搭配 cPanel 的 AutoSSL 使用 Let's Encrypt 等服務
