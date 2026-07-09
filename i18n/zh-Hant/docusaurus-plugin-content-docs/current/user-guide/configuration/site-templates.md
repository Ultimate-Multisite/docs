---
title: 網站範本
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# 網站範本（v2） {#site-templates-v2}

_**注意：本文適用於 Ultimate Multisite 版本 2.x。如果你使用的是版本 1.x，**_ **請參閱這篇文章** _**。**_

我們在使用 Ultimate Multisite 建立進階網路時的目標，是盡可能自動化更多流程，同時在客戶建立網站時，提供彈性與不同選項可供選擇。達成這種平衡的一個簡單方法，就是使用 Ultimate Multisite 網站範本功能。

## 什麼是網站範本？ {#what-is-a-site-template}

顧名思義，網站範本是一個樣板網站，可在你的網路中建立新網站時作為基礎使用。

這表示你可以建立一個基礎網站、啟用不同 plugin、設定啟用中的 theme，並以任何你喜歡的方式自訂它。接著，當你的客戶建立新 Account 時，他們取得的就不會是一個沒有任何有意義內容的預設 WordPress 網站，而是你的基礎網站副本，其中所有自訂項目與內容都已準備就緒。

這聽起來很棒，但我要如何建立新的網站範本？這件事再簡單不過了。

## 建立與編輯新的網站範本 {#creating-and-editing-a-new-site-template}

網站範本只是你網路上的一般網站。若要建立新範本，你只要前往 **網路管理 > Ultimate Multisite > 網站 > 新增網站。**

**![網站清單頁面中的新增網站按鈕](/img/config/site-templates-list.png)**

這會開啟一個 modal 視窗，要求你填寫 **網站標題、網站網域/路徑，**以及**網站類型**。在**網站類型**下拉欄位中，請務必選擇**網站範本** *。*

_![含網站類型下拉選單的新增網站範本 modal](/img/config/site-templates-list.png)_

你也可以新增面向客戶的描述，用來說明範本包含哪些內容：

![網站範本編輯畫面上的網站範本描述欄位](/img/config/site-template-edit-description.png)

在表單底部，你會看到一個**複製網站**切換開關。這可讓你以現有網站範本作為起點建立新的網站範本，幫助你節省時間，而不必從零開始建立網站範本。

![含複製網站切換開關的新增網站範本 modal](/img/config/site-templates-list.png)

### 自訂網站範本的內容 {#customizing-the-contents-of-a-site-template}

若要自訂你的網站範本，只需前往它的 Dashboard 面板並進行你需要的變更。你可以建立新文章、頁面、啟用 plugin，並變更啟用中的 theme。你甚至可以前往自訂器，變更各種自訂選項。

![網站範本編輯介面](/img/config/site-template-edit.png)

當客戶根據該網站範本建立新網站時，所有這些資料都會被複製過去。

### 進階選項 {#advanced-options}

如果你熟悉一些自訂程式碼，可以使用我們的搜尋與取代 API，在新網站建立後自動替換其中的資訊。這對於替換「關於」頁面上的公司名稱、替換「聯絡」頁面上的聯絡電子郵件等情境很有用。

### 使用網站範本 {#using-site-templates}

好，所以你已經建立了一堆具有不同設計、theme 和設定的網站範本。現在要如何讓它們在你的網路中發揮作用？

基本上，現在你可以使用兩種方法（不可同時使用）：

  * 將一個網站範本附加到你的每個方案

**或**

  * 允許你的客戶在註冊時自行選擇網站範本。

#### 模式 1：指定網站範本 {#mode-1-assign-site-template}

在此模式中，你的客戶在建立 Account 時將無法選擇範本，而是由你定義每個方案應使用哪個範本。

若要這麼做，你需要前往 **Ultimate Multisite > 商品 > 編輯**。

![編輯商品以指定網站範本](/img/config/product-site-templates.png)

這會帶你到**編輯商品**頁面。在**商品選項**區段下，找到**網站範本**分頁，並從下拉欄位中選擇**指定網站範本**選項。這會顯示可用的網站範本清單，並允許你只選擇一個專用於該商品的網站範本。

![含指定網站範本選項的商品網站範本分頁](/img/config/product-site-templates.png)

#### 模式 2：選擇可用網站範本 {#mode-2-choose-available-site-template}

在此模式中，你會在註冊流程中讓客戶選擇。他們將能從你在商品設定下定義的不同網站範本中選取。你可以限制他們在所選商品下可選擇的網站範本。這可讓你在每個商品下擁有不同組合的網站範本，非常適合用來突顯較高價格商品的不同功能與特色。

在**編輯商品**頁面。在**商品選項**區段下，找到**網站範本**分頁，並從下拉欄位中選擇**選擇可用網站範本**選項。這會顯示可用的網站範本清單，並允許你選擇希望可供使用的網站範本。你可以透過選擇其行為來完成：如果你希望網站範本包含在清單中，選擇**可用**。如果你希望網站範本不要顯示為選項，選擇 _**不可用**_。如果你希望清單中的某個網站範本成為預設選取項目，則選擇**預先選取**。

