---
id: wu_handle_user_meta_fields
title: کردار - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# کردار: wu_handle_user_meta_fields

ڕێگە بە گەشەپێدەرانی plugin بدە زانیارییەکانی user meta بە شێوازە جیاوازەکان پاشەکەوت بکەن ئەگەر پێویستیان پێی هەبێت.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $meta_repository | `array` | لیستی خانەکانی meta، بە پێکهاتەی key =&gt; value. |
| $user | `\WP_User` | ئۆبژێکتی بەکارهێنەری WordPress. |
| $customer | `\Customer` | ئۆبژێکتی کڕیاری Ultimate Multisite. |
| $checkout | `\Checkout` | پۆلی checkout. |

### لە وەشانی {#since}

- 2.0.4
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) لە هێڵی 1244
