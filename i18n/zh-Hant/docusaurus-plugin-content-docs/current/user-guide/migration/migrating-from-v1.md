---
title: 從 V1 遷移
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# 從 V1 遷移

## Ultimate Multisite 已從原本的 1.x 系列升級至 2.x 系列版本。

Ultimate Multisite 2.0 及更新版本是完全重新撰寫的程式碼，這表示舊版本和新版本之間幾乎沒有共用的部分。因此，從 1.x 升級到 2.x 時，您的資料需要轉換成新版本能夠理解的格式。

幸好，Ultimate Multisite 2.0+ **內建了遷移工具**，能夠偵測舊版本的資料並將其轉換為新格式。這個遷移過程會在 2.0+ 版本的**設定精靈**中進行。

本課程說明遷移工具的運作方式、遇到失敗時該怎麼處理，以及如何排解過程中可能出現的問題。

_**重要：在開始從 1.x 版升級到 2.0 版之前，請務必先備份您的網站資料庫**_

## 第一步

首先，請下載外掛的 .zip 檔案，並在您的網路管理員控制台安裝 2.0 版。

[安裝並啟用 2.0 版](../getting-started/installing-ultimate-multisite.md)後，系統會自動偵測到您的 Multisite 正在執行舊版本，您會在外掛頁面頂端看到這則訊息。

_**注意：**如果您的 Multisite 已安裝 Ultimate Multisite 1.x，您會看到一個選項，可以用剛下載的版本取代現有外掛。請直接點選**以上傳版本取代目前版本**。_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

下一個頁面會顯示您已安裝的舊版附加元件清單。頁面上會說明您目前使用的版本是否與 2.0 版相容，或者您是否需要在遷移後安裝升級版的附加元件。

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

準備好之後，請點選**前往安裝程式完成升級**按鈕。

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

接著會進入安裝精靈頁面，顯示一些歡迎訊息。只需點選**開始使用**即可進入下一頁。

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

點選**開始使用**後，會跳轉到安裝前檢查頁面。這裡會顯示您的系統資訊和 WordPress 安裝狀態，並告訴您是否符合 **Ultimate Multisite 的系統需求**。

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

下一步是輸入您的 Ultimate Multisite 授權金鑰並啟用外掛。這將確保所有功能（包括附加元件）都能在您的網站上正常使用。

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

輸入金鑰後，請點選**同意並啟用**。

授權啟用後，您可以在下一頁點選**安裝**開始實際的安裝程序。這會自動建立 2.0 版運作所需的檔案和資料庫。

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## 現在，開始遷移

遷移工具內建安全機制，會檢查您整個 multisite 的 Ultimate Multisite 資料，確保所有資料都能順利遷移。請點選**執行檢查**按鈕開始這個程序。

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

檢查完成後，會有兩種可能的結果：**有錯誤**或**沒有錯誤**。

### 有錯誤

如果出現錯誤訊息，您需要聯繫我們的客服團隊，讓他們協助您修正錯誤。建立支援票證時，請務必**附上錯誤記錄**。您可以下載記錄檔，或點選「聯繫客服團隊」的連結。這會在頁面右側開啟說明小工具，相關欄位會自動填入，錯誤記錄也會包含在描述中。

_**由於系統發現錯誤，您將無法繼續遷移到 2.0 版。您可以先回復到 1.x 版，繼續運作您的網路，直到錯誤修正為止。**_

### 沒有錯誤

如果系統沒有發現任何錯誤，您會看到成功訊息，底部會出現**遷移**按鈕，讓您繼續進行遷移。這個頁面會提醒您在繼續之前建立資料庫備份，我們強烈建議您這麼做。如果已經完成備份，請點選**遷移**。

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

這樣就完成了！

您可以繼續執行設定精靈來更新您網路的標誌和其他設定，或是直接開始瀏覽 Ultimate Multisite 2.0 版的選單和全新介面。盡情探索吧！
