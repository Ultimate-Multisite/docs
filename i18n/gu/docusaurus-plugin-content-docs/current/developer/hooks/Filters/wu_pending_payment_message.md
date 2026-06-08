---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

વપરાશકર્તાને બાકી ચૂકવણીઓ (pending payments) વિશેના સંદેશને બદલવાની મંજૂરી આપે છે.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | જે સંદેશ પ્રિન્ટ કરવો છે. |
| $customer | `\WP_Ultimo\Models\Customer` | વર્તમાન ગ્રાહક. |
| $pending_payments | `array` | બાકી ચૂકવણીઓ ધરાવતી યાદી. |

### Since

- 2.0.19
### Source

Defined in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) at line 244
