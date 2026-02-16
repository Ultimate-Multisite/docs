---
title: 在 Closte 上設定 Sunrise 常數
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# 在 Closte 上將 Sunrise 常數設定為 true

部分主機供應商基於安全考量會鎖定 wp-config.php 檔案。這表示 Ultimate Multisite 無法自動編輯該檔案來加入必要的常數，導致網域對應及其他功能無法正常運作。Closte 就是這類主機之一。

不過，Closte 提供了一個安全的方式讓你新增常數到 wp-config.php。只要依照以下步驟操作即可：

## 在 Closte 控制台

首先，[登入你的 Closte 帳號](https://app.closte.com/)，點選 Sites 選單項目，然後點選你目前正在設定的網站旁邊的 Dashboard 連結：

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

畫面左側會出現一系列新的選單項目。使用該選單導覽至 **Settings** 頁面：

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

接著，在 **Settings** 頁面中找到 WP-Config 分頁，然後在該分頁中找到「Additional wp-config.php content」欄位：

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

在安裝 Ultimate Multisite 的過程中，你需要將 sunrise 常數加入該欄位。只要新增一行，貼上以下程式碼，然後點選 **Save All** 按鈕即可。

define('SUNRISE', true);

這樣就完成了。回到 Ultimate Multisite 安裝精靈，重新整理頁面即可繼續安裝流程。
