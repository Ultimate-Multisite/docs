---
id: wu_pending_payment_message
title: Филтр - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Филтр: wu_pending_payment_message

Ба корбар иҷозат медиҳад, ки паёмро дар бораи пардохтҳои интизоршаванда тағйир диҳад.

## Параметрҳо

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $message | `string` | Паёме, ки чоп мешавад. |
| $customer | `\WP_Ultimo\Models\Customer` | Муштарии ҷорӣ. |
| $pending_payments | `array` | Рӯйхат бо пардохтҳои интизоршаванда. |

### Аз версияи

- 2.0.19
### Манбаъ

Дар [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) дар сатри 244 муайян шудааст.
