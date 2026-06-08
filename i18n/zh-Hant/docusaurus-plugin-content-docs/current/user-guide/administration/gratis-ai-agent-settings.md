---
title: 免費 AI Agent 設定
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent 設定

Gratis AI Agent 的 **設定 → 進階** 畫面提供了 v1.5.0 版本引入的後端整合的管理員級配置。本頁面記錄了 **回饋端點 (Feedback Endpoint)** 的欄位及其預期格式。

## 存取設定

1. 在 WordPress 管理介面中，前往 **Gratis AI Agent → 設定**。
2. 點擊 **進階** 分頁。

## 回饋端點配置

回饋端點會在使用者透過「👎」按鈕、自動提示橫幅或 `/report-issue` 指令提交回饋時，接收來自 AI agent 的 POST 請求。

| 欄位 | 說明 |
|---|---|
| **回饋端點 URL** | 接收回饋提交的 URL，這些提交會以帶有 JSON 內文的 HTTP POST 請求形式傳送。 |
| **回饋 API Key** | 一個透過每個回饋請求的 `Authorization` header 傳送的 bearer token。如果您的端點不需要驗證，請留空。 |

### 預期 JSON 負載 (Expected JSON Payload)

您的回饋端點必須接受帶有至少以下欄位的 JSON 內文：

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "關於價格的答案不正確。",
  "triage_category": "factual_error"
}
```

根據對話的上下文，負載中可能會包含其他欄位。

### `triage_category` 值

AI 篩選層 (triage layer) 在轉發負載之前，會將以下值之一指定給 `triage_category`：

| 值 | 意義 |
|---|---|
| `factual_error` | 助理提供的事實資訊不正確。 |
| `unhelpful_answer` | 回應在技術上是正確的，但沒有幫助。 |
| `inappropriate_content` | 回應包含不應顯示給使用者的內容。 |
| `other` | 回饋不符合任何已知類別。 |

### 驗證 (Authentication)

如果您的端點需要驗證，請將 **回饋 API Key** 欄位設定為您的 bearer token。agent 會傳送：

```
Authorization: Bearer <your-api-key>
```

如果 **回饋 API Key** 欄位為空，則不會傳送 `Authorization` header。

### 停用回饋收集

請將 **回饋端點 URL** 和 **回饋 API Key** 欄位都留空。使用者仍能看到「👎」按鈕和回饋 UI，但提交的內容不會轉發到任何外部服務。

## Brave Search API Key

在 **進階** 分頁上，**Brave Search API Key** 欄位啟用了 [網際網路搜尋](../configuration/internet-search) 功能。

| 欄位 | 說明 |
|---|---|
| **Brave Search API Key** | 您從 Brave Search 開發者儀表板取得的 API key。啟用 AI 助理的網際網路搜尋功能需要此。 |

該欄位標籤包含一個可點擊的連結，指向 Brave Search API 註冊頁面。若要停用網際網路搜尋，請留空。

有關此功能的終端使用者文件，請參閱 [網際網路搜尋](../configuration/internet-search)。

## 功能旗標 (Feature Flags)

功能旗標也是在 v1.9.0 中引入的，**設定 → 功能旗標** 分頁提供了可選功能的開關切換。每個旗標都是在整個網路範圍內啟用或停用；目前沒有單一站點的覆寫設定。

### 存取功能旗標

1. 在 WordPress 管理介面中，前往 **Gratis AI Agent → 設定**。
2. 點擊 **功能旗標** 分頁。

### 存取控制旗標

| 旗標 | 預設值 | 說明 |
|---|---|---|
| **Restrict to Administrators** | Off | 啟用後，只有擁有 `administrator` 角色的使用者才能開啟 AI Agent 聊天面板。其他所有角色則會看到「請聯繫您的管理員」訊息。 |
| **Restrict to Network Admins** | Off | 在多站點網路 (multisite network) 上啟用後，只有超級管理員 (Super Admins) 才能使用 agent。個別站點管理員將被阻止。如果兩個旗標都啟用，此旗標的優先級更高。 |
| **Allow Subscriber Access** | Off | 啟用後，擁有 `subscriber` 角色的使用者可以使用聊天介面，但功能限制為唯讀（無法建立文章或更改設定）。 |
| **Disable for Non-Members** | Off | 與 Ultimate Multisite 的會員狀態整合。啟用後，對於沒有活躍會員資格的站點，聊天功能將會隱藏。 |

### 品牌化旗標 (Branding Flags)

| 旗標 | 預設值 | 說明 |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | 移除聊天小工具底部顯示的品牌歸屬行。推薦用於白標部署。 |
| **Custom Agent Name** | *(blank)* | 用您自己的產品名稱取代聊天標頭和管理選單中預設的「Gratis AI Agent」標籤。留空則使用預設名稱。 |
| **Hide Agent Picker** | Off | 啟用後，使用者無法在五個內建 agent 之間切換。當前 agent 將固定為在 設定 → 一般 (Settings → General) 中設定的預設值。 |
| **Use Site Icon as Chat Avatar** | Off | 用 WordPress 站點圖標（在 外觀 → 自訂 → 站點識別 (Appearance → Customize → Site Identity) 下設定）取代聊天小工具標頭中的預設 AI 圖標。 |

### 應用變更

切換任何旗標後，請點擊 **儲存設定 (Save Settings)**。變更會立即生效——無需清除快取或重新啟用 plugin。
