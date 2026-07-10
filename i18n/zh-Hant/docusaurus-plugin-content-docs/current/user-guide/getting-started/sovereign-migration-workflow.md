---
title: 主權遷移工作流程
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# 主權遷移工作流程 {#sovereign-migration-workflow}

Ultimate Multisite 1.2.0 版本增加了將標準子網站遷移到主權租戶基礎設施時的遷移驗證門。

## 開始之前 {#before-you-start}

請確認您已經準備好以下事項：

- 源站點的最新備份。
- Multi-Tenancy 插件已啟用。
- 目標租戶資料庫、檔案系統根目錄和網域都已準備就緒。
- 資料庫主機綁定與目標環境相符。
- 擁有執行網路 WP-CLI 指令的權限。

## 建議的工作流程 {#recommended-workflow}

1. 準備目標租戶的資料庫和檔案系統。
2. 註冊或更新租戶隔離設定。
3. 執行租戶遷移。
4. 建立或驗證租戶使用者。
5. 耗盡非同步遷移工作（Drain async migration jobs）。
6. 執行主權遷移驗證（Run sovereign migration verification）。
7. 使用 SSO 登入租戶。
8. 僅在驗證通過後才切換 DNS 或路由。

## 驗證門檻 (Verification gates) {#verification-gates}

驗證工作流會從幾個角度檢查遷移情況：

- 目標租戶的資料庫結構（schema）存在，並且可以由租戶資料庫寫入。
- 設定的資料庫主機具有有效的權限授予。
- 租戶使用者已存在，且與預期的主權安裝使用者數量相符。
- 非同步推送佇列（async push queue）可以成功耗盡。
- 對於主權租戶，不再需要舊的網路端資料路徑。

將驗證失敗視為上線前的阻擋因素。修復報告的資料庫、使用者、佇列或路由問題後，再次運行驗證，然後再讓租戶暴露給客戶。

## 首次生產環境訪問 {#first-production-visit}

驗證通過後，請在網站管理畫面中使用「訪問 (SSO)」功能進行第一次管理員訪問。這一步可以同時確認租戶的路由、SSO token 的處理方式、來源固定（origin pinning）以及租戶端的用戶配置，確保一切都在受控的步驟中完成。
