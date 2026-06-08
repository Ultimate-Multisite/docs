---
title: 結帳欄位與客戶 DNS
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# 網站網域與客戶 DNS 管理

## 網域選擇結帳欄位

**網域選擇 (Domain Selection)** 欄位是一個結帳元素，讓客戶可以選擇如何取得其網站的網域。將其新增到任何結帳表單，即可啟用網域銷售功能。

### 將欄位新增到結帳表單

1. 前往 **Network Admin › Ultimate Multisite › Checkout Forms**
2. 開啟或建立一個結帳表單
3. 在結帳編輯器中，點擊 **Add Field**
4. 從欄位列表中選擇 **Domain Selection**
5. 設定欄位選項（詳見下方）
6. 儲存表單

### 欄位選項

**網域模式 (Domain modes)** — 選擇客戶能看到的標籤頁。每個模式都可以獨立啟用或停用：

| 模式 | 功能說明 |
|---|---|
| **子網域 (Subdomain)** | 客戶使用您網路上的免費子網域（例如：`mysite.yournetwork.com`）。無需付款。 |
| **註冊新網域 (Register New Domain)** | 客戶搜尋並透過您設定的供應商註冊新網域。會使用匹配的網域產品進行定價。 |
| **現有網域 (Existing Domain)** | 客戶連結一個他們已經擁有的網域。無需註冊費用。該網域會自動連結到其網站。 |

**預設模式 (Default mode)** — 當所有三個模式都啟用時，哪個標籤頁會首先開啟。設定為 **Subdomain** 可讓網域註冊保持可選；設定為 **Register New Domain** 則能鼓勵客戶購買。

**網域產品 (Domain product)** — 可選地將此欄位固定到特定的網域產品。如果未設定，外掛會根據客戶搜尋的 TLD 自動選擇匹配的產品。

### 註冊人聯絡欄位

當客戶選擇 **Register New Domain** 標籤頁時，結帳表單會在行內新增註冊人聯絡欄位：

- 名字 / 姓氏
- 電子郵件地址
- 地址（地址 1、城市、州/省、郵遞區號、國家）
- 電話號碼

這些資訊是所有註冊商要求的，並且會在執行註冊 API 呼叫前進行驗證。電話號碼會自動格式化為註冊商預期的 `+CC.NNN` 國際格式。

### 自動生成網站 URL

當客戶註冊或連結網域時，網站 URL 欄位會自動從所選網域中填入。客戶無需手動填寫單獨的 URL 欄位。

### 搜尋行為

- 網域可用性會透過 AJAX 實時檢查，以跟隨客戶的輸入
- 當首選網域不可用時，會顯示替代的 TLD 建議
- 定價會即時獲取並清楚顯示（註冊價格、續期價格、可選 WHOIS 隱私費用）
- 優惠券代碼對網域產品的適用性與其他產品相同

**調整搜尋響應速度：**

```php
// 增加防抖延遲時間（毫秒），以減少在網路緩慢時的 API 呼叫次數
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**為網域搜尋表單新增自訂欄位：**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => '額外備註',
    ];
    return $fields;
});
```

---

## 客戶 DNS 管理

客戶可以在 **My Account** 頁面，在其網域的條目下，管理其已註冊網域的 DNS 記錄。

### 支援的記錄類型

| 類型 | 用途 |
|---|---|
| **A** | 將主機名稱映射到 IPv4 位址 |
| **AAAA** | 將主機名稱映射到 IPv6 位址 |
| **CNAME** | 建立指向另一個主機名稱的別名 |
| **MX** | 設定郵件交換伺服器 |
| **TXT** | 新增 SPF、DMARC、驗證或其他文字記錄 |

### 哪些供應商支援 DNS 管理？

**OpenSRS**、**ResellerClub** 和 **Enom** 支援 DNS 管理（新增、編輯、刪除記錄）。Namecheap、GoDaddy 和 NameSilo 的網域會顯示狀態和到期資訊，但 DNS 必須直接在註冊商的控制面板中管理。

### 預設 DNS 記錄

您可以設定預設 DNS 記錄，這些記錄會在網域註冊時自動套用。前往 **Settings › Domain Seller › Default DNS Records**。

預設記錄值支援兩種代碼：

| 代碼 | 替換為 |
|---|---|
| `{DOMAIN}` | 註冊的網域名稱（例如：`example.com`） |
| `{SITE_URL}` | 客戶網站的 WordPress 網站 URL |

**範例 — 將頂層網域和 www 指向您的伺服器 IP：**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### 管理員：檢視和編輯 DNS

網路管理員可以從 **Network Admin › Ultimate Multisite › Domains** 中，在網域的編輯頁面檢視和編輯任何客戶網域的 DNS 記錄。
