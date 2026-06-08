---
id: wu_domain_seller_search_delay
title: ফিল্টাৰ - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

মিলিসেকণ্ডত ডোমেইন অনুসন্ধানৰ ডিবাউন্স (debounce) বিলম্বক ফিল্টাৰ কৰে।

ধীৰ সংযোগত API কল হ্ৰাস কৰিবলৈ এই মানটো বৃদ্ধি কৰক।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | মিলিসেকণ্ডত ডিবাউন্স বিলম্ব। ডিফল্ট মান ৫00। |

### Since

- 2.1.0
### Source

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) ফাইলৰ লাইন ৮৫৪ স্থানত সংজ্ঞায়িত।
