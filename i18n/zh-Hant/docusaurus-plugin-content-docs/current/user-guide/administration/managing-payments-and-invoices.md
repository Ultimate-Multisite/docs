---
title: 管理付款和發票
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# 管理付款與發票

## 付款設定

在開始接收付款之前，你需要先設定付款相關選項。前往 **Ultimate Multisite → Settings**，然後點選 **Payment** 分頁。

![Payment settings tab](/img/admin/settings-payments-top.png)

### 一般付款選項

在一般設定中，你可以設定：

- **Currency** — 交易使用的預設貨幣
- **Currency Position** — 貨幣符號顯示的位置（金額前方或後方）

![Payment gateway settings](/img/admin/settings-payments-options.png)

### 付款閘道

Ultimate Multisite 支援多種付款閘道。你可以在 Payment 設定分頁中啟用並設定各個閘道。

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

可用的閘道包括：

- **Stripe** — 透過 Stripe 處理信用卡付款
- **PayPal** — PayPal 付款
- **Manual** — 用於線下或自訂付款處理

每個閘道都有專屬的設定區塊，讓你輸入 API 金鑰和其他設定。

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### 沙盒模式

你可以啟用 **Sandbox Mode** 來測試付款整合，確認一切正常後再正式上線。當沙盒模式啟用時，系統不會產生實際的扣款。

## 檢視付款紀錄

前往 Ultimate Multisite 下方的 **Payments** 頁面，即可查看整個網路中的所有交易紀錄。

![Payments list](/img/admin/payments-list.png)

你可以依狀態篩選付款紀錄（已完成、待處理、失敗、已退款），也可以搜尋特定的交易。

點選任一筆付款即可查看完整資訊，包括明細項目、關聯的會員方案、客戶資料，以及付款閘道的相關資料。

## 發票

Ultimate Multisite 可以自動為付款產生發票。你可以在 Payment 設定中自訂發票範本和編號格式。

發票的自訂選項包括：

- 顯示在發票上的**公司名稱與地址**
- **發票編號**格式與序號規則
- 顯示在發票頁首的**標誌**
- **自訂頁尾文字**，用於條款、備註或法律聲明

如需自訂發票範本，請前往 **Ultimate Multisite → Settings → Payment**，找到發票相關的設定選項。
