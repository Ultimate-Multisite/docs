---
title: 導覽管理面板
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# 導覽管理員面板

Ultimate Multisite 旨在盡可能簡單且易於理解，但對於功能如此強大的工具，有導覽會很有幫助。讓我們逐步瀏覽管理員頁面，幫助你熟悉環境。

## Dashboard {#dashboard}

Ultimate Multisite **Dashboard** 會顯示基本報告與分析，包括收入、網站活動、會員成長、訪客數量與地理資料。

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

以下是 dashboard 的完整檢視：

![Ultimate Multisite Dashboard 完整頁面](/img/admin/um-dashboard-full.png)

以及 dashboard 的底部區段：

![Ultimate Multisite Dashboard 底部區段](/img/admin/um-dashboard-bottom.png)

這裡也有 network dashboard 的完整檢視：

![Network Dashboard 完整頁面](/img/admin/network-dashboard-full-page.png)

## 結帳表單 {#checkout-forms}

**結帳表單**讓你能彈性建立自訂註冊頁面。你可以自訂欄位、插入自訂類別與指令碼，並根據訪客國家或位置限制存取。

![結帳表單清單](/img/admin/checkout-forms-list.png)

## 產品 {#products}

**產品**區段是你為網路建立不同方案、套裝與服務的地方。在產品層級定義價格、計費頻率，以及限制與配額。

![產品清單](/img/admin/products-list.png)

## 會員資格 {#memberships}

**會員資格**頁面會顯示你網路中的所有訂閱。檢視並編輯訂閱詳細資料，包括方案、產品、計費金額與頻率、付款紀錄和時間戳記。

![會員資格清單](/img/admin/memberships-list.png)

## 付款 {#payments}

**付款**頁面提供整個網路付款紀錄的快速檢視，並包含特定產品與金額等詳細交易資訊。

![付款清單](/img/admin/payments-list.png)

## 客戶 {#customers}

**客戶**頁面會顯示你網路中註冊的所有會員，包含基本使用者資訊，例如姓名、電子郵件地址、上次登入，以及用於登入其子網站的「切換至」連結。

![客戶清單](/img/admin/customers-list.png)

## 網站 {#sites}

**網站**頁面列出你網路中的所有子網站，包括網站範本與客戶擁有的網站。輕鬆管理對應網域、限制與配額、plugin 與 theme，以及網站縮圖。

![網站清單](/img/admin/sites-list.png)

## 網域 {#domains}

**網域**頁面專用於對應至子網站的自訂網域。身為 super admin，你可以手動新增或對應自訂網域名稱，並檢視 DNS 記錄與日誌。

![網域清單](/img/admin/domains-list.png)

## 折扣代碼 {#discount-codes}

**折扣代碼**讓你建立優惠券代碼，為終端使用者提供折扣。指定折扣值，並鎖定特定使用者或群組。

![折扣代碼清單](/img/admin/discount-codes-list.png)

## 廣播 {#broadcasts}

**廣播**是一項用於推出公告或傳送私人訊息給子網站使用者的工具。根據他們訂閱的方案或產品鎖定特定使用者群組。

![廣播清單](/img/admin/broadcasts-list.png)

## 設定 {#settings}

**設定**頁面是你設定 Ultimate Multisite 的地方，包括註冊設定、付款、API 與 webhooks、網域對應，以及其他整合。

AI 連接器設定會列出目前支援的 OAuth 提供者池：Anthropic Max、OpenAI ChatGPT/Codex，以及 Google AI Pro。每張提供者卡片都讓 super admin 連接帳號、重新整理已儲存的帳號、依電子郵件移除帳號，並在沙盒環境封鎖瀏覽器重新導向時使用手動 OAuth 備用流程。Cursor Pro 設定選項已從管理員面板移除。

ChatGPT/Codex 帳號支援由連接器支援的工具使用；在操作允許工具時，依賴連接器支援操作的管理員工作流程可在 OpenAI 帳號連接後使用 Codex 工具行為。

![設定頁面](/img/admin/settings-general.png)

以下是一般設定頁面的完整檢視：

![一般設定完整頁面](/img/admin/settings-general-full.png)

以及電子郵件設定頁面：

![電子郵件設定完整頁面](/img/admin/settings-emails-full.png)

以及付款設定頁面：

![付款設定完整頁面](/img/admin/settings-payments-full.png)

以及付款設定的底部區段：

![付款設定底部區段](/img/admin/settings-payments-bottom.png)

以及網站設定頁面：

![網站設定完整頁面](/img/admin/settings-sites-full.png)

## 事件 {#events}

**事件**頁面會保留你網路中所有事件與日誌的紀錄。它會追蹤方案變更、註冊及其他動態等活動，有助於監控你的 multisite。

![事件清單](/img/admin/events-list.png)

## Webhooks {#webhooks}

**Webhooks**允許你將資料傳送到另一個應用程式。適合用來將資料從 Ultimate Multisite 傳送到 Zapier 等平台。

![Webhooks 清單](/img/admin/webhooks-list.png)
