---
id: wu_domain_registration_completed
title: কাৰ্য - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

ডোমেইন সফলভাৱে রেজিস্টাৰ হোৱাৰ পিছত এই Action টো ट्रिगर হয়।

## প্যারামিটাৰ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | যিটো পেমেন্টৰ বাবে এই রেজিস্ট্ৰেচন হৈছে। |
| $registration_data | `array<string,mixed>` | রেজিস্ট্ৰেচনৰ মেটাডেটা (domain_name, provider_id, years, expiry_date, ইত্যাদি)। |
| $result | `array<string,mixed>` | রেজিস্ট্ৰাৰৰ দ্বাৰা ঘূৰাই দিয়া কাঁচা ফলাফলৰ তালিকা (Raw result array)। |

### কবেৰে পৰা (Since)

- 2.0.0
### উৎস (Source)

এইটো [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ফাইলৰ লাইন ১২০৪ मा সংজ্ঞায়িত কৰা হৈছে।
