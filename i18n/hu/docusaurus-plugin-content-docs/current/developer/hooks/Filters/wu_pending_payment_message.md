---
id: wu_pending_payment_message
title: Szűrő - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Engedélyezi a felhasználónak módosítani az üzenetet, amely a függő fizetésekről szól.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Az üzenet, amelyet kiír. |
| $customer | `\WP_Ultimo\Models\Customer` | Az aktuális ügyfél. |
| $pending_payments | `array` | Egy lista a függő fizetésekről. |

### Desde {#since}

- 2.0.19
### Forrás {#source}

Definíciója található [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) fájlban, 244-sorban.
