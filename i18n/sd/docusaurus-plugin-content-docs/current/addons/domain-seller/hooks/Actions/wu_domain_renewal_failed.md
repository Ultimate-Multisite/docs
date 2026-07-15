---
id: wu_domain_renewal_failed
title: عمل - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# عمل: wu_domain_renewal_failed

ڊومين جي تجديد جي ڪوشش ناڪام ٿيڻ کان پوءِ هلندو آهي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | اها ادائيگي جنهن تجديد شروع ڪئي. |
| $renewal_data | `array&lt;string,mixed&gt;` | تجديد جي ميٽاڊيٽا (domain_name، years، وغيره). |
| $error_message | `string` | رجسٽرار کان انسان لاءِ پڙهڻ لائق خرابي جو پيغام. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ۾ لڪير 630 تي بيان ٿيل آهي.
