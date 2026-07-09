---
id: wu_domain_renewal_failed
title: مەشغۇلات - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# ھەرىكەت: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

دائىرە نامىنى يېڭىلاش سىنىقى مەغلۇپ بولغاندىن كېيىن ئىجرا بولىدۇ.

## پارامېتىرلار {#parameters}

| ئىسمى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | يېڭىلاشنى قوزغاتقان ھەق تۆلەش. |
| $renewal_data | `array&lt;string,mixed&gt;` | يېڭىلاش مېتاداتاسى (domain_name، years قاتارلىقلار). |
| $error_message | `string` | تىزىملىغۇچىدىن كەلگەن ئادەم ئوقۇيالايدىغان خاتالىق ئۇچۇرى. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) دا 630-قۇردا ئېنىقلانغان.
