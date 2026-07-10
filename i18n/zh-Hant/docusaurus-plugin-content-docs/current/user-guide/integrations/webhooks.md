---
title: 網路鉤子
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks 初探 (v2) {#a-first-look-on-webhooks-v2}

_**注意：請注意，此功能或文章適合進階使用者。**_

**webhook** 是讓 Ultimate Multisite 之類的應用程式或軟體，能即時向其他應用程式提供資訊的一種方式。webhook 會在事件發生時將資料或 payloads 傳送到其他應用程式，這表示你會**立即取得資料。**

如果你需要在每次事件被觸發時，將某些資料從 Ultimate Multisite 整合或傳遞到另一個 CRM 或系統，這會很有幫助。例如，每次建立新的使用者 Account 時，你需要將使用者的姓名與電子郵件地址傳送到郵寄清單。

## 如何建立 webhook {#how-to-create-a-webhook}

若要建立 webhook，請前往你的網路管理員 Dashboard。點選 **Ultimate Multisite > Webhooks > Add New Webhook。**

![含有 Add New Webhook 按鈕的空白 Webhooks 清單頁面](/img/admin/webhooks-list-empty.png)

接著你可以編輯 webhook 設定：

![含有 Name、Event 與 URL 欄位的 Add New Webhook 表單](/img/admin/webhook-add-modal.png)

建立新的 webhook 時，系統會要求你提供 **Name、URL** 和 **Event** 等資訊。你可以為你的 webhook 使用任何想要的名稱。最重要的欄位是 URL 和 Event。

![顯示 URL 欄位與 payload 預覽的 webhook 編輯介面](/img/admin/webhook-url-field.png)

URL 是 Ultimate Multisite 會將 **payload 或資料**傳送到的 **endpoint 或目的地**。這就是會接收資料的應用程式。

Zapier 是使用者最常用來讓與第三方應用程式整合更容易的解決方案。若沒有像 Zapier 這樣的平台，你將需要手動建立自訂函式來接收資料並處理它。請參閱這篇關於**如何搭配 Zapier 使用 Ultimate Multisite webhook** 的文章。

在本文中，我們將介紹 webhook 運作方式的基本概念，以及 Ultimate Multisite 中可用的事件。我們會使用一個名為 [requestbin.com](https://requestbin.com/) 的第三方網站。此網站可讓我們建立 endpoint 並接收 payload，而不需要撰寫任何程式碼。_**免責聲明：它所做的只是向我們顯示資料已被接收。**_ 不會對 payload 進行任何處理或任何形式的動作。

前往 [requestbin.com](https://requestbin.com/) 並點選 Create Request Bin。

點擊該按鈕後，如果你已經有帳號，它會要求你登入；否則請註冊。如果你已經有帳號，它會直接帶你到他們的 Dashboard。在他們的 Dashboard 上，你會立即看到可用來建立 Ultimate Multisite webhook 的 endpoint 或 URL。

繼續複製該 URL，然後回到 Ultimate Multisite。將 endpoint 放到 URL 欄位，並從下拉選單選擇一個事件。在此範例中，我們將選擇 **Payment Received**。

每當使用者付款時，就會觸發此事件。所有可用事件、其說明與 payloads 都列在頁面底部。點選 **Add New Webhook** 按鈕以儲存 webhook。

![已選取 Payment Received 的 webhook 事件下拉選單](/img/admin/webhook-event-picker.png)

現在我們可以將測試事件傳送到 endpoint，以查看我們建立的 webhook 是否正常運作。可以透過點選我們建立的 webhook 下方的 **Send Test Event** 來完成。

![顯示一個已設定 webhook 與 Send Test 動作的 Webhooks 清單](/img/admin/webhooks-list-populated.png)

這會顯示一個確認視窗，表示測試成功。

![傳送測試 payload 後的 webhook 測試事件結果](/img/admin/webhook-test-result.png)

現在如果我們回到 _Requestbin_ 網站，就會看到 payload 已被接收，並包含一些測試資料。

這就是 webhook 和 endpoints 運作方式的基本原理。如果你要建立自訂 endpoint，你需要建立自訂函式來處理你從 Ultimate Multisite 接收到的資料。
