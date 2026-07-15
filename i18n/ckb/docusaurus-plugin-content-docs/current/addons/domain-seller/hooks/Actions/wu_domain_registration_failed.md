---
id: wu_domain_registration_failed
title: کردار - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# کردار: wu_domain_registration_failed

دوای ئەوەی هەوڵێکی تۆمارکردنی دۆمەین شکستی هێنا، کاردەکات.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ئەو پارەدانەی تۆمارکردنی دەستپێکرد. |
| $registration_data | `array&lt;string,mixed&gt;` | زانیارییەکانی تۆمارکردن کە status=failed و error_message لەخۆدەگرێت. |
| $error_message | `string` | پەیامی هەڵەی خوێنراو بۆ مرۆڤ لەلایەن تۆمارکەری دۆمەینەوە. |

### لەو وەشانەوە {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) لە هێڵی 1250
