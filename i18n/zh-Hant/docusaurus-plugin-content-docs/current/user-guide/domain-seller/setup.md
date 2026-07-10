---
title: 設定與提供者組態
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller：設定與供應商配置 {#domain-seller-setup-and-provider-configuration}

Domain Seller addon 隨附引導式設定精靈，會帶你完成每個必要步驟。本頁說明精靈流程，以及之後如何配置或重新配置供應商。

## 需求 {#requirements}

- **Multisite Ultimate** v2.4.12 或更高版本，並已在網路啟用
- **PHP** 7.4+
- 至少一個受支援註冊商的 API 憑證

## 首次執行設定精靈 {#first-run-setup-wizard}

設定精靈會在你第一次於網路啟用 plugin 時自動啟動。你也可以隨時從 **Network Admin › Ultimate Multisite › Domain Seller Setup** 存取。

### 步驟 1 — 選擇供應商 {#step-1--choose-a-provider}

選取你要連接的註冊商。支援的選項：

| 供應商 | DNS 管理 | WHOIS 隱私 |
|---|---|---|
| OpenSRS | 是 | 是 |
| Namecheap | 否 | 是（WhoisGuard，免費） |
| HostAfrica | 是 | 是（ID 保護） |
| Openprovider | 是 | 是 |
| Hostinger | 透過核心 Hostinger 代管網域的網域對應 | 是 |
| GoDaddy | 否 | 否 |
| ResellerClub | 是 | 否 |
| NameSilo | 否 | 否 |
| Enom | 是 | 否 |

### 步驟 2 — 輸入憑證 {#step-2--enter-credentials}

每個供應商都有不同的憑證欄位：

**OpenSRS** — 使用者名稱與私密金鑰（來自 OpenSRS Reseller Control Panel）

**Namecheap** — 使用者名稱與 API 金鑰（來自 Account › Tools › API Access）

**HostAfrica** — 來自 HostAfrica reseller module 的 Domains Reseller API endpoint 與憑證。目前未記錄單獨的沙盒 endpoint；在執行正式註冊前，請先以安全的唯讀檢查進行測試。

**Openprovider** — 已啟用 API 存取權的使用者名稱與密碼。選用的沙盒模式會使用 Openprovider sandbox API，且可重複使用選用的預設客戶 handle 進行註冊。

**Hostinger** — 來自核心 Hostinger 整合的共用 Hostinger hPanel API 權杖。同一權杖支援核心網域對應與 Domain Seller 註冊操作。

**GoDaddy** — API 金鑰與密鑰（來自 developer.godaddy.com）

**ResellerClub** — 經銷商 ID 與 API 金鑰（來自 ResellerClub 控制台）

**NameSilo** — API 金鑰（來自 namesilo.com › Account › API Manager）

**Enom** — Account ID 與 API token

在可用時勾選 **沙盒模式**，以便在上線前針對供應商的測試環境進行測試。

### 步驟 3 — 測試連線 {#step-3--test-the-connection}

點擊 **測試連線**。精靈會傳送輕量級 API 呼叫，以驗證憑證與連線能力。繼續之前請修正任何憑證問題。

### 步驟 4 — 匯入 TLD {#step-4--import-tlds}

點擊 **匯入 TLD**，從已連接的供應商拉取所有可用 TLD 與批發價格。這會填入網域產品使用的 TLD 清單。對於擁有大型 TLD 目錄的供應商，匯入可能需要 30–60 秒。

TLD 也會透過排程 cron job 每天自動重新同步一次。

### 步驟 5 — 建立網域產品 {#step-5--create-a-domain-product}

精靈會建立預設的全包式網域產品，並加價 10%。你可以立即編輯此產品，或略過並在 **Ultimate Multisite › Products** 下手動建立產品。

請參閱 [網域產品與定價](./domain-products) 以取得完整產品配置指南。

---

## 重新配置供應商 {#reconfiguring-a-provider}

前往 **Network Admin › Ultimate Multisite › Settings › Domain Seller**（或在 plugin 清單中點擊 **Settings**）。

設定頁面包含：

- **啟用網域銷售** — 切換整個功能開啟/關閉
- **預設供應商** — 用於網域搜尋與新產品的供應商
- **每次搜尋最多 TLD 數量** — 客戶搜尋時要檢查的 TLD 數量；較高數值會顯示更多選項但速度較慢
- **可用性快取期間** — 快取可用性與定價結果的時間長度；較低數值較準確，但會增加 API 呼叫
- **管理網域產品** — 前往產品清單的快速連結
- **配置供應商** — 開啟 Integration Wizard 以新增或重新配置供應商

### 新增第二個供應商 {#adding-a-second-provider}

點擊 **配置供應商**，並為新註冊商再次執行精靈。你可以同時配置多個供應商。將每個網域產品指派給特定供應商，或保留使用預設值。

### 手動同步 TLD {#syncing-tlds-manually}

在設定頁面中，點擊任何已配置供應商旁的 **同步 TLD** 以拉取最新定價。這在供應商更新批發價格或新增 TLD 後很有用。

---

## 記錄 {#logs}

每個供應商都會寫入自己的記錄通道。記錄可在 **Network Admin › Ultimate Multisite › Logs** 下查看：

| 記錄通道 | 內容 |
|---|---|
| `domain-seller-registration` | 所有註冊嘗試（成功與失敗） |
| `domain-seller-renewal` | 續約作業結果 |
| `domain-seller-opensrs` | 原始 OpenSRS API 活動 |
| `domain-seller-namecheap` | 原始 Namecheap API 活動 |
| `domain-seller-hostafrica` | 原始 HostAfrica API 活動 |
| `domain-seller-openprovider` | 原始 Openprovider API 活動 |
| `domain-seller-hostinger` | 原始 Hostinger API 活動 |
| `domain-seller-godaddy` | 原始 GoDaddy API 活動 |
| `domain-seller-resellerclub` | 原始 ResellerClub API 活動 |
| `domain-seller-namesilo` | 原始 NameSilo API 活動 |
| `domain-seller-enom` | 原始 Enom API 活動 |

---

## 供應商功能備註 {#provider-capability-notes}

並非每個註冊商 API 都公開相同操作。addon 會以清楚的管理員端錯誤顯示不支援的操作，而不是靜默失敗。

- **HostAfrica** 支援最廣泛的即時經銷商工作流程，包括查詢、TLD/價格同步、註冊、續約、轉移、名稱伺服器更新、DNS 記錄、EPP 代碼、註冊商鎖定，以及 ID 保護。
- **Openprovider** 支援經銷商價格的 TLD 同步、註冊、續約、轉移、名稱伺服器更新、DNS 區域、EPP 代碼、註冊商鎖定，以及 WHOIS 隱私。它使用短效 bearer token 進行驗證，該附加元件會自動重新整理。
- **Hostinger** 透過共用的 hPanel API token 支援可用性搜尋、註冊、作品集查詢、名稱伺服器更新、註冊商鎖定，以及 WHOIS 隱私。Hostinger 的公開 Domains API 不提供經銷商/批發價格、轉入轉移、明確續約，或 EPP 代碼擷取；續約僅限自動續約。
