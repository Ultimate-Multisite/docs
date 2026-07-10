---
title: 第八課：客戶導入
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# 第 8 課：客戶入職流程 {#lesson-8-customer-onboarding}

讓客戶註冊只是成功的一半。如果他們登入後感到不知所措，然後再也不回來了，你就已經失去他們了。本課的目標是設計一個體驗流程，將一個新註冊的用戶，轉變為一個活躍、投入的客戶。

## 我們上次停在哪裡 {#where-we-left-off}

FitSite 已經完成了品牌化，並且擁有一個可運作的結帳流程。現在，我們將重點放在健身工作室擁有者在完成註冊並首次登入他們新網站之後，會經歷什麼。

## 為什麼入職流程很重要 {#why-onboarding-matters}

註冊後的最初 30 分鐘，決定了客戶是留下來還是流失。一位健身工作室擁有者如果：

- 登入後看到一個看起來已經像健身網站的網站 → 會留下來
- 清楚知道下一步該做什麼 → 會留下來
- 在一個通用型的 WordPress dashboard 中感到迷茫 → 會離開

您的利基模板（Lesson 4）處理了第一個點。而本課，則負責處理第二個點。

## 首次登入體驗 {#the-first-login-experience}

### 歡迎儀表板 Widget {#welcome-dashboard-widget}

建立一個自訂的 dashboard widget，用來迎接新客戶並引導他們完成設定。這個 Widget 應該在他們首次登入時，非常醒目地顯示出來。

**FitSite 快速上手：**

1. **新增您的工作室名稱和 Logo** -- 連結至 Customizer 或 Site Identity 設定
2. **更新您的課程時間表** -- 直接連結至 Classes 頁面編輯器
3. **新增您的教練** -- 連結至 Trainers 頁面編輯器
4. **設定您的聯絡資訊** -- 連結至 Contact 頁面編輯器
5. **預覽您的網站** -- 連結至前端

每個步驟都直接連結到相關的頁面或設定。客戶無需在複雜的選單中尋找。

### 簡化 Dashboard {#simplify-the-dashboard}

新客戶不需要看到每一個 WordPress 的選單項目。您可以考慮：

- 隱藏與健身網站管理無關的選單項目（例如，如果未使用，可以隱藏 Comments）
- 重新排序選單，將最常用的項目放在最前面
- 增加對利基市場有意義的自訂選單標籤（例如，將「Appearance」改為「您的工作室」）

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) 這個 Addon 可以幫助您控制客戶能看到什麼。

## 歡迎電子郵件序列 {#welcome-email-sequence}

單一的歡迎電子郵件是不夠的。您需要設定一個序列，引導客戶度過他們的第一週：

### Email 1：歡迎（註冊後立即發送） {#email-1-welcome-immediately-after-signup}

- 主旨：「歡迎加入 FitSite — 您的工作室網站已上線」
- 內容：登入連結、快速上手步驟、幫助資源連結
- 語氣：興奮、鼓勵、具備健身特色

### Email 2：快速勝利（第 1 天） {#email-2-quick-wins-day-1}

- 主旨：「您的 FitSite 上最先要做的 3 件事」
- 內容：新增您的 Logo、更新首頁主圖、新增課程時間表
- 包含截圖，清楚顯示點擊的位置

### Email 3：打造專屬風格（第 3 天） {#email-3-make-it-yours-day-3}

- 主旨：「讓您的健身網站脫穎而出」
- 內容：自訂顏色、新增教練照片、撰寫工作室故事
- 連結至平台上有其他優秀健身網站的範例

### Email 4：正式上線（第 7 天） {#email-4-go-live-day-7}

- 主旨：「準備好將您的 FitSite 與世界分享了嗎？」
- 內容：分享前需要驗證的清單、如何連接自訂網域（如果使用 Growth/Pro 方案）、社群媒體分享技巧

:::tip 電子郵件自動化
使用 [Webhooks](/user-guide/integrations/webhooks) 或 [Zapier](/user-guide/integrations/zapier) 來透過您的電子郵件行銷平台觸發這些電子郵件。這樣能讓您對發送時間有更多控制權，並且可以追蹤客戶的參與度。
:::

## 幫助資源 {#help-resources}

建立針對利基市場的幫助內容，用來回答健身工作室擁有者真正會問的問題：

### 知識庫文章 {#knowledge-base-articles}

- 「如何更新您的課程時間表」
- 「新增和編輯教練資料」
- 「更改工作室的 Logo 和顏色」
- 「連接您自己的網域名稱」（適用於 Growth/Pro 客戶）
- 「在網站上新增預約 Widget」

請為非技術用戶撰寫這些內容。務必使用截圖。避免使用 WordPress 的專業術語。

### 影片教學 {#video-walkthroughs}

短片（2-3 分鐘）螢幕錄影，展示以下內容：

- 首次登入和導覽
- 編輯首頁
- 更新課程時間表
- 新增一位教練

這些不需要是製作精良的產品。清晰、有幫助、且具備利基特色，才是最重要的。

## 帳戶頁面 {#the-account-page}

Ultimate Multisite 包含一個客戶可查看的 [Account Page](/user-guide/client-management/account-page)，客戶可以在此管理他們的訂閱。請將此頁面自訂為：

- 顯示他們當前的 FitSite 方案
- 展示帶有健身特色優點的升級選項
- 提供帳單歷史記錄和發票下載
- 連結至幫助資源

## 衡量入職成功率 {#measuring-onboarding-success}

追蹤這些指標，就能知道您的入職流程是否有效：

- **啟用率 (Activation rate)**：有多少比例的註冊用戶在第一週內實際自訂了他們的網站？
- **第一週登入次數 (First-week logins)**：新客戶在第一週內平均登入了多少次？
- **新客戶支援工單量 (Support tickets from new customers)**：數量過高意味著您的入職流程存在漏洞
- **試用轉付費率 (Trial-to-paid conversion)**：如果您提供試用，有多少比例的用戶付費了？

## FitSite 網路目前建置的內容 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (子網域模式)
├── Ultimate Multisite (配置並品牌化)
├── Platform Domain (fitsite.com + 通配符 SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (利基市場專用，已測試)
├── Branding (登入頁、Dashboard、電子郵件、發票、行銷網站)
├── 客戶入職流程 (Customer Onboarding)
│   ├── 快速上手 dashboard widget
│   ├── 簡化版健身網站管理 dashboard
│   ├── 4 封電子郵件歡迎序列
│   ├── 利基市場專用知識庫
│   ├── 影片教學
│   └── 自訂帳戶頁面
└── 準備進行定價策略 (下一課)
```

## 本課建置的內容 {#what-we-built-this-lesson}

- **帶有快速上手 Widget 的引導式首次登入體驗**
- **專注於健身網站管理任務的簡化 Dashboard**
- **引導客戶度過第一週的歡迎電子郵件序列**
- **為非技術的健身工作室擁有者撰寫的利基市場幫助資源**
- **用於追蹤和改進體驗的入職指標**

---

**下一課：** [Lesson 9: Pricing for Profit](lesson-9-pricing) — 我們將完善定價策略，以最大化收入並最小化客戶流失。
