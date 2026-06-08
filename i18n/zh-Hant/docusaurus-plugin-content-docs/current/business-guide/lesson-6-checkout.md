---
title: 第六課：註冊體驗
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# 第六課：註冊體驗

結帳流程是將興趣轉化為收入的關鍵環節。一個混亂或籠統的註冊流程會流失客戶。一個能說出客戶語言、讓他們感覺毫不費力的利基市場專屬流程，才能成功完成轉換。

## 我們上次停在哪裡

FitSite 已經配置了模板和方案。現在，我們要建立註冊和結帳體驗，將健身工作室的擁有者轉變為付費客戶。

## 了解註冊流程

Ultimate Multisite 的結帳表單是完全可自訂的多步驟表單。對於 FitSite 來說，我們需要的流程必須：

1. 讓人感覺是為健身業務量身打造的
2. 只收集必需的資訊
3. 讓客戶盡快進入一個可運作的網站

請參閱 [The Registration Flow](/user-guide/configuration/the-registration-flow) 以了解完整的技術參考資料。

## 設計 FitSite 結帳頁面

導航至 **Ultimate Multisite > Checkout Forms** 並建立一個新的表單。

### 步驟 1：方案選擇

健身工作室的擁有者首先看到的，應該是他們能理解的方案，而不是技術術語。

- 新增一個 **Pricing Table** 欄位
- 配置它以顯示所有三個 FitSite 方案
- 您在第 5 課撰寫的方案描述會出現在這裡——請確保這些描述是針對健身業務需求，而非技術功能

:::tip 利基語言至關重要
「1 GB 儲存空間」對健身房老闆來說毫無意義。「您專業工作室網站所需的一切」則代表一切。請用客戶的語言來撰寫方案描述。
:::

### 步驟 2：模板選擇

客戶在選擇了方案之後，會挑選他們的起始模板。

- 新增一個 **Template Selection** 欄位
- 可用的模板會根據他們選擇的方案（在第 5 課配置）進行篩選
- 每個模板都應該配有預覽圖片，展示一個與健身相關的設計

### 步驟 3：帳戶建立

保持這個步驟盡可能簡潔。只收集以下資訊：

- 電子郵件地址
- 密碼
- 工作室/商家名稱（這將成為他們的網站名稱）

不要詢問您在註冊時不需要的資訊。每個額外的欄位都會降低轉換率。

### 步驟 4：網站設定

- **Site title**：預設填入步驟 3 輸入的工作室名稱
- **Site URL**：根據工作室名稱自動生成（例如：`ironworks.fitsite.com`）

### 步驟 5：付款

- 新增 **Payment** 欄位
- 配置您的支付閘道（建議使用 [Stripe](/user-guide/payment-gateways/stripe) 進行訂閱帳單）
- 如果您在第 5 課創建了訂單加購品（Order Bumps），請在付款步驟前新增一個 **Order Bump** 欄位

### 步驟 6：確認

- 使用與健身相關的語言客製化確認訊息
- 範例：「您的健身工作室網站正在建立中。幾秒後您將被重定向到您的新網站。」

## 新增週期選擇開關

如果您在方案中設定了價格變動（例如：月付 vs. 年付），請在結帳表單中新增一個 **Period Selection** 欄位，讓客戶可以在計費週期之間切換。請參閱 [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) 了解操作說明。

## 配置付款

如果您尚未設定支付閘道：

1. 導航至 **Ultimate Multisite > Settings > Payment Gateways**
2. 遵循 [Stripe setup guide](/user-guide/payment-gateways/stripe) 或您偏好的閘道指引
3. 使用測試付款完成一次完整的結帳流程測試

請參閱 [Getting Paid](/user-guide/payment-gateways/getting-paid) 了解付款如何進入您的帳戶。

## 測試流程

在繼續之前，請完成一次完整的測試註冊：

1. 在無痕/私密瀏覽器視窗中開啟結帳表單
2. 選擇一個方案
3. 選擇一個模板
4. 建立一個帳戶
5. 完成付款（使用測試模式）
6. 驗證網站是否使用正確的模板成功建立

請檢查以下幾點：

- [ ] 方案描述是否清晰且具備利基市場專屬性
- [ ] 模板預覽是否展示了適合健身的設計
- [ ] 網站 URL 是否能從工作室名稱正確生成
- [ ] 付款流程是否成功
- [ ] 客戶是否能進入一個已運作的網站，且模板正確
- [ ] 確認電子郵件是否使用了健身相關的語言

## FitSite 網路目前建置的內容

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## 本課建置的內容

- **一個為健身工作室擁有者量身打造的多步驟結帳表單**
- **整個註冊流程中貫穿的利基市場專屬語言**
- **極簡摩擦力** — 僅包含必要的欄位，快速進入可運作網站的路徑
- **支付整合** 並完成測試驗證
- **一個從方案選擇到可運作網站的端到端測試流程**

---

**下一課：** [Lesson 7: Making It Yours](lesson-7-branding) — 我們將進行白標（white-label）平台，並將 FitSite 建立為一個品牌。
