---
title: 設定參考
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# 設定參考

此頁面追蹤會影響 Ultimate Multisite 日常管理與近期行為變更的設定。

## 其他選項 {#other-options}

**其他選項**區域顯示於 **Ultimate Multisite > Settings > Login & Registration** 下方。

| 設定 | 描述 |
|---|---|
| **啟用 Jumper** | 在管理區域顯示 Jumper 快速導覽工具。使用它可直接跳至 Ultimate Multisite 畫面、網路物件及支援的管理目的地。若不想顯示此捷徑，請將其停用。 |

## 錯誤回報與遙測 {#error-reporting-and-telemetry}

先前的錯誤回報選擇加入設定已從設定頁面移除。匿名遙測已停用，且沒有可啟用它的 UI 切換開關。

如果你維護設定頁面的內部操作手冊或螢幕截圖，請移除對舊錯誤回報選擇加入欄位的引用，讓管理員不會尋找已不再存在的設定。

## 匯入／匯出設定 {#importexport-settings}

**匯入／匯出**設定分頁會說明其控制哪些設定，並直接連結至 **Ultimate Multisite > Site Export** 以取得網站與網路封存。使用設定分頁進行匯入／匯出設定，使用 **Tools > Export & Import** 進行單一網站匯出／匯入工作流程，並在需要完整 Network Export 封存時使用 Site Export 工具。

## Domain Seller HostAfrica 餘額警告 {#domain-seller-hostafrica-balance-warning}

當 Domain Seller addon 連線至 HostAfrica 時，網路管理員現在會在經銷商 Account 餘額過低、無法可靠處理網域註冊或續約時，看到可關閉的餘額不足警告。

請將此通知視為營運警告：在接受更多付費網域註冊之前，先為 HostAfrica 經銷商餘額儲值，然後返回 Domain Seller 設定或網域監控畫面，確認註冊與續約可以正常繼續。

## AI 供應商連接器設定 {#ai-provider-connector-settings}

AI 供應商連接器設定現在只公開支援的 OAuth Account 池：

| 供應商 | 設定流程 |
|---|---|
| **Anthropic Max** | 使用 OAuth 按鈕連接一個或多個 Anthropic Max Account。當沙盒化瀏覽器無法自動完成重新導向時，請使用手動 OAuth 備援方式。 |
| **OpenAI ChatGPT/Codex** | 透過相同的 OAuth 池工作流程連接 ChatGPT Account。連接 Account 後，連接器支援的操作可以使用 ChatGPT Codex 工具呼叫。 |
| **Google AI Pro** | 透過 OAuth 連接 Google AI Pro Account，若 Account 清單未立即更新，請重新整理連接器。 |

Cursor Pro 已不再是支援的供應商。請移除提及 Cursor Pro 設定欄位或連接器路徑的舊內部螢幕截圖、操作手冊或入門步驟。

新增或移除供應商 Account 時，請輸入要重新整理或刪除之 Account 的有效電子郵件地址，並在測試連接器支援的操作前儲存供應商設定。
