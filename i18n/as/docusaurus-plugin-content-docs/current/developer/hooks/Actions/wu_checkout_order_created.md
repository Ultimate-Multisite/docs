---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

চেকআউট অৰ্ডাৰটো সম্পূৰ্ণৰূপে সাজু হোৱাৰ পাছত এইটো সংঘটিত হয়।

Addons সমূহ এইটো ব্যৱহাৰ কৰি এনেকুৱা সামগ্ৰীৰ বাবে দ্বিতীয় সদস্যপদ (secondary memberships) সৃষ্টি কৰিব পাৰে, যাৰ বিলিং চক্ৰ একে নহয়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | কাৰ্ট/অৰ্ডাৰ অবজেক্ট। |
| $customer | `\WP_Ultimo\Models\Customer` | গ্ৰাহক। |
| $membership | `\WP_Ultimo\Models\Membership` | মুখ্য সদস্যপদ। |
| $payment | `\WP_Ultimo\Models\Payment` | পেমেন্ট। |

### Since {#since}

- 2.5.0
### Source {#source}

এইটো [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ফাইলৰ লাইন ৮৯১ ত সংজ্ঞায়িত কৰা হৈছে।
