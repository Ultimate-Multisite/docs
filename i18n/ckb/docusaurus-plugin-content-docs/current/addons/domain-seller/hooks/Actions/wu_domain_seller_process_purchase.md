---
id: wu_domain_seller_process_purchase
title: کردار - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# کردار: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

کاتێک دەکەوێتە کار کە کڕینی دۆمەین پاش تەواوبوونی checkout پرۆسە دەکرێت.

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ئۆبجێکتی پارەدان. |
| $checkout_data | `array&lt;string,mixed&gt;` | هەموو داتای checkout لە فۆڕمی تۆماربوونەوە. |

### لە وەشانەوە {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) لە دێڕی 246
