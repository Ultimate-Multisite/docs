---
id: wu_handle_customer_meta_fields
title: অ্যাকশন - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

যদি প্লাগইন ডেভেলপারদের প্রয়োজন হয়, তবে তারা বিভিন্ন উপায়ে মেটা ডেটা সংরক্ষণ করতে পারবে।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $meta_repository | `array` | মেটা ফিল্ডগুলোর একটি তালিকা, যা key => value কাঠামোতে সাজানো। |
| $customer | `\Customer` | Ultimate Multisite-এর গ্রাহক অবজেক্ট। |
| $checkout | `\Checkout` | চেকআউট ক্লাস। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ফাইলে লাইন ১২১১-এ সংজ্ঞায়িত।
