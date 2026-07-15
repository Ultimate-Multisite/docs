---
id: wu_pending_payment_message
title: Filtru - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Permite utilizatorului să modifice mesajul afișat pentru plățile în așteptare.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Mesajul care va fi afișat. |
| $customer | `\WP_Ultimo\Models\Customer` | Clientul curent. |
| $pending_payments | `array` | O listă cu plățile în așteptare. |

### Since {#since}

- 2.0.19
### Source {#source}

Definit în [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) la linia 244
