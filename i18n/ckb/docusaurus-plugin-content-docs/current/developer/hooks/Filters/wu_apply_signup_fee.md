---
id: wu_apply_signup_fee
title: فلتەر - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

پاڵێوەر دەکات بۆ ئەوەی بزانرێت تێچووی signup بەکاربهێنرێت یان نا.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $add_signup_fee | `bool` | ئەوەی ئایا تێچووی signup زیاد بکرێت یان نا. |
| $product | `object` | ئامانجی ئاستی ئەندامێتی. |
| $this | `\WP_Ultimo\Checkout\Cart` | ئامانجی تۆمارکردن. |

### لە وەختی {#since}

- 3.1
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) لە دێڕی 1769
