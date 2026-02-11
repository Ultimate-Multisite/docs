---
id: wu_pending_payment_message
title: フィルタ - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

保留中の支払いに関するメッセージをユーザーが変更できるようにします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | 表示するメッセージ。 |
| $customer | `\WP_Ultimo\Models\Customer` | 現在の顧客。 |
| $pending_payments | `array` | 保留中の支払いのリスト。 |

### Since

- 2.0.19

### Source

Defined in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) at line 244
