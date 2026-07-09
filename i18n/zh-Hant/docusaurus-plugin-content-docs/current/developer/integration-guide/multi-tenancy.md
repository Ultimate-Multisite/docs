---
title: 多租戶整合
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# 多租戶整合 {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 變更了主權租戶、遷移驗證與租戶生命週期自動化的多個整合接觸點。

## 租戶啟動流程 {#tenant-bootstrap-flow}

建立或修改租戶的整合應遵循以下順序：

1. 解析租戶註冊記錄與隔離模型。
2. 建立或驗證租戶資料庫寫入者。
3. 啟動租戶結構描述。
4. 佈建租戶使用者。
5. 註冊租戶路由與檔案系統路徑。
6. 在公開租戶之前執行遷移驗證。

不要假設主權租戶可以重複使用網路資料庫連線。請使用 addon 提供的租戶註冊與寫入者抽象層。

## SSO 與 REST hooks {#sso-and-rest-hooks}

無狀態租戶自動登入使用短效 token，並具備用途宣告、JTI 重播保護、到期上限與來源釘選。新增登入按鈕或遠端管理連結的整合，應透過支援的 SSO 流程產生租戶造訪，而不是直接建構租戶登入 URL。

主網路端 API 稽核事件與每日摘要可供主權租戶閘道使用。偵錯呼叫租戶生命週期 endpoint 的外部系統時，請使用這些記錄。

## 主權客戶操作 URL {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 會將主權租戶客戶操作路由回主網站，用於 account、checkout、billing、invoice、網站、範本切換與網域對應流程。呈現租戶端管理連結的整合，應將這些操作指向主網站客戶面板，並在使用者完成操作後應能導覽回租戶時，包含已驗證的返回目標。

針對跨網域管理連結，請使用核心 SSO 包裝器：

```php
$url = wu_with_sso($main_site_customer_url);
```

產生的 URL 仍可透過 `wu_sso_url` 篩選，該篩選器會接收 SSO URL、目前使用者、目標網站 ID 與重新導向內容脈絡。Add-ons 可以使用該篩選器附加提供者特定內容脈絡，或在保留 Ultimate Multisite 的 token 驗證同時取代代理 URL。

不要在主權租戶內重複保存 membership、invoice、billing-address、template 或網域管理狀態。請將租戶 Dashboard 視為啟動器，並將主網站客戶面板視為受管理操作的權威系統。

## 遷移驗證 {#migration-verification}

在遷移或生命週期整合變更租戶資料後，請執行驗證關卡：

- `wp tenant verify-no-legacy --site=<site-id>` 確認租戶不再依賴舊版網路端路徑。
- `wp tenant verify-sovereign-push --site=<site-id>` 確認主權推送工作可以處理並清空。

整合應將驗證失敗視為部署阻擋因素，並避免在失敗解決前將租戶標記為上線。

## 租戶刪除 {#tenant-deletion}

刪除流程應呼叫 addon 拆除路徑，以便清理租戶資料庫憑證。外部整合可在拆除成功後移除提供者資源，但不應在驗證或非同步推送工作仍在執行時刪除主機資料庫或資料夾。

## 已棄用的資料庫路由器 {#deprecated-database-router}

舊版 `Database_Router` 已由棄用 stub 取代。新的整合應透過目前的網站路由器與租戶註冊 APIs 解析租戶，而不是依賴舊的路由器類別。
