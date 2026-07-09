---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Dovoli uporabniku, da spremeni sporočilo o čakajočih plačilih.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $message | `string` | Sporočilo za izpis. |
| $customer | `\WP_Ultimo\Models\Customer` | Trenutni kupec. |
| $pending_payments | `array` | Seznam čakajočih plačil. |

### Od različice

- 2.0.19
### Vir

Določeno v [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) v vrstici 244
