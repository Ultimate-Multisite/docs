---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

ডোমেইন রেজিস্ট্রেশন করার চেষ্টা ব্যর্থ হলে এটি ট্রিগার হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | যে পেমেন্টটি রেজিস্ট্রেশন প্রক্রিয়া শুরু করেছিল। |
| $registration_data | `array<string,mixed>` | রেজিস্ট্রেশন মেটাডেটা, যার মধ্যে status=failed এবং error_message অন্তর্ভুক্ত। |
| $error_message | `string` | রেজিস্ট্রার থেকে পাওয়া মানুষের পড়ার উপযোগী ত্রুটি বার্তা। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) এর লাইন ১২৫০ এ সংজ্ঞায়িত।
