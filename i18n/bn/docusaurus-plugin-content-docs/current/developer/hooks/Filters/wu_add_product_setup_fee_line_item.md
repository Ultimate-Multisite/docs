---
id: wu_add_product_setup_fee_line_item
title: Filter - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item

ডেভেলপারদের সেটআপ ফি লাইন আইটেম পরিবর্তন করার সুযোগ দেয়।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $setup_fee_line_item | `array` | সেটআপ ফি লাইন আইটেমের প্যারামিটার। |
| $product | `\WP_Ultimo\Models\Product` | সেটআপ ফি-এর সাথে সম্পর্কিত পণ্যটি। |
| $cart | `\WP_Ultimo\Checkout\Cart` | কার্ট অবজেক্ট। |

### কখন থেকে {#since}

- 2.1
### উৎস {#source}

[`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) ফাইলটির ১৭৯০ লাইনে সংজ্ঞায়িত করা হয়েছে।


## কী ফেরত দেয় {#returns}
