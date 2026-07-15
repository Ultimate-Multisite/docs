---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

ডোমেইন ৰেজিষ্ট্ৰেচনৰ প্ৰয়াস বিফল হ'লে এই Action টো ट्रिगर হয়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | যিটো পেমেন্টৰ বাবে ৰেজিষ্ট্ৰেচন কৰিবলৈ চেষ্টা কৰা হৈছিল। |
| $registration_data | `array&lt;string,mixed&gt;` | ৰেজিষ্ট্ৰেচনৰ মেটাডেটা, যাৰ ভিতৰত status=failed আৰু error_message অন্তৰ্ভুক্ত। |
| $error_message | `string` | ৰেজিষ্ট্ৰাৰৰ পৰা অহা মানুহৰ বাবে পঢ়িবলগীয়া ভুলৰ বাৰ্ণনা। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ফাইলৰ লাইন ১২৫০ ত সংজ্ঞায়িত কৰা হৈছে।
