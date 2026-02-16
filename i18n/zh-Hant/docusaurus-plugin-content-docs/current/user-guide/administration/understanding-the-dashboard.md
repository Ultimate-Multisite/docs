---
title: 了解儀表板
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# 瞭解 Ultimate Multisite 控制台

在深入探討 Ultimate Multisite 的進階設定選項和操作功能之前，讓我們先來看看控制台的介面。

和許多 WordPress 外掛一樣，Ultimate Multisite 會在網站網路層級建立一個名為 **Ultimate Multisite** 的選單項目，下方還有多個子選單。

## 網站網路控制台小工具

Ultimate Multisite 會在網站網路層級的控制台中加入幾個實用的小工具。你可以透過 **我的網站 → 網站網路管理 → 控制台** 找到這個控制台。這些小工具的設計目的是讓網站網路管理員能夠輕鬆存取資訊並執行常見操作。

![包含 Ultimate Multisite 小工具的網站網路控制台](/img/admin/network-dashboard-full.png)

### 起步指南

![起步指南小工具](/img/admin/network-dashboard-first-steps.png)

這個小工具會在 Ultimate Multisite 剛安裝完成時出現，提醒網站網路管理員完成其他設定工作，例如設定付款方式和建立測試帳號。

### 摘要

![摘要小工具](/img/admin/network-dashboard-summary.png)

摘要小工具會顯示當天的註冊數量及其營收。MRR（每月經常性收入）則是根據有付費會員方案的客戶，計算出的預估總額。

### 活動動態

![活動動態小工具](/img/admin/network-dashboard-activity-stream.png)

這個小工具會記錄 Ultimate Multisite 中發生的各種事件，包括註冊、取消、網站建立、刪除等活動。

如需更詳細的說明，請參閱文件中的「事件」章節。

### 目前狀態

![目前狀態小工具](/img/admin/network-dashboard-right-now.png)

這個實用小工具會顯示網站網路中的使用者和網站數量摘要。頂部的快捷按鈕讓你只需點一下就能建立新網站或新使用者。

### 最新消息與討論

![最新消息與討論小工具](/img/admin/network-dashboard-news.png)

這個小工具會擷取並顯示 Ultimate Multisite 的最新消息。請留意這個小工具，以獲取更新資訊、重要錯誤修正和安全性修補的相關公告。

## Ultimate Multisite 控制台

網站網路層級的控制台呈現的是整個網站網路的整體資訊，而 Ultimate Multisite 控制台（位於 Ultimate Multisite 選單的最上層）則呈現服務相關的資訊。

![Ultimate Multisite 控制台](/img/admin/um-dashboard-top.png)

### 每月經常性收入成長

MRR（每月經常性收入）圖表會顯示 12 個月期間內，每月營收的詳細分布。

![MRR 成長圖表](/img/admin/um-dashboard-mrr.png)

新增營收以藍色顯示，取消則以紅色呈現。

### 日期範圍篩選

當客戶數量和活動量較多時，統計資料可能會變得難以閱讀。控制台內建的日期範圍篩選功能，可以讓網站網路管理員只專注於所需的資訊和時間區段。

![日期範圍選擇器與統計資料](/img/admin/um-dashboard-date-range.png)

日期範圍會控制下方各個小工具所顯示的時間區段，包括營收、新會員、依國家分類的註冊數、依表單分類的註冊數，以及最多人造訪的網站。

![控制台統計小工具](/img/admin/um-dashboard-stats.png)

:::tip
若要讓**最多人造訪的網站**小工具正常運作，請前往 **Ultimate Multisite → 設定 → 網站 → 啟用造訪次數限制與計數** 啟用造訪計數功能。
:::
