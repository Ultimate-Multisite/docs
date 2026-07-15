---
id: wu_pending_payment_message
title: Süzgüç - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Ulanyja garaşylýan tölegler baradaky habary üýtgetmäge rugsat berýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $message | `string` | Çap edilmeli habar. |
| $customer | `\WP_Ultimo\Models\Customer` | Häzirki müşderi. |
| $pending_payments | `array` | Garaşylýan tölegleriň sanawy. |

### Şondan bäri {#since}

- 2.0.19
### Çeşme {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) içinde 244-nji setirde kesgitlenen.
