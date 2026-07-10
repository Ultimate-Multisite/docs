---
title: 客戶 Account 頁面
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# 你客戶的 Account 頁面（v2） {#your-clients-account-page-v2}

_**重要注意事項：本文適用於 Ultimate Multisite 版本 2.x。**_

當客戶訂閱你網路上的方案時，他們會取得一個網站及其 Dashboard 的存取權，其中包含關於付款、會員資格、網域、方案限制等重要資訊……

在本教學中，我們將引導你了解客戶的 Account 頁面，你也會看到客戶可以在其中查看與執行的事項。

## Account 頁面 {#the-account-page}

Account 頁面可透過在客戶的 Dashboard 中點擊 **Account** 來存取。

![客戶 Dashboard 中的 Account 選單](/img/account-page/account-menu.png)

在主權租戶網路上，Ultimate Multisite v2.13.0 會將這個客戶管理體驗保留在主網站上。如果客戶從主權租戶開啟 Account、結帳、帳務、發票、網站管理、範本切換或網域對應動作，該動作會指回主網站客戶面板，讓網路帳務與會員資格記錄維持權威性。

當客戶來自主權租戶時，主網站客戶面板可以包含返回租戶網站的連結。只有在 Ultimate Multisite 能將返回目標驗證為客戶的其中一個網站時，才會顯示返回連結，這可防止任意重新導向，同時保留租戶工作流程。

![客戶 Account 頁面概覽](/img/account-page/overview.png)

客戶點擊後，將會看到其會員資格、帳單地址、發票、網域、網站限制的概覽，也能變更 ****網站範本**（如果你的網路允許）**。

他們也可以將會員資格變更為另一個方案，或購買你提供的其他套件或服務。讓我們逐一看看各個區段。

### 你的會員資格概覽： {#your-membership-overview}

位於客戶網站名稱正下方的第一個區塊，會顯示他們目前方案以及隨方案購買的服務／套件概覽。該區塊也會顯示會員資格編號、最初支付的金額、方案與任何服務／套件的費用，以及此會員資格已被收費的次數。他們也可以看到會員資格是 **有效**、**已過期** 或 **已取消**。

![顯示方案、金額與帳務詳細資料的會員資格概覽](/img/account-page/membership-card.png)

在此區塊正下方，客戶可以看到 **關於此網站** 與 **網站限制** 區塊。這些區塊會向他們顯示其方案包含的所有限制：磁碟空間、文章、頁面、造訪次數等……這些限制可在 **Ultimate Multisite > 產品** 的每個方案頁面上設定。

![顯示方案限制的關於此網站與網站限制區塊](/img/account-page/site-limits.png)

在 **你的會員資格** 右側，客戶可以點擊 **變更**。這會向他們顯示所有可用的方案與套件／服務。如果他們選擇另一個方案，該方案的限制將會取代目前會員資格的限制——無論他們是降級或升級。

現在，如果你的客戶選擇為目前會員資格購買套件或服務——例如更多磁碟空間或造訪次數——目前的會員資格不會被變更，只會將新的套件加入其中。

請注意，優惠券代碼無法在此會員資格變更頁面加入。如果客戶在首次購買會員資格時使用了優惠券代碼，該代碼也會套用到這個新的會員資格。

### 更新帳單地址： {#updating-the-billing-address}

在 Account 頁面上，你的客戶也可以更新他們的帳單地址。他們只需要點擊 _帳單地址_ 旁邊的 **更新**。

![含有更新按鈕的帳單地址區段](/img/account-page/billing-address.png)

客戶會看到一個新視窗。他只需要填入新地址並點擊 _儲存變更_。

![更新帳單地址表單](/img/account-page/billing-address-form.png)

### 變更網站範本： {#changing-the-site-template}

若要允許客戶變更他們的網站範本，你需要前往 **Ultimate Multisite > 設定 > 網站**，並開啟 **允許範本切換** 選項。

另外，在 **Ultimate Multisite > 產品** 中，選取你的方案並前往 **網站範本** 分頁。確認 **允許網站範本** 選項已開啟，且在 **網站範本選擇模式** 中，已選取 **選擇可用的網站範本** 選項。

![含範本選擇模式的產品網站範本分頁](/img/config/product-site-templates.png)

你將能看到你網站上所有可用的網站範本。選擇哪些要提供給訂閱此方案的客戶使用，以及哪些不提供使用。請注意，這些選項也會影響結帳表單，因此任何被選為 **不可用** 的範本，都不會出現在此方案的註冊頁面上。

