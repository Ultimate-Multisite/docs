---
title: 註冊 API 端點
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite Register API 端點

在這篇教學中，你將學習如何使用 Ultimate Multisite 的 /register API 端點，為你網路中的新客戶建立完整的註冊流程，以及如何透過 Zapier 來實現這個功能。

這個端點使用 POST 方法，呼叫網址為 _**https://yoursite.com/wp-json/wu/v2/register**_。在這次呼叫中，你的網路將執行以下 4 個程序：

  * 建立一個新的 WordPress 使用者，或透過使用者 ID 識別現有使用者。

  * 建立一個新的 Ultimate Multisite 客戶，或透過客戶 ID 識別現有客戶。

  * 在 WordPress 網路中建立一個新網站。

  * 最後，在 Ultimate Multisite 中建立一個新的會員資格。

進行這個流程前，你需要取得 API 憑證。請前往網路管理後台，點選 **Ultimate Multisite > Settings** > **API & Webhooks**，找到 API Settings 區段。

![Ultimate Multisite 中的 API Settings 區段](/img/config/settings-api.png)  
勾選 **Enable API** 並取得你的 API 憑證。

現在，讓我們來了解這個端點，然後在 Zapier 中建立一個註冊動作。

## 端點 body 參數

讓我們先概覽需要傳送給端點的最少資訊。本文結尾會提供完整的呼叫範例。

### 客戶

以下是建立使用者和 Ultimate Multisite 客戶所需的資訊：

"customer_id" : integer

你可以傳送網路中已建立的客戶 ID。如果沒有提供，系統將使用以下資訊來建立新客戶和新的 WordPress 使用者。使用者 ID 也可以用與客戶 ID 相同的方式傳送。

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **會員資格**

這個物件中唯一需要的資訊是會員資格狀態。

"membership" { "status" : "string", // 可選值："pending"、"active"、"trialing"、"expired"、"on-hold"、"canceled" },

### **產品**

產品以陣列形式提供，包含你網路中 1 個或多個產品 ID。請注意，這個端點不會建立產品。請參閱 Ultimate Multisite 的文件以深入了解產品建立端點。

**"products" : [1,2],**

### 付款

與會員資格相同，我們只需要狀態。

**"payment" { "status" : "string", // 可選值："pending"、"completed"、"refunded"、"partially-refunded"、"partially-paid"、"failed"、"canceled" },**

### 網站

最後，在 body 結尾我們需要網站的 URL 和標題，這兩項都放在 Site 物件中。

**"site" : { "site_url" : "string", "site_title" : "string" }**

register 端點會回傳一個陣列，包含新建立的會員資格資訊。

## 在 Zapier 中建立動作

隨著這個更強大的帳戶建立端點推出，你也可以在 Zapier 中使用新的動作。

你知道如何使用並充分享受新版 Zapier 提供的所有功能嗎？在這裡了解更多。(link?)

### 建立動作

為了更好地說明如何搭配 Zapier 使用註冊端點，讓我們建立一個與 Google Forms 的整合。每當表單被填寫且資訊儲存到表單的回應試算表時，Ultimate Multisite 網路就會建立一個新的會員資格。

在 Google Forms 中，建立一個包含在網路中建立新會員資格所需最少欄位的表單。

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

接著在 Zapier 中，建立一個新的 Zap，並透過儲存資料的試算表連接你建立的 Google 表單。

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

完成！Google Forms 表單已與 Zapier 連接，並準備好與網路整合。現在讓我們繼續設定每當 Google Forms 被填寫時觸發的動作。

找到新的 Ultimate Multisite 應用程式並選取它。對於這種 Zap，請選擇 Register 選項。

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

完成第一步後，選擇要與這個 Zap 連接的帳戶。<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

這是整個流程中最關鍵的部分。我們需要將 Google Forms 傳來的欄位與本文前一節說明的 register 端點所需的最少欄位進行配對。

在這個範例中，我們只需要設定使用者名稱、電子郵件、密碼、名稱和網站 URL。其餘部分則預先設定好，讓所有透過這個 Google Forms 產生的會員資格都遵循相同的產品和狀態模式。

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

資訊設定完成後，進行最後的測試。在最後一個畫面中，你可以看到所有將傳送給端點的欄位、對應的資訊，以及將留空傳送的欄位。<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

測試你的新 Zap，它應該會順利完成。如果發生任何錯誤，請檢查所有欄位是否正確傳送。由於資訊量較大，有些細節可能會被忽略。

### 完整端點參數

以下是完整的呼叫範例，以及所有可傳送的欄位。

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // 可選值："pending"、"active"、"trialing"、"expired"、"on-hold"、"cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // 可選值："pending"、"completed"、"refunded"、"partially-refunded"、"partially-paid"、"failed"、"cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
