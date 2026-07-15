---
id: wu_domain_registration_failed
title: عمل - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

ڊومين رجسٽريشن جي ڪوشش ناڪام ٿيڻ کان پوءِ چالو ٿئي ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | اها ادائيگي جنهن رجسٽريشن شروع ڪرائي. |
| $registration_data | `array&lt;string,mixed&gt;` | رجسٽريشن ميٽاڊيٽا، جنهن ۾ status=failed ۽ error_message شامل آهن. |
| $error_message | `string` | رجسٽرار کان انسان لاءِ پڙهڻ لائق غلطي جو پيغام. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ۾ سٽ 1250 تي بيان ٿيل.
