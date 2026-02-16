---
title: 程式碼片段
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 程式碼片段

基本上，**WordPress** 的程式碼片段是用來執行某些原本可能需要專用小型 plugin 才能完成的動作。這類程式碼片段通常會放在 WordPress 核心或佈景主題的檔案中（通常是佈景主題的 functions.php 檔案），或者也可以作為 MU plugin 使用。

在這篇文章中，我們將介紹三個可搭配 **Ultimate Multisite v2** 使用的程式碼片段：

  * [**變更帳戶選單項目的位置**](#changing-the-position-of-the-account-menu-item)

  * [**如何檢查使用者是否屬於特定方案且/或擁有有效訂閱**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**修正對應網域中字型圖示的 CORS 問題**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## 變更帳戶選單項目的位置

若要變更帳戶選單項目在客戶 Dashboard 中的位置，只需將以下程式碼片段加入主網站目前使用的佈景主題的 functions.php 檔案中。您也可以將這段程式碼放入 mu-plugins 或自訂 plugin 中。

add_filter('wu_my_account_menu_position', function() { return 10; // 調整這個數值來將選單放到您想要的位置。

## 如何檢查使用者是否屬於特定方案且/或擁有有效訂閱

身為網路管理員，您可能需要建立自訂函式，根據訂閱狀態和所訂閱的方案，為特定群組的訂閱者或終端使用者執行基本動作或提供某項服務/功能。

以下這些 Ultimate Multisite 內建函式可以幫助您達成這個目的。

若要檢查使用者是否為特定方案的成員，您可以使用以下函式：

wu_has_plan($user_id, $plan_id)

若要檢查訂閱是否有效，您可以使用以下函式：

wu_is_active_subscriber($user_id)

以下是一個範例程式碼片段，用於檢查目前使用者是否屬於特定方案（_方案 ID 50_），以及該使用者的訂閱是否有效。

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // 使用者是方案成員且訂閱有效，執行相關動作} else { // 使用者不是方案成員——或者——訂閱無效，執行其他動作} // end if;

請注意 _**wu_has_plan**_ 需要提供「方案 ID」才能正常運作。

若要取得方案的 ID，您可以前往 **Ultimate Multisite > Products**。每個產品的 ID 會顯示在表格的右側。

請注意，使用者只能訂閱**方案（Plan）**，而不是套件（Package）或服務（Service），因為後兩者只是**方案**的附加項目。

![顯示方案 ID 的產品列表](/img/admin/products-list.png)

## 修正對應網域中字型圖示的 CORS 問題
## 修正對應網域中字型圖示的 CORS 問題

將網域對應到子網站後，您可能會發現網站無法正常載入自訂字型。這是由於伺服器設定中的跨來源封鎖所造成的。

由於字型檔案幾乎都是直接從 CSS 載入，我們的網域對應 plugin 無法將網址改寫為使用對應網域而非原始網域，因此您需要修改伺服器設定檔才能解決這個問題。

以下是針對 Apache 和 NGINX 修正此問題的程式碼片段。這些變更需要對伺服器設定檔（.htaccess 檔案和 NGINX 設定檔）有進階的了解。如果您不熟悉這些操作，請在尋求協助時將這個頁面提供給您的主機供應商支援人員。

### Apache

在您的 .htaccess 檔案中加入：

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

在您的伺服器設定檔中（位置因伺服器而異）加入：

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
