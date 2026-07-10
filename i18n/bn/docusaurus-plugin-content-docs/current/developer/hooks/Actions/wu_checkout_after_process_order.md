---
id: wu_checkout_after_process_order
title: wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

ডেভেলপারদের অতিরিক্ত হুক (hooks) ট্রিগার করার সুযোগ দেয়।

## প্যারামিটার {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $checkout | `\Checkout` | চেকআউট অবজেক্টের একটি উদাহরণ (instance)। |
| $cart | `\Cart` | চেকআউট কার্টের একটি উদাহরণ (instance)। |

### কবে থেকে {#since}

- 2.0.9
### উৎস {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013)-এ লাইন ১০১৩-এ সংজ্ঞায়িত করা হয়েছে।
