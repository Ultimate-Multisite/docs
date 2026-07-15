---
title: 日出檔案錯誤
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# 安裝 Sunrise 檔案時發生錯誤

sunrise.php 是一個特殊檔案，WordPress 在啟動過程中會尋找這個檔案。為了讓 WordPress 能夠偵測到 sunrise.php 檔案，這個檔案必須放置在 **wp-content 資料夾**中。

當您啟用 Ultimate Multisite 並依照截圖中的設定精靈進行操作時，Ultimate Multisite 會嘗試將我們的 sunrise.php 檔案複製到 wp-content 資料夾。

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

在大多數情況下，我們都能成功複製檔案，一切運作正常。但是，如果某些設定不正確（例如資料夾權限），您可能會遇到 Ultimate Multisite 無法複製檔案的情況。

如果您仔細閱讀 Ultimo 顯示的錯誤訊息，就會發現這裡發生的正是這個問題：**Sunrise 複製失敗**。

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

要解決這個問題，您只需將 wp-ultimo plugin 資料夾中的 sunrise.php 檔案複製並貼到 wp-content 資料夾即可。完成後，重新載入設定精靈頁面，檢查應該就會通過。

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> 無論如何，這個問題可能意味著您需要全面檢查一下資料夾權限，以避免日後遇到其他問題（不僅是 Ultimate Multisite，其他 plugin 和佈景主題也可能會受到影響）。

WordPress 內建的**網站健康檢查工具**（您可以透過主網站的**管理後台 > 工具 > 網站健康檢查**來存取）可以告訴您資料夾權限設定是否有可能導致 WordPress 出現問題。

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
