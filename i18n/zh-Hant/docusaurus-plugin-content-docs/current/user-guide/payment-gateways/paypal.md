---
title: 設定 PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# 設定 PayPal 付款閘道 (v2)

_**重要說明：本文適用於 Ultimate Multisite 2.x 版本。**_

您可以在付款設定頁面啟用最多四種付款方式：Stripe、Stripe Checkout、PayPal 和手動付款。本文將說明如何整合 **PayPal**。

如同 Stripe，PayPal 是廣泛使用的線上付款方式，特別是在 WordPress 網站上。本文將引導您如何在網站網絡中啟用 PayPal 作為付款選項。

請注意，您需要擁有 **PayPal Business 帳戶**，才能取得整合所需的 API 憑證。

## 在網絡中啟用 PayPal

若要在網站網絡中啟用 PayPal 作為付款方式，請前往 **Ultimate Multisite > Settings > Payments** 分頁，勾選 PayPal 旁邊的核取方塊。

![在可用付款閘道中啟用 PayPal](/img/config/settings-payment-gateways.png)

## 取得 PayPal API 憑證

啟用 PayPal 付款閘道後，您需要填寫 PayPal API **Username**、PayPal API **Password** 和 PayPal API **Signature** 欄位。

您可以登入 PayPal [正式環境](https://www.paypal.com/home)或[沙盒環境](https://www.sandbox.paypal.com/home)帳戶來取得這些資訊。

（請記住，您可以使用**沙盒模式**來測試付款功能，確認閘道是否正確設定。只需開啟對應的切換選項即可。）

![PayPal API 憑證欄位與沙盒模式切換](/img/config/settings-payment-gateways.png)

若要為您的 PayPal 帳戶申請 API Signature 或 Certificate 憑證：

  1. 前往[帳戶設定](https://www.paypal.com/businessmanage/account/accountAccess)。

  2. 在 **API access** 區段中，點擊 **Update**。  
![PayPal 帳戶設定中的 API access 區段](/img/config/settings-payment-gateways.png)

  3. 在 **NVP/SOAP API integration (Classic)** 下方，點擊 **Manage API credentials**。  
![PayPal NVP/SOAP API integration 管理 API 憑證](/img/config/settings-payment-gateways.png)

     * 如果您已經產生過 API Signature 或 Certificate，系統會將您導向至可查看憑證的頁面。

     * _**注意：**如果系統提示您驗證 PayPal 帳戶，請依照畫面上的指示操作。_

  4. 選擇以下_其中一個_選項，然後點擊 **Agree and Submit**。

     * **Request API Signature** – 選擇此選項以使用 API Signature 驗證。

     * **Request API Certificate** – 選擇此選項以使用 API Certificate 驗證。

  5. PayPal 會產生您的 API 憑證，如下所示：  
![PayPal 產生的 API 憑證](/img/config/settings-payment-gateways.png)

     * **API Signature 憑證**包含 API Username、API Password 和 Signature，不會過期。為了安全起見，這些值預設為隱藏狀態。點擊 **Show/Hide** 即可切換顯示或隱藏。完成後，點擊 **Done**。

     * **API Certificate 憑證**包含 API Username、API Password 和 Certificate，會在三年後自動過期。點擊 **Download Certificate** 將 API Certificate 下載到您的電腦。

大功告成，您的 PayPal 付款整合已完成！

如果您對 PayPal 設定有任何問題，可以參閱 PayPal 的[說明中心](https://www.paypal.com/br/smarthelp/home)。
