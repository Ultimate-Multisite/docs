---
title: 自訂您的註冊表單
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# 自訂註冊表單

想讓你的網路站群與其他基於 WordPress 平台建立的 SaaS 服務有所區隔，Ultimate Multisite 提供了 **Checkout Forms** 功能，讓你能自訂註冊和登入頁面。

這個功能不僅操作簡單、彈性十足，方便你嘗試各種轉換新客戶的方式，更常被用來打造個人化的註冊表單。本文將帶你了解如何實現這個目標。

## 登入與註冊頁面：

安裝 Ultimate Multisite 後，系統會自動在你的主網站建立自訂的登入和註冊頁面。你隨時可以前往 **Ultimate Multisite > Settings > Login & Registration** 頁面更改這些預設頁面。

![Login and Registration settings page](/img/config/settings-general.png)

讓我們來看看 **Login & Registration** 頁面中可以自訂的各個選項：

  * **Enable registration：** 這個選項用來啟用或停用網路站群的註冊功能。如果關閉此選項，客戶將無法註冊並訂閱你的產品。

  * **Enable email verification：** 啟用這個選項後，訂閱免費方案或含有試用期的付費方案的客戶會收到驗證信，必須點擊驗證連結後網站才會被建立。

  * **Default registration page：** 這是預設的註冊頁面。這個頁面必須已發佈在你的網站上，並且包含註冊表單（也稱為 checkout form）——客戶將在這裡訂閱你的產品。你可以建立任意數量的註冊頁面和 checkout form，只要記得在註冊頁面中放入 checkout form 的 shortcode，否則表單不會顯示。

  * **Use custom login page：** 這個選項讓你能使用自訂的登入頁面，而非預設的 wp-login.php 頁面。啟用後，你可以在下方的 **Default login page** 選項中選擇要使用哪個頁面作為登入頁面。

  * **Obfuscate the original login url (wp-login.php)：** 如果你想隱藏原始的登入網址，可以開啟這個選項。這對於防止暴力破解攻擊很有幫助。啟用此選項後，當使用者嘗試存取原始的 wp-login.php 連結時，Ultimate Multisite 會顯示 404 錯誤頁面。

  * **Force synchronous site publication：** 客戶在網路站群上訂閱產品後，新建立的待處理網站需要轉換為正式的網路站點。發佈流程預設透過 Job Queue 非同步進行。啟用這個選項可強制發佈流程在註冊請求的同一次連線中完成。

現在，讓我們看看同一個 Login & registration 頁面中 **Other options** 底下的其他相關選項：

  * **Default role：** 這是客戶完成註冊流程後，在其網站上所擁有的角色。

  * **Add users to the main site as well：** 啟用這個選項後，客戶完成註冊流程時也會被加入到你網路站群的主網站。啟用後，下方還會出現設定這些使用者在主網站 **default role** 的選項。

  * **Enable multiple accounts：** 允許使用者在你網路站群的不同網站中，使用同一個電子郵件地址建立帳號。如果關閉這個選項，你的客戶將無法在網路站群內的其他網站使用相同的電子郵件地址建立帳號。

以上就是所有與登入和註冊相關的可自訂選項！編輯完成後，別忘了儲存你的設定。

## 使用多個註冊表單：

Ultimate Multisite 2.0 提供了 checkout form 編輯器，讓你可以建立任意數量的表單，搭配不同的欄位、提供的產品等。

登入和註冊頁面都是透過 shortcode 嵌入的：登入頁面使用 **[wu_login_form]**，註冊頁面則使用 **[wu_checkout]**。你可以透過建立或修改 checkout form 來進一步自訂註冊頁面。

要使用這個功能，請前往左側選單中的 **Checkout Forms** 選單。

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

在這個頁面上，你可以看到所有已建立的 checkout form。

如果要建立新表單，只需點擊頁面頂端的 **Add Checkout Form**。

你可以選擇以下三個選項之一作為起點：單步驟、多步驟或空白表單。然後點擊 **Go to the Editor**。

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

或者，你也可以點擊表單名稱下方的選項來編輯或複製現有的表單。在那裡，你還可以找到複製表單 shortcode 或刪除表單的選項。

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

