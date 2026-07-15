---
title: Gratis AI Agent 設定
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent 設定

Gratis AI Agent 中的 **設定 → 進階** 畫面提供後端整合的管理員層級設定。本頁說明意見回饋轉送、搜尋提供者金鑰、受管理的 Superdav 服務設定、Google Calendar 控制項、TextBee SMS 設定，以及全網路功能旗標。

## 存取設定 {#accessing-settings}

1. 在 WordPress 管理後台中，前往 **Gratis AI Agent → 設定**。
2. 按一下 **進階** 分頁。

## 意見回饋端點設定 {#feedback-endpoint-configuration}

每當使用者透過倒讚按鈕、自動提示橫幅或 `/report-issue` 命令提交意見回饋時，意見回饋端點會接收來自 AI agent 的 POST 請求。

| 欄位 | 說明 |
|---|---|
| **意見回饋端點 URL** | 以帶有 JSON 主體的 HTTP POST 請求形式接收意見回饋提交的 URL。 |
| **Feedback API Key** | 在每個意見回饋請求的 `Authorization` header 中傳送的 bearer token。如果你的端點不需要驗證，請留空。 |

### 預期的 JSON 酬載 {#expected-json-payload}

你的意見回饋端點必須接受至少包含下列欄位的 JSON 主體：

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

視對話情境而定，酬載中可能會有其他欄位。

### `triage_category` 值 {#triagecategory-values}

AI 分診層會在轉送酬載前，將下列其中一個值指派給 `triage_category`：

| 值 | 意義 |
|---|---|
| `factual_error` | 助理提供了不正確的事實資訊。 |
| `unhelpful_answer` | 回應在技術上正確，但沒有幫助。 |
| `inappropriate_content` | 回應包含不應顯示給使用者的內容。 |
| `other` | 意見回饋不符合已知類別。 |

### 驗證 {#authentication}

如果你的端點需要驗證，請將 **Feedback API Key** 欄位設為你的 bearer token。agent 會傳送：

```
Authorization: Bearer <your-api-key>
```

如果 **Feedback API Key** 欄位為空，則不會傳送 `Authorization` header。

### 停用意見回饋收集 {#disabling-feedback-collection}

將 **意見回饋端點 URL** 和 **Feedback API Key** 兩個欄位都留空。倒讚按鈕和意見回饋 UI 仍會對使用者可見，但提交內容不會轉送到任何外部服務。

## Brave Search API Key {#brave-search-api-key}

同樣在 **進階** 分頁上，**Brave Search API Key** 欄位會啟用 [網際網路搜尋](../configuration/internet-search) 能力。

| 欄位 | 說明 |
|---|---|
| **Brave Search API Key** | 你來自 Brave Search 開發者 Dashboard 的 API 金鑰。啟用 AI 助理中的網際網路搜尋時需要此金鑰。 |

欄位標籤包含可點擊的 Brave Search API 註冊頁面連結。留空即可停用網際網路搜尋。

請參閱 [網際網路搜尋](../configuration/internet-search)，了解此功能的終端使用者文件。

## 受管理的 Superdav 服務 {#managed-superdav-service}

Superdav AI Agent v1.18.0 新增了受管理的 Superdav 服務端點，以及針對支援網站的自動連線佈建。當你的網站應連線到託管提供者，而不是手動設定的服務端點時，請使用這些控制項。

| 欄位 | 說明 |
|---|---|
| **受管理的 Superdav 服務** | 為支援的網站啟用託管 Superdav 服務連線。 |
| **佈建連線** | 啟動自動端點和認證佈建。確認網站應使用受管理提供者後使用此項。 |
| **服務端點 / 連線狀態** | 佈建後顯示目前端點或連線狀態。 |

佈建後，請儲存設定並驗證連線狀態，再依賴受管理服務工作流程。如果佈建失敗，請檢閱顯示的重試指引，並確認網站有權使用託管提供者。

## Google Calendar 設定 {#google-calendar-configuration}

啟用 Superdav AI Agent v1.18.0 行事曆功能時，agent 可以讀取已設定的行事曆和事件詳細資料。行事曆工具以讀取為導向，對於具排程感知的提醒、與會者後續追蹤和聯絡人比對很有用。

