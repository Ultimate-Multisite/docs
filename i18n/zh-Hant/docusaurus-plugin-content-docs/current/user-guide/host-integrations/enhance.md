---
title: 增強控制面板整合
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance 控制台整合

## 概覽
Enhance 是一套現代化的控制台，提供強大的主機自動化與管理功能。此整合讓 Ultimate Multisite 與 Enhance 控制台之間能夠自動同步網域並管理 SSL 憑證。

**相關討論：** 請參閱 [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) 獲取社群技巧與更多資訊。

## 功能特色
- 在 Ultimate Multisite 對應網域時自動同步網域
- 當 DNS 解析完成後，透過 LetsEncrypt 自動配置 SSL 憑證
- 支援以子網域模式運作的網路
- 刪除對應關係時自動移除網域
- 連線測試功能，可驗證 API 憑證是否正確

## 系統需求

### 基本需求
- 已安裝且可存取的 Enhance 控制台
- WordPress Multisite 安裝於 Enhance 伺服器上，或已連接至 Enhance 伺服器
- Apache 網頁伺服器（Enhance 目前支援 Apache 設定；LiteSpeed Enterprise 另有優惠價格）

### API 存取權限
您必須擁有 Enhance 控制台的管理員權限，才能建立 API token。

## 取得 API 憑證

### 1. 建立 API Token

1. 以管理員身分登入 Enhance 控制台
2. 點選導覽選單中的 **Settings**
3. 前往 **Access Tokens**
4. 點選 **Create Token**
5. 為 token 輸入一個描述性名稱（例如「Ultimate Multisite Integration」）
6. 指派 **System Administrator** 角色
7. 關於到期日：
   - 留空表示 token 永不過期
   - 或基於安全考量設定特定的到期日
8. 點選 **Create**

建立完成後，畫面會顯示您的 **Access Token** 與 **Organization ID**。**請立即儲存**，因為 token 只會顯示一次。

### 2. 取得 Organization ID

Organization ID 會顯示在 Access Tokens 頁面的藍色資訊框中，標示為「Org ID: {your_id}」。

Organization ID 是一組 UUID 格式，例如：`d8554b6d-5d0d-6719-009b-fec1189aa8f3`

您也可以透過以下方式找到客戶的 Organization ID：
1. 前往 **Customers** 頁面
2. 點選相關客戶的 **Manage customer**
3. 查看網址列 - Organization ID 就是 `/customers/` 後面的英數字元

### 3. 取得 Server ID

要找到 Server ID（網域操作時必須使用）：

1. 在 Enhance 控制台中，前往 **Servers**
2. 點選執行 WordPress 的伺服器
3. Server ID（UUID 格式）會顯示在網址列或伺服器詳細資訊中
4. 您也可以使用 API 列出伺服器：

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID 格式為 UUID：`00000000-0000-0000-0000-000000000000`

### 4. 取得 API URL

您的 API URL 是 Enhance 控制台網址加上 `/api/`：

```
https://your-enhance-panel.com/api/
```

**重要事項：** 必須包含 `/api/` 路徑。常見錯誤包括：
- 只使用網域而沒有加上 `/api/`
- 使用 HTTP 而非 HTTPS（基於安全考量必須使用 HTTPS）

## 設定方式

### 必要常數

在 `wp-config.php` 檔案中加入以下常數：

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### 透過整合精靈設定

1. 在 WordPress 管理後台，前往 **Ultimate Multisite** > **Settings**
2. 切換到 **Integrations** 分頁
3. 找到 **Enhance Control Panel Integration** 並點選 **Configuration**
4. 精靈會引導您完成設定步驟：
   - **步驟 1：** 介紹與功能概覽
   - **步驟 2：** 輸入 API 憑證（Token、API URL、Server ID）
   - **步驟 3：** 測試連線
   - **步驟 4：** 檢視並啟用

您可以選擇：
- 讓精靈自動將常數寫入 `wp-config.php` 檔案
- 複製常數定義後手動加入

## 其他 WordPress 設定

根據社群回饋（[Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)），您可能需要進行以下額外設定：

### .htaccess 設定

如果網域對應出現問題：
1. 刪除原本 Enhance 的 `.htaccess` 檔案
2. 替換為標準的 WordPress Multisite `.htaccess` 檔案

### Cookie 常數

在 `wp-config.php` 中加入這些常數，確保 cookie 在對應的網域間能正常運作：

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## 運作原理

### 當網域被對應時

1. 使用者在 Ultimate Multisite 中對應自訂網域（或以子網域模式建立新網站）
2. 整合功能會向 Enhance API 發送 POST 請求：`/servers/{server_id}/domains`
3. Enhance 將網域加入您的伺服器設定
4. 當 DNS 解析到您的伺服器時，Enhance 會自動透過 LetsEncrypt 配置 SSL 憑證
5. 網域啟用並支援 HTTPS

### 當網域被移除時

1. 在 Ultimate Multisite 中刪除網域對應
2. 整合功能會查詢 Enhance 以找到該網域的 ID
3. 發送 DELETE 請求至：`/servers/{server_id}/domains/{domain_id}`
4. Enhance 從您的伺服器設定中移除該網域

### DNS 與 SSL 檢查

Ultimate Multisite 內建 DNS 和 SSL 檢查功能：
- 您可以在 **Domain Mapping Settings** 中設定檢查間隔（預設：300 秒/5 分鐘）
- 系統會在將網域標示為啟用前驗證 DNS 傳播狀態
- SSL 憑證有效性會自動檢查
- Enhance 會自動處理 SSL 配置，因此不需要手動設定 SSL

## 驗證設定

### 測試連線

