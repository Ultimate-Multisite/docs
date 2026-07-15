---
title: Cloudflare 整合
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare 整合

## 概覽 {#overview}
Cloudflare 是領先的內容傳遞網路（CDN）與安全性提供者，可協助保護並加速網站。此整合可在 Ultimate Multisite 與 Cloudflare 之間啟用自動網域管理，特別適用於子網域 multisite 安裝。

## 功能 {#features}
- 在 Cloudflare 中自動建立子網域
- 支援已代理的子網域
- DNS 記錄管理
- 在 Ultimate Multisite 管理介面中增強 DNS 記錄顯示

## 需求 {#requirements}
你的 `wp-config.php` 檔案中必須定義以下常數：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 設定指示 {#setup-instructions}

### 1. 取得你的 Cloudflare API 金鑰 {#1-get-your-cloudflare-api-key}

1. 登入你的 Cloudflare Dashboard
2. 前往「My Profile」（點擊右上角的電子郵件）
3. 從選單中選擇「API Tokens」
4. 建立具有以下權限的新 API token：
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. 複製你的 API token

### 2. 取得你的 Zone ID {#2-get-your-zone-id}

1. 在你的 Cloudflare Dashboard 中，選擇你要使用的網域
2. Zone ID 會顯示在「Overview」分頁中，位於右側邊欄「API」下方
3. 複製 Zone ID

### 3. 將常數新增至 wp-config.php {#3-add-constants-to-wp-configphp}

將以下常數新增至你的 `wp-config.php` 檔案：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 啟用整合 {#4-enable-the-integration}

1. 在你的 WordPress 管理後台中，前往 Ultimate Multisite > 設定
2. 導覽至「網域對應」分頁
3. 向下捲動至「主機整合」
4. 啟用 Cloudflare 整合
5. 點擊「儲存變更」

## 運作方式 {#how-it-works}

### 子網域管理 {#subdomain-management}

在子網域 multisite 安裝中建立新網站時：

1. 整合會向 Cloudflare 的 API 傳送請求，為子網域新增 CNAME 記錄
2. 子網域預設會設定為透過 Cloudflare 代理（可透過篩選器變更）
3. 當網站被刪除時，整合會從 Cloudflare 移除該子網域

### DNS 記錄顯示 {#dns-record-display}

此整合會透過以下方式增強 Ultimate Multisite 管理介面中的 DNS 記錄顯示：

1. 直接從 Cloudflare 擷取 DNS 記錄
2. 顯示記錄是否已代理
3. 顯示 DNS 記錄的其他資訊

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames**（先前稱為「Cloudflare for SaaS」）是 Cloudflare 的一項功能，可讓你的客戶在 multisite 網路上使用自己的網域並具備 SSL。這是使用 Cloudflare 的網域對應 multisite 安裝所建議採用的方式，因為 Cloudflare 會自動管理每個自訂網域的 SSL 憑證簽發與續期。

### 與標準 Cloudflare 整合的差異 {#how-it-differs-from-the-standard-cloudflare-integration}

| | 標準整合 | Cloudflare Custom Hostnames |
|---|---|---|
| **用途** | 自動為子網域建立 DNS 記錄 | 啟用具備 Cloudflare 管理 SSL 的自訂（對應）網域 |
| **最適合** | 子網域 multisite | 網域對應 multisite |
| **SSL** | 需另外處理 | 由 Cloudflare 自動管理 |

### 設定 Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. 在你的 Cloudflare Dashboard 中，開啟主網域的 zone。
2. 前往 **SSL/TLS > Custom Hostnames**。
3. 新增指向伺服器 IP 或主機名稱的 fallback origin。
4. 對於 Ultimate Multisite 中對應的每個客戶網域，在 Cloudflare 中新增 Custom Hostname 項目。你可以使用 Cloudflare API 自動化此步驟。
5. 一旦客戶的 DNS 指向你的網路，Cloudflare 就會自動為每個自訂主機名稱簽發並續期 TLS 憑證。

如需完整 API 參考，請參閱 [Cloudflare Custom Hostnames 文件](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)。

:::note 術語更新
自 Ultimate Multisite v2.6.1 起，此功能在所有 plugin 設定與標籤中稱為 **Cloudflare Custom Hostnames**。較早版本使用「Cloudflare for SaaS」這個名稱，這是底層 Cloudflare 產品名稱。
:::

## 重要注意事項 {#important-notes}

自 Cloudflare 近期更新後，萬用字元代理現在已可供所有客戶使用。這表示標準 Cloudflare DNS 整合對於子網域 multisite 安裝的重要性已不如以往，因為你可以直接在 Cloudflare 中設定萬用字元 DNS 記錄。

## 疑難排解 {#troubleshooting}

### API 連線問題 {#api-connection-issues}
- 確認你的 API token 正確且具備必要權限
- 檢查你的 Zone ID 是否正確
- 確保你的 Cloudflare Account 具備必要權限

### 子網域未新增 {#subdomain-not-added}
- 檢查 Ultimate Multisite 記錄中是否有任何錯誤訊息
- 確認該子網域尚未新增至 Cloudflare
- 確保你的 Cloudflare 方案支援你正在建立的 DNS 記錄數量

### 代理問題 {#proxying-issues}
- 如果你不想讓子網域被代理，可以使用 `wu_cloudflare_should_proxy` 篩選器
- 某些功能在代理時可能無法正確運作（例如某些 WordPress 管理功能）
- 考慮使用 Cloudflare 的 Page Rules，讓管理頁面略過快取
