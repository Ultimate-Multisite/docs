---
title: Cloudways 整合
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways 整合

## 概覽 {#overview}
Cloudways 是一個受管理的雲端託管平台，可讓你在 DigitalOcean、AWS、Google Cloud 等各種雲端供應商上部署 WordPress 站台。此整合可在 Ultimate Multisite 與 Cloudways 之間啟用自動網域同步與 SSL 憑證管理。

## 功能 {#features}
- 自動網域同步
- SSL 憑證管理
- 支援額外網域
- SSL 憑證的 DNS 驗證

## 需求 {#requirements}
必須在你的 `wp-config.php` 檔案中定義以下常數：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

你也可以選擇性定義：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 設定說明 {#setup-instructions}

### 1. 取得你的 Cloudways API 憑證 {#1-get-your-cloudways-api-credentials}

1. 登入你的 Cloudways Dashboard
2. 前往「Account」>「API Keys」
3. 如果你還沒有 API key，請產生一組
4. 複製你的電子郵件與 API key

### 2. 取得你的伺服器與應用程式 ID {#2-get-your-server-and-application-ids}

1. 在你的 Cloudways Dashboard 中，前往「Servers」
2. 選取託管你 WordPress multisite 的伺服器
3. Server ID 會顯示在 URL 中：`https://platform.cloudways.com/server/{SERVER_ID}`
4. 前往「Applications」並選取你的 WordPress 應用程式
5. App ID 會顯示在 URL 中：`https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. 將常數新增到 wp-config.php {#3-add-constants-to-wp-configphp}

將以下常數新增到你的 `wp-config.php` 檔案：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

如果你有其他應一律保留在 Cloudways 別名清單中的**外部**網域（位於你的 multisite 網路之外）：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning 不要包含你自己網路的萬用字元
**不要**將 `*.your-network.com`（或你自己網路的任何子網域模式）新增到
`WU_CLOUDWAYS_EXTRA_DOMAINS`。請參閱下方的[重要 — 萬用字元 SSL 陷阱](#important--wildcard-ssl-pitfall)，
了解為什麼這會阻止為每個租戶核發 SSL 憑證。
:::

### 4. 啟用整合 {#4-enable-the-integration}

1. 在你的 WordPress 管理後台中，前往 Ultimate Multisite > 設定
2. 導覽至「網域對應」分頁
3. 向下捲動到「主機整合」
4. 啟用 Cloudways 整合
5. 點擊「儲存變更」

## 運作方式 {#how-it-works}

### 網域同步 {#domain-syncing}

當網域在 Ultimate Multisite 中完成對應時：

1. 此整合會擷取所有目前已對應的網域
2. 它會將新網域加入清單（若適用，也會連同 www 版本一起加入）
3. 它會透過 API 將完整清單傳送到 Cloudways
4. Cloudways 會更新你應用程式的網域別名

注意：Cloudways API 要求每次都傳送完整的網域清單，而不是只新增或移除個別網域。

### SSL 憑證管理 {#ssl-certificate-management}

網域同步後：

1. 此整合會檢查哪些網域具有指向你伺服器的有效 DNS 記錄
2. 它會向 Cloudways 傳送請求，為這些網域安裝 Let's Encrypt SSL 憑證
3. Cloudways 會處理 SSL 憑證的核發與安裝

此整合一律向 Cloudways 請求**標準**（非萬用字元）Let's Encrypt 憑證。如果在 `WU_CLOUDWAYS_EXTRA_DOMAINS` 中提供萬用字元模式，SSL 請求前會移除開頭的 `*.` — 此整合永遠不會安裝萬用字元本身。若要在 Cloudways 上使用萬用字元憑證，你必須手動安裝，但這麼做會封鎖對應自訂網域的逐網域 Let's Encrypt 核發（請參閱下方陷阱）。

## 額外網域 {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` 常數可讓你指定應一律保留在 Cloudways 應用程式別名清單中的其他**外部**網域。可用於：

- 不由 Ultimate Multisite 管理的外部網域（例如與同一個 Cloudways 應用程式共用的獨立行銷站台）
- 你想保留在應用程式別名清單中的停放或預備網域

**不要**將此常數用於你自己網路的子網域萬用字元
（例如 `*.your-network.com`）。請參閱下方的萬用字元 SSL 陷阱。

## 重要 — 萬用字元 SSL 陷阱 {#important--wildcard-ssl-pitfall}

遵循 Cloudways 預設設定時，常見錯誤是將像是
`*.your-network.com` 的萬用字元新增到 `WU_CLOUDWAYS_EXTRA_DOMAINS`，或是為該萬用字元手動安裝 Cloudways
萬用字元 SSL 憑證。

**如果你這麼做，Cloudways 將拒絕為 Ultimate Multisite 所對應的
每個租戶自訂網域核發 Let's Encrypt 憑證。** Cloudways 每次都會取代應用程式上的作用中
SSL 憑證，而應用程式上既有的萬用字元憑證會封鎖此整合所依賴的逐網域 Let's Encrypt 核發。

### Ultimate Multisite 網路的建議 Cloudways SSL 設定 {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. 在 Cloudways 應用程式的 **SSL Certificate** 分頁中，安裝一張僅涵蓋 `your-network.com` 與 `www.your-network.com` 的**標準
   Let's Encrypt 憑證**
   — **不是**萬用字元。
2. **不要**將 `*.your-network.com`（或你自己網路的任何子網域模式）放入
   `WU_CLOUDWAYS_EXTRA_DOMAINS`。請將該常數僅保留給**外部**網域使用。
3. 僅在 **DNS** 層級建立每個租戶子網域萬用字元（一筆指向你的 Cloudways 伺服器 IP 的 `A` 記錄，用於
   `*.your-network.com`），讓子站台能夠解析。個別對應自訂網域的 SSL
   接著會由此整合透過 Let's Encrypt 自動核發。

如果你的租戶自訂網域卡在沒有 SSL 的狀態，請檢查 Cloudways SSL 分頁。如果那裡有作用中的 wildcard 憑證，請移除它，只為主網路網域重新簽發標準 Let's Encrypt 憑證，並從 `WU_CLOUDWAYS_EXTRA_DOMAINS` 移除任何 wildcard 項目。接著重新觸發一次網域對應（或等待下一次），整合就會再次開始為每個網域簽發憑證。

## 疑難排解 {#troubleshooting}

### API 連線問題 {#api-connection-issues}
- 確認你的電子郵件與 API 金鑰正確
- 檢查你的伺服器與應用程式 ID 是否正確
- 確保你的 Cloudways Account 具備必要權限

### SSL 憑證問題 {#ssl-certificate-issues}
- Cloudways 要求網域在簽發 SSL 憑證之前，必須有指向你伺服器的有效 DNS 記錄
- 整合會在請求 SSL 憑證之前驗證 DNS 記錄
- 如果 SSL 憑證沒有被簽發，請檢查你的網域是否已正確指向你伺服器的 IP 位址
- **每個租戶的自訂網域卡在沒有 SSL 的狀態嗎？** 請檢查 Cloudways 應用程式的 SSL Certificate 分頁。如果有作用中的 wildcard 憑證（手動安裝，或涵蓋 `*.your-network.com`），Cloudways 將不會為個別對應的自訂網域簽發 Let's Encrypt 憑證。請將它替換為只涵蓋主網路網域（`your-network.com`、`www.your-network.com`）的標準 Let's Encrypt 憑證，並從 `WU_CLOUDWAYS_EXTRA_DOMAINS` 移除任何 wildcard 項目。接著重新觸發一次網域對應（或等待下一次），整合就會請求每個網域的憑證。

### 網域未新增 {#domain-not-added}
- 檢查 Ultimate Multisite 記錄中是否有任何錯誤訊息
- 確認該網域尚未新增到 Cloudways
- 確保你的 Cloudways 方案支援你正在新增的網域數量
