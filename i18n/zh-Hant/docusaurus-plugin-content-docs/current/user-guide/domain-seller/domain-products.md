---
title: 網域產品與定價
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# 網域產品與定價 {#domain-products-and-pricing}

網域產品是用來控制定價、TLD、WHOIS 隱私和服務提供商選擇的方式。每個網域產品都是一個標準的 Ultimate Multisite 產品，但額外增加了一個 **網域設定 (Domain Settings)** 標籤頁。

## 建立網域產品 {#creating-a-domain-product}

1. 前往 **Network Admin › Ultimate Multisite › Products**
2. 點擊 **Add New**
3. 將產品類型設定為 **Domain**
4. 設定 **網域設定 (Domain Settings)** 標籤頁（詳見下方）
5. 儲存

網域產品會在產品列表中顯示一個紫色的 **Domain** 徽章，並且可以使用 **Domain Products** 標籤頁進行篩選。

## 網域設定標籤頁 {#domain-settings-tab}

### Provider（服務提供商） {#provider}

選擇負責處理此產品註冊的註冊商。預設為 Domain Seller 設定中的全域 **Default provider**。

### Supported TLDs（支援的 TLD） {#supported-tlds}

留空可以建立一個 **萬用產品 (catch-all product)**，適用於所有未被其他產品匹配到的 TLD。

輸入逗號分隔的 TLD 清單（例如：`.com, .net, .org`），可以建立一個 **特定 TLD 產品 (TLD-specific product)**，僅適用於這些副網域擴展名。

**產品匹配原理：** 當客戶搜尋網域時，外掛會選擇最精確匹配的產品。如果產品的 TLD 清單包含 `.com`，它會優先於萬用產品。如果沒有特定 TLD 產品匹配，則使用萬用產品。如果沒有任何產品，則不會顯示網域搜尋結果。

### Markup type（加價類型） {#markup-type}

以下三種模式控制您的零售價格如何從進貨成本計算得出：

| 模式 | 運作方式 |
|---|---|
| **Percentage（百分比）** | 在進貨成本上增加一個百分比。在 $10 的進貨網域上加價 20%，就會變成 $12。 |
| **Fixed markup（固定加價）** | 增加一個固定的美元金額。在 $10 的網域上加價 $5，就會變成 $15。 |
| **Fixed price（固定價格）** | 完全忽略進貨成本。總是收取您輸入的金額。 |

### Introductory pricing（入門定價） {#introductory-pricing}

啟用此功能可以提供折扣的第一年價格。您需要在常規的 **Renewal price**（第二年及以後）旁邊設定一個單獨的 **Introductory price**（第一年價格）。客戶在結帳時會看到這兩個價格，這樣他們就知道續約時預期會是什麼。

### WHOIS privacy（WHOIS 隱私） {#whois-privacy}

控制是否為透過此產品註冊的網域提供 WHOIS 隱私保護。

| 設定 | 行為 |
|---|---|
| **Disabled（停用）** | 永遠不會提供或啟用 WHOIS 隱私。 |
| **Always Included（隨時包含）** | 在註冊時會自動免費啟用 WHOIS 隱私。 |
| **Customer Choice（客戶選擇）** | 結帳時會出現一個核取方塊。設定 **Privacy price** 來按年收費，或將其設為 $0 以免費提供。 |

對於 Namecheap，WHOIS 隱私使用 WhoisGuard（永遠免費）。對於 OpenSRS，它使用 OpenSRS 隱私服務（進貨時可能需要費用）。

---

## TLD 匯入與同步 {#tld-import-and-sync}

網域產品會顯示從連接的服務提供商獲取的即時進貨價格。為此功能運作，必須匯入 TLD。

- **手動同步：** Settings › Domain Seller › Sync TLDs (按服務提供商)
- **自動同步：** 透過所有已配置服務提供商的排程 Cron Job 每日執行

同步後，請前往任何網域產品的網域設定標籤頁，並使用 TLD 選擇器查看可用的 TLD 及其目前的進貨價格。

---

## 自動續約 {#auto-renewal}

網域續約與客戶的會員狀態掛鉤：

- 當會員續約且網域已連結時，網域續約會自動排隊。
- 續約嘗試會使用客戶的活躍支付閘道。
- 續約失敗的記錄會自動使用指數退避機制重試。
- 對於成功續約、失敗或即將過期的網域，會發送電子郵件通知。

網域生命週期事件的電子郵件範本 ID：

| 事件 | Template ID |
|---|---|
| Domain registered（網域註冊） | `domain_registered` |
| Domain renewed（網域續約） | `domain_renewed` |
| Renewal failed（續約失敗） | `domain_renewal_failed` |
| Domain expiring soon（網域即將過期） | `domain_expiring_soon` |

---

## 管理員：手動網域註冊 {#admin-manual-domain-registration}

若要在客戶未經過結帳流程的情況下為其註冊網域：

1. 前往 **Network Admin › Ultimate Multisite › Register Domain**
2. 選擇客戶並輸入網域名稱
3. 填寫註冊人聯絡資訊（姓名、地址、電話）
4. 點擊 **Register**

網域記錄會被建立並連結到客戶的帳戶。
