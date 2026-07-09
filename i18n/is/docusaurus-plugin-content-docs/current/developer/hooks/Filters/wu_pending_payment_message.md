---
id: wu_pending_payment_message
title: Sía - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Sía: wu_pending_payment_message

Leyfir notanda að breyta skilaboðunum um greiðslur í bið.

## Breytur

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Skilaboðin sem á að birta. |
| $customer | `\WP_Ultimo\Models\Customer` | Núverandi viðskiptavinur. |
| $pending_payments | `array` | Listi með greiðslum í bið. |

### Frá

- 2.0.19
### Uppruni

Skilgreint í [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) í línu 244
