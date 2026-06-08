---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

वापरकर्त्याला प्रलंबित पेमेंटबद्दलचा संदेश बदलण्याची परवानगी देतो.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | प्रिंट करण्यासाठी संदेश. |
| $customer | `\WP_Ultimo\Models\Customer` | सध्याचा ग्राहक. |
| $pending_payments | `array` | प्रलंबित पेमेंटची यादी. |

### Since

- 2.0.19
### Source

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) मध्ये लाइन २४४ वर परिभाषित केले आहे.
