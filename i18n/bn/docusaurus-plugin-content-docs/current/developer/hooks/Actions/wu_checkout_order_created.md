---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

যখন চেকআউট অর্ডার সম্পূর্ণভাবে তৈরি হয়, তখন এটি ট্রিগার হয়।

অ্যাডঅনগুলি এটি ব্যবহার করে এমন প্রোডাক্টের জন্য সেকেন্ডারি মেম্বারশিপ তৈরি করতে পারে, যাদের বিলিং চক্র স্বাধীন।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | কার্ট/অর্ডার অবজেক্ট। |
| $customer | `\WP_Ultimo\Models\Customer` | গ্রাহক। |
| $membership | `\WP_Ultimo\Models\Membership` | প্রাথমিক মেম্বারশিপ। |
| $payment | `\WP_Ultimo\Models\Payment` | পেমেন্ট। |

### Since

- 2.5.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
