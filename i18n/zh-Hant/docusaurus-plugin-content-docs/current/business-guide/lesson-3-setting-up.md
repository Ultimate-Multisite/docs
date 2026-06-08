---
title: 第三課：設定您的網路
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: Setting Up Your Network

是時候建構了。在本課中，您將安裝 Ultimate Multisite，並為 FitSite 網路配置基礎架構。這裡做的每一個決定，都是以健身領域（fitness niche）為考量。

## Where We Left Off

我們已經確定了健身工作室作為我們的垂直市場，並驗證了這個機會。現在，我們要把這個想法轉化為一個可運作的平台。

## Choosing Your Hosting

對於一個垂直市場平台來說，您的主機選擇比單一網站更重要。您不是在託管一個網站——您是在託管一個將會成長到數十甚至數百個網站的網路。

### What to Look For

- **WordPress Multisite support**: 並非所有主機都能良好地處理 Multisite
- **Wildcard SSL**: 對於基於子網域（subdomain）的網路來說至關重要
- **Scalable resources**: 您需要具備擴展性資源，這樣在成長時不需要遷移主機
- **Ultimate Multisite integration**: 自動化的網域映射和 SSL 設定能為您節省大量的營運精力

### Recommended Approach

請從 [Compatible Providers](/user-guide/host-integrations/closte) 清單中選擇主機。這些主機都經過 Ultimate Multisite 的測試，並提供了您在網域映射和 SSL 自動化所需的整合功能。

對於 FitSite，我們將使用子網域配置。這意味著客戶的網站最初會顯示為 `studioname.fitsite.com`，之後他們可以選擇映射自己的網域。

## Installing WordPress Multisite

如果您尚未安裝 WordPress Multisite：

1. 在您的主機提供商處安裝 WordPress
2. 遵循 [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) 指南
3. 當系統提示時，選擇 **subdomain** 配置

:::tip Why Subdomains?
子網域會為每個客戶網站提供一個獨立的地址（例如 `studio.fitsite.com`），而不是一個路徑（例如 `fitsite.com/studio`）。這對您的客戶來說更專業，也能避免永久連結衝突。如需詳細比較，請參閱 [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101)。
:::

## Installing Ultimate Multisite

請遵循 [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) 指南，完成以下步驟：

1. 網路範圍內上傳並啟用外掛 (plugin)
2. 運行 [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

在設定嚮導過程中，請持續將 FitSite 領域納入考量：

- **Currency**: 設定為您的健身工作室客戶使用的貨幣
- **Company name**: 設定為 "FitSite"（或您選擇的品牌名稱）
- **Company logo**: 上傳您的品牌標誌——這會出現在發票和電子郵件中

## Configuring for the Fitness Niche

安裝了 Ultimate Multisite 後，請進行以下針對垂直市場的配置選擇：

### General Settings

導航到 **Ultimate Multisite > Settings** 並配置：

- **Site name**: FitSite
- **Default role**: Administrator -- 健身工作室的擁有者需要對其網站內容擁有完全的控制權
- **Registration**: 啟用使用者註冊，讓工作室擁有者可以自行註冊

### Email Configuration

您的系統電子郵件內容應該使用您垂直市場的語言。導航到 **Ultimate Multisite > Settings > Emails** 並自訂：

- 將通用型的「您的新網站」語言，替換成與健身相關的訊息
- 範例歡迎主旨：「您的健身工作室網站已準備就緒」
- 範例歡迎內文：提及他們的工作室、課程，以及如何開始使用他們的健身網站

我們會在第 8 課（客戶入駐）中進一步完善這些內容，但現在設定好語氣，能確保即使是早期的測試註冊，也能感受到垂直市場的特色。

### Domain Configuration

如果您使用的是相容的主機提供商，請現在就配置網域映射：

1. 導航到 **Ultimate Multisite > Settings > Domain Mapping**
2. 遵循您特定主機的整合指南
3. 測試新的子網站是否能自動取得 SSL

這樣可以確保當我們在下一課開始建立範本和測試網站時，所有流程都能順暢地端到端運作。

## The FitSite Network So Far

在本課結束時，您已經完成了以下內容：

```
FitSite Network
├── WordPress Multisite (子網域模式)
├── Ultimate Multisite (已安裝並配置)
├── 具備通配符 SSL 的主機
├── 已配置網域映射
├── 垂直市場特定的電子郵件範本（初步）
└── 已準備好進行網站範本建構（下一課）
```

## What We Built This Lesson

- **一個可運作的 WordPress Multisite** 實例，並以子網域模式運行
- **Ultimate Multisite 已安裝**，並使用 FitSite 品牌進行配置
- **為成長網路設定了主機和 SSL**
- **為您的主機提供商配置了網域映射**
- **從第一天起就確立了垂直市場特定的電子郵件語氣**

---

**Next:** [Lesson 4: Building Niche Templates](lesson-4-templates) -- 我們將建立健身工作室擁有者真正會想使用的網站範本。
