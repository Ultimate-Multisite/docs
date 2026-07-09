---
title: 頁首網域搜尋
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header 網域搜尋

當你想要一個小型頁首表單來開始網域搜尋，然後讓客戶在 Ultimate Multisite checkout 中從可用網域內選擇時，請使用此設定。

## 需求

- Ultimate Multisite 已於網路啟用。
- Multisite Ultimate Domain Seller 已於網路啟用。
- 至少一個啟用中的網域註冊產品，並具備：
  - `domain_provider` 設為已設定的提供者。
  - 已設定支援的 TLD，例如 `com`、`net` 和 `org`。
- 包含 **Domain Selection** 欄位的有效 checkout 表單。

## Checkout 表單

1. 建立或編輯註冊頁面使用的 checkout 表單。
2. 加入一般必要的 checkout/Account 欄位，包括 **Username**。只包含網域欄位的 checkout 表單會被 Ultimate Multisite 驗證拒絕。
3. 加入 **Domain Selection** 欄位。
4. 當流程應聚焦於已註冊網域，而不是免費子網域或現有網域時，將 Domain Selection 模式設為 **Register Only**。
5. 將網域註冊產品指派給該欄位。

註冊頁面應呈現 checkout 表單，例如：

```text
[wu_checkout slug="domain-form"]
```

## Header 表單

在網站 Header 中加入小型 `GET` 表單，將輸入的搜尋詞作為 `domain_name` 傳送到 checkout 頁面：

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

不要在自訂 Header JavaScript 中預先選取網域。Header 應只傳遞搜尋詞。Domain Seller checkout 指令碼會讀取 `?domain_name=example`，填入 checkout 搜尋框，並執行可用性搜尋，讓客戶可以從傳回的網域中選擇。

## 預期行為

在 Header 中搜尋 `example` 應開啟：

```text
/register/?domain_name=example
```

接著 checkout 應顯示可選擇的結果，例如：

- `example.com`
- `example.net`
- `example.org` 不可用
- 其他提供者支援的 TLD

選取可用結果後，訂單摘要應包含網域註冊產品與所選網域名稱。

## 驗證

1. 開啟首頁。
2. 搜尋裸名稱，例如 `example`。
3. 確認 checkout URL 包含 `?domain_name=example`。
4. 確認 checkout 網域欄位包含 `example`。
5. 確認出現網域選項清單。
6. 對可用網域點擊 **Select**。
7. 確認訂單摘要包含 `Domain Registration - example.com` 或所選網域。

## 疑難排解

- 如果沒有出現清單，請檢查瀏覽器網路分頁中的 `admin-ajax.php?action=wu_domain_search`，並確認其傳回非空的 `domains` 或 `results`。
- 如果 checkout 表單在儲存時驗證失敗，請加入必要的 Account 欄位，例如 **Username**。
- 如果選取網域未更新購物車，請確認 `window.wu_checkout_form` 存在，且 Domain Seller checkout 資源已在 checkout 頁面載入。
