---
title: 設定 Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# 設定 Stripe 付款閘道（v2）

_**重要提醒：本文適用於 Ultimate Multisite 2.x 版本。**_

您可以在付款設定頁面啟用最多四種付款方式：Stripe、Stripe Checkout、PayPal 和手動付款。本文將說明如何整合 **Stripe**。

## 啟用 Stripe

若要在您的網路上啟用 Stripe 作為可用的付款閘道，請前往 **Ultimate Multisite > Settings > Payments**，並在「Active Payment Gateways」區段中勾選 **Stripe** 或 **Stripe Checkout** 旁邊的開關。

![在 Active Payment Gateways 中啟用 Stripe](/img/config/settings-payment-gateways.png)

### Stripe 與 Stripe Checkout 的差異：

**Stripe：** 此方式會在結帳時直接顯示信用卡號碼輸入欄位。

![結帳時的 Stripe 內嵌信用卡欄位](/img/config/settings-payment-gateways.png)

**Stripe Checkout：** 此方式會在結帳時將顧客導向 Stripe Checkout 頁面。

![結帳時的 Stripe Checkout 導向頁面](/img/config/settings-payment-gateways.png)

取得您的 Stripe API 金鑰

啟用 Stripe 作為付款閘道後，您需要填寫 **Stripe Publishable Key** 和 **Stripe Secret Key** 欄位。您可以登入 Stripe 帳戶來取得這些金鑰。

_**注意：** 您可以啟用 **Sandbox mode** 來測試付款方式是否正常運作。_

![Stripe API 金鑰欄位和 Sandbox mode 開關](/img/config/settings-payment-gateways.png)

在您的 Stripe 控制台中，點擊右上角的 **Developers**，然後在左側選單中選擇 **API Keys**。

![Stripe 控制台的 Developers 區段與 API Keys](/img/config/settings-payment-gateways.png)

您可以選擇是否使用 **Test Data**（用於在正式網站上測試整合是否正常運作）。若要切換，請點擊 **Viewing test data** 開關。

![Stripe 的 Viewing test data 開關](/img/config/settings-payment-gateways.png)

從 **Token** 欄位複製 **Publishable key** 和 **Secret key** 的值，並貼到 Ultimate Multisite Stripe Gateway 的欄位中。然後點擊 **Save Changes**。

![Stripe 的 Publishable key 和 Secret key 值](/img/config/settings-payment-gateways.png)

![將 Stripe 金鑰貼到 Ultimate Multisite 設定中](/img/config/settings-payment-gateways.png)

## 設定 Stripe Webhook

Stripe 會發送 webhook 事件，在**您的 Stripe 帳戶**發生任何事件時通知 Ultimate Multisite。

點擊 **Developers**，然後在左側選單中選擇 **Webhooks**。接著在右側點擊 **Add endpoint**。

![Stripe Webhooks 頁面與 Add endpoint 按鈕](/img/config/settings-payment-gateways.png)

您需要一個 **Endpoint URL**。Ultimate Multisite 會自動產生端點網址，您可以在 **Ultimate Multisite Stripe Gateway** 區段的 **Webhook Listener URL** 欄位下方找到它。

![Stripe 閘道設定中的 Webhook Listener URL 欄位](/img/config/settings-payment-gateways.png)

**複製**端點網址，並**貼到** Stripe 的 **Endpoint URL** 欄位中。

![將端點網址貼到 Stripe webhook 設定中](/img/config/settings-payment-gateways.png)

接下來是選擇 **Event**。在此選項下，您只需勾選 **Select all events** 方塊，然後點擊 **Add events**。完成後點擊 **Add Endpoint** 儲存變更。

![選擇所有事件並新增 Stripe 端點](/img/config/settings-payment-gateways.png)

大功告成，您的 Stripe 付款整合已完成！
