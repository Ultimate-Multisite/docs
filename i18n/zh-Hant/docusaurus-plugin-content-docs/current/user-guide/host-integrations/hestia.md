---
title: Hestia 控制面板整合
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia 控制面板整合

本指南說明如何設定 Ultimate Multisite 的 Hestia 整合功能，讓網路中對應的網域能自動在 Hestia 中新增（或移除）為 Web Domain Alias。

- Hestia CLI 指令參考：v-add-web-domain-alias / v-delete-web-domain-alias
- 官方 REST API 文件：https://hestiacp.com/docs/server-administration/rest-api.html

## 功能說明
- 當網域在 Ultimate Multisite 中完成對應時，整合功能會呼叫 Hestia API 執行：
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- 當網域對應被移除時，會執行：
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- 根據你在 Domain Mapping 設定中的「自動建立 www 子網域」選項，可選擇是否一併新增或移除 `www.` 別名。

## 前置需求
- 已建立一個指向你 WordPress 安裝位置的 Hestia Web Domain。整合功能會將別名附加到這個基礎網域上。
- 已啟用 Hestia API 存取權限。你可以使用密碼或 API hash/token 進行驗證。

請參閱 Hestia 的 REST API 文件，了解如何啟用 API 存取及驗證方式：
https://hestiacp.com/docs/server-administration/rest-api.html

## 設定方式（Wizard → Integrations → Hestia）
請填入以下資訊：

- `WU_HESTIA_API_URL`（必填）
  - API 基礎端點，通常為 `https://your-hestia-host:8083/api/`。
- `WU_HESTIA_API_USER`（必填）
  - 用於執行 API 指令的 Hestia 使用者（通常是 `admin`）。
- `WU_HESTIA_API_PASSWORD` 或 `WU_HESTIA_API_HASH`（至少擇一）
  - 選擇一種驗證方式：密碼或 API hash/token。
- `WU_HESTIA_ACCOUNT`（必填）
  - Hestia 中 Web Domain 的擁有者帳號，這是 CLI 指令的第一個參數。
- `WU_HESTIA_WEB_DOMAIN`（必填）
  - 用來服務你 WordPress 的現有 Hestia Web Domain（別名會附加到這裡）。
- `WU_HESTIA_RESTART`（選填；預設為 `yes`）
  - 是否在別名變更後重新啟動或重新載入服務。

你可以讓精靈自動將這些常數寫入 `wp-config.php`，或手動定義。

## 驗證設定
- 在精靈的「Testing」步驟中，外掛會透過 API 呼叫 `v-list-web-domains <WU_HESTIA_ACCOUNT> json`。若回應成功，表示連線和驗證都正常。
- 對應網域後，請在 Hestia 中檢查：Web > 基礎網域 > Aliases，你應該會看到新增的別名。

## 注意事項與小技巧
- 請確保 `WU_HESTIA_WEB_DOMAIN` 已存在，且由 `WU_HESTIA_ACCOUNT` 擁有。
- 如果需要 SSL，請在 Hestia 中管理憑證。此整合功能目前只處理別名。
- 外掛也可能根據你在 Domain Mapping 中的「www 子網域」設定，一併新增或移除 `www.<domain>`。

## API 呼叫範例（cURL）
以下是概念性範例（請依你的環境調整）。確切參數請參閱官方文件。

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

若要刪除別名，請使用 `cmd=v-delete-web-domain-alias` 並搭配相同的參數。

## 疑難排解
- API 回傳 HTTP 錯誤：請確認 `WU_HESTIA_API_URL` 可連線，且網址包含 `/api`。
- 驗證錯誤：請確認 `WU_HESTIA_API_USER` 以及 `WU_HESTIA_API_PASSWORD` 或 `WU_HESTIA_API_HASH` 是否正確。
- 記錄檔中顯示「Missing account/base domain」：請確保 `WU_HESTIA_ACCOUNT` 和 `WU_HESTIA_WEB_DOMAIN` 已設定，且在 Hestia 中是有效的。

## 參考資料
- Hestia REST API：https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI 參考（Aliases）：https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
