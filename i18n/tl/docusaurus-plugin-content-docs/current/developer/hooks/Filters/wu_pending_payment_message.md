---
id: wu_pending_payment_message
title: Salain - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Payagan ang user na baguhin ang mensahe tungkol sa mga nakabinbing bayad.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $message | `string` | Ang mensaheng ipi-print. |
| $customer | `\WP_Ultimo\Models\Customer` | Ang kasalukuyang customer. |
| $pending_payments | `array` | Isang listahan na may mga nakabinbing bayad. |

### Mula Noong {#since}

- 2.0.19
### Pinagmulan {#source}

Tinukoy sa [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) sa linya 244
