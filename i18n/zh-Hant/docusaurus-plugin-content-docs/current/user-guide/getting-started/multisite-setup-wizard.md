---
title: 多站點設置嚮導
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# 多站網路設定精靈

Ultimate Multisite 內建一個設定精靈，可自動將標準的 WordPress 安裝轉換為 WordPress 多站網路。這讓您不需要手動編輯 `wp-config.php` 或執行資料庫指令。

:::tip
如果您的 WordPress 安裝已經是多站網路，可以完全跳過這個步驟。這個精靈只會在尚未啟用多站功能時出現。
:::

## 精靈何時會出現？

當您在標準（非多站）的 WordPress 安裝上啟用 Ultimate Multisite 時，外掛會偵測到多站功能尚未啟用，並自動將您導向多站設定精靈，而非一般的設定精靈。

您也可以直接前往 **WP 管理介面 > Ultimate Multisite > Multisite Setup** 存取。

## 前置需求

執行精靈之前，請確認：

- 您擁有 WordPress 安裝的**管理員權限**
- 您伺服器的 `wp-config.php` 檔案**可被網頁伺服器寫入**
- 您已備有檔案和資料庫的**最新備份**

:::warning
精靈會修改您的 `wp-config.php` 檔案並建立新的資料庫表格。在繼續之前，請務必建立備份。
:::

## 步驟 1：歡迎

第一個畫面會說明什麼是 WordPress 多站網路，以及精靈將執行的操作：

- 在您的 WordPress 設定中啟用多站功能
- 建立必要的網路資料庫表格
- 將必要的多站常數加入 `wp-config.php`
- 在整個網路中全網啟用 Ultimate Multisite

![多站設定精靈 - 歡迎步驟](/img/installation/multisite-wizard/wizard-welcome.png)

點擊 **Continue** 繼續。

## 步驟 2：網路設定

這個步驟會請您設定網路選項。

### 網站結構

選擇您的網路網站要如何組織：

- **子網域**（建議）— 每個網站擁有自己的子網域，例如 `site1.yourdomain.com`
- **子目錄** — 網站以路徑方式建立，例如 `yourdomain.com/site1`

:::note
如果您選擇子網域，您需要為網域設定**萬用字元 DNS** 和**萬用字元 SSL 憑證**。大多數託管式 WordPress 主機會自動處理這些設定。詳細比較請參閱 [Ultimate Multisite 101](./ultimate-multisite-101)。
:::

### 網路標題

輸入您的網路名稱。預設會使用您目前的網站標題並加上「Network」。您可以稍後在網路設定中更改。

### 網路管理員電子郵件

用於接收網路管理通知的電子郵件地址。預設為目前使用者的電子郵件地址。

![多站設定精靈 - 網路設定](/img/installation/multisite-wizard/wizard-network-configuration.png)

填寫完欄位後，點擊 **Continue** 繼續。

## 步驟 3：安裝

點擊 **Install** 按鈕開始。精靈會依序執行五個自動化步驟，每個步驟都會即時顯示進度：

![多站設定精靈 - 安裝等待中](/img/installation/multisite-wizard/wizard-installation-pending.png)

| 步驟 | 說明 |
|------|-------------|
| **啟用多站功能** | 將 `WP_ALLOW_MULTISITE` 常數加入 `wp-config.php` |
| **建立網路** | 建立多站資料庫表格（`wp_site`、`wp_sitemeta`、`wp_blogs` 等）並填入您的網路設定 |
| **更新設定** | 將最終的多站常數加入 `wp-config.php`（`MULTISITE`、`SUBDOMAIN_INSTALL`、`DOMAIN_CURRENT_SITE` 等） |
| **修正 Cookies** | 確保網路中繼資料中的網站網址正確，以避免啟用後發生驗證問題 |
| **全網啟用外掛** | 全網啟用 Ultimate Multisite，讓它在整個網路中運作 |

每個步驟會顯示以下其中一種狀態：

- **Pending** — 等待處理中
- **Installing...** — 正在執行
- **Success!** — 成功完成
- **錯誤訊息** — 發生錯誤（訊息會說明問題）

當所有步驟都成功完成後，您會看到每個項目都顯示綠色的「Success!」狀態：

![多站設定精靈 - 安裝完成](/img/installation/multisite-wizard/wizard-installation-complete.png)

精靈接著會自動前進到完成畫面。

## 步驟 4：完成

安裝完成後，您會看到一則成功訊息，確認 WordPress 多站網路已啟用。

![多站設定精靈 - 設定完成](/img/installation/multisite-wizard/wizard-complete.png)

您現在可以繼續使用 Ultimate Multisite 設定精靈來設定您的 WaaS 平台（公司資料、預設內容、付款閘道等）。

:::note
多站安裝完成後，您的瀏覽器會透過新啟用的網路管理介面重新導向。由於驗證 cookies 會更新為多站環境，您可能需要重新登入。
:::

## 手動設定備案

如果精靈無法寫入您的 `wp-config.php` 檔案（由於檔案權限或伺服器限制），它會顯示您需要手動加入的確切程式碼：

1. 需要加在 `/* That's all, stop editing! */` 這行上方的 **wp-config.php 常數**
2. 適用於您所選網站結構（子網域或子目錄）的 **.htaccess 重寫規則**

完成手動修改後，重新整理頁面，精靈就會偵測到多站功能已啟用。

## 疑難排解

### 精靈顯示 wp-config.php 不可寫入

您的網頁伺服器程序需要有 `wp-config.php` 檔案的寫入權限。您可以：

- 暫時將檔案權限改為 `644` 或 `666`
- 使用精靈提供的手動設定備案說明
- 向您的主機服務商尋求協助

### 設定後網站無法存取（子網域）

如果您選擇了子網域結構，您需要為網域設定**萬用字元 DNS**。新增一筆 DNS 記錄：

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

如果您不確定如何設定，請洽詢您的主機服務商。

### 設定後發生驗證問題

如果您在多站設定後被登出或遇到 cookie 錯誤：

1. 清除瀏覽器中該網站的 cookies
2. 前往 `yourdomain.com/wp-login.php` 重新登入
3. 如果問題持續，請檢查您的 `wp-config.php` 是否將 `COOKIE_DOMAIN` 設為 `false` — 這是子網域多站安裝的已知問題

### 安裝過程中某個步驟失敗

如果其中一個安裝步驟顯示錯誤：

1. 記下顯示的錯誤訊息
2. 返回設定步驟並重試
3. 如果錯誤持續，請查看伺服器的 PHP 錯誤日誌以取得更多詳情
4. 已完成的步驟在後續執行時會被跳過（安裝程式具有冪等性）
