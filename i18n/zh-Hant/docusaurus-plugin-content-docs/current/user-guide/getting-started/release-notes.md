---
title: 發行說明
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# 發行說明 {#release-notes}

## 版本 2.13.0 — 發行於 2026-06-05 {#version-2130--released-on-2026-06-05}

- 新增：為客戶 Account、checkout、billing、網站、發票、template 切換與網域對應流程新增 sovereign-tenant 支援，讓租戶網路可將客戶導回主網站以進行受管理的操作。
- 新增：為週期性 membership 新增續約憑證檢查，讓 gateway 可在缺少已儲存的 billing agreement、subscription 或 vault token 時停用自動續約。
- 新增：為待處理的網站建立新增 HMAC 驗證的 loopback 發佈，以提升在背景工作延遲的主機上從 checkout 到網站佈建的可靠性。
- 新增：為 SSO URL、checkout 表單基礎網域，以及自動網域記錄建立新增開發者擴充點。
- 修正：SSO 在對應網域、匿名 broker 造訪、登出，以及跨 plugin 相依性衝突中更加可靠。
- 修正：待處理的網站建立現在會從過期的發佈旗標復原，並避免讓客戶卡在網站建立畫面。
- 修正：不再為共享的 checkout 表單基礎網域建立網域記錄，且在沒有啟用整合時會略過未使用的主機供應商背景工作。
- 修正：checkout、billing 地址、密碼重設、電子郵件驗證、template 切換、導覽教學，以及客戶 Dashboard 的邊界情況不再阻擋正常客戶流程。
- 修正：廣播電子郵件現在會保持收件者私密，同時在收件者清單或郵件傳輸失敗時避免 SMTP/plugin 致命錯誤。
- 修正：membership 續約、到期顯示與付款收取的邊界情況現在可避免立即到期、當機或遺漏必要付款。
- 改進：WordPress 相容性已測試至 7.0，正式環境 Vue 資產已從 npm 來源重建，且 Cypress 端對端涵蓋範圍現在會測試更多 checkout、setup、SSO 與 gateway 流程。

## 版本 2.12.0 — 發行於 2026-05-15 {#version-2120--released-on-2026-05-15}

- 新增：新增 Hostinger (hPanel) 作為支援的主機供應商，並具備網域對應整合
- 新增：Site Exporter 現在可處理網路匯入套件，以簡化整個網路的網站還原
- 修正：BCC 廣播電子郵件現在使用 undisclosed-recipients 標頭，以防止暴露收件者地址
- 修正：使用非日期值儲存時，membership 到期日期不再損毀
- 修正：Stripe membership 更新現在會正確清除折扣，而不呼叫已棄用的 deleteDiscount API
- 修正：網域對應網站上的 SSO 重新導向現在會設上上限，以防止無限重新導向迴圈
- 修正：設定精靈圖片選擇器的選取現在會正確更新底層資料模型
- 修正：Site Exporter CLI 現在會保留正確的預設網路網站選取
- 改進：從 plugin 套件移除隨附的 wp-cli，減少 plugin 大小

## 版本 2.11.0 — 發行於 2026-05-11 {#version-2110--released-on-2026-05-11}

- 新增：網站匯出現在會打包一個可自行啟動的 `index.php`，因此 ZIP 可安裝在全新的主機上，而不需要另外安裝 plugin。
- 新增：網路匯出讓管理員可從 Site Export 管理頁面將所有子網站匯出到單一封存檔。
- 新增：Allow Site Templates 方案切換現在會透過後援鏈強制執行，正確依方案限制約束 template 可用性。
- 新增：checkout 表單編輯器會在新增產品但未設定必要欄位時發出警告。
- 新增：匯入／匯出設定分頁現在清楚說明其範圍，並直接連結到 Site Export 工具。

## 版本 2.10.0 — 發行於 2026-05-05 {#version-2100--released-on-2026-05-05}

