---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhook（v2）初探

_**注意：此功能或文章適用於進階使用者。**_

**Webhook** 是一種讓應用程式或軟體（例如 Ultimate Multisite）將即時資訊提供給其他應用程式的方式。Webhook 會在事件發生的當下將資料或 payload 傳送給其他應用程式，這意味著您可以**立即取得資料。**

當您需要在每次觸發事件時，將 Ultimate Multisite 的特定資料整合或傳遞到另一個 CRM 或系統，這個功能就非常實用。舉例來說，您可能需要在每次建立新使用者帳號時，將使用者的姓名和電子郵件地址傳送到郵寄清單。

## 如何建立 webhook

要建立 webhook，請前往您的多站網路管理控制台。點選 **Ultimate Multisite > Webhooks > Add New Webhook**。

![Webhook 列表頁面，包含 Add New Webhook 按鈕](/img/admin/webhooks-list.png)

建立新的 webhook 時，您需要填寫 **Name（名稱）、URL** 和 **Event（事件）** 等資訊。您可以為 webhook 使用任何想要的名稱。最重要的欄位是 URL 和 Event。

![新增 webhook 表單，包含 Name、URL 和 Event 欄位](/img/admin/webhooks-list.png)

URL 是 Ultimate Multisite 傳送 **payload 或資料**的**端點或目的地**。這是接收資料的應用程式。

Zapier 是使用者最常用來簡化第三方應用程式整合的解決方案。如果沒有像 Zapier 這樣的平台，您就需要手動建立自訂函式來接收並處理資料。請參閱這篇文章，了解**如何搭配 Zapier 使用 Ultimate Multisite webhook**。

在本文中，我們將介紹 webhook 運作的基本概念，以及 Ultimate Multisite 中可用的事件。我們會使用一個名為 [requestbin.com](https://requestbin.com/) 的第三方網站。這個網站可以讓我們建立端點並接收 payload，而不需要撰寫任何程式碼。_**聲明：它只會顯示資料已被接收。**_ 不會對 payload 進行任何處理或動作。

前往 [requestbin.com](https://requestbin.com/) 並點選 Create Request Bin。

![RequestBin 網站的 Create Request Bin 按鈕](/img/admin/webhooks-list.png)

點選該按鈕後，如果您已有帳號，系統會要求您登入；若沒有則需要註冊。如果您已有帳號，系統會直接帶您進入他們的 dashboard。在 dashboard 上，您會立即看到可用於建立 Ultimate Multisite webhook 的端點或 URL。

![RequestBin dashboard 顯示端點 URL](/img/admin/webhooks-list.png)

請複製該 URL 並返回 Ultimate Multisite。將端點貼到 URL 欄位，然後從下拉選單中選擇一個事件。在這個範例中，我們將選擇 **Payment Received**。

這個事件會在使用者完成付款時觸發。所有可用的事件、說明和 payload 都列在頁面底部。點選 **Add New Webhook** 按鈕以儲存 webhook。

![已設定 Payment Received 事件的 Webhook](/img/admin/webhooks-list.png)

現在我們可以發送測試事件到端點，確認我們建立的 webhook 是否正常運作。我們可以點選所建立 webhook 下方的 **Send Test Event** 來執行此操作。

![Webhook 下方的 Send Test Event 選項](/img/admin/webhooks-list.png)

這會顯示一個確認視窗，表示測試成功。

![Webhook 測試事件成功確認](/img/admin/webhooks-list.png)

現在如果我們返回 _Requestbin_ 網站，就會看到 payload 已被接收，其中包含一些測試資料。

![RequestBin 顯示已接收的 webhook payload 資料](/img/admin/webhooks-list.png)

這就是 webhook 和端點運作的基本原理。如果您要建立自訂端點，就需要建立自訂函式來處理從 Ultimate Multisite 接收的資料。
