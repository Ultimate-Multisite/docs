---
title: 透過 Zapier 註冊 Account
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# 事件：透過 Zapier 註冊 Account

在文章 [整合 Ultimate Multisite 與 Zapier](zapier.md) 中，我們討論了如何使用 Zapier 根據觸發條件與事件，在 Ultimate Multisite 內執行不同動作。在本文中，我們將示範如何整合第三方應用程式。我們將使用 Google Sheets 作為資料來源，並將資訊傳送到 Ultimate Multisite 以註冊 Account。

在連接 Zapier 之前，請前往 **Ultimate Multisite > Settings > API & Webhooks**，並確認 API 已啟用。當 Zapier 要求 Ultimate Multisite Account 憑證時，請從此畫面複製 API Key 與 API Secret。

![包含 API Key、API Secret 與 Enable API 選項的 API and Webhooks 設定](/img/admin/settings-api-webhooks.png)

首先，你需要在 Google Drive 下建立一個 **Google Sheet**。請確保你正確定義每一欄，以便稍後可以輕鬆對應資料。

建立 Google sheet 後，你可以登入你的 Zapier Account 並開始建立 zap。

在 **"App event"** 的搜尋欄位下，選取 **"Google Sheets"**


接著在「**Event**」欄位選取「**New spreadsheet row**」，然後按下「**Continue**」

下一步會要求你選取儲存 **Google Sheet** 的 **Google Account**。因此，只要確保已指定正確的 google account。


在「**Set up trigger**」下，你需要選取並指定將作為資料來源的 google spreadsheet 與 worksheet。請繼續填寫這些項目，然後按下「**Continue**」

接下來是「**test your trigger**」，以確保你的 google sheet 已正確連接。

如果測試成功，你應該會看到結果顯示試算表中的一些值。點擊「**Continue**」繼續。

下一步是設定第二個動作，用於在 Ultimate Multisite 中建立或註冊 Account。在搜尋欄位選取「**Ultimate Multisite(2.0.2)**」


在「**Event**」欄位下，選取「**Register an Account in Ultimate Multisite**」，然後點擊「**Continue**」按鈕。

在「**Set up an action**」下，你會看到可用於客戶資料、memberships、產品等的不同欄位。你可以對應 google sheet 下的值，並將它們指定到應填入的適當欄位，如下方螢幕截圖所示。


對應值之後，你可以測試該動作。
