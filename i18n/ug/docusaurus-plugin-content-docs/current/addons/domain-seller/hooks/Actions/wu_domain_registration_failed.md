---
id: wu_domain_registration_failed
title: مەشغۇلات - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

دائىرە تىزىملاش ئۇرۇنۇشى مەغلۇپ بولغاندىن كېيىن قوزغىلىدۇ.

## پارامېتىرلار

| نامى | تۈرى | چۈشەندۈرۈشى |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | تىزىملاشنى قوزغاتقان چىقىم. |
| $registration_data | `array&lt;string,mixed&gt;` | status=failed ۋە error_message نى ئۆز ئىچىگە ئالغان تىزىملاش مېتا سانلىق مەلۇماتى. |
| $error_message | `string` | تىزىملىغۇچىدىن كەلگەن ئىنسان ئوقۇيالايدىغان خاتالىق ئۇچۇرى. |

### باشلاپ

- 2.0.0
### مەنبە

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) دا 1250-قۇردا بېكىتىلگەن.
