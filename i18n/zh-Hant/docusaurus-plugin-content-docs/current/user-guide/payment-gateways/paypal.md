---
title: 設定 PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# 設定 PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**重要注意事項：本文適用於 Ultimate Multisite 2.x 版本。**_

你可以在我們的付款設定頁面啟用最多四種付款方式：Stripe、Stripe Checkout、PayPal 和手動。在本文中，我們將了解如何整合 **PayPal**。

就像 Stripe 一樣，PayPal 廣泛用於線上付款，尤其是在 WordPress 網站上。本文將引導你了解如何在你的網路上使用 PayPal 作為可用的付款方式。

請注意，你需要擁有 **PayPal Business Account** 才能取得此整合所需的 API 憑證。

## 在你的網路上啟用 PayPal {#enabling-paypal-on-your-network}

若要在你的網路上啟用 PayPal 作為可用的付款方式，請前往 **Ultimate Multisite > 設定 > 付款** 分頁，並勾選 PayPal 旁邊的方塊。

![在啟用中的付款 gateway 中啟用 PayPal](/img/config/settings-payment-gateways.png)

## 使用引導式設定精靈 {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 在付款 gateway 設定中加入了引導式 PayPal 設定精靈。啟用 PayPal 後，請在 **Ultimate Multisite > 設定 > 付款** 使用精靈，選擇你想如何連接 gateway，並在儲存前確認仍需要哪些憑證。

此精靈支援兩種設定路徑：

* **手動輸入憑證**：當你已經有 PayPal API 憑證、你的 Account 無法使用 OAuth 設定，或你偏好自行從 PayPal 複製憑證時，請使用此路徑。在 PayPal 欄位中輸入 API Username、API Password 和 API Signature，然後儲存付款設定。
* **OAuth 連線閘門**：只有在你的安裝可用且已啟用 OAuth 選項時，才使用此路徑。精靈會在功能旗標後方顯示 OAuth 流程，因此沒有該旗標的網路會繼續使用手動輸入憑證欄位。

如果你在精靈中看不到 OAuth 選項，請完成下方的手動輸入憑證流程。此 gateway 使用與先前 Ultimate Multisite 2.x 版本相同的 PayPal Business API 憑證。

## 取得 PayPal API 憑證 {#getting-the-paypal-api-credentials}

一旦 PayPal 啟用為付款 gateway，你就需要填入 PayPal API **Username**、PayPal API **Password** 和 PayPal API **Signature** 的欄位。

你可以透過登入你的 PayPal [正式](https://www.paypal.com/home) 或 [Sandbox](https://www.sandbox.paypal.com/home) Account 取得這些資訊。

（請記得，你可以使用 **sandbox 模式** 來測試付款，並查看 gateway 是否已正確設定。只要在對應區段切換開啟即可。）

![PayPal API 憑證欄位與 sandbox 模式切換](/img/config/settings-payment-gateways.png)

若要為你的 PayPal Account 申請 API Signature 或 Certificate 憑證：

  1. 前往你的 [Account 設定](https://www.paypal.com/businessmanage/account/accountAccess)。

  2. 在 **API 存取** 區段中，點擊 **更新**。
![含有 API 存取區段的 PayPal Account 設定](/img/config/settings-payment-gateways.png)

  3. 在 **NVP/SOAP API 整合（傳統版）** 下，點擊 **管理 API 憑證**。
![PayPal NVP/SOAP API 整合的管理 API 憑證](/img/config/settings-payment-gateways.png)

     * 如果你已經產生 API Signature 或 Certificate，你將被重新導向到可以找到憑證的頁面。

     * _**注意：** 如果系統提示你驗證 PayPal Account，請依照畫面上的指示操作。_

  4. 選擇以下選項中的_一個_，然後點擊 **同意並提交**。

     * **申請 API Signature** – 選擇此項以使用 API Signature 驗證。

     * **申請 API Certificate** – 選擇此項以使用 API Certificate 驗證。

  5. PayPal 會如下產生你的 API 憑證：
![PayPal 產生的 API 憑證](/img/config/settings-payment-gateways.png)

     * **API Signature 憑證** 包含 API Username、API Password 和 Signature，且不會過期。為了提高安全性，這些值預設為隱藏。點擊 **顯示/隱藏** 以切換顯示或隱藏。完成後，點擊 **完成**。

     * **API Certificate 憑證** 包含 API Username、API Password 和 Certificate，並會在三年後自動過期。點擊 **下載 Certificate** 將 API Certificate 儲存到你的桌面。

就這樣，你的 PayPal 付款整合已完成！

如果你對 PayPal 設定有任何疑問，可以參考 PayPal 的 [Help Center](https://www.paypal.com/br/smarthelp/home)。
