---
id: wu_handle_customer_meta_fields
title: کردار - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# کردار: wu_handle_customer_meta_fields

ڕێگە بدە بە پەرەپێدەرانی plugin کە زانیاریی meta بە شێوازە جیاوازەکان پاشەکەوت بکەن ئەگەر پێویستیان پێی هەبوو.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $meta_repository | `array` | لیستی خانەکانی meta، بە پێکهاتەی key =&gt; value. |
| $customer | `\Customer` | ئامانجی کڕیاری Ultimate Multisite. |
| $checkout | `\Checkout` | پۆلی checkout. |

### لەوەوبەر {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) لە هێڵی 1211
