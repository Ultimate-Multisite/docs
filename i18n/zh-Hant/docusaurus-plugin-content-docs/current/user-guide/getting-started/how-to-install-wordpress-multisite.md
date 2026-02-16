---
title: 如何安裝 WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# 如何安裝 WordPress Multisite？

WordPress Multisite 讓你可以在單一安裝中管理多個網站。這是 WordPress 內建的功能，但預設並未啟用。

:::tip
Ultimate Multisite 內建了 **[Multisite 設定精靈](./multisite-setup-wizard)**，可以自動完成整個設定流程。如果你已經安裝了 Ultimate Multisite，我們建議使用精靈，而不是按照以下的手動步驟操作。
:::

由於 Ultimate Multisite 是一個僅限網路使用的 plugin，在這篇教學中，你將學習如何手動安裝和設定 WordPress Multisite。本文參考自 WPBeginner 的 [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/)。

**建立 multisite 網路前，請注意以下事項：**

  * 選擇優質的 WordPress 主機！網路中的所有網站會共用相同的伺服器資源。

  * 如果你只有幾個流量較低的網站，共享主機應該就能滿足需求。

  * 大多數 **Managed WordPress 主機商** 都提供現成的 Multisite 支援（他們會幫你安裝已啟用並設定好 Multisite 的 WordPress）。WP Engine、Closte、Cloudways 等都是如此。如果你不確定你的主機商是否支援，請在繼續本教學前先聯繫他們的客服。

  * 建議你熟悉如何安裝 WordPress 以及使用 FTP 編輯檔案。

_**重要**_**：** 如果你要在現有的 WordPress 網站上設定 multisite 網路，請務必：

  * 建立完整的 WordPress 網站備份

  * 前往 plugin 頁面，從批次操作中選擇「停用」，然後點擊「套用」，以停用網站上所有的 plugin

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

若要啟用 Multisite，請先使用 FTP 用戶端或 cPanel 檔案管理員連線到你的網站，然後開啟 wp-config.php 檔案進行編輯。

在 _*That's all, stop editing! Happy blogging.*_ 這行之前，加入以下程式碼：

define('WP_ALLOW_MULTISITE', true);

儲存並將 wp-config.php 檔案上傳回伺服器。

在網站上啟用 multisite 功能後，接下來就可以設定你的網路了。

前往 **工具 » 網路設定**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

現在你需要告訴 WordPress，網路中的網站要使用哪種網域結構：子網域或子目錄。

如果你選擇子網域，你必須修改 DNS 設定以進行網域對應，並確保為你的 multisite 網路設定好 _**萬用字元子網域**_。

回到網路設定頁面，為你的網路輸入標題，並確認網路管理員電子郵件地址正確無誤。點擊「安裝」繼續。

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

將 WordPress 提供的這段程式碼加入到你的 _**wp-config.php**_：

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

並將 WordPress 提供的這段程式碼加入到你的 _**.htaccess**_ 檔案：

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

使用 FTP 用戶端或檔案管理員（例如 cPanel）將程式碼複製貼上到這兩個檔案中。

最後，重新登入你的 WordPress 網站，即可存取你的 multisite 網路。

**在安裝 Ultimate Multisite 之前，請務必測試並確認你能夠在 WordPress Multisite 安裝中建立子網站。**

建立子網站的步驟：

  1. 開啟你網站的 wp-admin

  2. 前往 My Sites > Sites (/wp-admin/network/sites.php)

  3. 點擊頂部的「新增」

  4. 填寫所有欄位：

  * Site Address — 請勿使用 "www"

  * 子網域：[siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * 子目錄：[yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — 網站標題，之後可以修改

  * Admin Email — 設定為該子網站的初始管理員

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

填寫完所有欄位後，點擊「Add site」按鈕。新的子網站建立後，請前往該網站確認子網站運作正常。

## 常見問題：

### 1\. 我可以建立新網站，但無法存取這些網站。

如果你選擇了子網域，你還需要為 multisite 網路設定萬用字元子網域。

要進行設定，請前往你網站主機帳戶的控制台（例如 cPanel/Plesk/Direct Admin，依你的主機商而定）。

找到「Domains」或「Subdomains」選項。在某些控制台中，這可能標示為「Domain administration」。

在子網域欄位中輸入星號 (*)。接著，系統會要求你選擇要在哪個網域下新增子網域。

系統會自動偵測所選網域的文件根目錄。點擊「Create」或「Save」按鈕來新增你的萬用字元子網域。設定完成後應該會顯示 "*.[mydomain.com](http://mydomain.com)"