1. 在整合精靈中，使用 **Test Connection** 步驟
2. 外掛會嘗試列出您伺服器上的網域
3. 成功訊息表示：
   - API 憑證正確
   - API URL 可存取
   - Server ID 有效
   - 權限設定正確

### 對應網域後

1. 在 Ultimate Multisite 中對應一個測試網域
2. 檢查 Ultimate Multisite 記錄（**Ultimate Multisite** > **Logs** > **integration-enhance**）
3. 在 Enhance 控制台中確認網域已新增：
   - 前往 **Servers** > **Your Server** > **Domains**
   - 新網域應該會出現在列表中
4. DNS 傳播完成後，確認 SSL 已自動配置

## 疑難排解

### API 連線問題

**錯誤：「Failed to connect to Enhance API」**
- 確認 `WU_ENHANCE_API_URL` 結尾包含 `/api/`
- 確保使用 HTTPS 而非 HTTP
- 檢查 WordPress 伺服器是否能存取 Enhance 控制台
- 確認沒有防火牆規則阻擋連線

**錯誤：「Enhance API Token not found」**
- 確認 `WU_ENHANCE_API_TOKEN` 已在 `wp-config.php` 中定義
- 確認 token 在 Enhance 中未被刪除或過期
- 檢查 token 值是否有打字錯誤

**錯誤：「Server ID is not configured」**
- 確認 `WU_ENHANCE_SERVER_ID` 已在 `wp-config.php` 中定義
- 確保 Server ID 是有效的 UUID 格式
- 確認該伺服器存在於您的 Enhance 控制台中

### 網域未新增

**檢查記錄：**
1. 前往 **Ultimate Multisite** > **Logs**
2. 篩選 **integration-enhance**
3. 查看錯誤訊息以了解問題原因

**常見原因：**
- 網域名稱格式無效
- 網域已存在於 Enhance 中
- API 權限不足（確保 token 具有 System Administrator 角色）
- Server ID 與 Enhance 中的實際伺服器不符

### SSL 憑證問題

**SSL 未配置：**
- 確認 DNS 已指向您伺服器的 IP 位址
- 檢查網域是否正確解析：`nslookup yourdomain.com`
- Enhance 需要 DNS 解析成功後才能配置 SSL
- SSL 配置通常在 DNS 傳播後 5-10 分鐘內完成
- 在 Enhance 控制台記錄中檢查 SSL 相關錯誤

**在 Enhance 中手動排解 SSL 問題：**
1. 前往 **Servers** > **Your Server** > **Domains**
2. 找到您的網域並檢查 SSL 狀態
3. 如有需要，可手動觸發 SSL 配置

### DNS 檢查間隔

如果網域或 SSL 憑證啟用時間過長：
1. 前往 **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. 找到 **DNS Check Interval** 設定
3. 將預設的 300 秒調整為較低的值（最小：10 秒）
4. **注意：** 間隔越短表示檢查越頻繁，但伺服器負載也會增加

### 驗證錯誤

**HTTP 401/403 錯誤：**
- 在 Enhance 中重新產生 API token
- 確認 token 具有 **System Administrator** 角色
- 檢查 token 是否已過期
- 確保使用正確的 Organization ID（不過通常不需要放在網址中）

### 記錄分析

啟用詳細記錄：
```php
// 在 wp-config.php 中加入以增強除錯功能
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

然後檢查以下記錄：
- Ultimate Multisite 記錄：**Ultimate Multisite** > **Logs**
- WordPress 除錯記錄：`wp-content/debug.log`
- Enhance 控制台記錄：可在 Enhance 管理介面中查看

## API 參考

### 驗證方式
所有 API 請求皆使用 Bearer token 驗證：
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### 常用端點

**列出伺服器：**
```
GET /servers
```

**列出伺服器上的網域：**
```
GET /servers/{server_id}/domains
```

**新增網域：**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**刪除網域：**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### 完整 API 文件
完整 API 文件：[https://apidocs.enhance.com](https://apidocs.enhance.com)

## 最佳實務

### 安全性
- **絕對不要將 API token 提交到版本控制系統**
- 將 token 儲存在 `wp-config.php` 中，此檔案應排除在 Git 之外
- 使用具有適當權限的 token（完整整合需要 System Administrator）
- 在正式環境中設定 token 到期日
- 定期更換 token

### 效能
- 使用預設的 DNS 檢查間隔（300 秒）以避免過多 API 呼叫
- 執行大規模網域操作時，監控 Enhance 伺服器資源
- 如果要同時對應多個網域，考慮分批新增

### 監控
- 定期檢查 Ultimate Multisite 記錄中的整合錯誤
- 設定監控機制以偵測網域新增失敗的情況
- 確認 SSL 憑證是否正確配置
- 注意 Enhance 伺服器容量與網域數量限制

## 其他資源

- **Enhance 官方文件：** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API 文件：** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance 社群論壇：** [https://community.enhance.com](https://community.enhance.com)
- **GitHub 討論：** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite 網域對應指南：** 請參閱 wiki 頁面「How to Configure Domain Mapping v2」

## 支援

如果您遇到問題：
1. 查看上方的疑難排解章節
2. 檢視 Ultimate Multisite 記錄
3. 參考 [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. 如有控制台相關問題，請聯絡 Enhance 支援團隊
5. 建立新的討論並附上詳細錯誤記錄，以獲得社群協助

## 備註

- 此整合僅處理網域別名；Enhance 會自動管理 SSL
- 此整合同時支援自訂網域對應與子網域模式的網站
- 可在 Domain Mapping 設定中設定是否自動建立 www 子網域
- Enhance 目前支援 Apache 設定（另有 LiteSpeed Enterprise 可選）
- 從 Ultimate Multisite 移除網域會將網域從 Enhance 中移除，但相關的 SSL 憑證可能不會立即刪除