現在，你的客戶可以在他們的 Account 頁面中點擊 **變更網站範本**。

![Account 頁面上的變更網站範本按鈕](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 會顯示重新設計的範本切換面板。該面板會以 **目前範本卡片** 開始，讓客戶在選擇替代範本前，可以看到目前啟用的範本。

當客戶檢視選項時，可用網站範本的固定網格會保持可見。這有助於他們比較其方案允許的範本，同時不會失去對目前選擇的掌握。

![此方案可用的網站範本清單](/img/config/site-templates-list.png)

選擇他們想切換到的範本後，系統會要求他們確認變更。

![網站範本切換確認對話框](/img/account-page/template-switch-confirm.png)

開啟確認並點擊 **處理切換** 後，新的網站範本將會套用到你客戶的網站上。

客戶也可以在需要將網站重設回目前指派的範本時，從此面板使用 **重設目前範本**。就像切換到另一個範本一樣，重設範本可能會覆寫網站內容，因此客戶只有在了解重設動作時才應確認。

### 新增自訂網域： {#adding-custom-domains}

你的客戶也可以在他們的 Account 頁面為此方案新增自訂網域。若要允許你的客戶使用自訂網域，請前往 **Ultimate Multisite > 設定 >** **網域對應**。

開啟 **啟用網域對應** 選項。這將允許你的客戶在網路層級使用自訂網域。

別忘了也檢查是否已針對產品啟用網域對應，因為你可以限制某個產品不允許客戶使用自訂網域。

前往 **Ultimate Multisite > 產品**。選擇你要的方案，並前往 **自訂網域** 分頁。開啟 **允許自訂網域** 選項。

![含有允許自訂網域切換開關的自訂網域分頁](/img/config/product-custom-domains.png)

這將允許所有訂閱此特定方案的客戶使用自訂網域。現在，在 Account 頁面上，你的客戶可以點擊 **新增網域** 來新增自訂網域。

![Account 頁面上的新增網域按鈕](/img/account-page/add-domain-button.png)

開啟的第一個視窗會向你的客戶顯示一則訊息，指示他們如何更新 DNS 記錄，以便讓此自訂網域在你的網路上運作。

![新增自訂網域時顯示的 DNS 指示](/img/account-page/add-domain-dns.png)

此訊息可以由你在 **Ultimate Multisite > 設定 > 網域對應 > 新增網域指示** 中編輯。

![網域對應中的新增網域指示設定](/img/config/settings-domain-mapping.png)

以下是網域對應設定頁面的完整檢視：

![網域對應設定完整頁面](/img/config/settings-domain-mapping-full.png)

點擊 **下一步** 後，你的客戶可以新增他們的自訂網域名稱，並選擇此自訂網域是否要成為主要網域。請注意，你的客戶可以為他們的網站使用多個自訂網域，因此他們可以選擇哪一個作為主要網域。

![自訂網域名稱輸入與主要網域選項](/img/account-page/add-domain-primary.png)

點擊 **新增網域** 後，該網域會被新增到你客戶的 Account。接下來他們只需要在其網域註冊商處變更此自訂網域的 DNS 記錄。

### 變更密碼： {#changing-password}

在 Account Dashboard 中，你的客戶也可以點擊 **變更密碼** 來變更他們的密碼。

![Account 頁面上的變更密碼按鈕](/img/account-page/change-password-button.png)

這會顯示一個新視窗，你的客戶需要填寫目前密碼，然後填寫他們想使用的新密碼。

![含有目前密碼與新密碼欄位的變更密碼表單](/img/account-page/change-password-form.png)

### 危險區域： {#danger-zone}

我們也有兩個顯示在 **危險區域** 部分的選項：**刪除網站** 和 **刪除 Account**。它們都位於危險區域部分，因為這兩個動作無法復原。如果你的客戶刪除他們的網站或 Account，他們將無法恢復。

![包含刪除網站與刪除 Account 選項的危險區域](/img/account-page/danger-zone.png)

如果你的客戶點擊這兩個選項中的任何一個，他們會看到一個視窗，需要開啟移除網站或 Account 的選項，並會被警告此動作無法復原。

![刪除網站確認對話框](/img/account-page/delete-site-confirm.png)

![刪除 Account 確認對話框](/img/account-page/delete-account-confirm.png)

如果他們刪除網站，他們的 Account 和會員資格仍不會受到影響。他們只會失去網站上的所有內容。如果他們刪除 Account，所有與此 Account 相關的網站、會員資格和資訊都會遺失。
