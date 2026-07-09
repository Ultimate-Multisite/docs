---
id: wu_pending_payment_message
title: Filtrs - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtrs: wu_pending_payment_message

Ļauj lietotājam mainīt ziņojumu par gaidošajiem maksājumiem.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $message | `string` | Ziņojums, ko izdrukāt. |
| $customer | `\WP_Ultimo\Models\Customer` | Pašreizējais klients. |
| $pending_payments | `array` | Saraksts ar gaidošajiem maksājumiem. |

### Kopš

- 2.0.19
### Avots

Definēts [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) 244. rindā
