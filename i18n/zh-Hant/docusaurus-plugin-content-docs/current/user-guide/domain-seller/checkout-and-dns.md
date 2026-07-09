---
title: 結帳欄位與客戶 DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# 結帳欄位與客戶 DNS 管理

## 網域選擇結帳欄位

**網域選擇**欄位是一個結帳元素，讓客戶選擇如何取得其網站的網域。將它加入任何結帳表單即可啟用網域銷售。

### 將欄位加入結帳表單

1. 前往 **網路管理 › Ultimate Multisite › 結帳表單**
2. 開啟或建立結帳表單
3. 在結帳編輯器中，點擊**新增欄位**
4. 從欄位清單選擇**網域選擇**
5. 設定欄位選項（見下方）
6. 儲存表單

### 欄位選項

**網域模式** — 選擇客戶會看到哪些分頁。每個模式都可以獨立啟用或停用：

| 模式 | 功能 |
|---|---|
| **子網域** | 客戶使用你網路上的免費子網域（例如 `mysite.yournetwork.com`）。不需要付款。 |
| **註冊新網域** | 客戶搜尋新網域，並透過你設定的供應商註冊。使用相符的網域產品進行定價。 |
| **現有網域** | 客戶對應已擁有的網域。無註冊費。該網域會自動對應到他們的網站。 |

**預設模式** — 當三種模式皆已啟用時，哪個分頁會先開啟。設定為**子網域**可讓網域註冊保持選用，或設定為**註冊新網域**以鼓勵購買。

**網域產品** — 可選擇將此欄位固定到特定網域產品。若未設定，該 addon 會根據客戶搜尋的 TLD 自動選擇相符產品。

### 註冊人聯絡欄位

當客戶選擇**註冊新網域**分頁時，結帳表單會在行內新增註冊人聯絡欄位：

- 名字 / 姓氏
- 電子郵件地址
- 地址（地址第 1 行、城市、州/省、郵遞區號、國家/地區）
- 電話號碼

所有註冊商都需要這些資訊，且會在發出註冊 API 呼叫前進行驗證。電話號碼會自動格式化為註冊商預期的 `+CC.NNN` 國際格式。

### 自動產生的網站 URL

當客戶註冊或對應網域時，網站 URL 欄位會自動以所選網域填入。客戶不需要填寫單獨的 URL 欄位。

### 搜尋行為

- 客戶輸入時，會透過 AJAX 即時檢查網域可用性
- 當偏好的網域不可用時，會顯示替代 TLD 建議
- 會即時擷取價格並清楚顯示（註冊價格、續約價格、選用 WHOIS 隱私費）
- 優惠券代碼適用於網域產品，方式與任何其他產品相同

**調整搜尋回應速度：**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**將自訂欄位加入網域搜尋表單：**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## 客戶 DNS 管理

客戶可以從**我的 Account**頁面，在其網域項目下管理已註冊網域的 DNS 記錄。

### 支援的記錄類型

| 類型 | 用途 |
|---|---|
| **A** | 將主機名稱對應到 IPv4 位址 |
| **AAAA** | 將主機名稱對應到 IPv6 位址 |
| **CNAME** | 建立指向另一個主機名稱的別名 |
| **MX** | 設定郵件交換伺服器 |
| **TXT** | 新增 SPF、DMARC、驗證或其他文字記錄 |

### 哪些供應商支援 DNS 管理？

DNS 管理（新增、編輯、刪除記錄）可搭配 **OpenSRS**、**ResellerClub**、**Enom**、**HostAfrica** 和 **Openprovider** 使用。**Hostinger** 網域可透過 Domain Seller 更新名稱伺服器；託管網域的 DNS 記錄由核心 Hostinger 網域對應整合管理。Namecheap、GoDaddy 和 NameSilo 網域會顯示狀態與到期資訊，但 DNS 必須直接在註冊商的控制面板中管理。

### 預設 DNS 記錄

你可以設定預設 DNS 記錄，於網域註冊時自動套用。前往**設定 › Domain Seller › 預設 DNS 記錄**。

預設記錄值支援兩個權杖：

| 權杖 | 取代為 |
|---|---|
| `{DOMAIN}` | 已註冊的網域名稱（例如 `example.com`） |
| `{SITE_URL}` | 客戶網站的 WordPress 網站 URL |

**範例 — 將根網域和 www 指向你的伺服器 IP：**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### 管理員：檢視與編輯 DNS

網路管理員可以從 **網路管理 › Ultimate Multisite › 網域** 中的網域編輯頁面，檢視和編輯任何客戶網域的 DNS 記錄。
