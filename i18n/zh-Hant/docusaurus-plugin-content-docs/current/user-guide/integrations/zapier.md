---
title: Zapier 整合
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# 將 Ultimate Multisite 與 Zapier 整合

在先前的文章中，我們討論了 [Webhooks](webhooks.md) 以及如何用它來與第三方應用程式整合。

使用 webhooks 稍微複雜一些，因為需要具備進階的程式撰寫知識，並且要能處理接收到的資料。使用 **Zapier** 是讓你繞過這些技術門檻的好方法。

Zapier 可與超過 5000 個以上的應用程式整合，讓不同應用程式之間的溝通變得更加容易。

你可以建立 **Triggers（觸發器）**，當網路上發生特定事件時自動觸發（例如：帳號建立後觸發 account_create 事件），或是產生 **Actions（動作）** 來回應外部事件（例如：在你的 Ultimate Multisite 網路中建立新的帳號會員資格）。

這一切之所以可行，是因為 **Ultimate Multisite Zapier 的 triggers** 和 actions 都是透過 [REST API](https://developer.ultimatemultisite.com/api/docs/) 來驅動的。

## 如何開始

首先，在 Zapier 的應用程式清單中搜尋 Ultimate Multisite。或者，你也可以點擊[這個連結](https://zapier.com/apps/wp-ultimo/integrations)。

前往你的 dashboard，點擊左側邊欄的 **+** **Create Zap** 按鈕來設定新的 Zap。

![Zapier dashboard 與 Create Zap 按鈕](/img/admin/webhooks-list.png)

你會被導向 Zap 建立頁面。

在搜尋框中輸入「wp ultimo」，然後點擊選擇 **Beta** 版本選項。

![在 Zapier 應用程式清單中搜尋 WP Ultimo](/img/admin/webhooks-list.png)

選擇我們的應用程式後，選擇可用的事件：**New Ultimate Multisite Event**。

![選擇 New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

現在我們需要讓 Zapier 存取**你的網路**。點擊 **Sign in** 會開啟一個新視窗，要求輸入 **API 憑證**。

![Zapier 要求輸入 API 憑證的 Sign in 提示](/img/admin/webhooks-list.png)

前往你的網路管理後台，導航至 **Ultimate Multisite > Settings** > **API & Webhooks**，找到 API Settings 區塊。

勾選 **Enable API** 選項，這是讓連線正常運作的必要步驟。

![Ultimate Multisite 中的 API Settings 與 Enable API 選項](/img/admin/webhooks-list.png)

使用 API Key 和 API Secret 欄位旁的**複製到剪貼簿**圖示，將這些值貼到整合畫面中。

在 URL 欄位中，輸入你的網路完整網址，包含通訊協定（HTTP 或 HTTPS）。

![Zapier 整合畫面，包含 API Key、Secret 和 URL 欄位](/img/admin/webhooks-list.png)

點擊 **Yes, Continue** 按鈕進入下一步。如果一切順利，你應該會看到新連結的帳號！點擊 **Continue** 來建立新的 trigger。

## 如何建立新的 Trigger

帳號連結完成後，你可以看到可用的事件。在這個教學中，我們選擇 **payment_received** 事件。

![在 Zapier trigger 中選擇 payment_received 事件](/img/admin/webhooks-list.png)

選擇事件並點擊 **continue** 後，會出現**測試步驟**。

![Zapier trigger 的測試步驟](/img/admin/webhooks-list.png)

在這個階段，Zapier 會測試你的 Zap 是否能**擷取該事件的特定資料內容**。未來同類型的事件發生時，會傳送相同結構的資訊。

![Zapier trigger 測試成功完成並顯示資料內容](/img/admin/webhooks-list.png)

在我們的教學中，測試**成功完成**並回傳了範例資訊。這個範例資訊在建立 actions 時會很有幫助。你的 trigger 現在已經建立完成，可以與其他應用程式連結了。

## 如何建立 Actions

Actions 使用其他 triggers 的資訊，在你的網路中建立新的項目。

在**建立 action 步驟**中，你需要選擇 Ultimate Multisite **Beta** 以及 **Create Items on Ultimate Multisite** 選項。

![建立 action 並選擇 Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

在下一步中，你可以建立新的驗證（就像我們在**如何開始**中做的那樣），或選擇已建立的驗證。在這個教學中，我們會選擇之前建立的驗證。

![為 Zapier action 選擇驗證](/img/admin/webhooks-list.png)

### 設定 Action

這是 **action 的主要步驟**，這裡的操作稍有不同。你要選擇的第一個資訊是 **Item**。Item 是你網路中的**資料模型**，例如 **Customers、Payments、Sites、Emails** 等等。

![為 Zapier action 選擇 Item 類型](/img/admin/webhooks-list.png)

選擇 item 後，表單會**重新排列，顯示該 item 所需的必填和選填欄位**。

例如，當你選擇 **Customer** item 時，表單欄位會顯示在網路中建立新 Customer 所需填寫的所有內容。

![Zapier action 設定中的 Customer item 欄位](/img/admin/webhooks-list.png)

填寫完所有標記為**必填**的欄位並點擊 continue 後，最後一個畫面會顯示已填寫的欄位和未填寫的欄位。

![Zapier action 測試顯示已填寫和未填寫的欄位](/img/admin/webhooks-list.png)

測試完成且成功後，你的 action 就設定好了。同時也建議檢查你的網路，確認該 item 是否已透過 action 測試成功建立。
