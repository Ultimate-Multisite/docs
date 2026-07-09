---
id: wu_domain_registration_completed
title: অ্যাকশন - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# অ্যাকশন: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

যখন কোনো ডোমেইন সফলভাবে রেজিস্টার করা হয়, তখন এই অ্যাকশনটি ট্রিগার হয়।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | যে পেমেন্টটি রেজিস্ট্রেশন ট্রিগার করেছে। |
| $registration_data | `array<string,mixed>` | রেজিস্ট্রেশনের মেটাডেটা (যেমন: domain_name, provider_id, years, expiry_date ইত্যাদি)। |
| $result | `array<string,mixed>` | রেজিস্ট্রার কর্তৃক ফেরত আসা কাঁচা ফলাফল অ্যারে। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) এর লাইন ১২০৪ এ সংজ্ঞায়িত।
