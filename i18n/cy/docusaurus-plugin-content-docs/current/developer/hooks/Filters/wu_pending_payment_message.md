---
id: wu_pending_payment_message
title: Hidlydd - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Hidlydd: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Caniatáu i'r defnyddiwr newid y neges am y taliadau sydd ar y gweill.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $message | `string` | Y neges i'w hargraffu. |
| $customer | `\WP_Ultimo\Models\Customer` | Y cwsmer presennol. |
| $pending_payments | `array` | Rhestr gyda thaliadau sydd ar y gweill. |

### Ers {#since}

- 2.0.19
### Ffynhonnell {#source}

Wedi'i ddiffinio yn [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ar linell 244
