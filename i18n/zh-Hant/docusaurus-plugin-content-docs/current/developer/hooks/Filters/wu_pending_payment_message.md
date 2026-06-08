---
id: wu_pending_payment_message
title: 過濾器 - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# 篩選器：wu_pending_payment_message

允許使用者修改關於待處理付款的訊息內容。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $message | `string` | 要顯示的訊息內容。 |
| $customer | `\WP_Ultimo\Models\Customer` | 當前客戶資料。 |
| $pending_payments | `array` | 包含待處理付款的列表。 |

### 可用自

- 2.0.19
### 來源

定義於 [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) 的第 244 行
