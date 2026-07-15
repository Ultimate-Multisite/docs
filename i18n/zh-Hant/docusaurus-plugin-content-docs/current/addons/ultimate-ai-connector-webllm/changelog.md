---
title: Ultimate AI Connector for WebLLM 更新日誌
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM 更新日誌

## Version 1.1.0 — 發布日期 2026-04-09 {#version-110--released-on-2026-04-09}

* **新增：** 浮動聊天小工具，並配備管理欄狀態指示器 — 任何登入的使用者都可以直接從前端觸發瀏覽器端的 LLM 提示。
* **新增：** SharedWorker 運行時 — 現在 MLC 引擎會在 SharedWorker 中運行，這樣多個分頁就可以共用一個 GPU 會話，而不是互相爭搶。
* **新增：** apiFetch 中間件攔截器 — 匹配 AI Client SDK 模式的 WordPress REST 請求會透明地路由到本地 WebLLM 代理，無需進行本地迴路 HTTP 往返。
* **新增：** 在 Connector 面板中新增小工具設定介面，用於切換聊天小工具並配置自動提示行為。
* **修復：** 強制使用 IndexedDB 快取後端，確保模型權重下載能夠存活於 HuggingFace xet CDN 重定向，避免破壞預設的 Cache API 路徑。
* **修復：** 跳過嵌入模型（embedding models）的 context_window KV-cache 覆寫，因為它們沒有解碼器（decoder），且該覆寫導致了運行時錯誤。
* **修復：** 在 worker 分頁載入之前，先在 /webllm/v1/models 宣告冷啟動候選模型，這樣 SDK 消費者就能立即看到模型資訊。
* **修復：** 將 WebLLM 掛載到 wpai_preferred_text_models 過濾器，這樣 AI 實驗功能（AI Experiments feature）在配置了模型後，會路由到瀏覽器引擎。
* **改進：** 透過端到端測試發現並修復了快取清除（Cache-busting）、內容正規化（content normalisation）和硬體參考（hardware-reference）相關的錯誤。

## Version 1.0.0 — 初次發布 {#version-100--initial-release}
