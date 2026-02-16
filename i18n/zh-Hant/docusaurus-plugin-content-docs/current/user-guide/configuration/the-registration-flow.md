---
title: 註冊流程
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# 註冊流程（v2）

_**重要提醒：本文適用於 Ultimate Multisite 2.x 版本。**_

使用者可以透過多種方式在您的網路上註冊。他們可以使用您的註冊表單，或是透過預先選定方案的分享連結來註冊。在這裡，我們將說明您的客戶如何透過不同的途徑在您的網路上註冊，以及註冊完成後會發生什麼事。

## 使用註冊表單：

這是標準的註冊流程。您建立一個包含**結帳表單**的註冊頁面，客戶將會在這裡註冊並訂閱方案。如果您需要的話，可以建立多個註冊頁面，每個頁面使用不同的註冊表單。

預設的註冊頁面是 [_**yourdomain.com/register**_](http://yourdomain.com/register)，但您可以隨時在 **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** 中變更這個設定。

當使用者進入您的註冊頁面後（通常是點擊**登入**或**立即購買**按鈕），他們會看到您的註冊表單。

![註冊頁面上顯示的註冊表單](/img/config/checkout-forms-list.png)

他們只需要填寫所有必填欄位——電子郵件、使用者名稱、密碼等——然後付款購買方案。如果是註冊免費方案，或是有試用期且不需先提供付款資訊的付費方案，則只需確認電子郵件地址即可。

在「感謝您」頁面上，他們會看到一則訊息，告知是否需要確認電子郵件地址，或是網站已經啟用可以開始使用。

![註冊後的感謝頁面](/img/config/checkout-form-editor.png)

如果需要確認電子郵件地址，他們必須前往收件匣並點擊驗證連結。如果電子郵件地址未經驗證，網站將不會被啟用。

如果他們註冊的是付費方案，或是您的網路不強制要求電子郵件驗證，他們的網站會在結帳完成後立即啟用，並且會看到一個連結可以登入 dashboard。

![網站已啟用，顯示登入 dashboard 的連結](/img/config/checkout-form-editor.png)

## 使用分享連結：

使用分享連結註冊的流程基本上與註冊表單相同，唯一的差別是透過分享連結，您的客戶可以在結帳表單上預先選定產品或網站範本（請參閱「透過網址參數預先選擇產品和範本」章節），或是自動套用優惠碼（請參閱「使用網址參數」章節）。

註冊流程本身是一樣的：他們需要填寫姓名、使用者名稱、電子郵件地址、網站名稱和標題等資訊，但方案或網站範本會預先為他們選好。

### 使用手動付款註冊：

如果您不想使用 PayPal、Stripe 或 Ultimate Multisite 及其附加整合提供的其他付款閘道，您可以為客戶使用手動付款方式。這樣一來，您可以在客戶於網路上註冊後，透過您偏好的付款處理器為他們產生帳單。

註冊流程與上述完全相同，但在註冊頁面上，您的客戶會看到一則訊息，說明他們將收到一封電子郵件，內含完成付款的進一步說明。

![註冊時的手動付款訊息](/img/config/settings-payment-gateways.png)

註冊完成後，他們會看到您設定的付款說明（同時也會收到電子郵件通知）。

![註冊後顯示的付款說明](/img/config/settings-payment-gateways.png)

您可以在 **Ultimate Multisite > Settings > Payments** 中開啟 **Manual** 付款選項後，變更付款說明：

![手動付款開關與付款說明欄位](/img/config/settings-payment-gateways.png)

當您的客戶完成手動付款並發送確認給您之後，您需要**手動確認付款**才能啟用客戶的會員資格和網站。

要進行此操作，請前往 **Ultimate Multisite > Payments** 並找到該客戶的付款記錄。此時應該仍顯示 **Pending** 狀態。

![付款列表中顯示待處理的手動付款](/img/admin/payments-list.png)

點擊付款編號，您就可以將狀態變更為 **Completed**。

![付款詳細資訊頁面](/img/admin/payments-list.png)

![將付款狀態變更為 Completed](/img/admin/payments-list.png)

將狀態變更為 **Completed** 後，您應該會看到 **Activate membership** 訊息。將此選項切換為**開啟**，即可啟用與該客戶關聯的會員資格和網站。然後，點擊 **Save Payment**。

![啟用會員資格開關與 Save Payment 按鈕](/img/admin/payments-list.png)

您的客戶現在應該可以存取 dashboard，並使用他們訂閱的所有功能了。
