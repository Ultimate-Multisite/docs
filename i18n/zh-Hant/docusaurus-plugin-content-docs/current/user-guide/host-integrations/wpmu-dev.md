---
title: WPMU DEV 整合
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV 整合

## 概覽
WPMU DEV 是一個完整的 WordPress 平台，提供 WordPress 網站的主機、外掛和各項服務。這項整合功能可在 Ultimate Multisite 和 WPMU DEV 主機之間，自動同步網域並管理 SSL 憑證。

## 功能特色
- 自動網域同步
- SSL 憑證管理
- 延長 SSL 憑證驗證嘗試次數

## 需求條件
如果您的網站託管於 WPMU DEV，整合功能會自動偵測並使用內建的 API，無需額外設定。

整合功能會檢查 `WPMUDEV_HOSTING_SITE_ID` 常數是否存在，這個常數在 WPMU DEV 主機環境中會自動定義。

## 設定說明

### 1. 確認 WPMU DEV 主機

如果您的網站託管於 WPMU DEV，必要的常數應該已經定義好了。請確認：

1. 您的環境中已定義 `WPMUDEV_HOSTING_SITE_ID` 常數
2. 您擁有有效的 WPMU DEV 會員資格，並可存取 API

### 2. 啟用整合功能

1. 在 WordPress 管理後台，前往 Ultimate Multisite > Settings
2. 點選「Domain Mapping」分頁
3. 向下捲動至「Host Integrations」
4. 啟用 WPMU DEV 整合
5. 點選「Save Changes」

## 運作方式

### 網域同步

當網域在 Ultimate Multisite 中完成對應時：

1. 整合功能會透過 WPMU DEV API 將網域新增至您的主機帳戶
2. 同時也會自動新增該網域的 www 版本
3. WPMU DEV 會處理網域設定和 SSL 憑證核發

### SSL 憑證管理

由於 WPMU DEV 主機核發和安裝 SSL 憑證可能需要一些時間，整合功能已設定為增加 SSL 憑證驗證的嘗試次數。預設會嘗試驗證 SSL 憑證最多 10 次，而標準設定為 5 次。

## 重要注意事項

### 網域移除

目前 WPMU DEV API 沒有提供移除網域的功能。當您在 Ultimate Multisite 中移除網域對應時，該網域仍會保留在您的 WPMU DEV 主機帳戶中。如有需要，您必須手動從 WPMU DEV 主機控制台中移除。

### API 驗證

整合功能使用儲存在 WordPress 資料庫中的 WPMU DEV API 金鑰，該金鑰位於 `wpmudev_apikey` 選項中。當您將網站連結至 WPMU DEV 時，這項設定會自動完成。

## 疑難排解

### API 連線問題
- 確認您的網站已正確連結至 WPMU DEV
- 檢查 WordPress 資料庫中是否已設定 `wpmudev_apikey` 選項
- 確保您的 WPMU DEV 會員資格仍有效

### SSL 憑證問題
- WPMU DEV 核發 SSL 憑證可能需要一些時間（通常 5-15 分鐘）
- 整合功能已設定最多檢查 SSL 憑證 10 次
- 如果嘗試多次後 SSL 憑證仍未核發，請聯繫 WPMU DEV 支援團隊

### 網域未新增
- 檢查 Ultimate Multisite 記錄中是否有任何錯誤訊息
- 確認該網域尚未新增至 WPMU DEV
- 確保您的 WPMU DEV 主機方案支援您要新增的網域數量
