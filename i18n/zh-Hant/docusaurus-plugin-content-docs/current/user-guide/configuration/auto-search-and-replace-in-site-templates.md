---
title: 在 Site Templates 中自動搜尋與取代
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# 網站範本中的自動搜尋與取代（v2）

_**本教學需要 WP UItimo 2.x 版本。**_

Ultimate Multisite 最強大的功能之一，是能夠將任意文字、顏色與選取欄位新增到註冊表單。擷取到該資料後，我們可以用它來預先填入所選網站範本中特定部分的內容。接著，當新網站發布時，Ultimate Multisite 會將佔位符取代為註冊期間輸入的實際資訊。

例如，你可以使用佔位符製作你的範本網站。佔位符應以雙大括號包住來新增 - {{placeholder_name}}。

然後，你只要新增相符的註冊欄位來擷取該資料

接著，你的客戶就能在註冊期間填寫該欄位。

Ultimate Multisite 接著會自動將佔位符取代為客戶提供的資料。

## **解決「充滿佔位符的範本」問題**

這一切都很棒，但我們確實會遇到一個難看的問題：現在我們的網站範本——可由客戶造訪——充滿了醜陋且沒提供太多資訊的佔位符。

為了解決這個問題，我們提供為佔位符設定假值的選項，並在你的客戶造訪範本網站時，使用這些值搜尋並取代其內容。

你可以前往 **Ultimate Multisite > Settings > Sites**，捲動到網站範本選項區域，然後點擊 **Edit Placeholders** 連結，以存取範本佔位符編輯器。

![Sites 設定頁面中的網站範本選項區域](/img/config/settings-sites-templates-section.png)

這會帶你到佔位符的內容編輯器，你可以在其中新增佔位符及其各自的內容。

![範本佔位符編輯器入口點](/img/config/settings-sites-templates-section.png)
