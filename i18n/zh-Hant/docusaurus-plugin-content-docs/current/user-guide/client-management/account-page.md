---
title: 客戶帳戶頁面
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# 您客戶的帳戶頁面 (v2)

_**重要提示：本文適用於 Ultimate Multisite 2.x 版本。**_

當客戶在您的網路上訂閱方案後，他們可以存取網站及其控制台，其中包含付款、會員資格、網域、方案限制等重要資訊...

在本教學中，我們將帶您瀏覽客戶的帳戶頁面，讓您了解客戶可以在其中查看和執行的操作。

## 帳戶頁面

客戶可以在控制台中點擊 **Account** 來存取帳戶頁面。

![客戶控制台中的 Account 選單](/img/admin/dashboard.png)

![客戶帳戶頁面總覽](/img/admin/dashboard.png)

客戶點擊後，會看到會員資格、帳單地址、發票、網域、網站限制的概覽，如果您的網路允許，他們還可以更改 **Site Template**。

他們也可以將會員資格變更為其他方案，或購買您提供的其他套件或服務。讓我們逐一了解各個區塊。

### 會員資格概覽：

客戶網站名稱下方的第一個區塊顯示了目前方案的概覽，以及隨方案購買的服務/套件。這個區塊還會顯示會員編號、首次付款金額、方案及任何服務/套件的費用，以及此會員資格的帳單次數。他們也可以看到會員資格的狀態是 **Active**、**Expired** 還是 **Canceled**。

![顯示方案、金額和帳單詳情的會員資格概覽](/img/admin/memberships-list.png)

在這個區塊下方，您的客戶可以看到 **About This Site** 和 **Site Limits** 區塊。這些區塊會顯示方案的所有限制：磁碟空間、文章數、頁面數、訪問次數等... 這些限制可以在 **Ultimate Multisite > Products** 的各個方案頁面中設定。

![顯示方案限制的 About This Site 和 Site Limits 區塊](/img/admin/dashboard.png)

在 **Your Membership** 右側，客戶可以點擊 **Change**。這會顯示所有可用的方案和套件/服務。如果他們選擇其他方案，新方案的限制將取代目前會員資格的限制——無論是降級還是升級。

如果您的客戶選擇為目前的會員資格購買套件或服務（例如更多磁碟空間或訪問次數），目前的會員資格不會改變，只會新增購買的套件。

請注意，在這個會員資格變更頁面無法使用折扣碼。如果客戶在首次購買會員資格時使用了折扣碼，該折扣碼也會套用到新的會員資格。

### 更新帳單地址：

在帳戶頁面上，您的客戶也可以更新帳單地址。他們只需點擊 _Billing Address_ 旁邊的 **Update** 即可。

![帳單地址區塊與 Update 按鈕](/img/admin/customers-list.png)

客戶會看到一個新視窗。他們只需填入新地址並點擊 _Save Changes_ 即可。

![更新帳單地址表單](/img/admin/customers-list.png)

### 更換網站模板：

要允許客戶更換網站模板，您需要前往 **Ultimate Multisite > Settings > Sites** 並開啟 **Allow Template Switching** 選項。

此外，在 **Ultimate Multisite > Products** 中選擇您的方案，前往 **Site Templates** 分頁。確保 **Allow Site Templates** 選項已開啟，且在 **Site Template Selection Mode** 中選擇了 **Choose Available Site Templates** 選項。

![產品網站模板分頁與模板選擇模式](/img/config/product-site-templates.png)

您可以看到網站上所有可用的網站模板。選擇哪些模板要開放給此方案的訂閱客戶使用，哪些不開放。請注意，此選項也會影響結帳表單，因此任何設為 **Not Available** 的模板都不會出現在此方案的註冊頁面上。

現在您的客戶可以在帳戶頁面中點擊 **Change Site Template**。

![帳戶頁面上的 Change Site Template 按鈕](/img/admin/dashboard.png)  
客戶會看到此方案所有可用的網站模板列表。

![此方案可用的網站模板列表](/img/config/site-templates-list.png)

選擇要更換的模板後，系統會請他們確認變更。

![網站模板切換確認對話框](/img/admin/dashboard.png)

開啟確認選項並點擊 **Process Switch** 後，新的網站模板就會套用到客戶的網站上。

### 新增自訂網域：

您的客戶也可以在帳戶頁面為此方案新增自訂網域。要允許客戶使用自訂網域，請前往 **Ultimate Multisite > Settings > Domain Mapping**。

開啟 **Enable Domain Mapping** 選項。這會允許您的客戶在網路層級使用自訂網域。

別忘了也要檢查產品層級是否啟用了網域對應——因為您可以限制特定產品不允許客戶使用自訂網域。

前往 **Ultimate Multisite > Products**。選擇您要設定的方案，進入 **Custom Domains** 分頁。開啟 **Allow Custom Domains** 選項。

![Custom Domains 分頁與 Allow Custom Domains 開關](/img/config/product-custom-domains.png)

這會允許所有訂閱此特定方案的客戶使用自訂網域。現在，在帳戶頁面上，您的客戶可以點擊 **Add Domain** 來新增自訂網域。

![帳戶頁面上的 Add Domain 按鈕](/img/admin/domains-list.png)

第一個開啟的視窗會向客戶顯示說明訊息，指導他們如何更新 DNS 記錄，以便自訂網域能在您的網路上正常運作。

![新增自訂網域時顯示的 DNS 說明](/img/admin/domains-list.png)

您可以在 **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** 中編輯此訊息。

![Domain Mapping 中的 Add New Domain Instructions 設定](/img/config/settings-domain-mapping.png)

點擊 **Next Step** 後，客戶可以輸入自訂網域名稱，並選擇是否將此網域設為主要網域。請注意，客戶可以為網站使用多個自訂網域，因此他們可以選擇哪一個作為主要網域。

![自訂網域名稱輸入與主要網域選項](/img/admin/domains-list.png)

點擊 **Add Domain** 後，網域就會新增到客戶的帳戶中。他們現在只需在網域註冊商那裡變更此自訂網域的 DNS 記錄即可。

### 變更密碼：

在帳戶控制台中，客戶也可以點擊 **Change Password** 來變更密碼。

![帳戶頁面上的 Change Password 按鈕](/img/admin/dashboard.png)

這會顯示一個新視窗，客戶需要填入目前的密碼，然後輸入要使用的新密碼。

![包含目前密碼和新密碼欄位的變更密碼表單](/img/admin/dashboard.png)

### 危險區域：

我們還有兩個顯示在 **Danger Zone** 部分的選項：**Delete Site** 和 **Delete Account**。它們之所以放在危險區域，是因為這兩個操作都無法復原。如果客戶刪除了網站或帳戶，就無法恢復。

![包含 Delete Site 和 Delete Account 選項的 Danger Zone](/img/admin/dashboard.png)

如果客戶點擊這兩個選項中的任何一個，會看到一個視窗，需要開啟刪除網站或帳戶的確認選項，並會收到此操作無法復原的警告。

![Delete Site 確認對話框](/img/admin/dashboard.png)

![Delete Account 確認對話框](/img/admin/dashboard.png)

如果他們刪除網站，帳戶和會員資格仍會保留。他們只會失去網站上的所有內容。如果他們刪除帳戶，所有網站、會員資格和此帳戶的相關資訊都會遺失。
