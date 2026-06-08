---
title: 能力可見性
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# 權能可見性

Superdav AI Agent v1.12.0 引入了 **權能可見性 (Ability Visibility)** 控制項，用來管理哪些介面會暴露哪些權能。這讓管理員可以精細調整哪些代理程式功能可以透過 REST API、MCP 伺服器、WooCommerce 整合和其他介面使用。

## 什麼是權能可見性？

權能可見性是一個權限系統，用來控制以下幾點：

- **哪些權能**可供代理程式使用
- **它們在哪裡暴露**（REST API、MCP、WooCommerce 等）
- **誰可以存取它們**（透過合作夥伴允許清單）
- **它們如何分類**（已識別 vs. 未識別）

每個權能都帶有一個可見性等級，決定了它在不同介面上的可用性。

## 可見性等級

### 公開 (Public)

**公開權能**在所有地方都可用：

- REST API 端點
- MCP 伺服器
- WooCommerce 整合
- 聊天介面
- 所有使用者角色（需具備適當權限）

範例：`scaffold-block-theme`、`activate-theme`、`send-email`

### 內部 (Internal)

**內部權能**僅在您的 WordPress 安裝環境內可用：

- 聊天介面
- 管理面板
- 僅限登入使用者
- 不會透過 REST API 或外部整合暴露

範例：`manage-settings`、`view-analytics`、`export-data`

### 合作夥伴 (Partner)

**合作夥伴權能**僅對白名單上的合作夥伴開放：

- 需要明確的合作夥伴允許清單條目
- 透過合作夥伴憑證可透過 REST API 使用
- 透過合作夥伴驗證可透過 MCP 使用
- 一般使用者無法使用

範例：`bulk-import-users`、`modify-billing`、`access-analytics`

### 已停用 (Disabled)

**已停用權能**在任何地方都不可用：

- 不會透過任何介面暴露
- 聊天中不可用
- 管理面板中不可用
- 對於已棄用或實驗性的權能很有用

## 管理權能可見性

### 存取權能可見性設定

1. 前往 **WordPress 管理區** → **Superdav AI Agent** → **設定**
2. 點擊 **Abilities** 標籤
3. 您將看到所有已安裝權能的列表及其可見性等級

### 查看權能詳情

點擊任何權能，即可查看：

- **名稱 (Name)**：該權能的識別符
- **描述 (Description)**：該權能的功能說明
- **目前可見性 (Current visibility)**：公開、內部、合作夥伴或已停用
- **合作夥伴允許清單 (Partner allow-list)**：哪些合作夥伴可以存取（若為合作夥伴可見性）
- **最後更新時間 (Last updated)**：上次更改可見性時間
- **狀態 (Status)**：已識別或未識別

### 更改可見性等級

若要更改權能的可見性：

1. 點擊列表中的該權能
2. 從下拉式選單中選擇新的可見性等級
3. 如果選擇「合作夥伴」，請將合作夥伴識別符新增到允許清單中
4. 點擊 **儲存 (Save)**

範例：

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### 批次操作

若要更改多個權能的可見性：

1. 勾選權能旁邊的方塊
2. 從批次操作下拉式選單中選擇新的可見性等級
3. 點擊 **套用 (Apply)**

## 合作夥伴允許清單 (Partner Allow-List)

**合作夥伴允許清單**控制哪些外部合作夥伴可以存取合作夥伴級別的權能。

### 新增合作夥伴

1. 前往 **Superdav AI Agent** → **設定** → **合作夥伴 (Partners)**
2. 點擊 **新增合作夥伴 (Add Partner)**
3. 輸入合作夥伴識別符（通常是 API key 或組織 ID）
4. 可選地新增合作夥伴名稱和描述
5. 點擊 **儲存 (Save)**

### 將權能指派給合作夥伴

新增合作夥伴後：

1. 前往 **Abilities** 標籤
2. 找到具有合作夥伴可見性的權能
3. 點擊編輯
4. 在「合作夥伴允許清單」區塊，勾選應具備存取權的合作夥伴方塊
5. 點擊 **儲存 (Save)**

### 撤銷合作夥伴存取權

若要移除合作夥伴的存取權：

1. 編輯該權能
2. 在允許清單中取消勾選該合作夥伴的方塊
3. 點擊 **儲存 (Save)**

該合作夥伴將立即失去對該權能的存取權。

## 未識別的權能 (Unclassified Abilities)

當您安裝了 Superdav AI Agent 不認識的第三方權能時，它會被標記為 **未識別 (Unclassified)**。

