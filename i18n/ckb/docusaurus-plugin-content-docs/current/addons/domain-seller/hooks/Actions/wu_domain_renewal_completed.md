---
id: wu_domain_renewal_completed
title: کردار - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# کردار: wu_domain_renewal_completed

دوای ئەوەی دۆمەینێک بە سەرکەوتوویی نوێ کرایەوە، کار دەکات.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ئەو پارەدانەی نوێکردنەوەی دەستپێکرد. |
| $renewal_data | `array&lt;string,mixed&gt;` | زانیارییە هاوپێچەکانی نوێکردنەوە (domain_name, years, customer_id, هتد). |
| $result | `array&lt;string,mixed&gt;` | ئەو ڕیزبەندی ئەنجامی خامەی لەلایەن تۆمارکەرەوە گەڕێنراوەتەوە، لەگەڵ expiry_dateی نوێ. |

### لەو وەختەوە

- 2.0.0
### سەرچاوە

لە [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) لە هێڵی 594 پێناسە کراوە
