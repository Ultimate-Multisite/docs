---
id: wu_handle_customer_meta_fields
title: ئەمەل - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# ھەرىكەت: wu_handle_customer_meta_fields

plugin ئاچقۇچىلار ئېھتىياجلىق بولسا، meta data نى ئوخشىمىغان ئۇسۇللاردا ساقلىشىغا يول قويىدۇ.

## پارامېتىرلار

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $meta_repository | `array` | meta field لارنىڭ تىزىملىكى، key =&gt; value قۇرۇلمىسىدا. |
| $customer | `\Customer` | Ultimate Multisite خېرىدار ئوبيېكتى. |
| $checkout | `\Checkout` | checkout سىنىپى. |

### باشلانغان نەشرى

- 2.0.0
### مەنبە

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) دا 1211-قۇردا بېكىتىلگەن.
