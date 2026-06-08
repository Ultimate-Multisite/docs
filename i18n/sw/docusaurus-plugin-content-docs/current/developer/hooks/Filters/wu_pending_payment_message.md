---
id: wu_pending_payment_message
title: Kifilta - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Inaruhusu mtumiaji kubadilisha ujumbe unaohusu malipo yanayosubiri.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Ujumbe ambao utaonyeshwa. |
| $customer | `\WP_Ultimo\Models\Customer` | Mteja anayefanya malipo sasa. |
| $pending_payments | `array` | Orodha ya malipo yanayosubiri. |

### Tangu

- 2.0.19
### Chanzo

Imefafanuliwa katika [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) kwenye mstari wa 244
