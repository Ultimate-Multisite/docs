---
title: 基本概念
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# 基本概念

對於剛接觸 WordPress Multisite 並開始使用 Ultimate Multisite 的新用戶來說，一開始可能會遇到許多新的詞彙和用語。學習這些詞彙是很重要的，因為你需要全面了解這個平台及其運作方式。

在這篇文章中，我們將嘗試定義和解釋 WordPress 中的一些關鍵概念。其中有些較適合一般用戶，有些較適合開發者，還有些則兩者都適用。

## WordPress Multisite

WordPress **Multisite** 是一種 WordPress 安裝類型，讓你可以從單一 WordPress 控制台建立和管理多個網站組成的網路。你可以管理所有內容，包括網站數量、功能、佈景主題和用戶角色。管理數百甚至數千個網站都不是問題。

## 網路

以 WordPress 的角度來說，multisite 網路是可以從單一控制台管理多個**子網站**的地方。雖然建立 multisite 網路的方式會因主機服務商而異，但最終結果通常是在 **wp-config.php** 檔案中加入一些額外的設定，讓 WordPress 知道它正在這種特定模式下運作。

multisite 網路和獨立的 WordPress 安裝之間有一些明顯的差異，我們將簡要討論這些差異。

## 資料庫

資料庫是一組結構化、有組織的資料。在電腦術語中，資料庫指的是用於儲存和組織資料的軟體。你可以把它想像成一個檔案櫃，裡面有不同的區塊（稱為資料表）來存放資料。

WordPress Multisite 使用單一資料庫，每個子網站都有自己的資料表，且前綴包含 blog id，所以當你安裝網路並建立子網站後，你應該會看到這些資料表：

_wp_1_options_ \- 第一個子網站的選項資料表

_wp_2_options_ \- 第二個子網站的選項資料表

## 主機服務商

主機服務商是一家讓企業和個人能夠將網站透過全球資訊網發布的公司。網站主機服務商提供的服務各有不同，但通常包括網站設計、主機儲存空間，以及網際網路連線服務。

## 網域

網域名稱是人們用來造訪你網站的位址。它告訴瀏覽器在哪裡可以找到你的網站。就像街道地址一樣，網域是人們在網路上造訪你網站的方式。也像是你店面前的招牌。如果你想造訪我們的網站，你需要在瀏覽器的網址列輸入我們的網址 [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com)，其中 [**ultimatemultisite.com**](http://ultimatemultisite.com) 就是網域名稱。

## 子網域

子網域是主網域下的一種網站層級結構，但它不是使用資料夾來組織網站內容，而是有點像擁有自己獨立的網站。它的呈現方式是 [**https://site1.domain.com/**](https://site1.domain.com/)，其中 _site1_ 是子網域名稱，而 [_domain.com_](http://domain.com) 是主網域。

## 子目錄

子目錄是根網域下的一種網站層級結構，使用資料夾來組織網站內容。子目錄和子資料夾是相同的概念，兩個名稱可以互換使用。它的呈現方式是 [**https://domain.com/site1**](https://domain.com/site1)，其中 _site1_ 是子目錄名稱，而 [_domain.com_](http://domain.com) 是主網域。

## 子網站

子網站是你在 Multisite 網路上建立的附屬網站。根據你的 WordPress Multisite 安裝設定，它可以是**子網域**或**子目錄**的形式。

## 超級管理員

WordPress 超級管理員是一種用戶角色，擁有完整權限來管理 Multisite 網路上的所有子網站。對於 Multisite 用戶來說，這是你在 WordPress 安裝中可以授予的**最高存取權限**。

## Plugin

一般來說，plugin 是一組程式碼，用來為你的 WordPress 網站增加額外功能。它可以簡單到只是更換登入標誌，也可以複雜到新增電子商務功能。_Woocommerce 和 Contact Form_ 就是 plugin 的例子。

在 WordPress Multisite 上，只有超級管理員可以從網路管理控制台安裝 plugin。子網站管理員只能在其子網站內啟用和停用 plugin。

## 佈景主題

WordPress 佈景主題是一組檔案（_包含圖形、樣式表和程式碼_），決定網站的整體外觀。它提供所有前端樣式，例如字體樣式、頁面版面配置、顏色等。

與 plugin 相同，WordPress Multisite 中的佈景主題只能由超級管理員安裝，而子網站管理員可以在子網站層級啟用佈景主題。

## 網站範本

**網站範本**是一個樣板網站，可以在你的網路中建立新網站時作為基礎使用。

這表示你可以建立一個基礎網站，啟用不同的 plugin、設定使用中的佈景主題，並以任何你喜歡的方式進行自訂。然後，當你的客戶建立新帳戶時，他們不會得到一個沒有任何實質內容的預設 WordPress 網站，而是會得到你基礎網站的副本，其中已經包含所有的自訂設定和內容。

## 網域對應

WordPress 中的**網域對應**是一種透過網站位址將用戶導向正確主機的方式。在 WordPress Multisite 中，子網站是使用子目錄或子網域建立的。網域對應的作用是讓子網站用戶可以使用頂級網域，例如 [**joesbikeshop.com**](http://joesbikeshop.com)，讓他們的網站位址看起來更專業。

## SSL

SSL 代表 **Secure Sockets Layer**（安全通訊端層）。它是一種數位憑證，用於驗證網站身分並啟用加密連線。如今它已成為保持網際網路連線安全的標準技術，保護兩個系統之間傳送的任何敏感資料，防止不法分子讀取和修改任何傳輸的資訊，包括潛在的個人詳細資料。現代瀏覽器都要求使用 SSL，因此它在建立和經營網站時是不可或缺的。

## 媒體

媒體是組成網站的圖片、音訊、影片和其他檔案。

在 WordPress Multisite 中，網路網站共用單一資料庫，但它們在檔案系統中維護各自獨立的媒體檔案路徑。

標準的 WordPress 位置（wp-content/uploads）保持不變；但其路徑會被修改以反映網路網站的唯一 ID。因此，網路網站的媒體檔案會顯示為 wp-contents/uploads/site/[id]。

## 永久連結

永久連結是你網站內個別部落格文章或頁面的固定網址。永久連結也被稱為**美化連結**。預設情況下，WordPress 網址使用查詢字串格式，看起來像這樣：

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite 是一個 WordPress plugin，專為 WordPress Multisite 安裝而設計，可以將你的 WordPress 安裝轉變成一個優質的網站網路——就像 [WordPress.com](https://WordPress.com) 一樣——讓客戶可以透過月繳、季繳或年繳的方式建立網站（你也可以建立免費方案）。

## 結帳表單

結帳表單是一個單步或多步的訂購表單，透過 Ultimate Multisite 註冊流程來建立子網站、會員資格和用戶帳戶。它包含用戶在註冊過程中必須提交的各種欄位和付款表單。

## Webhook

Webhook（也稱為網路回呼或 HTTP 推送 API）是一種讓應用程式向其他應用程式提供即時資訊的方式。Webhook 會在資料產生時立即傳遞給其他應用程式，這表示你可以即時獲得資料。

**Ultimate Multisite webhook** 開啟了無限可能，讓網路管理員可以進行各種瘋狂但實用的整合，特別是與 _Zapier 和 IFTTT_ 等服務搭配使用時效果更佳。

## 事件

事件是由用戶或其他來源動作所產生的操作，例如滑鼠點擊。Ultimate Multisite 會記錄你整個網路中發生的所有事件和日誌。它追蹤你 multisite 中發生的各種活動，例如方案變更。
