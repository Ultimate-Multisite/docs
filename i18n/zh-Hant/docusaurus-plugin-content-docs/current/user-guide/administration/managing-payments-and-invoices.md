---
title: 管理付款與發票
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# 管理付款與發票 {#managing-payments-and-invoices}

## 付款設定 {#payment-settings}

在開始接收付款之前，您需要設定付款相關的設定。前往 **Ultimate Multisite → Settings**，然後點擊 **Payment** 分頁。

![付款設定分頁](/img/admin/settings-payments-top.png)

以下是付款設定頁面的完整檢視：

![付款設定完整頁面](/img/admin/settings-payments-full.png)

### 一般付款選項 {#general-payment-options}

在一般設定中，您可以設定：

- **貨幣** — 用於交易的預設貨幣
- **貨幣位置** — 貨幣符號顯示的位置（金額之前/之後）

![付款閘道設定](/img/admin/settings-payments-options.png)

### 付款閘道 {#payment-gateways}

Ultimate Multisite 支援多個付款閘道。您可以從 Payment 設定分頁啟用並設定每一個閘道。

![付款閘道設定](/img/admin/settings-payments-gateways.png)

可用的閘道包括：

- **Stripe** — 透過 Stripe 進行信用卡付款
- **PayPal** — PayPal 付款
- **Manual** — 用於離線或自訂付款處理

每個閘道都有自己的設定區段，您可以在其中輸入 API 金鑰與其他設定。

![其他閘道設定](/img/admin/settings-payments-gateways-2.png)

### Sandbox 模式 {#sandbox-mode}

您可以啟用 **Sandbox 模式**，在正式上線前測試您的付款整合。當 sandbox 模式啟用時，不會產生任何實際收費。

## 檢視付款 {#viewing-payments}

前往 Ultimate Multisite 底下的 **Payments** 頁面，以查看整個網路中的所有交易。

![付款清單](/img/admin/payments-list.png)

您可以依狀態（已完成、待處理、失敗、已退款）篩選付款，並搜尋特定交易。

點擊某筆付款即可查看其完整詳細資料，包括品項、相關會員資格、客戶資訊，以及付款閘道資料。

## 發票 {#invoices}

Ultimate Multisite 可以自動為付款產生發票。您可以從 Payment 設定自訂發票範本與編號格式。

發票自訂選項包括：

- **公司名稱與地址** 顯示在發票上
- **發票編號** 格式與序列
- **標誌** 顯示在發票頁首
- **自訂頁尾文字** 用於條款、備註或法律資訊

若要自訂發票範本，請前往 **Ultimate Multisite → Settings → Payment**，並尋找發票相關設定。
