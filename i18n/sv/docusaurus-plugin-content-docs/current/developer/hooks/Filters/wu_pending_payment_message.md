---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Låter användaren ändra meddelandet om väntande betalningar.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $message | `string` | Meddelandet som ska visas. |
| $customer | `\WP_Ultimo\Models\Customer` | Den aktuella kunden. |
| $pending_payments | `array` | En lista med väntande betalningar. |

### Sedan {#since}

- 2.0.19
### Källa {#source}

Definieras i [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) på rad 244
