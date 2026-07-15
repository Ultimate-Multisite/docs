---
title: Zapier 整合
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# 將 Ultimate Multisite 與 Zapier 整合

在其中一篇文章中，我們討論了 [Webhooks](webhooks.md)，以及它們如何用來與第三方應用程式整合。

使用 webhooks 有點複雜，因為它需要進階的程式撰寫與擷取 payload 的知識。使用 **Zapier** 是讓你繞過這些複雜性的方式。

Zapier 可與超過 5000+ 個應用程式整合，讓不同應用程式之間的溝通更容易。

你可以建立 **Triggers**，當你的網路上發生事件時就會觸發（例如建立 Account 並觸發 account_create 事件），或是在你的網路上產生 **Actions** 來回應外部事件（例如在你的 Ultimate Multisite 網路中建立新的 Account membership）。

這之所以可行，是因為 **Ultimate Multisite Zapier 的 triggers** 與 actions 是由 [REST API](https://developer.ultimatemultisite.com/api/docs/) 驅動。

## 如何開始 {#how-to-start}

首先，在 Zapier 應用程式清單中搜尋 Ultimate Multisite。或者，你也可以點擊[此連結](https://zapier.com/apps/wp-ultimo/integrations)。

前往你的 Dashboard，並按下左側邊欄上的 **+** **Create Zap** 按鈕來設定新的 Zap。

![含有 Create Zap 按鈕的 Zapier Dashboard](/img/admin/webhooks-list.png)

你將被重新導向到 Zap 建立頁面。

在搜尋框中輸入「wp ultimo」。點擊以選擇 **Beta** 版本選項。

![在 Zapier 應用程式清單中搜尋 WP Ultimo](/img/admin/webhooks-list.png)

選取我們的應用程式後，選擇可用事件：**New Ultimate Multisite Event**。

![選取 New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

現在我們需要讓 Zapier 存取**你的網路**。點擊 **Sign in** 會開啟一個新視窗，要求輸入 **API credentials**。

![Zapier 要求 API credentials 的 Sign in 提示](/img/admin/webhooks-list.png)

前往你的網路管理面板，導覽至 **Ultimate Multisite > Settings** > **API & Webhooks**，並尋找 API Settings 區段。

選取 **Enable API** 選項，因為此連線需要它才能運作。

![含有 API Settings 與 Enable API 選項的 API and Webhooks 設定](/img/admin/settings-api-webhooks.png)

使用 API Key 與 API Secret 欄位上的 **Copy to Clipboard** 圖示，並將這些值貼到整合畫面中。

在 URL 欄位中，放入你的網路完整 URL，包含通訊協定（HTTP 或 HTTPS）。

![含有 API Key、Secret 與 URL 欄位的 Zapier 整合畫面](/img/admin/webhooks-list.png)

點擊 **Yes, Continue** 按鈕以進入下一步。如果一切順利，你應該會看到新的已連線 Account！點擊 **Continue** 以建立新的 trigger。

## 如何建立新的 Trigger {#how-to-create-a-new-trigger}

現在你的 Account 已連線，你可以看到可用事件。此教學中我們選擇 **payment_received** 事件。

![在 Zapier trigger 中選取 payment_received 事件](/img/admin/webhooks-list.png)

選取事件並點擊 **continue** 後，會出現一個**測試步驟**。

![Zapier trigger 的測試步驟](/img/admin/webhooks-list.png)

在這個階段，Zapier 會測試你的 Zap 是否能**擷取該事件的特定 payload**。未來相同類型的事件中，將會送出具有相同結構的資訊。

![Zapier trigger 測試已成功完成並顯示 payload](/img/admin/webhooks-list.png)

在我們的教學中，測試已**成功完成**，並回傳 payload 範例資訊。這些範例資訊在建立 actions 時將有助於引導我們。你的 trigger 現在已建立完成，並準備好連接到其他應用程式。

## 如何建立 Actions {#how-to-create-actions}

Actions 使用來自其他 triggers 的資訊，在你的網路中建立新的項目。

在**建立 action 步驟**中，你將選擇 Ultimate Multisite **Beta**，以及 **Create Items on Ultimate Multisite** 選項。

![使用 Create Items on Ultimate Multisite 建立 action](/img/admin/webhooks-list.png)

在下一步中，你可以像我們在**如何開始**中所做的一樣建立你的驗證，或選取已建立的驗證。在本教學中，我們將選擇先前建立的相同驗證。

![為 Zapier action 選取驗證](/img/admin/webhooks-list.png)

### 設定 Action {#setting-up-the-action}

這是 **action 的主要步驟**，這裡的情況有些不同。你要選擇的第一項資訊是 **Item**。Item 是你的網路的**資訊模型**，例如 **Customers、Payments、Sites、Emails** 等。

![為 Zapier action 選擇 Item 類型](/img/admin/webhooks-list.png)

選取 item 時，表單會**重新排列，以帶入所選 item 的必填與選填欄位**。

例如，選取 item **Customer** 時，表單欄位會帶出建立網路中新的 Customer 所需填寫的所有內容。

![Zapier action 設定中的 Customer item 欄位](/img/admin/webhooks-list.png)

填寫所有標示為**必填**的欄位並點擊 continue 後，最後一個畫面會顯示已填寫的欄位，以及未填寫的欄位。

![Zapier action 測試顯示已填寫與未填寫欄位](/img/admin/webhooks-list.png)

只要你的測試完成並成功，你的 action 就已設定完成。也很重要的是，請在你的網路上檢查該 item 是否已透過你的 action 測試建立。
