---
title: Khai Thov thiab Tswj Tsis Tau Hau Nws Txog Sites Templates
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# 自动搜尋和替換在網站範本中 (v2)

_**這個教學需要 Ultimate Multisite 版本 2.x。**_

Ultimate Multisite 最強大的功能之一就是可以往註冊表單上加隨意的文字、顏色，還有選取欄位。一旦我們抓到這些資料，就可以用它來預先填入所選網站範本的某些部分內容。然後，當新的網站發佈時，Ultimate Multisite 會把那些佔位符替換成註冊時輸入的實際資訊。

舉個例子，你可以用佔位符來製作你的範本網站。佔位符要用雙大括號包起來，例如 - {{placeholder_name}}。

然後，你只需要在註冊表單上加一個對應的欄位來抓取那個資料。

這樣，你的客戶就可以在註冊時填寫那個欄位了。

Ultimate Multisite 就會自動把佔位符替換成客戶提供的資料。

## **解決「範本充滿佔位符」的問題**

所有這些都很棒，但我們遇到了一個很醜的問題：現在我們的網站範本——客戶可以造訪的那些——都裝滿了沒什麼告訴你的醜陋佔位符。

要解決這個問題，我們提供一個選項，就是為佔位符設定虛擬值（fake values），然後我們用這些值在客戶造訪時搜尋並替換範本網站上的內容。

你可以透過前往 **Ultimate Multisite > Settings > Sites**，捲動到「Site Template Options」區域，然後點擊 **Edit Placeholders** 連結來存取範本佔位符編輯器。

![Sites 設定頁面中的 Site Template Options 區域](/img/config/settings-sites-templates-section.png)

這會帶你到佔位符的內容編輯器裡，在那裡你可以新增佔位符和它們各自的內容。

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
