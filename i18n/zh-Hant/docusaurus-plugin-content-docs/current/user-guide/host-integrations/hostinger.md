---
title: Hostinger (hPanel) 整合
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) 整合

## 概述

Hostinger 是一個知名的網頁託管服務商，它提供一個名為 hPanel 的現代化控制面板。Ultimate Multisite Hostinger 整合功能，可以讓 Ultimate Multisite 與 Hostinger 的 hPanel 之間自動同步網域，讓您可以直接在 WordPress 管理介面中自動管理網域映射和子網域。

## 功能特色

- 在 hPanel 中自動建立附加網域 (addon domain)
- 在 hPanel 中自動建立子網域 (適用於子網域 multisite 安裝)
- 刪除網域映射時，自動移除相關網域
- 與 hPanel 的網域管理 API 無縫整合

## 必要條件

若要使用 Hostinger 整合功能，您需要：

1. 擁有 Hostinger 帳戶並具備 hPanel 存取權限
2. 從 Hostinger 取得一個 API token
3. 在您的 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

此外，您也可以選擇定義：

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // 預設 API 端點
```

## 設定步驟

### 1. 生成您的 Hostinger API Token

1. 登入您的 Hostinger 帳戶並進入 hPanel
2. 導航到 **帳戶設定 (Account Settings)** → **API Token**
3. 點擊 **建立新 Token (Create New Token)**
4. 為您的 Token 命名一個描述性的名稱（例如：「Ultimate Multisite」）
5. 選擇必要的權限：
   - 網域管理 (Domain management)
   - 子網域管理 (Subdomain management)
6. 複製生成的 Token 並妥善保管

### 2. 尋找您的帳戶 ID

1. 在 hPanel 中，前往 **帳戶設定 (Account Settings)** → **帳戶資訊 (Account Information)**
2. 您的帳戶 ID 會顯示在這個頁面
3. 複製並儲存此 ID 以供下一步使用

### 3. 將常數新增到 wp-config.php

將以下常數新增到您的 `wp-config.php` 檔案中：

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

如果您的 Hostinger 帳戶使用不同的 API 端點，您可以進行客製化：

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. 啟用整合功能

1. 在您的 WordPress 管理介面中，前往 **Ultimate Multisite > 設定 (Settings)**
2. 導航到 **網域映射 (Domain Mapping)** 標籤頁
3. 捲動到 **主機整合 (Host Integrations)**
4. 啟用 **Hostinger (hPanel)** 整合功能
5. 點擊 **儲存變更 (Save Changes)**

## 工作原理

### 附加網域 (Addon Domains)

當您在 Ultimate Multisite 中映射一個網域時：

1. 整合功能會向 Hostinger 的 API 發送請求，將該網域新增為附加網域。
2. 該網域會被設定指向您的根目錄。
3. 當網域映射被移除時，整合功能會自動從 hPanel 移除該附加網域。

### 子網域 (Subdomains)

對於子網域 multisite 安裝，當建立一個新網站時：

1. 整合功能會從完整網域中提取子網域部分。
2. 它會向 Hostinger 的 API 發送請求，新增該子網域。
3. 該子網域會被設定指向您的根目錄。

## 重要注意事項

- 本整合功能使用 Hostinger 的 REST API 與您的帳戶進行通訊。
- 您的 API token 必須具備管理網域和子網域的必要權限。
- 本整合功能不處理 DNS 設定；網域必須已經指向您的 Hostinger 帳戶。
- API 請求會透過 HTTPS 安全地進行。
- 請務必保護您的 API token，切勿公開分享。

## 故障排除

### API 連線問題

- 確認您的 API token 是正確的且尚未過期。
- 檢查您的帳戶 ID 是否正確。
- 確保您的 API token 具備管理網域的必要權限。
- 確認您的 Hostinger 帳戶是活躍且狀態良好的。

### 網域未新增

- 檢查 Ultimate Multisite 的日誌，查看是否有任何錯誤訊息。
- 確認該網域是否已經新增到您的 Hostinger 帳戶中。
- 確保您的 Hostinger 帳戶尚未達到附加網域的限制。
- 確認該網域是否已正確指向您的 Hostinger 域名伺服器 (nameservers)。

### SSL 憑證問題

- 本整合功能不負責 SSL 憑證的發放。
- Hostinger 通常透過 AutoSSL 提供免費的 SSL 憑證。
- 您可以直接在 hPanel 的 **SSL/TLS** 下管理 SSL 憑證。
- 或者，使用 Let's Encrypt 並結合 Hostinger 的 AutoSSL 功能。

## 支援

如需更多關於 Hostinger 整合功能的協助，請參考以下資源：

- [Hostinger API 文件](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite 文件](/docs)
- [Ultimate Multisite 支援](https://ultimatemultisite.com/support)
