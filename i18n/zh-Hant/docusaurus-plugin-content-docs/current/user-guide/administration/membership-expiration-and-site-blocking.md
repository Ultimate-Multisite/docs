---
title: 會員資格過期與網站封鎖
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# 會籍到期與網站封鎖

本指南說明 Ultimate Multisite 如何處理會籍到期、試用期結束以及前端網站封鎖的機制。內容涵蓋了會籍從「活躍」到「到期」的整個生命週期、控制網站是否被封鎖的設定，以及在會籍到期後網站仍可存取時應檢查哪些項目。

## 會籍狀態生命週期

Ultimate Multisite 中的每個會籍都具有以下其中一種狀態：

:::note 免費會籍為終身權益
免費會籍不會自動到期。Ultimate Multisite 將其視為終身權益，除非管理員更改其狀態或將客戶轉移到其他產品，否則不會納入到期檢查範圍。
:::

| 狀態 | 意義 |
|---|---|
| **Pending** | 等待首次付款或電子郵件驗證 |
| **Trialing** | 活躍試用期，尚未收取任何費用 |
| **Active** | 已付款且有效 |
| **On Hold** | 等待續訂付款（已建立發票，等待付款） |
| **Expired** | 超過到期日和寬限期，未續訂 |
| **Cancelled** | 由客戶或管理員明確取消 |

### 會籍如何過渡到「到期」

