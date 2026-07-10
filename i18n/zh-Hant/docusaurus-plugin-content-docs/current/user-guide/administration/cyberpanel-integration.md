---
title: CyberPanel 整合
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel 整合 {#cyberpanel-integration}

本指南說明如何設定 Ultimate Multisite CyberPanel 整合，以便您的網路中已映射的網域能夠自動作為 CyberPanel 中的虛擬主機（virtual hosts）新增（和移除），並可選擇性地透過 Let's Encrypt 自動配置 SSL 憑證。

## 功能說明 {#what-it-does}

*   當 Ultimate Multisite 中新增一個網域映射時，此整合會呼叫 CyberPanel API，為該網域建立一個虛擬主機。
*   當移除網域映射時，此整合會呼叫 API 來刪除對應的虛擬主機。
*   當啟用自動 SSL 時，此整合會在虛擬主機建立後立即觸發 Let's Encrypt 憑證的頒發。
*   可根據「網域映射」設定中的「自動建立 www 子網域」選項，可選擇性地新增/移除 `www.` 別名。

## 前置條件 {#prerequisites}

*   一個正在運行的 CyberPanel 實例（建議使用 v2.3 或更高版本），且可從您的 WordPress 伺服器存取。
*   一個已在 CyberPanel 中運行的網站，該網站必須已經服務您的 WordPress 網路根目錄。此整合會將新的虛擬主機附加到此伺服器上。
*   已啟用 CyberPanel API 存取權限。身份驗證使用您的 CyberPanel 管理員帳號和密碼。
*   在自動 SSL 頒發有效憑證之前，您用於映射網域的 DNS 記錄必須已經指向您的伺服器 IP 位址。

## 需求 {#requirements}

您的 `wp-config.php` 檔案中必須定義以下常數：

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

可選擇性地，您也可以定義：

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // 預設值：true — 在網域建立後頒發 Let's Encrypt SSL
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // 預設值：PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // 用於 SSL 憑證聯絡人
```

## 設定步驟 {#setup-instructions}

### 1. 啟用 CyberPanel API {#1-enable-the-cyberpanel-api}

1.  以管理員身份登入您的 CyberPanel 控制台（dashboard）。
2.  前往 **Security** > **SSL**，確認 CyberPanel 介面本身已啟用 SSL（這是進行安全 API 呼叫的必要條件）。
3.  CyberPanel API 預設在 `https://your-server-ip:8090/api/` 可用。管理員使用者預設已開啟此功能，無需額外步驟。

### 2. 在 wp-config.php 中新增常數 {#2-add-constants-to-wp-configphp}

請將以下常數新增到您的 `wp-config.php` 檔案中，放在 `/* That's all, stop editing! */` 這一行之前：

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

若要啟用自動 SSL（建議）：

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. 啟用整合 {#3-enable-the-integration}

1.  在您的 WordPress 網路管理員介面中，前往 **Ultimate Multisite** > **Settings**。
2.  導航到 **Domain Mapping**（網域映射）分頁。
3.  捲動到 **Host Integrations**（主機整合）。
4.  啟用 **CyberPanel** 整合。
5.  點擊 **Save Changes**（儲存變更）。

### 4. 驗證連線 {#4-verify-connectivity}

使用設定嚮導中的內建連線測試功能：

1.  前往 **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**。
2.  點擊 **Test Connection**（測試連線）。
3.  成功訊息會確認此插件可以連線到 CyberPanel API 並正確進行身份驗證。

## 工作原理 {#how-it-works}

### 網域映射 {#domain-mapping}

當 Ultimate Multisite 中映射一個網域時：

1.  此整合會向您的 CyberPanel 主機發送一個 `POST` 請求到 `/api/createWebsite`。
2.  CyberPanel 會根據設定的套件，為該網域建立一個新的虛擬主機。
3.  文件根目錄（document root）會設定指向您的 WordPress 網路根目錄。
4.  當移除網域映射時，此整合會呼叫 `/api/deleteWebsite` 來清理虛擬主機。

### 自動 SSL {#auto-ssl}

當 `WU_CYBERPANEL_AUTO_SSL` 為 `true` 時：

1.  虛擬主機建立後，此整合會為該網域呼叫 `/api/issueSSL`。
2.  CyberPanel 會使用 ACME HTTP-01 挑戰機制請求 Let's Encrypt 憑證。
3.  憑證會在到期前由 CyberPanel 自動續訂。

> **重要提醒：** 在 Let's Encrypt 驗證網域之前，DNS 必須完全傳播到您的伺服器 IP 位址。如果 SSL 頒發在映射後立即失敗，請等待 DNS 傳播完成，並在 CyberPanel 控制台的 **SSL** > **Manage SSL** 下重新觸發 SSL。

### www 子網域 {#www-subdomain}

如果您的網域映射設定中啟用了 **Auto-create www subdomain**，此整合也會為 `www.<網域>` 建立一個虛擬主機別名，並且在自動 SSL 開啟時，會頒發涵蓋主網域和 www 兩種變體的憑證。

### 電子郵件轉發器 {#email-forwarders}

當 [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) 附加元件啟用時，CyberPanel 也可以提供客戶電子郵件轉發器。轉發器可以在不建立完整信箱的情況下，將來自網域地址的郵件轉發到另一個信箱，這對於像 `info@customer-domain.test` 或 `support@customer-domain.test` 這樣的別名非常有用。

在為客戶啟用轉發器之前：

1.  確認上述 CyberPanel 常數已配置，且連線測試已通過。
2.  在 Emails 附加元件設定中，啟用 CyberPanel 電子郵件提供者。
3.  確認客戶網域已在 CyberPanel 中存在，再建立轉發器。
4.  在將此功能提供給正式生產環境的方案之前，請先建立一個測試轉發器並透過它發送一封郵件。

如果轉發器建立失敗，請先檢查 Ultimate Multisite 的活動日誌，然後確認 CyberPanel 中來源網域是否存在，以及 API 使用者是否具有電子郵件管理權限。

## 配置參考 {#configuration-reference}

| 常數 | 是否必要 | 預設值 | 說明 |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | 是 | — | CyberPanel 實例的完整 URL，包含連接埠，例如：`https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | 是 | — | CyberPanel 管理員使用者名稱 |
| `WU_CYBERPANEL_PASSWORD` | 是 | — | CyberPanel 管理員密碼 |
| `WU_CYBERPANEL_PACKAGE` | 是 | `Default` | 要分配給新虛擬主機的 CyberPanel 主機套件 |
| `WU_CYBERPANEL_AUTO_SSL` | 否 | `true` | 在網域建立後頒發 Let's Encrypt SSL 憑證 |
| `WU_CYBERPANEL_PHP_VERSION` | 否 | `PHP 8.2` | 新虛擬主機的 PHP 版本（必須與 CyberPanel 中已安裝的版本匹配） |
| `WU_CYBERPANEL_EMAIL` | 否 | — | SSL 憑證註冊的聯絡電子郵件 |

## 重要注意事項 {#important-notes}

*   CyberPanel 的 API 使用基於 Session 的 Token 身份驗證。此整合會在每次 API 呼叫時自動處理 Token 的獲取。
*   您的 CyberPanel 管理員帳號必須具備建立和刪除網站的權限。
*   CyberPanel 預設在 `8090` 連接埠運行。如果您的伺服器使用防火牆，請確保此連接埠可以從 WordPress 應用伺服器存取。
*   此整合不管理 DNS 記錄。您必須在 Ultimate Multisite 中映射網域之前，將網域的 DNS 指向您的伺服器 IP 位址。
*   如果您使用 OpenLiteSpeed (OLS)，虛擬主機變更後會自動觸發平穩重啟（graceful restart）。無需手動干預。

## 故障排除 {#troubleshooting}

### API 連線被拒絕 (API Connection Refused) {#api-connection-refused}

*   驗證伺服器防火牆是否開放了 `8090` 連接埠。
*   確認 `WU_CYBERPANEL_HOST` 的值是否包含正確的協定（`https://`）和連接埠。
*   檢查您的 CyberPanel SSL 憑證是否有效；自簽署憑證可能會導致 TLS 驗證失敗。僅在受信任的私有網路環境中，才將 `WU_CYBERPANEL_VERIFY_SSL` 設定為 `false`。

### 身份驗證錯誤 (Authentication Errors) {#authentication-errors}

*   請透過直接登入 CyberPanel 來確認您的 `WU_CYBERPANEL_USERNAME` 和 `WU_CYBERPANEL_PASSWORD` 是否正確。
*   CyberPanel 在多次登入失敗嘗試後會鎖定帳號。如果發生帳號鎖定，請檢查 CyberPanel 中的 **Security** > **Brute Force Monitor**。

### 未建立網域 (Domain Not Created) {#domain-not-created}

*   請檢查 Ultimate Multisite 的活動日誌（**Ultimate Multisite** > **Activity Logs**）以尋找 API 錯誤訊息。
*   驗證 `WU_CYBERPANEL_PACKAGE` 定義的套件是否已存在於 CyberPanel 中（**Packages** > **List Packages**）。
*   確保該網域尚未在 CyberPanel 中註冊為網站 — 重複建立網站會返回錯誤。

### 未頒發 SSL 憑證 (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

*   確認 DNS 已完全傳播：執行 `dig +short your-domain.com` 應該會返回您的伺服器 IP。
*   Let's Encrypt 會強制執行速率限制。如果您最近為同一網域頒發了多個憑證，請等待後再重試。
*   請檢查 CyberPanel 的 SSL 日誌（**Logs** > **Error Logs**），以了解憑證頒發失敗的詳細資訊。
*   作為備用方案，您可以手動從 CyberPanel 頒發 SSL：**SSL** > **Manage SSL** > 選擇網域 > **Issue SSL**。

## 參考資料 {#references}

*   CyberPanel API 文件：https://docs.cyberpanel.net/docs/category/api
*   CyberPanel SSL 管理：https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
*   Let's Encrypt 速率限制：https://letsencrypt.org/docs/rate-limits/
