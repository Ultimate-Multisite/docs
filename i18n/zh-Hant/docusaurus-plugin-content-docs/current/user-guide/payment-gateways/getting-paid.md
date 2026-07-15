---
title: 收款
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# 收取款項 (v2)

_**重要注意事項：本文指的是 Ultimate Multisite 版本 2.x。**_

Ultimate Multisite 內建會員資格與計費系統。為了讓我們的計費系統運作，我們已整合電子商務中最常使用的付款閘道。Ultimate Multisite 的預設付款閘道是 _Stripe_、_PayPal_ 和手動付款。你也可以透過安裝各自的 add-ons，使用 _WooCommerce_、_GoCardless_ 和 _Payfast_ 來收款。

## 基本設定 {#basic-settings}

你可以在 Ultimate Multisite 付款設定下設定任何這些付款閘道。你可以前往 **Ultimate Multisite 選單 > Settings > Payments** 找到它。

![Ultimate Multisite 中顯示 Payments 面板的付款設定頁面](/img/config/payments-settings-page.png)

在你設定付款閘道之前，請先查看可設定的基本付款設定：

**強制自動續** **訂：** 這會確保付款會依照使用者所選的計費頻率，在每個計費週期結束時自動重複扣款。

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 會在儲存已啟用自動續訂的週期性會員資格之前，檢查啟用中的閘道是否有可重複使用的續訂憑證。續訂憑證可以是閘道訂閱、計費協議、已儲存的 vault token，或等效的可重複使用付款方式。如果閘道回報不存在可用憑證，Ultimate Multisite 會儲存會員資格，但關閉自動續訂，並記錄缺少憑證的狀態，讓管理員或支援流程可以在續訂日期之前要求客戶重新授權付款。

這可避免會員資格看起來會自動續訂，但閘道其實只能收取一次性付款。閘道 add-ons 應確認週期性結帳會儲存可重複使用的憑證，特別是當閘道同時支援一次性收款與 vaulted/subscription 付款模式時。

**允許試用不需付款** **方式：** 啟用此選項後，你的客戶在註冊過程中不必新增任何財務資訊。這只會在試用期到期後才需要。

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**付款確認時傳送發票：** 這讓你可以選擇付款後是否傳送發票。請注意，使用者可以在其子站 Dashboard 下存取付款記錄。此選項不適用於手動閘道。

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**發票編號方案：** 在這裡，你可以選擇付款參考代碼或連續編號方案。如果你選擇對發票使用付款參考代碼，則不需要設定任何內容。如果你選擇使用連續編號方案，則需要設定 **下一個發票號碼**（此號碼將用作系統產生的下一張發票的發票號碼。每次建立新發票時，它都會遞增一。你可以變更並儲存它，以將發票連續編號重設為特定值）以及 **發票號碼前綴。**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## 在哪裡找到閘道： {#where-to-find-the-gateways}

你可以在同一個頁面（**Ultimate Multisite > Settings > Payments**）設定付款閘道。就在 **啟用中的付款閘道** 下方，你將能看到：_Stripe_、_Stripe_ _Checkout_、_PayPal_ 和 _Manual_。

![列出 Stripe、Stripe Checkout、PayPal 和 Manual 的啟用中付款閘道區段](/img/config/payments-active-gateways.png)

我們為每個付款閘道都有專門的文章，會引導你完成設定步驟，你可以在下方連結找到。

你可以檢視並編輯付款詳細資料：

![付款編輯介面](/img/admin/payment-edit.png)

以下是付款編輯頁面的完整檢視：

![付款編輯完整介面](/img/admin/payment-edit-full.png)

這裡也有付款閘道設定的完整檢視：

![付款閘道設定完整頁面](/img/config/settings-payments-gateways-full.png)

**設定 Stripe 閘道**

**設定 PayPal 閘道**** **

**設定手動付款**

現在，如果你想使用 _WooCommerce_、_GoCardless_ 或 _Payfast_ 作為你的付款閘道，你需要**安裝並設定它們的 add-ons**。

