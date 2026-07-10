---
title: 主權遷移驗證
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# 主權遷移驗證 {#sovereign-migration-verification}

Ultimate Multisite：多租戶系統 1.2.0 內建了用於主權租戶遷移的 WP-CLI 驗證指令。當租戶遷移、SSO 訪問或獨立安裝沒有按預期運作時，請使用這些指令進行檢查。

## 執行命令 {#commands-to-run}

從網路上的 WordPress 安裝運行驗證：

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

請使用您正在遷移的租戶（tenant）的網站 ID。第一個指令會檢查該租戶是否還依賴舊的網路端資料。第二個指令則會驗證主權推送工作（sovereign push jobs）是否可以處理和排空。

## 常見錯誤 {#common-failures}

### 資料庫權限與主機不匹配 {#database-grants-do-not-match-the-host}

如果驗證報告顯示寫入使用者失敗，請檢查您配置的資料庫主機。`localhost`、`127.0.0.1` 和容器服務名稱是不同的 MySQL 權限主機。請更新租戶主機綁定或資料庫權限設定後再重新執行驗證。

### Bedrock 或本地安裝無法連線 {#bedrock-or-local-installs-cannot-connect}

Bedrock 和本地套接字安裝可能會將資料庫報告為 `localhost`，而運行時卻透過標準化地址連線。版本 1.2.0 會對同一台機器上的主機字串進行標準化處理，但自定義的主機覆寫仍可能與資料庫權限產生衝突。

### 非同步推送佇列沒有清空 {#async-push-queue-does-not-drain}

如果 `verify-sovereign-push` 沒有完成，請檢查 Action Scheduler 或您配置的非同步執行器（async runner）。只有在確認這些任務可以安全重試或丟棄之後，才能清除失敗的任務。

### 租戶用戶數不正確 {#tenant-user-count-is-wrong}

遷移應該為主租戶配置使用者。如果預期的安裝使用者遺漏，請在重試 SSO 之前重新執行使用者配置步驟。

### SSO 訪問被拒絕 {#sso-visit-is-rejected}

無狀態租戶自動登入要求租戶網域、來源 PIN、令牌目的（token purpose）、nonce 和過期時間必須完全匹配。請確認租戶 URL 是否正確，並且在生成 SSO 訪問後不久嘗試登入。

## 何時需要重試 {#when-to-retry}

在每次基礎設施變更後，請重新執行驗證。在所有驗證檢查都通過之前，請勿切換生產流量、刪除來源資料或移除遷移憑證。
