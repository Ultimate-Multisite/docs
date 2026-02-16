---
title: 透過 Zapier 註冊帳戶
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# 事件：透過 Zapier 註冊帳號

在 [整合 Ultimate Multisite 與 Zapier](zapier.md) 這篇文章中，我們介紹了如何使用 Zapier 根據觸發條件和事件，在 Ultimate Multisite 中執行不同的操作。在本文中，我們將示範如何整合第三方應用程式。我們會以 Google Sheets 作為資料來源，將資訊傳送到 Ultimate Multisite 來註冊帳號。

首先，你需要在 Google Drive 中建立一個 **Google Sheet**。請確保每個欄位都有明確的定義，這樣之後對應資料時會比較方便。

![Google Sheet 顯示客戶資料欄位](/img/admin/webhooks-list.png)建立 Google Sheet 後，你可以登入 Zapier 帳號並開始建立一個 zap。

![Zapier 儀表板，開始建立 zap](/img/admin/webhooks-list.png)在「**App event**」的搜尋欄位中，選擇「**Google Sheets**」

![選擇 Google Sheets 作為 app event](/img/admin/webhooks-list.png)

接著在「**Event**」欄位中選擇「**New spreadsheet row**」，然後點擊「**Continue**」

![在 Zapier 中選擇 New spreadsheet row 事件](/img/admin/webhooks-list.png)下一步會要求你選擇儲存 **Google Sheet** 的 **Google 帳號**。請確認選擇的是正確的 Google 帳號。

![選擇 Google Sheet 所在的 Google 帳號](/img/admin/webhooks-list.png)

在「**Set up trigger**」中，你需要選擇並指定要使用的 Google 試算表和工作表，這是資料的來源。填寫完成後點擊「**Continue**」

![設定觸發條件，選擇試算表和工作表](/img/admin/webhooks-list.png)接下來是「**test your trigger**」，確保你的 Google Sheet 已正確連接。

![Zapier 中的測試觸發條件步驟](/img/admin/webhooks-list.png)如果測試成功，你會看到結果顯示試算表中的一些數值。點擊「**Continue**」繼續進行。

![觸發條件測試成功，顯示試算表數值](/img/admin/webhooks-list.png)下一步是設定第二個動作，在 Ultimate Multisite 中建立或註冊帳號。在搜尋欄位中選擇「**Ultimate Multisite(2.0.2)**」

![選擇 Ultimate Multisite 作為動作應用程式](/img/admin/webhooks-list.png)

在「**Event**」欄位中，選擇「**Register an Account in Ultimate Multisite**」，然後點擊「**Continue**」按鈕。

![Register an Account in Ultimate Multisite 動作事件](/img/admin/webhooks-list.png)在「**Set up an action**」中，你會看到客戶資料、會員資格、產品等不同欄位。你可以將 Google Sheet 中的數值對應到適當的欄位，如下方截圖所示。

![將 Google Sheet 數值對應到 Ultimate Multisite 欄位](/img/admin/webhooks-list.png)

完成數值對應後，你可以測試這個動作。

![測試註冊帳號的 Zapier 動作](/img/admin/webhooks-list.png)