- 新增：PayPal 引導式設定精靈，用於手動輸入憑證，並透過 OAuth 旗標閘門提供無縫 gateway 設定。
- 新增：template 切換客戶面板重新設計，包含目前 template 卡片、持續顯示的格狀檢視，以及 **重設目前 template** 按鈕。
- 修正：template 切換在 AJAX 失敗時不再使 UI 停住。
- 修正：template 切換權限狀態已防止未授權存取。
- 修正：網站覆寫輸入在儲存前會先驗證。
- 修正：現在當地址為空時會顯示 billing 地址提示。
- 修正：PHP 8.1 null-to-string 棄用通知已解決。
- 修正：Currents 在 init hook 前延遲載入，以防止時序問題。
- 修正：所有登入流程都會遵循已篩選的 SSO 路徑。
- 修正：空白網站識別選項在儲存時會被保留。

## 版本 2.9.0 — 發行於 2026-04-30 {#version-290--released-on-2026-04-30}

- 新增：在 **工具 > 匯出與匯入** 下新增單一網站匯出與匯入。
- 修正：匯出 ZIP 檔案現在透過已驗證的下載 endpoint 提供。
- 修正：已修正待處理匯出／匯入查詢中的 SQL injection 風險與查詢問題。
- 修正：當管理員手動驗證客戶電子郵件時，待處理網站未發佈的問題。
- 修正：當缺少 membership 時會清除孤立的 pending_site 記錄。
- 修正：設定導覽內距與搜尋錨點導覽已修正。
- 修正：待處理網站現在會優先顯示在所有網站檢視中。
- 修正：已新增螢幕截圖供應商 (mShots) User-Agent 標頭，以防止 403 錯誤。
- 修正：匯入 cron 排程循環相依性已解決。
- 修正：導覽教學 ID 在使用者設定鍵中已正規化為底線。
- 改進：現在使用 ZipArchive 取代 Alchemy/Zippy，以提升相容性。

## 版本 2.8.0 — 發行於 2026-04-29 {#version-280--released-on-2026-04-29}

- 新增：在 Other Options 設定 UI 新增 Enable Jumper 切換開關。
- 新增：在結帳表單清單表格新增狀態欄。
- 新增：用於自訂 MU plugin sunrise 擴充功能的 Addon sunrise 檔案載入器。
- 改進：從設定頁面移除錯誤回報選擇加入設定。
- 修正：感謝頁網站卡片 — 圖片現在會受限，連結樣式也正確。
- 修正：螢幕截圖提供者已從 thum.io 切換至 WordPress.com mShots。
- 修正：Enable Registration 與 Default Role 現在會在全新安裝時設定正確預設值。
- 修正：當網域包含連接埠時，`get_site_url()` 不再回傳空值。
- 修正：當 `copy_media` 設定為空時，複製媒體檔案現在會正確複製。
- 修正：在 network-activate sitemeta 寫入後，物件快取會正確失效。
- 修正：針對 3 段式網域，DNS 驗證時自訂網域會自動提升為主要網域。
- 修正：過期付款被清理時，待處理會員資格會被取消。
- 修正：內嵌登入提示關閉後，密碼強度檢查器會重新綁定。
- 修正：當網站已建立時，感謝頁上的無限頁面重新載入已停止。
- 修正：WP 核心註冊選項會在 plugin 啟用與設定儲存時同步。
- 修正：在 `calculate_expiration` 中新增空值到期防護，以相容 PHP 8.4。
- 修正：當客戶已有有效會員資格時，會阻止重複註冊。
- 修正：在結帳中為 `date_expiration` 新增空值檢查。
- 修正：網站佈建已強化 — 限制、會員資格推斷、網域提升。
- 修正：預先安裝檢查狀態標籤已修正為檢查失敗時顯示 NOT Activated。
- 修正：電子郵件驗證 URL 會使用結帳網域。
- 修正：當沒有密碼欄位時，結帳後會自動登入。
- 修正：免費會員資格不再到期 — 視為終身。
- 修正：電子郵件驗證閘門會在客戶驗證電子郵件前暫停網站發布。
- 修正：SES v2 API 端點基礎路徑與身分路由已修正。
- 修正：`wu_inline_login_error` hook 會在提交前 catch 區塊中發出。
