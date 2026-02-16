---
title: 設定手動付款
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# 設定手動付款（v2）

_**重要提醒：本文適用於 Ultimate Multisite 2.x 版本。**_

如果您的使用者無法使用 **Stripe** 或 **PayPal**，手動付款可以讓您提供其他付款方式。這可以是電匯、銀行轉帳，或是使用者當地可用的任何付款方式。

## 如何啟用手動付款

設定手動付款非常簡單。您只需要在付款閘道中啟用它，並填寫詳細的說明，告訴使用者如何付款。

首先，前往 **Ultimate Multisite > Settings > Payments**。在 **Payment Gateways** 下方，將 **Manual** 切換為開啟。接著會出現 **Payment Instructions** 欄位。

在這個欄位中，填入客戶完成付款所需的資訊。例如，您可以提供銀行帳戶資料和電子郵件，讓客戶付款後能寄送確認給您。

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

設定完成後，點擊 **Save Settings** 即可。當使用者註冊加入您的網路時，他們會看到一則訊息，說明將會收到您的付款指示以完成購買。

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

他們也會在您的 **Thank You** 頁面上看到付款指示。

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## 確認手動付款

若要確認手動付款，請前往左側選單的 **Payments**。在這裡您可以看到網路上所有的付款紀錄及詳細資訊，包括付款 **status**（狀態）。手動付款在您手動更改之前，狀態會一直顯示為 **Pending**。

![Payments list showing pending manual payment](/img/admin/payments-list.png)

點擊 **reference code**（參考代碼）進入付款頁面。在這個頁面中，您可以看到待處理付款的所有詳細資訊，例如參考編號、產品、時間戳記等。

![Payment details page with reference code and products](/img/admin/payments-list.png)

在右側欄位中，您可以變更付款狀態。將狀態改為 **Completed**，並開啟 **Activate Membership** 選項，就能啟用客戶的網站，讓他們的會員資格生效。

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
