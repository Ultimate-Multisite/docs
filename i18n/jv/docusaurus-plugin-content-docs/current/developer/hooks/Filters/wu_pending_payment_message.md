---
id: wu_pending_payment_message
title: Saringan - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Ngidini pangguna ngganti pesen babagan pambayaran sing isih ditundha.

## Paramèter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Pesen sing arep dicithak. |
| $customer | `\WP_Ultimo\Models\Customer` | Pelanggan saiki. |
| $pending_payments | `array` | Dhaptar kanthi pambayaran sing isih ditundha. |

### Wiwit {#since}

- 2.0.19
### Sumber {#source}

Ditetepake ing [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ing larik 244
