---
title: 附加元件 Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 為外掛（add-ons）和需要於 WordPress 啟動（sunrise bootstrapping）期間運行自訂 MU-plugin 整合的用戶提供了「Sunrise 擴充檔案載入器」。這樣可以避免直接修改生成的 `wp-content/sunrise.php` 檔案。

## 何時使用它 {#when-to-use-it}

當您的整合必須在一般外掛載入之前運行時，請使用 Sunrise 擴充功能。例如：自訂網域路由、特定主機的請求處理，或早期網路啟動調整。

對於一般整合，請優先使用正常的 WordPress 外掛、MU-plugins，以及文件記錄的 Ultimate Multisite hooks。Sunrise 程式碼運行得非常早，因此應該保持簡潔、防禦性，並且不依賴其他元件。

## 檔案命名慣例 {#file-naming-convention}

請在一個名稱以 `ultimate-multisite-` 開頭的外掛目錄中，建立一個名為 `sunrise.php` 的 PHP 檔案：

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

載入器會掃描 plugins 目錄中符合此模式的檔案：

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

匹配的檔案會按照外掛路徑的字母順序載入。

## 檔案放置位置 {#where-to-place-the-file}

請將檔案放置在擁有 Sunrise 行為的外掛的根目錄下：

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

此掃描是相對於 `WP_CONTENT_DIR` 決定的，而不是當前 `WP_PLUGIN_DIR` 的值。這樣可以確保在多租戶或任何其他早期啟動程式碼在 Sunrise 期間更改外掛目錄常數時，發現過程依然穩定。

請勿直接編輯生成的 `wp-content/sunrise.php` 檔案。此載入器讓自訂程式碼可以在不複製 Ultimate Multisite 安裝和更新的核心 Sunrise 檔案的情況下，擴展 Sunrise 的行為。

## 可用的 Hooks 和 Filters {#hooks-and-filters-available}

外掛的 Sunrise 檔案會在 Ultimate Multisite 網域映射載入完成之後，但在 WordPress 觸發 `ms_loaded` 之前運行。此時，Sunrise 檔案可以：

- 讀取或覆寫 `$current_site` 和 `$current_blog`；
- 在資料庫配置載入之後，存取 `$wpdb`；
- 根據需要定義 Sunrise 時期的常數，例如 `BLOG_ID_CURRENT_SITE`；
- 讀取 Ultimate Multisite 的 Sunrise 輔助狀態，包括多租戶整合使用的路由狀態。

Ultimate Multisite 在其 Sunrise 載入器完成後會觸發 `wu_sunrise_loaded`。對於那些應該在 Sunrise 啟動完成後運行，但仍屬於 Sunrise 生命週期的程式碼，請使用此 action。

請只呼叫已經在 Sunrise 階段載入的函數。避免執行資料庫密集型操作、模板渲染、HTTP 請求，以及假設正常外掛載入順序已經完成的程式碼。

## 最小範例 {#minimal-example}

```php
<?php
/**
 * Sunrise 擴充功能，用於自訂主機整合。
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // 在 ms_loaded 之前調整早期路由或常數。
}
```

部署檔案後，請載入一個已映射的網域和一個未映射的主站點 URL，以確認這兩個路徑都能正確地完成啟動。