| 欄位 | 說明 |
|---|---|
| **Google Calendar 認證** | 儲存讀取行事曆資料所需的認證或 token 連線。 |
| **行事曆選擇** | 限制 agent 可檢查哪些已設定的行事曆。 |
| **行事曆連線狀態** | 確認目前認證是否可以讀取行事曆和事件。 |

請將行事曆認證限制在 agent 需要的行事曆。如果狀態指出 token 已過期，請重新連線或輪替認證。

## TextBee SMS 通知 {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 新增 TextBee 作為已設定通知工作流程的 SMS 提供者。針對敏感或面向使用者的訊息，SMS 通知應搭配人工核准關卡。

| 欄位 | 說明 |
|---|---|
| **TextBee API 金鑰** | 驗證傳送到 TextBee SMS 提供者的請求。 |
| **TextBee 裝置 / 寄件者** | 當提供者要求時，選取用於外送訊息的 TextBee 寄件者或裝置。 |
| **已啟用 SMS 通知** | 允許已核准的工作流程傳送文字訊息通知。保持停用以防止傳送 SMS。 |

僅將測試訊息傳送到管理員擁有的號碼，然後確認核准關卡行為，再啟用排程或面向與會者的提醒。

## 功能旗標 {#feature-flags}

同樣於 v1.9.0 引入的 **設定 → 功能旗標** 分頁，提供選用功能的切換開關。每個旗標都會在全網路範圍啟用或停用；目前沒有個別網站覆寫。

### 存取功能旗標 {#accessing-feature-flags}

1. 在 WordPress 管理後台中，前往 **Gratis AI Agent → 設定**。
2. 按一下 **功能旗標** 分頁。

### 存取控制旗標 {#access-control-flags}

| 旗標 | 預設值 | 說明 |
|---|---|---|
| **限制為管理員** | 關閉 | 啟用後，只有具有 `administrator` 角色的使用者可以開啟 AI Agent 聊天面板。所有其他角色會改為看到「請聯絡您的管理員」訊息。 |
| **限制為 Network Admins** | 關閉 | 在 multisite 網路上啟用後，只有 Super Admins 可以使用代理。個別網站管理員會被封鎖。如果兩者皆啟用，優先於「限制為管理員」。 |
| **允許 Subscriber 存取** | 關閉 | 啟用後，具有 `subscriber` 角色的使用者可以使用聊天介面，但僅限於唯讀能力（無法建立文章或變更設定）。 |
| **對非會員停用** | 關閉 | 與 Ultimate Multisite 會員狀態整合。啟用後，沒有有效會員資格的網站會隱藏聊天。 |

### 品牌旗標 {#branding-flags}

| 旗標 | 預設值 | 說明 |
|---|---|---|
| **隱藏「Powered by Gratis AI Agent」頁尾** | 關閉 | 移除顯示在聊天小工具底部的品牌歸屬列。建議用於白標部署。 |
| **自訂代理名稱** | *(空白)* | 將聊天標頭與管理選單中的預設「Gratis AI Agent」標籤替換為您自己的產品名稱。留空則使用預設值。 |
| **隱藏代理選擇器** | 關閉 | 啟用後，使用者無法在五個內建代理之間切換。目前代理會固定為「設定」→「一般」中設定為預設的項目。 |
| **使用網站圖示作為聊天頭像** | 關閉 | 將聊天小工具標頭中的預設 AI 圖示替換為 WordPress 網站圖示（在「外觀」→「自訂」→「網站識別」下設定）。 |

### 自動化安全旗標 {#automation-safety-flags}

Superdav AI Agent v1.18.0 引入人工核准關卡與提醒記錄，以提供更安全的自動化執行。這些控制項可能會出現在功能旗標或進階自動化設定中，視已安裝的套件而定。

| 旗標 | 預設值 | 說明 |
|---|---|---|
| **需要人工核准** | 建議開啟 | 暫停敏感自動化，直到授權使用者審查並確認建議的操作。 |
| **提醒去重複** | 開啟 | 記錄已傳送的提醒，讓重試或排程執行不會傳送重複通知。 |
| **啟用日曆工具** | 設定前關閉 | 允許代理讀取已設定的 Google 日曆與活動。 |
| **啟用 SMS 通知** | 設定前關閉 | 在憑證儲存後，允許已核准的工作流程傳送 TextBee SMS 通知。 |

### 套用變更 {#applying-changes}

切換任何旗標後，請按一下 **儲存設定**。變更會立即生效——不需要清除快取或重新啟用外掛。
