---
title: GitHub 程式碼片段
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# 如何使用我們 GitHub 儲存庫上的 Ultimate Multisite 程式碼片段

GitHub 儲存庫上提供了許多程式碼片段，這些都是 Ultimate Multisite 使用者經常需要的小功能，例如在註冊頁面加入 Google Analytics 追蹤碼，或是在管理後台隱藏某個 meta box。

這篇文章將說明如何使用這些程式碼，更具體地說，就是要把它們放在哪裡。

你可以在下方連結找到這些程式碼片段：

https://github.com/next-press/wp-ultimo-snippets/

有兩種方式可以新增程式碼：

  1. 放在佈景主題的 functions.php 檔案中

  2. 使用 Must-Use Plugins（mu-plugins）

# 如何將程式碼片段新增到佈景主題的 functions.php 檔案

  1. 登入 WordPress 多站網路管理後台，前往「外觀」>「佈景主題編輯器」（請參考下方截圖）。

  2. 在「編輯佈景主題」頁面，確認畫面右上方的下拉選單已選擇你目前使用的佈景主題（下方截圖中的 #3 位置）。

  3. 點選「佈景主題檔案」區塊下的 functions.php 檔案來載入它。捲動到檔案底部，貼上你從 GitHub 儲存庫取得的 Ultimate Multisite 程式碼片段。

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# 如何建立 Must-Use Plugins（mu-plugins）

WordPress 有一個功能可以讓你載入自訂功能，稱為「Must-Use Plugins」，簡稱「mu-plugins」。

這些特殊的 mu-plugins 會在所有一般外掛之前載入，而且無法被停用。在多站網路中，這些 mu-plugins 裡的程式碼會套用到你安裝的所有網站上。

1\. 使用 FTP 或 SSH 連線到你 WordPress 安裝目錄的檔案系統。

2\. 在 WordPress 安裝目錄的 wp-content 資料夾內，建立一個新資料夾，命名為：mu-plugins。

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. 在你的電腦上使用記事本或任何程式碼編輯器，建立一個名為 wu-snippet.php 的 PHP 檔案。

4\. 將你從 GitHub 儲存庫取得的 Ultimate Multisite 程式碼片段貼到檔案中並儲存。你也可以在程式碼片段的最上方加入以下程式碼，為你的 mu plugin 加上標籤說明。
