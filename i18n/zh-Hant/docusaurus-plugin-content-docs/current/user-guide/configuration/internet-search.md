---
title: 網路搜尋
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# 網路搜尋

Gratis AI Agent v1.5.0 新增了 **Internet Search** 功能，讓 AI 助理在對話過程中能夠從網路上檢索最新的資訊。此功能由 [Brave Search API](https://brave.com/search/api/) 或 [Tavily API](https://tavily.com/) 驅動。

## 運作原理

當啟用網路搜尋時，助理會在判斷一個問題需要即時或外部資訊（例如：最新新聞、即時價格或自模型訓練截止日期後可能已變動的文件）時，自動向您設定的搜尋提供者發出查詢。

檢索的結果會即時取得，並在助理生成回應之前注入到助理的上下文（context）中。助理也會明確告知使用者，它是否使用了搜尋結果來回答問題。

## 啟用網路搜尋

網路搜尋需要從您選擇的搜尋提供者處取得 API key。設定步驟如下：

1. 前往 **Gratis AI Agent → Settings → Advanced**。
2. 找到 **Internet Search Provider** 下拉選單，選擇 **Brave Search** 或 **Tavily**。
3. 在對應的欄位中輸入您的 API key。每個欄位旁邊都會顯示註冊連結。
4. 點擊 **Save Settings**。

儲存 key 後，Internet Search 功能就會自動對助理開放使用。

## Brave Search

### 如何取得 Brave Search API Key

1. 造訪 [Brave Search API 頁面](https://brave.com/search/api/)。
2. 註冊一個方案。免費方案提供每月查詢次數限制。
3. 從 Brave Search developer dashboard 複製您的 API key。
4. 將其貼到 Gratis AI Agent 設定中的 **Brave Search API Key** 欄位。

### 使用限制

Brave Search 會根據您發出的查詢次數來計費。每次觸發搜尋的 AI 回應，都將計算為一次查詢。請在 [Brave Search developer dashboard](https://brave.com/search/api/) 監控您的使用量，以避免意外費用。

## Tavily

Superdav AI Agent v1.10.0 新增了 **Tavily** 作為另一個網路搜尋提供者，它提供更豐富的搜尋結果和進階的研究能力。

### 如何取得 Tavily API Key

1. 造訪 [Tavily API 頁面](https://tavily.com/)。
2. 註冊一個帳戶。免費方案提供每月查詢次數限制。
3. 從 Tavily dashboard 複製您的 API key。
4. 將其貼到 Gratis AI Agent 設定中的 **Tavily API Key** 欄位。

### 使用限制

Tavily 會根據您發出的 API 呼叫次數來計費。每次觸發搜尋的 AI 回應，都將計算為一次呼叫。請在 [Tavily dashboard](https://tavily.com/) 監控您的使用量，以避免意外費用。

## 停用網路搜尋

從活躍的搜尋提供者欄位移除 API key 並儲存。Internet Search 功能將不再提供給助理使用。

:::note
網路搜尋會增加回應的延遲，因為助理必須等待搜尋結果才能生成答案。對於時間敏感的應用場景，請考慮是否真的需要即時搜尋，或者助理內建的知識是否已經足夠。
:::
