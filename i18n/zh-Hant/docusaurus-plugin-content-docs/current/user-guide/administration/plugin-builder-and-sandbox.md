---
title: 外掛建構與沙盒
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder 與 Sandbox

Gratis AI Agent v1.5.0 引入了 **Plugin Builder & Sandbox System**，讓 AI 助理能夠在一個安全、隔離的 sandbox 環境中，為您的網路生成、啟用和管理 WordPress plugins。

## 概述 {#overview}

Plugin Builder 讓 AI 助理能夠根據自然語言的請求，撰寫客製化的 WordPress plugins。生成的 plugins 會先在 sandbox 層級進行驗證、儲存和啟用，才不會影響到實際網站的運作。

使用情境包括：

- 在沒有開發人員介入的情況下，生成輕量級的工具 plugins。
- 為需要 WordPress hooks 或 custom post types 的功能進行原型設計。
- 為批次操作創建短期自動化腳本。

## 透過 AI 生成 Plugin {#generating-a-plugin-via-ai}

若要生成一個 plugin，請開啟 Gratis AI Agent 的聊天介面，並描述您的需求。例如：

> "請建立一個在 dashboard 上顯示客製化管理通知的 plugin。"

AI 將會：

1. 使用結構化的程式碼生成，產出 plugin 的 PHP 程式碼。
2. 驗證輸出，檢查語法錯誤和不安全的模式。
3. 將生成的 plugin 儲存到 sandbox 儲存庫中。
4. 回傳確認訊息，並附上 plugin 的 slug 和一個 **Activate in Sandbox** 按鈕。

您可以在啟用之前，透過在同一聊天串中追問，來完善這個結果。

## Sandbox 啟用 {#sandbox-activation}

在 sandbox 中啟用一個生成的 plugin，與在實際網路中啟用它是不同的。sandbox 的功能是：

- 在一個隔離的 WordPress 環境 (wp-env) 中運行 plugin。
- 捕捉任何 PHP 錯誤、警告或 hook 衝突。
- 將啟用結果回報到聊天介面。

若要將 plugin 在 sandbox 中啟用，請點擊 AI 聊天回覆中的 **Activate in Sandbox** 按鈕，或使用斜線指令：

```
/activate-plugin <plugin-slug>
```

系統會顯示一個狀態訊息，確認啟用是否成功或失敗。如果失敗，錯誤日誌會顯示在聊天串中。

## 管理生成的 Plugins {#managing-generated-plugins}

生成的 plugins 會列在 **Gratis AI Agent → Plugin Builder → Manage Plugins**。從這個畫面，您可以：

| Action | Description |
|---|---|
| **View source** | 檢視完整的 plugin PHP 程式碼。 |
| **Re-activate in sandbox** | 重新執行 sandbox 啟用檢查。 |
| **Install on network** | 將 plugin 部署到實際網路（需要手動確認）。 |
| **Update** | 透過 AI 提供新版本，取代現有的程式碼。 |
| **Delete** | 從 sandbox 儲存庫中移除 plugin。會先將其從所有網站停用。 |

:::warning
**Install on network** 會將生成的 plugin 部署到您的實際 WordPress multisite。在進行操作前，請務必審閱 plugin 的程式碼。Gratis AI Agent 在完成實際安裝前會提示您確認。
:::

## 將生成的 Plugin 安裝到網路 {#installing-a-generated-plugin-on-the-network}

當您對一個 sandbox 內的 plugin 感到滿意時，可以將其安裝到實際網路：

1. 前往 **Gratis AI Agent → Plugin Builder → Manage Plugins**。
2. 點擊您想要部署的 plugin 旁邊的 **Install on Network**。
3. 確認對話框。plugin 會安裝到 `wp-content/plugins/`，並在網路層級啟用。

或者，您也可以在聊天介面使用斜線指令：

```
/install-plugin <plugin-slug>
```

## Plugin 更新 {#plugin-updates}

若要更新一個生成的 plugin，請在新的對話中向 AI 助理描述您需要的變更：

> "請將 dashboard-notice plugin 更新，使其只對管理員顯示通知。"

AI 會生成一個新版本，它會出現在 sandbox 中，與當前版本並存。您需要審閱差異（diff），並確認後，更新才會生效。

## HookScanner 整合 {#hookscanner-integration}

Plugin Builder 使用整合的 **HookScanner** 來分析每個生成 plugin 所註冊的 hooks 和 filters。HookScanner 的輸出會顯示在聊天回覆中，內容包括：

- 註冊的 Action hooks (`add_action` 呼叫)。
- 註冊的 Filter hooks (`add_filter` 呼叫)。
- 在 plugin 依賴項中找到的任何 hooks（會跳過 `vendor/` 和 `node_modules/` 目錄）。

這有助於您在啟用 plugin 之前，了解它的行為模式。

## 安全性考量 {#security-considerations}

- 生成的 plugins 與手動安裝的 plugins 是分開儲存的，除非您明確地將它們安裝到網路，否則無法透過標準的 WordPress plugin 管理畫面存取。
- sandbox 使用路徑驗證來防止在寫入 plugin 檔案時發生目錄遍歷 (directory traversal)。
- 包含危險函數呼叫（例如 `eval`、`exec`、`system`）的 plugins 在驗證期間會被標記，並且不會被啟用。