### 如何安裝 WooCommerce add-on： {#how-to-install-the-woocommerce-add-on}

我們了解 _Stripe_ 和 _PayPal_ 在某些國家/地區無法使用，這限制或阻礙 Ultimate Multisite 使用者有效使用我們的 plugin。因此我們建立了一個 add-on 來整合 _WooCommerce,_，這是一個非常受歡迎的電子商務 plugin。世界各地的開發者建立了 add-ons，將不同的付款閘道整合到其中。我們利用這一點，擴充你可搭配 Ultimate Multisite 計費系統使用的付款閘道。

_**重要：** Ultimate Multisite: WooCommerce Integration 需要 WooCommerce 至少在你的主要網站啟用。_

首先，請前往 add-ons 頁面。你可以前往 **Ultimate Multisite > Settings** 找到它。你應該會看到 **Add-ons** 表格。按一下 **Check our Add-ons**。

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

按一下 **Check our Add-ons** 後，你將被重新導向至 add-ons 頁面。在這裡你可以找到所有 Ultimate Multisite add-ons。按一下 **Ultimate Multisite: WooCommerce Integration** add-on。

![列出 Ultimate Multisite add-ons（包括 WooCommerce Integration）的 add-ons 頁面](/img/addons/addons-page.png)

將會彈出一個包含附加元件詳細資訊的視窗。只要點擊 **立即安裝**。

<!-- 螢幕截圖無法使用：Ultimate Multisite WooCommerce Integration 附加元件詳細資訊對話框，含立即安裝按鈕 -->

安裝完成後，你將被重新導向至插件頁面。在這裡，只要點擊 **網路啟用**，WooCommerce 附加元件就會在你的網路上啟用。

<!-- 螢幕截圖無法使用：插件頁面，含 WooCommerce Integration 附加元件的網路啟用連結 -->

啟用後，如果你的網站仍未安裝並啟用 WooCommerce 插件，你將會收到提醒。

<!-- 螢幕截圖無法使用：管理員通知，提醒管理員安裝並啟用 WooCommerce 插件 -->

若要進一步了解 WooCommerce Integration 附加元件，**請點擊這裡**。

### 如何安裝 GoCardless 附加元件： {#how-to-install-the-gocardless-add-on}

安裝 _GoCardless_ 附加元件的步驟與 _WooCommerce_ 附加元件幾乎相同。請前往附加元件頁面，並選取 **Ultimate Multisite: GoCardless Gateway** 附加元件。

<!-- 螢幕截圖無法使用：附加元件頁面，Ultimate Multisite GoCardless Gateway 附加元件已醒目標示 -->

附加元件視窗將會彈出。點擊 **立即安裝**。

<!-- 螢幕截圖無法使用：Ultimate Multisite GoCardless Gateway 附加元件詳細資訊對話框，含立即安裝按鈕 -->

安裝完成後，你將被重新導向至插件頁面。在這裡，只要點擊 **網路啟用**，_GoCardless_ 附加元件就會在你的網路上啟用。

<!-- 螢幕截圖無法使用：插件頁面，含 GoCardless Gateway 附加元件的網路啟用連結 -->

若要了解如何開始使用 _GoCardless_ gateway，**請閱讀這篇文章**。

### 如何安裝 Payfast 附加元件： {#how-to-install-the-payfast-add-on}

前往附加元件頁面，並選取 **Ultimate Multisite: Payfast Gateway** 附加元件。

<!-- 螢幕截圖無法使用：附加元件頁面，Ultimate Multisite Payfast Gateway 附加元件已醒目標示 -->

附加元件視窗將會彈出。點擊 **立即安裝。**

<!-- 螢幕截圖無法使用：Ultimate Multisite Payfast Gateway 附加元件詳細資訊對話框，含立即安裝按鈕 -->

安裝完成後，你將被重新導向至插件頁面。在這裡，只要點擊 **網路啟用**，_Payfast_ 附加元件就會在你的網路上啟用。

<!-- 螢幕截圖無法使用：插件頁面，含 Payfast Gateway 附加元件的網路啟用連結 -->
