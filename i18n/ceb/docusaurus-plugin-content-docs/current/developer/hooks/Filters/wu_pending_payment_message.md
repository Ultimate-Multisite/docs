---
id: wu_pending_payment_message
title: Pagsala - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Tugoti ang user nga usbon ang mensahe bahin sa mga pending nga bayad.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $message | `string` | Ang mensahe nga i-print. |
| $customer | `\WP_Ultimo\Models\Customer` | Ang kasamtangang customer. |
| $pending_payments | `array` | Usa ka lista nga adunay pending nga mga bayad. |

### Sukad

- 2.0.19
### Tinubdan

Gidepina sa [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) sa linya 244