### 未識別權能的管理通知

您會看到一個管理通知：

```
⚠️ 偵測到未識別的權能

以下權能已安裝但尚未被識別：
- custom-import-tool
- external-api-wrapper

這些權能可能存在安全或相容性風險。
請您審閱並進行分類。

[Review Abilities] [Dismiss]
```

### 審閱未識別的權能

1. 點擊通知中的 **Review Abilities**
2. 對於每個未識別的權能，您將看到：
   - 權能名稱和描述
   - 來源（哪個 plugin/addon 安裝的）
   - 建議的可見性等級
   - 安全評估

3. 選擇一個可見性等級：
   - **公開 (Public)**：信任該權能；在所有地方暴露它
   - **內部 (Internal)**：限制僅供內部使用
   - **合作夥伴 (Partner)**：限制給特定的合作夥伴
   - **已停用 (Disabled)**：不使用此權能

4. 點擊 **Classify** 以儲存您的決定

### 為什麼要分類未識別的權能？

分類權能的好處：

- **提高安全性**：您明確批准了哪些內容會被暴露
- **預防意外**：未識別的權能預設是停用的
- **啟用功能**：一旦分類，該權能就會可用
- **記錄決策**：您的選擇會被記錄下來，用於審計目的

## 不同介面上的可見性

### REST API

**公開權能**可透過 REST 端點使用：

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**內部和合作夥伴權能**無法透過 REST API 使用。

### MCP 伺服器

**公開權能**可透過 MCP 使用：

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**內部權能**不會透過 MCP 暴露。

**合作夥伴權能**僅需合作夥伴憑證才能使用。

### WooCommerce 整合

與 WooCommerce 相關的**公開權能**是可用的：

- 產品管理
- 訂單處理
- 客戶溝通

**內部權能**不會暴露給 WooCommerce。

### 聊天介面

**所有權能**（公開、內部、合作夥伴）在聊天中都可用，具體取決於使用者權限：

- 管理員可以看到所有權能
- 一般使用者只能看到公開權能
- 合作夥伴可以看到公開 + 合作夥伴權能（若已加入白名單）

## 安全最佳實踐

### 最少權限原則 (Principle of Least Privilege)

- 將權能設定為仍能使用但限制最嚴格的可見性
- 對於敏感操作，使用合作夥伴可見性
- 停用您不使用的權能

### 定期稽核 (Regular Audits)

- 每月審閱權能可見性
- 檢查是否有未識別的權能
- 移除未使用的合作夥伴存取權

### 日誌記錄與監控 (Logging and Monitoring)

- 監控哪些權能使用最頻繁
- 追蹤合作夥伴的存取模式
- 對於異常的權能使用發出警報

### 第三方權能 (Third-Party Abilities)

- 在啟用前審閱第三方權能
- 明確進行分類
- 從內部或合作夥伴可見性開始
- 僅在經過審核後才提升為公開

## 疑難排解 (Troubleshooting)

**權能在列表中看不到**
- 確認該權能已安裝且啟用
- 檢查 plugin/addon 是否已啟用
- 刷新頁面

**無法更改權能的可見性**
- 確認您擁有管理員權限
- 檢查該權能是否被其他 plugin 鎖定
- 嘗試停用可能衝突的 plugin

**合作夥伴無法存取權能**
- 確認該合作夥伴是否在允許清單中
- 檢查該權能的可見性是否設定為合作夥伴
- 確認合作夥伴的憑證是否正確
- 檢查 API 日誌是否有驗證錯誤

**未識別的權能持續出現**
- 在管理通知中審閱並分類它們
- 檢查您的分類是否已儲存
- 確認提供該權能的 plugin 是否已更新到最新版本

## 從舊版模式遷移 (Migration from Legacy Mode)

如果您正在從舊版本的 Superdav AI Agent 升級：

- 所有現有的權能將自動分類為公開
- 根據需要審閱並調整可見性
- 除非您想限制存取權，否則無需採取任何行動

請參閱 **Third-Party Mode Migration** 以了解有關過渡到原生 Abilities API 整合的更多詳細資訊。

## 後續步驟 (Next Steps)

完成權能可見性配置後：

1. **審閱您的權能**：稽核所有已安裝的權能
2. **分類未識別的權能**：回應管理通知
3. **設定合作夥伴**：如果使用合作夥伴可見性，請新增合作夥伴
4. **監控使用情況**：追蹤哪些權能使用最頻繁
5. **記錄決策**：記錄您選擇每個可見性等級的原因
