---
title: 網站匯出器變更日誌
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# 網站匯出工具更新日誌

Version: 1.0.6 - 發布於 2026-05-11
* 新增：網站匯出現在會捆綁一個自啟動的 index.php，這樣即使在沒有單獨安裝 plugin 的全新主機上，也可以直接安裝 ZIP 檔案
* 新增：網路匯出功能讓管理員可以在 Site Export 的管理頁面，將所有子站點匯出到單一的壓縮檔中

Version: 1.0.5 - 發布於 2026-05-05
* 修復：在 WP_CLI polyfill 存根中加入了 __callStatic，以處理像 get_config 這樣未模擬的方法，從而防止測試啟動失敗

Version: 1.0.4 - 發布於 2025-11-25

* 修復了與 Ultimate Multisite 2.4 的相容性問題。

Version: 1.0.2 - 發布於 2025-09-28

* 將前綴名稱改為 ultimate-multisite；更新了文字域；並提升了版本號。

### Version 1.0.1 - 發布於 2023-08-09 {#version-101---released-on-2023-08-09}

* 改進：現在能確保取得匯入檔案的正確路徑。
* 修復：停用了物件快取 (object cache)，以防止匯入期間發生錯誤。
* 修復：修復了匯入器 plugin 下載連結無法運作的問題。

### Version 1.0.0 - 發布於 2022-12-23 {#version-100---released-on-2022-12-23}

* 修復：匯出表單的彈出視窗無法載入；
* 修復：匯出頁面上的 Javascript 檔案無法載入；
* 內部：新的建置流程；

### Version 1.0.0-beta.4 - 發布於 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* 內部：新增了 hooks 和 filters generator；
* 內部：新增了 WP Ultimo stubs，提升開發人員的使用體驗；
