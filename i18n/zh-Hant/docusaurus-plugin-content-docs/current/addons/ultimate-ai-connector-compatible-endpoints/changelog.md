---
title: Ultimate AI Connector 兼容端點更新日誌
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector 兼容端點更新日誌 {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## Version 2.0.0 — 發布日期 2026-04-24 {#version-200--released-on-2026-04-24}

* 新增：多供應商支援 — 可設定多個 AI 端點，並自動在供應商之間路由請求和備援。
* 修復：多供應商 SDK 整合，修正了每個供應商的正確 ID、註冊 URL 和 HTTP 過濾範圍。
* 修復：新增的供應商卡片現在添加時會自動展開；並在外掛程式更新時進行腳本快取清除 (cache busting)。
* 修復：為 `eval()` 提供了動態供應商類別命名空間，並為新添加的供應商實現了自動展開功能。
* 修復：為確保 WordPress 6.9+ 的相容性，改用了穩定的 Card/CardBody/CardHeader/CardDivider 組件（不再是實驗性功能）。
* 修復：將未定義的 DragHandle 替換為 Unicode 握把圖標，用於供應商的拖曳重新排序功能。
* 修復：移除了在每次頁面載入時觸發的阻塞式 HTTP 請求。
* 改進：GitHub Actions 工作流程已升級至 Node.js 24。

## Version 1.0.0 — 初版發布 {#version-100--initial-release}
