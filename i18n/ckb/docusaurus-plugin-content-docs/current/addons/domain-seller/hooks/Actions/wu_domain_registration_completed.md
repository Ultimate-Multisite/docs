---
id: wu_domain_registration_completed
title: کردار - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# کردار: wu_domain_registration_completed

دوای ئەوەی دۆمەینێک بە سەرکەوتوویی تۆمار کرا، کاردەکات.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ئەو پارەدانەی تۆمارکردنی دەستپێکرد. |
| $registration_data | `array&lt;string,mixed&gt;` | زانیارییەکانی تۆمارکردن (domain_name, provider_id, years, expiry_date, هتد.). |
| $result | `array&lt;string,mixed&gt;` | ڕیزبەندیی ئەنجامی خاوی گەڕاوە لەلایەن تۆمارکەرەوە. |

### لە وەشانی {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) لە هێڵی 1204
