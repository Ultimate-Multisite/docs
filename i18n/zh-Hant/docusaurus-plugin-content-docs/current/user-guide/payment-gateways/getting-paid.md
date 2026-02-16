---
title: 收款
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# 收款設定 (v2)

_**重要提示：本文適用於 Ultimate Multisite 2.x 版本。**_

Ultimate Multisite 內建會員與帳務系統。為了讓帳務系統正常運作，我們整合了電子商務中最常用的付款閘道。Ultimate Multisite 預設的付款閘道包括 _Stripe_、_PayPal_ 和手動付款。您也可以安裝相應的附加元件來使用 _WooCommerce_、_GoCardless_ 和 _Payfast_ 收款。

## 基本設定

您可以在 Ultimate Multisite 付款設定中設定任何付款閘道。請前往 **Ultimate Multisite 選單 > Settings > Payments**。

![Ultimate Multisite 付款設定頁面](/img/config/settings-payment-gateways.png)

在設定付款閘道之前，請先了解以下基本付款設定：

**強制自動續約：** 啟用此選項後，系統會根據用戶選擇的帳單週期，在每個週期結束時自動扣款。

![強制自動續約切換設定](/img/config/settings-payment-gateways.png)

**允許試用期間免填付款資訊：** 啟用此選項後，客戶在註冊時不需要提供任何付款資訊，只有在試用期結束後才需要填寫。

![允許試用期間免填付款資訊切換](/img/config/settings-payment-gateways.png)

**付款確認後寄送發票：** 此選項讓您決定是否在付款後寄送發票。請注意，用戶可以在子網站控制台查看付款紀錄。此選項不適用於手動付款閘道。

![付款確認後寄送發票切換](/img/config/settings-payment-gateways.png)

**發票編號格式：** 您可以選擇使用付款參考代碼或流水號格式。如果選擇付款參考代碼，無需額外設定。如果選擇流水號格式，則需要設定**下一張發票編號**（此編號將用於系統產生的下一張發票，每產生一張新發票就會自動加一。您可以修改並儲存來重設發票流水號）以及**發票編號前綴**。

![發票編號格式選擇](/img/config/settings-payment-gateways.png)

![流水號與前綴設定](/img/config/settings-payment-gateways.png)

## 付款閘道位置：

您可以在同一頁面設定付款閘道（**Ultimate Multisite > Settings > Payments**）。在**啟用的付款閘道**下方，您會看到：_Stripe_、_Stripe Checkout_、_PayPal_ 和 _Manual_。

![啟用的付款閘道列表](/img/config/settings-payment-gateways.png)

我們為每個付款閘道準備了專門的設定教學文章，您可以透過以下連結查閱。

**設定 Stripe 閘道**

**設定 PayPal 閘道**

**設定手動付款**

如果您想使用 _WooCommerce_、_GoCardless_ 或 _Payfast_ 作為付款閘道，需要**安裝並設定相應的附加元件**。

### 如何安裝 WooCommerce 附加元件：

我們了解 _Stripe_ 和 _PayPal_ 在某些國家無法使用，這會限制 Ultimate Multisite 用戶有效使用我們的外掛。因此我們建立了 _WooCommerce_ 整合附加元件，這是一個非常受歡迎的電子商務外掛。世界各地的開發者為它建立了各種付款閘道整合，我們藉此擴展了 Ultimate Multisite 帳務系統可使用的付款閘道。

_**重要：** Ultimate Multisite: WooCommerce Integration 需要在您的主網站上啟用 WooCommerce。_

首先，請前往附加元件頁面。您可以從 **Ultimate Multisite > Settings** 找到它。您會看到 **Add-ons** 表格，點選 **Check our Add-ons**。

![設定頁面與附加元件區塊](/img/config/settings-general.png)

點選 **Check our Add-ons** 後，您會被導向附加元件頁面。這裡列出所有 Ultimate Multisite 附加元件。點選 **Ultimate Multisite: WooCommerce Integration** 附加元件。

![附加元件頁面列表](/img/config/settings-general.png)

會彈出附加元件詳細資訊視窗，直接點選 **Install Now** 即可。

![WooCommerce 附加元件安裝對話框](/img/config/settings-general.png)

安裝完成後，您會被導向外掛頁面。點選 **Network Activate**，WooCommerce 附加元件就會在您的網路上啟用。

![網路啟用 WooCommerce 附加元件](/img/config/settings-general.png)

啟用後，如果您的網站尚未安裝並啟用 WooCommerce 外掛，系統會顯示提醒訊息。

![WooCommerce 啟用提醒通知](/img/config/settings-general.png)

如需了解更多 WooCommerce Integration 附加元件的資訊，**請點此**。

### 如何安裝 GoCardless 附加元件：

安裝 _GoCardless_ 附加元件的步驟與 _WooCommerce_ 附加元件大致相同。請前往附加元件頁面，選取 **Ultimate Multisite: GoCardless Gateway** 附加元件。

![附加元件頁面列表](/img/config/settings-general.png)

會彈出附加元件視窗，點選 **Install Now**。

![GoCardless 附加元件安裝對話框](/img/config/settings-general.png)

安裝完成後，您會被導向外掛頁面。點選 **Network Activate**，_GoCardless_ 附加元件就會在您的網路上啟用。

![網路啟用 GoCardless 附加元件](/img/config/settings-general.png)

如需了解如何開始使用 _GoCardless_ 閘道，**請閱讀此文章**。

### 如何安裝 Payfast 附加元件：

前往附加元件頁面，選取 **Ultimate Multisite: Payfast Gateway** 附加元件。

![附加元件頁面列表](/img/config/settings-general.png)

會彈出附加元件視窗，點選 **Install Now**。

![Payfast 附加元件安裝對話框](/img/config/settings-general.png)

安裝完成後，您會被導向外掛頁面。點選 **Network Activate**，_Payfast_ 附加元件就會在您的網路上啟用。

![網路啟用 Payfast 附加元件](/img/config/settings-general.png)
