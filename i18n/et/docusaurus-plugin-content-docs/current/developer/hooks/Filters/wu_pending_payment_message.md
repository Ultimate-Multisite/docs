---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Võimaldab kasutajal muuta ootel maksete kohta käivat sõnumit.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $message | `string` | Prinditav sõnum. |
| $customer | `\WP_Ultimo\Models\Customer` | Praegune klient. |
| $pending_payments | `array` | Loend ootel maksetega. |

### Alates

- 2.0.19
### Allikas

Määratletud failis [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) real 244
