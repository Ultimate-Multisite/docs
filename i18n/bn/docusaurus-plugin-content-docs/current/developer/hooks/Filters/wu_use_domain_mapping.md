---
id: wu_use_domain_mapping
title: ফিল্টার - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

ম্যাপিং ব্যবহার করা উচিত কিনা তা নির্ধারণ করে।

সাধারণত, আপনি চাইবেন যে শুধুমাত্র সক্রিয় ম্যাপিংগুলো ব্যবহার করা হোক। তবে, যদি আপনি আরও উন্নত লজিক ব্যবহার করতে চান, অথবা নিষ্ক্রিয় ডোমেইনগুলোকেও ম্যাপিং করার অনুমতি দিতে চান, তবে আপনি এখানে ফিল্টার করতে পারেন।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | ম্যাপিংটিকে কি সক্রিয় হিসেবে গণ্য করা হবে? |
| $mapping | `\Domain` | যে ম্যাপিংটি আমরা পরীক্ষা করছি |
| $domain | `string` |  |

### উৎস {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391)-এ লাইন ৩৯১-এ সংজ্ঞায়িত।
