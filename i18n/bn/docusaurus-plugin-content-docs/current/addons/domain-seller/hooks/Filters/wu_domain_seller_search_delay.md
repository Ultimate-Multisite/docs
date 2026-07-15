---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

ডোমেইন সার্চের ডিবাউন্স ডিলে (debounce delay) মিলিসেকেন্ডে ফিল্টার করে।

ধীর সংযোগে এপিআই কল (API calls) কমাতে এই মানটি বাড়িয়ে দিন।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | মিলিসেকেন্ডে ডিবাউন্স ডিলে। ডিফল্ট মান ৫০০। |

### Since {#since}

- 2.1.0
### Source {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) ফাইলে লাইন ৮৫৪-এ সংজ্ঞায়িত।
