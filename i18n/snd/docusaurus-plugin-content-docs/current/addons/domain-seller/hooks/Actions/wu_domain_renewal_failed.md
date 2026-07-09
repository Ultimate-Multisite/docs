---
id: wu_domain_renewal_failed
title: عمل - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# عمل: wu_domain_renewal_failed

ڊومين جي نئين سر تجديد جي ڪوشش ناڪام ٿيڻ کان پوءِ هلندو آهي.

## پيرا ميٽر

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | اها ادائيگي جنهن تجديد کي شروع ڪيو. |
| $renewal_data | `array&lt;string,mixed&gt;` | تجديد جي metadata (domain_name, years، وغيره). |
| $error_message | `string` | رجسٽرار کان انسان لاءِ پڙهڻ لائق غلطي جو پيغام. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ۾، لائين 630 تي بيان ٿيل.
