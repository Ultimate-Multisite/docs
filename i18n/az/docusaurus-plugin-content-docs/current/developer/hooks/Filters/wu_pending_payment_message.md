---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Kullanıcının böyük ödənişlərlə bağlı göstərilən mesajı dəyişməsinə imkan verir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Nəşr ediləcək mesaj. |
| $customer | `\WP_Ultimo\Models\Customer` | Cari müştəri. |
| $pending_payments | `array` | Böyük ödənişləri ehtiva edən bir siyahı. |

### Since {#since}

- 2.0.19
### Source {#source}

Defined in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) at line 244
