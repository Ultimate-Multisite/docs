---
title: 設定與提供者配置
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# 網域銷售商：設定與供應商配置

Domain Seller 外掛程式內建了逐步引導式的設定嚮導，會帶您完成所有必要的步驟。本頁面將介紹嚮導的流程，以及之後如何配置或重新配置供應商。

## Requirements

- **Multisite Ultimate** v2.4.12 或更高版本，並已在網路層級啟用
- **PHP** 7.4+
- 至少一個支援的註冊商的 API 憑證

## First-run setup wizard

當您首次在網路層級啟用此外掛程式時，設定嚮導會自動啟動。您也可以隨時從 **Network Admin › Ultimate Multisite › Domain Seller Setup** 進入。

### Step 1 — Choose a provider

選擇您想要連接的註冊商。支援的選項包括：

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Step 2 — Enter credentials

每個供應商的憑證欄位都不同：

**OpenSRS** — 使用者名稱和私鑰（來自 OpenSRS Reseller Control Panel）

**Namecheap** — 使用者名稱和 API key（來自 Account › Tools › API Access）

**GoDaddy** — API key 和 secret（來自 developer.godaddy.com）

**ResellerClub** — Reseller ID 和 API key（來自 ResellerClub 控制台）

**NameSilo** — API key（來自 namesilo.com › Account › API Manager）

**Enom** — Account ID 和 API token

如果有提供，請勾選 **Sandbox mode**，以便在正式上線前，先在供應商的測試環境中進行測試。

### Step 3 — Test the connection

點擊 **Test Connection**。嚮導會發送一個輕量級的 API 呼叫，以驗證憑證和連線狀態。請在繼續之前修復任何憑證問題。

### Step 4 — Import TLDs

點擊 **Import TLDs**，從已連接的供應商處拉取所有可用的 TLD 和批發價格。這會填充網域產品使用的 TLD 清單。對於 TLD 目錄龐大的供應商，匯入過程可能需要 30 到 60 秒。

TLD 也會透過排程的 cron job 自動每天同步一次。

### Step 5 — Create a domain product

嚮導會建立一個預設的「萬用」網域產品，並設定 10% 的加價。您可以立即編輯此產品，或跳過，然後在 **Ultimate Multisite › Products** 下手動建立產品。

請參閱 [Domain Products and Pricing](./domain-products) 以了解完整的產品配置指南。

---

## Reconfiguring a provider

前往 **Network Admin › Ultimate Multisite › Settings › Domain Seller**（或點擊外掛程式列表中的 **Settings**）。

設定頁面包含：

- **Enable domain selling** — 開關整個功能
- **Default provider** — 用於網域搜尋和新產品的預設供應商
- **Max TLDs per search** — 客戶搜尋時檢查多少個 TLD；數值越高顯示的選項越多，但速度越慢
- **Availability cache duration** — 緩存可用性和定價結果的時間長度；數值越低越準確，但會增加 API 呼叫次數
- **Manage domain products** — 快速連結到產品列表
- **Configure providers** — 開啟整合嚮導，用於新增或重新配置供應商

### Adding a second provider

點擊 **Configure providers**，並為新的註冊商再次運行嚮導。您可以同時配置多個供應商。您可以將每個網域產品指定給特定的供應商，或維持預設值。

### Syncing TLDs manually

在設定頁面，點擊任何已配置供應商旁邊的 **Sync TLDs**，以拉取最新的定價。當供應商更新批發價格或新增 TLD 時，這會非常有用。

---

## Logs

每個供應商都會寫入自己的日誌頻道。您可以在 **Network Admin › Ultimate Multisite › Logs** 下查看日誌：

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | 所有註冊嘗試（成功和失敗） |
| `domain-seller-renewal` | 續約任務結果 |
| `domain-seller-opensrs` | OpenSRS 的原始 API 活動記錄 |
| `domain-seller-namecheap` | Namecheap 的原始 API 活動記錄 |
| `domain-seller-godaddy` | GoDaddy 的原始 API 活動記錄 |
| `domain-seller-resellerclub` | ResellerClub 的原始 API 活動記錄 |
| `domain-seller-namesilo` | NameSilo 的原始 API 活動記錄 |
| `domain-seller-enom` | Enom 的原始 API 活動記錄 |
