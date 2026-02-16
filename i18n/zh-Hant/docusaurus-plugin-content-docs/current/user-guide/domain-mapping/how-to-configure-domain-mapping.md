---
title: 如何設定網域對應
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# 如何設定網域對應 (v2)

_**重要提醒：本文適用於 Ultimate Multisite 2.x 版本。**_

進階網路最強大的功能之一，就是讓客戶可以將頂級網域連結到他們的網站。畢竟，哪個看起來更專業：[_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) 還是 [_**joesbikeshop.com**_](http://joesbikeshop.com)？這就是為什麼 Ultimate Multisite 內建了這項功能，無需使用第三方外掛。

## 什麼是網域對應？

顧名思義，網域對應是 Ultimate Multisite 提供的功能，可以接收自訂網域的請求，並將該請求對應到網路中已連結該特定網域的相應網站。

### 如何在 Ultimate Multisite 網路上設定網域對應

網域對應需要你進行一些設定才能運作。幸運的是，Ultimate Multisite 會為你自動處理繁瑣的工作，讓你能輕鬆滿足相關需求。

在安裝 Ultimate Multisite 的過程中，精靈會自動複製並安裝 **sunrise.php** 到指定資料夾。**在完成此步驟之前，精靈不會讓你繼續進行下一步**。

![Ultimate Multisite 安裝精靈的 sunrise.php 步驟](/img/config/settings-domain-mapping.png)

這表示一旦 Ultimate Multisite 安裝精靈完成網路設定，你就可以立即開始對應自訂網域。

請注意，在 Ultimate Multisite 中使用網域對應並非強制性的。你可以選擇使用 WordPress Multisite 原生的網域對應功能或其他網域對應解決方案。

如果你需要停用 Ultimate Multisite 的網域對應功能以使用其他解決方案，可以在 **Ultimate Multisite > Settings > Domain Mapping** 中停用此功能。

![網域對應設定與啟用開關](/img/config/settings-domain-mapping.png)

在此選項下方，你還會看到 **Force Admin Redirect** 選項。此選項讓你控制客戶是否可以同時透過自訂網域和子網域存取他們的管理後台，或是只能透過其中一個存取。

如果你選擇 **Force redirect to mapped domain**，客戶只能透過他們的自訂網域存取管理後台。

**Force redirect to network domain** 選項則完全相反 - 客戶只能透過子網域存取管理後台，即使嘗試從自訂網域登入也是如此。

而 **Allow access to the admin by both mapped domain domain and network domain** 選項則允許他們同時透過子網域和自訂網域存取管理後台。

![網域對應的強制管理員重新導向選項](/img/config/settings-domain-mapping.png)

有兩種方式可以對應自訂網域。第一種是以超級管理員身分從網路管理後台對應網域名稱，第二種是透過子網站管理後台的帳戶頁面進行對應。

但在開始將自訂網域對應到網路中的某個子網站之前，你需要確保網域名稱的 **DNS 設定**已正確設定。

### 

### 確保網域 DNS 設定正確配置

要讓對應正常運作，你需要確保要對應的網域指向你網路的 IP 位址。請注意，你需要的是網路 IP 位址 - 也就是安裝 Ultimate Multisite 的網域 IP 位址 - 而不是你要對應的自訂網域 IP 位址。若要查詢特定網域的 IP 位址，我們建議使用 [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) 等工具。

要正確對應網域，你需要在 **DNS** 設定中新增一筆 **A 記錄**，指向該 **IP 位址**。不同網域註冊商的 DNS 管理方式差異很大，但網路上有很多教學可供參考，只要搜尋「_在 XXXX 建立 A 記錄_」，其中 XXXX 是你的網域註冊商（例如：「_在 GoDaddy 建立 A 記錄_」）。

如果你在設定時遇到困難，**請聯繫你的網域註冊商客服**，他們可以協助你完成這部分的設定。

如果你計劃讓客戶自行對應他們的網域，他們需要自己完成這部分的設定。如果他們無法建立 A 記錄，請引導他們聯繫註冊商的客服系統。

### 以超級管理員身分對應自訂網域名稱

當你以超級管理員身分登入網路時，可以輕鬆在 **Ultimate Multisite > Domains** 中新增和管理自訂網域名稱。

![Ultimate Multisite 中的網域清單頁面](/img/admin/domains-list.png)

在此頁面中，你可以點擊頂部的 **Add Domain** 按鈕，這會彈出一個視窗，讓你設定和填寫**自訂網域名稱**、要套用自訂網域名稱的**子網站**，以及決定是否要將其設為**主要網域**（請注意，你可以**將多個網域名稱對應到一個子網站**）。

![新增網域視窗，包含網域名稱和網站欄位](/img/admin/domains-list.png)

填入所有資訊後，你可以點擊底部的 **Add Existing Domain** 按鈕。

這將開始驗證並取得自訂網域的 DNS 資訊。你也會在頁面底部看到日誌，讓你追蹤處理進度。此過程可能需要幾分鐘才能完成。

如果一切設定正確，**Stage** 或狀態應該會從 **Checking DNS** 變更為 **Ready**。

![網域階段從 Checking DNS 變更為 Ready](/img/admin/domains-list.png)

![網域清單中顯示 Ready 狀態的網域](/img/admin/domains-list.png)

如果你點擊網域名稱，你會看到其中的一些選項。讓我們快速瀏覽一下：

![網域詳細頁面，包含階段、網站、啟用和 SSL 選項](/img/admin/domains-list.png)

**Stage：**這是網域目前所處的階段。當你首次新增網域時，它可能處於 **Checking DNS** 階段。系統會檢查 DNS 記錄並確認它們是否正確。然後，網域會進入 **Checking SSL** 階段。Ultimate Multisite 會檢查網域是否有 SSL，並將你的網域分類為 **Ready** 或 **Ready (without SSL)**。

**Site：**與此網域關聯的子網域。對應的網域將顯示此特定網站的內容。

**Active：**你可以開啟或關閉此選項來啟用或停用網域。

**Is Primary Domain?：**你的客戶可以為每個網站設定多個對應網域。使用此選項來選擇這是否為特定網站的主要網域。

**Is Secure?：**雖然 Ultimate Multisite 會在啟用網域前檢查其是否具有 SSL 憑證，但你可以手動選擇以有或沒有 SSL 憑證的方式載入網域。請注意，如果網站沒有 SSL 憑證而你嘗試強制以 SSL 載入，可能會出現錯誤。

### 以子網站使用者身分對應自訂網域名稱

子網站管理員也可以從他們的子網站管理後台對應自訂網域名稱。

首先，你需要確保在 **Domain mapping** 設定中啟用此選項。請參閱下方的截圖。

![網域對應設定，允許子網站使用者對應網域](/img/config/settings-domain-mapping.png)

你也可以在 **Ultimate Multisite > Products** 中的 **Plan** 層級或產品選項下設定此選項。

![產品設定中的自訂網域選項](/img/config/settings-domain-mapping.png)

當啟用任一選項且允許子網站使用者對應自訂網域名稱時，子網站使用者應該會在 **Account** 頁面中看到一個名為 **Domains** 的區塊。

![子網站帳戶頁面上的網域區塊](/img/admin/domains-list.png)

使用者可以點擊 **Add Domain** 按鈕，這會彈出一個包含說明的視窗。

![子網站使用者的新增網域視窗，包含 DNS 說明](/img/admin/domains-list.png)

使用者可以點擊 **Next Step** 繼續新增自訂網域名稱。他們也可以選擇這是否為主要網域。

![自訂網域名稱欄位與主要網域選項](/img/admin/domains-list.png)

![點擊 Add Domain 開始 DNS 驗證](/img/admin/domains-list.png)點擊 **Add Domain** 將開始驗證並取得自訂網域的 DNS 資訊。

### 關於網域同步

網域同步是 Ultimate Multisite 將自訂網域名稱作為附加網域新增到你的主機帳戶的過程，**這是讓網域對應正常運作所必需的**。

如果你的主機提供商與 Ultimate Multisite 網域對應功能有整合，網域同步會自動進行。目前支援的主機提供商包括 _Runcloud、Closte、WP Engine、Gridpane、WPMU Dev、Cloudways_ 和 _Cpanel_。

你需要在 Ultimate Multisite 設定的 **Integration** 分頁中啟用此整合。

![Ultimate Multisite 設定中的整合分頁](/img/config/settings-domain-mapping.png)

![網域同步的主機提供商整合設定](/img/config/settings-domain-mapping.png)

_請注意，如果你的主機提供商不在上述名單中，**你需要手動同步或將網域名稱新增**到你的主機帳戶。_
