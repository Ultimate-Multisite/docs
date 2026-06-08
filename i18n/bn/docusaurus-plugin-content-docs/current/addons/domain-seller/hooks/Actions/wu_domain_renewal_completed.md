---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

একটি ডোমেইন সফলভাবে রিনিউ (নবায়ন) হওয়ার পরে এটি ট্রিগার হয়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | যে পেমেন্টের কারণে রিনিউয়ালটি ট্রিগার হয়েছে, সেই পেমেন্টটি। |
| $renewal_data | `array<string,mixed>` | রিনিউয়াল সংক্রান্ত মেটাডেটা (যেমন: domain_name, years, customer_id ইত্যাদি)। |
| $result | `array<string,mixed>` | রেজিস্ট্রার থেকে প্রাপ্ত কাঁচা ফলাফল অ্যারে, যার মধ্যে নতুন expiry_date অন্তর্ভুক্ত থাকে। |

### Since

- 2.0.0
### Source

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) এর লাইন ৫৯৪-এ সংজ্ঞায়িত।
