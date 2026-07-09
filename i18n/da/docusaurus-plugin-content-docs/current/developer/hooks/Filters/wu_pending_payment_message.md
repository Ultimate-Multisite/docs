---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Gør det muligt for brugeren at ændre beskeden om de afventende betalinger.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $message | `string` | Beskeden, der skal udskrives. |
| $customer | `\WP_Ultimo\Models\Customer` | Den aktuelle kunde. |
| $pending_payments | `array` | En liste med afventende betalinger. |

### Siden

- 2.0.19
### Kilde

Defineret i [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) på linje 244
