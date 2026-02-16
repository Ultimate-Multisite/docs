---
title: 發送電子郵件與廣播
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# 發送電子郵件與廣播通知 (v2)

_**重要提醒：本文適用於 Ultimate Multisite 2.x 版本。**_

Ultimate Multisite 內建的功能可讓您與客戶溝通，無論是發送電子郵件給特定使用者或一群使用者，或是在他們的管理控制台發布公告通知，都能輕鬆完成。

## 使用廣播功能在客戶的控制台新增管理通知

透過 Ultimate Multisite 的廣播功能，您可以在使用者的子網站管理控制台新增**管理通知**。

當您需要發布系統維護公告，或是向現有使用者推廣新產品或服務時，這個功能非常實用。以下是管理通知在使用者控制台上的顯示樣式。

![客戶控制台上顯示的管理通知廣播](/img/admin/broadcasts-list.png)

要建立管理通知，請前往您的網路管理控制台，在 **Ultimate Multisite** 選單下找到 **Broadcasts** 選項。

![Ultimate Multisite 管理介面中的 Broadcasts 選單](/img/admin/broadcasts-list.png)

在這個頁面上，點擊頂部的 **Add Broadcast** 按鈕。

系統會彈出「新增廣播」的視窗，讓您選擇要發送的廣播類型。

請選擇 **Message**，然後點擊 **Next Step** 按鈕。

![新增廣播視窗，已選擇 Message 類型](/img/admin/broadcasts-list.png)

下一個視窗會請您指定 **Target customer**（目標客戶）或 **Target product**（目標產品）。請注意，您可以選擇多位使用者或多個產品。

若要搜尋使用者帳號或產品，請在欄位中開始輸入關鍵字。

在 **Message type** 欄位中，您可以選擇通知的顏色。這有助於強調訊息的緊急程度。

完成後點擊 **Next Step**。

![廣播的目標客戶與產品選擇畫面](/img/admin/broadcasts-list.png)

在下一個視窗中，您可以開始撰寫訊息，輸入主旨和要廣播給使用者的內容。

![廣播訊息的主旨與內容編輯器](/img/admin/broadcasts-list.png)

訊息撰寫完成後，點擊 **Send** 按鈕即可。

就這麼簡單。管理通知會立即顯示在您使用者的控制台上。

## 發送電子郵件給客戶

透過 Ultimate Multisite 的廣播功能，您可以發送電子郵件給使用者。您可以選擇只發送給特定使用者，或是根據使用者訂閱的產品或方案來鎖定特定群組。

要開始電子郵件廣播，請前往您的網路管理控制台，在 Ultimate Multisite 選單下找到 Broadcast 選項。

![Ultimate Multisite 管理介面中的 Broadcasts 頁面](/img/admin/broadcasts-list.png)

在這個頁面上，點擊頂部的 **Add broadcast** 按鈕。

系統會彈出「新增廣播」的視窗，讓您選擇要發送的廣播類型。請選擇 **Email**，然後點擊 **Next Step** 按鈕。

![新增廣播視窗，已選擇 Email 類型](/img/admin/broadcasts-list.png)

下一個視窗會請您指定 **Target customer**（目標客戶）或 **Target product**（目標產品）。請注意，您可以選擇多位使用者或多個產品。

若要搜尋使用者帳號或產品，請在欄位中開始輸入關鍵字。

選好目標對象後，點擊 **Next Step**。

![電子郵件廣播的目標客戶與產品選擇畫面](/img/admin/broadcasts-list.png)

在下一個視窗中，您可以開始撰寫電子郵件，輸入主旨和要發送給使用者的內容。

![電子郵件廣播的主旨與內容編輯器](/img/admin/broadcasts-list.png)

訊息撰寫完成後，點擊 **Send** 按鈕即可。

使用廣播功能發送電子郵件給終端使用者，就是這麼簡單。

## 系統郵件

Ultimate Multisite 中的系統郵件是指系統在特定動作（例如註冊、付款、網域對應等）完成後**自動發送的通知**。這些郵件可以在 Ultimate Multisite 設定中編輯或修改。系統也提供功能讓您重設郵件，或從其他 Ultimate Multisite 安裝匯入現有設定。

### 重設與匯入

新版本的 Ultimate Multisite 以及附加元件，會不定期新增新的郵件範本。

為了避免衝突和其他問題，**我們不會自動將新的郵件範本加入您安裝的系統郵件中**，除非這些郵件對特定功能的正常運作至關重要。

不過，超級管理員和代理人可以透過匯入工具來匯入這些新註冊的郵件。這個流程會使用新郵件範本的內容和設定建立一封新的系統郵件，讓超級管理員可以自行修改或保持原樣。

#### 如何匯入系統郵件

前往 Ultimate Multisite 設定頁面，切換到 **Emails** 分頁。

![Ultimate Multisite 設定中的 Emails 分頁](/img/config/settings-emails.png)

然後在側邊欄點擊 **Customize System Emails** 按鈕。

![側邊欄的 Customize System Emails 按鈕](/img/config/settings-emails.png)

在系統郵件頁面，您會看到頂部的 **Reset & Import** 操作按鈕。點擊該按鈕會開啟匯入與重設的視窗。

![系統郵件頁面上的 Reset and Import 操作按鈕](/img/config/settings-emails.png)

接著，您可以展開 Import Emails 選項，查看有哪些系統郵件可供匯入。

![Import Emails 選項顯示可匯入的系統郵件](/img/config/settings-emails.png)

#### 重設系統郵件

有時候，您可能會發現之前對某個郵件範本所做的修改已不再適用，想要將它還原成**預設狀態**。

在這種情況下，您有兩個選擇：您可以直接刪除該系統郵件，然後重新匯入（按照上述步驟）——但這會清除發送統計和其他資料，因此這個方法較不建議使用。

或者，您可以使用 **Reset & Import 工具**來重設該郵件範本。

要重設郵件範本，請按照上述步驟操作，直到進入 Reset & Import 工具，然後切換到 **Reset** 選項，選擇您想要還原成預設內容的郵件。

![重設選項可將郵件範本還原成預設值](/img/config/settings-emails.png)
