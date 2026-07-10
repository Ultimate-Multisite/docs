---
title: 增值稅變更日誌
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# 增值稅 (VAT) 更新日誌 {#vat-changelog}

Version 1.0.7 - Released on 2026-02-03

* Fix: 由於 VIES SOAP 服務的 MS_MAX_CONCURRENT_REQ 錯誤，德國 (DE) 的增值稅號碼驗證失敗。已從舊版 SOAP API 切換到官方的 EU VIES REST API，以實現更可靠的驗證。
* Fix: 當 VIES 服務暫時無法使用時，現在會接受增值稅號碼，而不是錯誤地拒絕。系統會建立日誌記錄供日後審查。
* Fix: 增值稅/稅號欄位現在對所有國家都可見，而不僅限於歐盟成員國。非歐盟的稅號（例如瑞士的 CHE 號碼）會被儲存，用於發票顯示，無需進行 VIES 驗證。
* Fix: 由於陣列查找邏輯錯誤，希臘 (GR)、摩納哥 (MC) 和馬恩島 (IM) 的增值稅前綴查找功能出現了故障。
* Improvement: 移除了不必要的 wp-cli-bundle 開發依賴，該依賴在與 Site Exporter 外掛一起使用時可能會導致致命錯誤。
* Improvement: 新增了完整的單元測試套件（53 個測試）。

Version 1.0.6 - Released on 2026-01-25

* Fix: 國內 B2B 交易現在會正確收取增值稅。根據歐盟增值稅規則，反向徵稅僅適用於跨境 B2B 交易，而非客戶國家與公司國家一致的情況。

Version 1.0.5 - Released on 2026-01-22

* Fix: 外掛無法載入或無法正常運作。
* Change: 將增值稅率資料來源從 euvatrates.com 切換到 ibericode/vat-rates 儲存庫，以獲得更可靠且維護更活躍的資料。
* Fix: 修正了 super_reduced_rates 選項值的拼寫錯誤。
* Improvement: 新增了國家代碼處理的空值檢查，以防止錯誤發生。
* Change: 移除了捆綁的翻譯檔案，改為透過 Traduttore 自動更新。

Version: 1.0.3 - Released on 2025-09-28

* 將前綴重新命名為 ultimate-multisite；更新文字域；版本號提升。

Version 1.0.0-beta.4 - 2021-09-24

* Added: filter wp_ultimo_skip_network_active_check for mu-plugins based setups;

Version 1.0.0 - 05/08/2021 - 初次發布