如果你選擇單步驟或多步驟，checkout form 會預先填入運作所需的基本步驟。之後，你可以根據需要新增額外的步驟。

### 編輯 Checkout Form：

如前所述，你可以為不同目的建立 checkout form。在這個範例中，我們將製作一個註冊表單。

進入 checkout form 編輯器後，為你的表單命名（僅供內部參考使用）並設定一個 slug（用於建立 shortcode 等用途）。

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

表單由步驟和欄位組成。你可以點擊 **Add New Checkout Step** 來新增步驟。

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

在彈出視窗的第一個分頁中，填寫表單步驟的內容。設定 ID、名稱和描述。這些項目主要用於內部管理。

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

接下來，設定步驟的顯示條件。你可以選擇 **Always show**、**Only show for logged in users** 或 **Only show for guests**。

![Checkout step visibility options](/img/config/checkout-form-step.png)

最後，設定步驟的樣式。這些是選填欄位。

![Checkout step style configuration](/img/config/checkout-form-step.png)

現在，是時候為第一個步驟新增欄位了。只需點擊 **Add New Field** 並選擇你想要的區塊類型。

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

每種欄位都有不同的參數需要填寫。在這第一個項目中，我們選擇 **Username** 欄位。

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

你可以依需求新增任意數量的步驟和欄位。要讓客戶選擇你的產品，請使用 Pricing Table 欄位。如果你想讓客戶選擇範本，請新增 Template Selection 欄位。以此類推。

_**注意：** 如果你在建立 checkout form 之後才新增產品，你需要在 Pricing table 區塊中加入該產品。如果沒有加入，該產品將不會顯示在註冊頁面上供客戶選擇。_

_**注意 2：** username、email、password、site title、site URL、order summary、payment 和 submit button 都是建立 checkout form 的必填欄位。_

在製作 checkout form 的過程中，你隨時可以使用 Preview 按鈕來查看客戶會看到的表單樣貌。你還可以切換以現有使用者或訪客的身份預覽。

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

最後，在 **Advanced Options** 中，你可以設定 **Thank You** 頁面的訊息、新增轉換追蹤程式碼、為 checkout form 新增自訂 CSS，或將其限制在特定國家/地區使用。

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

你也可以透過右側欄位的切換開關來手動啟用或停用 checkout form，或永久刪除該表單。

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

別忘了儲存你的 checkout form！

![Save Checkout Form button](/img/config/checkout-form-save.png)

要取得表單的 shortcode，請點擊 **Generate Shortcode**，然後複製彈出視窗中顯示的結果。

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**注意：** 你需要將這個 shortcode 加入到註冊頁面中，才能讓此 checkout form 顯示在該頁面上。_

## 透過 URL 參數預選產品和範本：

如果你想為產品建立自訂的價格表，並在 checkout form 中預選客戶從價格表或範本頁面選擇的產品或範本，可以使用 URL 參數來實現。

### **方案的預選方式：**

前往 **Ultimate Multisite > Products > Select a plan**。你會在頁面頂端看到 **Click to copy Shareable Link** 按鈕。這個連結可以用來在 checkout form 中預選該特定方案。

![Product page with shareable link button](/img/config/products-list.png)

請注意，這個分享連結僅適用於 **Plans**。你無法對 packages 或 services 使用分享連結。

### 範本的預選方式：

如果你想在 checkout form 中預選網站範本，可以在註冊頁面網址中使用參數：**?template_id=X**。其中的「X」需要替換為**網站範本 ID 編號**。要取得這個編號，請前往 **Ultimate Multisite > Sites**。

點擊你想使用的網站範本下方的 **Manage**。你會看到 SITE ID 編號。只需使用這個編號，該特定網站範本就會在 checkout form 中被預選。以我們的例子來說，URL 參數會是 **?template_id=2**。

![Sites list showing site template ID](/img/config/site-templates-list.png)

假設我們的網路站群網站是 [**www.mynetwork.com**](http://www.mynetwork.com)，而包含 checkout form 的註冊頁面位於 **/register** 頁面。預選此網站範本的完整網址會是 [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**。

如果你想同時預選產品和範本，只需複製方案的分享連結，然後在結尾加上範本參數即可。最終網址會是 [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**。
