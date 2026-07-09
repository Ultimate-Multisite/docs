---
title: 課程九：為利定價
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# 第九課：為利潤定價 {#lesson-9-pricing-for-profit}

在第五課中，我們為 FitSite 規劃了初始的方案價格。現在，我們將使用一些技術來完善定價策略，以提高收入、鼓勵升級並降低客戶流失率。

## 我們的進度 {#where-we-left-off}

FitSite 已經具備了方案、範本、結帳流程、品牌化和客戶入門流程。最初的定價是每月 $49/$99/$199。現在，我們要讓這些價格發揮更大的價值。

## 適用於利基市場平台的定價原則 {#pricing-principles-for-niche-platforms}

### 根據價值定價，而非成本 {#price-on-value-not-cost}

您的主機託管成本可能在每位客戶網站 $5 到 $15 之間。這並不代表您的價格就應該是 $20。您賣的不是主機託管服務。您賣的是：

- 一個專業的健身網站，若要客製化建置，成本可能達到 $2,000 到 $5,000
- 持續的維護、更新和安全保障，讓客戶無需擔心
- 泛用建構工具無法提供的利基市場特定功能
- 為其行業量身打造的平台所帶來的信譽

請根據您提供的價值來定價，而不是根據提供服務的成本來定價。

### 錨定替代方案 {#anchor-to-alternatives}

當健身工作室老闆評估 FitSite 時，他們會將其與以下選項進行比較：

- **聘請網頁開發人員**：前期投入 $2,000 到 $5,000 + 每月 $50 到 $100 的維護費
- **Wix/Squarespace**：每月 $16 到 $45，但缺乏健身專用功能，且需要自己建置
- **什麼都不做**：導致無法在網上找到他們的會員流失

以每月 $49 到 $199 的價格來看，FitSite 比聘請開發人員便宜，比通用建構工具更專業，也比沒有網站好得多。

## 實施價格變體 {#implementing-price-variations}

年繳方案可以鼓勵客戶承諾，並降低流失率。請前往每個方案的 **Price Variations**（價格變體）分頁，新增年繳選項：

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

請在結帳表單中新增一個 **Period Selection**（週期選擇）欄位，讓客戶可以在月繳和年繳之間切換。請參閱 [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle)。

### 為什麼年繳方案有效 {#why-annual-pricing-works}

- **對您而言**：一次性現金流，降低流失率（年繳的客戶不太可能在短期內取消訂閱）
- **對他們而言**：真正的節省，預算可預測性

## 設定費 {#setup-fees}

對於包含手動配置的方案，可以考慮收取一次性的設定費：

- **Starter**：無設定費（消除入門門檻）
- **Growth**：$99 設定費（涵蓋客製化網域配置和初次諮詢）
- **Pro**：$299 設定費（涵蓋多地點設置和入門諮詢）

請在每個方案的定價區塊配置設定費。如需詳細資訊，請參閱 [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product)。

## 試用期 {#trial-periods}

提供試用期可以減少註冊的摩擦力，但也帶來了無法轉化的風險。對於 FitSite：

- 僅在 Starter 方案提供 **7 天免費試用**
- Growth 和 Pro 方案不提供試用（這些客戶更具承諾感，預期會付費）

請在 Starter 方案的定價區塊配置試用期，方法是啟用 **Offer Trial** 開關，並將持續時間設定為 7 天。

### 如何讓試用期轉化 {#making-trials-convert}

試用期只有在客戶在試用期間體驗到價值時才有效。您的客戶入門流程（第八課）在這裡至關重要——歡迎電子郵件的發送時間點應該設計成能在 7 天內推動客戶參與度。

## 折扣代碼 {#discount-codes}

為特定目的創建策略性的折扣代碼：

- **FITLAUNCH** -- 前 3 個月八折（用於發布促銷）
- **ANNUAL20** -- 年繳方案八折（如果尚未折扣）
- **REFERRAL** -- 免費 1 個月（用於客戶推薦）

請導航到 **Ultimate Multisite > Discount Codes** 來創建這些代碼。請參閱 [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) 以獲取完整指南。

:::tip 預設不提供折扣
折扣應該是策略性的工具，而不是永久的配置。如果每個人都能獲得折扣，那就不叫折扣——那只是您的實際價格。請將它們用於特定的活動、推薦和限時促銷。
:::

## 稅金處理 {#tax-handling}

如果您的業務所在司法管轄區要求徵收稅金：

1. 在 **Ultimate Multisite > Settings > Taxes** 配置稅率
2. 將稅類應用到您的方案
3. 確保發票正確顯示稅金

請參閱 [Tax Handling](/user-guide/payment-gateways/tax-handling) 了解詳細配置。如果您服務國際客戶，請考慮使用 [VAT addon](/addons/vat) 來符合歐盟法規。

## 回顧您的定價 {#reviewing-your-pricing}

發布後，請每季回顧一次定價。請關注以下幾點：

- **按方案的轉換率**：如果 Starter 轉換率很高，但 Growth 卻不高，那麼兩者之間的價差可能過大
- **升級率**：如果很少有客戶從 Starter 升級到 Growth，那可能是 Growth 方案提供的額外價值不足
- **按方案的流失率**：如果年繳客戶的流失率較低，就應該更積極地推廣年繳方案
- **競爭對手定價**：替代方案收費多少？您的定位是否正確？

## FitSite 網路現狀 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## 本課所建置的內容 {#what-we-built-this-lesson}

- **年繳定價**，提供 20% 折扣以鼓勵客戶承諾
- **高階方案的設定費**，用以涵蓋入門和配置的精力投入
- **入門方案的試用期**，以減少註冊的摩擦力
- **策略性折扣代碼**，用於發布、推薦和活動促銷
- **稅金配置**，確保帳單符合法規
- **定價回顧框架**，用於持續優化

---

**下一課：** [第十課：上線日](lesson-10-launch) — 上線前的檢查清單和正式上線。
