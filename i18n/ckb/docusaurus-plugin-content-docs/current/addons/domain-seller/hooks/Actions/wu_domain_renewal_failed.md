---
id: wu_domain_renewal_failed
title: کردار - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# کردار: wu_domain_renewal_failed

دوای ئەوەی هەوڵێکی نوێکردنەوەی دۆمەین شکستی هێنا، کار دەکات.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ئەو پارەدانەی کە نوێکردنەوەکەی دەستپێکرد. |
| $renewal_data | `array&lt;string,mixed&gt;` | زانیارییەکانی نوێکردنەوە (domain_name، ساڵەکان، هتد.). |
| $error_message | `string` | پەیامی هەڵەی خوێندنەوە بۆ مرۆڤ لەلایەن registrar. |

### لە وەشان {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) لە دێڕی 630