Ultimate Multisite 會每小時執行一次背景檢查，尋找應標記為到期的會籍。此檢查使用 [Action Scheduler](https://actionscheduler.org/)（而非直接使用 WP-Cron），並作為 `wu_membership_check` 排程動作執行。

到期檢查預設具有 **3 天的內建寬限期**。在會籍的 `date_expiration` 經過後，系統不會立即將其標記為 `expired`。這為客戶提供了時間，讓他們在狀態改變前完成遲繳的付款。

:::info
3 天的到期寬限期與下方描述的「前端封鎖寬限期」是分開的。到期寬限期控制的是 **會籍狀態** 從活躍/待續變為到期。而前端封鎖寬限期控制的是在狀態已經改變後，**網站被封鎖**的時間點。
:::

#### 自動續訂與非自動續訂的會籍

區分這兩者對於理解到期行為至關重要：

- **非自動續訂的會籍** (`auto_renew = false`)：每小時的排程任務會處理完整的生命週期——它會建立續訂付款、將會籍轉換為待續狀態，如果未收到付款，最終會將其標記為到期。

- **自動續訂的會籍** (`auto_renew = true`)：排程到期檢查會 **完全跳過這些會籍**。系統預期支付閘道（Stripe、PayPal 等）會透過 Webhooks 通知 Ultimate Multisite 訂閱失敗或被取消。如果未收到 Webhook（可能是因為端點配置錯誤、閘道服務中斷，或訂閱在系統外部取消），即使超過到期日，該會籍也可能無限期地保持 `active` 狀態。

### 試用期如何結束

當試用會籍的試用期結束時，系統會執行以下步驟：

1. 建立一筆包含全額訂閱費用的待續付款。
2. 將會籍狀態從 `trialing` 轉換為 `on-hold`。
3. 向客戶發送續訂付款通知電子郵件。

此流程與常規的到期檢查使用相同的每小時排程，但 **僅適用於非自動續訂的會籍**。對於自動續訂的試用期，支付閘道會負責從試用期到付費訂閱的轉換。

## 封鎖前端存取權限

預設情況下，當會籍到期或進入待續狀態時，**只有 wp-admin 後台會被限制**。網站的公共前端仍然對訪客開放。如果也需要封鎖公共存取權限，您必須啟用 **Block Frontend Access**（封鎖前端存取權限）設定。

### 設定配置

前往 **Ultimate Multisite > Settings > Memberships**，並啟用 **Block Frontend Access**。

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

這是會籍設定頁面的完整視圖：

![Membership settings full page](/img/config/settings-membership-full.png)

有三個相關設定控制著此行為：

| 設定 | 描述 | 預設值 |
|---|---|---|
| **Block Frontend Access** | 主開關。啟用後，當網站的會籍不再活躍時，會封鎖網路網站的公共前端。 | 關閉 |
| **Frontend Block Grace Period** | 會籍非活躍後，等待封鎖的天數。設定為 `0` 即時封鎖。 | 0 |
| **Frontend Block Page** | 在網站被封鎖時，將訪客重定向到的主站頁面。如果未設定，訪客將看到一個通用的「網站無法使用」訊息。 | 無 |

### 網站被封鎖時，訪客會看到什麼

當前端存取權限被封鎖時，訪問該網站的訪客將會：

1. **被重定向**到您在 **Frontend Block Page** 中選擇的頁面（如果已配置），或
2. **看到預設訊息**：「此網站目前無法使用。」，並附帶一個指向網站管理員登入頁面的連結。

網站管理員仍然可以登入——登入頁面永遠不會被封鎖。

### 什麼會被封鎖，以及何時被封鎖

封鎖行為取決於會籍狀態：

| 會籍狀態 | 前端是否封鎖？ | 是否適用寬限期？ |
|---|---|---|
| Active | 否 | -- |
| Trialing | **否**（見下方備註） | -- |
| On Hold | 視為活躍 -- 不會封鎖 | -- |
| Expired | **是**，如果啟用了 Block Frontend Access | 是 |
| Cancelled | **是**，總是（無論設定如何） | **否** -- 立即封鎖 |
| Pending | 透過會籍檢查不會封鎖 | -- |

:::warning 試用會籍不會被封鎖
即使試用期已結束，狀態為 `trialing` 的會籍在前端也**不會**被封鎖。試用期必須先轉換為其他狀態（通常透過排程任務進入 `on-hold`，然後如果未付款則進入 `expired`）。如果您看到試用會籍尚未轉換，請檢查下方的疑難排解區塊。
:::

:::note 取消的會籍會繞過寬限期
取消的會籍在到期日過後總是會被封鎖，無論是否啟用了 Block Frontend Access。前端封鎖寬限期 **不適用** 給已取消的會籍。
:::

## 疑難排解：會籍到期後網站仍可存取

如果會籍到期後網站仍可公開存取，請依序檢查以下項目：

### 1. 確認「封鎖前端存取權限」設定是否已啟用

前往 **Ultimate Multisite > Settings > Memberships**，確認 **Block Frontend Access** 開關是否為開啟狀態。此設定 **預設為關閉**，這意味著當會籍非活躍時，只有 wp-admin 後台會被限制。

### 2. 檢查「前端封鎖寬限期」

在同一設定頁面，檢查 **Frontend Block Grace Period** 的數值。如果此數值設定為 7 天，例如，前端直到會籍到期後的 7 天才會被封鎖——即使會籍狀態已經是 `expired`。

如果您希望會籍非活躍後立即封鎖，請將此數值設定為 `0`。

### 3. 確認會籍狀態是否已實際改變

前往 **Ultimate Multisite > Memberships**，檢查受影響會籍的狀態。如果到期日已過，但狀態仍顯示為 `active`，則表示狀態轉換尚未發生。常見原因：

- **會籍是自動續訂的**：檢查會籍編輯頁面的 `auto_renew` 欄位。如果啟用了自動續訂，到期排程任務會跳過此會籍——它依賴支付閘道報告失敗。請檢查您的閘道儀表板（Stripe、PayPal），確認訂閱狀態是否與 Ultimate Multisite 顯示的狀態一致。

- **排程任務尚未執行**：請看下一步。

### 4. 驗證 Action Scheduler 是否正在運行

Ultimate Multisite 使用 Action Scheduler 執行其排程任務。請前往網路管理員的 **Tools > Scheduled Actions**，尋找：

- **`wu_membership_check`** -- 這應該顯示為每小時重複執行的動作。如果找不到，表示會籍檢查尚未排程。
- **`wu_async_mark_membership_as_expired`** -- 這些是標記特定會籍為到期的單個任務。如果這裡看到失敗的動作，它們可能包含解釋錯誤訊息。

如果看到卡住或失敗的動作，您可能遇到了 Action Scheduler 的問題。常見原因：

- 在 `wp-config.php` 中設定了 `DISABLE_WP_CRON` 為 `true`，但沒有系統級的排程任務來替代。
- **網站流量低** -- WP-Cron 只有在有人訪問網站時才會執行。

為確保可靠的排程執行，請設定系統級的 cron job：

```bash
# 透過 wget 每 5 分鐘執行一次
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# 或透過 WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. 檢查閘道 Webhook 問題（自動續訂會籍）

如果會籍是自動續訂的，且閘道訂閱已被取消或失敗，但 Ultimate Multisite 仍顯示為 `active`：

- **Stripe**：前往 Stripe Dashboard > Customers，檢查訂閱狀態。然後在 Developers > Webhooks 下驗證 Webhook 端點是否活躍。該端點應指向您的網站，並顯示成功的傳遞記錄。
- **PayPal**：檢查您的 PayPal 商家帳戶中的訂閱狀態，並驗證 IPN/webhook 的傳遞。

如果閘道顯示訂閱已取消，但 Ultimate Multisite 沒有，則 Webhook 通知很可能丟失了。您可以手動在 **Ultimate Multisite > Memberships > [編輯會籍]** 中更改會籍狀態。

### 6. 檢查到期寬限期（Cron 層級）

排程檢查本身也有寬限期（預設：3 天），用於在標記會籍為到期之前。這與前端封鎖寬限期是分開的。網站被封鎖前的總時間可能是：

**到期寬限期（3 天）** + **前端封鎖寬限期（您的設定）** = 總延遲時間

例如，使用預設設定和 7 天的前端寬限期，網站實際被封鎖的時間可能長達 10 天，超過 `date_expiration` 之後。

### 7. 手動到期會籍

如果您需要立即封鎖網站，而無需等待排程週期，您可以手動更改會籍狀態：

1. 前往 **Ultimate Multisite > Memberships**
2. 點擊受影響的會籍
3. 將狀態更改為 **Expired** 或 **Cancelled**
4. 點擊 **Save**

前端封鎖將在下一個頁面載入時生效（對於到期會籍，需遵守前端封鎖寬限期；對於取消會籍，則立即生效）。

## 總結

從到期日到網站封鎖的完整時間軸：

```text
date_expiration 經過
       |
       v
  [3天排程寬限期]     <-- 會籍仍顯示為 active/on-hold
       |
       v
  排程任務將會籍標記為 "expired"
       |
       v
  [前端封鎖寬限期]  <-- 設定在 Settings > Memberships
       |
       v
  網站前端被封鎖
```

對於已取消的會籍，路徑更短：

```text
  會籍被取消
       |
       v
  date_expiration 經過（無寬限期）
       |
       v
  網站前端立即被封鎖
```

## 開發者參考

以下 Hook 和 Filter 允許您客製化到期和封鎖行為：

| Hook/Filter | 描述 |
|---|---|
| `wu_membership_grace_period_days` | 過濾標記會籍為到期前的寬限天數（預設：3） |
| `wu_schedule_membership_check_interval` | 過濾會籍檢查之間的間隔時間（預設：1 小時） |
| `wu_membership_renewal_days_before_expiring` | 過濾在到期前多少天建立續訂付款（預設：3） |
| `wu_blocked_site_reactivation_url` | 過濾提供自訂的網站恢復 URL，用於網站被封鎖時 |
| `wu_membership_is_active` | 過濾判斷會籍是否為活躍狀態的邏輯 |
| `wu_membership_expired_check_query_params` | 過濾用於查找到期會籍的查詢參數 |
| `wu_membership_trial_check_query_params` | 過濾用於查找到期試用期的查詢參數 |
