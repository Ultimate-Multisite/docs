---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Umožňuje používateľovi zmeniť správu o čakajúcich platbách.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $message | `string` | Správa, ktorá sa má vypísať. |
| $customer | `\WP_Ultimo\Models\Customer` | Aktuálny zákazník. |
| $pending_payments | `array` | Zoznam s čakajúcimi platbami. |

### Od verzie {#since}

- 2.0.19
### Zdroj {#source}

Definované v [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) na riadku 244
