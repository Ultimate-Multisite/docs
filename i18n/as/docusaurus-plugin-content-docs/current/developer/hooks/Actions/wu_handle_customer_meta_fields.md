---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

প্লাগইন ডেভেলপাৰসকলক যদি তেওঁলোকক প্ৰয়োজন হয়, তেন্তে মেটা ডেটা বিভিন্ন ধৰণে সেভ কৰিবলৈ এই অ্যাকশনটোৱে অনুমতি দিয়ে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | মেটা ফিল্ডসমূহৰ তালিকা, যি key => value গঠনত থাকে। |
| $customer | `\Customer` | Ultimate Multisiteৰ গ্ৰাহক বস্তু (customer object)। |
| $checkout | `\Checkout` | চেকাউট ক্লাছ। |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211
