---
id: wu_pending_payment_message
title: Sefe - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Sefe: wu_pending_payment_message

Dumella mosebedisi ho fetola molaetsa mabapi le ditefo tse emetseng.

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $message | `string` | Molaetsa o tla hatiswa. |
| $customer | `\WP_Ultimo\Models\Customer` | Moreki wa jwale. |
| $pending_payments | `array` | Lenane le nang le ditefo tse emetseng. |

### Ho tloha {#since}

- 2.0.19
### Mohlodi {#source}

E hlalositswe ho [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) moleng wa 244
