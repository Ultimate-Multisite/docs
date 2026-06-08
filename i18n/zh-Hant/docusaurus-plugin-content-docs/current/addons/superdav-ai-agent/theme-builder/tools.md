---
title: 工具與設定
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# 工具與設定

Theme Builder 使用一套工具來分析、設計和建構您的 WordPress 網站。在 1.16.0 版本中，**sd-ai-agent/site-scrape 現已升級為 Tier 1 工具**，預設就會在 Theme Builder 中使用。

## 可用工具

### Tier 1 工具（預設可用）

Tier 1 工具無需額外設定，即可在 Theme Builder 中預設使用。

#### sd-ai-agent/site-scrape

**用途：** 分析現有的網站，以提取設計靈感、內容結構和功能性。

**功能：**

- **網站分析** — 抓取並分析競爭對手或參考網站
- **設計提取** — 識別顏色、字體和版面模式
- **內容結構** — 理解頁面組織和層級關係
- **功能偵測** — 識別插件和功能性
- **效能分析** — 檢查頁面速度和優化程度
- **SEO 分析** — 審閱 meta tags 和結構化資料

**使用範例：**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**提取內容：**

- 色彩調色盤和顏色使用方式
- 字體排印（字體和字號）
- 版面結構和間距
- 導航模式
- 內容組織
- 圖片和媒體使用
- 互動元素
- 行動裝置響應性

**限制：**

- 無法抓取需要密碼保護的網站
- 會尊重 robots.txt 和網站政策
- 可能無法捕捉動態內容
- 包含大量 JavaScript 的網站分析可能有限
- 大型網站分析可能需要更長時間

### Tier 2 工具（可選）

Tier 2 工具需在 Theme Builder 設定中明確啟用後才能使用。

#### Advanced Analytics

提供詳細的效能指標：

- 頁面載入時間
- Core Web Vitals
- SEO 分數
- 易用性（Accessibility）分數
- 最佳實踐分數

#### Content Optimizer

分析並建議以下方面的改進：

- 可讀性
- SEO 優化
- 關鍵字使用
- 內容結構
- 行動呼籲（Call-to-action）的放置位置

### Tier 3 工具（付費）

Tier 3 工具需要額外的設定或付費功能。

#### AI Content Generator

用於生成以下內容：

- 產品描述
- 服務頁面
- 部落格文章
- Meta 描述
- 行動呼籲文案

#### Advanced Design Tools

提供進階的設計能力：

- 自訂 CSS 生成
- 動畫創建
- 互動元素設計
- 進階色彩理論
- 字體排印優化

## 工具設定

### 啟用工具

若要啟用 Theme Builder 中的額外工具：

1. 導航至 **Gratis AI Agent → Settings**
2. 進入 **Theme Builder → Tools**
3. 根據需要切換工具的開關
4. 儲存設定

### 工具權限

某些工具需要特定的權限：

- **網站抓取** — 需要網路存取權限
- **分析** — 需要 Google Analytics 整合
- **內容生成** — 需要 API keys
- **進階功能** — 可能需要付費訂閱

### API Keys 和憑證

為需要這些工具的服務，請配置 API keys：

1. 前往 **Gratis AI Agent → Settings → API Keys**
2. 為每個工具輸入憑證
3. 測試連線
4. 安全地儲存

## 使用 sd-ai-agent/site-scrape

### 基本用法

請 Theme Builder 分析一個網站：

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### 特定分析

要求特定類型的分析：

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### 比較分析

比較多個網站：

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## 工具限制與注意事項

### 速率限制（Rate Limiting）

- 抓取功能會進行速率限制，以防止伺服器過載
- 對同一網站發出多次請求可能會被限制（throttled）
- 大型網站分析可能需要更長時間

### 內容準確性

- 動態內容可能無法完全捕捉
- JavaScript 渲染的內容可能不完整
- 即時資料可能無法反映
- 部分內容可能位於付費牆後

### 法律與道德考量

- 尊重 robots.txt 和網站政策
- 不得抓取受版權保護的內容用於複製
- 將分析用於靈感，而非直接複製
- 確認您有權使用提取的內容
- 遵守所分析網站的服務條款

### 效能影響

- 抓取大型網站會花費時間
- 多個同時抓取可能會更慢
- 網路連線會影響速度
- 大型資料集可能需要更多處理資源

## 最佳實踐

### 使用網站分析

1. **分析多個網站** — 從多個來源收集靈感
2. **專注於結構** — 學習版面和組織模式
3. **提取顏色** — 將調色盤作為起點
4. **研究字體排印** — 找出您喜歡的字體組合
5. **審閱導航** — 了解選單的組織方式

### 道德抓取

1. **尊重 robots.txt** — 遵循網站指南
2. **不要複製內容** — 僅將分析用於靈感參考
3. **驗證權利** — 確保您有權使用提取的內容
4. **註明來源** — 歸功於靈感來源
5. **遵守條款** — 遵守網站服務條款

### 最大化工具效益

1. **具體化** — 要求特定類型的分析
2. **提供背景資訊** — 解釋您網站的用途
3. **設定預期** — 描述您的設計目標
4. **迭代優化** — 根據結果進行改進
5. **結合工具** — 使用多個工具進行全面分析

## 故障排除

### 網站無法抓取

- 檢查網站是否公開可存取
- 確認 robots.txt 是否允許抓取
- 嘗試不同的網站
- 檢查網路連線
- 若問題持續存在，請聯繫支援

### 分析不完整

- 網站可能包含動態內容
- JavaScript 可能未完全渲染
- 大型網站可能導致超時（timeout）
- 嘗試分析特定的頁面
- 要求特定的分析類型

### 效能緩慢

- 大型網站分析需要更長時間
- 多個同時抓取會更慢
- 網路連線會影響速度
- 嘗試在非尖峰時段進行分析
- 先分析較小的區塊

## 相關文件

- [Discovery Interview](./discovery-interview.md) — 收集設計資訊
- [Design Direction](./design-direction.md) — 精煉您的設計方向
- [Hospitality Menus](./hospitality-menus.md) — 建立菜單頁面
