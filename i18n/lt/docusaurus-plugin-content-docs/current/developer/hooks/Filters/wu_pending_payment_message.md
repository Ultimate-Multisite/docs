---
id: wu_pending_payment_message
title: Filtras - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtras: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Leidžia vartotojui pakeisti pranešimą apie laukiančius mokėjimus.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $message | `string` | Pranešimas, kurį reikia išvesti. |
| $customer | `\WP_Ultimo\Models\Customer` | Dabartinis klientas. |
| $pending_payments | `array` | Sąrašas su laukiančiais mokėjimais. |

### Nuo {#since}

- 2.0.19
### Šaltinis {#source}

Apibrėžta [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) 244 eilutėje
