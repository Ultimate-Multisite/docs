---
title: 網站匯出
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# 網站匯出

**網站匯出 (Site Export)** 管理頁面讓網路管理員能夠將單一網站或整個網路打包成可下載的壓縮檔案 (archive)，用於遷移、備份或交接工作。

## 匯出單一網站 {#exporting-one-site}

前往 **Ultimate Multisite > Site Export**，然後選擇 **Generate new Site Export**。選擇您要匯出的子站點，然後決定是否要在壓縮檔案中包含上傳內容 (uploads)、外掛程式 (plugins) 和主題 (themes)。

匯出完成後，請從 **Existing Exports** 清單下載 ZIP 檔案。現在匯出的 ZIP 檔案包含自啟動的 `index.php` 和 `readme.txt`，因此您可以將此壓縮檔案上傳到全新的主機，無需先安裝單獨的匯入外掛程式即可啟動。

## 匯出整個網路 {#exporting-the-whole-network}

當您需要一個包含網路中所有子站點的單一壓縮檔案時，請使用 Site Export 頁面的 **Network Export** 功能。這在主機遷移、災難恢復演練或分階段重建時特別有用，因為這些情況下每個子站點都需要一起移動。

由於網路匯出的檔案可能比單一網站匯出大很多，建議您在流量較低的時段執行此操作，並確認目標儲存空間有足夠的可用空間來容納上傳內容、外掛程式、主題和生成的 ZIP 檔案。

### 網路匯入套件 (Network Import Bundles) {#network-import-bundles}

從 Ultimate Multisite 2.12.0 版本開始，Site Exporter 可以生成**網路匯入套件 (network import bundles)** — 這是專門設計用於簡化整個網路網站恢復的特殊壓縮檔案。網路匯入套件包含所有必要的檔案和中繼資料，用於將多個網站恢復到新的網路安裝環境。

#### 生成網路匯入套件 {#generating-a-network-import-bundle}

1. 前往 **Ultimate Multisite > Site Export**
2. 點擊 **Generate new Network Export**
3. 將匯出類型選擇為 **Network Import Bundle**
4. 選擇是否包含上傳內容、外掛程式和主題
5. 點擊 **Generate**
6. 從 **Existing Exports** 清單下載套件 ZIP 檔案

#### 從網路匯入套件恢復 {#restoring-from-a-network-import-bundle}

若要從網路匯入套件恢復網站：

1. 在目標主機上安裝 Ultimate Multisite
2. 完成多站點設定嚮導 (multisite setup wizard)
3. 在新的網路環境中，前往 **Ultimate Multisite > Site Export**
4. 點擊 **Import Network Bundle**
5. 上傳網路匯入套件 ZIP 檔案
6. 遵循螢幕上的匯入指示
7. 匯入過程將會恢復所有網站、其內容和設定。

網路匯入套件會保留以下內容：
- 網站內容（文章、頁面、自訂文章類型）
- 網站設定和選項
- 使用者角色和權限
- 外掛程式和主題（如果包含在套件中）
- 媒體上傳內容（如果包含在套件中）
- 自訂資料庫表格和資料

## 安裝自啟動的匯出 ZIP {#installing-a-self-booting-export-zip}

要在全新的主機上恢復自啟動的 ZIP 檔案：

1. 將匯出的 ZIP 內容上傳到目標網站根目錄 (web root)。
2. 在瀏覽器中開啟上傳的 `index.php`。
3. 遵循套件匯出提供的螢幕安裝指示。
4. 在移除臨時檔案之前，請查閱套件中的 `readme.txt` 以了解匯出特定的注意事項。

如需了解外掛程式特定的安裝和匯入詳細資料，請參閱 [Site Exporter 外掛程式文件](/addons/site-exporter)。

對於 Ultimate Multisite 2.9.0 版本新增的單一網站工具，請參閱 [Export & Import](/user-guide/administration/export-import)。
