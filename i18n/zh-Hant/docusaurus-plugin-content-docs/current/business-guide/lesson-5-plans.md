---
title: 第五課：設計您的計畫
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# 第五課：設計您的方案

您的方案層級不只是定價水平，它們更是反映了您的利基市場客戶實際運營方式的體現。在本課中，您將設計出符合不同階段健身企業真實需求的產品層級。

## 我們上次停在哪裡

FitSite 已經準備了三個範本（Studio Essential、Gym Pro、Fitness Chain）。現在，我們來建立決定客戶可存取內容和支付金額的方案。

## 從客戶群體角度思考

大多數人犯的錯誤是圍繞技術功能（儲存空間、頻寬、頁面數量）來設計方案。您的利基市場客戶不會用這些術語思考。一位健身房老闆思考的是他們經營業務所需的東西。

對於健身工作室來說，存在三個自然的群體：

| Segment | Who They Are | What They Need |
|---------|-------------|----------------|
| **Solo trainers / small studios** | 1-3 staff, single location, starting out | A professional site, class info, contact form |
| **Established gyms** | 5-20 staff, single location, growing | Everything above plus booking, blog, gallery, custom domain |
| **Fitness chains** | Multiple locations, established brand | Everything above plus multi-site, locations pages, staff directory |

您的方案應該對應這些群體，而不是任意的功能組合。

## 建立 FitSite 方案

請為每個方案導航至 **Ultimate Multisite > Products > Add Product**。

### Plan 1: FitSite Starter -- $49/month

**目標客群**: 個人教練和小型工作室

**Description tab**:
- Name: FitSite Starter
- Description: 「個人教練或小型工作室在網路上看起來專業所需的一切。」

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- $99/month

**目標客群**: 規模穩定的單地點健身房

**Description tab**:
- Name: FitSite Growth
- Description: 「適用於準備擴大線上業務版面並吸引新會員的成熟健身房。」

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Starter, plus:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month

**目標客群**: 多地點健身連鎖品牌

**Description tab**:
- Name: FitSite Pro
- Description: 「為擁有多個地點的健身品牌提供的完整平台。」

**Site Templates tab**:
- Available templates: All three templates

**Limitations**:
- Sites: 5 (one per location)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Growth, plus:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## 設定方案群組

方案群組確保客戶只能在 FitSite 方案家族內進行升級或降級。在每個方案的 **Up & Downgrades** tab：

1. 將 **Plan Group** 設定為所有方案的 "FitSite Plans"
2. 將 **Product Order** 設定為 1 (Starter)、2 (Growth)、3 (Pro)

這創造了一個清晰的升級路徑：Starter → Growth → Pro。

## 添加訂單加購品（Order Bumps）

訂單加購品（Order bumps）是在結帳時提供的附加產品。對於 FitSite，可以考慮：

- **Extra Storage Pack** ($19/month) -- 額外 5 GB 儲存空間
- **Priority Support** ($29/month) -- 更快的響應時間
- **Additional Site** ($39/month) -- 適用於超過方案允許網站數量的客戶

請在 Ultimate Multisite 中將這些產品作為 **Package** 類型產品創建，並將它們與相關方案關聯起來。

## 為什麼這個結構有效

- **Starter** 降低了入門門檻——低價格、簡單的產品，能讓教練快速上線。
- **Growth** 增加了健身房真正需要的功能——預約、相簿、自訂網域。
- **Pro** 為需要多地點支援的高價值客戶服務。
- **Order bumps** 讓客戶可以在不複雜化核心方案的情況下進行客製化。
- **清晰的升級路徑** 意味著客戶會隨著您的成長而成長，而不是離開。

## FitSite 網路目前架構

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## 本課所建構的內容

- **三個方案層級**，對應真實的健身業務群體。
- 使用 Ultimate Multisite 的插件和範本控制進行**功能門控**。
- 具有清晰升級路徑的**方案群組**。
- 用於增加額外收入的**訂單加購品產品**。
- 基於客戶價值而非技術規格的**定價結構**。

---

**下一課：** [Lesson 6: The Signup Experience](lesson-6-checkout) — 我們將建立一個能將健身工作室老闆轉化為付費客戶的結帳流程。