![使用行為選項選擇可用網站範本](/img/config/product-site-templates.png)

### 預設模式：Checkout 表單上的網站範本選擇 {#default-mode-site-template-selection-on-the-checkout-form}

如果你希望所有網站範本在註冊期間都可用，或者不偏好在你建立的每個商品下額外指定或設定網站範本，那麼你可以直接在你的 **Checkout 表單**下設定網站範本選擇。若要這麼做，請前往 **Ultimate Multisite > Checkout 表單**，並在你想設定的表單下點擊**編輯**。

這會顯示**編輯 Checkout 表單**頁面。找到**範本選擇**欄位，並在其下點擊**編輯**。

會出現一個彈出視窗。在 **Template Sites** 欄位下，你可以選取並列出所有希望在註冊期間可用的網站範本。你在此指定的網站範本將會可用，無論使用者選擇了哪個產品。

![結帳表單編輯器中的範本選擇欄位](/img/config/checkout-form-template-step.png)

在前端，客戶會在結帳期間看到範本選擇器，並可為他們的新網站挑選起始設計。

![註冊期間的前端範本選擇器](/img/config/frontend-template-chooser.png)

### 網站範本選項 {#site-template-options}

在 Ultimate Multisite 設定下，還有其他網站範本功能可供你開啟或關閉。

![Ultimate Multisite 設定中的網站範本選項](/img/config/settings-sites-templates-section.png)

#### 允許切換範本 {#allow-template-switching}

啟用此選項將允許你的客戶在 Account 和網站建立後，切換他們在註冊流程中選擇的範本。從客戶的角度來看，這很有用，因為如果他們後來發現原本的選擇並不是最符合其特定需求的範本，就能重新選擇。

#### 允許使用者將自己的網站作為範本使用 {#allow-users-to-use-their-site-as-templates}

由於子網站使用者花了時間建立並設計自己的網站，他們可能會想要複製並將其作為在你的網路上建立另一個子網站時可用的網站範本之一。此選項將允許他們達成這一點。

#### 範本複製時複製媒體 {#copy-media-on-template-duplication}

勾選此選項將把範本網站上傳的媒體複製到新建立的網站。這可以在各個方案中覆寫。

#### **防止搜尋引擎索引網站範本** {#prevent-search-engines-from-indexing-site-templates}

本文所討論的網站範本是樣板內容，但仍然是你網路的一部分，這表示搜尋引擎仍可找到它。此選項將允許你隱藏網站範本，使搜尋引擎無法索引它們。

## 使用自動搜尋與取代預先填入網站範本 {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite 最強大的功能之一，是能夠在註冊表單上加入任意文字、顏色與選取欄位。一旦我們擷取到該資料，就可以用它預先填入所選網站範本中特定部分的內容。接著，當新網站發佈時，Ultimate Multisite 會將預留位置取代為註冊期間輸入的實際資訊。

例如，如果你想在註冊期間取得終端使用者的公司名稱，並自動將公司名稱放到首頁上。你需要在範本網站首頁加入預留位置，如下圖所示（預留位置應以雙大括號包住加入 - {{placeholder_name}}）。

![首頁上以大括號包住的預留位置文字](/img/config/site-templates-list.png)

然後，你可以直接在結帳表單上新增一個相符的註冊欄位來擷取該資料。用於範本選擇的同一個結帳表單編輯器，也讓你能將自訂欄位放在範本選擇器旁邊：

![結帳表單編輯器中的範本選擇與註冊欄位](/img/config/checkout-form-template-step.png)

接著，你的客戶就能在註冊期間填寫該欄位。

![含範本選擇器的前端結帳表單](/img/config/frontend-template-chooser.png)

Ultimate Multisite 接著會自動以客戶提供的資料取代預留位置。

![網站上以客戶資料取代的預留位置](/img/config/site-templates-list.png)

### 解決「充滿預留位置的範本」問題 {#solving-the-template-full-of-placeholders-problem}

這一切都很棒，但我們確實會遇到一個不美觀的問題：現在我們的網站範本——也就是可被客戶造訪的範本——充滿了不美觀且資訊量不大的預留位置。

為了解決這個問題，我們提供為預留位置設定假值的選項，並在客戶造訪範本網站時，使用這些值搜尋並取代其中的內容。

你可以前往 **Ultimate Multisite > Settings > Sites**，然後在側邊欄點擊 **Edit Placeholders** 連結，以存取範本預留位置編輯器。

![Sites 設定頁面下的網站範本設定](/img/config/settings-sites-templates-section.png)

這會帶你前往預留位置內容編輯器，你可以在其中新增預留位置及其對應內容。

![範本預留位置內容編輯器入口](/img/config/settings-sites-templates-section.png)
