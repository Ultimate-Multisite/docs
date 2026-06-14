---
title: Hostinger 多租戶
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger 多租戶

Ultimate Multisite 1.2.0 新增了 Hostinger 的多租戶功能，讓託管的網域可以在現有的 Hostinger 網域映射整合的同時，參與主權租戶的配置。

當您透過 Hostinger hPanel 管理租戶網域和隔離的租戶基礎設施時，請使用此功能。

## 設定注意事項

1. 在 **Ultimate Multisite > Settings > Host Integrations** 中設定核心 Hostinger 整合。
2. 確認 Hostinger API token 具備管理目標網域或子網域的權限。
3. 啟用多租戶 addon（附加元件）。
4. 在發布租戶之前，先設定租戶隔離策略。
5. 在將生產流量導向租戶之前，請運行遷移驗證工作流程。

主機商（Hostinger）功能使用共享的 Hostinger 連線來執行伺服器端操作。DNS 仍然必須指向正確的 Hostinger 帳戶，並且 hPanel 的帳戶限制依然適用。

## 特定功能的變更

- 主權租戶可以利用對主機有感知（host-aware）的網域操作來建立。
- 在授予驗證之前，同一機器上的資料庫主機字串會進行標準化處理。
- Hostinger 管理的租戶應使用 hPanel 中顯示的資料庫主機值，除非 WordPress 運行時需要本地覆蓋。
- SSO（單一登入）訪問依賴於租戶網域解析到由 Hostinger 主機託管的租戶。

## 疑難排解 Hostinger 租戶問題

如果租戶安裝失敗，請確認網域是否已經綁定到 Hostinger 帳號。
如果資料庫驗證失敗，請將租戶的資料庫使用者名稱、資料庫名稱和主機綁定資訊與 hPanel 中的設定進行比對。
如果 **Visit (SSO)** 失敗，請確認租戶網域的 DNS 和 SSL 是否已啟用。
如果拆除（teardown）後仍有主機資源殘留，在確認備份完畢後，請從 hPanel 中移除任何剩餘的資料庫、使用者或資料夾。
