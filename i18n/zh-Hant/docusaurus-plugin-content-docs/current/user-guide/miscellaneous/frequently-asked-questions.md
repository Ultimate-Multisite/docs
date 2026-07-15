---
title: 常見問題
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# 常見問題

以下是支援服務中經常出現的**常見問題**。

  * **什麼是 Ultimate Multisite？**

Ultimate Multisite 是一款專為 WordPress multisite 設計的 WordPress plugin，能將你的 WordPress 網站轉變為高級網站網絡，類似 [WordPress.com](https://WordPress.com)。你可以讓客戶透過月費、季費或年費方案建立網站（也可以建立免費方案）。

  * **Ultimate Multisite 可以在非 Multisite 環境下運作嗎？**

不行。Ultimate Multisite 必須搭配 WordPress multisite、子目錄或子網域使用。

  * **Ultimate Multisite 的系統需求是什麼？**

Ultimate Multisite 需要：

**WordPress 版本**：v5.3+（建議使用最新穩定版本）  
**PHP 版本**：7.4.x（即將支援 > 8.0）  
**MySQL 版本**：v5+（建議使用 5.6 版，如果你的主機商沒有提供 8.0 版本）

_還需要啟用 Multisite（子網域或子目錄）。_[如何安裝 WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)。

  * **Ultimate Multisite 可以在子目錄模式的 Multisite 下運作嗎？**

可以。Ultimate Multisite 同時支援子目錄安裝和子目錄安裝。

  * **Ultimate Multisite 可以在子網域模式的 Multisite 下運作嗎？**

可以。Ultimate Multisite 同時支援子目錄安裝和子網域安裝。

  * **我可以用 Ultimate Multisite 限制使用者能使用哪些 Plugin 和佈景主題嗎？**

可以。透過 Ultimate Multisite，你可以針對網絡中的每個方案選擇可用的 plugin 和佈景主題。

  * **我可以用 Ultimate Multisite 限制使用者在網站上建立的文章數量嗎？**

可以。透過 Ultimate Multisite，你可以為網絡中**每種文章類型**設定配額。你還可以限制管理員能邀請的使用者數量、**磁碟空間大小**等等。

  * **Ultimate Multisite 支援網站範本嗎？**

支援。透過 Ultimate Multisite，你可以建立任意數量的網站範本。網站範本不是佈景主題，它們是網絡中的一般網站。你可以啟用 plugin、佈景主題，並以任何方式自訂該網站範本。當使用者選擇某個範本時，他們的網站會以該範本的副本建立，所有自訂設定都會保留。

你也可以為特定方案指定範本。這樣一來，所有註冊該方案的使用者都會獲得以該網站範本複製建立的網站。

  * **Ultimate Multisite 可以整合 WooCommerce 嗎？**

可以！

如果你想讓網絡中的使用者使用 WooCommerce 來建立商店，Ultimate Multisite 可以做到。你甚至可以針對不同方案層級限制客戶能建立的商品數量。

關於 Ultimate Multisite 的訂閱付款，你可以使用 [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/)，讓 Ultimate Multisite 客戶透過主網站上的 WooCommerce 付款閘道進行付款。這樣你就能利用 WooCommerce 龐大的付款閘道資源庫，向 Ultimate Multisite 客戶收費。

  * **有辦法從 WPMUDEV Pro Sites 遷移訂閱嗎？**

有的，Ultimate Multisite 現在提供[一個實用的工具協助你遷移](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) Pro Sites 網絡。

  * **為什麼方案編輯頁面上的「允許的 Plugin」分頁是空的？**

Ultimate Multisite 只能讓你允許或拒絕存取網絡中未啟用的 plugin。當一個 plugin 是網絡啟用狀態時，根據其本質，它會預設載入到網絡中的每個網站。

如果你在「允許的 Plugin」分頁沒有看到任何 plugin，請檢查想要的 plugin 是否為網絡啟用狀態。

  * **我可以使用自訂的價格表設計嗎？**

可以。從 1.4.0 版本開始，Ultimate Multisite 支援範本覆寫。

  * **Ultimate Multisite 可以在 WP Engine 上運作嗎？**

可以。Ultimate Multisite 一直都支援 WP Engine，但過去要讓網域對應正常運作，管理員需要手動執行額外步驟（將網域新增到 WP Engine 面板）。**從 1.6.0 版本開始就不需要了。** Ultimate Multisite 直接整合 WP Engine API，網域在對應後會自動新增到面板。

  * **你們推薦哪家主機商？**

Ultimate Multisite 應該可以在任何主機商上運作。唯一的差別是，有些主機商如 Closte、Serverpilot、WPMUDEV、WP Engine、Cloudways、Gridpane 和 [Runcloud.io](http://Runcloud.io) 提供更緊密的網域對應整合，開箱即用。至於其他主機商，你可能需要手動設定網域對應。
